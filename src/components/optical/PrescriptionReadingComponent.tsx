import React, { useState } from 'react';
import {
  Typography,
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  TextField,
  Button,
  Alert,
  Card,
  CardContent,
  Tooltip,
  IconButton
} from '@mui/material';
import { HelpOutline as HelpIcon, CheckCircle as CheckIcon } from '@mui/icons-material';

const PrescriptionReadingComponent: React.FC = () => {
  const [quiz, setQuiz] = useState({
    rx1: { answer: '', isCorrect: null },
    rx2: { answer: '', isCorrect: null },
    rx3: { answer: '', isCorrect: null }
  });

  const handleAnswerChange = (rxKey: string, value: string) => {
    setQuiz(prev => ({
      ...prev,
      [rxKey]: {
        ...prev[rxKey as keyof typeof prev],
        answer: value,
        isCorrect: null
      }
    }));
  };

  const checkAnswer = (rxKey: string) => {
    const correctAnswers: Record<string, string> = {
      rx1: 'Hyperopia with astigmatism, right eye',
      rx2: 'Myopia, left eye',
      rx3: 'Presbyopia, add power'
    };

    const isCorrect = quiz[rxKey as keyof typeof quiz].answer.toLowerCase() === correctAnswers[rxKey].toLowerCase();
    
    setQuiz(prev => ({
      ...prev,
      [rxKey]: {
        ...prev[rxKey as keyof typeof prev],
        isCorrect
      }
    }));
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Understanding Optical Prescriptions
      </Typography>
      
      <Divider sx={{ mb: 3 }} />
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Alert severity="info" sx={{ mb: 2 }}>
            Learning to read optical prescriptions is a foundational skill for opticians. This guide is designed for complete beginners.
          </Alert>
        </Grid>
        
        {/* Prescription Basics */}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Prescription Terminology
            </Typography>
            
            <TableContainer component={Paper} variant="outlined" sx={{ my: 2 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: theme => theme.palette.primary.light }}>
                    <TableCell>Term</TableCell>
                    <TableCell>Abbreviation</TableCell>
                    <TableCell>What It Means</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell><strong>Sphere</strong></TableCell>
                    <TableCell>SPH or DS</TableCell>
                    <TableCell>The lens power that corrects nearsightedness (minus values) or farsightedness (plus values)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Cylinder</strong></TableCell>
                    <TableCell>CYL or DC</TableCell>
                    <TableCell>The lens power that corrects astigmatism</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Axis</strong></TableCell>
                    <TableCell>AX or X</TableCell>
                    <TableCell>The direction of the cylinder correction in degrees (1-180)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Add</strong></TableCell>
                    <TableCell>ADD</TableCell>
                    <TableCell>Additional power for near vision (reading), always a plus value</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Prism</strong></TableCell>
                    <TableCell>▲</TableCell>
                    <TableCell>Corrects eye alignment issues, measured in prism diopters</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Base Direction</strong></TableCell>
                    <TableCell>BI, BO, BU, BD</TableCell>
                    <TableCell>Base In, Base Out, Base Up, Base Down - the direction of the prism</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>PD</strong></TableCell>
                    <TableCell>PD</TableCell>
                    <TableCell>Pupillary Distance - the distance between pupils in millimeters</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>OD</strong></TableCell>
                    <TableCell>OD</TableCell>
                    <TableCell>Oculus Dexter - Right Eye</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>OS</strong></TableCell>
                    <TableCell>OS</TableCell>
                    <TableCell>Oculus Sinister - Left Eye</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>OU</strong></TableCell>
                    <TableCell>OU</TableCell>
                    <TableCell>Oculus Uterque - Both Eyes</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        
        {/* Prescription Format */}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              How to Read a Prescription
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      Sample Prescription
                    </Typography>
                    
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Sphere</TableCell>
                            <TableCell>Cylinder</TableCell>
                            <TableCell>Axis</TableCell>
                            <TableCell>Add</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell><strong>OD (Right)</strong></TableCell>
                            <TableCell>+2.00</TableCell>
                            <TableCell>-0.75</TableCell>
                            <TableCell>090</TableCell>
                            <TableCell>+2.50</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><strong>OS (Left)</strong></TableCell>
                            <TableCell>+1.75</TableCell>
                            <TableCell>-0.50</TableCell>
                            <TableCell>085</TableCell>
                            <TableCell>+2.50</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                    
                    <Typography variant="subtitle2" sx={{ mt: 2 }}>
                      PD: 64mm
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Breaking It Down
                </Typography>
                
                <Typography paragraph>
                  <strong>Right Eye (OD):</strong>
                </Typography>
                <Typography paragraph sx={{ pl: 2 }}>
                  • <strong>+2.00</strong>: The patient is farsighted (hyperopia) for distance vision
                  <br />
                  • <strong>-0.75</strong>: Has astigmatism that requires -0.75 diopters of correction
                  <br />
                  • <strong>090</strong>: The axis of astigmatism is at 90 degrees (vertical)
                  <br />
                  • <strong>+2.50</strong>: Needs additional +2.50 diopters for reading (presbyopia)
                </Typography>
                
                <Typography paragraph>
                  <strong>Left Eye (OS):</strong>
                </Typography>
                <Typography paragraph sx={{ pl: 2 }}>
                  • <strong>+1.75</strong>: Also farsighted, but slightly less than the right eye
                  <br />
                  • <strong>-0.50</strong>: Has less astigmatism than the right eye
                  <br />
                  • <strong>085</strong>: The axis is at 85 degrees (nearly vertical)
                  <br />
                  • <strong>+2.50</strong>: Same reading addition as the right eye
                </Typography>
                
                <Typography paragraph>
                  <strong>PD: 64mm</strong>: The distance between the centers of the pupils is 64 millimeters
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        {/* Common Mistakes */}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Common Mistakes to Avoid
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Alert severity="warning" sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold">Axis vs. Addition</Typography>
                  <Typography variant="body2">
                    Don't confuse the axis (which is measured in degrees, 1-180) with the addition (which is measured in diopters, like +1.00, +2.50).
                  </Typography>
                </Alert>
                
                <Alert severity="warning" sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold">Right vs. Left</Typography>
                  <Typography variant="body2">
                    Always double-check that you're working with the correct eye. Mixing up OD (right) and OS (left) is a common error.
                  </Typography>
                </Alert>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Alert severity="warning" sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold">Sign Confusion</Typography>
                  <Typography variant="body2">
                    Be careful with plus (+) and minus (-) signs. Switching them reverses the correction completely.
                  </Typography>
                </Alert>
                
                <Alert severity="warning" sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold">PD Measurement</Typography>
                  <Typography variant="body2">
                    Using the wrong PD can cause eye strain. Remember that PD can be expressed as a single number (binocular) or two numbers (monocular, right/left).
                  </Typography>
                </Alert>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        {/* Practice Section */}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Practice Exercises
            </Typography>
            <Typography paragraph>
              Look at these prescription components and identify what they represent.
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      Example 1: <strong>OD +1.50 -0.75 x 180</strong>
                      <Tooltip title="This represents a right eye prescription with hyperopia and astigmatism">
                        <IconButton size="small">
                          <HelpIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="What does this prescription correct?"
                      value={quiz.rx1.answer}
                      onChange={(e) => handleAnswerChange('rx1', e.target.value)}
                      sx={{ mb: 2 }}
                    />
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={() => checkAnswer('rx1')}
                    >
                      Check
                    </Button>
                    {quiz.rx1.isCorrect !== null && (
                      <Alert 
                        severity={quiz.rx1.isCorrect ? "success" : "error"}
                        sx={{ mt: 2 }}
                      >
                        {quiz.rx1.isCorrect 
                          ? "Correct! This prescription is for hyperopia with astigmatism in the right eye." 
                          : "Not quite. This prescription shows hyperopia (+1.50) with astigmatism (-0.75) at axis 180 in the right eye (OD)."}
                      </Alert>
                    )}
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      Example 2: <strong>OS -2.25 DS</strong>
                      <Tooltip title="This represents a left eye prescription with myopia">
                        <IconButton size="small">
                          <HelpIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="What does this prescription correct?"
                      value={quiz.rx2.answer}
                      onChange={(e) => handleAnswerChange('rx2', e.target.value)}
                      sx={{ mb: 2 }}
                    />
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={() => checkAnswer('rx2')}
                    >
                      Check
                    </Button>
                    {quiz.rx2.isCorrect !== null && (
                      <Alert 
                        severity={quiz.rx2.isCorrect ? "success" : "error"}
                        sx={{ mt: 2 }}
                      >
                        {quiz.rx2.isCorrect 
                          ? "Correct! This prescription is for myopia in the left eye." 
                          : "Not quite. This prescription shows myopia (-2.25) in the left eye (OS). DS indicates there's no astigmatism correction."}
                      </Alert>
                    )}
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      Example 3: <strong>ADD +2.00</strong>
                      <Tooltip title="This represents an addition for near vision">
                        <IconButton size="small">
                          <HelpIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="What does this prescription component indicate?"
                      value={quiz.rx3.answer}
                      onChange={(e) => handleAnswerChange('rx3', e.target.value)}
                      sx={{ mb: 2 }}
                    />
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={() => checkAnswer('rx3')}
                    >
                      Check
                    </Button>
                    {quiz.rx3.isCorrect !== null && (
                      <Alert 
                        severity={quiz.rx3.isCorrect ? "success" : "error"}
                        sx={{ mt: 2 }}
                      >
                        {quiz.rx3.isCorrect 
                          ? "Correct! This prescription component indicates an addition for near vision (presbyopia)." 
                          : "Not quite. 'ADD +2.00' is the addition for near vision, used to correct presbyopia (age-related farsightedness)."}
                      </Alert>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrescriptionReadingComponent; 