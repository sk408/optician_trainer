export interface StudyTopic {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTimeMinutes: number;
  keyPoints: string[];
  relatedTopics: string[];
}

export interface ExamSection {
  id: string;
  title: string;
  description: string;
  weightPercentage: number;
  topics: StudyTopic[];
}

/**
 * ABO Study Topics
 * Organized by exam section with appropriate beginner-level content
 * Source: American Board of Opticianry (ABO) exam content outline
 */
export const aboExamSections: ExamSection[] = [
  {
    id: 'optical-theory',
    title: 'Optical Theory',
    description: 'Fundamental principles of optics that govern how light behaves and how lenses function',
    weightPercentage: 20,
    topics: [
      {
        id: 'basic-optics',
        title: 'Basic Principles of Light',
        description: 'Introduction to how light travels and interacts with different materials',
        difficulty: 'beginner',
        estimatedTimeMinutes: 30,
        keyPoints: [
          'Definition of light and electromagnetic spectrum',
          'Reflection, refraction, and absorption',
          'Index of refraction in optical materials',
          'How light travels through different mediums',
          'Snell\'s law basics in simple terms',
          'The visible light spectrum and wavelengths'
        ],
        relatedTopics: ['prism', 'lens-types']
      },
      {
        id: 'lens-types',
        title: 'Types of Lenses',
        description: 'Understanding different lens types and their basic characteristics',
        difficulty: 'beginner',
        estimatedTimeMinutes: 45,
        keyPoints: [
          'Convex vs. concave lenses',
          'Spherical vs. cylindrical lenses',
          'Plus vs. minus powers',
          'Basic lens terminology'
        ],
        relatedTopics: ['basic-optics', 'lens-materials']
      },
      {
        id: 'prism',
        title: 'Introduction to Prism',
        description: 'Understanding what optical prism is and its basic effects',
        difficulty: 'beginner',
        estimatedTimeMinutes: 30,
        keyPoints: [
          'What is a prism?',
          'How prisms bend light',
          'Measuring prism in diopters',
          'Basic uses of prism in eyewear'
        ],
        relatedTopics: ['basic-optics', 'lens-types']
      }
    ]
  },
  {
    id: 'dispensing',
    title: 'Dispensing Procedures',
    description: 'The process of fitting, adjusting, and delivering eyewear to patients',
    weightPercentage: 25,
    topics: [
      {
        id: 'frame-fit',
        title: 'Basic Frame Fitting',
        description: 'How to properly fit eyeglass frames to different face shapes',
        difficulty: 'beginner',
        estimatedTimeMinutes: 60,
        keyPoints: [
          'Face shape analysis',
          'Frame size parameters',
          'Bridge fit basics',
          'Temple length and adjustment',
          'Common fitting problems'
        ],
        relatedTopics: ['frame-materials', 'frame-adjustments']
      },
      {
        id: 'frame-materials',
        title: 'Frame Materials',
        description: 'Overview of common eyeglass frame materials and their properties',
        difficulty: 'beginner',
        estimatedTimeMinutes: 30,
        keyPoints: [
          'Metal frames and their composition',
          'Plastic/zyl frames',
          'Nylon frames',
          'Titanium and memory metals',
          'Hypoallergenic options'
        ],
        relatedTopics: ['frame-fit', 'frame-adjustments']
      },
      {
        id: 'frame-adjustments',
        title: 'Basic Frame Adjustments',
        description: 'How to make common adjustments to eyeglass frames',
        difficulty: 'beginner',
        estimatedTimeMinutes: 45,
        keyPoints: [
          'Temple adjustments',
          'Nose pad adjustments',
          'Pantoscopic tilt',
          'Face form/wrap adjustments',
          'Basic tools for adjustments'
        ],
        relatedTopics: ['frame-fit', 'frame-materials']
      }
    ]
  },
  {
    id: 'lens-applications',
    title: 'Lens Applications',
    description: 'Understanding lens options and their specific uses',
    weightPercentage: 20,
    topics: [
      {
        id: 'lens-materials',
        title: 'Lens Materials for Beginners',
        description: 'Introduction to common lens materials and their basic properties',
        difficulty: 'beginner',
        estimatedTimeMinutes: 45,
        keyPoints: [
          'CR-39 plastic lenses',
          'Polycarbonate lenses',
          'High-index materials',
          'Glass lenses',
          'Impact resistance comparison'
        ],
        relatedTopics: ['lens-treatments', 'lens-types']
      },
      {
        id: 'lens-treatments',
        title: 'Basic Lens Treatments',
        description: 'Overview of common lens coatings and treatments',
        difficulty: 'beginner',
        estimatedTimeMinutes: 30,
        keyPoints: [
          'Anti-reflective coatings',
          'Scratch-resistant coatings',
          'UV protection',
          'Photochromic lenses',
          'Tints and polarization'
        ],
        relatedTopics: ['lens-materials', 'specialty-lenses']
      },
      {
        id: 'specialty-lenses',
        title: 'Introduction to Specialty Lenses',
        description: 'Basic overview of lenses designed for specific purposes',
        difficulty: 'beginner',
        estimatedTimeMinutes: 40,
        keyPoints: [
          'Single vision vs. multifocal lenses',
          'Progressive lenses basics',
          'Bifocal and trifocal lenses',
          'Computer/office lenses',
          'Reading glasses'
        ],
        relatedTopics: ['lens-treatments', 'lens-materials']
      }
    ]
  },
  {
    id: 'regulations',
    title: 'Regulations and Standards',
    description: 'Understanding industry standards and legal requirements',
    weightPercentage: 10,
    topics: [
      {
        id: 'rx-interpretation',
        title: 'Reading a Prescription',
        description: 'How to properly interpret an eyeglass prescription',
        difficulty: 'beginner',
        estimatedTimeMinutes: 50,
        keyPoints: [
          'Sphere, cylinder, and axis',
          'Add power for multifocals',
          'Prism and base direction',
          'PD (pupillary distance)',
          'Common abbreviations'
        ],
        relatedTopics: ['lens-types', 'basic-optics']
      },
      {
        id: 'basic-standards',
        title: 'Basic Optical Standards',
        description: 'Introduction to industry standards for eyewear',
        difficulty: 'beginner',
        estimatedTimeMinutes: 35,
        keyPoints: [
          'ANSI Z80 standards overview',
          'FDA requirements for impact resistance',
          'Prescription verification tolerance',
          'Record-keeping requirements',
          'Patient rights'
        ],
        relatedTopics: ['rx-interpretation', 'safety-eyewear']
      },
      {
        id: 'safety-eyewear',
        title: 'Safety Eyewear Basics',
        description: 'Introduction to protective eyewear standards',
        difficulty: 'beginner',
        estimatedTimeMinutes: 30,
        keyPoints: [
          'ANSI Z87.1 standard',
          'High impact vs. basic impact protection',
          'Safety eyewear markings',
          'Prescription safety eyewear',
          'Common industries requiring safety eyewear'
        ],
        relatedTopics: ['basic-standards', 'lens-materials']
      }
    ]
  },
  {
    id: 'measurements',
    title: 'Measurements',
    description: 'Techniques for accurately measuring parameters for eyewear',
    weightPercentage: 15,
    topics: [
      {
        id: 'pd-measurement',
        title: 'Measuring Pupillary Distance',
        description: 'How to properly measure PD for different types of eyewear',
        difficulty: 'beginner',
        estimatedTimeMinutes: 30,
        keyPoints: [
          'Monocular vs. binocular PD',
          'Using a pupillometer',
          'Manual PD measurement',
          'Near PD vs. distance PD',
          'Common measurement errors'
        ],
        relatedTopics: ['fitting-height', 'frame-measurements']
      },
      {
        id: 'fitting-height',
        title: 'Measuring Fitting Height',
        description: 'How to measure vertical positioning for progressive and multifocal lenses',
        difficulty: 'beginner',
        estimatedTimeMinutes: 30,
        keyPoints: [
          'Fitting cross placement',
          'Measuring height for progressive lenses',
          'Bifocal height measurement',
          'Using fitting dots/devices',
          'Common measurement errors'
        ],
        relatedTopics: ['pd-measurement', 'specialty-lenses']
      },
      {
        id: 'frame-measurements',
        title: 'Frame Measurements',
        description: 'Understanding how to measure frames and their components',
        difficulty: 'beginner',
        estimatedTimeMinutes: 35,
        keyPoints: [
          'A-B-ED system (eye size, bridge, temple)',
          'Frame wrap and pantoscopic tilt',
          'Vertex distance',
          'Face form angle',
          'Using frame rulers and tools'
        ],
        relatedTopics: ['pd-measurement', 'frame-fit']
      }
    ]
  },
  {
    id: 'tools-equipment',
    title: 'Tools and Equipment',
    description: 'Familiarization with instruments used in opticianry',
    weightPercentage: 10,
    topics: [
      {
        id: 'basic-tools',
        title: 'Basic Optical Tools',
        description: 'Introduction to common tools used by opticians',
        difficulty: 'beginner',
        estimatedTimeMinutes: 35,
        keyPoints: [
          'Frame adjustment tools',
          'Lens clock',
          'PD ruler',
          'Dispensing tools',
          'Frame warmers'
        ],
        relatedTopics: ['frame-adjustments', 'measurements']
      },
      {
        id: 'lensometers',
        title: 'Lensometer Basics',
        description: 'Introduction to using a lensometer to verify prescriptions',
        difficulty: 'beginner',
        estimatedTimeMinutes: 60,
        keyPoints: [
          'Parts of a lensometer',
          'Focusing the eyepiece',
          'Finding the optical center',
          'Reading sphere power',
          'Reading cylinder power and axis',
          'Verifying a simple prescription'
        ],
        relatedTopics: ['basic-tools', 'rx-interpretation']
      },
      {
        id: 'measuring-devices',
        title: 'Measuring Devices',
        description: 'Tools used for taking various eyewear measurements',
        difficulty: 'beginner',
        estimatedTimeMinutes: 30,
        keyPoints: [
          'Pupillometers',
          'Digital centration devices',
          'Corneal reflection pupillometers',
          'Measuring magnifiers',
          'Frame rulers'
        ],
        relatedTopics: ['pd-measurement', 'lensometers']
      }
    ]
  }
];

// Quick access to all beginner topics
export const allBeginnerTopics = aboExamSections
  .flatMap(section => section.topics)
  .filter(topic => topic.difficulty === 'beginner');

// Recommended learning path for absolute beginners
export const beginnerLearningPath = [
  'basic-optics',
  'lens-types',
  'frame-fit',
  'lens-materials',
  'rx-interpretation',
  'pd-measurement',
  'basic-tools',
  'frame-adjustments',
  'lens-treatments',
  'lensometers'
];

// Quick access to all beginner ABO topics
export const allBeginnerAboTopics = aboExamSections
  .flatMap(section => section.topics)
  .filter(topic => topic.difficulty === 'beginner');

// Recommended structured learning path for absolute beginners
export const beginnerAboLearningPath = [
  'basic-optics',
  'lens-types',
  'prescription-reading',
  'lens-materials',
  'frame-parts',
  'frame-selection',
  'measurements',
  'dispensing-basics',
  'lens-verification',
  'regulations'
];

// Module-based learning structure for beginners
export const beginnerModules = [
  {
    id: 'foundations',
    title: 'Opticianry Foundations',
    description: 'Essential concepts every optician needs to know',
    topicIds: ['basic-optics', 'lens-types', 'prescription-reading']
  },
  {
    id: 'frames',
    title: 'Frame Knowledge',
    description: 'Understanding eyewear frames and selection',
    topicIds: ['frame-parts', 'frame-selection', 'frame-adjustments']
  },
  {
    id: 'dispensing',
    title: 'Dispensing Basics',
    description: 'Core skills for properly dispensing eyewear',
    topicIds: ['measurements', 'dispensing-basics', 'lens-verification']
  },
  {
    id: 'professional',
    title: 'Professional Practice',
    description: 'Regulations and patient management',
    topicIds: ['regulations', 'ethics', 'patient-communication']
  }
]; 