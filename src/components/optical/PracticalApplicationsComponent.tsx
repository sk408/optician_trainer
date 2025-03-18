import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Paper,
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
  AccordionDetails
} from '@mui/material';
import { 
  Work as WorkIcon, 
  Lightbulb as LightbulbIcon,
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

interface PracticalExample {
  title: string;
  concept: string;
  practicalUse: string;
  realWorldExample: string;
  whyItMatters: string;
  tips: string[];
}

const practicalExamples: PracticalExample[] = [
  {
    title: "Prescription Interpretation",
    concept: "Reading and understanding prescription notation (sphere, cylinder, axis)",
    practicalUse: "Converting a written prescription into the right lenses for a patient",
    realWorldExample: "When a patient brings in a prescription reading 'OD: -2.00 -1.25 x 180', you'll need to order a right lens with -2.00 diopter sphere power and -1.25 diopter cylinder power at axis 180.",
    whyItMatters: "Incorrect interpretation can result in the wrong lenses being made, causing headaches, eyestrain, and poor vision for patients.",
    tips: [
      "Always double-check your work - a single transposed number can result in the wrong lens",
      "Remember that cylinder power is always combined with sphere power",
      "Verify if the prescription is written in plus or minus cylinder format",
      "Always note if prism is required, as this is easily overlooked"
    ]
  },
  {
    title: "Pupillary Distance Measurement",
    concept: "Measuring the distance between pupils for proper lens centration",
    practicalUse: "Ensuring optical centers of lenses align with the patient's pupils",
    realWorldExample: "When dispensing glasses to a child with a narrow PD of 52mm, you'll need to ensure the optical centers are set closer together than the frame's standard alignment.",
    whyItMatters: "Incorrect PD can cause unwanted prismatic effects, leading to eye strain, headaches, and distorted vision, especially in stronger prescriptions.",
    tips: [
      "Take PD measurements in good lighting",
      "Measure distance PD for distance glasses and near PD for reading glasses",
      "For progressive lenses, both measurements are important",
      "Digital PD meters can provide more accurate measurements than manual methods"
    ]
  },
  {
    title: "Frame Selection Based on Prescription",
    concept: "Matching appropriate frame styles and materials to prescription requirements",
    practicalUse: "Recommending frames that will work well with the patient's prescription",
    realWorldExample: "For a patient with a -7.00D prescription, you would recommend smaller frames with adjustable nose pads to minimize lens thickness and weight.",
    whyItMatters: "Improper frame selection can result in excessively thick, heavy, or cosmetically unappealing lenses and uncomfortable wear.",
    tips: [
      "High minus prescriptions benefit from smaller frames and higher index materials",
      "High plus prescriptions should avoid wire frames that reveal thick edges",
      "Strong astigmatism corrections need stable frames that won't rotate easily",
      "Consider facial features and lens thickness when recommending frame shapes"
    ]
  },
  {
    title: "Lens Material Selection",
    concept: "Understanding the properties of different lens materials",
    practicalUse: "Recommending appropriate lens materials based on prescription and lifestyle",
    realWorldExample: "For a -5.00D patient who plays sports and works outdoors, you would recommend polycarbonate or Trivex lenses for their impact resistance and UV protection.",
    whyItMatters: "The right material affects lens thickness, weight, impact resistance, and UV protection - all factors in patient satisfaction and safety.",
    tips: [
      "Standard CR-39 works well for lower prescriptions but is thicker for strong prescriptions",
      "Polycarbonate is ideal for children and sports due to impact resistance",
      "High-index materials reduce thickness but may have more aberrations",
      "Consider occupational hazards when recommending materials"
    ]
  },
  {
    title: "Progressive Lens Fitting",
    concept: "Understanding progressive lens design and proper fitting techniques",
    practicalUse: "Marking fitting heights and adjusting frames for optimal progressive lens performance",
    realWorldExample: "When fitting progressives, you measure the height from the pupil to the lower rim of the frame, ensuring there's enough vertical space for all zones of the lens.",
    whyItMatters: "Improper fitting causes narrow reading areas, distortion, and patient adaptation problems - leading to dissatisfaction and returns.",
    tips: [
      "Always measure fitting heights with the frame properly adjusted on the face",
      "Consider the patient's natural head position when measuring",
      "Ensure adequate vertical height in the frame for full benefit of the progressive design",
      "Match the progressive design to the patient's lifestyle needs"
    ]
  },
  {
    title: "Frame Adjustments",
    concept: "Understanding the mechanical principles of frame adjustment",
    practicalUse: "Modifying frames to fit patients properly and comfortably",
    realWorldExample: "When a patient's glasses slide down their nose, you adjust the temple bend and nose pads to improve stability and distribute weight evenly.",
    whyItMatters: "Proper adjustment ensures comfort, prevents slipping, maintains optical alignment, and extends the life of the frames.",
    tips: [
      "Always heat plastic frames before adjusting to prevent breakage",
      "Make small, progressive adjustments rather than large changes",
      "Ensure equal pressure on both sides for balanced fit",
      "Check that temples follow the contour behind the ear without causing pressure points"
    ]
  }
];

const PracticalApplicationsComponent: React.FC = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Practical Applications
      </Typography>
      
      <Typography paragraph color="text.secondary">
        This section bridges the gap between theoretical optical concepts and how they apply in real-world dispensing situations.
      </Typography>
      
      <Divider sx={{ mb: 3 }} />
      
      <Paper elevation={2} sx={{ p: 3, mb: 4, bgcolor: 'info.light', color: 'info.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LightbulbIcon sx={{ mr: 1 }} />
          <Typography variant="h6">
            Why Practical Knowledge Matters
          </Typography>
        </Box>
        <Typography paragraph>
          Understanding how optical theory translates to everyday patient interactions is essential for new opticians. 
          The ABO-NCLE exam tests not just your theoretical knowledge but your ability to apply it in practical scenarios.
        </Typography>
        <Typography>
          The examples below show how concepts from your textbooks directly apply to common tasks you'll perform as an optician.
        </Typography>
      </Paper>
      
      {practicalExamples.map((example, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <WorkIcon sx={{ mr: 1 }} color="primary" />
              <Typography variant="h6">{example.title}</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Optical Concept:
                  </Typography>
                  <Typography paragraph>
                    {example.concept}
                  </Typography>
                  
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Practical Application:
                  </Typography>
                  <Typography paragraph>
                    {example.practicalUse}
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1, mb: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Real-World Scenario:
                  </Typography>
                  <Typography paragraph sx={{ fontStyle: 'italic' }}>
                    {example.realWorldExample}
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="error" gutterBottom>
                    Why It Matters:
                  </Typography>
                  <Typography paragraph>
                    {example.whyItMatters}
                  </Typography>
                </Box>
                
                <Divider sx={{ mb: 2 }} />
                
                <Typography variant="subtitle1" gutterBottom>
                  Practical Tips:
                </Typography>
                <List>
                  {example.tips.map((tip, tipIndex) => (
                    <ListItem key={tipIndex} dense>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={tip} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default PracticalApplicationsComponent; 