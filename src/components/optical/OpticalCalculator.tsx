import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Alert,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
  Tab,
  Tabs
} from '@mui/material';
import { OpticalCalculation } from '../../interfaces';

// Predefined calculation configurations
const prismCalculation: OpticalCalculation = {
  id: 'prism-calculation',
  name: 'Prism Diopter',
  description: 'Calculate the prismatic effect based on lens power and decentration using Prentice\'s Rule.',
  formula: 'P = c × F (where P is prism diopter, c is decentration in cm, F is lens power in diopters)',
  variables: [
    {
      name: 'distance',
      description: 'Decentration Distance',
      unit: 'mm'
    },
    {
      name: 'decentration',
      description: 'Lens Power',
      unit: 'D'
    }
  ],
  example: {
    inputs: {
      distance: 5,
      decentration: 2.5
    },
    result: 1.25,
    explanation: 'With 5mm decentration and +2.50D lens, you get 1.25 prism diopters of prismatic effect.'
  },
  relevance: 'Prism calculations are crucial for understanding how improper lens positioning can induce unwanted prismatic effects.'
};

const vertexCalculation: OpticalCalculation = {
  id: 'vertex-calculation',
  name: 'Vertex Distance Correction',
  description: 'Calculate the effective power change when a lens is moved to a different vertex distance.',
  formula: 'P\' = P / (1 - d × P) (where P\' is new power, P is original power, d is change in vertex distance in meters)',
  variables: [
    {
      name: 'originalPower',
      description: 'Original Lens Power',
      unit: 'D'
    },
    {
      name: 'originalVertex',
      description: 'Original Vertex Distance',
      unit: 'mm'
    },
    {
      name: 'newVertex',
      description: 'New Vertex Distance',
      unit: 'mm'
    }
  ],
  example: {
    inputs: {
      originalPower: -8.0,
      originalVertex: 12,
      newVertex: 8
    },
    result: -8.32,
    explanation: 'Moving a -8.00D lens from 12mm to 8mm vertex distance results in -8.32D effective power.'
  },
  relevance: 'Vertex distance calculations are important when converting between spectacle and contact lens prescriptions, or when frame fit changes lens position.'
};

const pantoscopicCalculation: OpticalCalculation = {
  id: 'pantoscopic-calculation',
  name: 'Pantoscopic Tilt Effect',
  description: 'Calculate the effective power change due to pantoscopic tilt of a frame.',
  formula: 'P\' = P × cos²θ (where P\' is effective power, P is lens power, θ is tilt angle)',
  variables: [
    {
      name: 'lensPower',
      description: 'Lens Power',
      unit: 'D'
    },
    {
      name: 'angle',
      description: 'Pantoscopic Angle',
      unit: 'degrees'
    }
  ],
  example: {
    inputs: {
      lensPower: 4.0,
      angle: 10
    },
    result: 3.88,
    explanation: 'A +4.00D lens with 10 degrees of pantoscopic tilt has an effective power of approximately +3.88D.'
  },
  relevance: 'Pantoscopic tilt affects the effective power of a lens, which is important for accurate vision correction.'
};

const thicknessCalculation: OpticalCalculation = {
  id: 'thickness-calculation',
  name: 'Center Thickness',
  description: 'Calculate the center thickness of a lens based on edge thickness, power, and diameter.',
  formula: 't = e + (D × F × (n-1)) / 2000 (where t is center thickness, e is edge thickness, D is diameter, F is power, n is index)',
  variables: [
    {
      name: 'baseCurve',
      description: 'Base Curve',
      unit: 'D'
    },
    {
      name: 'power',
      description: 'Lens Power',
      unit: 'D'
    },
    {
      name: 'diameter',
      description: 'Lens Diameter',
      unit: 'mm'
    },
    {
      name: 'edgeThickness',
      description: 'Edge Thickness',
      unit: 'mm'
    }
  ],
  example: {
    inputs: {
      baseCurve: 6,
      power: -4,
      diameter: 50,
      edgeThickness: 1.5
    },
    result: 1.1,
    explanation: 'For a -4.00D lens with 50mm diameter and 1.5mm edge thickness, the center thickness is approximately 1.1mm.'
  },
  relevance: 'Lens thickness calculations are important for understanding cosmetic appearance and weight of glasses.'
};

interface CalculatorProps {
  onPrismCalculation: (inputs: Record<string, number>) => number;
  onVertexCalculation: (inputs: Record<string, number>) => number;
  onPantoscopicCalculation: (inputs: Record<string, number>) => number;
  onThicknessCalculation: (inputs: Record<string, number>) => number;
}

// Component implementation
const OpticalCalculator: React.FC<CalculatorProps> = ({
  onPrismCalculation,
  onVertexCalculation,
  onPantoscopicCalculation,
  onThicknessCalculation
}) => {
  const [calculationType, setCalculationType] = useState<number>(0);
  const [inputs, setInputs] = useState<Record<string, number | string>>({});
  const [result, setResult] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showExample, setShowExample] = useState(false);
  
  // Get current calculation based on selected tab
  const getCurrentCalculation = (): {
    calculation: OpticalCalculation;
    handler: (inputs: Record<string, number>) => number;
  } => {
    switch (calculationType) {
      case 0:
        return { calculation: prismCalculation, handler: onPrismCalculation };
      case 1:
        return { calculation: vertexCalculation, handler: onVertexCalculation };
      case 2:
        return { calculation: pantoscopicCalculation, handler: onPantoscopicCalculation };
      case 3:
        return { calculation: thicknessCalculation, handler: onThicknessCalculation };
      default:
        return { calculation: prismCalculation, handler: onPrismCalculation };
    }
  };
  
  const { calculation, handler } = getCurrentCalculation();
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCalculationType(newValue);
    resetCalculator();
  };

  const handleInputChange = (name: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate input
    if (value === '') {
      setErrors(prev => ({
        ...prev,
        [name]: 'This field is required'
      }));
    } else if (isNaN(Number(value))) {
      setErrors(prev => ({
        ...prev,
        [name]: 'Please enter a valid number'
      }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    // Validate all inputs
    const newErrors: Record<string, string> = {};
    let hasErrors = false;
    
    Object.keys(inputs).forEach(key => {
      const value = inputs[key];
      if (value === '' || value === undefined) {
        newErrors[key] = 'This field is required';
        hasErrors = true;
      } else if (isNaN(Number(value))) {
        newErrors[key] = 'Please enter a valid number';
        hasErrors = true;
      }
    });
    
    setErrors(newErrors);
    
    if (!hasErrors) {
      // Convert all inputs to numbers
      const numericInputs: Record<string, number> = {};
      Object.keys(inputs).forEach(key => {
        numericInputs[key] = Number(inputs[key]);
      });
      
      const calculatedResult = handler(numericInputs);
      setResult(calculatedResult);
    }
  };

  const loadExample = () => {
    setInputs(calculation.example.inputs);
    setErrors({});
    setResult(calculation.example.result);
    setShowExample(true);
  };

  const resetCalculator = () => {
    const initialInputs: Record<string, string> = {};
    Object.keys(getCurrentCalculation().calculation.example.inputs).forEach(key => {
      initialInputs[key] = '';
    });
    setInputs(initialInputs);
    setErrors({});
    setResult(null);
    setShowExample(false);
  };

  const getInputLabel = (key: string): string => {
    // Find the variable that matches this key
    const variable = calculation.variables.find(v => 
      key.toLowerCase().includes(v.name.toLowerCase())
    );
    
    if (variable) {
      return `${variable.description} (${variable.unit})`;
    }
    
    // Fallback mappings
    const commonMappings: Record<string, string> = {
      distance: 'Decentration (mm)',
      decentration: 'Lens Power (D)',
      originalPower: 'Original Power (D)',
      originalVertex: 'Original Vertex Distance (mm)',
      newVertex: 'New Vertex Distance (mm)',
      lensPower: 'Lens Power (D)',
      angle: 'Pantoscopic Angle (°)',
      baseCurve: 'Base Curve (D)',
      power: 'Lens Power (D)',
      diameter: 'Lens Diameter (mm)',
      edgeThickness: 'Edge Thickness (mm)'
    };
    
    return commonMappings[key] || key;
  };

  const getResultUnit = (): string => {
    switch (calculation.id) {
      case 'prism-calculation':
        return ' △';
      case 'thickness-calculation':
        return ' mm';
      default:
        return ' D';
    }
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Optical Calculators
      </Typography>
      
      <Typography paragraph color="text.secondary">
        Interactive calculators for common optical calculations used in dispensing. Practice with these tools to prepare for the ABO-NCLE exam.
      </Typography>
      
      <Divider sx={{ mb: 3 }} />
      
      <Tabs 
        value={calculationType} 
        onChange={handleTabChange} 
        variant="scrollable" 
        scrollButtons="auto"
        sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}
      >
        <Tab label="Prism (Prentice's Rule)" />
        <Tab label="Vertex Distance" />
        <Tab label="Pantoscopic Tilt" />
        <Tab label="Lens Thickness" />
      </Tabs>
      
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          {calculation.name} Calculator
        </Typography>
        
        <Typography variant="body2" color="text.secondary" paragraph>
          {calculation.description}
        </Typography>
        
        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>Practical Application:</strong> {calculation.relevance}
          </Typography>
        </Alert>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            Formula:
          </Typography>
          <Typography 
            variant="body2" 
            component="div" 
            sx={{ 
              fontFamily: 'monospace', 
              bgcolor: 'background.paper', 
              p: 1, 
              borderRadius: 1,
              border: '1px solid',
              borderColor: 'divider'
            }}
          >
            {calculation.formula}
          </Typography>
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        <Box component="form" noValidate sx={{ mt: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Input Values:
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
            {Object.keys(calculation.example.inputs).map((key) => (
              <FormControl 
                key={key} 
                variant="outlined" 
                size="small" 
                error={!!errors[key]}
              >
                <InputLabel htmlFor={`input-${key}`}>
                  {getInputLabel(key)}
                </InputLabel>
                <OutlinedInput
                  id={`input-${key}`}
                  value={inputs[key] || ''}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  label={getInputLabel(key)}
                  type="text"
                  inputProps={{ inputMode: 'decimal' }}
                />
                {errors[key] && <FormHelperText>{errors[key]}</FormHelperText>}
              </FormControl>
            ))}
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleCalculate}
              disabled={Object.keys(errors).length > 0}
            >
              Calculate
            </Button>
            <Button 
              variant="outlined" 
              onClick={loadExample}
            >
              Load Example
            </Button>
            <Button 
              variant="text" 
              color="secondary" 
              onClick={resetCalculator}
            >
              Reset
            </Button>
          </Box>
          
          {result !== null && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Result:
              </Typography>
              <Alert severity="success" sx={{ mb: 2 }}>
                <Typography variant="body1" fontWeight="medium">
                  {result}{getResultUnit()}
                </Typography>
              </Alert>
              
              {showExample && (
                <Typography variant="body2" color="text.secondary">
                  {calculation.example.explanation}
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default OpticalCalculator;