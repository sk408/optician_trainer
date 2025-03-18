import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const FollowUpPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Follow-Up Recommendations
          </Typography>
          <Typography paragraph>
            This page will help practitioners learn how to provide appropriate follow-up care recommendations.
          </Typography>
          <Typography paragraph>
            Content for follow-up recommendation tools will be implemented here, including case studies and best practices.
          </Typography>
          <Button component={RouterLink} to="/" variant="contained" color="primary">
            Back to Home
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default FollowUpPage;
