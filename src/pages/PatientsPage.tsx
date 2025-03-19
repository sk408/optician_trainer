import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Button, Grid, Card, CardContent, CardActions, Chip, 
  ToggleButtonGroup, ToggleButton, Alert, Divider, FormControlLabel, Switch, Tooltip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { getAllPatients, getPatientDifficulty } from '../services/patientService';
import { VisionProfile } from '../interfaces';
import { School as SchoolIcon, FilterList as FilterIcon, LightbulbOutlined as TipIcon } from '@mui/icons-material';

const PatientsPage: React.FC = () => {
  // Get patients from the service
  const patients = getAllPatients();
  
  // State for filters and beginner mode
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [beginnerMode, setBeginnerMode] = useState<boolean>(true);
  const [showTutorials, setShowTutorials] = useState<boolean>(true);

  // Filter patients based on selected difficulty
  const filteredPatients = patients.filter(patient => {
    if (selectedDifficulty === 'All') return true;
    return getPatientDifficulty(patient) === selectedDifficulty;
  });

  const handleDifficultyChange = (
    event: React.MouseEvent<HTMLElement>,
    newDifficulty: string,
  ) => {
    if (newDifficulty !== null) {
      setSelectedDifficulty(newDifficulty);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth={false}>
        <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Virtual Patients
          </Typography>
          <Typography paragraph>
            Practice your optician skills with virtual patients. Each patient has unique vision conditions that require specific frame and lens solutions.
          </Typography>
          
          {beginnerMode && (
            <Alert severity="info" sx={{ mb: 3 }}>
              <Typography variant="body1" fontWeight="medium">Beginner Mode Enabled</Typography>
              <Typography variant="body2">
                Each patient case includes step-by-step guidance for selecting appropriate frames and lenses based on their prescription. Focus on learning the relationships between vision conditions and optical solutions.
              </Typography>
            </Alert>
          )}
          
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <FilterIcon fontSize="small" sx={{ mr: 1 }} /> Difficulty Filter
              </Typography>
              <ToggleButtonGroup
                value={selectedDifficulty}
                exclusive
                onChange={handleDifficultyChange}
                size="small"
              >
                <ToggleButton value="All">All</ToggleButton>
                <ToggleButton value="Easy">Easy</ToggleButton>
                <ToggleButton value="Medium">Medium</ToggleButton>
                <ToggleButton value="Hard">Hard</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={beginnerMode}
                    onChange={(e) => setBeginnerMode(e.target.checked)}
                    color="primary"
                  />
                }
                label={
                  <Tooltip title="Provides extra guidance for beginners">
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                      <SchoolIcon fontSize="small" sx={{ mr: 0.5 }} /> Beginner Mode
                    </Typography>
                  </Tooltip>
                }
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={showTutorials}
                    onChange={(e) => setShowTutorials(e.target.checked)}
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2">Show Tutorials</Typography>
                }
              />
            </Box>
          </Box>
        </Paper>

        {showTutorials && (
          <Box mb={4}>
            <Typography variant="h6" gutterBottom>
              Quick Start Tutorials
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', borderLeft: '4px solid #4caf50' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Understanding Prescriptions
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      Learn to read and interpret prescription values and what they mean for frame and lens selection.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip size="small" label="Sphere" />
                      <Chip size="small" label="Cylinder" />
                      <Chip size="small" label="Axis" />
                      <Chip size="small" label="Add Power" />
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button 
                      component={RouterLink} 
                      to="/tutorial/prescription-basics" 
                      color="primary"
                      fullWidth
                    >
                      Start Tutorial
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', borderLeft: '4px solid #2196f3' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Frame Selection Basics
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      Learn how to match frames to prescriptions, face shapes, and lifestyle needs.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip size="small" label="Frame Styles" />
                      <Chip size="small" label="Materials" />
                      <Chip size="small" label="Face Shapes" />
                      <Chip size="small" label="Measurements" />
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button 
                      component={RouterLink} 
                      to="/tutorial/frame-selection" 
                      color="primary"
                      fullWidth
                    >
                      Start Tutorial
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', borderLeft: '4px solid #ff9800' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Lens Materials & Treatments
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      Compare lens options and learn which ones to recommend for different prescriptions.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip size="small" label="Index Values" />
                      <Chip size="small" label="AR Coating" />
                      <Chip size="small" label="Photochromic" />
                      <Chip size="small" label="Progressives" />
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button 
                      component={RouterLink} 
                      to="/tutorial/lens-options" 
                      color="primary"
                      fullWidth
                    >
                      Start Tutorial
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        )}

        <Divider sx={{ my: 4 }} />
        
        <Typography variant="h5" gutterBottom>
          Virtual Patient Cases ({filteredPatients.length})
        </Typography>
        
        {filteredPatients.length === 0 ? (
          <Alert severity="info">
            No patients match your selected filters. Try changing the difficulty level.
          </Alert>
        ) : (
          <Grid container spacing={3}>
            {filteredPatients.map((patient) => {
              const difficulty = getPatientDifficulty(patient);
              return (
                <Grid item xs={12} sm={6} md={4} key={patient.id}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 3
                      },
                      borderLeft: difficulty === 'Easy' 
                        ? '4px solid #4caf50' 
                        : difficulty === 'Medium'
                          ? '4px solid #ff9800'
                          : '4px solid #f44336'
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="h2" gutterBottom>
                        {patient.name}
                      </Typography>
                      <Typography color="textSecondary" gutterBottom>
                        Age: {patient.age}
                      </Typography>
                      <Typography color="textSecondary" gutterBottom>
                        Condition: {patient.description}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Chip 
                          label={`Difficulty: ${difficulty}`} 
                          color={
                            difficulty === 'Easy' ? 'success' : 
                            difficulty === 'Medium' ? 'warning' : 
                            'error'
                          }
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                      
                      {beginnerMode && (
                        <Box sx={{ mt: 2, display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                          <Typography variant="body2" color="primary" sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <TipIcon fontSize="small" sx={{ mr: 0.5 }} />
                            Optician Focus Areas:
                          </Typography>
                          {difficulty === 'Easy' && (
                            <>
                              <Chip size="small" label="Basic Frame Fit" />
                              <Chip size="small" label="Standard Lenses" />
                            </>
                          )}
                          {difficulty === 'Medium' && (
                            <>
                              <Chip size="small" label="Lens Index" />
                              <Chip size="small" label="Astigmatism" />
                              {patient.description.includes('presbyopia') && 
                                <Chip size="small" label="Bifocals/Progressives" />
                              }
                            </>
                          )}
                          {difficulty === 'Hard' && (
                            <>
                              <Chip size="small" label="High-Index Lenses" />
                              <Chip size="small" label="Special Coatings" />
                              <Chip size="small" label="Frame Adjustments" />
                            </>
                          )}
                        </Box>
                      )}
                      
                      {patient.complications && patient.complications.length > 0 && (
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="body2" color="error" fontWeight="medium">
                            Complications:
                          </Typography>
                          <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
                            {patient.complications.map((complication, idx) => (
                              <li key={idx}>
                                <Typography variant="body2">{complication}</Typography>
                              </li>
                            ))}
                          </ul>
                        </Box>
                      )}
                    </CardContent>
                    <CardActions>
                      <Button 
                        component={RouterLink} 
                        to={`/testing/${patient.id}${beginnerMode ? '?mode=beginner' : ''}`} 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                      >
                        Start Case
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button component={RouterLink} to="/" variant="outlined" color="primary">
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PatientsPage;