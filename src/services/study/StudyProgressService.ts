import { v4 as uuidv4 } from 'uuid';
import { 
  UserProgress, 
  TopicProgress, 
  StudySession, 
  StudyGoal, 
  StudyPlan,
  StudyStats,
  BEGINNER_ABO_PLAN,
  BEGINNER_NCLE_PLAN,
  COMBINED_BEGINNER_PLAN
} from '../../interfaces/StudyTracker';
import { aboExamSections, allBeginnerTopics } from '../../constants/aboTopics';
import { ncleExamSections, allBeginnerNcleTopics } from '../../constants/ncleTopics';
import { StudyTopic as AboStudyTopic } from '../../constants/aboTopics';

// Extended StudyTopic with exam type for our internal use
interface ExtendedStudyTopic extends AboStudyTopic {
  examType: string;
  sectionId: string;
}

const LOCAL_STORAGE_KEY = 'optician_trainer_progress';

/**
 * Service for managing user study progress
 */
class StudyProgressService {
  private defaultProgress: UserProgress = {
    userId: 'default',
    topicProgress: {},
    studySessions: [],
    studyGoals: [],
    studyPlans: [],
    stats: {
      totalTimeSpentMinutes: 0,
      topicsCompleted: 0,
      totalTopics: 0,
      weakestTopics: [],
      strongestTopics: [],
      streak: 0
    },
    preferredStudyDurationMinutes: 30,
    weeklyStudyTargetHours: 5
  };

  /**
   * Initialize user progress with defaults if not exists
   */
  public initializeUserProgress(): UserProgress {
    const existingProgress = this.getUserProgress();
    
    if (existingProgress) {
      return existingProgress;
    }
    
    // Create default plans
    const defaultPlans: StudyPlan[] = [
      { ...BEGINNER_ABO_PLAN, id: uuidv4() },
      { ...BEGINNER_NCLE_PLAN, id: uuidv4() },
      { ...COMBINED_BEGINNER_PLAN, id: uuidv4() }
    ];
    
    // Calculate total topics
    const allTopics = [...allBeginnerTopics, ...allBeginnerNcleTopics];
    const totalTopics = allTopics.length;
    
    const newProgress: UserProgress = {
      ...this.defaultProgress,
      userId: uuidv4(),
      studyPlans: defaultPlans,
      stats: {
        ...this.defaultProgress.stats,
        totalTopics
      }
    };
    
    this.saveUserProgress(newProgress);
    return newProgress;
  }
  
  /**
   * Get user progress from local storage or initialize if not exists
   */
  public getUserProgress(): UserProgress | null {
    try {
      const storedProgress = localStorage.getItem(LOCAL_STORAGE_KEY);
      
      if (!storedProgress) {
        return null;
      }
      
      return JSON.parse(storedProgress);
    } catch (error) {
      console.error('Error getting user progress:', error);
      return null;
    }
  }
  
  /**
   * Save user progress to local storage
   */
  public saveUserProgress(progress: UserProgress): void {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving user progress:', error);
    }
  }
  
  /**
   * Start a study session for a topic
   */
  public startStudySession(topicId: string): StudySession {
    const progress = this.getUserProgress() || this.initializeUserProgress();
    
    const newSession: StudySession = {
      id: uuidv4(),
      topicId,
      startTime: new Date().toISOString(),
      completed: false
    };
    
    progress.studySessions = [newSession, ...progress.studySessions];
    this.saveUserProgress(progress);
    
    return newSession;
  }
  
  /**
   * End a study session
   */
  public endStudySession(sessionId: string): StudySession | null {
    const progress = this.getUserProgress();
    
    if (!progress) {
      return null;
    }
    
    const sessionIndex = progress.studySessions.findIndex(s => s.id === sessionId);
    
    if (sessionIndex === -1) {
      return null;
    }
    
    const session = progress.studySessions[sessionIndex];
    const endTime = new Date().toISOString();
    const startTime = new Date(session.startTime);
    const durationMinutes = Math.round((new Date(endTime).getTime() - startTime.getTime()) / 60000);
    
    const updatedSession: StudySession = {
      ...session,
      endTime,
      duration: durationMinutes,
      completed: true
    };
    
    progress.studySessions[sessionIndex] = updatedSession;
    
    // Update topic progress
    const topicId = updatedSession.topicId;
    const existingTopicProgress = progress.topicProgress[topicId] || {
      topicId,
      completed: false,
      timeSpentMinutes: 0
    };
    
    progress.topicProgress[topicId] = {
      ...existingTopicProgress,
      timeSpentMinutes: existingTopicProgress.timeSpentMinutes + durationMinutes,
      lastStudiedDate: endTime
    };
    
    // Update stats
    progress.stats.totalTimeSpentMinutes += durationMinutes;
    this.updateStudyStreak(progress);
    
    this.saveUserProgress(progress);
    return updatedSession;
  }
  
  /**
   * Mark a topic as completed
   */
  public markTopicCompleted(topicId: string, completed: boolean = true): TopicProgress | null {
    const progress = this.getUserProgress();
    
    if (!progress) {
      return null;
    }
    
    const existingTopicProgress = progress.topicProgress[topicId] || {
      topicId,
      completed: false,
      timeSpentMinutes: 0
    };
    
    const updatedTopicProgress: TopicProgress = {
      ...existingTopicProgress,
      completed
    };
    
    progress.topicProgress[topicId] = updatedTopicProgress;
    
    // Update stats
    if (completed && !existingTopicProgress.completed) {
      progress.stats.topicsCompleted += 1;
    } else if (!completed && existingTopicProgress.completed) {
      progress.stats.topicsCompleted -= 1;
    }
    
    this.saveUserProgress(progress);
    return updatedTopicProgress;
  }
  
  /**
   * Save quiz score for a topic
   */
  public saveQuizScore(topicId: string, score: number): TopicProgress | null {
    const progress = this.getUserProgress();
    
    if (!progress) {
      return null;
    }
    
    const existingTopicProgress = progress.topicProgress[topicId] || {
      topicId,
      completed: false,
      timeSpentMinutes: 0
    };
    
    const updatedTopicProgress: TopicProgress = {
      ...existingTopicProgress,
      quizScore: score
    };
    
    progress.topicProgress[topicId] = updatedTopicProgress;
    
    // Automatically mark as completed if score is high enough
    if (score >= 80 && !existingTopicProgress.completed) {
      updatedTopicProgress.completed = true;
      progress.stats.topicsCompleted += 1;
    }
    
    // Update average score and weak/strong topics
    this.updateTopicStrengths(progress);
    
    this.saveUserProgress(progress);
    return updatedTopicProgress;
  }
  
  /**
   * Update the study streak counter
   */
  private updateStudyStreak(progress: UserProgress): void {
    const today = new Date().toISOString().split('T')[0];
    const lastStudyDate = progress.stats.lastStudyDate;
    
    if (!lastStudyDate) {
      progress.stats.streak = 1;
      progress.stats.lastStudyDate = today;
      return;
    }
    
    const lastDate = lastStudyDate.split('T')[0];
    
    if (lastDate === today) {
      // Already studied today, nothing to update
      return;
    }
    
    // Check if the last study date was yesterday
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    if (lastDate === yesterdayStr) {
      // Studied yesterday, increment streak
      progress.stats.streak += 1;
    } else {
      // Streak broken
      progress.stats.streak = 1;
    }
    
    progress.stats.lastStudyDate = today;
  }
  
  /**
   * Update weak and strong topics based on quiz scores
   */
  private updateTopicStrengths(progress: UserProgress): void {
    const topicsWithScores = Object.values(progress.topicProgress)
      .filter(topic => topic.quizScore !== undefined)
      .sort((a, b) => (a.quizScore || 0) - (b.quizScore || 0));
    
    if (topicsWithScores.length === 0) {
      return;
    }
    
    // Calculate average score
    const totalScore = topicsWithScores.reduce((sum, topic) => sum + (topic.quizScore || 0), 0);
    progress.stats.averageQuizScore = Math.round(totalScore / topicsWithScores.length);
    
    // Get weakest and strongest topics (up to 3 each)
    progress.stats.weakestTopics = topicsWithScores
      .slice(0, Math.min(3, topicsWithScores.length))
      .map(topic => topic.topicId);
    
    progress.stats.strongestTopics = topicsWithScores
      .slice(-Math.min(3, topicsWithScores.length))
      .reverse()
      .map(topic => topic.topicId);
  }
  
  /**
   * Create a study goal
   */
  public createStudyGoal(description: string, targetDate: string, topicIds: string[]): StudyGoal {
    const progress = this.getUserProgress() || this.initializeUserProgress();
    
    const newGoal: StudyGoal = {
      id: uuidv4(),
      description,
      targetDate,
      completed: false,
      topicIds
    };
    
    progress.studyGoals = [newGoal, ...progress.studyGoals];
    this.saveUserProgress(progress);
    
    return newGoal;
  }
  
  /**
   * Activate a study plan
   */
  public activateStudyPlan(planId: string): StudyPlan | null {
    const progress = this.getUserProgress();
    
    if (!progress) {
      return null;
    }
    
    // Deactivate all plans first
    progress.studyPlans = progress.studyPlans.map(plan => ({
      ...plan,
      isActive: false
    }));
    
    // Find and activate the selected plan
    const planIndex = progress.studyPlans.findIndex(p => p.id === planId);
    
    if (planIndex === -1) {
      return null;
    }
    
    progress.studyPlans[planIndex].isActive = true;
    progress.studyPlans[planIndex].startDate = new Date().toISOString();
    progress.activeStudyPlanId = planId;
    
    this.saveUserProgress(progress);
    return progress.studyPlans[planIndex];
  }
  
  /**
   * Get the active study plan
   */
  public getActiveStudyPlan(): StudyPlan | null {
    const progress = this.getUserProgress();
    
    if (!progress || !progress.activeStudyPlanId) {
      return null;
    }
    
    return progress.studyPlans.find(p => p.id === progress.activeStudyPlanId) || null;
  }
  
  /**
   * Get all ABO-NCLE topics with progress information
   */
  public getAllTopicsWithProgress(): { topic: any, progress: TopicProgress | null }[] {
    const progress = this.getUserProgress() || this.initializeUserProgress();
    
    // Combine all topics from ABO and NCLE
    const aboTopics = aboExamSections.flatMap(section => 
      section.topics.map(topic => ({ ...topic, examType: 'ABO', sectionId: section.id }))
    );
    
    const ncleTopics = ncleExamSections.flatMap(section => 
      section.topics.map(topic => ({ ...topic, examType: 'NCLE', sectionId: section.id }))
    );
    
    const allTopics = [...aboTopics, ...ncleTopics];
    
    return allTopics.map(topic => ({
      topic,
      progress: progress.topicProgress[topic.id] || null
    }));
  }
  
  /**
   * Get all beginner topics with progress
   */
  public getBeginnerTopicsWithProgress(): { topic: any, progress: TopicProgress | null }[] {
    return this.getAllTopicsWithProgress()
      .filter(item => item.topic.difficulty === 'beginner');
  }
  
  /**
   * Get topics for a specific study plan with progress
   */
  public getPlanTopicsWithProgress(planId: string): { topic: any, progress: TopicProgress | null }[] | null {
    const progress = this.getUserProgress();
    
    if (!progress) {
      return null;
    }
    
    const plan = progress.studyPlans.find(p => p.id === planId);
    
    if (!plan) {
      return null;
    }
    
    const allTopicsWithProgress = this.getAllTopicsWithProgress();
    
    return plan.topicSequence
      .map(topicId => allTopicsWithProgress.find(item => item.topic.id === topicId))
      .filter(item => item !== undefined) as { topic: any, progress: TopicProgress | null }[];
  }

  /**
   * Get overall progress stats for a specific exam type
   */
  public getOverallProgress(examType: 'abo' | 'ncle'): {
    totalTopics: number;
    completedTopics: number;
    recentlyViewed: any[];
    suggestedTopics: any[];
  } {
    const progress = this.getUserProgress() || this.initializeUserProgress();
    
    // Get all topics for the specified exam type
    const allTopics = examType === 'abo' 
      ? aboExamSections.flatMap(section => 
          section.topics.map(topic => ({ ...topic, examType: 'ABO', sectionId: section.id }))
        )
      : ncleExamSections.flatMap(section => 
          section.topics.map(topic => ({ ...topic, examType: 'NCLE', sectionId: section.id }))
        );
    
    // Count total and completed topics
    const totalTopics = allTopics.length;
    let completedTopics = 0;
    
    // Get recently viewed topics (using timestamp from study sessions and topic progress)
    const recentlyViewed: any[] = [];
    const suggestedTopics: any[] = [];
    
    allTopics.forEach(topic => {
      const topicProgress = progress.topicProgress[topic.id];
      
      // Count completed topics
      if (topicProgress?.completed) {
        completedTopics++;
      }
      
      // Add progress information to topic
      const topicWithProgress = {
        ...topic,
        completed: topicProgress?.completed || false,
        timeSpentMinutes: topicProgress?.timeSpentMinutes || 0,
        lastVisited: topicProgress?.lastStudiedDate || null,
        progress: topicProgress?.timeSpentMinutes 
          ? Math.min(Math.round((topicProgress.timeSpentMinutes / topic.estimatedTimeMinutes) * 100), 100) 
          : 0
      };
      
      // Add to recently viewed if it has been studied
      if (topicProgress?.lastStudiedDate) {
        recentlyViewed.push(topicWithProgress);
      }
      
      // Add to suggested topics if not completed
      if (!topicProgress?.completed) {
        suggestedTopics.push(topicWithProgress);
      }
    });
    
    // Sort recently viewed by date (most recent first)
    recentlyViewed.sort((a, b) => {
      const dateA = a.lastVisited ? new Date(a.lastVisited).getTime() : 0;
      const dateB = b.lastVisited ? new Date(b.lastVisited).getTime() : 0;
      return dateB - dateA;
    });
    
    // Limit to 6 most recent
    const limitedRecentlyViewed = recentlyViewed.slice(0, 6);
    
    // For suggested topics, prioritize those that are partially completed
    suggestedTopics.sort((a, b) => b.progress - a.progress);
    
    // Limit to 6 suggestions
    const limitedSuggestions = suggestedTopics.slice(0, 6);
    
    return {
      totalTopics,
      completedTopics,
      recentlyViewed: limitedRecentlyViewed,
      suggestedTopics: limitedSuggestions
    };
  }

  /**
   * Get a topic by its ID
   * @param topicId The ID of the topic to retrieve
   * @param examType Optional exam type filter ('ABO' or 'NCLE')
   * @returns The topic if found, null otherwise
   */
  getTopicById(topicId: string, examType?: string): ExtendedStudyTopic | null {
    // Check ABO topics
    for (const section of aboExamSections) {
      const topic = section.topics.find(t => t.id === topicId);
      if (topic && (!examType || examType === 'ABO')) {
        return {
          ...topic,
          examType: 'ABO',
          sectionId: section.id
        };
      }
    }
    
    // Check NCLE topics
    for (const section of ncleExamSections) {
      const topic = section.topics.find(t => t.id === topicId);
      if (topic && (!examType || examType === 'NCLE')) {
        return {
          ...topic,
          examType: 'NCLE',
          sectionId: section.id
        };
      }
    }
    
    return null;
  }

  /**
   * Get progress for a specific topic
   * @param topicId The ID of the topic to get progress for
   * @returns Topic progress object or null if none exists
   */
  getTopicProgress(topicId: string): TopicProgress | null {
    const tracker = this.getUserProgress() || this.initializeUserProgress();
    return tracker.topicProgress[topicId] || null;
  }

  /**
   * Track that a topic was viewed
   * @param topicId The ID of the topic that was viewed
   */
  trackTopicViewed(topicId: string): void {
    const tracker = this.getUserProgress() || this.initializeUserProgress();
    
    // Initialize topic progress if it doesn't exist
    if (!tracker.topicProgress[topicId]) {
      tracker.topicProgress[topicId] = {
        topicId,
        timeSpentMinutes: 0,
        completed: false,
        progressPercentage: 0,
        quizScore: 0,
        quizCompleted: false
      };
    }
    
    // Add to recently viewed (remove if already exists)
    const recentlyViewed = tracker.recentlyViewedTopics || [];
    const filteredRecent = recentlyViewed.filter((id: string) => id !== topicId);
    
    // Add to front of recently viewed array
    filteredRecent.unshift(topicId);
    
    // Keep only the most recent 5
    tracker.recentlyViewedTopics = filteredRecent.slice(0, 5);
    
    // Save changes
    this.saveUserProgress(tracker);
  }
}

export default new StudyProgressService(); 