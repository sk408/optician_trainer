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
  Chip
} from '@mui/material';
import { CheckCircleOutline as CheckIcon } from '@mui/icons-material';

const LensTypesComponent: React.FC = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Types of Lenses
      </Typography>
      
      <Divider sx={{ mb: 3 }} />
      
      <Grid container spacing={3}>
        {/* Spherical Lenses Section */}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Spherical Lenses
            </Typography>
            <Typography paragraph>
              Spherical lenses have the same curvature in all meridians. They are used to correct nearsightedness (myopia) and farsightedness (hyperopia).
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      Convex (Plus) Lenses
                    </Typography>
                    <Typography paragraph>
                      Convex lenses are thicker in the center than at the edges. They converge light rays and are used to correct hyperopia (farsightedness) and presbyopia.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                      <Chip label="Hyperopia" color="primary" size="small" />
                      <Chip label="Presbyopia" color="primary" size="small" />
                      <Chip label="Converging" color="secondary" size="small" />
                    </Box>
                    <List dense>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Makes objects appear larger" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Positive dioptric power (+)" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Thicker in the center" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      Concave (Minus) Lenses
                    </Typography>
                    <Typography paragraph>
                      Concave lenses are thinner in the center than at the edges. They diverge light rays and are used to correct myopia (nearsightedness).
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                      <Chip label="Myopia" color="primary" size="small" />
                      <Chip label="Diverging" color="secondary" size="small" />
                    </Box>
                    <List dense>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Makes objects appear smaller" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Negative dioptric power (-)" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Thinner in the center" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        {/* Astigmatic Lenses Section */}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Cylindrical & Toric Lenses
            </Typography>
            <Typography paragraph>
              Used to correct astigmatism, these lenses have different powers in different meridians.
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      Cylindrical Lenses
                    </Typography>
                    <Typography paragraph>
                      Cylindrical lenses have curvature in only one meridian. They focus light into a line rather than a point.
                    </Typography>
                    <Typography paragraph>
                      Pure cylindrical lenses are rarely prescribed alone but are combined with spherical correction in toric lenses.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="Astigmatism" color="primary" size="small" />
                      <Chip label="Line Focus" color="secondary" size="small" />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      Toric Lenses
                    </Typography>
                    <Typography paragraph>
                      Toric lenses combine both spherical and cylindrical corrections. They have different powers in different meridians and are used to correct astigmatism along with myopia or hyperopia.
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Prescription Format:
                    </Typography>
                    <Typography sx={{ fontFamily: 'monospace', mb: 2 }}>
                      Sphere (DS) / Cylinder (DC) x Axis
                    </Typography>
                    <Typography variant="caption">
                      Example: -2.00 DS / -1.50 DC x 180
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        {/* Multifocal Lenses Section */}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Multifocal Lenses
            </Typography>
            <Typography paragraph>
              Multifocal lenses provide correction for both distance and near vision, addressing presbyopia.
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      Bifocals
                    </Typography>
                    <Typography paragraph>
                      Bifocals have two distinct optical powers, typically with a visible line dividing the distance portion (upper) from the near portion (lower).
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Visible dividing line" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Two distinct focus areas" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Common segment styles: flat-top, round" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      Trifocals
                    </Typography>
                    <Typography paragraph>
                      Trifocals have three optical powers: distance (upper), intermediate (middle), and near (lower), with visible lines separating each section.
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Two visible dividing lines" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Three distinct focus areas" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Intermediate zone for computer use" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      Progressives
                    </Typography>
                    <Typography paragraph>
                      Progressive lenses provide a gradual change in power from distance (upper) to near (lower) without visible lines.
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="No visible lines" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Gradual power change" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Peripheral distortion in some designs" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Requires precise fitting" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        {/* Beginning Concepts Alert */}
        <Grid item xs={12}>
          <Paper elevation={1} sx={{ p: 2, bgcolor: 'info.light', color: 'info.contrastText' }}>
            <Typography variant="subtitle1">
              For Beginners: Focus on mastering these basic lens types before advancing to more complex concepts like high-index materials, specialty lenses, and lens aberrations.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LensTypesComponent; 