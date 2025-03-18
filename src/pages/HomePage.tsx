import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Chip
} from '@mui/material';
import { 
  School as SchoolIcon,
  Person as PersonIcon,
  RemoveRedEye as EyeIcon,
  ContactPage as ContactLensIcon,
  Build as AdjustmentIcon,
  Straighten as MeasurementIcon,
  Calculate as CalculatorIcon,
  MenuBook as StudyIcon,
  LightbulbOutlined as TipsIcon,
  StarOutlined as BeginnerIcon,
  Speed as IntermediateIcon,
  Psychology as AdvancedIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';

const HomePage: React.FC = () => {
  const { darkMode } = useTheme();
  
  // Learning path steps for beginners
  const learningPath = [
    {
      label: 'Start with the Basics',
      description: 'Begin with fundamental optical concepts and terminology to build a solid foundation.',
      path: '/dispensing-basics',
      buttonText: 'Start Basic Training'
    },
    {
      label: 'Understand Eye Anatomy',
      description: 'Learn how the eye works and how different conditions affect vision.',
      path: '/eye-anatomy',
      buttonText: 'Explore Eye Anatomy'
    },
    {
      label: 'Practice with Simple Cases',
      description: 'Apply your knowledge to straightforward patient scenarios.',
      path: '/patients',
      buttonText: 'Try Simple Cases'
    },
    {
      label: 'Master Frame Fitting',
      description: 'Learn the essentials of proper frame selection and adjustment.',
      path: '/dispensing-basics',
      buttonText: 'Learn Frame Fitting'
    }
  ];
  
  // Study resources for different levels
  const studyResources = [
    {
      title: 'Beginner Essentials',
      description: 'Foundational knowledge every optician needs to know before starting practice.',
      icon: <BeginnerIcon />,
      path: '/study/all-topics',
      level: 'beginner',
      color: '#4caf50'
    },
    {
      title: 'Interactive Tutorials',
      description: 'Guided walkthroughs of common procedures with step-by-step instructions.',
      icon: <SchoolIcon />,
      path: '/dispensing-basics',
      level: 'beginner',
      color: '#3f51b5'
    },
    {
      title: 'Optical Measurements',
      description: 'Learn to take and interpret essential measurements with precision.',
      icon: <MeasurementIcon />,
      path: '/optical-theory',
      level: 'intermediate',
      color: '#ff9800'
    },
    {
      title: 'Simple Case Studies',
      description: 'Practice with common patient scenarios designed for newcomers.',
      icon: <PersonIcon />,
      path: '/patients',
      level: 'beginner',
      color: '#f50057'
    }
  ];
  
  // Quick learning modules
  const quickModules = [
    {
      title: 'Understanding Prescriptions',
      description: 'Learn to read and interpret optical prescriptions confidently.',
      icon: <StudyIcon />,
      path: '/study/prescriptions',
      duration: '20 min'
    },
    {
      title: 'Basic Frame Adjustments',
      description: 'Master essential adjustments for proper fit and comfort.',
      icon: <AdjustmentIcon />,
      path: '/dispensing-basics',
      duration: '15 min'
    },
    {
      title: 'Measuring PD',
      description: 'Learn the correct technique for measuring pupillary distance.',
      icon: <MeasurementIcon />,
      path: '/optical-theory',
      duration: '10 min'
    },
    {
      title: 'Eye Anatomy Basics',
      description: 'Understand fundamental structures of the eye and their functions.',
      icon: <EyeIcon />,
      path: '/eye-anatomy',
      duration: '25 min'
    }
  ];
  
  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          py: 8, 
          backgroundColor: darkMode ? 'background.paper' : '#f5f9ff',
          borderBottom: '1px solid',
          borderColor: darkMode ? 'divider' : 'rgba(0, 0, 0, 0.08)'
        }}
      >
        <Container maxWidth={false}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textAlign: 'center',
              width: '100%',
              mb: 3
            }}
          >
            Optician Trainer for Beginners
          </Typography>
          <Typography
            variant="h5"
            color="textSecondary"
            paragraph
            sx={{ 
              mb: 4,
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Your step-by-step guide to mastering optician skills from the ground up — no prior experience required
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mb: 6 }}>
            <Button 
              variant="contained" 
              color="primary" 
              component={RouterLink} 
              to="/dispensing-basics"
              size="large"
              startIcon={<SchoolIcon />}
            >
              Begin Learning Path
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              component={RouterLink} 
              to="/dispensing-basics"
              size="large"
              startIcon={<SchoolIcon />}
            >
              Begin Learning Path
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              component={RouterLink} 
              to="/study/all-topics"
              size="large"
              startIcon={<StudyIcon />}
            >
              Browse Study Materials
            </Button>
          </Box>
          
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8} lg={6}>
              <Paper
                elevation={4}
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  p: 3,
                  backgroundColor: darkMode ? 'rgba(66, 66, 66, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  mx: 'auto',
                  textAlign: 'center'
                }}
              >
                <TipsIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" component="h2" gutterBottom>
                  Perfect for Complete Beginners
                </Typography>
                <Typography variant="body1" paragraph>
                  Whether you're preparing for an optician career, studying for certification exams, or just started your first job, we'll guide you through everything you need to know.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                  "I went from knowing nothing about optics to confidently fitting frames in just weeks." — Recent Graduate
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Learning Path Section */}
      <Container maxWidth={false} sx={{ py: 8 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ fontWeight: 'medium' }}
        >
          Your Beginner's Learning Path
        </Typography>
        <Typography 
          variant="subtitle1" 
          align="center" 
          color="textSecondary" 
          paragraph
          sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}
        >
          Follow this guided pathway designed specifically for newcomers to build your optician skills step by step
        </Typography>
        
        <Box sx={{ maxWidth: 900, mx: 'auto', px: 2 }}>
          <Stepper orientation="vertical" sx={{ mb: 4 }}>
            {learningPath.map((step, index) => (
              <Step key={index} active={true}>
                <StepLabel>
                  <Typography variant="h6">{step.label}</Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="body1" paragraph>
                    {step.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    component={RouterLink} 
                    to={step.path}
                    size="medium"
                  >
                    {step.buttonText}
                  </Button>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              color="primary"
              component={RouterLink}
              to="/dispensing-basics"
              sx={{ minWidth: 200 }}
            >
              View Complete Learning Path
            </Button>
          </Box>
        </Box>
      </Container>
      
      {/* Quick Start Modules */}
      <Box sx={{ 
        py: 8, 
        backgroundColor: darkMode ? 'background.paper' : '#f8f9fa',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: darkMode ? 'divider' : 'rgba(0, 0, 0, 0.08)'
      }}>
        <Container maxWidth={false}>
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Quick Start Learning Modules
          </Typography>
          <Typography 
            variant="subtitle1" 
            align="center" 
            color="textSecondary" 
            paragraph
            sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}
          >
            Short, focused lessons to help you learn essential skills in bite-sized sessions
          </Typography>
          
          <Grid container spacing={3}>
            {quickModules.map((module, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card 
                  variant="outlined" 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.2s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: 1
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ 
                        mr: 2, 
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {module.icon}
                      </Box>
                      <Typography variant="h6" component="h3">
                        {module.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                      {module.description}
                    </Typography>
                    <Chip 
                      label={module.duration} 
                      size="small" 
                      variant="outlined" 
                      color="primary"
                    />
                  </CardContent>
                  <CardActions>
                    <Button 
                      component={RouterLink} 
                      to={module.path} 
                      size="small" 
                      color="primary"
                    >
                      Start Module
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Study Resources */}
      <Container maxWidth={false} sx={{ py: 8 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ fontWeight: 'medium' }}
        >
          Beginner-Friendly Study Resources
        </Typography>
        <Typography 
          variant="subtitle1" 
          align="center" 
          color="textSecondary" 
          paragraph
          sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}
        >
          Comprehensive materials designed to build your knowledge from the ground up
        </Typography>
        
        <Grid container spacing={4}>
          {studyResources.map((resource, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <Box 
                  sx={{ 
                    bgcolor: resource.color,
                    py: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    position: 'relative'
                  }}
                >
                  {resource.icon}
                  <Chip 
                    label={resource.level} 
                    size="small" 
                    sx={{ 
                      position: 'absolute', 
                      top: 8, 
                      right: 8,
                      bgcolor: 'rgba(255,255,255,0.2)',
                      color: 'white'
                    }} 
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {resource.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {resource.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    component={RouterLink} 
                    to={resource.path} 
                    size="large" 
                    fullWidth 
                    variant="contained"
                    sx={{ bgcolor: resource.color, '&:hover': { bgcolor: resource.color } }}
                  >
                    Start Learning
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Beginner Success */}
      <Box sx={{ 
        py: 6, 
        bgcolor: 'primary.main', 
        color: 'primary.contrastText',
        textAlign: 'center'
      }}>
        <Container maxWidth={false}>
          <Typography variant="h4" component="h2" gutterBottom>
            Start Your Optician Journey Today
          </Typography>
          <Typography paragraph sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
            Take the first step to becoming a skilled optician with our beginner-friendly training program. No prior experience needed — just bring your curiosity and willingness to learn.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              color="secondary" 
              component={RouterLink} 
              to="/dispensing-basics"
              size="large"
              startIcon={<SchoolIcon />}
            >
              Start with Basics
            </Button>
            <Button 
              variant="outlined" 
              sx={{ 
                color: 'white', 
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }} 
              component={RouterLink} 
              to="/study/flashcards"
              size="large"
              startIcon={<StudyIcon />}
            >
              Study Flashcards
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
