/**
 * Interface definitions for the Study Tracking system
 * Used to track user progress through ABO-NCLE study materials
 */

export interface TopicProgress {
  topicId: string;
  completed: boolean;
  quizScore?: number;
  quizCompleted?: boolean;
  timeSpentMinutes: number;
  lastStudiedDate?: string;
  notes?: string;
  progressPercentage?: number;
}

export interface StudySession {
  id: string;
  topicId: string;
  startTime: string;
  endTime?: string;
  duration?: number;
  completed: boolean;
}

export interface StudyGoal {
  id: string;
  description: string;
  targetDate: string;
  completed: boolean;
  topicIds: string[];
}

export interface StudyPlan {
  id: string;
  name: string;
  description: string;
  focusArea: 'ABO' | 'NCLE' | 'Both';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedHours: number;
  topicSequence: string[];
  startDate?: string;
  targetCompletionDate?: string;
  isActive: boolean;
}

export interface StudyStats {
  totalTimeSpentMinutes: number;
  topicsCompleted: number;
  totalTopics: number;
  averageQuizScore?: number;
  weakestTopics: string[];
  strongestTopics: string[];
  streak: number; // consecutive days studied
  lastStudyDate?: string;
}

export interface UserProgress {
  userId: string;
  topicProgress: Record<string, TopicProgress>;
  studySessions: StudySession[];
  studyGoals: StudyGoal[];
  studyPlans: StudyPlan[];
  activeStudyPlanId?: string;
  stats: StudyStats;
  examDate?: string;
  preferredStudyDurationMinutes: number;
  weeklyStudyTargetHours: number;
  recentlyViewedTopics?: string[];
}

// Predefined beginner plans
export const BEGINNER_ABO_PLAN: Omit<StudyPlan, 'id'> = {
  name: 'ABO Beginner Pathway',
  description: 'A structured learning path for absolute beginners preparing for the ABO exam',
  focusArea: 'ABO',
  difficulty: 'beginner',
  estimatedHours: 25,
  topicSequence: [
    'basic-optics',
    'refractive-errors',
    'eye-anatomy',
    'lens-types',
    'lens-materials',
    'lens-coatings',
    'frame-basics',
    'frame-adjustment',
    'pd-measurement',
    'sunglasses-tints',
    'children-eyewear',
    'patient-communication'
  ],
  isActive: false
};

export const BEGINNER_NCLE_PLAN: Omit<StudyPlan, 'id'> = {
  name: 'NCLE Beginner Pathway',
  description: 'A structured learning path for absolute beginners preparing for the NCLE exam',
  focusArea: 'NCLE',
  difficulty: 'beginner',
  estimatedHours: 22,
  topicSequence: [
    'cl-overview',
    'eye-anatomy-cl',
    'contact-lens-design-materials',
    'cl-care',
    'cl-pre-fitting',
    'cl-fitting',
    'cl-fitting-evaluation',
    'contact-lens-education-followup',
    'cl-complications',
    'patient-communication'
  ],
  isActive: false
};

export const COMBINED_BEGINNER_PLAN: Omit<StudyPlan, 'id'> = {
  name: 'Combined ABO-NCLE Beginner Pathway',
  description: 'A comprehensive learning path covering both ABO and NCLE topics for beginners',
  focusArea: 'Both',
  difficulty: 'beginner',
  estimatedHours: 45,
  topicSequence: [
    'basic-optics',
    'refractive-errors',
    'eye-anatomy',
    'lens-types',
    'lens-materials',
    'cl-overview',
    'eye-anatomy-cl',
    'contact-lens-design-materials',
    'frame-basics',
    'frame-adjustment',
    'pd-measurement',
    'cl-care',
    'cl-pre-fitting',
    'lens-coatings',
    'sunglasses-tints',
    'cl-fitting',
    'cl-fitting-evaluation',
    'children-eyewear',
    'contact-lens-education-followup',
    'cl-complications',
    'patient-communication'
  ],
  isActive: false
}; 