import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  ToggleButtonGroup, 
  ToggleButton,
  FormControlLabel,
  Switch,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  ListItemButton
} from '@mui/material';
import { 
  Visibility as VisibilityIcon,
  Circle as CircleIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import EyeModel3D from '../components/EyeModel3D';
import { PrescriptionData } from '../interfaces';

// Eye part descriptions for educational content
const EYE_PARTS = [
  {
    name: 'Cornea',
    description: 'The clear, dome-shaped surface that covers the front of the eye. It plays a key role in focusing light.',
    refractionRole: 'Provides about two-thirds of the eye\'s optical power. Corneal shape abnormalities cause astigmatism.',
    clinicalNotes: 'Corneal thickness and curvature are important in contact lens fitting and refractive surgery planning.'
  },
  {
    name: 'Iris',
    description: 'The colored part of the eye that controls the size of the pupil and the amount of light entering the eye.',
    refractionRole: 'Controls the amount of light entering the eye, which can affect visual clarity and depth of field.',
    clinicalNotes: 'Pupil size affects visual acuity and can influence prescription requirements in different lighting conditions.'
  },
  {
    name: 'Pupil',
    description: 'The black circular opening in the center of the iris that allows light to enter the eye.',
    refractionRole: 'Changes size to regulate light entry; smaller pupils increase depth of focus and can reduce refractive errors.',
    clinicalNotes: 'Pupils that are too large or too small can affect vision quality and refraction results.'
  },
  {
    name: 'Lens',
    description: 'The transparent structure behind the iris that helps focus light onto the retina. It can change shape to focus on objects at different distances.',
    refractionRole: 'Changes shape (accommodates) to focus light from different distances. Stiffening with age leads to presbyopia.',
    clinicalNotes: 'Loss of lens flexibility after age 40 typically requires reading glasses or multifocal prescriptions.'
  },
  {
    name: 'Retina',
    description: 'The light-sensitive layer at the back of the eye that converts light into neural signals that are sent to the brain.',
    refractionRole: 'The target for focused light. Refractive errors cause light to focus in front of (myopia) or behind (hyperopia) the retina.',
    clinicalNotes: 'Retinal health is essential for good vision regardless of refractive correction.'
  },
  {
    name: 'Sclera',
    description: 'The white, protective outer layer of the eyeball that maintains the eye\'s shape and protects its internal components.',
    refractionRole: 'Maintains the eye\'s shape, which is crucial for proper focusing of light on the retina.',
    clinicalNotes: 'Not directly involved in refraction but important for overall eye health.'
  }
];

// Vision conditions to demonstrate with the 3D model
const VISION_CONDITIONS = [
  {
    name: 'Normal Vision',
    description: 'Light focuses precisely on the retina, resulting in clear vision.',
    prescription: { sphere: 0, cylinder: 0, axis: 0 }
  },
  {
    name: 'Myopia (Nearsightedness)',
    description: 'Light focuses in front of the retina, making distant objects appear blurry while near objects remain clear.',
    prescription: { sphere: -3.00, cylinder: 0, axis: 0 }
  },
  {
    name: 'Hyperopia (Farsightedness)',
    description: 'Light focuses behind the retina, potentially causing blur at all distances, but especially for near objects.',
    prescription: { sphere: +2.50, cylinder: 0, axis: 0 }
  },
  {
    name: 'Astigmatism',
    description: 'Irregular corneal shape causes light to focus at multiple points, resulting in distorted or blurred vision at all distances.',
    prescription: { sphere: -1.00, cylinder: -1.50, axis: 90 }
  },
  {
    name: 'Presbyopia',
    description: 'Age-related hardening of the lens reduces ability to focus on near objects, requiring reading glasses or bifocals.',
    prescription: { sphere: 0, cylinder: 0, axis: 0, addPower: 2.00 }
  }
];

const EyeAnatomyPage: React.FC = () => {
  // State for UI controls
  const [selectedPart, setSelectedPart] = useState<string[]>(['cornea']);
  const [rotationSpeed, setRotationSpeed] = useState<number>(0.001);
  const [showLabels, setShowLabels] = useState<boolean>(true);
  const [tabValue, setTabValue] = useState<number>(0);
  const [selectedCondition, setSelectedCondition] = useState<number>(0);
  
  // Handle part selection
  const handlePartSelection = (
    _: React.MouseEvent<HTMLElement>,
    newParts: string[],
  ) => {
    setSelectedPart(newParts.length ? newParts : []);
  };
  
  // Handle tab change
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
  // Handle condition selection
  const handleConditionChange = (index: number) => {
    setSelectedCondition(index);
  };
  
  // Convert current condition to prescription format
  const getCurrentPrescription = (): PrescriptionData => {
    return {
      ...VISION_CONDITIONS[selectedCondition].prescription,
      eye: 'right' // Default
    };
  };
  
  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth={false}>
        <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Eye Anatomy Explorer
          </Typography>
          <Typography paragraph>
            Explore the 3D model of the human eye to understand its structure and how different parts contribute to vision and refraction.
          </Typography>
          
          <Grid container spacing={4}>
            {/* Left side - 3D model */}
            <Grid item xs={12} md={7}>
              <Box sx={{ height: '500px', width: '100%', mb: 2 }}>
                <EyeModel3D 
                  highlightParts={selectedPart}
                  rotationSpeed={rotationSpeed}
                  showLabels={showLabels}
                  prescription={getCurrentPrescription()}
                  interactive={true}
                  height="100%"
                  width="100%"
                />
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                <FormControlLabel
                  control={
                    <Switch 
                      checked={showLabels} 
                      onChange={(e) => setShowLabels(e.target.checked)} 
                    />
                  }
                  label="Show Labels"
                />
              </Box>
              
              <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                Highlight Eye Parts:
              </Typography>
              
              <ToggleButtonGroup
                value={selectedPart}
                onChange={handlePartSelection}
                aria-label="eye parts"
                size="small"
                color="primary"
                sx={{ flexWrap: 'wrap' }}
              >
                <ToggleButton value="cornea" aria-label="cornea">
                  Cornea
                </ToggleButton>
                <ToggleButton value="iris" aria-label="iris">
                  Iris
                </ToggleButton>
                <ToggleButton value="pupil" aria-label="pupil">
                  Pupil
                </ToggleButton>
                <ToggleButton value="lens" aria-label="lens">
                  Lens
                </ToggleButton>
                <ToggleButton value="retina" aria-label="retina">
                  Retina
                </ToggleButton>
                <ToggleButton value="sclera" aria-label="sclera">
                  Sclera
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            
            {/* Right side - Information panels */}
            <Grid item xs={12} md={5}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                <Tabs 
                  value={tabValue} 
                  onChange={handleTabChange} 
                  aria-label="eye anatomy tabs"
                  variant="fullWidth"
                >
                  <Tab label="Anatomy" />
                  <Tab label="Vision Conditions" />
                </Tabs>
              </Box>
              
              {/* Anatomy Information */}
              {tabValue === 0 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Eye Parts and Their Role in Vision
                  </Typography>
                  
                  {selectedPart.length > 0 ? (
                    <>
                      {EYE_PARTS.filter(part => 
                        selectedPart.some(selected => 
                          selected.toLowerCase() === part.name.toLowerCase()
                        )
                      ).map((part, index) => (
                        <Card key={index} sx={{ mb: 2 }}>
                          <CardContent>
                            <Typography variant="h6" color="primary" gutterBottom>
                              {part.name}
                            </Typography>
                            <Typography variant="body2" paragraph>
                              {part.description}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                              Role in Refraction:
                            </Typography>
                            <Typography variant="body2" paragraph>
                              {part.refractionRole}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                              Clinical Significance:
                            </Typography>
                            <Typography variant="body2">
                              {part.clinicalNotes}
                            </Typography>
                          </CardContent>
                        </Card>
                      ))}
                    </>
                  ) : (
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                      Select a part of the eye to see detailed information about its structure and function in vision.
                    </Typography>
                  )}
                </Box>
              )}
              
              {/* Vision Conditions */}
              {tabValue === 1 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Common Vision Conditions
                  </Typography>
                  
                  <List>
                    {VISION_CONDITIONS.map((condition, index) => (
                      <React.Fragment key={index}>
                        <ListItemButton 
                          selected={selectedCondition === index}
                          onClick={() => handleConditionChange(index)}
                        >
                          <ListItemIcon>
                            <VisibilityIcon color={selectedCondition === index ? "primary" : "inherit"} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={condition.name} 
                          />
                        </ListItemButton>
                        {selectedCondition === index && (
                          <Box sx={{ pl: 4, pr: 2, pb: 2 }}>
                            <Typography variant="body2" paragraph>
                              {condition.description}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                              Typical Prescription:
                            </Typography>
                            <Typography variant="body2">
                              Sphere: {condition.prescription.sphere.toFixed(2)} D
                              {condition.prescription.cylinder !== 0 && `, Cylinder: ${condition.prescription.cylinder.toFixed(2)} D, Axis: ${condition.prescription.axis}°`}
                              {condition.prescription.addPower && `, Add: +${condition.prescription.addPower.toFixed(2)} D`}
                            </Typography>
                          </Box>
                        )}
                        <Divider component="li" />
                      </React.Fragment>
                    ))}
                  </List>
                </Box>
              )}
            </Grid>
          </Grid>
        </Paper>
        
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button 
            component={RouterLink} 
            to="/" 
            variant="outlined" 
            color="primary"
            startIcon={<ArrowBackIcon />}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default EyeAnatomyPage;