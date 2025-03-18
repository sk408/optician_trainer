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
// Optical theory content
export { basicOpticsContent } from './basicOpticsContent';
export { lensTypesContent } from './lensTypesContent';
// Future modules still to be implemented - uncomment when files are created
export { occupationalLensesContent } from './occupationalLensesContent';
export { prescriptionAnalysisContent } from './prescriptionAnalysisContent';
export { refractiveErrorsAdvancedContent } from './refractiveErrorsAdvancedContent';

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
    }
  ],
  contactLenses: [
    {
      id: 'cl-overview',
      title: 'Introduction to Contact Lenses',
      description: 'Basic understanding of what contact lenses are and their types',
      difficulty: 'beginner' as const
    },
    {
      id: 'eye-anatomy-cl',
      title: 'Eye Anatomy for Contact Lenses',
      description: 'Understanding the structures of the eye relevant to contact lens wear',
      difficulty: 'beginner' as const
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
  'sports-vision'
];

export const advancedLearningPath = [
  ...intermediateLearningPath,
  'low-vision-aids'
];

// Define contact lens learning path
export const contactLensLearningPath = [
  'eye-anatomy',
  'refractive-errors',
  'cl-overview',
  'eye-anatomy-cl'
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
  }
]; 