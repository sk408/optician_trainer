import { TestResult, TestSession, PrescriptionData } from '../interfaces';

// In-memory storage for testing sessions and results
// In a real app, this would use localStorage, IndexedDB, or a backend service
let SESSIONS: TestSession[] = [];
let RESULTS: TestResult[] = [];

// Generate a unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Start a new testing session
export const startTestSession = (patientId: string): TestSession => {
  const session: TestSession = {
    id: generateId(),
    patientId,
    startTime: new Date(),
    prescriptionData: [],
    completed: false
  };
  
  SESSIONS.push(session);
  return session;
};

// Update a testing session
export const updateTestSession = (
  sessionId: string, 
  prescriptionData: PrescriptionData[]
): TestSession | undefined => {
  const sessionIndex = SESSIONS.findIndex(s => s.id === sessionId);
  
  if (sessionIndex === -1) return undefined;
  
  SESSIONS[sessionIndex] = {
    ...SESSIONS[sessionIndex],
    prescriptionData
  };
  
  return SESSIONS[sessionIndex];
};

// Complete a testing session
export const completeTestSession = (
  sessionId: string, 
  prescriptionData: PrescriptionData[],
  notes?: string
): TestSession | undefined => {
  const sessionIndex = SESSIONS.findIndex(s => s.id === sessionId);
  
  if (sessionIndex === -1) return undefined;
  
  SESSIONS[sessionIndex] = {
    ...SESSIONS[sessionIndex],
    endTime: new Date(),
    prescriptionData,
    notes,
    completed: true
  };
  
  return SESSIONS[sessionIndex];
};

// Save test result
export const saveTestResult = (
  sessionId: string,
  actualPrescription: PrescriptionData[],
  userPrescription: PrescriptionData[],
  accuracy: number,
  feedback: string
): TestResult => {
  const result: TestResult = {
    id: generateId(),
    sessionId,
    actualPrescription,
    userPrescription,
    accuracy,
    feedback,
    timestamp: new Date()
  };
  
  RESULTS.push(result);
  return result;
};

// Calculate prescription accuracy (0-100%)
export const calculateAccuracy = (
  actualPrescription: PrescriptionData[],
  userPrescription: PrescriptionData[]
): number => {
  // This is a simplified accuracy calculation
  // In a real app, this would be more nuanced based on clinical standards
  
  if (!actualPrescription.length || !userPrescription.length) return 0;
  
  let totalScore = 0;
  let maxPossibleScore = 0;
  
  // For each eye, compare the prescription values
  actualPrescription.forEach(actual => {
    const user = userPrescription.find(p => p.eye === actual.eye);
    
    if (!user) return;
    
    // Calculate sphere accuracy (0-40 points)
    const sphereDiff = Math.abs(actual.sphere - user.sphere);
    const sphereScore = Math.max(0, 40 - (sphereDiff * 20));
    totalScore += sphereScore;
    maxPossibleScore += 40;
    
    // Calculate cylinder accuracy (0-30 points)
    const cylinderDiff = Math.abs(actual.cylinder - user.cylinder);
    const cylinderScore = Math.max(0, 30 - (cylinderDiff * 15));
    totalScore += cylinderScore;
    maxPossibleScore += 30;
    
    // Calculate axis accuracy (0-30 points)
    // Only if cylinder is significant
    if (Math.abs(actual.cylinder) >= 0.5) {
      // Calculate the minimum angle between the two axes
      // (considering that 180° and 0° are the same orientation)
      const axisDiff = Math.min(
        Math.abs(actual.axis - user.axis),
        180 - Math.abs(actual.axis - user.axis)
      );
      
      const axisScore = Math.max(0, 30 - (axisDiff * 0.5));
      totalScore += axisScore;
      maxPossibleScore += 30;
    }
  });
  
  // Return percentage accuracy
  return Math.round((totalScore / maxPossibleScore) * 100);
};

// Generate feedback based on prescription comparison
export const generateFeedback = (
  actualPrescription: PrescriptionData[],
  userPrescription: PrescriptionData[]
): string => {
  const accuracy = calculateAccuracy(actualPrescription, userPrescription);
  
  if (accuracy >= 90) {
    return "Excellent! Your prescription is very accurate and would provide clear vision for the patient.";
  } else if (accuracy >= 75) {
    return "Good job! Your prescription is generally accurate, with minor adjustments needed for optimal vision.";
  } else if (accuracy >= 60) {
    return "Acceptable. The prescription has some inaccuracies that might cause mild visual discomfort.";
  } else if (accuracy >= 40) {
    return "Needs improvement. The prescription has significant deviations that would result in blurred vision.";
  } else {
    return "Significant inaccuracies. The patient would experience poor vision quality with this prescription.";
  }
};

// Get recent test results for a patient
export const getPatientTestResults = (patientId: string): TestResult[] => {
  const patientSessions = SESSIONS.filter(s => s.patientId === patientId && s.completed);
  return RESULTS.filter(r => patientSessions.some(s => s.id === r.sessionId));
};

// Clear all sessions and results (for testing/reset purposes)
export const clearAllTestData = (): void => {
  SESSIONS = [];
  RESULTS = [];
};