import React from 'react';
import { 
  Container, 
  Typography, 
  Box,
  Paper,
  Alert,
  AlertTitle
} from '@mui/material';
import DispensingBasicsContainer from '../components/dispensing/DispensingBasicsContainer';

const DispensingBasicsPage: React.FC = () => {
  return (
    <Container maxWidth={false} sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
        Dispensing Basics for Opticians
      </Typography>
      
      <Typography variant="subtitle1" color="text.secondary" paragraph sx={{ mb: 2 }}>
        Master the fundamental dispensing skills and knowledge required for the ABO-NCLE certification exams.
      </Typography>
      
      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Comprehensive Learning Resource</AlertTitle>
        This comprehensive guide provides in-depth information on frame measurements, adjustments, troubleshooting,
        and practical scenarios to help new optician students develop essential dispensing skills. Navigate between
        the tabs to explore different aspects of opticianry dispensing.
      </Alert>

      <DispensingBasicsContainer />
      
      <Paper sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Study Recommendations
        </Typography>
        <Typography variant="body2" paragraph>
          For new optician students, we recommend starting with the Overview tab to understand foundational concepts,
          then exploring Frame Measurements to learn essential metrics. The Adjustments and Troubleshooting sections provide 
          practical skills that you'll use daily in practice, while the Practice section offers interactive exercises to 
          test your knowledge.
        </Typography>
        <Typography variant="body2">
          For ABO-NCLE exam preparation, focus on memorizing standard measurements, adjustment techniques, and troubleshooting
          processes, as these are frequently tested areas. The practice scenarios also reflect common exam question formats.
        </Typography>
      </Paper>
    </Container>
  );
};

export default DispensingBasicsPage;