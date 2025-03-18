import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Stepper, 
  Step, 
  StepLabel, 
  StepContent,
  Button, 
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Link
} from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon, 
  ArrowForward as ArrowForwardIcon,
  School as SchoolIcon,
  Visibility as VisionIcon,
  Lightbulb as LightbulbIcon,
  Build as BuildIcon,
  Refresh as RefreshIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import TestingInterface from '../components/TestingInterface';
import EyeModel3D from '../components/EyeModel3D';

// Tutorial steps
const TUTORIAL_STEPS = [
  {
    label: 'Introduction',
    content: {
      title: 'Welcome to Vision Testing & Refraction Training',
      description: `This tutorial will guide you through the fundamentals of vision testing and refraction procedures used by optometrists and ophthalmologists. You'll learn about eye anatomy, common vision disorders, and how to determine the correct prescription for patients.`,
      highlights: [
        'Understand the basic principles of refraction',
        'Learn to identify common vision problems',
        'Practice with virtual patients having various conditions',
        'Master the step-by-step process of a comprehensive eye exam'
      ]
    }
  },
  {
    label: 'Eye Anatomy Basics',
    content: {
      title: 'Understanding Eye Anatomy',
      description: `Before we begin with refraction techniques, it's important to understand the basic anatomy of the eye and how each part contributes to vision.`,
      eyeModel: true
    }
  },
  {
    label: 'Refractive Errors',
    content: {
      title: 'Common Refractive Errors',
      description: `Refractive errors occur when the shape of the eye prevents light from focusing properly on the retina. The main types of refractive errors are:`,
      conditions: [
        {
          name: 'Myopia (Nearsightedness)',
          description: 'Difficulty seeing distant objects clearly. Light focuses in front of the retina.'
        },
        {
          name: 'Hyperopia (Farsightedness)',
          description: 'Difficulty seeing near objects clearly. Light focuses behind the retina.'
        },
        {
          name: 'Astigmatism',
          description: 'Blurred or distorted vision at all distances due to irregular cornea shape.'
        },
        {
          name: 'Presbyopia',
          description: 'Age-related condition affecting the ability to focus on near objects.'
        }
      ]
    }
  },
  {
    label: 'Refraction Procedure',
    content: {
      title: 'The Refraction Process',
      description: `Refraction is the process of determining the eye's refractive error and the best corrective lens prescription. A typical refraction procedure includes:`,
      steps: [
        {
          name: 'Visual Acuity Testing',
          description: 'Measuring how clearly the patient can see using standardized charts like the Snellen chart.'
        },
        {
          name: 'Retinoscopy',
          description: 'An objective method to measure refractive error by observing how light reflects off the retina.'
        },
        {
          name: 'Subjective Refraction',
          description: 'Fine-tuning the prescription based on patient feedback ("Which is better, 1 or 2?").'
        },
        {
          name: 'Binocular Balance',
          description: 'Ensuring both eyes work together properly with the final prescription.'
        },
        {
          name: 'Near Vision Testing',
          description: 'Testing vision at reading distance, especially important for presbyopia.'
        }
      ]
    }
  },
  {
    label: 'Understanding Prescriptions',
    content: {
      title: 'Reading an Eyeglass Prescription',
      description: `An eyeglass prescription is a written order that specifies the value of all parameters required to construct corrective lenses. Here's what the values mean:`,
      prescriptionElements: [
        {
          term: 'Sphere (SPH)',
          explanation: 'The amount of lens power (in diopters) needed to correct nearsightedness or farsightedness. Negative values indicate myopia, positive values indicate hyperopia.'
        },
        {
          term: 'Cylinder (CYL)',
          explanation: 'The amount of lens power needed to correct astigmatism. Can be written in plus or minus cylinder notation.'
        },
        {
          term: 'Axis',
          explanation: 'A number between 1 and 180 degrees that describes the orientation of astigmatism correction.'
        },
        {
          term: 'Add Power (ADD)',
          explanation: 'Additional magnifying power in the lower part of the lens for presbyopia correction.'
        },
        {
          term: 'Pupillary Distance (PD)',
          explanation: 'The distance between the centers of the pupils, used to properly position lenses.'
        }
      ],
      samplePrescription: {
        rightEye: { sphere: -2.00, cylinder: -0.75, axis: 90 },
        leftEye: { sphere: -2.25, cylinder: -0.50, axis: 85 },
        add: '+2.00',
        pd: '64'
      }
    }
  },
  {
    label: 'Practice Session',
    content: {
      title: 'Let\'s Practice',
      description: `Now it's time to put what you've learned into practice. You'll go through a simplified refraction procedure with a virtual patient.`,
      practice: true
    }
  },
  {
    label: 'Next Steps',
    content: {
      title: 'Continue Your Learning',
      description: `Congratulations on completing the basic tutorial! Continue your learning journey with these resources:`,
      nextSteps: [
        {
          title: 'Practice with Patients',
          description: 'Test your skills with various virtual patients having different vision conditions',
          path: '/patients'
        },
        {
          title: 'Eye Anatomy Explorer',
          description: 'Deepen your understanding of eye structures with our interactive 3D model',
          path: '/eye-anatomy'
        },
        {
          title: 'Contact Lens Fitting',
          description: 'Learn the principles and procedures for fitting contact lenses',
          path: '/contact-lens-fitting'
        }
      ]
    }
  }
];

const TutorialPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  // Handle next and back navigation
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo(0, 0);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    window.scrollTo(0, 0);
  };
  
  const handleReset = () => {
    setActiveStep(0);
    window.scrollTo(0, 0);
  };
  
  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Optician Training Tutorial
          </Typography>
          <Typography paragraph>
            Learn the fundamentals of vision testing and refraction procedures through this step-by-step tutorial.
          </Typography>
          
          <Stepper activeStep={activeStep} orientation="vertical">
            {TUTORIAL_STEPS.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>
                  <Typography variant="h6">{step.label}</Typography>
                </StepLabel>
                <StepContent>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" gutterBottom>
                      {step.content.title}
                    </Typography>
                    <Typography paragraph>
                      {step.content.description}
                    </Typography>
                    
                    {/* Introduction step content */}
                    {index === 0 && step.content.highlights && (
                      <Box sx={{ mt: 3, mb: 3 }}>
                        <Alert severity="info" sx={{ mb: 2 }}>
                          This tutorial will take approximately 15-20 minutes to complete.
                        </Alert>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                          <Typography variant="subtitle1" gutterBottom fontWeight="medium">
                            In this tutorial, you will:
                          </Typography>
                          <List>
                            {step.content.highlights.map((highlight, idx) => (
                              <ListItem key={idx} dense>
                                <ListItemIcon>
                                  <CheckCircleIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary={highlight} />
                              </ListItem>
                            ))}
                          </List>
                        </Paper>
                      </Box>
                    )}
                    
                    {/* Eye Anatomy step content */}
                    {index === 1 && step.content.eyeModel && (
                      <Box sx={{ mt: 3, mb: 3 }}>
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box sx={{ height: 300 }}>
                              <EyeModel3D 
                                showLabels={true}
                                interactive={true}
                                height="100%"
                                width="100%"
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography variant="subtitle1" gutterBottom>
                              Key Eye Structures:
                            </Typography>
                            <List dense>
                              <ListItem>
                                <ListItemText 
                                  primary="Cornea" 
                                  secondary="Clear front surface that provides most of the eye's focusing power" 
                                />
                              </ListItem>
                              <ListItem>
                                <ListItemText 
                                  primary="Lens" 
                                  secondary="Adjustable structure that fine-tunes focus for different distances" 
                                />
                              </ListItem>
                              <ListItem>
                                <ListItemText 
                                  primary="Retina" 
                                  secondary="Light-sensitive tissue that converts light into neural signals" 
                                />
                              </ListItem>
                            </List>
                            <Button 
                              component={RouterLink} 
                              to="/eye-anatomy" 
                              variant="outlined" 
                              sx={{ mt: 2 }}
                              endIcon={<ArrowForwardIcon />}
                            >
                              Explore Eye Anatomy
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                    
                    {/* Refractive Errors step content */}
                    {index === 2 && step.content.conditions && (
                      <Box sx={{ mt: 3, mb: 3 }}>
                        <Grid container spacing={2}>
                          {step.content.conditions.map((condition, idx) => (
                            <Grid item xs={12} sm={6} key={idx}>
                              <Card variant="outlined">
                                <CardContent>
                                  <Typography variant="h6" color="primary" gutterBottom>
                                    {condition.name}
                                  </Typography>
                                  <Typography variant="body2">
                                    {condition.description}
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    )}
                    
                    {/* Refraction Procedure step content */}
                    {index === 3 && step.content.steps && (
                      <Box sx={{ mt: 3, mb: 3 }}>
                        {step.content.steps.map((procStep, idx) => (
                          <Accordion key={idx} defaultExpanded={idx === 0}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls={`panel${idx}-content`}
                              id={`panel${idx}-header`}
                            >
                              <Typography fontWeight="medium">
                                {idx + 1}. {procStep.name}
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                {procStep.description}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        ))}
                      </Box>
                    )}
                    
                    {/* Understanding Prescriptions step content */}
                    {index === 4 && step.content.prescriptionElements && (
                      <Box sx={{ mt: 3, mb: 3 }}>
                        <Box sx={{ mb: 3 }}>
                          {step.content.prescriptionElements.map((element, idx) => (
                            <Accordion key={idx} defaultExpanded={idx === 0}>
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`element${idx}-content`}
                                id={`element${idx}-header`}
                              >
                                <Typography fontWeight="medium">
                                  {element.term}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  {element.explanation}
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          ))}
                        </Box>
                        
                        {step.content.samplePrescription && (
                          <Paper variant="outlined" sx={{ p: 2, mt: 3 }}>
                            <Typography variant="subtitle1" gutterBottom fontWeight="medium">
                              Sample Prescription:
                            </Typography>
                            <Grid container spacing={2}>
                              <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle2">Right Eye (OD):</Typography>
                                <Typography variant="body2">
                                  SPH: {step.content.samplePrescription.rightEye.sphere.toFixed(2)} D
                                </Typography>
                                <Typography variant="body2">
                                  CYL: {step.content.samplePrescription.rightEye.cylinder.toFixed(2)} D
                                </Typography>
                                <Typography variant="body2">
                                  AXIS: {step.content.samplePrescription.rightEye.axis}°
                                </Typography>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle2">Left Eye (OS):</Typography>
                                <Typography variant="body2">
                                  SPH: {step.content.samplePrescription.leftEye.sphere.toFixed(2)} D
                                </Typography>
                                <Typography variant="body2">
                                  CYL: {step.content.samplePrescription.leftEye.cylinder.toFixed(2)} D
                                </Typography>
                                <Typography variant="body2">
                                  AXIS: {step.content.samplePrescription.leftEye.axis}°
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Divider sx={{ my: 1 }} />
                                <Typography variant="body2">
                                  ADD: {step.content.samplePrescription.add}
                                </Typography>
                                <Typography variant="body2">
                                  PD: {step.content.samplePrescription.pd} mm
                                </Typography>
                              </Grid>
                            </Grid>
                          </Paper>
                        )}
                      </Box>
                    )}
                    
                    {/* Practice Session step content */}
                    {index === 5 && step.content.practice && (
                      <Box sx={{ mt: 3, mb: 3 }}>
                        <Alert severity="info" sx={{ mb: 3 }}>
                          You'll now go through a simplified refraction procedure. 
                          Follow the instructions on the right side of the screen.
                        </Alert>
                        
                        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
                          <Typography variant="subtitle1" gutterBottom fontWeight="medium">
                            Virtual Patient:
                          </Typography>
                          <Typography variant="body1">
                            Maria Garcia, 45 years old, complaining of difficulty reading small print.
                          </Typography>
                        </Paper>
                        
                        {/* Practice Testing Interface */}
                        <Box sx={{ mb: 2 }}>
                          <TestingInterface 
                            patientId="tutorial-patient"
                            mode="tutorial"
                            showGuidance={true}
                          />
                        </Box>
                      </Box>
                    )}
                    
                    {/* Next Steps content */}
                    {index === 6 && step.content.nextSteps && (
                      <Box sx={{ mt: 3, mb: 3 }}>
                        <Alert severity="success" sx={{ mb: 3 }}>
                          <Typography variant="subtitle1" fontWeight="medium">
                            Congratulations on completing the tutorial!
                          </Typography>
                          <Typography variant="body2">
                            You've learned the fundamentals of vision testing and refraction. Continue your training with the resources below.
                          </Typography>
                        </Alert>
                        
                        <Grid container spacing={3}>
                          {step.content.nextSteps.map((nextStep, idx) => (
                            <Grid item xs={12} sm={6} md={3} key={idx}>
                              <Card 
                                sx={{ 
                                  height: '100%', 
                                  display: 'flex', 
                                  flexDirection: 'column',
                                  transition: 'transform 0.2s',
                                  '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 3
                                  }
                                }}
                              >
                                <CardContent sx={{ flexGrow: 1 }}>
                                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                    {idx === 0 && <VisionIcon fontSize="large" color="primary" />}
                                    {idx === 1 && <SchoolIcon fontSize="large" color="primary" />}
                                    {idx === 2 && <LightbulbIcon fontSize="large" color="primary" />}
                                    {idx === 3 && <BuildIcon fontSize="large" color="primary" />}
                                  </Box>
                                  <Typography variant="h6" component="h3" align="center" gutterBottom>
                                    {nextStep.title}
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" align="center">
                                    {nextStep.description}
                                  </Typography>
                                </CardContent>
                                <Box sx={{ p: 2, pt: 0, textAlign: 'center' }}>
                                  <Button 
                                    component={RouterLink} 
                                    to={nextStep.path} 
                                    variant="outlined" 
                                    color="primary" 
                                    size="small"
                                  >
                                    Start
                                  </Button>
                                </Box>
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    )}
                    
                    {/* Navigation buttons */}
                    <Box sx={{ mt: 4, mb: 2 }}>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        onClick={
                          activeStep === TUTORIAL_STEPS.length - 1
                            ? handleReset
                            : handleNext
                        }
                        endIcon={
                          activeStep === TUTORIAL_STEPS.length - 1 
                            ? <RefreshIcon /> 
                            : <ArrowForwardIcon />
                        }
                      >
                        {activeStep === TUTORIAL_STEPS.length - 1
                          ? 'Restart Tutorial'
                          : 'Continue'}
                      </Button>
                    </Box>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Paper>
        
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button component={RouterLink} to="/" variant="outlined" color="primary">
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TutorialPage;