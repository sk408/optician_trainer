import React from 'react';
import { Container, Typography, Box, Paper, Button, Grid, Card, CardContent, CardActions, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { getAllPatients, getPatientDifficulty } from '../services/patientService';
import { VisionProfile } from '../interfaces';

const PatientsPage: React.FC = () => {
  // Get patients from the service
  const patients = getAllPatients();

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Virtual Patients
          </Typography>
          <Typography paragraph>
            Select a virtual patient to begin practicing refraction procedures. Each patient has unique vision conditions for you to diagnose and correct.
          </Typography>
        </Paper>

        <Grid container spacing={3}>
          {patients.map((patient) => {
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
                    }
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
                      to={`/testing/${patient.id}`} 
                      variant="contained" 
                      color="primary" 
                      fullWidth
                    >
                      Start Testing
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>

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