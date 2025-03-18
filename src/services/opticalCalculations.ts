import { OpticalCalculation } from '../interfaces';

// Prism calculations
export const calculatePrismDiopters = (
  decentrationMm: number,
  lensPowerDiopters: number
): number => {
  // Prentice's Rule: P = c × F
  // P: prism diopters
  // c: decentration in centimeters
  // F: lens power in diopters
  
  // Convert mm to cm for formula
  const decentrationCm = decentrationMm / 10;
  
  return decentrationCm * lensPowerDiopters;
};

export const calculateDecentration = (
  prismDiopters: number,
  lensPowerDiopters: number
): number => {
  // Rearranged Prentice's Rule: c = P / F
  // Result in cm, then convert to mm
  const decentrationCm = prismDiopters / lensPowerDiopters;
  
  return decentrationCm * 10;
};

// Vertex distance calculations
export const calculatePowerChange = (
  originalPower: number,
  originalVertexDistance: number,
  newVertexDistance: number
): number => {
  // Formula: P2 = P1 / (1 - d × P1)
  // P1: original power in diopters
  // P2: new power in diopters
  // d: difference in vertex distance in meters
  
  // Convert mm to meters
  const distanceDifferenceMeters = (newVertexDistance - originalVertexDistance) / 1000;
  
  const newPower = originalPower / (1 - (distanceDifferenceMeters * originalPower));
  
  // Round to nearest 0.25 diopter as is standard in opticianry
  return Math.round(newPower * 4) / 4;
};

// Pantoscopic tilt calculations
export const calculateEffectivePower = (
  lensPower: number,
  pantoscopicAngleDegrees: number
): number => {
  // Formula: P' = P × cos²θ
  // P: original power in diopters
  // P': effective power in diopters
  // θ: pantoscopic angle in degrees
  
  // Convert degrees to radians for Math functions
  const angleInRadians = (pantoscopicAngleDegrees * Math.PI) / 180;
  
  // Calculate cos²θ
  const cosSquared = Math.pow(Math.cos(angleInRadians), 2);
  
  // Calculate effective power
  const effectivePower = lensPower * cosSquared;
  
  // Round to nearest 0.01 diopter for precision
  return Math.round(effectivePower * 100) / 100;
};

// Calculate lens thickness
export const calculateCenterThickness = (
  baseCurve: number,
  power: number,
  diameter: number,
  edgeThickness: number = 1.0
): number => {
  // This is a simplified calculation
  // For high accuracy, lens manufacturers use ray-tracing software
  
  // Convert to appropriate units (if needed)
  const radius = diameter / 2;
  
  // Approximate calculation for center thickness
  const indexOfRefraction = 1.5; // Using standard CR-39 index
  const centerThickness = edgeThickness + 
                          (Math.pow(radius, 2) * Math.abs(power)) / 
                          (2000 * (indexOfRefraction - 1));
  
  // Round to nearest 0.1mm
  return Math.round(centerThickness * 10) / 10;
};

// Optical calculations reference data
export const opticalCalculations: OpticalCalculation[] = [
  {
    id: 'prism-calculation',
    name: 'Prism Calculation (Prentice\'s Rule)',
    description: 'Prentice\'s Rule is used to calculate the prismatic effect that occurs when a lens is decentered from the optical center.',
    formula: 'P = c × F',
    variables: [
      {
        name: 'P',
        description: 'Prismatic effect',
        unit: 'diopters (△)'
      },
      {
        name: 'c',
        description: 'Decentration',
        unit: 'centimeters (cm)'
      },
      {
        name: 'F',
        description: 'Lens power',
        unit: 'diopters (D)'
      }
    ],
    example: {
      inputs: {
        decentration: 0.5, // 5mm = 0.5cm
        lensPower: 4.0
      },
      result: 2,
      explanation: 'A +4.00D lens decentered 5mm (0.5cm) creates 2 diopters of prism.'
    },
    relevance: 'Essential for understanding how lens placement affects vision, particularly for patients with binocular vision issues or high prescriptions.'
  },
  {
    id: 'vertex-distance',
    name: 'Vertex Distance Correction',
    description: 'Adjusts lens power to account for changes in the distance between the lens and the eye.',
    formula: 'P2 = P1 / (1 - d × P1)',
    variables: [
      {
        name: 'P1',
        description: 'Original power',
        unit: 'diopters (D)'
      },
      {
        name: 'P2',
        description: 'New power',
        unit: 'diopters (D)'
      },
      {
        name: 'd',
        description: 'Change in vertex distance',
        unit: 'meters (m)'
      }
    ],
    example: {
      inputs: {
        originalPower: 8.0,
        originalDistance: 13, // mm
        newDistance: 7 // mm
      },
      result: 7.75,
      explanation: 'A prescription of +8.00D at a vertex distance of 13mm would need to be adjusted to +7.75D if the vertex distance changes to 7mm.'
    },
    relevance: 'Critical when transitioning between eyeglasses and contact lenses, or when fitting frames that sit at different distances from the eye, especially for higher prescriptions (>±4.00D).'
  },
  {
    id: 'pantoscopic-tilt',
    name: 'Pantoscopic Tilt Effect',
    description: 'Calculates how tilting a lens vertically affects the effective power experienced by the wearer.',
    formula: 'Complex (involves trigonometric functions)',
    variables: [
      {
        name: 'P',
        description: 'Lens power',
        unit: 'diopters (D)'
      },
      {
        name: 'θ',
        description: 'Pantoscopic angle',
        unit: 'degrees (°)'
      }
    ],
    example: {
      inputs: {
        spherePower: 5.0,
        cylinderPower: 0,
        angle: 10
      },
      result: 0.25,
      explanation: 'A +5.00D spherical lens with a 10° pantoscopic tilt creates an approximate effective power change of +0.25D.'
    },
    relevance: 'Important for properly fitting frames, especially for high prescriptions. Can affect visual comfort and acuity if not properly accounted for.'
  },
  {
    id: 'lens-thickness',
    name: 'Lens Thickness Calculation',
    description: 'Estimates the center thickness of a lens based on its parameters.',
    formula: 'CT = ET + (r² × |P|) / (2000 × (n - 1))',
    variables: [
      {
        name: 'CT',
        description: 'Center thickness',
        unit: 'millimeters (mm)'
      },
      {
        name: 'ET',
        description: 'Edge thickness',
        unit: 'millimeters (mm)'
      },
      {
        name: 'r',
        description: 'Lens radius',
        unit: 'millimeters (mm)'
      },
      {
        name: 'P',
        description: 'Lens power',
        unit: 'diopters (D)'
      },
      {
        name: 'n',
        description: 'Index of refraction',
        unit: 'unitless'
      }
    ],
    example: {
      inputs: {
        baseCurve: 6,
        power: 4.0,
        indexOfRefraction: 1.6,
        diameter: 60,
        minimalEdgeThickness: 1.0
      },
      result: 3.5,
      explanation: 'A +4.00D lens with a 60mm diameter and 1.6 index of refraction would have an approximate center thickness of 3.5mm.'
    },
    relevance: 'Helps opticians predict lens thickness and recommend appropriate materials and designs to patients, especially for high prescriptions.'
  }
];