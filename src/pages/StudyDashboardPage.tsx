import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  Chip,
  Alert,
  LinearProgress,
  CircularProgress,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  BookmarkBorder as BookmarkIcon,
  Timeline as TimelineIcon,
  CheckCircle as CheckCircleIcon,
  School as SchoolIcon,
  MenuBook as MenuBookIcon,
  Quiz as QuizIcon,
  FlashOn as FlashOnIcon,
  Assignment as AssignmentIcon,
  CalendarToday as CalendarTodayIcon,
  Star as StarIcon,
  Create as CreateIcon
} from '@mui/icons-material';

import LearningPathComponent from '../components/study/LearningPathComponent';
import { useTheme } from '../components/ThemeContext';
import { aboExamSections } from '../constants/aboTopics';
import { ncleExamSections } from '../constants/ncleTopics';
import StudyProgressService from '../services/study/StudyProgressService';
import StudyContentService from '../services/study/StudyContentService';
import { studyTopicsByCategory } from '../constants/studyContent';
import { StudyTopic } from '../constants/aboTopics';

// Define types for progress state
interface ProgressState {
  totalTopics: number;
  completedTopics: number;
  progressPercentage: number;
  recentlyViewed: Array<{ id: string; title: string; description: string; }>;
  suggestedTopics: Array<{ id: string; title: string; description: string; }>;
}

const StudyDashboardPage: React.FC = () => {
  const [examType, setExamType] = useState<'abo' | 'ncle'>('abo');
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState<ProgressState>({
    totalTopics: 0,
    completedTopics: 0,
    progressPercentage: 0,
    recentlyViewed: [],
    suggestedTopics: []
  });
  const [availableContent, setAvailableContent] = useState<string[]>([]);
  const { darkMode } = useTheme();

  useEffect(() => {
    // In a real app, this would fetch data from an API
    const loadProgress = () => {
      setLoading(true);
      
      // Get progress data from the service
      const progressData = StudyProgressService.getOverallProgress(examType);
      
      setProgress({
        totalTopics: progressData.totalTopics,
        completedTopics: progressData.completedTopics,
        progressPercentage: progressData.completedTopics > 0 
          ? Math.round((progressData.completedTopics / progressData.totalTopics) * 100) 
          : 0,
        recentlyViewed: progressData.recentlyViewed || [],
        suggestedTopics: progressData.suggestedTopics || []
      });
      
      // Get all available study content
      const topicsWithContent = StudyContentService.getTopicsWithContent();
      setAvailableContent(topicsWithContent);
      
      setLoading(false);
    };
    
    loadProgress();
  }, [examType]);

  const handleExamTypeChange = (event: React.SyntheticEvent, newValue: 'abo' | 'ncle') => {
    setExamType(newValue);
  };

  const getExamSections = () => {
    return examType === 'abo' ? aboExamSections : ncleExamSections;
  };

  // Group content by category for better organization
  const contentByCategory = Object.entries(studyTopicsByCategory).map(([category, topics]) => {
    const availableTopics = topics.filter(topic => availableContent.includes(topic.id));
    return { category, topics: availableTopics };
  }).filter(group => group.topics.length > 0);

  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1');
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom>
        Study Dashboard
      </Typography>
      
      <Typography variant="subtitle1" gutterBottom color="text.secondary">
        Your personalized learning experience for ABO-NCLE certification
      </Typography>
      
      <Divider sx={{ my: 3 }} />
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card 
            variant="outlined" 
            sx={{ 
              height: '100%', 
              bgcolor: darkMode ? 'background.paper' : 'primary.light',
              color: darkMode ? 'text.primary' : 'primary.contrastText' 
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Welcome to Your Study Dashboard
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                This dashboard provides a structured learning path for absolute beginners preparing for the ABO-NCLE certification exams.
              </Typography>
              <Alert severity="info" sx={{ mb: 2 }}>
                {loading ? (
                  'Loading your progress...'
                ) : progress.completedTopics > 0 ? (
                  `You've completed ${progress.completedTopics} of ${progress.totalTopics} topics. Keep going!`
                ) : (
                  'Start your journey by selecting either the ABO or NCLE path below.'
                )}
              </Alert>
              
              {!loading && progress.progressPercentage > 0 && (
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Overall Progress</Typography>
                    <Typography variant="body2">{progress.progressPercentage}%</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={progress.progressPercentage} 
                    sx={{ height: 10, borderRadius: 5 }}
                    color="secondary"
                  />
                </Box>
              )}
              
              <Tabs
                value={examType}
                onChange={handleExamTypeChange}
                variant="fullWidth"
                sx={{ borderBottom: 1, borderColor: 'divider' }}
              >
                <Tab 
                  value="abo" 
                  label="ABO" 
                  icon={<BookmarkIcon />} 
                  iconPosition="start"
                  sx={{ fontWeight: 'bold' }}
                />
                <Tab 
                  value="ncle" 
                  label="NCLE" 
                  icon={<TimelineIcon />} 
                  iconPosition="start"
                  sx={{ fontWeight: 'bold' }}
                />
              </Tabs>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button 
                variant="contained" 
                color="secondary" 
                fullWidth
                component={RouterLink}
                to={`/study/${examType}`}
              >
                Continue {examType.toUpperCase()} Path
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5">
                {examType === 'abo' ? 'American Board of Opticianry' : 'National Contact Lens Examiners'}
              </Typography>
              <Chip 
                label={examType.toUpperCase()} 
                color={examType === 'abo' ? 'primary' : 'secondary'} 
                size="small" 
              />
            </Box>
            <Typography paragraph>
              {examType === 'abo' 
                ? 'The ABO certification focuses on eyeglass dispensing, including optical theory, frame fitting, lens technologies, and measurements.' 
                : 'The NCLE certification focuses on contact lens fitting, including lens materials, eye anatomy, troubleshooting, and patient education.'}
            </Typography>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={6}>
                <Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h3" color="primary">60%</Typography>
                  <Typography variant="body2" color="text.secondary">Pass Rate</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h3" color="primary">125</Typography>
                  <Typography variant="body2" color="text.secondary">Multiple Choice Questions</Typography>
                </Paper>
              </Grid>
            </Grid>
            <Box>
              <Typography variant="subtitle1" gutterBottom>Exam Sections:</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {getExamSections().map(section => (
                  <Chip 
                    key={section.id}
                    label={`${section.title} (${section.weightPercentage}%)`} 
                    component={RouterLink}
                    to={`/study/all-topics`}
                    clickable
                  />
                ))}
              </Box>
              
              <Button 
                variant="outlined" 
                color="primary" 
                component={RouterLink}
                to="/study/all-topics"
                endIcon={<MenuBookIcon />}
              >
                Browse All {examType.toUpperCase()} Topics
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Learning Path Component */}
      <LearningPathComponent examType={examType} />
      
      {/* Recent Activity Section */}
      {!loading && progress.recentlyViewed && progress.recentlyViewed.length > 0 && (
        <Box sx={{ mt: 5, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Recently Viewed Topics
          </Typography>
          <Grid container spacing={2}>
            {progress.recentlyViewed.map((topic: any) => (
              <Grid item xs={12} sm={6} md={4} key={topic.id}>
                <Card variant="outlined">
                  <CardContent sx={{ pb: 1 }}>
                    <Box display="flex" alignItems="center" mb={1}>
                      <Chip 
                        size="small" 
                        label={topic.examType} 
                        color={topic.examType === 'ABO' ? 'primary' : 'secondary'} 
                        sx={{ mr: 1 }} 
                      />
                      <Chip 
                        size="small" 
                        label={topic.difficulty} 
                        color="default" 
                      />
                      {topic.completed && (
                        <CheckCircleIcon color="success" fontSize="small" sx={{ ml: 'auto' }} />
                      )}
                    </Box>
                    
                    <Typography variant="h6" gutterBottom>
                      {topic.title}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Last viewed: {new Date(topic.lastVisited).toLocaleDateString()}
                    </Typography>
                    
                    {topic.progress > 0 && topic.progress < 100 && (
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                          <LinearProgress variant="determinate" value={topic.progress} />
                        </Box>
                        <Box minWidth={35}>
                          <Typography variant="body2" color="text.secondary">{`${Math.round(topic.progress)}%`}</Typography>
                        </Box>
                      </Box>
                    )}
                  </CardContent>
                  <CardActions>
                    <Button 
                      size="small" 
                      component={RouterLink} 
                      to={`/study/${topic.id}`}
                    >
                      {topic.completed ? 'Review' : 'Continue'}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      
      {/* New section: All Study Content */}
      <Box sx={{ mt: 5, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          All Study Content
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Browse all available study content organized by category
        </Typography>
        
        {contentByCategory.map(group => (
          <Box key={group.category} sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
              {formatCategoryName(group.category)}
            </Typography>
            <Grid container spacing={2}>
              {group.topics.map(topic => (
                <Grid item xs={12} sm={6} md={4} key={topic.id}>
                  <Card variant="outlined" sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {topic.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {topic.description}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                        <Chip 
                          label={topic.difficulty} 
                          size="small" 
                          color={
                            topic.difficulty === 'beginner' ? 'success' : 
                            topic.difficulty === 'intermediate' ? 'primary' : 
                            'warning'
                          }
                        />
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button 
                        component={RouterLink} 
                        to={`/study/${topic.id}`} 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                      >
                        Study This Topic
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button 
            component={RouterLink} 
            to="/study/all-topics" 
            variant="outlined" 
            color="primary" 
            startIcon={<MenuBookIcon />}
            size="large"
          >
            View All Topics
          </Button>
        </Box>
      </Box>
      
      {/* Quick Links Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Study Resources
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://placehold.co/600x400/3f51b5/white?text=Practice+Tests"
                alt="Practice Tests"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Practice Tests
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Test your knowledge with sample exam questions modeled after the real ABO-NCLE exams.
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  color="primary" 
                  component={RouterLink}
                  to="/study/exam-prep"
                  endIcon={<QuizIcon />}
                >
                  Take a Test
                </Button>
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://placehold.co/600x400/f50057/white?text=Flashcards"
                alt="Flashcards"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Flashcards
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Review key terms and concepts with interactive flashcards derived from exam content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  color="primary" 
                  component={RouterLink}
                  to="/study/flashcards"
                  endIcon={<FlashOnIcon />}
                >
                  Study Flashcards
                </Button>
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://placehold.co/600x400/009688/white?text=Optical+Calculators"
                alt="Optical Calculators"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Optical Calculators
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Practice with common optical calculations including vertex conversion, prism, and effective power.
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  color="primary" 
                  component={RouterLink}
                  to="/optical-theory?tab=3"
                  endIcon={<CreateIcon />}
                >
                  Use Calculators
                </Button>
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://placehold.co/600x400/ff9800/white?text=3D+Models"
                alt="Interactive Models"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Interactive Models
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore interactive 3D models of the eye, lenses, and optical instruments for better understanding.
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  color="primary" 
                  component={RouterLink}
                  to="/eye-anatomy"
                  endIcon={<StarIcon />}
                >
                  View Models
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
      
      {/* Study Plan Section */}
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Your Study Plan
        </Typography>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <CalendarTodayIcon color="primary" sx={{ mr: 2 }} />
            <Typography variant="h6">
              Weekly Study Schedule
            </Typography>
          </Box>
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Monday: Optical Theory" 
                    secondary="Focus on basic optics and lens properties"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Tuesday: Dispensing" 
                    secondary="Study frame fitting and adjustments"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Wednesday: Practice Tests" 
                    secondary="Take a section-specific quiz"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Thursday: Measurements" 
                    secondary="Learn about PD, seg heights, and more"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Friday: Review Day" 
                    secondary="Review flashcards and challenging topics"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Weekend: Full Practice Exam" 
                    secondary="Take a timed full-length practice test"
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button 
              variant="contained" 
              color="primary"
              component={RouterLink}
              to="/study/all-topics" 
            >
              Start Studying Now
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default StudyDashboardPage; 