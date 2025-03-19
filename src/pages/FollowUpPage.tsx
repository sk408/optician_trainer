import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  CardHeader, 
  Button, 
  Tabs, 
  Tab, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip
} from '@mui/material';
import { 
  CalendarMonth as CalendarIcon,
  Visibility as VisibilityIcon,
  Event as EventIcon,
  ArrowForward as ArrowForwardIcon,
  ExpandMore as ExpandMoreIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  LocalHospital as LocalHospitalIcon,
  AccessTime as AccessTimeIcon,
  MonitorHeart as MonitorHeartIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

// Follow-up schedule constants based on clinical conditions
const FOLLOW_UP_GUIDELINES = [
  {
    condition: 'Routine eye examination',
    schedule: '12-24 months',
    patientType: 'Healthy adults (18-64)',
    warningSigns: ['Vision changes', 'Eye pain', 'Flashes or floaters', 'Sensitivity to light'],
    recommendations: [
      'Regular eye exams maintain ocular health and detect early signs of disease',
      'Longer intervals may be appropriate for patients with stable vision and no risk factors',
      'Patients should report any vision changes promptly, regardless of scheduled follow-up date'
    ]
  },
  {
    condition: 'Contact lens fitting/renewal',
    schedule: '12 months',
    patientType: 'All contact lens wearers',
    warningSigns: ['Redness', 'Irritation', 'Discomfort', 'Blurred vision with lenses', 'Discharge'],
    recommendations: [
      'Annual evaluation of corneal health and lens fit',
      'Prescription renewal requires examination',
      'Patient education on proper lens care and replacement schedule',
      'Assessment of compliance with care regimen'
    ]
  },
  {
    condition: 'New spectacle prescription (significant change)',
    schedule: '2-4 weeks',
    patientType: 'Patients with prescription changes >0.75D',
    warningSigns: ['Persistent headaches', 'Inability to adapt', 'Visual discomfort', 'Dizziness'],
    recommendations: [
      'Short-term follow-up to assess adaptation',
      'Frame adjustments may be needed',
      'Consider prescription modifications if adaptation issues persist',
      'Verify optical measurements and lens parameters'
    ]
  },
  {
    condition: 'Glaucoma (stable)',
    schedule: '3-6 months',
    patientType: 'Controlled glaucoma patients',
    warningSigns: ['Eye pain', 'Vision changes', 'Redness', 'Halos around lights'],
    recommendations: [
      'Regular intraocular pressure checks',
      'Visual field testing annually or semi-annually',
      'OCT imaging as indicated',
      'Medication compliance review',
      'Prompt referral to ophthalmology for concerning changes'
    ]
  },
  {
    condition: 'Glaucoma (newly diagnosed/unstable)',
    schedule: '1-2 months',
    patientType: 'New or uncontrolled glaucoma patients',
    warningSigns: ['Worsening vision', 'Elevated pressure', 'Progression of field defects'],
    recommendations: [
      'More frequent monitoring until stabilized',
      'Coordination with ophthalmology',
      'Medication adjustment as needed',
      'Patient education on importance of compliance',
      'Discussion of long-term management plan'
    ]
  },
  {
    condition: 'Diabetic retinopathy (mild/moderate)',
    schedule: '6-12 months',
    patientType: 'Diabetic patients with early retinal changes',
    warningSigns: ['Vision changes', 'Floaters', 'Blurred vision', 'Poor blood sugar control'],
    recommendations: [
      'Retinal imaging at each visit',
      'Coordination with primary care regarding blood sugar control',
      'Patient education on blood sugar management',
      'Discussion of modifiable risk factors',
      'Potential referral to retina specialist if progressing'
    ]
  },
  {
    condition: 'Age-related macular degeneration (dry)',
    schedule: '6-12 months',
    patientType: 'Patients with dry AMD',
    warningSigns: ['Distortion in central vision', 'Difficulty reading', 'Decreased color perception'],
    recommendations: [
      'Amsler grid monitoring at home',
      'OCT imaging to monitor drusen progression',
      'Discussion of AREDS2 supplementation if appropriate',
      'Lifestyle modifications (smoking cessation, diet)',
      'Low vision resources if needed'
    ]
  },
  {
    condition: 'Pediatric patients (routine)',
    schedule: '12 months',
    patientType: 'Children with normal ocular health',
    warningSigns: ['Squinting', 'Head tilting', 'School performance issues', 'Complaints of headaches'],
    recommendations: [
      'Age-appropriate testing methodologies',
      'Binocular vision assessment',
      'Parent education on vision development',
      'Communication with school if vision-related learning issues present',
      'Discussion of screen time management'
    ]
  }
];

// Common urgent conditions requiring immediate attention
const URGENT_CONDITIONS = [
  {
    condition: 'Acute angle-closure glaucoma',
    symptoms: ['Severe eye pain', 'Nausea/vomiting', 'Blurred vision', 'Halos around lights', 'Redness'],
    timeframe: 'Immediate (same day)',
    management: 'Refer to emergency ophthalmology services; potential for permanent vision loss if untreated'
  },
  {
    condition: 'Retinal detachment',
    symptoms: ['Flashes of light', 'Sudden increase in floaters', 'Shadow/curtain in peripheral vision'],
    timeframe: 'Immediate (same day)',
    management: 'Immediate referral to retina specialist; surgical intervention likely necessary'
  },
  {
    condition: 'Chemical eye injury',
    symptoms: ['Pain', 'Redness', 'Tearing', 'Blurred vision following chemical exposure'],
    timeframe: 'Immediate (same day)',
    management: 'Initial irrigation followed by immediate ophthalmological evaluation'
  },
  {
    condition: 'Central retinal artery occlusion',
    symptoms: ['Sudden, painless vision loss in one eye'],
    timeframe: 'Immediate (within hours)',
    management: 'Emergent ophthalmology referral; considered an ocular stroke with time-sensitive treatment window'
  },
  {
    condition: 'Optic neuritis',
    symptoms: ['Pain with eye movement', 'Vision loss', 'Color vision changes'],
    timeframe: 'Urgent (1-2 days)',
    management: 'Neurological workup often needed; potential MS indicator'
  }
];

// Patient communication templates
const COMMUNICATION_TEMPLATES = [
  {
    title: "Routine Follow-Up Reminder",
    content: "Dear [Patient Name], This is a reminder that it has been [X months] since your last comprehensive eye examination. We recommend scheduling your routine eye health checkup to ensure your vision remains optimal and to screen for any potential eye conditions. Please call our office at [Practice Phone] to schedule an appointment at your convenience.",
    useCase: "Annual/biannual recall system"
  },
  {
    title: "New Prescription Adaptation Check-In",
    content: "Dear [Patient Name], As you've been using your new prescription for about two weeks now, we'd like to check how you're adapting to your new glasses. Are you experiencing any discomfort, headaches, or vision issues? If so, please contact us to schedule a quick follow-up visit for adjustments. If everything is comfortable, no action is needed.",
    useCase: "Post-dispensing follow-up"
  },
  {
    title: "Urgent Findings Follow-Up",
    content: "Dear [Patient Name], During your recent eye examination, we detected [condition] that requires prompt attention from a specialist. We've referred you to [Specialist Name] and they should be contacting you shortly to schedule an appointment. Please prioritize this appointment, as timely care is important for this condition. If you have any questions or haven't heard from the specialist within [timeframe], please contact our office.",
    useCase: "Abnormal findings requiring referral"
  },
  {
    title: "Chronic Condition Monitoring",
    content: "Dear [Patient Name], This is a reminder that your next follow-up appointment for monitoring your [condition] is due. Regular monitoring is essential to manage this condition effectively and prevent complications. Please call our office to schedule your appointment within the next [timeframe].",
    useCase: "Ongoing management of conditions like glaucoma or retinopathy"
  },
  {
    title: "Contact Lens Renewal Reminder",
    content: "Dear [Patient Name], Your contact lens prescription will expire on [date]. To continue wearing contact lenses safely, please schedule your annual contact lens evaluation. This appointment will assess your eye health, lens fit, and vision needs to ensure your contacts remain comfortable and appropriate for your eyes.",
    useCase: "Contact lens prescription renewal"
  }
];

const FollowUpPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth={false}>
        <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Follow-Up Recommendations
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Comprehensive guidelines for managing patient follow-up care and scheduling
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
            <Tab label="Follow-Up Guidelines" />
            <Tab label="Urgent Conditions" />
            <Tab label="Communication Templates" />
            <Tab label="Best Practices" />
          </Tabs>
          
          {/* Follow-Up Guidelines */}
          {tabValue === 0 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Condition-Specific Follow-Up Schedules
              </Typography>
              <Typography paragraph>
                Appropriate follow-up intervals vary based on diagnosis, risk factors, and treatment needs. 
                Below are evidence-based guidelines for common conditions seen in optometric practice.
              </Typography>
              
              <Grid container spacing={3}>
                {FOLLOW_UP_GUIDELINES.map((guideline, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                      <CardHeader 
                        title={guideline.condition} 
                        subheader={
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <AccessTimeIcon fontSize="small" color="primary" />
                            <Typography variant="body2" color="primary" sx={{ ml: 1 }}>
                              Recommended follow-up: <strong>{guideline.schedule}</strong>
                            </Typography>
                          </Box>
                        }
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          <strong>Patient type:</strong> {guideline.patientType}
                        </Typography>
                        
                        <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
                          <strong>Warning signs requiring earlier follow-up:</strong>
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                          {guideline.warningSigns.map((sign, idx) => (
                            <Chip 
                              key={idx} 
                              size="small" 
                              label={sign} 
                              color="warning"
                              icon={<WarningIcon />} 
                            />
                          ))}
                        </Box>
                        
                        <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
                          <strong>Clinical recommendations:</strong>
                        </Typography>
                        <List dense>
                          {guideline.recommendations.map((rec, idx) => (
                            <ListItem key={idx} sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 30 }}>
                                <CheckCircleIcon fontSize="small" color="success" />
                              </ListItemIcon>
                              <ListItemText primary={rec} />
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
          
          {/* Urgent Conditions */}
          {tabValue === 1 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Urgent Conditions Requiring Immediate Follow-Up
              </Typography>
              <Typography paragraph>
                Some ocular conditions require urgent or emergency care. Practitioners should be familiar with 
                these conditions and establish protocols for expedited care or referral.
              </Typography>
              
              <Grid container spacing={3}>
                {URGENT_CONDITIONS.map((condition, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card variant="outlined" sx={{ height: '100%', borderLeft: '4px solid #d32f2f' }}>
                      <CardHeader 
                        title={condition.condition} 
                        titleTypographyProps={{ color: 'error' }}
                        avatar={<LocalHospitalIcon color="error" />}
                        subheader={
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <MonitorHeartIcon fontSize="small" color="error" />
                            <Typography variant="body2" color="error" sx={{ ml: 1 }}>
                              Timeframe: <strong>{condition.timeframe}</strong>
                            </Typography>
                          </Box>
                        }
                      />
                      <CardContent>
                        <Typography variant="body2" sx={{ mt: 1, mb: 1 }}>
                          <strong>Key symptoms:</strong>
                        </Typography>
                        <List dense>
                          {condition.symptoms.map((symptom, idx) => (
                            <ListItem key={idx} sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 30 }}>
                                <WarningIcon fontSize="small" color="error" />
                              </ListItemIcon>
                              <ListItemText primary={symptom} />
                            </ListItem>
                          ))}
                        </List>
                        
                        <Typography variant="body2" sx={{ mt: 2 }}>
                          <strong>Management:</strong> {condition.management}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          
          {/* Communication Templates */}
          {tabValue === 2 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Patient Communication Templates
              </Typography>
              <Typography paragraph>
                Effective communication is essential for patient compliance with follow-up recommendations.
                These templates can be customized for your practice's communication system.
              </Typography>
              
              {COMMUNICATION_TEMPLATES.map((template, index) => (
                <Accordion key={index} sx={{ mb: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="medium">{template.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Use case:</strong> {template.useCase}
                    </Typography>
                    <Paper variant="outlined" sx={{ p: 2, bgcolor: 'background.default', mt: 1 }}>
                      <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                        {template.content}
                      </Typography>
                    </Paper>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          )}
          
          {/* Best Practices */}
          {tabValue === 3 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Follow-Up Best Practices
              </Typography>
              <Typography paragraph>
                Implementing effective follow-up protocols improves patient outcomes and practice efficiency.
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card variant="outlined">
                    <CardHeader title="Creating an Effective Recall System" />
                    <CardContent>
                      <List>
                        <ListItem>
                          <ListItemIcon><CalendarIcon color="primary" /></ListItemIcon>
                          <ListItemText 
                            primary="Schedule follow-ups at conclusion of current visit" 
                            secondary="Patients are more likely to schedule when already in the office"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><EventIcon color="primary" /></ListItemIcon>
                          <ListItemText 
                            primary="Use multi-tiered communication approach" 
                            secondary="Email, text, and phone reminders at strategic intervals (2 weeks, 1 week, 2 days before)"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><ArrowForwardIcon color="primary" /></ListItemIcon>
                          <ListItemText 
                            primary="Document patient communication preferences" 
                            secondary="Some patients prefer text while others respond better to phone calls"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><VisibilityIcon color="primary" /></ListItemIcon>
                          <ListItemText 
                            primary="Explain clinical rationale for follow-up"
                            secondary="Patients are more likely to return when they understand the importance"
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Card variant="outlined">
                    <CardHeader title="Documentation Best Practices" />
                    <CardContent>
                      <List>
                        <ListItem>
                          <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                          <ListItemText 
                            primary="Record specific follow-up recommendations" 
                            secondary="Include timeframe and clinical rationale in patient record"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                          <ListItemText 
                            primary="Document patient education provided" 
                            secondary="Note specific instructions given regarding warning signs"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                          <ListItemText 
                            primary="Note patient understanding and agreement" 
                            secondary="Record patient's acknowledgment of follow-up plan"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                          <ListItemText 
                            primary="Document missed appointments and follow-up attempts" 
                            secondary="Create audit trail of communication attempts for clinical and legal purposes"
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid item xs={12}>
                  <Card variant="outlined">
                    <CardHeader title="Special Considerations" />
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <Typography variant="subtitle1" gutterBottom>Pediatric Patients</Typography>
                          <Typography variant="body2">
                            • Coordinate with parents/guardians and school schedules<br />
                            • Consider growth-related changes in prescription needs<br />
                            • Monitor amblyopia treatment compliance closely<br />
                            • Document developmental milestones relevant to vision
                          </Typography>
                        </Grid>
                        
                        <Grid item xs={12} md={4}>
                          <Typography variant="subtitle1" gutterBottom>Geriatric Patients</Typography>
                          <Typography variant="body2">
                            • Assess mobility and transportation challenges<br />
                            • Coordinate with caregivers when appropriate<br />
                            • Consider comorbidities affecting compliance<br />
                            • More frequent monitoring for age-related conditions<br />
                            • Evaluate medication interactions affecting eyes
                          </Typography>
                        </Grid>
                        
                        <Grid item xs={12} md={4}>
                          <Typography variant="subtitle1" gutterBottom>High-Risk Patients</Typography>
                          <Typography variant="body2">
                            • Implement more aggressive recall for patients with:<br />
                            • Family history of eye disease<br />
                            • Systemic conditions affecting eyes (diabetes, hypertension)<br />
                            • History of poor compliance<br />
                            • Occupational hazards to eye health
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          )}
          
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
            <Button component={RouterLink} to="/" variant="outlined">
              Back to Home
            </Button>
            <Button component={RouterLink} to="/patients" variant="contained" color="primary">
              Manage Patients
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default FollowUpPage;
