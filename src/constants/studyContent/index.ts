// Export all study content modules for easy import
export { eyeAnatomyContent } from './eyeAnatomyContent';
export { frameBasicsContent } from './frameBasicsContent';
export { lensBasicsContent } from './lensBasicsContent';
export { patientCommunicationContent } from './patientCommunicationContent';
export { refractiveErrorsContent } from './refractiveErrorsContent';
export { lensMaterialsContent } from './lensMaterialsContent';
export { lensCoatingsContent } from './lensCoatingsContent';
export { lensDesignsContent } from './lensDesignsContent';
export { contactLensOverviewContent } from './contactLensOverviewContent';
export { eyeAnatomyClContent } from './eyeAnatomyClContent';
// New study content modules
export { sportsVisionContent } from './sportsVisionContent';
export { lowVisionAidsContent } from './lowVisionAidsContent';
// Newly added content modules
export { sunglassesAndTintsContent } from './sunglassesAndTintsContent';
export { frameAdjustmentContent } from './frameAdjustmentContent';
export { childrenEyewearContent } from './childrenEyewearContent';
// Measurement content
export { pdMeasurementContent } from './pdMeasurementContent';
// Optical theory content
export { basicOpticsContent } from './basicOpticsContent';
export { lensTypesContent } from './lensTypesContent';
// Prism content
export { prismBasicsContent } from './prismBasicsContent';
// Future modules still to be implemented - uncomment when files are created
export { occupationalLensesContent } from './occupationalLensesContent';
export { prescriptionAnalysisContent } from './prescriptionAnalysisContent';
export { refractiveErrorsAdvancedContent } from './refractiveErrorsAdvancedContent';
// New contact lens modules
export { contactLensComplicationsContent } from './contactLensComplicationsContent';
export { contactLensCareContent } from './contactLensCareContent';
export { contactLensFittingContent } from './contactLensFittingContent';
// Laboratory procedures module
export { laboratoryProceduresContent } from './laboratoryProceduresContent';
// New regulations and contact lens design modules
export { regulationsStandardsContent } from './regulationsStandardsContent';
export { contactLensDesignMaterialsContent } from './contactLensDesignMaterialsContent';
export { contactLensEducationFollowupContent } from './contactLensEducationFollowupContent';
// New study content modules for ABO and NCLE
export { dispensingMeasurementsContent } from './dispensingMeasurementsContent';
export { frameStylesSelectionContent } from './frameStylesSelectionContent';
export { contactLensPreFittingContent } from './contactLensPreFittingContent';
export { contactLensDesignsDetailedContent } from './contactLensDesignsDetailedContent';
export { contactLensFittingEvaluationContent } from './contactLensFittingEvaluationContent';

// Define study topics by category for better organization in UI
export const studyTopicsByCategory = {
  foundations: [
    {
      id: 'eye-anatomy',
      title: 'Human Eye Anatomy & Function',
      description: 'Understanding the structure and function of the human eye',
      difficulty: 'beginner' as const
    },
    {
      id: 'refractive-errors',
      title: 'Understanding Refractive Errors',
      description: 'The main types of refractive errors, their causes, symptoms, and correction methods',
      difficulty: 'beginner' as const
    },
    {
      id: 'refractive-errors-advanced',
      title: 'Advanced Refractive Errors',
      description: 'Complex refractive conditions, irregular astigmatism, and higher-order aberrations',
      difficulty: 'intermediate' as const
    },
    {
      id: 'prescription-analysis',
      title: 'Analyzing Optical Prescriptions',
      description: 'Understanding, interpreting and troubleshooting optical prescriptions',
      difficulty: 'intermediate' as const
    }
  ],
  dispensing: [
    {
      id: 'frame-basics',
      title: 'Eyeglass Frame Basics',
      description: 'Frame types, components, materials, and selection principles',
      difficulty: 'beginner' as const
    },
    {
      id: 'frame-adjustment',
      title: 'Frame Adjustment & Repair',
      description: 'Techniques for proper frame adjustments, common repairs, and tools',
      difficulty: 'beginner' as const
    },
    {
      id: 'lens-basics',
      title: 'Ophthalmic Lens Basics',
      description: 'Understanding lens types, materials, designs and treatments',
      difficulty: 'beginner' as const
    },
    {
      id: 'lens-materials',
      title: 'Ophthalmic Lens Materials',
      description: 'Properties, advantages, and applications of different lens materials',
      difficulty: 'beginner' as const
    },
    {
      id: 'lens-coatings',
      title: 'Lens Coatings & Treatments',
      description: 'Enhancing lens performance through coatings and treatments',
      difficulty: 'beginner' as const
    },
    {
      id: 'lens-designs',
      title: 'Specialized Lens Designs',
      description: 'Advanced lens designs for specific visual needs and conditions',
      difficulty: 'intermediate' as const
    },
    {
      id: 'sunglasses-tints',
      title: 'Sunglasses & Lens Tints',
      description: 'Characteristics and applications of different sunglass types and lens tints',
      difficulty: 'beginner' as const
    },
    {
      id: 'occupational-lenses',
      title: 'Occupational Lenses & Safety Eyewear',
      description: 'Specialized lenses for workplace requirements and safety standards',
      difficulty: 'intermediate' as const
    },
    {
      id: 'sports-vision',
      title: 'Sports Vision & Performance Eyewear',
      description: 'Eyewear solutions designed for athletic performance and eye protection',
      difficulty: 'intermediate' as const
    },
    {
      id: 'children-eyewear',
      title: 'Children\'s Eyewear',
      description: 'Special considerations for fitting and dispensing eyewear to children',
      difficulty: 'beginner' as const
    },
    {
      id: 'laboratory-procedures',
      title: 'Laboratory Procedures and Quality Control',
      description: 'Lens fabrication processes, verification techniques, and quality standards',
      difficulty: 'intermediate' as const
    },
    {
      id: 'regulations-standards',
      title: 'Regulations and Standards in Opticianry',
      description: 'Industry standards, regulatory requirements, and professional guidelines',
      difficulty: 'intermediate' as const
    },
    {
      id: 'dispensing-measurements',
      title: 'Patient Measurements for Dispensing',
      description: 'Techniques and protocols for taking accurate patient measurements for optimal eyewear dispensing',
      difficulty: 'intermediate' as const
    }
  ],
  lenses: [
    {
      id: 'sunglasses-tints',
      title: 'Sunglasses & Lens Tints',
      description: 'Characteristics and applications of different sunglass types and lens tints',
      difficulty: 'beginner' as const
    },
    {
      id: 'occupational-lenses',
      title: 'Occupational Lenses & Safety Eyewear',
      description: 'Specialized lenses for workplace requirements and safety standards',
      difficulty: 'intermediate' as const
    },
    {
      id: 'sports-vision',
      title: 'Sports Vision & Performance Eyewear',
      description: 'Eyewear solutions designed for athletic performance and eye protection',
      difficulty: 'intermediate' as const
    }
  ],
  contactLenses: [
    {
      id: 'contact-lens-overview',
      title: 'Introduction to Contact Lenses',
      description: 'Basic overview of contact lenses, types, and benefits',
      difficulty: 'beginner' as const
    },
    {
      id: 'eye-anatomy-cl',
      title: 'Ocular Anatomy for Contact Lenses',
      description: 'Specific ocular anatomy relevant to contact lens fitting and wear',
      difficulty: 'beginner' as const
    },
    {
      id: 'cl-fitting',
      title: 'Contact Lens Fitting and Evaluation',
      description: 'Techniques and considerations for fitting contact lenses',
      difficulty: 'intermediate' as const
    },
    {
      id: 'contact-lens-design-materials',
      title: 'Contact Lens Design and Materials',
      description: 'Understanding different contact lens designs and material properties',
      difficulty: 'intermediate' as const
    },
    {
      id: 'contact-lens-education-followup',
      title: 'Patient Education and Follow-up for Contact Lenses',
      description: 'Proper techniques for educating patients and follow-up care protocols',
      difficulty: 'intermediate' as const
    },
    {
      id: 'cl-care',
      title: 'Contact Lens Care and Maintenance',
      description: 'Proper care, cleaning, and maintenance of contact lenses',
      difficulty: 'beginner' as const
    },
    {
      id: 'cl-complications',
      title: 'Contact Lens Complications',
      description: 'Common complications, causes, and management strategies',
      difficulty: 'advanced' as const
    },
    {
      id: 'cl-pre-fitting',
      title: 'Contact Lens Pre-Fitting Evaluation',
      description: 'Comprehensive assessment techniques before contact lens fitting including patient history and ocular evaluation',
      difficulty: 'intermediate' as const
    },
    {
      id: 'cl-designs-detailed',
      title: 'Detailed Contact Lens Designs',
      description: 'In-depth exploration of various contact lens designs including soft, RGP, and specialty lenses',
      difficulty: 'advanced' as const
    },
    {
      id: 'cl-fitting-evaluation',
      title: 'Contact Lens Fitting and Evaluation',
      description: 'Techniques for fitting and evaluating different types of contact lenses to ensure optimal performance',
      difficulty: 'intermediate' as const
    }
  ],
  professional: [
    {
      id: 'patient-communication',
      title: 'Patient Communication & Service Skills',
      description: 'Effective communication and service techniques for the optical environment',
      difficulty: 'beginner' as const
    },
    {
      id: 'low-vision-aids',
      title: 'Low Vision Aids & Assistive Devices',
      description: 'Solutions for patients with significant visual impairment',
      difficulty: 'advanced' as const
    }
  ],
  frames: [
    {
      id: 'frame-styles-selection',
      title: 'Frame Styles and Selection Criteria',
      description: 'Understanding frame styles and selection criteria for different face shapes, prescriptions, and needs',
      difficulty: 'intermediate' as const
    }
  ]
};

// Define suggested learning paths
export const beginnerLearningPath = [
  'eye-anatomy',
  'refractive-errors',
  'frame-basics',
  'lens-basics',
  'lens-materials',
  'lens-coatings',
  'sunglasses-tints',
  'frame-adjustment',
  'children-eyewear',
  'patient-communication'
];

export const intermediateLearningPath = [
  ...beginnerLearningPath,
  'lens-designs',
  'prescription-analysis',
  'refractive-errors-advanced',
  'occupational-lenses',
  'sports-vision',
  'laboratory-procedures',
  'regulations-standards'
];

export const advancedLearningPath = [
  ...intermediateLearningPath,
  'low-vision-aids'
];

// Define contact lens learning path
export const contactLensLearningPath = [
  'eye-anatomy',
  'refractive-errors',
  'contact-lens-overview',
  'eye-anatomy-cl',
  'contact-lens-design-materials',
  'cl-fitting',
  'contact-lens-education-followup',
  'cl-care',
  'cl-complications'
];

// Export study modules with metadata for search and navigation
export const studyModuleData = [
  {
    id: 'eye-anatomy',
    title: 'Human Eye Anatomy & Function',
    category: 'foundations',
    difficulty: 'beginner',
    estimatedTimeMinutes: 45,
    prerequisiteIds: [],
    relatedIds: ['refractive-errors', 'lens-basics', 'eye-anatomy-cl']
  },
  {
    id: 'refractive-errors',
    title: 'Understanding Refractive Errors',
    category: 'foundations',
    difficulty: 'beginner',
    estimatedTimeMinutes: 40,
    prerequisiteIds: ['eye-anatomy'],
    relatedIds: ['lens-basics', 'lens-designs', 'cl-overview', 'refractive-errors-advanced']
  },
  {
    id: 'refractive-errors-advanced',
    title: 'Advanced Refractive Errors',
    category: 'foundations',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 50,
    prerequisiteIds: ['refractive-errors', 'eye-anatomy'],
    relatedIds: ['lens-designs', 'low-vision-aids', 'prescription-analysis']
  },
  {
    id: 'prescription-analysis',
    title: 'Analyzing Optical Prescriptions',
    category: 'foundations',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 45,
    prerequisiteIds: ['refractive-errors', 'lens-basics'],
    relatedIds: ['refractive-errors-advanced', 'lens-designs', 'occupational-lenses']
  },
  {
    id: 'frame-basics',
    title: 'Eyeglass Frame Basics',
    category: 'dispensing',
    difficulty: 'beginner',
    estimatedTimeMinutes: 40,
    prerequisiteIds: [],
    relatedIds: ['lens-basics', 'patient-communication', 'frame-adjustment']
  },
  {
    id: 'frame-adjustment',
    title: 'Frame Adjustment & Repair',
    category: 'dispensing',
    difficulty: 'beginner',
    estimatedTimeMinutes: 35,
    prerequisiteIds: ['frame-basics'],
    relatedIds: ['patient-communication', 'children-eyewear']
  },
  {
    id: 'lens-basics',
    title: 'Ophthalmic Lens Basics',
    category: 'dispensing',
    difficulty: 'beginner',
    estimatedTimeMinutes: 50,
    prerequisiteIds: ['eye-anatomy'],
    relatedIds: ['frame-basics', 'lens-materials', 'lens-coatings']
  },
  {
    id: 'lens-materials',
    title: 'Ophthalmic Lens Materials',
    category: 'dispensing',
    difficulty: 'beginner',
    estimatedTimeMinutes: 45,
    prerequisiteIds: ['lens-basics'],
    relatedIds: ['lens-coatings', 'lens-designs', 'sunglasses-tints']
  },
  {
    id: 'lens-coatings',
    title: 'Lens Coatings & Treatments',
    category: 'dispensing',
    difficulty: 'beginner',
    estimatedTimeMinutes: 40,
    prerequisiteIds: ['lens-basics'],
    relatedIds: ['lens-materials', 'lens-designs', 'sunglasses-tints']
  },
  {
    id: 'lens-designs',
    title: 'Specialized Lens Designs',
    category: 'dispensing',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 55,
    prerequisiteIds: ['lens-basics', 'lens-materials'],
    relatedIds: ['lens-coatings', 'refractive-errors', 'occupational-lenses']
  },
  {
    id: 'sunglasses-tints',
    title: 'Sunglasses & Lens Tints',
    category: 'dispensing',
    difficulty: 'beginner',
    estimatedTimeMinutes: 40,
    prerequisiteIds: ['lens-basics'],
    relatedIds: ['lens-coatings', 'sports-vision', 'lens-materials']
  },
  {
    id: 'occupational-lenses',
    title: 'Occupational Lenses & Safety Eyewear',
    category: 'dispensing',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 50,
    prerequisiteIds: ['lens-basics', 'lens-designs'],
    relatedIds: ['lens-materials', 'prescription-analysis', 'sports-vision']
  },
  {
    id: 'sports-vision',
    title: 'Sports Vision & Performance Eyewear',
    category: 'dispensing',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 45,
    prerequisiteIds: ['lens-basics', 'frame-basics'],
    relatedIds: ['sunglasses-tints', 'occupational-lenses', 'lens-materials']
  },
  {
    id: 'children-eyewear',
    title: 'Children\'s Eyewear',
    category: 'dispensing',
    difficulty: 'beginner',
    estimatedTimeMinutes: 40,
    prerequisiteIds: ['frame-basics', 'lens-basics'],
    relatedIds: ['frame-adjustment', 'patient-communication', 'refractive-errors']
  },
  {
    id: 'patient-communication',
    title: 'Patient Communication & Service Skills',
    category: 'professional',
    difficulty: 'beginner',
    estimatedTimeMinutes: 35,
    prerequisiteIds: [],
    relatedIds: ['frame-basics', 'lens-basics', 'children-eyewear']
  },
  {
    id: 'low-vision-aids',
    title: 'Low Vision Aids & Assistive Devices',
    category: 'professional',
    difficulty: 'advanced',
    estimatedTimeMinutes: 55,
    prerequisiteIds: ['refractive-errors', 'lens-basics'],
    relatedIds: ['refractive-errors-advanced', 'lens-designs', 'occupational-lenses']
  },
  {
    id: 'cl-overview',
    title: 'Introduction to Contact Lenses',
    category: 'contactLenses',
    difficulty: 'beginner',
    estimatedTimeMinutes: 50,
    prerequisiteIds: ['refractive-errors'],
    relatedIds: ['eye-anatomy-cl', 'refractive-errors']
  },
  {
    id: 'eye-anatomy-cl',
    title: 'Eye Anatomy for Contact Lenses',
    category: 'contactLenses',
    difficulty: 'beginner',
    estimatedTimeMinutes: 45,
    prerequisiteIds: ['eye-anatomy', 'cl-overview'],
    relatedIds: ['cl-overview', 'refractive-errors']
  },
  {
    id: 'cl-fitting',
    title: 'Contact Lens Fitting and Evaluation',
    category: 'contactLenses',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 40,
    prerequisiteIds: ['contact-lens-overview'],
    relatedIds: ['eye-anatomy-cl']
  },
  {
    id: 'cl-care',
    title: 'Contact Lens Care and Maintenance',
    category: 'contactLenses',
    difficulty: 'beginner',
    estimatedTimeMinutes: 35,
    prerequisiteIds: ['contact-lens-overview'],
    relatedIds: ['eye-anatomy-cl']
  },
  {
    id: 'cl-complications',
    title: 'Contact Lens Complications',
    category: 'contactLenses',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 40,
    prerequisiteIds: ['contact-lens-overview'],
    relatedIds: ['eye-anatomy-cl']
  },
  {
    id: 'laboratory-procedures',
    title: 'Laboratory Procedures and Quality Control',
    category: 'dispensing',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 60,
    prerequisiteIds: ['lens-basics', 'frame-basics'],
    relatedIds: ['lens-coatings', 'lens-materials', 'regulations-standards']
  },
  {
    id: 'regulations-standards',
    title: 'Regulations and Standards in Opticianry',
    category: 'dispensing',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 50,
    prerequisiteIds: ['lens-basics', 'frame-basics'],
    relatedIds: ['laboratory-procedures', 'cl-fitting', 'patient-communication']
  },
  {
    id: 'contact-lens-design-materials',
    title: 'Contact Lens Design and Materials',
    category: 'contactLenses',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 60,
    prerequisiteIds: ['contact-lens-overview', 'eye-anatomy-cl'],
    relatedIds: ['cl-fitting', 'cl-care']
  },
  {
    id: 'contact-lens-education-followup',
    title: 'Patient Education and Follow-up for Contact Lenses',
    category: 'contactLenses',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 45,
    prerequisiteIds: ['contact-lens-overview'],
    relatedIds: ['cl-care', 'cl-complications', 'cl-fitting', 'contact-lens-design-materials']
  },
  {
    id: 'dispensing-measurements',
    title: 'Patient Measurements for Dispensing',
    category: 'dispensing',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 40,
    prerequisiteIds: ['frame-basics', 'lens-basics'],
    relatedIds: ['frame-adjustment', 'patient-communication']
  },
  {
    id: 'frame-styles-selection',
    title: 'Frame Styles and Selection Criteria',
    category: 'frames',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 45,
    prerequisiteIds: ['frame-basics'],
    relatedIds: ['frame-basics']
  },
  {
    id: 'cl-pre-fitting',
    title: 'Contact Lens Pre-Fitting Evaluation',
    category: 'contactLenses',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 40,
    prerequisiteIds: ['contact-lens-overview'],
    relatedIds: ['eye-anatomy-cl']
  },
  {
    id: 'cl-designs-detailed',
    title: 'Detailed Contact Lens Designs',
    category: 'contactLenses',
    difficulty: 'advanced',
    estimatedTimeMinutes: 50,
    prerequisiteIds: ['contact-lens-overview'],
    relatedIds: ['eye-anatomy-cl']
  },
  {
    id: 'cl-fitting-evaluation',
    title: 'Contact Lens Fitting and Evaluation',
    category: 'contactLenses',
    difficulty: 'intermediate',
    estimatedTimeMinutes: 40,
    prerequisiteIds: ['contact-lens-overview'],
    relatedIds: ['eye-anatomy-cl']
  }
]; 