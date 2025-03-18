import React from 'react';
import { Paper, Typography, Box, Divider, List, ListItem, ListItemIcon, ListItemText, Alert } from '@mui/material';
import { Info as InfoIcon, CheckCircle as CheckIcon, Error as ErrorIcon, Lightbulb as TipIcon } from '@mui/icons-material';
import { useTheme } from './ThemeContext';

export interface GuidancePanelProps {
  currentStep: number;
  patientName?: string;
  eyeType?: 'left' | 'right' | 'both';
  tips?: string[];
  errors?: string[];
  success?: string[];
}

const GuidancePanel: React.FC<GuidancePanelProps> = ({
  currentStep,
  patientName = '',
  eyeType = 'both',
  tips = [],
  errors = [],
  success = [],
}) => {
  const { darkMode, highContrastMode } = useTheme();
  
  // Step-specific guidance instructions
  const stepGuidance = [
    { // Step 0: Visual Acuity
      title: 'Visual Acuity Testing',
      instructions: [
        'Measure and record visual acuity for both uncorrected and corrected (if applicable) vision',
        'Start with the right eye, then test the left eye',
        'Use standard Snellen or LogMAR charts at the appropriate distance',
        'Ensure proper room lighting conditions',
      ]
    },
    { // Step 1: Retinoscopy
      title: 'Retinoscopy',
      instructions: [
        'Use the retinoscope to objectively determine the refractive error',
        'Look for the direction and speed of the light reflex',
        'Use lens bars or a phoropter to neutralize the reflex',
        'Record the sphere, cylinder, and axis for each eye',
      ]
    },
    { // Step 2: Subjective Refraction
      title: 'Subjective Refraction',
      instructions: [
        'Refine the objective findings with patient feedback',
        'Use the "Which is better, 1 or 2?" technique',
        'Adjust sphere power to achieve the clearest vision',
        'Refine cylinder power and axis using the Jackson Cross-Cylinder',
      ]
    },
    { // Step 3: Binocular Balance
      title: 'Binocular Balance',
      instructions: [
        'Ensure that both eyes are working together properly',
        'Perform binocular balancing techniques',
        'Check for proper accommodation and convergence',
        'Ensure comfortable binocular vision',
      ]
    },
    { // Step 4: Near Vision
      title: 'Near Vision Testing',
      instructions: [
        'Test near vision acuity with appropriate reading materials',
        'Determine if any add power is needed for presbyopia',
        'Verify comfortable working distances',
        'Test accommodative ability as appropriate for patient age',
      ]
    },
    { // Step 5: Final Prescription
      title: 'Final Prescription',
      instructions: [
        'Review and confirm all measurements',
        'Finalize the prescription values for both eyes',
        'Consider patient needs and lifestyle factors',
        'Ensure the prescription will provide clear, comfortable vision',
      ]
    },
  ];
  
  // Get current step guidance
  const currentGuidance = stepGuidance[currentStep] || {
    title: 'Guidance',
    instructions: ['Please proceed with the current step of the examination.']
  };
  
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 2, 
        height: '100%',
        bgcolor: darkMode ? 'background.paper' : '#ffffff',
        borderLeft: highContrastMode ? `4px solid ${darkMode ? '#ffee00' : '#3f51b5'}` : undefined,
      }}
    >
      <Typography variant="h6" gutterBottom>
        {currentGuidance.title}
        {patientName && ` - ${patientName}`}
      </Typography>
      
      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
        {eyeType === 'both' 
          ? 'Testing both eyes' 
          : `Currently testing ${eyeType === 'left' ? 'left (OS)' : 'right (OD)'} eye`
        }
      </Typography>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
        Instructions:
      </Typography>
      
      <List dense>
        {currentGuidance.instructions.map((instruction, idx) => (
          <ListItem key={idx} sx={{ py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <InfoIcon color="primary" fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={instruction} />
          </ListItem>
        ))}
      </List>
      
      {/* Success messages */}
      {success.length > 0 && (
        <Box sx={{ mt: 2 }}>
          {success.map((msg, idx) => (
            <Alert key={`success-${idx}`} severity="success" sx={{ mb: 1 }} icon={<CheckIcon />}>
              {msg}
            </Alert>
          ))}
        </Box>
      )}
      
      {/* Error messages */}
      {errors.length > 0 && (
        <Box sx={{ mt: 2 }}>
          {errors.map((msg, idx) => (
            <Alert key={`error-${idx}`} severity="error" sx={{ mb: 1 }} icon={<ErrorIcon />}>
              {msg}
            </Alert>
          ))}
        </Box>
      )}
      
      {/* Tips */}
      {tips.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
            Tips:
          </Typography>
          <List dense>
            {tips.map((tip, idx) => (
              <ListItem key={`tip-${idx}`} sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <TipIcon color="info" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={tip} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Paper>
  );
};

export default GuidancePanel;