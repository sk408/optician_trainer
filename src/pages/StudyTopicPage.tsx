import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Breadcrumbs,
  Tabs,
  Tab,
  Chip,
  Grid,
  Divider,
  Card,
  CardContent,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert
} from '@mui/material';
import {
  School as SchoolIcon,
  CheckCircle as CheckCircleIcon,
  Timer as TimerIcon,
  Home as HomeIcon,
  NavigateNext as NextIcon,
  MenuBook as BookIcon,
  Quiz as QuizIcon
} from '@mui/icons-material';
import StudyProgressService from '../services/study/StudyProgressService';
import StudyContentService from '../services/study/StudyContentService';
import { QuizQuestion } from '../components/quiz/QuizComponent';
import QuizComponent from '../components/quiz/QuizComponent';
import { aboExamSections, StudyTopic } from '../constants/aboTopics';
import { ncleExamSections } from '../constants/ncleTopics';
import StudyContentRenderer from '../components/study/StudyContentRenderer';
import { TopicStudyContent } from '../interfaces/StudyContent';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`topic-tabpanel-${index}`}
      aria-labelledby={`topic-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

// Define an extended StudyTopic that includes exam type
interface ExtendedStudyTopic extends StudyTopic {
  examType: string;
  sectionId: string;
  requiredForCertification?: boolean;
}

// Generate quiz questions based on the topic and study content
const generateQuizQuestions = (topic: ExtendedStudyTopic | StudyTopic, studyContent?: TopicStudyContent): QuizQuestion[] => {
  if (studyContent) {
    // Extract key concepts from study content to create better questions
    const questions: QuizQuestion[] = [];
    
    // Question about the topic description
    questions.push({
      id: `${topic.id}-q1`,
      question: `Which of the following best describes ${topic.title}?`,
      options: [
        topic.description,
        `The opposite of ${topic.title}`,
        `An advanced variation of ${topic.title}`,
        `A historical perspective on ${topic.title}`
      ],
      correctAnswer: 0,
      explanation: `${topic.description} is the correct definition.`
    });
    
    // Questions from study content sections
    if (studyContent.sections.length > 0) {
      const mainSections = studyContent.sections.filter(section => 
        section.type === 'main' || section.type === 'introduction'
      );
      
      if (mainSections.length > 0) {
        // Get definitions to create questions
        const definitions = mainSections.flatMap(section => 
          section.content.filter(element => element.type === 'definition')
        );
        
        if (definitions.length > 0) {
          // Create questions from definitions
          definitions.slice(0, 2).forEach((def, idx) => {
            const term = def.content.term;
            const definition = def.content.definition;
            
            questions.push({
              id: `${topic.id}-def-${idx}`,
              question: `What is the correct definition of ${term}?`,
              options: [
                definition,
                `The opposite of ${term}`,
                `A process unrelated to ${term}`,
                `A historical use of ${term}`
              ],
              correctAnswer: 0,
              explanation: `The correct definition of ${term} is: ${definition}`
            });
          });
        }
        
        // Get key points from paragraphs
        const keyParagraphs = mainSections.flatMap(section => 
          section.content.filter(element => 
            element.type === 'paragraph' && element.content.highlight
          )
        );
        
        if (keyParagraphs.length > 0) {
          keyParagraphs.slice(0, 2).forEach((para, idx) => {
            const text = para.content.text;
            
            questions.push({
              id: `${topic.id}-key-${idx}`,
              question: 'Which of the following is a key concept for this topic?',
              options: [
                text,
                'An unrelated concept',
                'A concept from a different field',
                'A commonly misunderstood idea'
              ],
              correctAnswer: 0,
              explanation: `"${text}" is indeed a key concept.`
            });
          });
        }
      }
    }
    
    // Add at least one question about study time if we don't have enough questions
    if (questions.length < 5) {
      questions.push({
        id: `${topic.id}-time`,
        question: `What is the estimated time to study ${topic.title}?`,
        options: [
          '10 minutes',
          '20 minutes',
          `${topic.estimatedTimeMinutes} minutes`,
          '60 minutes'
        ],
        correctAnswer: 2,
        explanation: `The recommended study time is ${topic.estimatedTimeMinutes} minutes.`
      });
    }
    
    // Add a question about related topics if available
    if (topic.relatedTopics.length > 0) {
      questions.push({
        id: `${topic.id}-related`,
        question: 'Which of these statements is true?',
        options: [
          'This is an advanced topic not suitable for beginners',
          `This topic has no relation to other topics`,
          `This topic is related to ${topic.relatedTopics[0] || 'other topics'}`,
          'This topic is not part of the ABO or NCLE exam'
        ],
        correctAnswer: 2,
        explanation: `This topic is indeed related to ${topic.relatedTopics[0] || 'other topics'}.`
      });
    }
    
    // Return only 5 questions maximum
    return questions.slice(0, 5);
  }
  
  // Fallback to default questions if no study content
  return [
    {
      id: `${topic.id}-q1`,
      question: `Which of the following best describes ${topic.title}?`,
      options: [
        topic.description,
        `The opposite of ${topic.title}`,
        `An advanced variation of ${topic.title}`,
        `A historical perspective on ${topic.title}`
      ],
      correctAnswer: 0,
      explanation: `${topic.description} is the correct definition.`
    },
    {
      id: `${topic.id}-q2`,
      question: `Which of these is a key point related to ${topic.title}?`,
      options: [
        'A completely unrelated concept',
        topic.keyPoints[0] || 'Key point 1',
        'Something that is incorrect',
        'A tangentially related idea'
      ],
      correctAnswer: 1,
      explanation: `${topic.keyPoints[0]} is indeed a key point for this topic.`
    },
    {
      id: `${topic.id}-q3`,
      question: `What is the estimated time to study ${topic.title}?`,
      options: [
        '10 minutes',
        '20 minutes',
        `${topic.estimatedTimeMinutes} minutes`,
        '60 minutes'
      ],
      correctAnswer: 2,
      explanation: `The recommended study time is ${topic.estimatedTimeMinutes} minutes.`
    },
    {
      id: `${topic.id}-q4`,
      question: 'Which of these statements is true?',
      options: [
        'This is an advanced topic not suitable for beginners',
        `This topic has no relation to other topics`,
        `This topic is related to ${topic.relatedTopics[0] || 'other topics'}`,
        'This topic is not part of the ABO or NCLE exam'
      ],
      correctAnswer: 2,
      explanation: `This topic is indeed related to ${topic.relatedTopics[0] || 'other topics'}.`
    },
    {
      id: `${topic.id}-q5`,
      question: 'Which of the following is NOT a key point for this topic?',
      options: [
        topic.keyPoints[0] || 'Key point 1',
        topic.keyPoints[1] || 'Key point 2',
        'A made-up point that is incorrect',
        topic.keyPoints[2] || 'Key point 3'
      ],
      correctAnswer: 2,
      explanation: 'The third option is made up and not actually a key point for this topic.'
    }
  ];
};

const StudyTopicPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [topic, setTopic] = useState<ExtendedStudyTopic | null>(null);
  const [studyContent, setStudyContent] = useState<TopicStudyContent | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (topicId) {
      loadTopic();
    }
  }, [topicId]);

  const loadTopic = () => {
    if (!topicId) return;
    
    setLoading(true);
    
    // Get the topic content
    const content = StudyContentService.getStudyContent(topicId);
    
    // Try to find the topic in ABO topics first
    let foundTopic = StudyProgressService.getTopicById(topicId, 'ABO');
    
    // If not found in ABO topics, check NCLE topics
    if (!foundTopic) {
      foundTopic = StudyProgressService.getTopicById(topicId, 'NCLE');
    }
    
    // If still not found, but we have content, create a placeholder topic from the content
    if (!foundTopic && content) {
      foundTopic = {
        id: topicId,
        title: content.title,
        description: content.introduction,
        difficulty: 'beginner',
        estimatedTimeMinutes: 45,
        keyPoints: content.objectives || [],
        relatedTopics: [],
        examType: 'ABO', // Default to ABO
        sectionId: 'other'
      } as ExtendedStudyTopic;
    }
    
    // If we have found a topic or created a placeholder
    if (foundTopic) {
      setTopic(foundTopic);
      
      // If there's study content for this topic, use it
      if (content) {
        setStudyContent(content);
        
        // Generate quiz questions based on the content
        const questions = generateQuizQuestions(foundTopic, content);
        setQuizQuestions(questions);
      } else {
        // If no content, try to create a fallback
        const fallbackContent = StudyContentService.createFallbackContent(topicId, foundTopic);
        setStudyContent(fallbackContent);
        
        // Generate quiz questions based on the topic
        const questions = generateQuizQuestions(foundTopic);
        setQuizQuestions(questions);
      }
      
      // Get progress for this topic
      const topicProgress = StudyProgressService.getTopicProgress(topicId);
      if (topicProgress) {
        setProgress(topicProgress.progressPercentage || 0);
        setQuizCompleted(topicProgress.quizCompleted || false);
        setQuizScore(topicProgress.quizScore || 0);
      }
    } else {
      // Topic not found - redirect to all topics page
      navigate('/study/all-topics');
      return;
    }
    
    setLoading(false);
    
    // Track that this topic was viewed
    StudyProgressService.trackTopicViewed(topicId);
  };
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  
  const handleQuizComplete = (score: number) => {
    // Mark as completed if score is good
    if (score >= 80) {
      StudyProgressService.markTopicCompleted(topicId || '', true);
    }
  };
  
  if (loading || !topic) {
    return (
      <Container maxWidth={false}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }
  
  return (
    <Container maxWidth={false} sx={{ py: 4 }}>
      <Box mb={3}>
        <Breadcrumbs separator={<NextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link to="/study/all-topics" style={{ textDecoration: 'none', color: 'inherit' }}>
            Study Topics
          </Link>
          <Typography color="text.primary">{topic.title}</Typography>
        </Breadcrumbs>
      </Box>
      
      <Paper sx={{ p: 3, mb: 4 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <SchoolIcon fontSize="large" color={topic.examType === 'ABO' ? 'primary' : 'secondary'} sx={{ mr: 2 }} />
          <Typography variant="h4">{topic.title}</Typography>
        </Box>
        
        <Box mb={2} display="flex" flexWrap="wrap" gap={1}>
          <Chip 
            label={topic.examType} 
            color={topic.examType === 'ABO' ? 'primary' : 'secondary'} 
            variant="outlined" 
          />
          <Chip 
            icon={<TimerIcon />} 
            label={`${topic.estimatedTimeMinutes} min`} 
          />
          <Chip label={topic.difficulty} variant="outlined" />
        </Box>
        
        <Typography variant="subtitle1" paragraph>
          {topic.description}
        </Typography>
      </Paper>
      
      <Box mb={4}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange} 
          aria-label="topic tabs"
          variant="fullWidth"
        >
          <Tab 
            icon={<BookIcon />} 
            label="Study Content" 
            id="topic-tab-0" 
            aria-controls="topic-tabpanel-0" 
          />
          <Tab 
            icon={<QuizIcon />} 
            label="Practice Quiz" 
            id="topic-tab-1" 
            aria-controls="topic-tabpanel-1" 
          />
        </Tabs>
        
        <TabPanel value={activeTab} index={0}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Key Concepts
            </Typography>
            
            <List>
              {topic.keyPoints.map((point, index) => (
                <ListItem key={index} alignItems="flex-start">
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={point} />
                </ListItem>
              ))}
            </List>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="h5" gutterBottom>
              Study Content
            </Typography>
            
            {studyContent && (
              <StudyContentRenderer content={studyContent} />
            )}
            
            <Box mt={3} display="flex" justifyContent="center">
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => setActiveTab(1)}
                startIcon={<QuizIcon />}
              >
                Take Quiz
              </Button>
            </Box>
          </Paper>
        </TabPanel>
        
        <TabPanel value={activeTab} index={1}>
          <QuizComponent 
            topicId={topicId || ''} 
            questions={quizQuestions}
            onComplete={handleQuizComplete}
          />
        </TabPanel>
      </Box>
    </Container>
  );
};

export default StudyTopicPage; 