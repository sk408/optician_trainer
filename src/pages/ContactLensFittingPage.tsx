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
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Alert
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import EyeModel3D from '../components/EyeModel3D';

// Contact lens fitting information
const LENS_TYPES = [
  {
    name: 'Soft Spherical',
    description: 'Most common type of soft contact lens. Corrects myopia or hyperopia.',
    fittingConsiderations: [
      'Base curve (BC) between 8.0 and 9.2 mm',
      'Diameter typically 13.8 to 14.5 mm',
      'Power range from +8.00 to -12.00 D',
      'Best for regular corneas and moderate prescriptions'
    ],
    materials: [
      'Hydrogel (traditional)',
      'Silicone Hydrogel (higher oxygen permeability)'
    ]
  },
  {
    name: 'Toric',
    description: 'Designed to correct astigmatism. Features different powers in different meridians.',
    fittingConsiderations: [
      'Requires stable lens orientation',
      'Base curve similar to spherical lenses',
      'Slightly larger diameter for stability',
      'More complex fitting process due to rotational factors',
      'Cylinder power and axis must be specified'
    ],
    materials: [
      'Silicone Hydrogel (most common)',
      'Conventional Hydrogel'
    ]
  },
  {
    name: 'Multifocal',
    description: 'Corrects presbyopia by providing multiple focal points for near and distance vision.',
    fittingConsiderations: [
      'Center-near or center-distance designs',
      'Base curve and diameter similar to spherical lenses',
      'May require additional measurements for add power',
      'Multiple trial fittings often necessary',
      'Patient adaptation period is longer'
    ],
    materials: [
      'Silicone Hydrogel',
      'Hydrogel'
    ]
  },
  {
    name: 'Rigid Gas Permeable (RGP)',
    description: 'Hard lenses that maintain their shape while allowing oxygen to reach the cornea.',
    fittingConsiderations: [
      'Smaller diameter (8.5 to 10.5 mm)',
      'Base curve based on corneal topography',
      'Multiple parameters to specify (BC, power, diameter, optic zone)',
      'Longer adaptation period',
      'Excellent optical quality for irregular corneas'
    ],
    materials: [
      'Fluorosilicone Acrylate',
      'Boston Materials (various types)',
      'High Dk materials for oxygen permeability'
    ]
  },
  {
    name: 'Scleral',
    description: 'Large-diameter RGP lenses that vault over the cornea and rest on the sclera.',
    fittingConsiderations: [
      'Very large diameter (15.0 to 24.0 mm)',
      'Vaults over the cornea without touching it',
      'Filled with saline solution before insertion',
      'Complex fitting process requiring specialized training',
      'Excellent for keratoconus and severe dry eye'
    ],
    materials: [
      'High-Dk Fluorosilicone Acrylate',
      'Specialized Boston Materials'
    ]
  }
];

const FITTING_PARAMETERS = {
  keratometry: {
    min: 38.00,
    max: 48.00,
    step: 0.25,
    defaultValues: {
      kFlat: 43.00,
      kSteep: 44.00,
      kAxis: 90
    }
  },
  baseCurve: {
    min: 7.8,
    max: 9.2,
    step: 0.1,
    default: 8.6
  },
  diameter: {
    min: 13.8,
    max: 14.8,
    step: 0.1,
    default: 14.2
  },
  power: {
    min: -12.00,
    max: 8.00,
    step: 0.25,
    default: -3.00
  }
};

const ContactLensFittingPage: React.FC = () => {
  // State for tabs
  const [tabValue, setTabValue] = useState(0);
  
  // State for fitting calculator
  const [selectedLensType, setSelectedLensType] = useState('Soft Spherical');
  const [kFlat, setKFlat] = useState(FITTING_PARAMETERS.keratometry.defaultValues.kFlat);
  const [kSteep, setKSteep] = useState(FITTING_PARAMETERS.keratometry.defaultValues.kSteep);
  const [kAxis, setKAxis] = useState(FITTING_PARAMETERS.keratometry.defaultValues.kAxis);
  const [baseCurve, setBaseCurve] = useState(FITTING_PARAMETERS.baseCurve.default);
  const [diameter, setDiameter] = useState(FITTING_PARAMETERS.diameter.default);
  const [power, setPower] = useState(FITTING_PARAMETERS.power.default);
  const [showFittingResults, setShowFittingResults] = useState(false);
  
  // Handle tab change
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setShowFittingResults(false);
  };
  
  // Calculate recommended lens parameters
  const calculateFitting = () => {
    // This is a simplified calculation
    // In a real application, this would use more sophisticated fitting algorithms
    
    let recommendedBC = baseCurve;
    let recommendedDiameter = diameter;
    let recommendedPower = power;
    
    // Simplified adjustment based on K readings
    if (selectedLensType === 'Soft Spherical') {
      // Adjust base curve based on K readings
      const averageK = (kFlat + kSteep) / 2;
      if (averageK < 42) {
        recommendedBC = 8.7;
      } else if (averageK < 44) {
        recommendedBC = 8.6;
      } else if (averageK < 46) {
        recommendedBC = 8.4;
      } else {
        recommendedBC = 8.3;
      }
      
      // Adjust power slightly for tear lens effect
      recommendedPower = Math.round((power - 0.25) / 0.25) * 0.25;
    } else if (selectedLensType === 'Toric') {
      // For toric lenses, keep BC slightly flatter
      const averageK = (kFlat + kSteep) / 2;
      recommendedBC = Math.round((averageK - 0.8) * 10) / 10;
      
      // Use slightly larger diameter for stability
      recommendedDiameter = 14.5;
    } else if (selectedLensType === 'RGP' || selectedLensType === 'Rigid Gas Permeable (RGP)') {
      // For RGPs, BC is typically aligned with K flat
      recommendedBC = Math.round((kFlat - 0.1) * 10) / 10;
      
      // RGPs have smaller diameters
      recommendedDiameter = 9.6;
    }
    
    setBaseCurve(recommendedBC);
    setDiameter(recommendedDiameter);
    setPower(recommendedPower);
    setShowFittingResults(true);
  };
  
  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth={false}>
        <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Contact Lens Fitting
          </Typography>
          <Typography paragraph>
            Learn about different types of contact lenses and practice the fitting process with our interactive tools.
          </Typography>
          
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange} 
              aria-label="contact lens fitting tabs"
            >
              <Tab label="Lens Types" />
              <Tab label="Fitting Guide" />
              <Tab label="Fitting Calculator" />
            </Tabs>
          </Box>
          
          {/* Lens Types Tab */}
          {tabValue === 0 && (
            <Box>
              <Grid container spacing={3}>
                {LENS_TYPES.map((lens, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom color="primary">
                          {lens.name}
                        </Typography>
                        <Typography variant="body2" paragraph>
                          {lens.description}
                        </Typography>
                        
                        <Typography variant="subtitle2" gutterBottom>
                          Fitting Considerations:
                        </Typography>
                        <List dense>
                          {lens.fittingConsiderations.map((consideration, idx) => (
                            <ListItem key={idx} sx={{ py: 0.5 }}>
                              <ListItemText primary={consideration} />
                            </ListItem>
                          ))}
                        </List>
                        
                        <Typography variant="subtitle2" gutterBottom sx={{ mt: 1 }}>
                          Common Materials:
                        </Typography>
                        <List dense>
                          {lens.materials.map((material, idx) => (
                            <ListItem key={idx} sx={{ py: 0.5 }}>
                              <ListItemText primary={material} />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          
          {/* Fitting Guide Tab */}
          {tabValue === 1 && (
            <Box>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Contact Lens Fitting Process
                  </Typography>
                  
                  <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom fontWeight="medium">
                      Step 1: Pre-Fitting Assessment
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Perform a comprehensive eye examination to determine if the patient is a good candidate for contact lenses. Check for contraindications such as severe dry eye, corneal diseases, or active infections.
                    </Typography>
                  </Paper>
                  
                  <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom fontWeight="medium">
                      Step 2: Measurements
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Take keratometry readings to measure corneal curvature. Determine refractive error through standard refraction procedures. Measure horizontal visible iris diameter (HVID) for lens diameter selection.
                    </Typography>
                  </Paper>
                  
                  <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom fontWeight="medium">
                      Step 3: Lens Selection
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Based on measurements and patient needs, select the appropriate lens type, material, base curve, diameter, and power. Consider wear schedule, lifestyle factors, and any special requirements.
                    </Typography>
                  </Paper>
                  
                  <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom fontWeight="medium">
                      Step 4: Trial Fitting
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Apply diagnostic lenses and evaluate fit after allowing time for settling. Check centration, movement, and coverage. Perform over-refraction to fine-tune power. Assess comfort and vision.
                    </Typography>
                  </Paper>
                  
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="subtitle1" gutterBottom fontWeight="medium">
                      Step 5: Finalization and Education
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Finalize lens parameters based on the successful trial fit. Teach proper insertion, removal, and care techniques. Schedule follow-up visits to assess fit and eye health.
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Evaluating Lens Fit
                  </Typography>
                  
                  <Box sx={{ height: 300, mb: 3 }}>
                    <EyeModel3D 
                      showLabels={true}
                      interactive={true}
                      height="100%"
                      width="100%"
                      rotationSpeed={0.002}
                      highlightParts={['cornea']}
                    />
                  </Box>
                  
                  <Typography variant="subtitle1" gutterBottom>
                    Ideal Soft Lens Fit Characteristics:
                  </Typography>
                  
                  <List>
                    <ListItem>
                      <ListItemText 
                        primary="Centration" 
                        secondary="Lens should cover the entire cornea and center well on the eye" 
                      />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                      <ListItemText 
                        primary="Movement" 
                        secondary="0.5-1.0mm of movement with blink and upward gaze" 
                      />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                      <ListItemText 
                        primary="Coverage" 
                        secondary="Lens should extend 1-2mm beyond the limbus in all directions" 
                      />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                      <ListItemText 
                        primary="Comfort" 
                        secondary="Patient should report good comfort after initial adaptation" 
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Box>
          )}
          
          {/* Fitting Calculator Tab */}
          {tabValue === 2 && (
            <Box>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Contact Lens Parameter Calculator
                  </Typography>
                  
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Enter the patient's data to calculate recommended contact lens parameters. This is a simplified calculator for educational purposes.
                  </Typography>
                  
                  <Card sx={{ mb: 3 }}>
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom fontWeight="medium">
                        Keratometry & Prescription
                      </Typography>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography id="k-flat-slider" gutterBottom>
                          K-Flat (mm): {kFlat.toFixed(2)}
                        </Typography>
                        <Slider
                          value={kFlat}
                          onChange={(_, value) => setKFlat(value as number)}
                          aria-labelledby="k-flat-slider"
                          min={FITTING_PARAMETERS.keratometry.min}
                          max={FITTING_PARAMETERS.keratometry.max}
                          step={FITTING_PARAMETERS.keratometry.step}
                          valueLabelDisplay="auto"
                        />
                      </Box>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography id="k-steep-slider" gutterBottom>
                          K-Steep (mm): {kSteep.toFixed(2)}
                        </Typography>
                        <Slider
                          value={kSteep}
                          onChange={(_, value) => setKSteep(value as number)}
                          aria-labelledby="k-steep-slider"
                          min={FITTING_PARAMETERS.keratometry.min}
                          max={FITTING_PARAMETERS.keratometry.max}
                          step={FITTING_PARAMETERS.keratometry.step}
                          valueLabelDisplay="auto"
                        />
                      </Box>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography id="k-axis-slider" gutterBottom>
                          K-Axis (°): {kAxis}
                        </Typography>
                        <Slider
                          value={kAxis}
                          onChange={(_, value) => setKAxis(value as number)}
                          aria-labelledby="k-axis-slider"
                          min={0}
                          max={180}
                          step={5}
                          valueLabelDisplay="auto"
                        />
                      </Box>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography id="power-slider" gutterBottom>
                          Spectacle Prescription (D): {power.toFixed(2)}
                        </Typography>
                        <Slider
                          value={power}
                          onChange={(_, value) => setPower(value as number)}
                          aria-labelledby="power-slider"
                          min={FITTING_PARAMETERS.power.min}
                          max={FITTING_PARAMETERS.power.max}
                          step={FITTING_PARAMETERS.power.step}
                          valueLabelDisplay="auto"
                          marks={[
                            { value: -12, label: '-12.00' },
                            { value: 0, label: '0.00' },
                            { value: 8, label: '+8.00' },
                          ]}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom fontWeight="medium">
                        Lens Selection
                      </Typography>
                      
                      <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel id="lens-type-label">Lens Type</InputLabel>
                        <Select
                          labelId="lens-type-label"
                          value={selectedLensType}
                          label="Lens Type"
                          onChange={(e) => setSelectedLensType(e.target.value)}
                        >
                          {LENS_TYPES.map((lens, index) => (
                            <MenuItem key={index} value={lens.name}>
                              {lens.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      
                      <Button 
                        variant="contained" 
                        color="primary"
                        fullWidth
                        onClick={calculateFitting}
                      >
                        Calculate Recommended Parameters
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Recommended Lens Parameters
                  </Typography>
                  
                  {showFittingResults ? (
                    <Card>
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom fontWeight="medium">
                          Recommended Parameters for {selectedLensType}
                        </Typography>
                        
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="body2" fontWeight="medium" gutterBottom>
                            Base Curve (BC): {baseCurve.toFixed(1)} mm
                          </Typography>
                          <Typography variant="body2" fontWeight="medium" gutterBottom>
                            Diameter: {diameter.toFixed(1)} mm
                          </Typography>
                          <Typography variant="body2" fontWeight="medium" gutterBottom>
                            Power: {power.toFixed(2)} D
                          </Typography>
                          
                          {selectedLensType === 'Toric' && (
                            <>
                              <Typography variant="body2" fontWeight="medium" gutterBottom>
                                Cylinder: {(kSteep - kFlat).toFixed(2)} D
                              </Typography>
                              <Typography variant="body2" fontWeight="medium">
                                Axis: {kAxis}°
                              </Typography>
                            </>
                          )}
                        </Box>
                        
                        <Alert severity="info">
                          These are starting parameters based on the entered values. Always verify with diagnostic lenses and assess the fit before finalizing.
                        </Alert>
                      </CardContent>
                    </Card>
                  ) : (
                    <Paper sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Typography variant="body1" color="textSecondary" paragraph>
                        Enter patient data and press "Calculate Recommended Parameters" to see fitting recommendations.
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        The calculator will suggest base curve, diameter, and power values based on the entered measurements.
                      </Typography>
                    </Paper>
                  )}
                </Grid>
              </Grid>
            </Box>
          )}
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

export default ContactLensFittingPage;