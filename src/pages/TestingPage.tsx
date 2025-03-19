import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Button, 
  Grid,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Divider
} from '@mui/material';
import TestingInterface from '../components/TestingInterface';
import { getPatientById } from '../services/patientService';
import { PrescriptionData, TestResult, VisionProfile } from '../interfaces';
import { useTheme } from '../components/ThemeContext';

// Testing steps
const TESTING_STEPS = [
  'Visual Acuity',
  'Retinoscopy',
  'Subjective Refraction',
  'Binocular Balance',
  'Near Vision',
  'Final Prescription'
];

const TestingPage: React.FC = () => {
  const { patientId } = useParams<{ patientId: string }>();
  const [activeStep, setActiveStep] = useState(0);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [patient, setPatient] = useState<VisionProfile | null>(null);
  const { darkMode } = useTheme();

  // Load patient data
  useEffect(() => {
    if (patientId) {
      const foundPatient = getPatientById(patientId);
      if (foundPatient) {
        setPatient(foundPatient);
      }
    }
  }, [patientId]);

  // Handle test completion
  const handleTestComplete = (result: TestResult) => {
    setTestResult(result);
    // In a real app, we might save this result to a database or local storage
    console.log('Test completed with result:', result);
  };

  // Convert patient data to prescription format for initial values
  const getInitialPrescription = (): PrescriptionData[] => {
    if (!patient) return [];
    
    return [
      {
        eye: 'right',
        sphere: 0, // Start with zeros for testing
        cylinder: 0,
        axis: 0,
        addPower: patient.rightEye.addPower
      },
      {
        eye: 'left',
        sphere: 0, // Start with zeros for testing
        cylinder: 0,
        axis: 0,
        addPower: patient.leftEye.addPower
      }
    ];
  };
  
  if (!patient) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Patient not found
          </Typography>
          <Typography paragraph>
            The patient you're looking for does not exist or could not be loaded.
          </Typography>
          <Button component={RouterLink} to="/patients" variant="contained" color="primary">
            Back to Patients
          </Button>
        </Paper>
      </Container>
    );
  }
  
  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth={false}>
        <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" component="h1" gutterBottom>
                Testing: {patient.name}
              </Typography>
              <Typography color="textSecondary" paragraph>
                Age: {patient.age} | Condition: {patient.description}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              {patient.visualAcuity && (
                <Card variant="outlined" sx={{ mb: 2 }}>
                  <CardContent sx={{ py: 1 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Visual Acuity
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Typography variant="body2">Right (OD):</Typography>
                        <Typography variant="body2" fontWeight="medium">
                          Uncorrected: {patient.visualAcuity.rightUncorrected || 'N/A'}
                        </Typography>
                        <Typography variant="body2" fontWeight="medium">
                          Corrected: {patient.visualAcuity.rightCorrected || 'N/A'}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2">Left (OS):</Typography>
                        <Typography variant="body2" fontWeight="medium">
                          Uncorrected: {patient.visualAcuity.leftUncorrected || 'N/A'}
                        </Typography>
                        <Typography variant="body2" fontWeight="medium">
                          Corrected: {patient.visualAcuity.leftCorrected || 'N/A'}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              )}
            </Grid>
          </Grid>
          
          <Divider sx={{ mt: 2, mb: 4 }} />
          
          <Stepper 
            activeStep={activeStep} 
            sx={{ 
              mb: 4,
              display: { xs: 'none', md: 'flex' } // Hide on mobile
            }}
          >
            {TESTING_STEPS.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
          {/* Mobile step indicator */}
          <Box 
            sx={{ 
              mb: 4, 
              display: { xs: 'block', md: 'none' },
              textAlign: 'center'
            }}
          >
            <Typography variant="body1" fontWeight="medium">
              Step {activeStep + 1} of {TESTING_STEPS.length}: {TESTING_STEPS[activeStep]}
            </Typography>
          </Box>
          
          {/* Testing Interface */}
          <TestingInterface 
            patientId={patient.id}
            onComplete={handleTestComplete}
            initialPrescription={getInitialPrescription()}
            mode="practice"
            showGuidance={true}
          />
          
          {/* Test completion section shown when test is completed */}
          {testResult && (
            <Paper 
              elevation={3} 
              sx={{ 
                mt: 4, 
                p: 3, 
                borderRadius: 2,
                bgcolor: darkMode ? 'background.paper' : '#f9f9f9'
              }}
            >
              <Typography variant="h5" gutterBottom>
                Test Results
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    Your Prescription:
                  </Typography>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body2" fontWeight="medium">Right Eye (OD):</Typography>
                      {testResult.userPrescription
                        .filter(p => p.eye === 'right')
                        .map((p, idx) => (
                          <Typography key={idx} variant="body2">
                            Sphere: {p.sphere.toFixed(2)}, Cylinder: {p.cylinder.toFixed(2)}, Axis: {p.axis}°
                            {p.addPower ? `, Add: +${p.addPower.toFixed(2)}` : ''}
                          </Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" fontWeight="medium">Left Eye (OS):</Typography>
                      {testResult.userPrescription
                        .filter(p => p.eye === 'left')
                        .map((p, idx) => (
                          <Typography key={idx} variant="body2">
                            Sphere: {p.sphere.toFixed(2)}, Cylinder: {p.cylinder.toFixed(2)}, Axis: {p.axis}°
                            {p.addPower ? `, Add: +${p.addPower.toFixed(2)}` : ''}
                          </Typography>
                        ))}
                    </Grid>
                  </Grid>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    Actual Prescription:
                  </Typography>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body2" fontWeight="medium">Right Eye (OD):</Typography>
                      {testResult.actualPrescription
                        .filter(p => p.eye === 'right')
                        .map((p, idx) => (
                          <Typography key={idx} variant="body2">
                            Sphere: {p.sphere.toFixed(2)}, Cylinder: {p.cylinder.toFixed(2)}, Axis: {p.axis}°
                            {p.addPower ? `, Add: +${p.addPower.toFixed(2)}` : ''}
                          </Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" fontWeight="medium">Left Eye (OS):</Typography>
                      {testResult.actualPrescription
                        .filter(p => p.eye === 'left')
                        .map((p, idx) => (
                          <Typography key={idx} variant="body2">
                            Sphere: {p.sphere.toFixed(2)}, Cylinder: {p.cylinder.toFixed(2)}, Axis: {p.axis}°
                            {p.addPower ? `, Add: +${p.addPower.toFixed(2)}` : ''}
                          </Typography>
                        ))}
                    </Grid>
                  </Grid>
                </Grid>
                
                <Grid item xs={12}>
                  <Box sx={{ 
                    p: 2, 
                    bgcolor: testResult.accuracy >= 75 ? '#e8f5e9' : '#fff3e0',
                    borderRadius: 1,
                    mt: 2
                  }}>
                    <Typography variant="h6" gutterBottom>
                      Accuracy: {testResult.accuracy}%
                    </Typography>
                    <Typography variant="body1">
                      {testResult.feedback}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button
                  component={RouterLink}
                  to="/patients"
                  variant="contained"
                  color="primary"
                >
                  Back to Patients
                </Button>
              </Box>
            </Paper>
          )}
        </Paper>
        
        {/* Patient History Section */}
        {patient.history && (
          <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Patient History
            </Typography>
            <Typography paragraph>
              {patient.history}
            </Typography>
          </Paper>
        )}
        
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button component={RouterLink} to="/patients" variant="outlined" color="primary">
            Back to Patients
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TestingPage;