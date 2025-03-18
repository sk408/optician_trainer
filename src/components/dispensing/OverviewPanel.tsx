import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Button,
  Divider,
  Alert,
  AlertTitle,
  CardMedia
} from '@mui/material';
import { 
  Check as CheckIcon,
  Info as InfoIcon,
  Download as DownloadIcon
} from '@mui/icons-material';

const OverviewPanel: React.FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        The Role of Dispensing in Opticianry
      </Typography>
      
      <Typography paragraph>
        Dispensing is one of the most critical skills for opticians and is heavily tested on the ABO-NCLE certification exams. 
        This module covers the essential knowledge and techniques you need to master dispensing procedures.
      </Typography>
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                What is Dispensing?
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Dispensing involves the entire process of delivering eyewear to a patient, including:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Frame selection based on facial features and prescription requirements" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Taking accurate measurements (PD, segment height, etc.)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Frame adjustments for proper fit" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Lens material and treatment recommendations" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Patient education on eyewear care and adaptation" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Why Dispensing Skills Matter
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Proper dispensing skills are essential for:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Patient satisfaction and comfort" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Optical performance of prescribed lenses" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Practice reputation and patient retention" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Compliance with regulatory requirements" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Reduced remakes and returns" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h5" gutterBottom>
        Dispensing Process Overview
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                1. Pre-Dispensing
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Review the prescription" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Understand patient needs and lifestyle" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Frame selection guidance" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Taking measurements" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Lens material/treatment education" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                2. Order Verification
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Lens inspection for accuracy" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Lens power verification" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Segment height/placement check" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Lens treatments verification" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Frame inspection" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                3. Delivery & Follow-Up
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Final adjustments for fit" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Patient education on adaptation" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Care and maintenance instructions" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Troubleshooting common issues" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Follow-up scheduling" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Alert severity="info" sx={{ mt: 4 }}>
        <AlertTitle>ABO Exam Focus</AlertTitle>
        <Typography variant="body2">
          The ABO exam places strong emphasis on accurate frame measurements, proper adjustment techniques, 
          and troubleshooting common dispensing issues. Approximately 30% of the ABO exam covers these dispensing topics.
        </Typography>
      </Alert>
      
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Essential Tools for Dispensing
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/assets/images/tools/pupillometer.jpg"
                alt="Pupillometer"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Pupillometer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Used to measure pupillary distance (PD) and other facial measurements accurately.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/assets/images/tools/adjustment-pliers.jpg"
                alt="Adjustment Pliers"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Adjustment Pliers
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Various specialized pliers for frame adjustments, including snipe nose and angling pliers.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/assets/images/tools/frame-heater.jpg"
                alt="Frame Heater"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Frame Heater
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Used to warm plastic frames for easier and safer adjustments without cracking.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/assets/images/tools/lensometer.jpg"
                alt="Lensometer"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Lensometer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Used to verify lens prescriptions and mark optical centers and segment heights.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button 
          variant="contained" 
          startIcon={<DownloadIcon />}
          sx={{ mr: 2 }}
        >
          Download Dispensing Checklist
        </Button>
        <Button 
          variant="outlined" 
          startIcon={<InfoIcon />}
        >
          View Dispensing Standards
        </Button>
      </Box>
    </Box>
  );
};

export default OverviewPanel; 