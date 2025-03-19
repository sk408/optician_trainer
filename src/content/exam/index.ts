/**
 * Comprehensive Exam Content
 * 
 * This file exports all exam structures and question banks for ABO and NCLE exams
 */

// Exam structure
import { aboExamStructure } from './abo-exam-structure';
import { ncleExamStructure } from './ncle-exam-structure';

// ABO question categories
import { ophthalmicOpticsQuestions } from './abo/ophthalmic-optics-questions';
import { prescriptionAnalysisQuestions } from './abo/prescription-analysis-questions';
import { dispensingProceduresQuestions } from './abo/dispensing-procedures-questions';
import { lensProductsQuestions } from './abo/lens-products-questions';
import { frameProductsQuestions } from './abo/frame-products-questions';
import { laboratoryProceduresQuestions } from './abo/laboratory-procedures-questions';
import { regulationsQuestions } from './abo/regulations-questions';

// NCLE question categories
import { ocularAnatomyQuestions } from './ncle/ocular-anatomy-questions';
import { contactLensDesignQuestions } from './ncle/contact-lens-design-questions';
import { contactLensComplicationsQuestions } from './ncle/contact-lens-complications-questions';
import { contactLensCareQuestions } from './ncle/contact-lens-care-questions';
import { contactLensFittingQuestions } from './ncle/contact-lens-fitting-questions';
import { patientEducationQuestions } from './ncle/patient-education-questions';
import { ExamQuestion } from '../../interfaces/ExamQuestions';

// Export structures
export const examStructures = {
  abo: aboExamStructure,
  ncle: ncleExamStructure
};

// Export ABO questions
export const aboQuestions = [
  ...ophthalmicOpticsQuestions,
  ...prescriptionAnalysisQuestions,
  ...dispensingProceduresQuestions,
  ...lensProductsQuestions,
  ...frameProductsQuestions,
  ...laboratoryProceduresQuestions,
  ...regulationsQuestions,
  // Add more question categories as they are created
];

// Export NCLE questions
export const ncleQuestions = [
  ...ocularAnatomyQuestions,
  ...contactLensDesignQuestions,
  ...contactLensComplicationsQuestions,
  ...contactLensCareQuestions,
  ...contactLensFittingQuestions,
  ...patientEducationQuestions,
  // Add more question categories as they are created
];

/**
 * Get exam questions by type
 * @param examType 'abo' or 'ncle'
 * @returns Array of questions for the specified exam type
 */
export const getQuestionsByExamType = (examType: 'abo' | 'ncle') => {
  return examType === 'abo' ? aboQuestions : ncleQuestions;
};

/**
 * Get questions by category
 * @param examType 'abo' or 'ncle'
 * @param categoryId The category ID to filter by
 * @returns Array of questions for the specified category
 */
export const getQuestionsByCategory = (examType: 'abo' | 'ncle', categoryId: string) => {
  const questions = getQuestionsByExamType(examType);
  return questions.filter(q => q.category === categoryId);
};

/**
 * Get questions by subcategory
 * @param examType 'abo' or 'ncle'
 * @param categoryId The category ID
 * @param subcategoryId The subcategory ID to filter by
 * @returns Array of questions for the specified subcategory
 */
export const getQuestionsBySubcategory = (examType: 'abo' | 'ncle', categoryId: string, subcategoryId: string) => {
  const categoryQuestions = getQuestionsByCategory(examType, categoryId);
  return categoryQuestions.filter(q => q.subcategory === subcategoryId);
};

/**
 * Generate a full exam with questions from each category based on the exam structure
 * @param examType 'abo' or 'ncle'
 * @param totalQuestions Number of questions to include in the exam (default 125)
 * @returns Array of randomly selected questions for a full exam
 */
export const generateFullExam = (examType: 'abo' | 'ncle', totalQuestions = 125) => {
  const allQuestions = getQuestionsByExamType(examType);
  const structure = examStructures[examType];
  
  // Calculate how many questions to select from each category based on weight
  const categoryCounts = structure.categories.map(category => {
    // Each category gets a proportional number of questions based on its weight
    // In a real implementation, this would use the weight percentage
    return Math.floor(totalQuestions / structure.categories.length);
  });
  
  // Make sure we're getting exactly the requested number of questions
  const sum = categoryCounts.reduce((a, b) => a + b, 0);
  if (sum < totalQuestions) {
    categoryCounts[0] += (totalQuestions - sum);
  }
  
  // Select questions from each category
  const examQuestions: ExamQuestion[] = [];
  
  structure.categories.forEach((category, index) => {
    const categoryQuestions = allQuestions.filter(q => q.category === category.id);
    
    // If we don't have enough questions, just use what we have
    const questionCount = Math.min(categoryCounts[index], categoryQuestions.length);
    
    // Randomly select questions
    const selectedQuestions = shuffleArray(categoryQuestions).slice(0, questionCount);
    examQuestions.push(...selectedQuestions);
  });
  
  return shuffleArray(examQuestions);
};

/**
 * Shuffle an array (Fisher-Yates algorithm)
 * @param array The array to shuffle
 * @returns A new shuffled array
 */
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
} 