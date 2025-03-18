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
  Alert
} from '@mui/material';
import { 
  Visibility as VisibilityIcon, 
  VisibilityOff as VisibilityOffIcon,
  Refresh as RefreshIcon, 
  Save as SaveIcon
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

const TestingInterface: React.FC<TestingInterfaceProps> = ({
  patientId,
  onComplete,
  initialPrescription = [],
  mode = 'practice',
  showGuidance = true,
}) => {
  const { darkMode, includeSphereCorrection, includeCylinderCorrection } = useTheme();
  
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
          setGuidanceTips([
            'Move the retinoscope across the pupil and observe the light reflex',
            'Change your working distance to get a clearer view'
          ]);
          break;
        case 2: // Subjective Refraction
          setGuidanceTips([
            'Ask the patient which option provides clearer vision',
            'Make small adjustments to sphere, cylinder, and axis'
          ]);
          break;
        case 3: // Binocular Balance
          setShowActualRx(false);
          setGuidanceTips([
            'Ensure both eyes are working together properly',
            'Check for comfortable binocular vision'
          ]);
          break;
        case 4: // Near Vision
          setGuidanceTips([
            'Test near vision acuity to determine if reading glasses are needed',
            'Adjust add power for presbyopic patients'
          ]);
          break;
        case 5: // Final Prescription
          setGuidanceSuccess(['You\'ve completed all testing steps. Finalize the prescription now.']);
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
  
  // Complete the test and calculate results
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
    
    // Call the onComplete callback if provided
    if (onComplete) {
      onComplete(result);
    }
  };
  
  return (
    <Box>
      <Grid container spacing={3}>
        {/* Left side - Controls and chart */}
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
                        Complete Test
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
    </Box>
  );
};

export default TestingInterface;