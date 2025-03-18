import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Chip,
  Card,
  CardContent,
  Grid,
  Link,
  Alert,
  Divider
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Timer as TimerIcon,
  School as SchoolIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

import { allBeginnerAboTopics } from '../../constants/aboTopics';
import { allBeginnerNcleTopics } from '../../constants/ncleTopics';
import { beginnerAboLearningPath } from '../../constants/aboTopics';
import { beginnerNcleLearningPath } from '../../constants/ncleTopics';

type TopicProgress = {
  [topicId: string]: {
    started: boolean;
    completed: boolean;
    lastVisited?: Date;
  }
};

const LearningPathComponent: React.FC<{
  examType: 'abo' | 'ncle';
}> = ({ examType }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState<TopicProgress>({});
  
  // Determine which learning path and topics to use based on exam type
  const learningPath = examType === 'abo' ? beginnerAboLearningPath : beginnerNcleLearningPath;
  const allTopics = examType === 'abo' ? allBeginnerAboTopics : allBeginnerNcleTopics;
  
  // Initialize progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(`${examType}Progress`);
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
      
      // Find the first incomplete step to set as active
      const pathProgress = JSON.parse(savedProgress);
      const firstIncompleteIndex = learningPath.findIndex(
        topicId => !pathProgress[topicId]?.completed
      );
      
      if (firstIncompleteIndex !== -1) {
        setActiveStep(firstIncompleteIndex);
      }
    }
  }, [examType, learningPath]);
  
  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(progress).length > 0) {
      localStorage.setItem(`${examType}Progress`, JSON.stringify(progress));
    }
  }, [progress, examType]);

  const handleStart = (topicId: string) => {
    setProgress(prev => ({
      ...prev,
      [topicId]: {
        ...prev[topicId],
        started: true,
        lastVisited: new Date()
      }
    }));
  };

  const handleComplete = (topicId: string) => {
    setProgress(prev => ({
      ...prev,
      [topicId]: {
        ...prev[topicId],
        completed: true,
        lastVisited: new Date()
      }
    }));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your learning progress?')) {
      setActiveStep(0);
      setProgress({});
      localStorage.removeItem(`${examType}Progress`);
    }
  };

  const getTopic = (topicId: string) => {
    return allTopics.find(topic => topic.id === topicId);
  };

  const getCompletedCount = () => {
    return learningPath.filter(topicId => progress[topicId]?.completed).length;
  };
  
  const getProgressPercentage = () => {
    return Math.round((getCompletedCount() / learningPath.length) * 100);
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Beginner Learning Path: {examType.toUpperCase()} Certification
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        <Typography>
          This structured learning path guides you through the essential topics for the {examType.toUpperCase()} exam in an optimal sequence. 
          Complete each topic before moving to the next for the best learning experience.
        </Typography>
      </Alert>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mr: 2 }}>
          Your Progress: {getCompletedCount()} of {learningPath.length} topics completed
        </Typography>
        <Chip 
          label={`${getProgressPercentage()}%`} 
          color={getProgressPercentage() === 100 ? "success" : "primary"} 
          icon={<CheckCircleIcon />}
        />
        
        <Button 
          variant="outlined" 
          color="warning" 
          size="small" 
          onClick={handleReset}
          sx={{ ml: 'auto' }}
        >
          Reset Progress
        </Button>
      </Box>
      
      <Stepper activeStep={activeStep} orientation="vertical">
        {learningPath.map((topicId, index) => {
          const topic = getTopic(topicId);
          if (!topic) return null;
          
          return (
            <Step key={topicId} completed={progress[topicId]?.completed}>
              <StepLabel>
                <Typography variant="subtitle1">
                  {topic.title}
                  {progress[topicId]?.completed && (
                    <CheckCircleIcon color="success" fontSize="small" sx={{ ml: 1 }} />
                  )}
                </Typography>
              </StepLabel>
              <StepContent>
                <Card variant="outlined" sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography color="text.secondary" paragraph>
                      {topic.description}
                    </Typography>
                    
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item>
                        <Chip 
                          icon={<TimerIcon />} 
                          label={`${topic.estimatedTimeMinutes} min`} 
                          size="small" 
                          color="secondary" 
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item>
                        <Chip 
                          icon={<SchoolIcon />} 
                          label="Beginner" 
                          size="small" 
                          color="primary" 
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    
                    <Typography variant="subtitle2" gutterBottom>
                      Key Points:
                    </Typography>
                    <Box component="ul" sx={{ mt: 0, pl: 2 }}>
                      {topic.keyPoints.map((point, idx) => (
                        <li key={idx}>
                          <Typography variant="body2">{point}</Typography>
                        </li>
                      ))}
                    </Box>
                    
                    {topic.relatedTopics.length > 0 && (
                      <>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="subtitle2" gutterBottom>
                          Related Topics:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {topic.relatedTopics.map(relatedId => {
                            const relatedTopic = getTopic(relatedId);
                            return relatedTopic ? (
                              <Chip 
                                key={relatedId}
                                label={relatedTopic.title}
                                size="small"
                                clickable
                                component={RouterLink}
                                to={`/study/${relatedId}`}
                              />
                            ) : null;
                          })}
                        </Box>
                      </>
                    )}
                  </CardContent>
                </Card>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      component={RouterLink}
                      to={`/study/${topicId}`}
                      onClick={() => handleStart(topicId)}
                      endIcon={<ArrowForwardIcon />}
                    >
                      {progress[topicId]?.started ? 'Continue Learning' : 'Start Learning'}
                    </Button>
                    
                    {progress[topicId]?.started && !progress[topicId]?.completed && (
                      <Button
                        variant="outlined"
                        color="success"
                        onClick={() => handleComplete(topicId)}
                      >
                        Mark as Completed
                      </Button>
                    )}
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={handleNext}
                      sx={{ ml: 1 }}
                    >
                      {index === learningPath.length - 1 ? 'Finish' : 'Next Topic'}
                    </Button>
                  </Box>
                </Box>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      
      {activeStep === learningPath.length && (
        <Paper square elevation={0} sx={{ p: 3, mt: 3, bgcolor: 'success.light', color: 'success.contrastText' }}>
          <Typography variant="h6" gutterBottom>
            Congratulations! 🎉
          </Typography>
          <Typography paragraph>
            You've completed the entire beginner learning path for the {examType.toUpperCase()} certification. 
            You're now ready to move on to intermediate topics or start practicing with sample exam questions.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button variant="contained" component={RouterLink} to="/exam-prep">
              Take Practice Exam
            </Button>
            <Button variant="outlined" onClick={handleReset}>
              Start Over
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default LearningPathComponent; 