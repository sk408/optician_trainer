import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const TroubleshootingGuidePage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Troubleshooting Guide
          </Typography>
          <Typography paragraph>
            This page will contain comprehensive guidance for diagnosing and resolving common optometry issues.
          </Typography>
          <Typography paragraph>
            Content for the troubleshooting guide will be implemented here, including decision trees and diagnostic procedures.
          </Typography>
          <Button component={RouterLink} to="/" variant="contained" color="primary">
            Back to Home
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default TroubleshootingGuidePage; 