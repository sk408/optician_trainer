import React from 'react';
import { 
  Container, 
  Typography, 
  Box
} from '@mui/material';
import DispensingBasicsContainer from '../components/dispensing/DispensingBasicsContainer';

const DispensingBasicsPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
        Dispensing Basics for Opticians
      </Typography>
      
      <Typography variant="subtitle1" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Master the fundamental dispensing skills and knowledge required for the ABO-NCLE certification exams.
      </Typography>

      <DispensingBasicsContainer />
      
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" color="text.secondary">
          The dispensing content has been modularized to improve performance and organization.
          Additional content for adjustments, troubleshooting, and practice will be implemented
          as separate components in future updates.
        </Typography>
      </Box>
    </Container>
  );
};

export default DispensingBasicsPage;