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
  CardMedia,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { 
  Check as CheckIcon,
  Info as InfoIcon,
  ExpandMore as ExpandMoreIcon,
  Warning as WarningIcon
} from '@mui/icons-material';

const AdjustmentsPanel: React.FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Frame Adjustments
      </Typography>
      
      <Typography paragraph>
        Proper frame adjustments are essential for comfort, fit, and optical performance. New opticians must master these
        techniques to ensure patient satisfaction and optimal eyewear function.
      </Typography>
      
      <Alert severity="warning" sx={{ mb: 3 }}>
        <AlertTitle>Important Safety Note</AlertTitle>
        <Typography variant="body2">
          Always warm plastic frames before adjusting. Metal frames should be adjusted at points of intended flexibility.
          Improper adjustment techniques can damage frames and void warranties.
        </Typography>
      </Alert>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h6" gutterBottom>
        Adjustment Tools
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/assets/images/tools/frame-warmer.jpg"
              alt="Frame Warmer"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Frame Warmer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Used to heat plastic frames for safe adjustment. Temperature range: 125-150°F (52-65°C).
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/assets/images/tools/nose-pad-pliers.jpg"
              alt="Nose Pad Pliers"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Nose Pad Pliers
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Specialized pliers for precise adjustments to nose pad arms on metal frames.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/assets/images/tools/angling-pliers.jpg"
              alt="Angling Pliers"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Angling Pliers
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Used for temple angle adjustments and creating precise bends in metal components.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/assets/images/tools/temple-forming-pliers.jpg"
              alt="Temple Forming Pliers"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Temple Forming Pliers
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Designed for shaping the bend in the temple to match the contour behind the ear.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Typography variant="h6" gutterBottom>
        Common Adjustment Areas
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Temple Adjustments</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Temple adjustments affect the frame's width, temple pressure, and stability on the face.
              </Typography>
              
              <Typography variant="subtitle2" gutterBottom>Adjustment Techniques:</Typography>
              
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Pantoscopic Tilt" 
                    secondary="The downward angle of the front of the frame relative to the temples. Standard is 8-12 degrees."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Temple Spread" 
                    secondary="Widen or narrow the temples to adjust pressure on the sides of the head."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Temple Contour" 
                    secondary="Shape the temple curve to match the contour behind the ear."
                  />
                </ListItem>
              </List>
              
              <Alert severity="info" sx={{ mt: 2 }}>
                <Typography variant="body2">
                  To widen frame temples: Hold the front with one hand and gently pull temples outward.
                  To narrow: Apply gentle inward pressure at the hinge area.
                </Typography>
              </Alert>
            </AccordionDetails>
          </Accordion>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Bridge Adjustments</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Bridge adjustments affect the frame's vertical positioning and weight distribution.
              </Typography>
              
              <Typography variant="subtitle2" gutterBottom>Adjustment Techniques:</Typography>
              
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Bridge Width" 
                    secondary="Widen or narrow the bridge to match the patient's nasal bridge width."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Bridge Height" 
                    secondary="Raise or lower where the frame sits on the nose."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Bridge Angle" 
                    secondary="Adjust the angle of the bridge to match the angle of the nasal bridge."
                  />
                </ListItem>
              </List>
              
              <Alert severity="warning" sx={{ mt: 2 }}>
                <Typography variant="body2">
                  For plastic frames, always use a frame warmer before adjusting the bridge. Attempting to adjust a cold plastic 
                  frame can cause breakage at the bridge.
                </Typography>
              </Alert>
            </AccordionDetails>
          </Accordion>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Nose Pad Adjustments</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Nose pad adjustments affect comfort, frame height, and alignment with the pupil.
              </Typography>
              
              <Typography variant="subtitle2" gutterBottom>Adjustment Techniques:</Typography>
              
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Pad Convergence/Divergence" 
                    secondary="Adjust pads closer together or further apart to match nasal contour."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Vertical Adjustment" 
                    secondary="Move pads up or down to change frame height on the face."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Pad Angle" 
                    secondary="Adjust pad angle to distribute pressure evenly across the pad."
                  />
                </ListItem>
              </List>
              
              <Alert severity="info" sx={{ mt: 2 }}>
                <Typography variant="body2">
                  When adjusting nose pads, make small, incremental changes and check comfort with the patient after each adjustment.
                </Typography>
              </Alert>
            </AccordionDetails>
          </Accordion>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Frame Alignment Adjustments</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Frame alignment ensures lenses are properly positioned in front of the eyes.
              </Typography>
              
              <Typography variant="subtitle2" gutterBottom>Adjustment Techniques:</Typography>
              
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Level Alignment" 
                    secondary="Ensure frame front is level with the face."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Face Form" 
                    secondary="Adjust curvature of frame front to follow facial contour."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Retroscopic Tilt" 
                    secondary="Backward tilt of frame front, typical range is 5-15 degrees."
                  />
                </ListItem>
              </List>
              
              <Alert severity="info" sx={{ mt: 2 }}>
                <Typography variant="body2">
                  Check alignment by viewing the patient from the front and sides. The frame should be parallel to the floor and 
                  symmetrical on the face.
                </Typography>
              </Alert>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h6" gutterBottom>
        Frame Material Considerations
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Acetate & Plastic Frames
              </Typography>
              
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Always warm before adjusting (125-150°F/52-65°C)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Cool completely before returning to patient" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Never attempt cold adjustments" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><WarningIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Risk of stress fractures with improper warming" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Metal Frames
              </Typography>
              
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Adjust at points of intended flexibility" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Use proper tools for specific adjustments" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Make small, incremental adjustments" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><WarningIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Avoid over-manipulation which can weaken metal" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Titanium & Memory Metal
              </Typography>
              
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Requires different techniques than standard metal" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="More resistant to adjustment" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="May require specialized tools" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><WarningIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Some adjustments may not hold due to memory properties" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Paper sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Adjustment Verification Steps
        </Typography>
        
        <List>
          <ListItem>
            <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
            <ListItemText 
              primary="1. Visual Inspection" 
              secondary="Check frame alignment, symmetry, and appropriate fit"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
            <ListItemText 
              primary="2. Patient Feedback" 
              secondary="Ask specific questions about comfort at nose, temples, and ears"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
            <ListItemText 
              primary="3. Movement Test" 
              secondary="Have patient nod and shake head to check for stability"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
            <ListItemText 
              primary="4. Position Check" 
              secondary="Verify optical centers align with pupils and appropriate pantoscopic tilt"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon><CheckIcon color="primary" /></ListItemIcon>
            <ListItemText 
              primary="5. Final Documentation" 
              secondary="Record adjustments made for future reference"
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default AdjustmentsPanel; 