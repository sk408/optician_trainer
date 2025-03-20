export * from './types';
export * from './aboFlashcards';
export * from './ncleFlashcards';
export * from './categories';

import { FlashcardData } from './types';
import { aboFlashcards } from './aboFlashcards';
import { ncleFlashcards } from './ncleFlashcards';
import { flashcardCategories as allCategories } from './categories';

/**
 * Flashcard categories organized by exam type with descriptions
 */
export const flashcardCategories = [
  // ABO Categories
  {
    id: 'optical-theory',
    name: 'Optical Theory',
    description: 'Fundamental principles of optics including light behavior, lens power, and optical formulas',
    examType: 'ABO'
  },
  {
    id: 'dispensing-procedures',
    name: 'Dispensing Procedures',
    description: 'Techniques for fitting, adjusting, and delivering eyewear to patients',
    examType: 'ABO'
  },
  {
    id: 'lens-applications',
    name: 'Lens Applications',
    description: 'Understanding lens designs, materials, treatments, and specialty uses',
    examType: 'ABO'
  },
  {
    id: 'measurements',
    name: 'Measurements',
    description: 'Methods for accurately measuring parameters needed for eyewear',
    examType: 'ABO'
  },
  {
    id: 'regulations',
    name: 'Regulations and Standards',
    description: 'Industry standards, legal requirements, and safety guidelines',
    examType: 'ABO'
  },
  {
    id: 'specialized-techniques',
    name: 'Specialized Techniques',
    description: 'Advanced concepts for challenging prescriptions and special needs',
    examType: 'ABO'
  },
  
  // NCLE Categories
  {
    id: 'pre-fitting',
    name: 'Pre-Fitting Evaluation',
    description: 'Assessment procedures before contact lens fitting',
    examType: 'NCLE'
  },
  {
    id: 'diagnostic-fitting',
    name: 'Diagnostic Fitting',
    description: 'Techniques for evaluating contact lens fit and performance',
    examType: 'NCLE'
  },
  {
    id: 'contact-lens-materials',
    name: 'Contact Lens Materials',
    description: 'Properties and characteristics of various contact lens materials',
    examType: 'NCLE'
  },
  {
    id: 'patient-education',
    name: 'Patient Education',
    description: 'Teaching patients about proper contact lens use and care',
    examType: 'NCLE'
  },
  {
    id: 'complications',
    name: 'Contact Lens Complications',
    description: 'Identifying and managing issues associated with contact lens wear',
    examType: 'NCLE'
  },
  {
    id: 'specialty-lenses',
    name: 'Specialty Contact Lenses',
    description: 'Advanced lens designs for specific patient needs',
    examType: 'NCLE'
  }
];

/**
 * Combined flashcards from both ABO and NCLE for easy access
 */
export const allFlashcards: FlashcardData[] = [
  ...aboFlashcards,
  ...ncleFlashcards
]; 