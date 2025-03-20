import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * NCLE Exam Questions: Contact Lens Fitting
 * 
 * Topics covered:
 * - Soft contact lens fitting techniques
 * - RGP contact lens fitting techniques
 * - Specialty contact lens fitting
 */

export const contactLensFittingQuestions: ExamQuestion[] = [
  // Soft contact lens fitting
  {
    id: 'ncle-fitting-001',
    question: 'Which of the following is the MOST important parameter when selecting the initial diagnostic soft contact lens?',
    options: [
      'Base curve',
      'Lens material',
      'Power',
      'Center thickness'
    ],
    correctAnswer: 0,
    explanation: 'Base curve is the most important parameter when selecting an initial diagnostic soft contact lens, as it determines how the lens will fit on the cornea and affects comfort, centration, and movement.',
    category: 'contact-lens-fitting',
    subcategory: 'soft-lens-fitting',
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
  },
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
    question: 'What is the primary goal of a successful soft contact lens fit?',
    options: [
      'Achieving 20/20 visual acuity',
      'Minimizing solution sensitivity',
      'Providing a lens that centers well with adequate movement and good comfort',
      'Maximizing oxygen permeability'
    ],
    correctAnswer: 2,
    explanation: 'The primary goal of a successful soft contact lens fit is to provide a lens that centers well on the cornea, has adequate movement with blinking, and offers good comfort, which collectively ensures eye health and vision while maintaining patient satisfaction.',
    category: 'contact-lens-fitting',
    subcategory: 'soft-lens-fitting',
    difficulty: 'easy'
  },
  {
    id: 'ncle-fitting-026',
    question: 'What is the typical range of movement considered acceptable for a well-fitted soft contact lens?',
    options: [
      '0.1 to 0.2 mm',
      '0.25 to 0.5 mm',
      '1.0 to 2.0 mm',
      '2.5 to 3.0 mm'
    ],
    correctAnswer: 1,
    explanation: 'A well-fitted soft contact lens typically exhibits 0.25 to 0.5 mm of movement with each blink. Less movement may indicate the lens is too tight, while more movement suggests it\'s too loose.',
    category: 'contact-lens-fitting',
    subcategory: 'soft-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-027',
    question: 'Which of the following tests is used to evaluate tear exchange beneath a soft contact lens?',
    options: [
      'Schirmer test',
      'Fluorescein pattern evaluation',
      'Push-up test',
      'Phenol red thread test'
    ],
    correctAnswer: 1,
    explanation: 'Fluorescein pattern evaluation can be used to assess tear exchange beneath a soft contact lens. Although fluorescein is typically associated with RGP fitting, high-molecular-weight fluorescein can be used with soft lenses to observe tear flow patterns.',
    category: 'contact-lens-fitting',
    subcategory: 'soft-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-028',
    question: 'What is the recommended first step when evaluating a soft contact lens fit?',
    options: [
      'Evaluate lens movement',
      'Check visual acuity',
      'Assess lens centration',
      'Perform over-refraction'
    ],
    correctAnswer: 2,
    explanation: 'The recommended first step when evaluating a soft contact lens fit is to assess lens centration, as proper centration is fundamental to a good fit and affects subsequent evaluations of movement and vision.',
    category: 'contact-lens-fitting',
    subcategory: 'soft-lens-fitting',
    difficulty: 'easy'
  },
  {
    id: 'ncle-fitting-029',
    question: 'What is the most common cause of a tight-fitting soft contact lens?',
    options: [
      'Base curve too flat',
      'Base curve too steep',
      'Diameter too small',
      'Excessive lens power'
    ],
    correctAnswer: 1,
    explanation: 'A tight-fitting soft contact lens is most commonly caused by a base curve that is too steep (smaller radius of curvature), which creates excessive gripping of the lens on the cornea and reduces movement.',
    category: 'contact-lens-fitting',
    subcategory: 'soft-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-030',
    question: 'Which of the following accurately describes the relationship between lens diameter and corneal diameter in soft contact lens fitting?',
    options: [
      'Lens diameter should be equal to corneal diameter',
      'Lens diameter should be 1-2 mm smaller than corneal diameter',
      'Lens diameter should be 2-4 mm larger than corneal diameter',
      'Lens diameter is unrelated to corneal diameter'
    ],
    correctAnswer: 2,
    explanation: 'In soft contact lens fitting, the lens diameter should typically be 2-4 mm larger than the corneal diameter (horizontal visible iris diameter or HVID) to achieve proper corneal coverage and lens stability.',
    category: 'contact-lens-fitting',
    subcategory: 'soft-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-031',
    question: 'What is the primary goal of RGP lens fluorescein pattern assessment?',
    options: [
      'To evaluate corneal staining',
      'To determine the relationship between the lens and cornea',
      'To measure tear quality',
      'To evaluate visual acuity'
    ],
    correctAnswer: 1,
    explanation: 'The primary goal of assessing the fluorescein pattern with RGP lenses is to determine the relationship between the lens and cornea, revealing areas of alignment, clearance, and touch that indicate the fitting relationship.',
    category: 'contact-lens-fitting',
    subcategory: 'rgp-lens-fitting',
    difficulty: 'easy'
  },
  {
    id: 'ncle-fitting-032',
    question: 'Which fluorescein pattern typically indicates an optimally fitted spherical RGP lens on a spherical cornea?',
    options: [
      'Central pooling with peripheral bearing',
      'Central bearing with peripheral clearance',
      'Alignment with light touch in center and moderate edge clearance',
      'Heavy central bearing and excessive edge lift'
    ],
    correctAnswer: 2,
    explanation: 'An optimally fitted spherical RGP lens on a spherical cornea typically shows an alignment pattern with light touch in the center and moderate edge clearance, often described as an "alignment fit."',
    category: 'contact-lens-fitting',
    subcategory: 'rgp-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-033',
    question: 'Which of the following would be the MOST appropriate base curve selection for an initial RGP lens for a patient with K readings of 44.00/45.00 @ 180?',
    options: [
      '43.50 D (7.75 mm)',
      '44.00 D (7.67 mm)',
      '44.25 D (7.62 mm)',
      '45.50 D (7.42 mm)'
    ],
    correctAnswer: 2,
    explanation: 'For initial RGP lens selection, a common approach is to select a base curve slightly steeper (about 0.25D) than the flat K reading. With a flat K of 44.00D, an appropriate initial base curve would be 44.25D (7.62 mm).',
    category: 'contact-lens-fitting',
    subcategory: 'rgp-lens-fitting',
    difficulty: 'hard'
  },
  {
    id: 'ncle-fitting-034',
    question: 'What is the typical range of movement considered acceptable for a well-fitted RGP lens?',
    options: [
      '0.1 to 0.2 mm',
      '0.5 to 1.0 mm',
      '1.0 to 2.0 mm',
      '2.0 to 3.0 mm'
    ],
    correctAnswer: 1,
    explanation: 'A well-fitted RGP lens typically exhibits 0.5 to 1.0 mm of movement with each blink, which is sufficient to allow tear exchange without excessive lens movement that could cause discomfort or vision fluctuation.',
    category: 'contact-lens-fitting',
    subcategory: 'rgp-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-035',
    question: 'What fluorescein pattern would indicate that an RGP lens base curve is too flat?',
    options: [
      'Central pooling with peripheral bearing',
      'Central bearing with peripheral clearance',
      'Equal alignment across the lens surface',
      'Bubble formation under the lens'
    ],
    correctAnswer: 1,
    explanation: 'When an RGP lens base curve is too flat, the fluorescein pattern shows central bearing (dark or thin fluorescein layer centrally) with peripheral clearance (bright pooling at the edges), indicating that the lens is flatter than the corneal curvature.',
    category: 'contact-lens-fitting',
    subcategory: 'rgp-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-036',
    question: 'What is the most appropriate initial approach for fitting a patient with keratoconus?',
    options: [
      'Standard soft toric lenses',
      'Standard RGP lenses',
      'Specialty RGP designs for keratoconus or scleral lenses',
      'Hybrid contact lenses'
    ],
    correctAnswer: 2,
    explanation: 'For keratoconus patients, specialty RGP designs for keratoconus or scleral lenses are the most appropriate initial approach, as they can vault over the irregular corneal surface to provide optimal vision correction and comfort.',
    category: 'contact-lens-fitting',
    subcategory: 'specialty-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-037',
    question: 'What is the primary advantage of scleral lenses over corneal RGP lenses?',
    options: [
      'Better oxygen transmission',
      'Lower cost',
      'Less lens awareness and improved comfort',
      'Simpler fitting process'
    ],
    correctAnswer: 2,
    explanation: 'The primary advantage of scleral lenses over corneal RGP lenses is reduced lens awareness and improved comfort, as they vault over the cornea and rest on the less sensitive sclera, minimizing lid-lens interaction.',
    category: 'contact-lens-fitting',
    subcategory: 'specialty-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-038',
    question: 'Which of the following is the appropriate sagittal depth range for a mini-scleral lens?',
    options: [
      '100-200 microns',
      '200-300 microns',
      '300-500 microns',
      '1000-1500 microns'
    ],
    correctAnswer: 2,
    explanation: 'Mini-scleral lenses typically have a sagittal depth range of approximately 300-500 microns, providing sufficient vault over the cornea without excessive fluid reservoir depth.',
    category: 'contact-lens-fitting',
    subcategory: 'specialty-lens-fitting',
    difficulty: 'hard'
  },
  {
    id: 'ncle-fitting-039',
    question: 'What is the primary fitting concern when fitting multifocal contact lenses?',
    options: [
      'Lens centration and pupil coverage',
      'Base curve selection',
      'Lens thickness',
      'Oxygen permeability'
    ],
    correctAnswer: 0,
    explanation: 'The primary fitting concern with multifocal contact lenses is ensuring proper lens centration and appropriate pupil coverage, as the optical zones must align correctly with the visual axis for optimal vision at different distances.',
    category: 'contact-lens-fitting',
    subcategory: 'specialty-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-040',
    question: 'What is the purpose of the "push-up test" in RGP lens fitting?',
    options: [
      'To evaluate tear exchange',
      'To assess lens movement',
      'To measure lens adherence',
      'To determine lens centration'
    ],
    correctAnswer: 2,
    explanation: 'The push-up test in RGP lens fitting is used to assess lens adherence by observing how quickly the lens returns to its position after being displaced. Excessive adherence indicates a tight fit, while easy displacement suggests a loose fit.',
    category: 'contact-lens-fitting',
    subcategory: 'rgp-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-041',
    question: 'What is an important consideration when fitting high minus power soft contact lenses?',
    options: [
      'They should be fit looser than normal',
      'They require larger diameters',
      'They tend to be thinner and may exhibit reduced movement',
      'They require higher water content materials'
    ],
    correctAnswer: 2,
    explanation: 'High minus power soft contact lenses tend to be thinner, especially at the center, which can result in reduced lens movement. This needs to be considered during fitting to ensure adequate movement for tear exchange.',
    category: 'contact-lens-fitting',
    subcategory: 'soft-lens-fitting',
    difficulty: 'hard'
  },
  {
    id: 'ncle-fitting-042',
    question: 'What should be evaluated during a contact lens follow-up visit?',
    options: [
      'Only visual acuity',
      'Only comfort and wearing time',
      'Only lens fitting characteristics',
      'Visual acuity, comfort, lens fitting, and corneal health'
    ],
    correctAnswer: 3,
    explanation: 'During a contact lens follow-up visit, a comprehensive evaluation should include visual acuity, comfort assessment, lens fitting characteristics (movement, centration), and corneal health to ensure safe and successful contact lens wear.',
    category: 'contact-lens-fitting',
    subcategory: 'soft-lens-fitting',
    difficulty: 'easy'
  },
  {
    id: 'ncle-fitting-043',
    question: 'What is the primary purpose of over-refraction during contact lens fitting?',
    options: [
      'To determine if the lens is fitting properly',
      'To evaluate if the lens power needs adjustment',
      'To assess corneal health',
      'To check for lens deposits'
    ],
    correctAnswer: 1,
    explanation: 'The primary purpose of performing an over-refraction during contact lens fitting is to determine if the lens power needs adjustment to provide optimal vision correction while the lens is on the eye.',
    category: 'contact-lens-fitting',
    subcategory: 'soft-lens-fitting',
    difficulty: 'easy'
  },
  {
    id: 'ncle-fitting-044',
    question: 'What is the typical approach to determining toric soft lens axis orientation?',
    options: [
      'Using the spectacle prescription axis directly',
      'Observing lens markings and compensating for rotational misalignment',
      'Using an auto-refractor over the lens',
      'Estimating based on K readings'
    ],
    correctAnswer: 1,
    explanation: 'To determine toric soft lens axis orientation, the practitioner observes the position of the lens markings to assess rotational misalignment, then compensates for any rotation when ordering the final lens (LARS rule: Left Add, Right Subtract).',
    category: 'contact-lens-fitting',
    subcategory: 'soft-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-045',
    question: 'What determines the fitting relationship of a scleral lens over the cornea?',
    options: [
      'Base curve only',
      'Lens diameter only',
      'Sagittal depth of the lens',
      'Lens power'
    ],
    correctAnswer: 2,
    explanation: 'The sagittal depth of the scleral lens determines its fitting relationship over the cornea, controlling how much the lens vaults over the corneal surface and creating the fluid reservoir between the lens and cornea.',
    category: 'contact-lens-fitting',
    subcategory: 'specialty-lens-fitting',
    difficulty: 'hard'
  },
  {
    id: 'ncle-fitting-046',
    question: 'What lens design would be most appropriate for a patient with regular astigmatism of -2.50DC?',
    options: [
      'Spherical soft lens',
      'Toric soft lens',
      'Spherical RGP lens',
      'Bitoric RGP lens'
    ],
    correctAnswer: 1,
    explanation: 'For a patient with regular astigmatism of -2.50DC, a toric soft lens would be most appropriate as this amount of astigmatism is significant enough to affect vision quality and is unlikely to be fully corrected with a spherical lens mask effect.',
    category: 'contact-lens-fitting',
    subcategory: 'soft-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-047',
    question: 'Which of the following would indicate an RGP lens is fitting too steeply?',
    options: [
      'Excessive lens movement',
      'Central bearing',
      'Central pooling',
      'Interpalpebral positioning'
    ],
    correctAnswer: 2,
    explanation: 'Central pooling of fluorescein (appearing as a bright green area in the center of the lens) indicates that an RGP lens is fitting too steeply, with the lens vaulting over the central cornea instead of properly aligning with it.',
    category: 'contact-lens-fitting',
    subcategory: 'rgp-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-048',
    question: 'What is the appropriate starting point for RGP lens diameter selection?',
    options: [
      'Always use 9.0 mm',
      'Always use 10.0 mm',
      'Base it on the corneal diameter, typically 1.5-2.0 mm smaller than HVID',
      'Match it exactly to the corneal diameter'
    ],
    correctAnswer: 2,
    explanation: 'The appropriate starting point for RGP lens diameter selection is based on the corneal diameter (HVID), typically 1.5-2.0 mm smaller than HVID, which positions the lens properly on the cornea while allowing appropriate lid interaction.',
    category: 'contact-lens-fitting',
    subcategory: 'rgp-lens-fitting',
    difficulty: 'medium'
  },
  {
    id: 'ncle-fitting-049',
    question: 'What is the most important consideration when selecting a lens design for presbyopic patients?',
    options: [
      'Lens material only',
      'Patient\'s visual demands and lifestyle',
      'Base curve only',
      'Tear quality only'
    ],
    correctAnswer: 1,
    explanation: 'When selecting a lens design for presbyopic patients, the most important consideration is understanding the patient\'s visual demands and lifestyle, which helps determine whether multifocal, monovision, or another approach would best meet their needs.',
    category: 'contact-lens-fitting',
    subcategory: 'specialty-lens-fitting',
    difficulty: 'easy'
  },
  {
    id: 'ncle-fitting-050',
    question: 'What is the primary advantage of fitting a corneo-scleral lens rather than a corneal RGP lens for a patient with keratoconus?',
    options: [
      'Lower cost',
      'Increased oxygen transmission',
      'Greater stability and comfort',
      'Reduced care requirements'
    ],
    correctAnswer: 2,
    explanation: 'The primary advantage of fitting a corneo-scleral lens rather than a corneal RGP for keratoconus is greater stability and comfort, as the larger diameter lens distributes bearing over a larger area and reduces lens movement, decreasing lens awareness and improving comfort.',
    category: 'contact-lens-fitting',
    subcategory: 'specialty-lens-fitting',
    difficulty: 'hard'
  }
]; 