import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * NCLE Exam Questions: Contact Lens Fitting and Evaluation
 * 
 * Topics covered:
 * - Soft Contact Lens Fitting
 * - RGP Contact Lens Fitting
 * - Fitting Evaluation and Assessment
 */

export const originalContactLensFittingQuestions: ExamQuestion[] = [
  // Soft Contact Lens Fitting
  {
    id: 'ncle-fitting-001',
    question: 'What is the primary parameter used to select the initial base curve for a soft contact lens?',
    options: [
      'Corneal astigmatism',
      'Keratometry readings',
      'Pupil size',
      'Spectacle prescription'
    ],
    correctAnswer: 1,
    explanation: 'Keratometry readings are the primary parameter used to select the initial base curve for a soft contact lens. These measurements provide information about the curvature of the central cornea, which guides the selection of an appropriate lens curvature.',
    category: 'cl-fitting',
    subcategory: 'soft-cl-fitting',
    difficulty: 'easy'
  },
  {
    id: 'ncle-fitting-002',
    question: 'What soft lens parameter has the greatest effect on lens movement?',
    options: [
      'Center thickness',
      'Diameter',
      'Water content',
      'Oxygen permeability'
    ],
    correctAnswer: 1,
    explanation: 'Diameter has the greatest effect on soft lens movement. A larger diameter lens typically results in less movement on the eye, while a smaller diameter allows for more movement. The appropriate amount of movement is necessary for tear exchange and corneal health.',
    category: 'cl-fitting',
    subcategory: 'soft-cl-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-003',
    question: 'What is the typical total diameter range for soft contact lenses?',
    options: [
      '8.0 to 9.5 mm',
      '9.0 to 10.5 mm',
      '13.0 to 15.0 mm',
      '16.0 to 18.0 mm'
    ],
    correctAnswer: 2,
    explanation: 'The typical total diameter range for soft contact lenses is 13.0 to 15.0 mm. This range is designed to cover the cornea completely and extend slightly onto the sclera to provide stability and comfort.',
    category: 'cl-fitting',
    subcategory: 'soft-cl-fitting',
    difficulty: 'easy'
  },
  {
    id: 'ncle-fitting-004',
    question: 'What is the primary goal when fitting toric soft contact lenses?',
    options: [
      'Maximizing lens movement',
      'Achieving proper rotational stability',
      'Minimizing lens thickness',
      'Reducing corneal astigmatism'
    ],
    correctAnswer: 1,
    explanation: 'Achieving proper rotational stability is the primary goal when fitting toric soft contact lenses. Since toric lenses correct astigmatism, they need to maintain consistent orientation to properly align the cylindrical correction with the eye\'s astigmatic axis.',
    category: 'cl-fitting',
    subcategory: 'soft-cl-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-005',
    question: 'What amount of lens movement is generally considered optimal for a soft contact lens?',
    options: [
      '0.1 to 0.2 mm',
      '0.5 to 1.0 mm',
      '2.0 to 3.0 mm',
      '4.0 to 5.0 mm'
    ],
    correctAnswer: 1,
    explanation: '0.5 to 1.0 mm of movement is generally considered optimal for a soft contact lens. This amount allows for adequate tear exchange under the lens while maintaining comfort and stable vision.',
    category: 'cl-fitting',
    subcategory: 'soft-cl-fitting',
    difficulty: 'easy'
  },
  {
    id: 'ncle-fitting-006',
    question: 'Which of the following indicates a soft contact lens that is too steep (tight)?',
    options: [
      'Excessive movement with blinking',
      'Edge standoff visible with fluorescein',
      'Bubbles under the lens',
      'Minimal or no movement with blinking and push-up test resistance'
    ],
    correctAnswer: 3,
    explanation: 'Minimal or no movement with blinking and resistance during the push-up test indicates a soft contact lens that is too steep (tight). This fitting relationship can lead to reduced tear exchange, discomfort, and potentially corneal complications if not addressed.',
    category: 'cl-fitting',
    subcategory: 'soft-cl-fitting',
    difficulty: 'medium'
  },
  
  // RGP Contact Lens Fitting
  {
    id: 'ncle-fitting-007',
    question: 'What is the ideal fluorescein pattern for an aligned RGP lens fit?',
    options: [
      'Pooling in the center with edge standoff',
      'Fluorescein absent in the center with heavy pooling at the edge',
      'Thin, even layer of fluorescein across the entire lens-cornea interface',
      'Heavy central pooling with minimal fluorescein at the edge'
    ],
    correctAnswer: 2,
    explanation: 'A thin, even layer of fluorescein across the entire lens-cornea interface indicates an aligned RGP lens fit. This pattern shows that the lens curvature properly matches the corneal curvature, providing optimal distribution of lens pressure.',
    category: 'cl-fitting',
    subcategory: 'rgp-cl-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-008',
    question: 'What is the typical total diameter range for RGP contact lenses?',
    options: [
      '7.0 to 8.0 mm',
      '8.8 to 10.5 mm',
      '11.0 to 12.5 mm',
      '13.5 to 15.0 mm'
    ],
    correctAnswer: 1,
    explanation: 'The typical total diameter range for RGP contact lenses is 8.8 to 10.5 mm. This is significantly smaller than soft lenses, as RGP lenses are designed to cover most but not all of the cornea.',
    category: 'cl-fitting',
    subcategory: 'rgp-cl-fitting',
    difficulty: 'easy'
  },
  {
    id: 'ncle-fitting-009',
    question: 'Which fluorescein pattern indicates an RGP lens that is too flat?',
    options: [
      'Central pooling (dark area) with peripheral bearing (light area)',
      'Uniform fluorescence across the entire lens',
      'Central bearing (light area) with peripheral pooling (dark area)',
      'Complete absence of fluorescein'
    ],
    correctAnswer: 2,
    explanation: 'Central bearing (light area) with peripheral pooling (dark area) indicates an RGP lens that is too flat. This pattern shows that the lens is touching the central cornea and lifting away at the edges, which can cause central corneal staining and discomfort.',
    category: 'cl-fitting',
    subcategory: 'rgp-cl-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-010',
    question: 'What effect does increasing an RGP lens diameter typically have on lens movement?',
    options: [
      'Increases lens movement',
      'Decreases lens movement',
      'Has no effect on lens movement',
      'Initially increases then decreases lens movement'
    ],
    correctAnswer: 1,
    explanation: 'Increasing an RGP lens diameter typically decreases lens movement. A larger diameter lens has more surface area in contact with the eye, creating greater adherence and stability, which reduces movement with blinking.',
    category: 'cl-fitting',
    subcategory: 'rgp-cl-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-011',
    question: 'Which of the following best describes the optimal position for an RGP lens?',
    options: [
      'Centered on the pupil',
      'Slightly superior to the pupil',
      'Slightly inferior to the pupil',
      'Positioned on the limbus'
    ],
    correctAnswer: 0,
    explanation: 'The optimal position for an RGP lens is centered on the pupil. This positioning provides the best optical alignment for vision and typically indicates a well-fitting lens that interacts appropriately with the eyelids and tears.',
    category: 'cl-fitting',
    subcategory: 'rgp-cl-fitting',
    difficulty: 'easy'
  },
  {
    id: 'ncle-fitting-012',
    question: 'What is the relationship between the base curve of an RGP lens and the flat K reading in an optimally fit lens?',
    options: [
      'Base curve should be 1.00D flatter than flat K',
      'Base curve should match flat K exactly',
      'Base curve should typically be 0.25D to 0.75D flatter than flat K',
      'Base curve should be 1.00D steeper than flat K'
    ],
    correctAnswer: 2,
    explanation: 'In an optimally fit RGP lens, the base curve should typically be 0.25D to 0.75D flatter than flat K (flattest corneal curvature). This slight flattening allows for appropriate tear exchange while maintaining lens centration and comfort.',
    category: 'cl-fitting',
    subcategory: 'rgp-cl-fitting',
    difficulty: 'hard'
  },
  
  // Fitting Evaluation and Assessment
  {
    id: 'ncle-fitting-013',
    question: 'Which of the following is NOT typically assessed during a contact lens follow-up evaluation?',
    options: [
      'Visual acuity with lenses',
      'Lens movement and centration',
      'Corneal integrity',
      'Intraocular pressure'
    ],
    correctAnswer: 3,
    explanation: 'Intraocular pressure is not typically assessed during a routine contact lens follow-up evaluation. While it\'s an important measure of eye health, it\'s usually performed during comprehensive eye examinations rather than contact lens-specific assessments.',
    category: 'cl-fitting',
    subcategory: 'fit-evaluation',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-014',
    question: 'What is the primary purpose of evaluating contact lens movement?',
    options: [
      'To determine if a different lens material is needed',
      'To ensure adequate oxygen supply to the cornea',
      'To ensure adequate tear exchange under the lens',
      'To minimize patient discomfort'
    ],
    correctAnswer: 2,
    explanation: 'The primary purpose of evaluating contact lens movement is to ensure adequate tear exchange under the lens. Proper lens movement facilitates the flow of fresh tears beneath the lens, which provides oxygen, removes metabolic waste, and helps maintain corneal health.',
    category: 'cl-fitting',
    subcategory: 'fit-evaluation',
    difficulty: 'easy'
  },
  {
    id: 'ncle-fitting-015',
    question: 'Which clinical finding would indicate a poorly fitting contact lens that requires immediate removal?',
    options: [
      'Slight lens decentration',
      'Mild conjunctival hyperemia',
      'Punctate corneal staining',
      'Corneal neovascularization'
    ],
    correctAnswer: 3,
    explanation: 'Corneal neovascularization (growth of blood vessels into the normally avascular cornea) indicates a serious complication that requires immediate lens removal. This condition typically results from chronic hypoxia and can lead to permanent corneal damage if not addressed promptly.',
    category: 'cl-fitting',
    subcategory: 'fit-evaluation',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-016',
    question: 'What is the most appropriate method to evaluate soft contact lens movement?',
    options: [
      'Keratometry',
      'Push-up test',
      'Schirmer test',
      'Pachymetry'
    ],
    correctAnswer: 1,
    explanation: 'The push-up test is the most appropriate method to evaluate soft contact lens movement. This test involves using the lower lid to push the lens upward and then observing how quickly and smoothly it returns to its original position when the lid is released.',
    category: 'cl-fitting',
    subcategory: 'fit-evaluation',
    difficulty: 'easy'
  },
  {
    id: 'ncle-fitting-017',
    question: 'What does 3 and 9 o\'clock staining indicate in RGP lens wear?',
    options: [
      'The lens is too steep',
      'The lens is too flat',
      'The lens diameter is too large',
      'Inadequate tear exchange at the lens edge'
    ],
    correctAnswer: 3,
    explanation: '3 and 9 o\'clock staining (corneal staining in the nasal and temporal quadrants) indicates inadequate tear exchange at the lens edge. This pattern is often caused by lens edge lift that is too minimal or by lens dehydration, leading to desiccation of the corneal epithelium in these areas.',
    category: 'cl-fitting',
    subcategory: 'fit-evaluation',
    difficulty: 'hard'
  },
  {
    id: 'ncle-fitting-018',
    question: 'Which instrument is most useful for detecting subtle corneal changes in contact lens wearers?',
    options: [
      'Keratometer',
      'Slit lamp biomicroscope',
      'Retinoscope',
      'Autorefractor'
    ],
    correctAnswer: 1,
    explanation: 'The slit lamp biomicroscope is most useful for detecting subtle corneal changes in contact lens wearers. It provides magnified, stereoscopic examination of the anterior segment and allows for detailed assessment of the cornea, conjunctiva, and contact lens relationship.',
    category: 'cl-fitting',
    subcategory: 'fit-evaluation',
    difficulty: 'easy'
  }
];

// Adding more contact lens fitting questions
export const additionalContactLensFittingQuestions: ExamQuestion[] = [
  // Patient Assessment and Selection
  {
    id: 'ncle-fitting-019',
    question: 'Which of the following conditions would most likely contraindicate soft contact lens wear?',
    options: [
      'Mild seasonal allergies',
      'Low astigmatism (0.75D)',
      'Severe dry eye syndrome',
      'Presbyopia'
    ],
    correctAnswer: 2,
    explanation: 'Severe dry eye syndrome is the most likely contraindication for soft contact lens wear among these options. Insufficient tear production or poor tear quality can lead to lens dehydration, discomfort, corneal desiccation, and increased risk of infection in soft lens wearers.',
    category: 'cl-fitting',
    subcategory: 'patient-assessment',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-020',
    question: 'Which measurement is most critical when fitting scleral contact lenses?',
    options: [
      'Pupil size',
      'Corneal diameter',
      'Sagittal depth',
      'Lid tension'
    ],
    correctAnswer: 2,
    explanation: 'Sagittal depth is the most critical measurement when fitting scleral contact lenses. It determines the vault or clearance over the cornea, which is essential for proper tear exchange and avoiding corneal touch in scleral lens wear.',
    category: 'cl-fitting',
    subcategory: 'patient-assessment',
    difficulty: 'hard'
  },
  {
    id: 'ncle-fitting-021',
    question: 'What is the most appropriate initial base curve selection for a cornea with K readings of 44.00/45.00D when fitting soft contact lenses?',
    options: [
      'Steeper than the flattest K',
      'Equal to the flattest K',
      'Flatter than the flattest K',
      'Equal to the average of the two Ks'
    ],
    correctAnswer: 3,
    explanation: 'For soft contact lens fitting, the most appropriate initial base curve selection is typically equal to the average of the two K readings. In this case, the average would be 44.50D, which would provide a good starting point for the fitting process.',
    category: 'cl-fitting',
    subcategory: 'patient-assessment',
    difficulty: 'medium'
  },
  
  // Specialty Contact Lens Fitting
  {
    id: 'ncle-fitting-022',
    question: 'Which fitting approach is most appropriate for a patient with keratoconus?',
    options: [
      'Standard soft lens fit',
      'Rigid lens with apical touch',
      'Rigid lens with apical clearance',
      'Monovision with soft lenses'
    ],
    correctAnswer: 2,
    explanation: 'A rigid lens with apical clearance is the most appropriate fitting approach for a patient with keratoconus. This fitting philosophy avoids mechanical pressure on the fragile corneal apex while providing good visual acuity through the rigid lens surface.',
    category: 'cl-fitting',
    subcategory: 'specialty-fitting',
    difficulty: 'hard'
  },
  {
    id: 'ncle-fitting-023',
    question: 'What is the primary fitting goal when fitting a post-surgical cornea with an RGP lens?',
    options: [
      'Maximizing wearing time',
      'Achieving consistent tear exchange',
      'Creating uniform bearing across the cornea',
      'Vaulting over the surgical area'
    ],
    correctAnswer: 3,
    explanation: 'The primary fitting goal when fitting a post-surgical cornea with an RGP lens is vaulting over the surgical area. This approach minimizes mechanical stress on the surgically altered tissue while allowing the rigid lens to create a new refracting surface for improved vision.',
    category: 'cl-fitting',
    subcategory: 'specialty-fitting',
    difficulty: 'hard'
  },
  {
    id: 'ncle-fitting-024',
    question: 'Which of the following contact lens designs is most appropriate for a patient with significant irregular astigmatism?',
    options: [
      'Standard soft toric lens',
      'Hydrogel multifocal lens',
      'Gas permeable lens',
      'Daily disposable lens'
    ],
    correctAnswer: 2,
    explanation: 'A gas permeable lens is the most appropriate contact lens design for a patient with significant irregular astigmatism. The rigid material creates a smooth optical surface that masks corneal irregularities, resulting in improved visual acuity compared to soft lens options.',
    category: 'cl-fitting',
    subcategory: 'specialty-fitting',
    difficulty: 'medium'
  },
  
  // Fit Evaluation
  {
    id: 'ncle-fitting-025',
    question: 'What is the optimal central corneal clearance for a scleral lens?',
    options: [
      '50-75 microns',
      '150-250 microns',
      '300-500 microns',
      '500-750 microns'
    ],
    correctAnswer: 1,
    explanation: 'The optimal central corneal clearance for a scleral lens is 150-250 microns (approximately the thickness of a typical cornea). This amount provides adequate clearance to avoid corneal touch while not being excessive, which could lead to reduced oxygen transmission or bubbles under the lens.',
    category: 'cl-fitting',
    subcategory: 'fit-evaluation',
    difficulty: 'hard'
  },
  {
    id: 'ncle-fitting-026',
    question: 'Which of the following indicates that a soft toric lens is properly aligned?',
    options: [
      'The lens rotates 30 degrees clockwise',
      'The lens rotates continually with each blink',
      'The lens marking remains within 10 degrees of the desired orientation',
      'The lens remains 1mm below the corneal apex'
    ],
    correctAnswer: 2,
    explanation: 'A properly aligned soft toric lens should have its marking remain within 10 degrees of the desired orientation. Minimal rotation is essential for toric lenses to correctly correct astigmatism, as significant rotation will result in residual astigmatism and reduced visual acuity.',
    category: 'cl-fitting',
    subcategory: 'fit-evaluation',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-027',
    question: 'What is the most appropriate action when fitting a soft lens that shows excessive movement (>1mm)?',
    options: [
      'Increase the lens diameter',
      'Flatten the base curve',
      'Steepen the base curve',
      'Switch to a higher water content material'
    ],
    correctAnswer: 2,
    explanation: 'When a soft lens shows excessive movement (>1mm), the most appropriate action is to steepen the base curve. A steeper base curve will increase the tightness of the fit and reduce lens movement to a more acceptable level.',
    category: 'cl-fitting',
    subcategory: 'fit-evaluation',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-028',
    question: 'Which finding would indicate a flat-fitting RGP lens?',
    options: [
      'Central pooling with peripheral touch',
      'Central touch with peripheral clearance',
      'Bubble formation under the central lens',
      'Superior lens adherence'
    ],
    correctAnswer: 1,
    explanation: 'Central touch with peripheral clearance is indicative of a flat-fitting RGP lens. In this fitting relationship, the lens bears excessively on the corneal apex while lifting away from the peripheral cornea, resulting in potential apical scarring, discomfort, and reduced tear exchange.',
    category: 'cl-fitting',
    subcategory: 'fit-evaluation',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-029',
    question: 'What is the primary use of sodium fluorescein when evaluating an RGP lens fit?',
    options: [
      'To disinfect the lens',
      'To visualize tear exchange patterns',
      'To measure corneal thickness',
      'To increase lens comfort during adaptation'
    ],
    correctAnswer: 1,
    explanation: 'The primary use of sodium fluorescein when evaluating an RGP lens fit is to visualize tear exchange patterns. When viewed with a cobalt blue filter, fluorescein highlights areas of lens-cornea relationship, showing areas of touch, clearance, and proper tear exchange.',
    category: 'cl-fitting',
    subcategory: 'fit-evaluation',
    difficulty: 'easy'
  },
  {
    id: 'ncle-fitting-030',
    question: 'Which characteristic would indicate a successful multifocal contact lens fit?',
    options: [
      'Clear distance vision with blurred near vision',
      'Variable vision quality at all distances',
      'Smooth visual transitions between distances with acceptable vision at all ranges',
      'Clear near vision with blurred distance vision'
    ],
    correctAnswer: 2,
    explanation: 'A successful multifocal contact lens fit is characterized by smooth visual transitions between distances with acceptable vision at all ranges. While perfect vision at all distances is not always achievable, a good multifocal fit should provide functional vision for distance, intermediate, and near tasks without significant compromise.',
    category: 'cl-fitting',
    subcategory: 'fit-evaluation',
    difficulty: 'medium'
  }
];

// Combine original and additional questions
export const contactLensFittingQuestions: ExamQuestion[] = [
  ...originalContactLensFittingQuestions,
  ...additionalContactLensFittingQuestions
]; 