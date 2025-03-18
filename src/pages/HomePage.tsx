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
  CardMedia
} from '@mui/material';
import { 
  School as SchoolIcon,
  Person as PersonIcon,
  RemoveRedEye as EyeIcon,
  ContactPage as ContactLensIcon,
  Build as AdjustmentIcon,
  Straighten as MeasurementIcon,
  Calculate as CalculatorIcon,
  MenuBook as GlossaryIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';

const HomePage: React.FC = () => {
  const { darkMode } = useTheme();
  
  // Main feature cards
  const mainFeatures = [
    {
      title: 'Interactive Tutorial',
      description: 'Step-by-step guide to vision testing and refraction techniques for beginners and advanced practitioners.',
      icon: <SchoolIcon sx={{ fontSize: 50 }} />,
      path: '/tutorial',
      color: '#3f51b5'
    },
    {
      title: 'Virtual Patients',
      description: 'Practice with diverse virtual patients having various vision conditions and refractive errors.',
      icon: <PersonIcon sx={{ fontSize: 50 }} />,
      path: '/patients',
      color: '#f50057'
    },
    {
      title: 'Eye Anatomy Explorer',
      description: 'Interactive 3D model of the eye to understand anatomy and how different refractive errors affect vision.',
      icon: <EyeIcon sx={{ fontSize: 50 }} />,
      path: '/eye-anatomy',
      color: '#00bcd4'
    }
  ];
  
  // Secondary feature cards
  const secondaryFeatures = [
    {
      title: 'Contact Lens Fitting',
      description: 'Learn principles and procedures for fitting contact lenses.',
      icon: <ContactLensIcon />,
      path: '/contact-lens-fitting'
    },
    {
      title: 'Frame Adjustments',
      description: 'Master techniques for properly adjusting frames for comfort and optical alignment.',
      icon: <AdjustmentIcon />,
      path: '/dispensing-basics'
    },
    {
      title: 'Optical Measurements',
      description: 'Learn essential optical measurements including PD, segment height, and vertex distance.',
      icon: <MeasurementIcon />,
      path: '/optical-theory'
    },
    {
      title: 'Optical Calculations',
      description: 'Practice calculations needed for lens design, prism, and prescription conversions.',
      icon: <CalculatorIcon />,
      path: '/optical-theory'
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
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Optician Trainer
              </Typography>
              <Typography
                variant="h5"
                color="textSecondary"
                paragraph
                sx={{ mb: 4 }}
              >
                Master dispensing techniques, frame adjustments, and optical principles through interactive simulations
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  component={RouterLink} 
                  to="/tutorial"
                  size="large"
                >
                  Start Learning
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  component={RouterLink} 
                  to="/patients"
                  size="large"
                >
                  Practice with Patients
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box 
                sx={{ 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  boxShadow: 4
                }}
              >
                <img 
                  src="/hero-image.jpg" 
                  alt="Eye examination" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    display: 'block'
                  }}
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Main Features */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ fontWeight: 'medium' }}
        >
          Interactive Learning Tools
        </Typography>
        <Typography 
          variant="subtitle1" 
          align="center" 
          color="textSecondary" 
          paragraph
          sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}
        >
          Our comprehensive suite of training tools helps opticians master essential skills for eyewear dispensing, frame adjustment, and patient consultations.
        </Typography>
        
        <Grid container spacing={4}>
          {mainFeatures.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
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
                    bgcolor: feature.color,
                    py: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white'
                  }}
                >
                  {feature.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    component={RouterLink} 
                    to={feature.path} 
                    size="large" 
                    fullWidth 
                    variant="contained"
                    sx={{ bgcolor: feature.color, '&:hover': { bgcolor: feature.color } }}
                  >
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Secondary Features */}
      <Box sx={{ 
        py: 8, 
        backgroundColor: darkMode ? 'background.paper' : '#f8f9fa',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: darkMode ? 'divider' : 'rgba(0, 0, 0, 0.08)'
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Specialized Optician Training
          </Typography>
          <Typography 
            variant="subtitle1" 
            align="center" 
            color="textSecondary" 
            paragraph
            sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}
          >
            Expand your skills with specialized training modules covering essential aspects of optician practice.
          </Typography>
          
          <Grid container spacing={3}>
            {secondaryFeatures.map((feature, index) => (
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
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" component="h3">
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                      component={RouterLink} 
                      to={feature.path} 
                      size="small" 
                      color="primary"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Features Overview */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Practice Makes Perfect
            </Typography>
            <Typography paragraph>
              Our virtual training environment lets you practice essential optician skills in a risk-free setting, from frame adjustments to accurate measurements.
            </Typography>
            
            <List>
              <ListItem>
                <ListItemIcon>
                  <Box sx={{ 
                    width: 10, 
                    height: 10, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main',
                    mt: 0.5
                  }} />
                </ListItemIcon>
                <ListItemText primary="Master frame selection and adjustment techniques" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Box sx={{ 
                    width: 10, 
                    height: 10, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main',
                    mt: 0.5
                  }} />
                </ListItemIcon>
                <ListItemText primary="Learn accurate optical measurements for proper fitting" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Box sx={{ 
                    width: 10, 
                    height: 10, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main',
                    mt: 0.5
                  }} />
                </ListItemIcon>
                <ListItemText primary="Practice prescription interpretation and verification" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Box sx={{ 
                    width: 10, 
                    height: 10, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main',
                    mt: 0.5
                  }} />
                </ListItemIcon>
                <ListItemText primary="Understand optical principles and their practical applications" />
              </ListItem>
            </List>
            
            <Button 
              variant="outlined" 
              color="primary" 
              component={RouterLink} 
              to="/dispensing-basics"
              sx={{ mt: 2 }}
            >
              Start Practicing
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={4} 
              sx={{ 
                p: 2, 
                borderRadius: 2, 
                height: 400, 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: darkMode ? 'background.paper' : '#ffffff',
                overflow: 'hidden'
              }}
            >
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Box sx={{ 
                  position: 'absolute',
                  top: 10,
                  left: 10,
                  padding: '4px 8px',
                  borderRadius: 1,
                  bgcolor: 'rgba(0,0,0,0.6)',
                  color: 'white',
                  zIndex: 1,
                  fontSize: 12
                }}>
                  Interactive Frame Fitting Simulator
                </Box>
                <img 
                  src="/refraction-simulator.jpg" 
                  alt="Frame fitting simulator" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: 8
                  }}
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      
      {/* Call to Action */}
      <Box sx={{ 
        py: 6, 
        bgcolor: 'primary.main', 
        color: 'primary.contrastText',
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to improve your optician skills?
          </Typography>
          <Typography paragraph sx={{ mb: 4 }}>
            Start with our comprehensive tutorial or explore our specialized training modules.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              color="secondary" 
              component={RouterLink} 
              to="/tutorial"
              size="large"
            >
              Start Tutorial
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
              to="/dispensing-basics"
              size="large"
            >
              Dispensing Basics
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;