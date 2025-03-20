import { StudyTopic, ExamSection } from './aboTopics';

/**
 * NCLE Study Topics
 * Organized by exam section with appropriate beginner-level content
 * Source: National Contact Lens Examiners (NCLE) exam content outline
 */
export const ncleExamSections: ExamSection[] = [
  {
    id: 'pre-fitting',
    title: 'Pre-Fitting',
    description: 'Preparation and evaluation before contact lens fitting',
    weightPercentage: 20,
    topics: [
      {
        id: 'cl-overview',
        title: 'Introduction to Contact Lenses',
        description: 'Basic understanding of what contact lenses are and their types',
        difficulty: 'beginner',
        estimatedTimeMinutes: 30,
        keyPoints: [
          'History of contact lenses',
          'Soft vs. rigid lenses',
          'Daily vs. extended wear',
          'Disposable vs. conventional',
          'Spherical vs. toric vs. multifocal'
        ],
        relatedTopics: ['cl-materials', 'eye-anatomy-cl']
      },
      {
        id: 'eye-anatomy-cl',
        title: 'Eye Anatomy for Contact Lenses',
        description: 'Understanding the structures of the eye relevant to contact lens wear',
        difficulty: 'beginner',
        estimatedTimeMinutes: 45,
        keyPoints: [
          'Cornea structure and function',
          'Tear film composition and function',
          'Conjunctiva and sclera',
          'Eyelids and blinking',
          'Pupil and iris'
        ],
        relatedTopics: ['cl-overview', 'corneal-topography-basics']
      },
      {
        id: 'corneal-topography-basics',
        title: 'Introduction to Corneal Topography',
        description: 'Basic understanding of corneal shape and measurement',
        difficulty: 'beginner',
        estimatedTimeMinutes: 40,
        keyPoints: [
          'What is corneal topography?',
          'Average corneal measurements',
          'Corneal curvature basics',
          'K-readings',
          'Normal vs. irregular corneas'
        ],
        relatedTopics: ['eye-anatomy-cl', 'cl-fitting-basics']
      }
    ]
  },
  {
    id: 'diagnostic-fitting',
    title: 'Diagnostic Fitting',
    description: 'Process of evaluating and selecting the right contact lenses',
    weightPercentage: 25,
    topics: [
      {
        id: 'cl-fitting-basics',
        title: 'Contact Lens Fitting Basics',
        description: 'Fundamental approach to fitting contact lenses',
        difficulty: 'beginner',
        estimatedTimeMinutes: 60,
        keyPoints: [
          'Patient history and needs assessment',
          'Selecting initial diagnostic lenses',
          'Base curve selection',
          'Diameter selection',
          'Power calculation for contact lenses'
        ],
        relatedTopics: ['corneal-topography-basics', 'soft-lens-parameters']
      },
      {
        id: 'soft-lens-parameters',
        title: 'Soft Lens Parameters',
        description: 'Understanding key measurements of soft contact lenses',
        difficulty: 'beginner',
        estimatedTimeMinutes: 45,
        keyPoints: [
          'Base curve/radius',
          'Diameter',
          'Center thickness',
          'Power',
          'Water content',
          'Oxygen permeability/transmissibility'
        ],
        relatedTopics: ['cl-fitting-basics', 'rgp-lens-parameters']
      },
      {
        id: 'rgp-lens-parameters',
        title: 'RGP Lens Parameters',
        description: 'Understanding key measurements of rigid gas permeable lenses',
        difficulty: 'beginner',
        estimatedTimeMinutes: 45,
        keyPoints: [
          'Base curve radius',
          'Overall diameter',
          'Optic zone diameter',
          'Edge design',
          'Center thickness',
          'Power'
        ],
        relatedTopics: ['soft-lens-parameters', 'cl-fitting-basics']
      }
    ]
  },
  {
    id: 'cl-materials',
    title: 'Contact Lens Materials',
    description: 'Understanding the composition and properties of contact lens materials',
    weightPercentage: 15,
    topics: [
      {
        id: 'soft-cl-materials',
        title: 'Soft Contact Lens Materials',
        description: 'Overview of hydrogel and silicone hydrogel materials',
        difficulty: 'beginner',
        estimatedTimeMinutes: 35,
        keyPoints: [
          'Hydrogel materials',
          'Silicone hydrogel materials',
          'Water content',
          'Oxygen permeability (Dk)',
          'Oxygen transmissibility (Dk/t)',
          'FDA groups for soft lenses'
        ],
        relatedTopics: ['cl-care-systems', 'rgp-cl-materials']
      },
      {
        id: 'rgp-cl-materials',
        title: 'RGP Contact Lens Materials',
        description: 'Overview of materials used in rigid gas permeable lenses',
        difficulty: 'beginner',
        estimatedTimeMinutes: 30,
        keyPoints: [
          'Silicone acrylate materials',
          'Fluorosilicone acrylate materials',
          'Oxygen permeability',
          'Wettability and deposit resistance',
          'Durability and stability'
        ],
        relatedTopics: ['soft-cl-materials', 'cl-care-systems']
      },
      {
        id: 'cl-care-systems',
        title: 'Contact Lens Care Systems',
        description: 'Introduction to solutions and care products for contact lenses',
        difficulty: 'beginner',
        estimatedTimeMinutes: 40,
        keyPoints: [
          'Multipurpose solutions',
          'Hydrogen peroxide systems',
          'Daily cleaners',
          'Enzymatic cleaners',
          'Rewetting drops',
          'Solution sensitivities and allergies'
        ],
        relatedTopics: ['soft-cl-materials', 'rgp-cl-materials', 'cl-hygiene']
      }
    ]
  },
  {
    id: 'patient-education',
    title: 'Patient Education',
    description: 'Teaching patients about proper contact lens use and care',
    weightPercentage: 15,
    topics: [
      {
        id: 'cl-insertion-removal',
        title: 'Contact Lens Insertion and Removal',
        description: 'Techniques for safely putting in and taking out contact lenses',
        difficulty: 'beginner',
        estimatedTimeMinutes: 35,
        keyPoints: [
          'Hand washing procedure',
          'Soft lens insertion methods',
          'Soft lens removal methods',
          'RGP insertion methods',
          'RGP removal methods',
          'Troubleshooting difficulties'
        ],
        relatedTopics: ['cl-hygiene', 'cl-wear-schedules']
      },
      {
        id: 'cl-hygiene',
        title: 'Contact Lens Hygiene',
        description: 'Best practices for keeping contact lenses clean and safe',
        difficulty: 'beginner',
        estimatedTimeMinutes: 30,
        keyPoints: [
          'Handwashing techniques',
          'Case cleaning and replacement',
          'Solution handling and storage',
          'Avoiding contamination',
          'Makeup and cosmetics with contact lenses'
        ],
        relatedTopics: ['cl-insertion-removal', 'cl-care-systems']
      },
      {
        id: 'cl-wear-schedules',
        title: 'Contact Lens Wear Schedules',
        description: 'Understanding appropriate wearing times and replacement schedules',
        difficulty: 'beginner',
        estimatedTimeMinutes: 25,
        keyPoints: [
          'Daily wear vs. extended wear',
          'Replacement schedules (daily, bi-weekly, monthly)',
          'Adaptation period for new wearers',
          'Maximum daily wearing time',
          'Signs of overwear'
        ],
        relatedTopics: ['cl-insertion-removal', 'cl-complications-basics']
      }
    ]
  },
  {
    id: 'follow-up-care',
    title: 'Follow-Up Care',
    description: 'Evaluation and management of contact lens wear over time',
    weightPercentage: 15,
    topics: [
      {
        id: 'cl-evaluation',
        title: 'Contact Lens Evaluation Basics',
        description: 'How to assess contact lens fit and performance',
        difficulty: 'beginner',
        estimatedTimeMinutes: 45,
        keyPoints: [
          'Evaluating lens centration',
          'Checking movement',
          'Assessing comfort',
          'Visual acuity with contact lenses',
          'Over-refraction',
          'Slit lamp evaluation basics'
        ],
        relatedTopics: ['cl-complications-basics', 'cl-modifications']
      },
      {
        id: 'cl-complications-basics',
        title: 'Common Contact Lens Complications',
        description: 'Introduction to frequent issues encountered with contact lens wear',
        difficulty: 'beginner',
        estimatedTimeMinutes: 50,
        keyPoints: [
          'Dry eye and discomfort',
          'Solution sensitivities',
          'Corneal abrasions',
          'Giant papillary conjunctivitis (GPC)',
          'Infiltrates',
          'Recognizing red flags'
        ],
        relatedTopics: ['cl-evaluation', 'cl-hygiene']
      },
      {
        id: 'cl-modifications',
        title: 'Basic Contact Lens Modifications',
        description: 'Understanding how contact lens parameters can be adjusted',
        difficulty: 'beginner',
        estimatedTimeMinutes: 35,
        keyPoints: [
          'Changing base curve',
          'Adjusting diameter',
          'Power changes',
          'Material switches',
          'Modality changes (daily vs monthly)'
        ],
        relatedTopics: ['cl-evaluation', 'cl-wear-schedules']
      }
    ]
  },
  {
    id: 'regulatory',
    title: 'Regulatory and Standards',
    description: 'Legal and professional requirements related to contact lenses',
    weightPercentage: 10,
    topics: [
      {
        id: 'cl-regulations',
        title: 'Contact Lens Regulations',
        description: 'Basic understanding of laws governing contact lens dispensing',
        difficulty: 'beginner',
        estimatedTimeMinutes: 30,
        keyPoints: [
          'Prescription requirements',
          'Contact lens prescription expiration',
          'Verification requirements',
          'FCLCA (Fairness to Contact Lens Consumers Act)',
          'State regulations basics'
        ],
        relatedTopics: ['cl-standards', 'cl-documentation']
      },
      {
        id: 'cl-standards',
        title: 'Contact Lens Standards',
        description: 'Industry standards for contact lens manufacturing and labeling',
        difficulty: 'beginner',
        estimatedTimeMinutes: 25,
        keyPoints: [
          'FDA classification of contact lenses',
          'ISO standards overview',
          'ANSI standards for contact lenses',
          'Labeling requirements',
          'Package inserts and patient instructions'
        ],
        relatedTopics: ['cl-regulations', 'cl-documentation']
      },
      {
        id: 'cl-documentation',
        title: 'Contact Lens Documentation',
        description: 'Record-keeping requirements for contact lens fitting',
        difficulty: 'beginner',
        estimatedTimeMinutes: 30,
        keyPoints: [
          'Required elements of contact lens records',
          'Documenting the fitting process',
          'Follow-up visit documentation',
          'Prescription documentation',
          'Patient instruction documentation'
        ],
        relatedTopics: ['cl-regulations', 'cl-standards']
      }
    ]
  }
];

// Quick access to all beginner NCLE topics
export const allBeginnerNcleTopics = ncleExamSections
  .flatMap(section => section.topics)
  .filter(topic => topic.difficulty === 'beginner');

// Recommended learning path for absolute beginners in contact lenses
export const beginnerNcleLearningPath = [
  'cl-overview',
  'eye-anatomy-cl',
  'contact-lens-design-materials',
  'cl-care',
  'cl-pre-fitting',
  'cl-fitting',
  'cl-fitting-evaluation',
  'contact-lens-education-followup',
  'cl-complications',
  'patient-communication'
]; 