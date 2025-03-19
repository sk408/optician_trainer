import React, { useState, useEffect, useCallback } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  TextField, 
  Button, 
  Slider, 
  SelectChangeEvent, 
  Paper,
  Divider,
  IconButton,
  Tooltip,
  Alert,
  Chip,
  CardMedia,
  CardActions,
  Stack,
  Switch,
  FormControlLabel,
  Collapse
} from '@mui/material';
import { 
  Visibility as VisibilityIcon, 
  VisibilityOff as VisibilityOffIcon,
  Refresh as RefreshIcon, 
  Save as SaveIcon,
  School as SchoolIcon,
  Check as CheckIcon,
  Help as HelpIcon,
  Info as InfoIcon
} from '@mui/icons-material';
import { useTheme } from './ThemeContext';
import RefractionChart from './RefractionChart';
import GuidancePanel from './GuidancePanel';
import { PrescriptionData, TestResult, TestSession, TestingInterfaceProps } from '../interfaces';
import * as testingService from '../services/testingService';

/**
 * Constants for testing interface
 */
const SPHERE_RANGE = { min: -10, max: 10, step: 0.25 };
const CYLINDER_RANGE = { min: -6, max: 0, step: 0.25 }; // Negative cylinder notation is standard in optometry
const AXIS_RANGE = { min: 0, max: 180, step: 5 };
const ADD_POWER_RANGE = { min: 0, max: 3, step: 0.25 };

// Enhanced beginner-friendly tooltips
const BEGINNER_TOOLTIPS = {
  sphere: "This is the main lens power that corrects nearsightedness (negative numbers) or farsightedness (positive numbers). Think of it as the 'overall strength' of the glasses.",
  cylinder: "This corrects astigmatism (blurry/distorted vision). It's like adding an extra curve to the lens to fix distortion caused by an irregularly shaped eye.",
  axis: "This is the direction (measured in degrees, like a compass) where the cylinder correction needs to be placed on the lens.",
  addPower: "This is extra magnification in the bottom part of glasses to help see things up close. It's usually needed as people get older (age 40+)."
};

// Added optician-specific guidance for beginners with simplified explanations
const OPTICIAN_GUIDANCE = {
  visualAcuity: [
    'Patients with uncorrected visual acuity worse than 20/40 typically need standard or high-index lenses',
    'Metal frames may be more adjustable for asymmetric fits',
    'Consider recommending anti-fatigue lenses for patients who report eye strain',
    'BEGINNER: If a patient can\'t read the big "E" on the chart (20/200), they likely need a stronger prescription'
  ],
  retinoscopy: [
    'Patients with sphere power > ±4.00 will benefit from high-index lenses to reduce thickness',
    'Astigmatism (cylinder) over -2.00 requires careful frame selection to minimize lens thickness',
    'Consider lens material options based on prescription power',
    'BEGINNER: Stronger prescriptions (over ±4.00) need special "high-index" lenses to avoid thick, heavy glasses'
  ],
  subjectiveRefraction: [
    'Higher prescriptions may require frame styles with stronger support',
    'Semi-rimless and rimless frames are not ideal for prescriptions stronger than ±4.00',
    'Patients with astigmatism may benefit from aspherical lenses to reduce distortion',
    'BEGINNER: For stronger prescriptions, recommend frames that completely surround the lens (full-rim) for better support'
  ],
  binocularBalance: [
    'Significant differences between eyes may require specialized frame adjustments',
    'Ensure equal pupillary distances are measured for optimal optical centering',
    'Consider anti-reflective coatings to improve vision quality in all lighting conditions',
    'BEGINNER: If one eye needs a much stronger prescription than the other, proper lens centering is extra important'
  ],
  nearVision: [
    'Patients with add power >+1.50 are candidates for progressive or bifocal lenses',
    'Progressive-friendly frames need adequate vertical height (minimum 28-30mm)',
    'Digital device users benefit from blue light filtering options',
    'BEGINNER: For patients over 45, make sure frames are tall enough (at least 30mm) to fit progressive lenses properly'
  ],
  finalPrescription: [
    'Match lens options to lifestyle needs and prescription requirements',
    "Consider patient's occupation and hobbies when recommending lens options",
    'Higher prescriptions require careful frame size selection to minimize edge thickness',
    'BEGINNER: Ask what the patient does for work and fun - this helps you recommend the right lens options for their lifestyle'
  ]
};

// Sample frame data for beginners to choose from
const BEGINNER_FRAMES = [
  {
    id: 'frame1',
    name: 'Classic Metal',
    material: 'Metal',
    style: 'Full-rim',
    idealFor: 'Medium to high prescriptions',
    image: 'https://placehold.co/300x150/cccccc/333333?text=Classic+Metal',
    recommendedPrescription: 'All prescription types',
    features: ['Adjustable nose pads', 'Sturdy construction', 'Good for high index lenses'],
    beginnerExplanation: 'Metal frames with nose pads are versatile and can be adjusted for a better fit. Good for most prescriptions.'
  },
  {
    id: 'frame2',
    name: 'Modern Semi-Rimless',
    material: 'Metal/Plastic',
    style: 'Semi-rimless',
    idealFor: 'Low to medium prescriptions',
    image: 'https://placehold.co/300x150/cccccc/333333?text=Semi-Rimless',
    recommendedPrescription: 'Under ±4.00 sphere, minimal cylinder',
    features: ['Lightweight', 'Modern appearance', 'Not ideal for strong prescriptions'],
    beginnerExplanation: 'These frames have no bottom rim. They look stylish but aren\'t good for strong prescriptions (over ±4.00).'
  },
  {
    id: 'frame3',
    name: 'Bold Acetate',
    material: 'Acetate',
    style: 'Full-rim',
    idealFor: 'High prescriptions with astigmatism',
    image: 'https://placehold.co/300x150/cccccc/333333?text=Bold+Acetate',
    recommendedPrescription: 'All prescription types, good for astigmatism',
    features: ['Sturdy', 'Wide color options', 'Hides thick lenses well'],
    beginnerExplanation: 'Plastic frames with thicker rims that hide strong prescription lenses well. Available in many colors.'
  }
];

// Sample lens recommendations based on prescription
const getLensRecommendations = (prescription: PrescriptionData[]) => {
  // Find maximum absolute sphere and cylinder values
  const maxAbsSphere = Math.max(
    ...prescription.map(p => Math.abs(p.sphere))
  );
  const maxAbsCylinder = Math.max(
    ...prescription.map(p => Math.abs(p.cylinder))
  );
  const hasAddPower = prescription.some(p => p.addPower && p.addPower > 0);
  
  // Basic lens recommendations
  const recommendations = [];
  
  // Index recommendation based on sphere power
  if (maxAbsSphere < 2) {
    recommendations.push({
      type: 'index',
      name: 'Standard Index (1.50)',
      description: 'Suitable for lower prescriptions up to ±2.00',
      isRecommended: true,
      beginnerExplanation: 'Basic lens material for mild prescriptions. Affordable but thicker for stronger prescriptions.'
    });
  } else if (maxAbsSphere < 4) {
    recommendations.push({
      type: 'index',
      name: 'Mid-Index (1.59)',
      description: 'Good balance of thinness and cost for medium prescriptions',
      isRecommended: true,
      beginnerExplanation: 'Medium-thin lens material. Good balance between price and thickness for moderate prescriptions.'
    });
  } else {
    recommendations.push({
      type: 'index',
      name: 'High-Index (1.67)',
      description: 'Recommended for stronger prescriptions to minimize thickness',
      isRecommended: true,
      beginnerExplanation: 'Premium thin lens material. Makes strong prescriptions much thinner and lighter, but costs more.'
    });
  }
  
  // Coating recommendations
  recommendations.push({
    type: 'coating',
    name: 'Anti-Reflective Coating',
    description: 'Reduces glare and improves clarity, especially for higher prescriptions',
    isRecommended: maxAbsSphere > 1.5 || maxAbsCylinder > 1,
    beginnerExplanation: 'Reduces glare from lights and screens. Makes glasses look better by eliminating reflections.'
  });
  
  // Lens design recommendations
  if (hasAddPower) {
    recommendations.push({
      type: 'design',
      name: 'Progressive Lenses',
      description: 'No-line multifocals for patients with add power (presbyopia)',
      isRecommended: true,
      beginnerExplanation: 'Glasses that let you see at all distances without a visible line. Good for patients over 40.'
    });
  } else {
    recommendations.push({
      type: 'design',
      name: 'Single Vision',
      description: 'Standard lenses for distance correction',
      isRecommended: true,
      beginnerExplanation: 'Regular glasses that correct vision for one distance only (usually for seeing far away).'
    });
  }
  
  return recommendations;
};

const TestingInterface: React.FC<TestingInterfaceProps> = ({
  patientId,
  onComplete,
  initialPrescription = [],
  mode = 'practice',
  showGuidance = true,
}) => {
  const { darkMode, includeSphereCorrection, includeCylinderCorrection } = useTheme();
  
  // State for beginner mode
  const [beginnerMode, setBeginnerMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('beginnerMode');
    return savedMode ? JSON.parse(savedMode) : window.location.search.includes('mode=beginner');
  });
  
  // Save beginner mode preference
  useEffect(() => {
    localStorage.setItem('beginnerMode', JSON.stringify(beginnerMode));
  }, [beginnerMode]);
  
  // State for showing explanations
  const [showExplanations, setShowExplanations] = useState<{[key: string]: boolean}>({
    sphere: false,
    cylinder: false,
    axis: false,
    addPower: false
  });
  
  // State for testing session
  const [session, setSession] = useState<TestSession | null>(null);
  const [currentEye, setCurrentEye] = useState<'left' | 'right'>('right');
  const [currentStep, setCurrentStep] = useState(0);
  
  // State for prescription values
  const [sphere, setSphere] = useState(0);
  const [cylinder, setCylinder] = useState(0);
  const [axis, setAxis] = useState(0);
  const [addPower, setAddPower] = useState(0);
  const [prescription, setPrescription] = useState<PrescriptionData[]>([]);
  
  // State for UI feedback
  const [showActualRx, setShowActualRx] = useState(false);
  const [guidanceTips, setGuidanceTips] = useState<string[]>([]);
  const [guidanceErrors, setGuidanceErrors] = useState<string[]>([]);
  const [guidanceSuccess, setGuidanceSuccess] = useState<string[]>([]);
  const [testCompleted, setTestCompleted] = useState(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  
  // Add a state for optician-specific context
  const [showOpticianContext, setShowOpticianContext] = useState(beginnerMode);
  
  // Add states for optician-specific components
  const [showFrameSelection, setShowFrameSelection] = useState(false);
  const [selectedFrame, setSelectedFrame] = useState('');
  const [lensRecommendations, setLensRecommendations] = useState<any[]>([]);
  
  // Initialize testing session
  useEffect(() => {
    if (patientId) {
      const newSession = testingService.startTestSession(patientId);
      setSession(newSession);
      
      // Initialize empty prescription for both eyes
      const initialRx: PrescriptionData[] = initialPrescription.length > 0 
        ? initialPrescription
        : [
            { eye: 'right', sphere: 0, cylinder: 0, axis: 0 },
            { eye: 'left', sphere: 0, cylinder: 0, axis: 0 }
          ];
      
      setPrescription(initialRx);
      
      // Set initial values based on right eye (default starting eye)
      const rightEye = initialRx.find(p => p.eye === 'right');
      if (rightEye) {
        setSphere(rightEye.sphere);
        setCylinder(rightEye.cylinder);
        setAxis(rightEye.axis);
        setAddPower(rightEye.addPower || 0);
      }
      
      // Set initial guidance
      if (mode === 'tutorial') {
        setGuidanceTips([
          'Start by testing the patient\'s visual acuity to establish a baseline',
          'Cover one eye at a time to test each eye independently',
          'Ask the patient to read the smallest line of letters they can see clearly'
        ]);
      }
    }
  }, [patientId, initialPrescription, mode]);
  
  // Handle eye change
  const handleEyeChange = (event: SelectChangeEvent) => {
    const newEye = event.target.value as 'left' | 'right';
    setCurrentEye(newEye);
    
    // Update the current values to reflect the selected eye
    const eyeRx = prescription.find(p => p.eye === newEye);
    if (eyeRx) {
      setSphere(eyeRx.sphere);
      setCylinder(eyeRx.cylinder);
      setAxis(eyeRx.axis);
      setAddPower(eyeRx.addPower || 0);
    }
    
    // Update guidance
    setGuidanceTips([`Now testing the ${newEye === 'left' ? 'left (OS)' : 'right (OD)'} eye`]);
  };
  
  // Handle prescription updates
  const updatePrescription = useCallback(() => {
    setPrescription(prev => 
      prev.map(p => 
        p.eye === currentEye 
          ? { 
              ...p, 
              sphere: sphere, 
              cylinder: cylinder, 
              axis: axis, 
              addPower: currentStep >= 4 ? addPower : p.addPower 
            }
          : p
      )
    );
    
    // Update session data
    if (session) {
      testingService.updateTestSession(
        session.id, 
        prescription.map(p => 
          p.eye === currentEye 
            ? { 
                ...p, 
                sphere: sphere, 
                cylinder: cylinder, 
                axis: axis, 
                addPower: currentStep >= 4 ? addPower : p.addPower 
              }
            : p
        )
      );
    }
  }, [sphere, cylinder, axis, addPower, currentEye, prescription, session, currentStep]);
  
  // Update prescription when values change
  useEffect(() => {
    updatePrescription();
  }, [sphere, cylinder, axis, addPower, currentEye, updatePrescription]);
  
  // Handle value changes
  const handleSphereChange = (_: Event, value: number | number[]) => {
    setSphere(value as number);
  };
  
  const handleCylinderChange = (_: Event, value: number | number[]) => {
    setCylinder(value as number);
  };
  
  const handleAxisChange = (_: Event, value: number | number[]) => {
    setAxis(value as number);
  };
  
  const handleAddPowerChange = (_: Event, value: number | number[]) => {
    setAddPower(value as number);
  };
  
  // Step navigation
  const handleNext = () => {
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    
    // Reset guidance
    setGuidanceTips([]);
    setGuidanceErrors([]);
    setGuidanceSuccess([]);
    
    // Provide step-specific guidance
    if (mode === 'tutorial' || mode === 'practice') {
      switch (nextStep) {
        case 1: // Retinoscopy
          if (beginnerMode) {
            setGuidanceTips([
              ...OPTICIAN_GUIDANCE.retinoscopy,
              'Move the retinoscope across the pupil and observe the light reflex',
              'Change your working distance to get a clearer view'
            ]);
          } else {
            setGuidanceTips([
              'Move the retinoscope across the pupil and observe the light reflex',
              'Change your working distance to get a clearer view'
            ]);
          }
          break;
        case 2: // Subjective Refraction
          if (beginnerMode) {
            setGuidanceTips([
              ...OPTICIAN_GUIDANCE.subjectiveRefraction,
              'Ask the patient which option provides clearer vision',
              'Make small adjustments to sphere, cylinder, and axis'
            ]);
          } else {
            setGuidanceTips([
              'Ask the patient which option provides clearer vision',
              'Make small adjustments to sphere, cylinder, and axis'
            ]);
          }
          break;
        case 3: // Binocular Balance
          setShowActualRx(false);
          if (beginnerMode) {
            setGuidanceTips([
              ...OPTICIAN_GUIDANCE.binocularBalance,
              'Ensure both eyes are working together properly',
              'Check for comfortable binocular vision'
            ]);
          } else {
            setGuidanceTips([
              'Ensure both eyes are working together properly',
              'Check for comfortable binocular vision'
            ]);
          }
          break;
        case 4: // Near Vision
          if (beginnerMode) {
            setGuidanceTips([
              ...OPTICIAN_GUIDANCE.nearVision,
              'Test near vision acuity to determine if reading glasses are needed',
              'Adjust add power for presbyopic patients'
            ]);
          } else {
            setGuidanceTips([
              'Test near vision acuity to determine if reading glasses are needed',
              'Adjust add power for presbyopic patients'
            ]);
          }
          break;
        case 5: // Final Prescription
          if (beginnerMode) {
            setGuidanceSuccess([
              'You\'ve completed all testing steps. Now you\'ll learn how to select frames and lenses for this prescription.'
            ]);
            setGuidanceTips([
              ...OPTICIAN_GUIDANCE.finalPrescription
            ]);
          } else {
            setGuidanceSuccess(['You\'ve completed all testing steps. Finalize the prescription now.']);
          }
          break;
      }
    }
  };
  
  const handleBack = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
    setGuidanceTips([]);
    setGuidanceErrors([]);
    setGuidanceSuccess([]);
  };
  
  // Handle resetting values
  const handleReset = () => {
    // Reset to zero or initial values
    setSphere(0);
    setCylinder(0);
    setAxis(0);
    setAddPower(0);
    setGuidanceTips(['Values have been reset to zero']);
  };
  
  // Toggle showing the actual prescription (for practice mode)
  const toggleShowActualRx = () => {
    setShowActualRx(prev => !prev);
  };
  
  // Generate lens recommendations when prescription changes in beginner mode
  useEffect(() => {
    if (beginnerMode && prescription.length > 0) {
      setLensRecommendations(getLensRecommendations(prescription));
    }
  }, [beginnerMode, prescription]);
  
  // Modified Complete test function
  const handleCompleteTest = () => {
    if (!session) return;
    
    // Complete the session
    const completedSession = testingService.completeTestSession(
      session.id,
      prescription,
      `Test completed in ${mode} mode`
    );
    
    if (!completedSession) return;
    
    // In a real app, we would get the actual prescription from the patient record
    // For this demo, we'll simulate it with slightly different values
    const actualPrescription: PrescriptionData[] = [
      { 
        eye: 'right', 
        sphere: -2.75, 
        cylinder: -0.75, 
        axis: 90,
        addPower: 1.0 
      },
      { 
        eye: 'left', 
        sphere: -3.25, 
        cylinder: -0.50, 
        axis: 85,
        addPower: 1.0
      }
    ];
    
    // Calculate accuracy and generate feedback
    const accuracy = testingService.calculateAccuracy(actualPrescription, prescription);
    const feedback = testingService.generateFeedback(actualPrescription, prescription);
    
    // Save the test result
    const result = testingService.saveTestResult(
      session.id,
      actualPrescription,
      prescription,
      accuracy,
      feedback
    );
    
    setTestResult(result);
    setTestCompleted(true);
    
    // Show success message
    setGuidanceSuccess([`Test completed with ${accuracy}% accuracy`]);
    
    // For beginner mode, show frame selection after completing the test
    if (beginnerMode) {
      setShowFrameSelection(true);
    }
    
    // Call the onComplete callback if provided
    if (onComplete) {
      onComplete(result);
    }
  };
  
  // Handle frame selection
  const handleFrameSelect = (frameId: string) => {
    setSelectedFrame(frameId);
    
    // Update guidance
    setGuidanceSuccess([
      'Good choice! You\'ve selected a frame that works with this prescription.',
      'Now you can review the lens recommendations based on the patient\'s needs.'
    ]);
  };
  
  // Set initial guidance specific to opticians for beginner mode
  useEffect(() => {
    if (beginnerMode && currentStep === 0) {
      setGuidanceTips([
        ...OPTICIAN_GUIDANCE.visualAcuity,
        'Start by testing the patient\'s visual acuity to establish a baseline',
        'Cover one eye at a time to test each eye independently'
      ]);
    }
  }, [beginnerMode, currentStep]);
  
  // Add toggleExplanation function
  const toggleExplanation = (field: string) => {
    setShowExplanations(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };
  
  return (
    <Box>
      {/* Beginner Mode Indicator */}
      {beginnerMode && (
        <Alert 
          severity="info" 
          sx={{ mb: 2 }}
          icon={<SchoolIcon />}
        >
          <Typography variant="body1" fontWeight="medium">Optician Training Mode</Typography>
          <Typography variant="body2">
            Learn how to select appropriate frames and lenses based on this patient's prescription needs.
          </Typography>
        </Alert>
      )}
      
      {/* Frame selection view shown after test completion in beginner mode */}
      {showFrameSelection ? (
        <Box>
          <Typography variant="h5" gutterBottom>
            Frame & Lens Selection
          </Typography>
          <Typography paragraph>
            Based on the patient's prescription, recommend an appropriate frame and lenses.
          </Typography>
          
          <Grid container spacing={3}>
            {/* Frame options */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                Recommended Frames
              </Typography>
              <Grid container spacing={2}>
                {BEGINNER_FRAMES.map((frame) => (
                  <Grid item xs={12} md={4} key={frame.id}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        border: selectedFrame === frame.id ? '2px solid #2196f3' : 'none',
                        boxShadow: selectedFrame === frame.id ? '0 0 8px rgba(33, 150, 243, 0.5)' : 'inherit'
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={frame.image}
                        alt={frame.name}
                      />
                      <CardContent>
                        <Typography variant="h6" component="div">
                          {frame.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {frame.material} · {frame.style}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          <strong>Ideal for:</strong> {frame.idealFor}
                        </Typography>
                        <Box mt={1}>
                          {frame.features.map((feature, index) => (
                            <Typography key={index} variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              • {feature}
                            </Typography>
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions>
                        <Button 
                          size="small" 
                          color="primary"
                          variant={selectedFrame === frame.id ? "contained" : "outlined"}
                          onClick={() => handleFrameSelect(frame.id)}
                          startIcon={selectedFrame === frame.id ? <CheckIcon /> : null}
                          fullWidth
                        >
                          {selectedFrame === frame.id ? "Selected" : "Select Frame"}
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            
            {/* Lens recommendations */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Lens Recommendations
                </Typography>
                <Typography variant="body2" paragraph>
                  Based on the prescription: 
                  OD: {prescription.find(p => p.eye === 'right')?.sphere.toFixed(2)}/{prescription.find(p => p.eye === 'right')?.cylinder.toFixed(2)} x {prescription.find(p => p.eye === 'right')?.axis}
                  OS: {prescription.find(p => p.eye === 'left')?.sphere.toFixed(2)}/{prescription.find(p => p.eye === 'left')?.cylinder.toFixed(2)} x {prescription.find(p => p.eye === 'left')?.axis}
                </Typography>
                
                <Divider sx={{ my: 2 }} />
                
                <Stack spacing={2}>
                  {lensRecommendations.map((rec, index) => (
                    <Box key={index}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body1" fontWeight="medium">
                          {rec.name}
                        </Typography>
                        <Chip 
                          size="small" 
                          color={rec.isRecommended ? "success" : "default"}
                          label={rec.isRecommended ? "Recommended" : "Optional"}
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {rec.description}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
                
                <Divider sx={{ my: 2 }} />
                
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth
                  disabled={!selectedFrame}
                >
                  Complete Recommendation
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={showGuidance ? 8 : 12}>
            <Grid container spacing={3}>
              {/* Controls */}
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6">Controls</Typography>
                      <Box>
                        <Tooltip title="Reset values">
                          <IconButton onClick={handleReset} size="small">
                            <RefreshIcon />
                          </IconButton>
                        </Tooltip>
                        {mode === 'practice' && (
                          <Tooltip title={showActualRx ? "Hide actual Rx" : "Show actual Rx"}>
                            <IconButton onClick={toggleShowActualRx} size="small">
                              {showActualRx ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                          </Tooltip>
                        )}
                      </Box>
                    </Box>
                    
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Current Eye</InputLabel>
                      <Select
                        value={currentEye}
                        label="Current Eye"
                        onChange={handleEyeChange}
                      >
                        <MenuItem value="right">Right Eye (OD)</MenuItem>
                        <MenuItem value="left">Left Eye (OS)</MenuItem>
                      </Select>
                    </FormControl>
                    
                    {/* Sphere control */}
                    <Box sx={{ mt: 3 }}>
                      <Typography id="sphere-slider" gutterBottom>
                        Sphere (D): {sphere.toFixed(2)}
                      </Typography>
                      <Slider
                        disabled={currentStep < 2 && mode === 'exam'}
                        value={sphere}
                        onChange={handleSphereChange}
                        aria-labelledby="sphere-slider"
                        min={SPHERE_RANGE.min}
                        max={SPHERE_RANGE.max}
                        step={SPHERE_RANGE.step}
                        valueLabelDisplay="auto"
                        marks={[
                          { value: SPHERE_RANGE.min, label: SPHERE_RANGE.min.toString() },
                          { value: 0, label: '0' },
                          { value: SPHERE_RANGE.max, label: SPHERE_RANGE.max.toString() },
                        ]}
                      />
                    </Box>
                    
                    {/* Cylinder control */}
                    <Box sx={{ mt: 3 }}>
                      <Typography id="cylinder-slider" gutterBottom>
                        Cylinder (D): {cylinder.toFixed(2)}
                      </Typography>
                      <Slider
                        disabled={(currentStep < 2 && mode === 'exam') || !includeCylinderCorrection}
                        value={cylinder}
                        onChange={handleCylinderChange}
                        aria-labelledby="cylinder-slider"
                        min={CYLINDER_RANGE.min}
                        max={CYLINDER_RANGE.max}
                        step={CYLINDER_RANGE.step}
                        valueLabelDisplay="auto"
                        marks={[
                          { value: CYLINDER_RANGE.min, label: CYLINDER_RANGE.min.toString() },
                          { value: 0, label: '0' },
                        ]}
                      />
                    </Box>
                    
                    {/* Axis control */}
                    <Box sx={{ mt: 3 }}>
                      <Typography id="axis-slider" gutterBottom>
                        Axis (°): {axis}
                      </Typography>
                      <Slider
                        disabled={(currentStep < 2 && mode === 'exam') || cylinder === 0 || !includeCylinderCorrection}
                        value={axis}
                        onChange={handleAxisChange}
                        aria-labelledby="axis-slider"
                        min={AXIS_RANGE.min}
                        max={AXIS_RANGE.max}
                        step={AXIS_RANGE.step}
                        valueLabelDisplay="auto"
                        marks={[
                          { value: 0, label: '0°' },
                          { value: 90, label: '90°' },
                          { value: 180, label: '180°' },
                        ]}
                      />
                    </Box>
                    
                    {/* Add power (only shown in near vision testing step) */}
                    {currentStep >= 4 && (
                      <Box sx={{ mt: 3 }}>
                        <Typography id="add-power-slider" gutterBottom>
                          Add Power (D): {addPower.toFixed(2)}
                        </Typography>
                        <Slider
                          value={addPower}
                          onChange={handleAddPowerChange}
                          aria-labelledby="add-power-slider"
                          min={ADD_POWER_RANGE.min}
                          max={ADD_POWER_RANGE.max}
                          step={ADD_POWER_RANGE.step}
                          valueLabelDisplay="auto"
                          marks={[
                            { value: 0, label: '0' },
                            { value: 1.5, label: '1.5' },
                            { value: 3, label: '3.0' },
                          ]}
                        />
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
              
              {/* Refraction Chart */}
              <Grid item xs={12} md={8}>
                <RefractionChart 
                  prescription={prescription}
                  comparePrescription={showActualRx ? [
                    { eye: 'right', sphere: -2.75, cylinder: -0.75, axis: 90 },
                    { eye: 'left', sphere: -3.25, cylinder: -0.50, axis: 85 }
                  ] : undefined}
                  currentSphere={sphere}
                  currentCylinder={cylinder}
                  currentAxis={axis}
                  testActive={true}
                  interactive={currentStep >= 2}
                  title={`Refraction Test - ${currentStep >= 5 ? 'Final Prescription' : 'Step ' + (currentStep + 1)}`}
                  width={undefined}
                  height={400}
                />
              </Grid>
              
              {/* Test status and navigation */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, mt: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="subtitle1">
                        Current step: {currentStep + 1} of 6
                      </Typography>
                      {beginnerMode && (
                        <Box sx={{ mt: 1 }}>
                          <Chip 
                            icon={<SchoolIcon fontSize="small" />}
                            label="Optician Focus"
                            size="small"
                            color="primary"
                            sx={{ mr: 1 }}
                          />
                          {currentStep === 5 && (
                            <Chip 
                              label="Frame & Lens Selection" 
                              size="small" 
                              color="secondary"
                            />
                          )}
                        </Box>
                      )}
                      {testResult && (
                        <Alert severity={testResult.accuracy >= 75 ? "success" : "info"} sx={{ mt: 1 }}>
                          Accuracy: {testResult.accuracy}% - {testResult.feedback}
                        </Alert>
                      )}
                    </Box>
                    
                    <Box>
                      <Button
                        variant="outlined"
                        disabled={currentStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      
                      {currentStep < 5 ? (
                        <Button 
                          variant="contained" 
                          onClick={handleNext}
                        >
                          Next
                        </Button>
                      ) : (
                        <Button 
                          variant="contained" 
                          color="success"
                          onClick={handleCompleteTest}
                          disabled={testCompleted}
                          startIcon={<SaveIcon />}
                        >
                          {beginnerMode ? 'Proceed to Frame Selection' : 'Complete Test'}
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          
          {/* Right side - Guidance panel */}
          {showGuidance && (
            <Grid item xs={12} md={4}>
              <GuidancePanel 
                currentStep={currentStep}
                patientName=""
                eyeType={currentEye}
                tips={guidanceTips}
                errors={guidanceErrors}
                success={guidanceSuccess}
              />
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default TestingInterface;