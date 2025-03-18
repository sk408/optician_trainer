export interface PrescriptionData {
  sphere: number;
  cylinder: number;
  axis: number;
  eye: 'left' | 'right';
  addPower?: number;
  pd?: number;
}

export interface VisionProfile {
  id: string;
  name: string;
  age: number;
  description: string;
  leftEye: {
    sphere: number;
    cylinder: number;
    axis: number;
    addPower?: number;
    pd?: number;
  };
  rightEye: {
    sphere: number;
    cylinder: number;
    axis: number;
    addPower?: number;
    pd?: number;
  };
  visualAcuity?: {
    leftUncorrected?: string;
    rightUncorrected?: string;
    leftCorrected?: string;
    rightCorrected?: string;
  };
  history?: string;
  complications?: string[];
}

export interface TestSession {
  id: string;
  patientId: string;
  startTime: Date;
  endTime?: Date;
  prescriptionData: PrescriptionData[];
  notes?: string;
  completed: boolean;
}

export interface TestResult {
  id: string;
  sessionId: string;
  actualPrescription: PrescriptionData[];
  userPrescription: PrescriptionData[];
  accuracy: number;
  feedback: string;
  timestamp: Date;
}

export interface ThemeContextProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  highContrastMode: boolean;
  setHighContrastMode: (mode: boolean) => void;
  fontSize: string;
  setFontSize: (size: string) => void;
  includeSphereCorrection: boolean;
  setIncludeSphereCorrection: (include: boolean) => void;
  includeCylinderCorrection: boolean;
  setIncludeCylinderCorrection: (include: boolean) => void;
}

export interface RefractionChartProps {
  prescription: PrescriptionData[];
  width?: number;
  height?: number;
  showLegend?: boolean;
  title?: string;
  comparePrescription?: PrescriptionData[]; 
  currentSphere?: number;
  currentCylinder?: number;
  currentAxis?: number;
  testActive?: boolean;
  onPositionClick?: (sphere: number, cylinder: number, axis: number) => void;
  interactive?: boolean;
}

export interface TestingInterfaceProps {
  patientId: string;
  onComplete?: (result: TestResult) => void;
  initialPrescription?: PrescriptionData[];
  mode?: 'practice' | 'exam' | 'tutorial';
  showGuidance?: boolean;
}

export interface EyeModel3DProps {
  rotationSpeed?: number;
  showLabels?: boolean;
  highlightParts?: string[];
  prescription?: PrescriptionData;
  interactive?: boolean;
  width?: string | number;
  height?: string | number;
}

// New interfaces for optician-specific content

export interface FrameData {
  id: string;
  name: string;
  brand: string;
  material: string;
  dimensions: {
    eyeSize: number; // in mm
    bridgeSize: number; // in mm
    templeLength: number; // in mm
    totalWidth: number; // in mm
    height: number; // in mm
  };
  faceShapes: string[]; // e.g., 'oval', 'round', 'square', 'heart', 'diamond'
  style: string; // e.g., 'full-rim', 'semi-rimless', 'rimless'
  color: string;
  imageUrl?: string;
  recommendedFor?: string[]; // e.g., 'high prescriptions', 'sports', 'children'
  prescriptionRange?: {
    minSphere: number;
    maxSphere: number;
    minCylinder: number;
    maxCylinder: number;
  };
}

export interface LensMaterial {
  id: string;
  name: string;
  indexOfRefraction: number;
  abbe: number; // Abbe value (dispersion)
  density: number; // g/cm³
  uvProtection: boolean;
  impactResistant: boolean;
  thinness: number; // relative thinness rating (1-10)
  pros: string[];
  cons: string[];
  recommendedFor: string[];
  notRecommendedFor: string[];
  imageUrl?: string;
}

export interface LensTreatment {
  id: string;
  name: string;
  type: 'coating' | 'tint' | 'photochromic' | 'polarization' | 'blue-light' | 'other';
  description: string;
  benefits: string[];
  durability: number; // rating from 1-10
  cost: 'low' | 'medium' | 'high';
  recommendedFor: string[];
  careInstructions: string[];
  imageUrl?: string;
  beforeAfterImages?: {
    before: string;
    after: string;
  };
}

export interface OpticianTool {
  id: string;
  name: string;
  purpose: string;
  description: string;
  usageInstructions: string[];
  maintenanceInstructions: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  imageUrl?: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms?: string[];
  category: string;
  imageUrl?: string;
}

export interface ANSIStandard {
  code: string;
  title: string;
  summary: string;
  requirements: string[];
  lastUpdated: string;
  relevance: string;
}

export interface SpecialtyEyewear {
  id: string;
  type: string; // e.g., 'safety', 'sports', 'computer', 'driving'
  features: string[];
  standards: string[]; // e.g., 'ANSI Z87.1'
  materials: string[];
  recommendations: string[];
  imageUrl?: string;
}

export interface FacialMeasurement {
  id: string;
  name: string; // e.g., 'PD', 'segment height', 'vertex distance'
  description: string;
  measurementInstructions: string[];
  normalRange: string;
  importance: string;
  imageUrl?: string;
  videoUrl?: string;
}

export interface OpticalCalculation {
  id: string;
  name: string; // e.g., 'Prism', 'Vertex Distance', 'Pantoscopic Tilt'
  description: string;
  formula: string;
  variables: {
    name: string;
    description: string;
    unit: string;
  }[];
  example: {
    inputs: Record<string, number>;
    result: number;
    explanation: string;
  };
  relevance: string;
}

export interface FrameAdjustment {
  id: string;
  adjustmentType: string; // e.g., 'temple adjustment', 'nosepads', 'pantoscopic tilt'
  problem: string;
  solution: string[];
  tools: string[];
  cautionNotes: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export interface RegulatoryTopic {
  id: string;
  topic: string; // e.g., 'HIPAA', 'FDA', 'Prescription release laws'
  summary: string;
  keyPoints: string[];
  relevanceToOpticians: string;
  exampleScenarios: string[];
  resourceLinks?: string[];
}