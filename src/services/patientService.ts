import { VisionProfile } from '../interfaces';

// Mock patient data - in a real application this would come from an API
const MOCK_PATIENTS: VisionProfile[] = [
  { 
    id: '1', 
    name: 'John Doe', 
    age: 45, 
    description: 'Moderate myopia (nearsightedness)',
    leftEye: { sphere: -2.50, cylinder: 0, axis: 0 },
    rightEye: { sphere: -3.00, cylinder: 0, axis: 0 },
    visualAcuity: {
      leftUncorrected: '20/100',
      rightUncorrected: '20/120',
      leftCorrected: '20/20',
      rightCorrected: '20/20'
    },
    history: 'Progressive myopia since childhood. No family history of eye disease.'
  },
  { 
    id: '2', 
    name: 'Jane Smith', 
    age: 35, 
    description: 'Mild hyperopia (farsightedness)',
    leftEye: { sphere: 1.75, cylinder: 0, axis: 0 },
    rightEye: { sphere: 2.00, cylinder: 0, axis: 0 },
    visualAcuity: {
      leftUncorrected: '20/30',
      rightUncorrected: '20/40',
      leftCorrected: '20/20',
      rightCorrected: '20/20'
    },
    history: 'Occasional headaches when reading for extended periods.'
  },
  { 
    id: '3', 
    name: 'Robert Johnson', 
    age: 52, 
    description: 'Moderate astigmatism',
    leftEye: { sphere: -1.00, cylinder: -1.50, axis: 85 },
    rightEye: { sphere: -1.25, cylinder: -1.75, axis: 95 },
    visualAcuity: {
      leftUncorrected: '20/60',
      rightUncorrected: '20/70',
      leftCorrected: '20/20',
      rightCorrected: '20/20'
    },
    history: 'Reports blurred vision at all distances. Difficulty driving at night.'
  },
  { 
    id: '4', 
    name: 'Emily Williams', 
    age: 28, 
    description: 'Mild myopia with early presbyopia',
    leftEye: { sphere: -0.50, cylinder: 0, axis: 0, addPower: 1.00 },
    rightEye: { sphere: -0.75, cylinder: 0, axis: 0, addPower: 1.00 },
    visualAcuity: {
      leftUncorrected: '20/40',
      rightUncorrected: '20/50',
      leftCorrected: '20/20',
      rightCorrected: '20/20'
    },
    history: 'Extensive computer use. Experiencing eye strain when reading.'
  },
  { 
    id: '5', 
    name: 'Michael Brown', 
    age: 67, 
    description: 'High myopia with astigmatism',
    leftEye: { sphere: -4.50, cylinder: -1.25, axis: 175 },
    rightEye: { sphere: -4.75, cylinder: -1.50, axis: 5 },
    visualAcuity: {
      leftUncorrected: '20/200',
      rightUncorrected: '20/250',
      leftCorrected: '20/25',
      rightCorrected: '20/25'
    },
    history: 'Gradual vision deterioration over 40 years. History of retinal examination yearly.',
    complications: ['Increased risk of retinal detachment', 'Glaucoma suspect']
  },
  { 
    id: '6', 
    name: 'Sarah Davis', 
    age: 58, 
    description: 'Hyperopia with presbyopia',
    leftEye: { sphere: 2.25, cylinder: 0, axis: 0, addPower: 1.75 },
    rightEye: { sphere: 2.50, cylinder: 0, axis: 0, addPower: 1.75 },
    visualAcuity: {
      leftUncorrected: '20/70',
      rightUncorrected: '20/80',
      leftCorrected: '20/20',
      rightCorrected: '20/20'
    },
    history: 'Difficulty with near vision tasks. Needs more light for reading.',
    complications: ['Dry eye syndrome']
  },
];

// Get all patients
export const getAllPatients = (): VisionProfile[] => {
  return MOCK_PATIENTS;
};

// Get patient by ID
export const getPatientById = (id: string): VisionProfile | undefined => {
  return MOCK_PATIENTS.find(patient => patient.id === id);
};

// Get difficulty level based on patient condition
export const getPatientDifficulty = (patient: VisionProfile): 'Easy' | 'Medium' | 'Hard' => {
  // Simple logic to determine difficulty level
  if (patient.complications && patient.complications.length > 0) {
    return 'Hard';
  }
  
  const hasAstigmatism = patient.leftEye.cylinder !== 0 || patient.rightEye.cylinder !== 0;
  const hasPresbyopia = patient.leftEye.addPower !== undefined || patient.rightEye.addPower !== undefined;
  
  if (hasAstigmatism && hasPresbyopia) {
    return 'Hard';
  } else if (hasAstigmatism || hasPresbyopia) {
    return 'Medium';
  }
  
  return 'Easy';
};

// For a real app, you might add functions like:
// export const saveTestResults = (patientId: string, results: TestResult) => { ... }
// export const getPatientHistory = (patientId: string) => { ... }