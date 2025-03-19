import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Alert,
  AlertTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { 
  Check as CheckIcon,
  Error as ErrorIcon,
  ExpandMore as ExpandMoreIcon,
  Help as HelpIcon,
  Build as BuildIcon
} from '@mui/icons-material';

const TroubleshootingPanel: React.FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Eyewear Troubleshooting Guide
      </Typography>
      
      <Typography paragraph>
        Troubleshooting is a critical skill for opticians. This guide covers common eyewear issues, their causes, and solutions to help new opticians diagnose and resolve patient concerns effectively.
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        <AlertTitle>Important Note</AlertTitle>
        <Typography variant="body2">
          Always begin troubleshooting by gathering complete information from the patient about when the problem started and any changes to their eyewear or routine. Verify the prescription and measurements before making adjustments.
        </Typography>
      </Alert>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h6" gutterBottom>
        Common Vision Complaints
      </Typography>
      
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="subtitle2">Complaint</Typography></TableCell>
              <TableCell><Typography variant="subtitle2">Possible Causes</Typography></TableCell>
              <TableCell><Typography variant="subtitle2">Troubleshooting Steps</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Blurry vision</TableCell>
              <TableCell>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Incorrect prescription" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Incorrect PD" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Incorrect lens height" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Lens surface issues" />
                  </ListItem>
                </List>
              </TableCell>
              <TableCell>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Verify prescription with lensometer" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Measure and compare PD" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Check OC height and segment height" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Clean lenses and check for scratches" />
                  </ListItem>
                </List>
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell>Double vision</TableCell>
              <TableCell>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Incorrect axis" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Frame misalignment" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Pantoscopic tilt issues" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Binocular vision issues" />
                  </ListItem>
                </List>
              </TableCell>
              <TableCell>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Check cylinder axis with lensometer" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Adjust frame alignment" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Adjust pantoscopic tilt" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Refer back to doctor if persists" />
                  </ListItem>
                </List>
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell>Distortion</TableCell>
              <TableCell>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Lens design issues" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Frame wrap issues" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Lens material not suitable" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Base curve selection" />
                  </ListItem>
                </List>
              </TableCell>
              <TableCell>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Check lens type and verify appropriateness" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Adjust frame wrap angle" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Consider different lens material" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Verify base curve selection" />
                  </ListItem>
                </List>
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell>Headaches/eyestrain</TableCell>
              <TableCell>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Incorrect PD" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Incorrect prescription" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Frame too tight" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><ErrorIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primary="Adaptation issues" />
                  </ListItem>
                </List>
              </TableCell>
              <TableCell>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Verify PD measurements" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Verify prescription with lensometer" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Adjust frame fit at temples and bridge" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckIcon fontSize="small" color="primary" /></ListItemIcon>
                    <ListItemText primary="Counsel on adaptation period" />
                  </ListItem>
                </List>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h6" gutterBottom>
        Progressive Lens Adaptation Issues
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Peripheral Distortion Complaints</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                Progressive lens wearers often report distortion or "swimming" sensations in peripheral vision, especially during initial adaptation.
              </Typography>
              
              <Typography variant="subtitle2" gutterBottom>Common Causes:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Lens design limitations" secondary="All progressives have some peripheral distortion" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Incorrect fitting height" secondary="Especially if too low" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Frame selection issues" secondary="Frame too small or improperly sized" />
                </ListItem>
              </List>
              
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>Solutions:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Verify fitting height and adjust if needed" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Consider premium progressive design with wider corridors" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Counsel patient on head positioning and adaptation period" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Consider alternate progressive lens design if issue persists" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Reading Area Difficulties</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                Difficulty with near vision tasks or complaints of narrow reading area are common with progressive lenses.
              </Typography>
              
              <Typography variant="subtitle2" gutterBottom>Common Causes:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Incorrect fitting height" secondary="Too high or too low" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Insufficient add power" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Corridor design too narrow" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Frame selection unsuitable" secondary="B measurement too small" />
                </ListItem>
              </List>
              
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>Solutions:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Verify add power and measurement accuracy" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Adjust frames to position lenses properly" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Educate patient on chin-up reading position" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Consider office- or computer-specific eyewear" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Difficulty Changing Focus</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                Patients reporting slow or uncomfortable transitions between viewing distances.
              </Typography>
              
              <Typography variant="subtitle2" gutterBottom>Common Causes:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Initial adaptation period" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Lens design limitations" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Patient head/eye movement habits" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Significant prescription change" />
                </ListItem>
              </List>
              
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>Solutions:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Provide coaching on proper head movements" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Ensure patient has a reasonable adaptation period (1-2 weeks)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Consider soft design progressive if patient struggles with adaptation" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Verify prescription is not overly increased from previous" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Prescription Verification Issues</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                When patient complaints can't be resolved with adjustments, the prescription may need verification.
              </Typography>
              
              <Typography variant="subtitle2" gutterBottom>Key Verification Points:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Distance power accuracy" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Add power accuracy" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Cylinder power and axis" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Segment height placement" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="PD accuracy" />
                </ListItem>
              </List>
              
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>Verification Process:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Lensometer verification at all prescribed powers" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Compare to original prescription" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Verify measurements with patient wearing frames" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Document findings for doctor consultation if needed" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h6" gutterBottom>
        Frame Fit Issues
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Sliding Frames
              </Typography>
              
              <Typography variant="subtitle2" gutterBottom>Causes:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Temples too loose or straight" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Bridge too wide" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Nose pads misaligned" />
                </ListItem>
              </List>
              
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>Solutions:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Adjust temple bend behind ears" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Adjust nose pads for better grip" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Add temple end covers for grip" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pinching or Pressure
              </Typography>
              
              <Typography variant="subtitle2" gutterBottom>Causes:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Temples too tight" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Bridge too narrow" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Nose pads too close together" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Frame front too curved" />
                </ListItem>
              </List>
              
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>Solutions:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Widen temple spread" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Adjust nose pads further apart" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Reduce face form curvature" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Uneven Alignment
              </Typography>
              
              <Typography variant="subtitle2" gutterBottom>Causes:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Asymmetrical adjustments" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Frame bent or warped" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Patient facial asymmetry" />
                </ListItem>
              </List>
              
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>Solutions:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Check and correct frame alignment" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Adjust nosepads individually" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Custom adjust for facial features" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Paper sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          When to Remake vs. When to Adjust
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" gutterBottom>
              Situations Requiring Remakes:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                <ListItemText 
                  primary="Incorrect prescription outside ANSI standards" 
                  secondary="Sphere/cylinder power off by more than ±0.25D"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                <ListItemText 
                  primary="Cylinder axis off by more than ±5° (higher cylinders)" 
                  secondary="More critical for higher cylinder powers"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                <ListItemText 
                  primary="PD off by more than 2-3mm" 
                  secondary="Especially critical for higher prescriptions"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                <ListItemText 
                  primary="Segment height off by more than 3mm" 
                  secondary="For bifocal or progressive lenses"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><ErrorIcon color="error" /></ListItemIcon>
                <ListItemText 
                  primary="Wrong lens type or material" 
                  secondary="Not matching what was ordered"
                />
              </ListItem>
            </List>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" gutterBottom>
              Issues Usually Resolved with Adjustments:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Frame fit issues" 
                  secondary="Sliding, pinching, uneven alignment"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Minor comfort complaints" 
                  secondary="Pressure points or light discomfort"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Adaptation period issues" 
                  secondary="With proper counseling and time"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Cosmetic alignment" 
                  secondary="Frame sitting crooked or uneven"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Minor pantoscopic tilt adjustments" 
                  secondary="To improve vision through progressive lenses"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default TroubleshootingPanel; 