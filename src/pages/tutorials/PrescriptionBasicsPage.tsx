import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Card, 
  CardContent, 
  Grid, 
  Divider, 
  Stepper, 
  Step, 
  StepLabel, 
  StepContent, 
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
  Chip
} from '@mui/material';
import { 
  ArrowBack as ArrowBackIcon, 
  ArrowForward as ArrowForwardIcon,
  School as SchoolIcon 
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

// Sample prescription examples for different vision conditions
const PRESCRIPTION_EXAMPLES = [
  { 
    condition: 'Myopia (Nearsightedness)', 
    sphereOD: '-2.50', 
    cylinderOD: '', 
    axisOD: '', 
    sphereOS: '-2.75', 
    cylinderOS: '', 
    axisOS: '',
    addPower: '',
    explanation: 'Negative sphere values indicate myopia. The patient can see objects clearly up close, but has difficulty with distant objects.',
    frameConsiderations: 'Standard frames with regular lenses for mild myopia. Consider high-index lenses for powers stronger than -4.00 to reduce thickness and weight.'
  },
  { 
    condition: 'Hyperopia (Farsightedness)', 
    sphereOD: '+1.75', 
    cylinderOD: '', 
    axisOD: '', 
    sphereOS: '+2.00', 
    cylinderOS: '', 
    axisOS: '',
    addPower: '',
    explanation: 'Positive sphere values indicate hyperopia. The patient can see distant objects more clearly than near objects.',
    frameConsiderations: 'Full frames provide better support. Avoid rimless or semi-rimless for higher powers (>+3.00) as edges will be thicker.'
  },
  { 
    condition: 'Astigmatism', 
    sphereOD: '-1.25', 
    cylinderOD: '-0.75', 
    axisOD: '90', 
    sphereOS: '-1.00', 
    cylinderOS: '-1.25', 
    axisOS: '85',
    addPower: '',
    explanation: 'Cylinder values indicate astigmatism. Light focuses at multiple points rather than a single focal point, causing blurred or distorted vision.',
    frameConsiderations: 'Full frames with proper alignment are important. Higher cylinder powers (>-2.00) will have thicker edges that need to be masked with frame design.'
  },
  { 
    condition: 'Presbyopia', 
    sphereOD: '+0.50', 
    cylinderOD: '', 
    axisOD: '', 
    sphereOS: '+0.75', 
    cylinderOS: '', 
    axisOS: '',
    addPower: '+2.00',
    explanation: 'Add power indicates presbyopia, the age-related loss of flexibility in the eye\'s lens. Patients need help focusing on near objects.',
    frameConsiderations: 'Frames need adequate vertical height (at least 28-30mm) to accommodate progressive lenses. Frame style should align with segment height.'
  },
  { 
    condition: 'Complex Prescription', 
    sphereOD: '-3.50', 
    cylinderOD: '-1.75', 
    axisOD: '175', 
    sphereOS: '-4.00', 
    cylinderOS: '-1.25', 
    axisOS: '10',
    addPower: '+1.50',
    explanation: 'This combines myopia, astigmatism, and presbyopia. The patient requires correction for all distances.',
    frameConsiderations: 'High-index lenses essential. Full frames with proper adjustability. Consider frame with sufficient vertical height for progressive addition.'
  }
];

// Tutorial step content
const TUTORIAL_STEPS = [
  {
    label: 'Understanding Prescription Notation',
    content: (
      <Box>
        <Typography paragraph>
          Optical prescriptions follow a standardized format that allows opticians to create the correct lenses. Here's how to read the basic components:
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Basic Prescription Format
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Chip label="OD" size="small" color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body2">Right eye (Oculus Dexter)</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Chip label="OS" size="small" color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body2">Left eye (Oculus Sinister)</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Chip label="OU" size="small" color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body2">Both eyes (Oculus Uterque)</Typography>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Typography variant="body2" paragraph>
                  A typical prescription includes values for Sphere, Cylinder, and Axis for each eye, along with Add Power if needed.
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Chip label="SPH" size="small" color="secondary" sx={{ mr: 1 }} />
                  <Typography variant="body2">Sphere - overall refractive power (measured in diopters)</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Chip label="CYL" size="small" color="secondary" sx={{ mr: 1 }} />
                  <Typography variant="body2">Cylinder - astigmatism correction power</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Chip label="AXIS" size="small" color="secondary" sx={{ mr: 1 }} />
                  <Typography variant="body2">Axis - orientation of astigmatism correction (0-180°)</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Chip label="ADD" size="small" color="secondary" sx={{ mr: 1 }} />
                  <Typography variant="body2">Add Power - additional power for reading (presbyopia)</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Sample Prescription
                </Typography>
                <Box sx={{ overflow: 'auto' }}>
                  <TableContainer component={Paper} variant="outlined" sx={{ mb: 2 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Eye</TableCell>
                          <TableCell>Sphere</TableCell>
                          <TableCell>Cylinder</TableCell>
                          <TableCell>Axis</TableCell>
                          <TableCell>Add</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>OD (Right)</TableCell>
                          <TableCell>-2.25</TableCell>
                          <TableCell>-0.75</TableCell>
                          <TableCell>90</TableCell>
                          <TableCell>+1.50</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>OS (Left)</TableCell>
                          <TableCell>-2.00</TableCell>
                          <TableCell>-0.50</TableCell>
                          <TableCell>85</TableCell>
                          <TableCell>+1.50</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
                
                <Typography variant="subtitle2" gutterBottom>
                  What This Means:
                </Typography>
                <Typography variant="body2" paragraph>
                  The patient has mild myopia (nearsightedness) indicated by the negative sphere values, with mild astigmatism indicated by the cylinder values. The add power of +1.50 indicates presbyopia (age-related difficulty focusing up close).
                </Typography>
                <Typography variant="body2">
                  As an optician, this prescription would suggest:
                </Typography>
                <ul>
                  <li><Typography variant="body2">Mid-index lenses might be appropriate</Typography></li>
                  <li><Typography variant="body2">Progressive lenses are needed due to the add power</Typography></li>
                  <li><Typography variant="body2">Frame needs adequate vertical height for progressives</Typography></li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    )
  },
  {
    label: 'Sphere Power: What it Means',
    content: (
      <Box>
        <Typography paragraph>
          Sphere power (SPH) is measured in diopters (D) and refers to the amount of lens power needed to correct nearsightedness or farsightedness.
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Negative Sphere Values (-)
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Indicates myopia (nearsightedness)</strong>
                </Typography>
                <Typography variant="body2" paragraph>
                  The patient can see objects clearly up close but has difficulty with distant objects. Higher negative numbers indicate stronger myopia.
                </Typography>
                
                <Divider sx={{ my: 2 }} />
                
                <Typography variant="subtitle2" gutterBottom>
                  Optician Considerations:
                </Typography>
                <ul>
                  <li><Typography variant="body2">-0.25 to -3.00: Standard index lenses usually sufficient</Typography></li>
                  <li><Typography variant="body2">-3.25 to -6.00: Mid-index lenses recommended to reduce thickness</Typography></li>
                  <li><Typography variant="body2">Above -6.00: High-index lenses strongly recommended</Typography></li>
                  <li><Typography variant="body2">Higher powers will have thicker edges, frame selection can help mask this</Typography></li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Positive Sphere Values (+)
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Indicates hyperopia (farsightedness)</strong>
                </Typography>
                <Typography variant="body2" paragraph>
                  The patient can see distant objects more clearly than near objects. Higher positive numbers indicate stronger hyperopia.
                </Typography>
                
                <Divider sx={{ my: 2 }} />
                
                <Typography variant="subtitle2" gutterBottom>
                  Optician Considerations:
                </Typography>
                <ul>
                  <li><Typography variant="body2">+0.25 to +2.00: Standard index lenses usually sufficient</Typography></li>
                  <li><Typography variant="body2">+2.25 to +4.00: Mid-index lenses may be beneficial</Typography></li>
                  <li><Typography variant="body2">Above +4.00: High-index lenses recommended</Typography></li>
                  <li><Typography variant="body2">Higher powers will have thicker centers; smaller frames minimize this</Typography></li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        <Box mt={3}>
          <Alert severity="info">
            <Typography variant="body2">
              <strong>Frame Selection Tip:</strong> For high minus (negative) prescriptions, larger frames make lenses thicker at the edges. For high plus (positive) prescriptions, larger frames make the entire lens thicker and heavier.
            </Typography>
          </Alert>
        </Box>
      </Box>
    )
  },
  {
    label: 'Cylinder & Axis: Astigmatism Correction',
    content: (
      <Box>
        <Typography paragraph>
          Cylinder (CYL) and Axis values are used to correct astigmatism, an irregularity in the shape of the cornea or lens that causes blurred or distorted vision.
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Cylinder (CYL)
                </Typography>
                <Typography variant="body2" paragraph>
                  Cylinder power is measured in diopters and indicates the additional lens power needed to correct astigmatism. In most prescriptions, cylinder is written as a negative value.
                </Typography>
                
                <Box sx={{ my: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Interpreting Cylinder Power:
                  </Typography>
                  <ul>
                    <li><Typography variant="body2">No value or 0.00: No astigmatism correction needed</Typography></li>
                    <li><Typography variant="body2">-0.25 to -0.75: Mild astigmatism</Typography></li>
                    <li><Typography variant="body2">-1.00 to -2.00: Moderate astigmatism</Typography></li>
                    <li><Typography variant="body2">-2.25 and above: Strong astigmatism</Typography></li>
                  </ul>
                </Box>
                
                <Alert severity="info" sx={{ mt: 2 }}>
                  <Typography variant="body2">
                    Higher cylinder values result in thicker lens edges in certain meridians, which can affect cosmetic appearance and comfort.
                  </Typography>
                </Alert>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Axis
                </Typography>
                <Typography variant="body2" paragraph>
                  Axis is measured in degrees (1-180) and specifies the orientation of the cylinder correction. It indicates the angle at which the cylinder power should be placed.
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Box sx={{ 
                    width: 150, 
                    height: 150, 
                    border: '2px solid #ccc', 
                    borderRadius: '50%', 
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Typography variant="caption" sx={{ position: 'absolute', top: 5 }}>90°</Typography>
                    <Typography variant="caption" sx={{ position: 'absolute', bottom: 5 }}>270°</Typography>
                    <Typography variant="caption" sx={{ position: 'absolute', left: 5 }}>180°</Typography>
                    <Typography variant="caption" sx={{ position: 'absolute', right: 5 }}>0°/180°</Typography>
                    <Box sx={{ 
                      width: '90%', 
                      height: '2px', 
                      bgcolor: 'primary.main', 
                      position: 'absolute',
                      transform: 'rotate(45deg)'
                    }}></Box>
                    <Typography variant="caption" sx={{ 
                      position: 'absolute', 
                      transform: 'rotate(45deg)', 
                      color: 'primary.main',
                      fontWeight: 'bold'
                    }}>45°</Typography>
                  </Box>
                </Box>
                
                <Typography variant="subtitle2" gutterBottom>
                  Optician Considerations:
                </Typography>
                <ul>
                  <li><Typography variant="body2">Axis must be precisely maintained during lens fabrication and frame fitting</Typography></li>
                  <li><Typography variant="body2">Frames must maintain proper alignment - frequent adjustments may be needed</Typography></li>
                  <li><Typography variant="body2">Metal frames with adjustable nose pads work well for maintaining proper axis alignment</Typography></li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    )
  },
  {
    label: 'Add Power: Presbyopia Correction',
    content: (
      <Box>
        <Typography paragraph>
          Add power (ADD) is the additional magnification needed for near vision tasks, typically prescribed for patients with presbyopia, the age-related loss of near focusing ability.
        </Typography>
        
        <Card sx={{ bgcolor: 'background.paper', mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Understanding Add Power
            </Typography>
            <Typography variant="body2" paragraph>
              Add power is always a positive number, typically ranging from +0.75 to +3.00 diopters, and increases as presbyopia progresses with age.
            </Typography>
            
            <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Add Power</TableCell>
                    <TableCell>Typical Age Range</TableCell>
                    <TableCell>Lens Options</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>+0.75 to +1.00</TableCell>
                    <TableCell>40-45</TableCell>
                    <TableCell>Progressive or readers</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>+1.25 to +1.75</TableCell>
                    <TableCell>45-55</TableCell>
                    <TableCell>Progressive, bifocal, office lenses</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>+2.00 to +2.50</TableCell>
                    <TableCell>55-65</TableCell>
                    <TableCell>Progressive, bifocal, trifocal</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>+2.75 to +3.00</TableCell>
                    <TableCell>65+</TableCell>
                    <TableCell>Progressive, bifocal, trifocal</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            
            <Typography variant="subtitle2" gutterBottom>
              Optician Considerations:
            </Typography>
            <ul>
              <li><Typography variant="body2">Add power requires multifocal lenses (progressives, bifocals, trifocals) or separate reading glasses</Typography></li>
              <li><Typography variant="body2">Progressive lenses need frames with adequate vertical height (minimum 28-30mm)</Typography></li>
              <li><Typography variant="body2">Segment height measurements are critical for proper lens function</Typography></li>
              <li><Typography variant="body2">Patient lifestyle and occupation should guide lens recommendations</Typography></li>
            </ul>
          </CardContent>
        </Card>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Progressive Lenses
                </Typography>
                <Typography variant="body2" paragraph>
                  No-line multifocals that provide correction for distance, intermediate, and near vision in a single lens.
                </Typography>
                <Typography variant="subtitle2" gutterBottom>Benefits:</Typography>
                <ul>
                  <li><Typography variant="body2">No visible line on the lens</Typography></li>
                  <li><Typography variant="body2">Seamless transition between viewing distances</Typography></li>
                  <li><Typography variant="body2">Modern appearance</Typography></li>
                </ul>
                <Typography variant="subtitle2" gutterBottom>Considerations:</Typography>
                <ul>
                  <li><Typography variant="body2">Require adaptation period</Typography></li>
                  <li><Typography variant="body2">Narrower reading area</Typography></li>
                  <li><Typography variant="body2">More expensive than bifocals</Typography></li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Bifocal/Trifocal Lenses
                </Typography>
                <Typography variant="body2" paragraph>
                  Lenses with visible lines separating different power zones for distance and near (bifocal) or distance, intermediate, and near (trifocal).
                </Typography>
                <Typography variant="subtitle2" gutterBottom>Benefits:</Typography>
                <ul>
                  <li><Typography variant="body2">Wider reading area</Typography></li>
                  <li><Typography variant="body2">Less adaptation time</Typography></li>
                  <li><Typography variant="body2">More affordable than progressives</Typography></li>
                </ul>
                <Typography variant="subtitle2" gutterBottom>Considerations:</Typography>
                <ul>
                  <li><Typography variant="body2">Visible line on the lens</Typography></li>
                  <li><Typography variant="body2">Abrupt image jump between zones</Typography></li>
                  <li><Typography variant="body2">Dated appearance</Typography></li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    )
  },
  {
    label: 'Prescription Examples & What They Mean',
    content: (
      <Box>
        <Typography paragraph>
          The following examples show common prescription types and the frame and lens considerations for each.
        </Typography>
        
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Condition</TableCell>
                <TableCell>OD (Right)</TableCell>
                <TableCell>OS (Left)</TableCell>
                <TableCell>Add</TableCell>
                <TableCell>Frame & Lens Considerations</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {PRESCRIPTION_EXAMPLES.map((example, index) => (
                <TableRow key={index}>
                  <TableCell>{example.condition}</TableCell>
                  <TableCell>
                    {example.sphereOD} {example.cylinderOD && `/ ${example.cylinderOD}`} {example.axisOD && `x ${example.axisOD}`}
                  </TableCell>
                  <TableCell>
                    {example.sphereOS} {example.cylinderOS && `/ ${example.cylinderOS}`} {example.axisOS && `x ${example.axisOS}`}
                  </TableCell>
                  <TableCell>{example.addPower}</TableCell>
                  <TableCell>
                    <Typography variant="body2">{example.frameConsiderations}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <Typography variant="h6" gutterBottom>
          Additional Frame Selection Guidelines
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  For Myopia (Negative Sphere)
                </Typography>
                <ul>
                  <li><Typography variant="body2">Smaller frames minimize edge thickness</Typography></li>
                  <li><Typography variant="body2">Full frames hide edge thickness better than rimless</Typography></li>
                  <li><Typography variant="body2">High-index lenses reduce weight and thickness</Typography></li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  For Hyperopia (Positive Sphere)
                </Typography>
                <ul>
                  <li><Typography variant="body2">Smaller frames minimize center thickness</Typography></li>
                  <li><Typography variant="body2">Avoid frames with thin rims that won't hide thickness</Typography></li>
                  <li><Typography variant="body2">High-index lenses reduce weight and magnification effect</Typography></li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  For Astigmatism (Cylinder)
                </Typography>
                <ul>
                  <li><Typography variant="body2">Stable frame materials that hold adjustment</Typography></li>
                  <li><Typography variant="body2">Proper bridge fit to maintain axis alignment</Typography></li>
                  <li><Typography variant="body2">Consider metal frames with adjustable nose pads</Typography></li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    )
  }
];

const PrescriptionBasicsPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <SchoolIcon color="primary" sx={{ mr: 1, fontSize: 30 }} />
          <Typography variant="h4" component="h1">
            Understanding Prescription Basics
          </Typography>
        </Box>
        <Typography variant="subtitle1" paragraph>
          Learn how to interpret prescriptions and make appropriate frame and lens recommendations for different vision conditions.
        </Typography>
        <Alert severity="info" sx={{ mb: 3 }}>
          This guide is designed for beginner opticians to understand the basic components of an eyeglass prescription and how they translate to frame and lens selection decisions.
        </Alert>
      </Paper>

      <Stepper activeStep={activeStep} orientation="vertical">
        {TUTORIAL_STEPS.map((step, index) => (
          <Step key={index}>
            <StepLabel>
              <Typography variant="h6">{step.label}</Typography>
            </StepLabel>
            <StepContent>
              {step.content}
              <Box sx={{ mt: 3, mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  endIcon={<ArrowForwardIcon />}
                >
                  {index === TUTORIAL_STEPS.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                  startIcon={<ArrowBackIcon />}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      
      {activeStep === TUTORIAL_STEPS.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Tutorial Complete!
          </Typography>
          <Typography paragraph>
            You've completed the basics of prescription interpretation for opticians. Ready to apply this knowledge with virtual patients?
          </Typography>
          <Button onClick={handleReset} sx={{ mr: 1 }}>
            Start Over
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            component={RouterLink} 
            to="/tutorial/frame-selection"
          >
            Continue to Frame Selection
          </Button>
        </Paper>
      )}
      
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button 
          variant="outlined" 
          component={RouterLink} 
          to="/patients"
          startIcon={<ArrowBackIcon />}
        >
          Back to Patients
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          component={RouterLink} 
          to="/tutorial/frame-selection"
          endIcon={<ArrowForwardIcon />}
          disabled={activeStep < TUTORIAL_STEPS.length}
        >
          Next Tutorial
        </Button>
      </Box>
    </Container>
  );
};

export default PrescriptionBasicsPage; 