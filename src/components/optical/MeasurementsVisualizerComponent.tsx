import React, { useState } from 'react';
import {
  Typography,
  Box,
  Grid,
  Paper,
  Slider,
  Divider,
  FormControlLabel,
  Switch,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useTheme } from '../../components/ThemeContext';

interface MeasurementType {
  id: string;
  name: string;
  unit: string;
  description: string;
  normalRange: string;
  howToMeasure: string;
  whyItMatters: string;
  commonErrors: string;
}

const opticalMeasurements: MeasurementType[] = [
  {
    id: 'pd',
    name: 'Pupillary Distance (PD)',
    unit: 'mm',
    description: 'The distance between the centers of the pupils. Can be binocular (total) or monocular (for each eye separately).',
    normalRange: 'Adults: 58-72mm, Children: 42-58mm',
    howToMeasure: 'Using a PD ruler or digital pupillometer, measure from the center of one pupil to the center of the other. For monocular PD, measure from the center of the nose bridge to each pupil.',
    whyItMatters: 'Centers the optical lens power in front of the pupils. Incorrect PD causes induced prismatic effect, resulting in eye strain, headaches, and blurred vision.',
    commonErrors: 'Measuring when the patient is not looking straight ahead; not accounting for different monocular PDs; measuring without proper head alignment.'
  },
  {
    id: 'seg-height',
    name: 'Segment Height (for bifocals/progressives)',
    unit: 'mm',
    description: 'The vertical distance from the bottom of the lens to the line or optical center of the near vision portion.',
    normalRange: 'Varies by lens design, typically 14-25mm from bottom of the lens',
    howToMeasure: 'With the frame properly adjusted on the patient\'s face, mark the center of the pupil on the lens. Measure from this mark to the bottom of the frame.',
    whyItMatters: 'Ensures the near vision portion aligns with the patient\'s natural line of sight when reading. Improper height causes neck strain and adaptation issues.',
    commonErrors: 'Measuring without the frame properly aligned; not considering pantoscopic tilt; measuring in a different head position than reading position.'
  },
  {
    id: 'vertex',
    name: 'Vertex Distance',
    unit: 'mm',
    description: 'The distance from the back surface of the lens to the front surface of the cornea.',
    normalRange: '12-14mm typical for glasses',
    howToMeasure: 'Using a vertex distance gauge or ruler, measure from the back surface of the lens to the front of the cornea when the frame is properly positioned.',
    whyItMatters: 'Affects the effective power of the lens. Critical for high prescriptions, where power changes significantly with distance variations.',
    commonErrors: 'Not measuring with the frame in proper wearing position; forgetting to account for vertex in high prescriptions when converting from contact lens to spectacle prescription.'
  },
  {
    id: 'pantoscopic',
    name: 'Pantoscopic Tilt',
    unit: 'degrees',
    description: 'The vertical angle of the frame front relative to the facial plane, typically tilted downward at the bottom.',
    normalRange: '8-12 degrees',
    howToMeasure: 'Using a protractor or digital measuring device, measure the angle between the vertical plane and the frame front when properly positioned.',
    whyItMatters: 'Improves vision through all portions of progressive lenses, reduces reflections, and provides better cosmetic appearance. Affects progressive lens performance.',
    commonErrors: 'Adjusting without considering lens design; creating too much or too little tilt; not aligning both sides equally.'
  },
  {
    id: 'face-form',
    name: 'Face-Form Angle (Wrap)',
    unit: 'degrees',
    description: 'The horizontal curvature of the frame front as it follows the face contour.',
    normalRange: '5-10 degrees',
    howToMeasure: 'With the frame on a flat surface, measure the angle between the lens plane and an imaginary vertical plane that touches the center of the frame.',
    whyItMatters: 'Ensures proper fit against the face, improves peripheral vision, and reduces light entry from the sides. Important for sports frames and sunglasses.',
    commonErrors: 'Creating too much wrap for a prescription that doesn\'t account for it; adjusting asymmetrically.'
  }
];

// Demo data for visualization
const pdDemonstrationData = [
  { type: 'Very Narrow', range: '54-58mm', prevalence: '10%', consideration: 'May need special frame selection, particularly for children' },
  { type: 'Narrow', range: '58-61mm', prevalence: '25%', consideration: 'Standard smaller frames work well' },
  { type: 'Average', range: '62-64mm', prevalence: '40%', consideration: 'Most standard frames will accommodate' },
  { type: 'Wide', range: '65-68mm', prevalence: '20%', consideration: 'May need wider frame styles' },
  { type: 'Very Wide', range: '69-72mm', prevalence: '5%', consideration: 'Limited frame selection, may need special ordering' }
];

const MeasurementsVisualizerComponent: React.FC = () => {
  const { darkMode } = useTheme();
  const [pdValue, setPdValue] = useState<number>(62);
  const [vertexValue, setVertexValue] = useState<number>(12);
  const [showMoreDetail, setShowMoreDetail] = useState<boolean>(false);
  
  const handlePdChange = (event: Event, newValue: number | number[]) => {
    setPdValue(newValue as number);
  };
  
  const handleVertexChange = (event: Event, newValue: number | number[]) => {
    setVertexValue(newValue as number);
  };
  
  // Calculate how PD affects lens position
  const calculateDecentration = (pd: number, frameWidth: number = 130): number => {
    // Simple calculation to illustrate the concept - not precise
    const averagePd = 62;
    return (pd - averagePd) / 2; // In mm, how much each lens needs to be decentered
  };
  
  // Calculate effective power based on vertex distance for a -5.00D prescription
  const calculateEffectivePower = (prescription: number = -5.00, vertexDistance: number): number => {
    // Formula: P' = P / (1 - d × P)
    // Where P is original power, d is vertex distance in meters, P' is effective power
    const d = vertexDistance / 1000; // Convert mm to meters
    const effectivePower = prescription / (1 - d * prescription);
    return Math.round(effectivePower * 100) / 100; // Round to 2 decimal places
  };
  
  const decentration = calculateDecentration(pdValue);
  const effectivePower = calculateEffectivePower(-5.00, vertexValue);
  
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Optical Measurements Visualizer
      </Typography>
      
      <Typography paragraph color="text.secondary">
        Interactive visualizations to help understand how optical measurements affect vision and lens performance.
      </Typography>
      
      <Divider sx={{ mb: 3 }} />
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper 
            elevation={2} 
            sx={{ 
              p: 3, 
              mb: 3, 
              bgcolor: darkMode ? 'background.paper' : 'primary.light', 
              color: darkMode ? 'text.primary' : 'primary.contrastText' 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Why Accurate Measurements Matter
            </Typography>
            <Typography>
              Precise measurements are the foundation of properly fitted eyewear. Even small errors can dramatically 
              affect vision quality, comfort, and adaptation. For ABO-NCLE exam preparation, understanding these 
              measurements and their impact is essential.
            </Typography>
          </Paper>
        </Grid>
        
        {/* PD Visualization */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Pupillary Distance (PD) Visualization
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="caption">Narrow (54mm)</Typography>
                <Typography variant="caption">Average (62mm)</Typography>
                <Typography variant="caption">Wide (72mm)</Typography>
              </Box>
              <Slider
                value={pdValue}
                onChange={handlePdChange}
                min={54}
                max={72}
                step={1}
                marks
                valueLabelDisplay="on"
                aria-label="PD Slider"
              />
            </Box>
            
            <Typography variant="subtitle2" gutterBottom>
              Your PD: {pdValue}mm
            </Typography>
            
            <Box 
              sx={{ 
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                p: 2,
                mt: 2,
                mb: 3,
                position: 'relative',
                height: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Face outline */}
              <Box sx={{ 
                width: 160, 
                height: 80, 
                borderRadius: '50%', 
                bgcolor: 'action.hover',
                position: 'relative',
              }}>
                {/* Left eye */}
                <Box sx={{ 
                  width: 20, 
                  height: 12, 
                  borderRadius: '50%', 
                  bgcolor: 'text.primary',
                  position: 'absolute',
                  top: 30,
                  left: 50 - decentration, // Adjusts based on PD
                }}/>
                
                {/* Right eye */}
                <Box sx={{ 
                  width: 20, 
                  height: 12, 
                  borderRadius: '50%', 
                  bgcolor: 'text.primary',
                  position: 'absolute',
                  top: 30,
                  right: 50 - decentration, // Adjusts based on PD
                }}/>
                
                {/* PD Indicator */}
                <Box sx={{ 
                  position: 'absolute',
                  top: 50,
                  left: 70 - pdValue/3, // Approximate for visualization
                  width: pdValue/1.5, // Scale for visualization
                  height: 1,
                  bgcolor: 'error.main',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Typography variant="caption" sx={{ position: 'absolute', top: 5, color: 'error.main' }}>
                    {pdValue}mm
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Typography variant="body2">
              {decentration > 1 ? (
                `With a PD of ${pdValue}mm (wider than average), each lens should be decentered outward by approximately ${decentration.toFixed(1)}mm.`
              ) : decentration < -1 ? (
                `With a PD of ${pdValue}mm (narrower than average), each lens should be decentered inward by approximately ${Math.abs(decentration).toFixed(1)}mm.`
              ) : (
                `With a PD of ${pdValue}mm (close to average), minimal lens decentration is needed.`
              )}
            </Typography>
            
            {showMoreDetail && (
              <TableContainer component={Paper} sx={{ mt: 2, mb: 2 }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>PD Type</TableCell>
                      <TableCell>Range</TableCell>
                      <TableCell>Prevalence</TableCell>
                      <TableCell>Considerations</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pdDemonstrationData.map((row) => (
                      <TableRow key={row.type} sx={{ bgcolor: row.range.includes(pdValue.toString()) ? 'action.selected' : 'inherit' }}>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>{row.range}</TableCell>
                        <TableCell>{row.prevalence}</TableCell>
                        <TableCell>{row.consideration}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Paper>
        </Grid>
        
        {/* Vertex Distance Visualization */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Vertex Distance Visualization
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="caption">Close (8mm)</Typography>
                <Typography variant="caption">Average (12mm)</Typography>
                <Typography variant="caption">Far (18mm)</Typography>
              </Box>
              <Slider
                value={vertexValue}
                onChange={handleVertexChange}
                min={8}
                max={18}
                step={1}
                marks
                valueLabelDisplay="on"
                aria-label="Vertex Distance Slider"
              />
            </Box>
            
            <Typography variant="subtitle2" gutterBottom>
              Your Vertex Distance: {vertexValue}mm
            </Typography>
            
            <Box 
              sx={{ 
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                p: 2,
                mt: 2,
                mb: 3,
                height: 100,
                position: 'relative',
              }}
            >
              {/* Side view of face */}
              <Box sx={{ 
                height: 80, 
                width: 40, 
                bgcolor: 'action.hover',
                borderRadius: '50% 0 0 50%',
                position: 'absolute',
                right: 50,
                top: 10,
              }}/>
              
              {/* Eye position */}
              <Box sx={{ 
                height: 15, 
                width: 15, 
                bgcolor: 'text.primary',
                borderRadius: '50%',
                position: 'absolute',
                right: 70,
                top: 42.5,
              }}/>
              
              {/* Lens position */}
              <Box sx={{ 
                height: 30, 
                width: 3, 
                bgcolor: 'primary.main',
                position: 'absolute',
                right: 50 + vertexValue * 1.5, // Scale for visualization
                top: 35,
              }}/>
              
              {/* Vertex distance indicator */}
              <Box sx={{ 
                position: 'absolute',
                top: 60,
                right: 70,
                width: vertexValue * 1.5, // Scale for visualization
                height: 1,
                bgcolor: 'error.main',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <Typography variant="caption" sx={{ position: 'absolute', top: 5, color: 'error.main', whiteSpace: 'nowrap' }}>
                  {vertexValue}mm
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ mt: 2, p: 2, bgcolor: 'info.light', borderRadius: 1 }}>
              <Typography variant="subtitle2" color="info.contrastText">
                Power Effect: -5.00D Prescription
              </Typography>
              <Typography variant="body1" color="info.contrastText" sx={{ fontWeight: 'bold', my: 1 }}>
                Effective Power: {effectivePower}D
              </Typography>
              <Typography variant="body2" color="info.contrastText">
                {vertexValue > 12 ? (
                  `With a vertex distance of ${vertexValue}mm (larger than average), the effective power is less than the prescribed -5.00D.`
                ) : vertexValue < 12 ? (
                  `With a vertex distance of ${vertexValue}mm (smaller than average), the effective power is more than the prescribed -5.00D.`
                ) : (
                  `With a vertex distance of ${vertexValue}mm (average), the effective power is close to the prescribed -5.00D.`
                )}
              </Typography>
            </Box>
          </Paper>
        </Grid>
        
        {/* Measurements Reference */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">
              Optical Measurements Reference
            </Typography>
            <FormControlLabel
              control={
                <Switch 
                  checked={showMoreDetail}
                  onChange={() => setShowMoreDetail(!showMoreDetail)}
                  color="primary"
                />
              }
              label="Show Detailed Information"
            />
          </Box>
          
          <Grid container spacing={2}>
            {opticalMeasurements.map(measurement => (
              <Grid item xs={12} md={showMoreDetail ? 12 : 6} lg={showMoreDetail ? 6 : 4} key={measurement.id}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {measurement.name}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      Unit: {measurement.unit} | Normal Range: {measurement.normalRange}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {measurement.description}
                    </Typography>
                    
                    {showMoreDetail && (
                      <>
                        <Divider sx={{ my: 1 }} />
                        <Typography variant="subtitle2" color="primary" gutterBottom>
                          How to Measure:
                        </Typography>
                        <Typography variant="body2" paragraph>
                          {measurement.howToMeasure}
                        </Typography>
                        
                        <Typography variant="subtitle2" color="primary" gutterBottom>
                          Why It Matters:
                        </Typography>
                        <Typography variant="body2" paragraph>
                          {measurement.whyItMatters}
                        </Typography>
                        
                        <Typography variant="subtitle2" color="error" gutterBottom>
                          Common Errors:
                        </Typography>
                        <Typography variant="body2">
                          {measurement.commonErrors}
                        </Typography>
                      </>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MeasurementsVisualizerComponent; 