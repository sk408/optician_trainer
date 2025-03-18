import React, { useState } from 'react';
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
  Paper,
  Alert,
  AlertTitle,
  CardMedia,
  TextField,
  Button
} from '@mui/material';
import { 
  Check as CheckIcon,
  Info as InfoIcon,
  StraightenOutlined as MeasureIcon
} from '@mui/icons-material';

const FrameMeasurementsPanel: React.FC = () => {
  const [monoValue, setMonoValue] = useState('');
  const [horizontalPD, setHorizontalPD] = useState('');
  const [verticalPD, setVerticalPD] = useState('');
  
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Frame Measurements Explained
      </Typography>
      
      <Typography paragraph>
        Accurate frame measurements are essential for proper eyewear fit and optical performance. 
        Understanding the standard measuring system and how to take proper measurements is a core competency for opticians.
      </Typography>
      
      <Box sx={{ my: 3 }}>
        <CardMedia
          component="img"
          height="250"
          image="/assets/images/dispensing/frame-measurements-diagram.jpg"
          alt="Frame Measurements Diagram"
          sx={{ width: '100%', maxWidth: 800, margin: '0 auto', border: '1px solid #ddd' }}
        />
      </Box>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h5" gutterBottom>
        ANSI Z80.5 Standard Measurements
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                A: Eye Size (Lens Width)
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                The horizontal width of each lens, measured at the widest point from one side of the lens shape to the other.
              </Typography>
              <Typography variant="body2">
                <strong>Typical Range:</strong> 40-62mm
              </Typography>
              <Typography variant="body2">
                <strong>Measurement Tool:</strong> Millimeter ruler or frame gauge
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Importance:</strong> Determines lens size and affects frame appearance on the face
              </Typography>
              <Alert severity="info" sx={{ mt: 2 }}>
                For high prescriptions, a smaller eye size is often recommended to minimize lens thickness and weight.
              </Alert>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                B: Bridge Width (DBL)
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                The distance between the two lenses at their closest points. Also called the Distance Between Lenses (DBL).
              </Typography>
              <Typography variant="body2">
                <strong>Typical Range:</strong> 14-24mm
              </Typography>
              <Typography variant="body2">
                <strong>Measurement Tool:</strong> Millimeter ruler or frame gauge
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Importance:</strong> Must match the patient's bridge width for proper fit and comfort
              </Typography>
              <Alert severity="info" sx={{ mt: 2 }}>
                A bridge that's too narrow will pinch, while one that's too wide will cause the frame to slide down.
              </Alert>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                ED: Effective Diameter
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                The minimum diameter of a circle that would completely contain the lens shape.
              </Typography>
              <Typography variant="body2">
                <strong>Typical Range:</strong> 45-65mm
              </Typography>
              <Typography variant="body2">
                <strong>Measurement Tool:</strong> Lens clock or fitting circle
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Importance:</strong> Used for lens ordering and processing, especially for progressive lenses
              </Typography>
              <Alert severity="info" sx={{ mt: 2 }}>
                The ED must be large enough to accommodate the required minimum fitting height for multifocal lenses.
              </Alert>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                C: Temple Length
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                The length of the temple from hinge barrel to the bend (or tip), measured in a straight line.
              </Typography>
              <Typography variant="body2">
                <strong>Typical Range:</strong> 135-155mm
              </Typography>
              <Typography variant="body2">
                <strong>Measurement Tool:</strong> Millimeter ruler
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Importance:</strong> Must be long enough to reach comfortably behind the ear
              </Typography>
              <Alert severity="info" sx={{ mt: 2 }}>
                Common standard lengths are 135mm, 140mm, 145mm, 150mm, and 155mm.
              </Alert>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                D: Frame Width
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Total horizontal width of the frame from outside edge to outside edge.
              </Typography>
              <Typography variant="body2">
                <strong>Formula:</strong> A + A + B (Eye Size + Eye Size + Bridge)
              </Typography>
              <Typography variant="body2">
                <strong>Typical Range:</strong> 125-150mm
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Importance:</strong> Must match the width of the patient's face
              </Typography>
              <Alert severity="info" sx={{ mt: 2 }}>
                The frame width should approximately match the width of the face at the temples.
              </Alert>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                E: Frame Height (B Dimension)
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                The vertical height of the lens shape at its tallest point.
              </Typography>
              <Typography variant="body2">
                <strong>Typical Range:</strong> 30-45mm
              </Typography>
              <Typography variant="body2">
                <strong>Measurement Tool:</strong> Millimeter ruler or frame gauge
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Importance:</strong> Critical for multifocal lenses to ensure adequate fitting height
              </Typography>
              <Alert severity="info" sx={{ mt: 2 }}>
                Progressive lenses typically require a minimum B dimension of 28-30mm.
              </Alert>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h5" gutterBottom>
        Patient Measurements
      </Typography>
      
      <Typography paragraph>
        Beyond frame measurements, several patient-specific measurements are essential for proper lens fitting.
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Pupillary Distance (PD)
            </Typography>
            
            <Typography variant="body2" paragraph>
              The distance between the centers of the pupils, measured in millimeters. PD can be monocular (each eye separately) or binocular (total distance).
            </Typography>
            
            <Typography variant="subtitle2" gutterBottom>
              Types of PD Measurements:
            </Typography>
            
            <List dense>
              <ListItem>
                <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Distance PD" 
                  secondary="Measured with the patient looking at a distant object (6m/20ft away)"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Near PD" 
                  secondary="Typically 3-4mm less than distance PD, used for reading glasses"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Monocular PD" 
                  secondary="Measured from the center of the bridge of the nose to each pupil center"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Binocular PD" 
                  secondary="The total distance between pupils (sum of monocular PDs)"
                />
              </ListItem>
            </List>
            
            <Typography variant="body2" sx={{ mt: 2 }}>
              <strong>Typical Range:</strong> 54-74mm (binocular) or 27-37mm (monocular)
            </Typography>
            <Typography variant="body2">
              <strong>Measurement Tool:</strong> Pupillometer, PD ruler, or digital measure
            </Typography>
            
            <Alert severity="warning" sx={{ mt: 2 }}>
              <AlertTitle>Accuracy Critical</AlertTitle>
              A 1mm error in PD can induce 1 prism diopter of unwanted prismatic effect, particularly significant in higher prescriptions.
            </Alert>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Segment Height (Seg Height)
            </Typography>
            
            <Typography variant="body2" paragraph>
              For multifocal lenses, the vertical distance from the bottom of the lens to the pupil center or to where the add power should be positioned.
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <CardMedia
                component="img"
                height="180"
                image="/assets/images/dispensing/seg-height-measurement.jpg"
                alt="Segment Height Measurement"
                sx={{ width: '100%', maxWidth: 400, margin: '0 auto', border: '1px solid #ddd' }}
              />
            </Box>
            
            <Typography variant="subtitle2" gutterBottom>
              Considerations for Seg Height:
            </Typography>
            
            <List dense>
              <ListItem>
                <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Frame Fit" 
                  secondary="Must be measured with the frame properly adjusted on the patient's face"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Patient Posture" 
                  secondary="Ensure the patient is in their natural posture when measuring"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Lens Design" 
                  secondary="Different requirements for flat-top, progressive, or other multifocal designs"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                <ListItemText 
                  primary="Individual Needs" 
                  secondary="Consider patient's specific visual tasks and preferences"
                />
              </ListItem>
            </List>
            
            <Alert severity="info" sx={{ mt: 2 }}>
              <AlertTitle>Progressive Lens Fitting</AlertTitle>
              Progressive lenses typically have a fitting cross marking the pupil position and require precise measurement of both monocular PD and segment height.
            </Alert>
          </Paper>
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Measurement Practice
        </Typography>
        
        <Paper sx={{ p: 3 }}>
          <Typography variant="body2" paragraph>
            Enter your measurements for the following scenario:
          </Typography>
          
          <Typography variant="body2" paragraph>
            Patient requires progressive lenses. You've measured their binocular distance PD as 64mm.
            You need to calculate the monocular PDs and vertical fitting heights.
          </Typography>
          
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Monocular Right PD"
                variant="outlined"
                fullWidth
                value={monoValue}
                onChange={(e) => setMonoValue(e.target.value)}
                placeholder="Enter in mm"
                helperText="Assume symmetrical face"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Monocular Left PD"
                variant="outlined"
                fullWidth
                value={monoValue}
                onChange={(e) => setMonoValue(e.target.value)}
                placeholder="Enter in mm"
                helperText="Assume symmetrical face"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button 
                variant="contained" 
                fullWidth 
                startIcon={<MeasureIcon />}
                sx={{ height: '56px' }}
              >
                Calculate
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default FrameMeasurementsPanel; 