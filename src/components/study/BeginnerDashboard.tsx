import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Button, 
  Card, 
  CardContent, 
  CardActions,
  CircularProgress,
  Divider,
  Chip,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  LinearProgress
} from '@mui/material';
import {
  School as SchoolIcon,
  CheckCircle as CheckCircleIcon,
  Timer as TimerIcon,
  TrendingUp as TrendingUpIcon,
  LocalLibrary as LibraryIcon,
  FormatListBulleted as ListIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import StudyProgressService from '../../services/study/StudyProgressService';
import { StudyPlan, UserProgress, TopicProgress } from '../../interfaces/StudyTracker';
import { formatDistanceToNow } from 'date-fns';

const BeginnerDashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [activePlan, setActivePlan] = useState<StudyPlan | null>(null);
  const [planTopics, setPlanTopics] = useState<{ topic: any, progress: TopicProgress | null }[]>([]);
  
  useEffect(() => {
    const initProgress = async () => {
      setLoading(true);
      // Initialize progress
      const userProgress = StudyProgressService.getUserProgress() || 
        StudyProgressService.initializeUserProgress();
      
      setProgress(userProgress);
      
      // Get active plan
      const plan = StudyProgressService.getActiveStudyPlan();
      setActivePlan(plan);
      
      // Get topics for active plan
      if (plan) {
        const topics = StudyProgressService.getPlanTopicsWithProgress(plan.id);
        if (topics) {
          setPlanTopics(topics);
        }
      } else {
        // If no active plan, show beginner topics
        const beginnerTopics = StudyProgressService.getBeginnerTopicsWithProgress();
        setPlanTopics(beginnerTopics);
      }
      
      setLoading(false);
    };
    
    initProgress();
  }, []);
  
  const activatePlan = (planId: string) => {
    const activated = StudyProgressService.activateStudyPlan(planId);
    if (activated) {
      setActivePlan(activated);
      const topics = StudyProgressService.getPlanTopicsWithProgress(planId);
      if (topics) {
        setPlanTopics(topics);
      }
      
      // Update progress state
      const userProgress = StudyProgressService.getUserProgress();
      if (userProgress) {
        setProgress(userProgress);
      }
    }
  };
  
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }
  
  const completedTopicsCount = planTopics.filter(item => item.progress?.completed).length;
  const completionPercentage = planTopics.length > 0 
    ? Math.round((completedTopicsCount / planTopics.length) * 100) 
    : 0;
  
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Beginner Study Dashboard
      </Typography>
      
      {!activePlan && (
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Select a Study Plan
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
            Choose a structured learning path to prepare for your certification exam:
          </Typography>
          
          <Grid container spacing={3}>
            {progress?.studyPlans.map(plan => (
              <Grid item xs={12} md={4} key={plan.id}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {plan.name}
                    </Typography>
                    <Chip 
                      label={plan.focusArea} 
                      color={plan.focusArea === 'ABO' ? 'primary' : plan.focusArea === 'NCLE' ? 'secondary' : 'default'} 
                      size="small" 
                      sx={{ mt: 1, mr: 1 }} 
                    />
                    <Chip 
                      label={`${plan.estimatedHours} hours`} 
                      size="small" 
                      sx={{ mt: 1 }} 
                    />
                    <Typography color="text.secondary" sx={{ mt: 2 }}>
                      {plan.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                      variant="contained" 
                      onClick={() => activatePlan(plan.id)}
                      fullWidth
                    >
                      Start This Plan
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}
      
      {activePlan && (
        <>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography variant="h5" gutterBottom>
                  {activePlan.name}
                </Typography>
                <Typography variant="body1" paragraph>
                  {activePlan.description}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Overall Progress
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={completionPercentage} 
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                  <Typography variant="body2" align="right" sx={{ mt: 0.5 }}>
                    {completedTopicsCount} of {planTopics.length} topics completed ({completionPercentage}%)
                  </Typography>
                </Box>
                
                <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                  <Chip icon={<SchoolIcon />} label={activePlan.focusArea} color="primary" />
                  <Chip icon={<TimerIcon />} label={`Est. ${activePlan.estimatedHours} hours`} />
                  {activePlan.startDate && (
                    <Chip 
                      icon={<TrendingUpIcon />} 
                      label={`Started ${formatDistanceToNow(new Date(activePlan.startDate), { addSuffix: true })}`}
                    />
                  )}
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Paper elevation={0} sx={{ bgcolor: 'background.default', p: 2, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    <LibraryIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Study Stats
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  
                  <Stack spacing={1}>
                    <Typography variant="body2">
                      <strong>Total Time Spent:</strong> {Math.round(progress?.stats.totalTimeSpentMinutes || 0)} minutes
                    </Typography>
                    <Typography variant="body2">
                      <strong>Current Streak:</strong> {progress?.stats.streak || 0} days
                    </Typography>
                    {progress?.stats.averageQuizScore && (
                      <Typography variant="body2">
                        <strong>Average Quiz Score:</strong> {progress.stats.averageQuizScore}%
                      </Typography>
                    )}
                  </Stack>
                  
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    onClick={() => activatePlan('')}
                    sx={{ mt: 2 }}
                  >
                    Switch Plan
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
          
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <ListIcon sx={{ mr: 1 }} />
              Next Topics to Study
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Follow this recommended sequence for best results:
            </Typography>
            
            <List sx={{ width: '100%' }}>
              {planTopics.slice(0, 5).map((item, index) => (
                <ListItem 
                  key={item.topic.id}
                  secondaryAction={
                    <Button 
                      variant="contained"
                      component={Link}
                      to={`/study/${item.topic.id}`}
                      color={item.progress?.completed ? "success" : "primary"}
                      startIcon={item.progress?.completed ? <CheckCircleIcon /> : undefined}
                    >
                      {item.progress?.completed ? "Review" : "Start"}
                    </Button>
                  }
                  sx={{ 
                    bgcolor: index % 2 === 0 ? 'background.default' : 'transparent',
                    borderRadius: 1,
                    mb: 1,
                    opacity: item.progress?.completed ? 0.7 : 1
                  }}
                >
                  <ListItemIcon>
                    {item.progress?.completed ? (
                      <CheckCircleIcon color="success" />
                    ) : (
                      <SchoolIcon color="primary" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.topic.title}
                    secondary={
                      <>
                        {item.topic.description}
                        <Box sx={{ mt: 0.5 }}>
                          <Chip 
                            label={`${item.topic.estimatedTimeMinutes} min`} 
                            size="small" 
                            sx={{ mr: 1 }} 
                          />
                          <Chip 
                            label={item.topic.examType} 
                            size="small"
                            color={item.topic.examType === 'ABO' ? 'primary' : 'secondary'}
                            variant="outlined"
                          />
                        </Box>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
            
            <Button 
              variant="outlined" 
              fullWidth 
              component={Link}
              to="/study/all-topics"
              sx={{ mt: 3 }}
            >
              View All Topics
            </Button>
          </Paper>
        </>
      )}
    </Box>
  );
};

export default BeginnerDashboard; 