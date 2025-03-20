import { FlashcardCategory } from './types';

/**
 * Detailed flashcard categories with subcategories for better organization
 * of the comprehensive flashcard content
 */
export const flashcardCategories: FlashcardCategory[] = [
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
 * Subcategories for more granular organization
 */
export const flashcardSubcategories = {
  // ABO Subcategories
  'optical-theory': [
    { id: 'light-properties', name: 'Properties of Light', examType: 'ABO' },
    { id: 'refraction', name: 'Refraction Principles', examType: 'ABO' },
    { id: 'lens-power', name: 'Lens Power and Formulas', examType: 'ABO' },
    { id: 'prism', name: 'Prism and Prismatic Effects', examType: 'ABO' }
  ],
  'dispensing-procedures': [
    { id: 'frame-fitting', name: 'Frame Fitting', examType: 'ABO' },
    { id: 'frame-adjustments', name: 'Frame Adjustments', examType: 'ABO' },
    { id: 'fitting-parameters', name: 'Fitting Parameters', examType: 'ABO' },
    { id: 'troubleshooting', name: 'Dispensing Troubleshooting', examType: 'ABO' }
  ],
  'lens-applications': [
    { id: 'lens-materials', name: 'Lens Materials', examType: 'ABO' },
    { id: 'lens-treatments', name: 'Lens Treatments', examType: 'ABO' },
    { id: 'multifocals', name: 'Multifocal Lenses', examType: 'ABO' },
    { id: 'specialty-lenses', name: 'Specialty Lenses', examType: 'ABO' }
  ],
  'measurements': [
    { id: 'pupillary-distance', name: 'Pupillary Distance', examType: 'ABO' },
    { id: 'segment-height', name: 'Segment Height', examType: 'ABO' },
    { id: 'frame-measurements', name: 'Frame Measurements', examType: 'ABO' },
    { id: 'lens-measurements', name: 'Lens Measurements', examType: 'ABO' }
  ],
  'regulations': [
    { id: 'ansi-standards', name: 'ANSI Standards', examType: 'ABO' },
    { id: 'safety-regulations', name: 'Safety Regulations', examType: 'ABO' },
    { id: 'compliance', name: 'Regulatory Compliance', examType: 'ABO' },
    { id: 'legal-requirements', name: 'Legal Requirements', examType: 'ABO' }
  ],
  'specialized-techniques': [
    { id: 'high-rx', name: 'High Prescription Management', examType: 'ABO' },
    { id: 'prism-applications', name: 'Prism Applications', examType: 'ABO' },
    { id: 'anisometropia', name: 'Anisometropia Management', examType: 'ABO' },
    { id: 'sports-eyewear', name: 'Sports Eyewear', examType: 'ABO' }
  ],
  
  // NCLE Subcategories
  'pre-fitting': [
    { id: 'corneal-anatomy', name: 'Corneal Anatomy', examType: 'NCLE' },
    { id: 'tear-film', name: 'Tear Film Evaluation', examType: 'NCLE' },
    { id: 'topography', name: 'Corneal Topography', examType: 'NCLE' },
    { id: 'examination', name: 'Pre-fitting Examination', examType: 'NCLE' }
  ],
  'diagnostic-fitting': [
    { id: 'soft-lens-fit', name: 'Soft Lens Fitting', examType: 'NCLE' },
    { id: 'rgp-fit', name: 'RGP Fitting', examType: 'NCLE' },
    { id: 'over-refraction', name: 'Over-Refraction', examType: 'NCLE' },
    { id: 'fit-assessment', name: 'Fit Assessment', examType: 'NCLE' }
  ],
  'contact-lens-materials': [
    { id: 'hydrogels', name: 'Hydrogel Materials', examType: 'NCLE' },
    { id: 'silicone-hydrogels', name: 'Silicone Hydrogel Materials', examType: 'NCLE' },
    { id: 'rgp-materials', name: 'RGP Materials', examType: 'NCLE' },
    { id: 'oxygen-properties', name: 'Oxygen Properties', examType: 'NCLE' }
  ],
  'patient-education': [
    { id: 'insertion-removal', name: 'Insertion and Removal', examType: 'NCLE' },
    { id: 'lens-care', name: 'Lens Care', examType: 'NCLE' },
    { id: 'wear-schedules', name: 'Wear Schedules', examType: 'NCLE' },
    { id: 'follow-up', name: 'Follow-up Schedule', examType: 'NCLE' }
  ],
  'complications': [
    { id: 'corneal', name: 'Corneal Complications', examType: 'NCLE' },
    { id: 'inflammatory', name: 'Inflammatory Responses', examType: 'NCLE' },
    { id: 'microbial', name: 'Microbial Complications', examType: 'NCLE' },
    { id: 'lens-related', name: 'Lens-Related Complications', examType: 'NCLE' }
  ],
  'specialty-lenses': [
    { id: 'ortho-k', name: 'Orthokeratology', examType: 'NCLE' },
    { id: 'scleral', name: 'Scleral Lenses', examType: 'NCLE' },
    { id: 'multifocal-cl', name: 'Multifocal Contact Lenses', examType: 'NCLE' },
    { id: 'custom-designs', name: 'Custom Lens Designs', examType: 'NCLE' }
  ]
}; 