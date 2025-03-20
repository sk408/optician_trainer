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
  ListItemText
} from '@mui/material';
import { CheckCircleOutline as CheckIcon } from '@mui/icons-material';
import { otherImages } from '../../constants/mediaAssets';

const BasicOpticsComponent: React.FC = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Basic Principles of Light
      </Typography>
      
      <Divider sx={{ mb: 3 }} />
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              What is Light?
            </Typography>
            <Typography paragraph>
              Light is a form of electromagnetic radiation that is visible to the human eye. It travels in waves and has properties of both waves and particles (photons).
            </Typography>
            <Typography paragraph>
              The visible spectrum of light ranges from approximately 380 to 700 nanometers in wavelength, representing the colors violet through red.
            </Typography>
            
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Key Properties of Light:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Light travels in straight lines in a homogeneous medium" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Light travels at different speeds through different materials" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Light can be reflected, refracted, absorbed, or transmitted" />
                </ListItem>
              </List>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image={otherImages.visibleSpectrum.path}
              alt="Visible Light Spectrum"
              sx={{ objectFit: 'contain', bgcolor: 'background.paper' }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                The Visible Spectrum
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The visible spectrum represents the portion of the electromagnetic spectrum that is visible to the human eye. Each color corresponds to a different wavelength, with violet having the shortest wavelength (380-450 nm) and red having the longest (620-700 nm).
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Reflection & Refraction
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Reflection
                </Typography>
                <Typography paragraph>
                  Reflection occurs when light bounces off a surface. In regular reflection (from smooth surfaces like mirrors), the angle of incidence equals the angle of reflection.
                </Typography>
                <Typography>
                  This principle is crucial in understanding how light interacts with lens surfaces and coatings.
                </Typography>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Refraction
                </Typography>
                <Typography paragraph>
                  Refraction is the bending of light when it passes from one medium to another with a different optical density. This bending occurs because light travels at different speeds in different materials.
                </Typography>
                <Typography>
                  This principle is fundamental to how lenses work to correct vision.
                </Typography>
              </Grid>
            </Grid>
            
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Index of Refraction (n)
              </Typography>
              <Typography paragraph>
                The index of refraction (n) is a measure of how much a material slows down light. It is defined as:
              </Typography>
              <Typography paragraph sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                n = speed of light in vacuum / speed of light in the material
              </Typography>
              <Typography>
                Common indices for optical materials:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Air: approximately 1.00" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Water: approximately 1.33" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Crown glass: approximately 1.52" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="High-index materials: 1.60-1.74" />
                </ListItem>
              </List>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicOpticsComponent; 