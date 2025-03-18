import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Divider,
  Paper,
  Alert,
  Button
} from '@mui/material';
import {
  Calculate as CalculateIcon,
  School as SchoolIcon,
  Straighten as StraightenIcon,
  Info as InfoIcon,
  MenuBook as MenuBookIcon,
  Engineering as EngineeringIcon,
  Lightbulb as LightbulbIcon
} from '@mui/icons-material';

import OpticalCalculator from '../components/optical/OpticalCalculator';
import BasicOpticsComponent from '../components/optical/BasicOpticsComponent';
import LensTypesComponent from '../components/optical/LensTypesComponent';
import PrescriptionReadingComponent from '../components/optical/PrescriptionReadingComponent';
import OpticalGlossaryComponent from '../components/optical/OpticalGlossaryComponent';
import PracticalApplicationsComponent from '../components/optical/PracticalApplicationsComponent';
import MeasurementsVisualizerComponent from '../components/optical/MeasurementsVisualizerComponent';
import { useTheme } from '../components/ThemeContext';
import { 
  calculatePrismDiopters, 
  calculatePowerChange,
  calculateEffectivePower,
  calculateCenterThickness
} from '../services/opticalCalculations';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`optics-tabpanel-${index}`}
      aria-labelledby={`optics-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const OpticalTheoryPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const { darkMode } = useTheme();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handlePrismCalculation = (inputs: Record<string, number>) => {
    return calculatePrismDiopters(inputs.distance, inputs.decentration);
  };

  const handleVertexCalculation = (inputs: Record<string, number>) => {
    return calculatePowerChange(
      inputs.originalPower, 
      inputs.originalVertex, 
      inputs.newVertex
    );
  };

  const handlePantoscopicCalculation = (inputs: Record<string, number>) => {
    return calculateEffectivePower(
      inputs.lensPower, 
      inputs.angle
    );
  };

  const handleThicknessCalculation = (inputs: Record<string, number>) => {
    return calculateCenterThickness(
      inputs.baseCurve, 
      inputs.power, 
      inputs.diameter,
      inputs.edgeThickness
    );
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom>
        Optical Theory
      </Typography>
      
      <Typography variant="subtitle1" gutterBottom color="text.secondary">
        Understand the fundamental principles of optics for ABO-NCLE exam preparation
      </Typography>
      
      <Divider sx={{ my: 3 }} />
      
      <Paper 
        elevation={1} 
        sx={{ 
          bgcolor: darkMode ? 'background.paper' : 'info.light', 
          color: darkMode ? 'text.primary' : 'info.contrastText',
          p: 2, 
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <InfoIcon color={darkMode ? 'info' : 'inherit'} />
        <Typography>
          This module covers essential optical theory concepts needed for the ABO exam, with explanations designed for beginners.
        </Typography>
      </Paper>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        <Typography variant="body1" fontWeight="medium">
          New! Enhanced for beginners to optician studies
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          We've added practical applications, simplified explanations, and interactive visualizations to help you understand optical concepts.
        </Typography>
      </Alert>
      
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            aria-label="optical theory tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab icon={<SchoolIcon />} iconPosition="start" label="Basic Optics" />
            <Tab icon={<MenuBookIcon />} iconPosition="start" label="Terminology Glossary" />
            <Tab icon={<SchoolIcon />} iconPosition="start" label="Lens Types" />
            <Tab icon={<SchoolIcon />} iconPosition="start" label="Prescriptions" />
            <Tab icon={<EngineeringIcon />} iconPosition="start" label="Practical Applications" />
            <Tab icon={<StraightenIcon />} iconPosition="start" label="Measurements" />
            <Tab icon={<CalculateIcon />} iconPosition="start" label="Optical Calculator" />
          </Tabs>
        </Box>
        
        <TabPanel value={tabValue} index={0}>
          <BasicOpticsComponent />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button 
              variant="contained" 
              color="primary" 
              endIcon={<MenuBookIcon />}
              onClick={() => setTabValue(1)}
            >
              Next: Learn Optical Terminology
            </Button>
          </Box>
        </TabPanel>
        
        <TabPanel value={tabValue} index={1}>
          <OpticalGlossaryComponent />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={() => setTabValue(0)}
            >
              Back to Basic Optics
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              endIcon={<LightbulbIcon />}
              onClick={() => setTabValue(2)}
            >
              Next: Lens Types
            </Button>
          </Box>
        </TabPanel>
        
        <TabPanel value={tabValue} index={2}>
          <LensTypesComponent />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={() => setTabValue(1)}
            >
              Back to Terminology
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              endIcon={<LightbulbIcon />}
              onClick={() => setTabValue(3)}
            >
              Next: Prescriptions
            </Button>
          </Box>
        </TabPanel>
        
        <TabPanel value={tabValue} index={3}>
          <PrescriptionReadingComponent />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={() => setTabValue(2)}
            >
              Back to Lens Types
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              endIcon={<EngineeringIcon />}
              onClick={() => setTabValue(4)}
            >
              Next: Practical Applications
            </Button>
          </Box>
        </TabPanel>
        
        <TabPanel value={tabValue} index={4}>
          <PracticalApplicationsComponent />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={() => setTabValue(3)}
            >
              Back to Prescriptions
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              endIcon={<StraightenIcon />}
              onClick={() => setTabValue(5)}
            >
              Next: Measurements
            </Button>
          </Box>
        </TabPanel>
        
        <TabPanel value={tabValue} index={5}>
          <MeasurementsVisualizerComponent />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={() => setTabValue(4)}
            >
              Back to Practical Applications
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              endIcon={<CalculateIcon />}
              onClick={() => setTabValue(6)}
            >
              Next: Optical Calculator
            </Button>
          </Box>
        </TabPanel>
        
        <TabPanel value={tabValue} index={6}>
          <OpticalCalculator 
            onPrismCalculation={handlePrismCalculation}
            onVertexCalculation={handleVertexCalculation}
            onPantoscopicCalculation={handlePantoscopicCalculation}
            onThicknessCalculation={handleThicknessCalculation}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={() => setTabValue(5)}
            >
              Back to Measurements
            </Button>
          </Box>
        </TabPanel>
      </Box>
    </Container>
  );
};

export default OpticalTheoryPage;