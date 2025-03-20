import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * ABO Quiz Questions: Measurements
 * 
 * Topics covered:
 * - PD Measurement
 * - Vertical Measurements
 * - Lens Thickness Calculations
 */

export const measurementsQuizQuestions: ExamQuestion[] = [
  // PD Measurement
  {
    id: 'quiz-measurements-001',
    question: 'What is a pupillary distance (PD) measurement?',
    options: [
      'The distance from the eye to the lens',
      'The distance between the centers of the pupils',
      'The diameter of the pupil',
      'The distance from the lens to the retina'
    ],
    correctAnswer: 1,
    explanation: 'The pupillary distance (PD) is the measurement of the distance between the centers of the pupils. It\'s essential for properly positioning lenses in front of the eyes to ensure the optical centers align with the visual axes.',
    category: 'measurements',
    subcategory: 'pd-measurement',
    difficulty: 'easy'
  },
  {
    id: 'quiz-measurements-002',
    question: 'What is the difference between monocular PD and binocular PD?',
    options: [
      'Monocular PD is measured with one eye closed; binocular is with both eyes open',
      'Monocular PD is for single vision lenses; binocular is for progressive lenses',
      'Monocular PD is the distance from the center of the nose to each pupil; binocular PD is the total distance between pupils',
      'Monocular PD is for contact lenses; binocular PD is for eyeglasses'
    ],
    correctAnswer: 2,
    explanation: 'Monocular PD is the measurement from the center of the nose (bridge) to the center of each pupil (right and left separately). Binocular PD is the total distance between the centers of the pupils. Monocular PDs are important for asymmetrical faces and high power prescriptions.',
    category: 'measurements',
    subcategory: 'pd-measurement',
    difficulty: 'medium'
  },
  {
    id: 'quiz-measurements-003',
    question: 'What instrument is commonly used to measure PD?',
    options: [
      'Lensometer',
      'Pupillometer',
      'Keratometer',
      'Tonometer'
    ],
    correctAnswer: 1,
    explanation: 'A pupillometer is commonly used to measure PD. It\'s a specialized instrument designed specifically for measuring the distance between pupils accurately, often with built-in calibration and focusing capabilities.',
    category: 'measurements',
    subcategory: 'pd-measurement',
    difficulty: 'easy'
  },
  {
    id: 'quiz-measurements-004',
    question: 'When using a millimeter ruler (PD stick) to measure PD, where should you position the zero mark?',
    options: [
      'At the center of the left pupil',
      'At the center of the right pupil',
      'At the bridge of the nose',
      'At the outer edge of one pupil'
    ],
    correctAnswer: 1,
    explanation: 'When using a millimeter ruler (PD stick) to measure PD, you should position the zero mark at the center of the right pupil and read the measurement at the center of the left pupil. This gives you the binocular PD directly.',
    category: 'measurements',
    subcategory: 'pd-measurement',
    difficulty: 'medium'
  },
  {
    id: 'quiz-measurements-005',
    question: 'Why might the distance PD and near PD be different?',
    options: [
      'The pupils dilate at near vision points',
      'The eyes converge for near vision, decreasing the PD',
      'The eyes diverge for near vision, increasing the PD',
      'The PD never changes between distance and near'
    ],
    correctAnswer: 1,
    explanation: 'The distance PD and near PD are often different because the eyes converge (turn inward) when looking at near objects. This convergence decreases the PD by approximately 2-3mm when focusing at a typical reading distance (40cm).',
    category: 'measurements',
    subcategory: 'pd-measurement',
    difficulty: 'medium'
  },
  {
    id: 'quiz-measurements-006',
    question: 'What is the typical PD measurement range for most adults?',
    options: [
      '45-55 mm',
      '54-64 mm',
      '58-70 mm',
      '72-82 mm'
    ],
    correctAnswer: 2,
    explanation: 'The typical PD measurement range for most adults is approximately 58-70 mm, with the average adult PD being around 62-64 mm for men and 60-62 mm for women. Children typically have smaller PDs.',
    category: 'measurements',
    subcategory: 'pd-measurement',
    difficulty: 'easy'
  },
  {
    id: 'quiz-measurements-007',
    question: 'What should you do if a patient\'s monocular PDs are significantly asymmetrical?',
    options: [
      'Always use the binocular PD instead',
      'Average the monocular PDs',
      'Use the individual monocular PDs when ordering the lenses',
      'Remeasure until they are symmetrical'
    ],
    correctAnswer: 2,
    explanation: 'If a patient\'s monocular PDs are significantly asymmetrical (difference greater than 2mm), you should use the individual monocular PDs when ordering the lenses. This ensures the optical centers are correctly positioned for each eye, which is especially important for stronger prescriptions.',
    category: 'measurements',
    subcategory: 'pd-measurement',
    difficulty: 'medium'
  },
  {
    id: 'quiz-measurements-008',
    question: 'What error might result from an incorrectly measured PD?',
    options: [
      'Astigmatism',
      'Induced prismatic effect',
      'Presbyopia',
      'Color distortion'
    ],
    correctAnswer: 1,
    explanation: 'An incorrectly measured PD can result in induced prismatic effect. When the optical centers of the lenses don\'t align with the visual axes, unwanted prism is created, potentially causing eyestrain, headaches, double vision, or discomfort.',
    category: 'measurements',
    subcategory: 'pd-measurement',
    difficulty: 'medium'
  },
  
  // Vertical Measurements
  {
    id: 'quiz-measurements-009',
    question: 'What is OC height or fitting height?',
    options: [
      'The total height of the lens',
      'The height of the optical center from the bottom of the lens',
      'The vertical distance from the pupil center to the bottom of the lens',
      'The height of the frame\'s eye size'
    ],
    correctAnswer: 2,
    explanation: 'OC (optical center) height or fitting height is the vertical distance from the center of the pupil to the bottom of the lens. This measurement ensures the optical center is properly positioned vertically for single vision lenses.',
    category: 'measurements',
    subcategory: 'vertical-measurements',
    difficulty: 'medium'
  },
  {
    id: 'quiz-measurements-010',
    question: 'What is a segment height in multifocal lenses?',
    options: [
      'The height of the segment portion of the lens',
      'The vertical distance from the bottom of the lens to the top of the segment',
      'The vertical distance from the bottom of the lens to the segment line or fitting cross',
      'The height of the progressive corridor'
    ],
    correctAnswer: 2,
    explanation: 'Segment height in multifocal lenses is the vertical distance from the bottom of the lens to the segment line (in bifocals/trifocals) or fitting cross (in progressives). It determines where the near vision portion begins and is critical for comfortable vision at different distances.',
    category: 'measurements',
    subcategory: 'vertical-measurements',
    difficulty: 'medium'
  },
  {
    id: 'quiz-measurements-011',
    question: 'How should you mark a patient\'s pupil height when they are wearing the chosen frame?',
    options: [
      'With the frame tilted upward',
      'With the patient looking downward',
      'With the frame properly adjusted and the patient looking straight ahead',
      'With the patient\'s head tilted backward'
    ],
    correctAnswer: 2,
    explanation: 'You should mark a patient\'s pupil height with the frame properly adjusted on the face (correct pantoscopic tilt, proper bridge fit, etc.) and with the patient looking straight ahead at eye level. This ensures accurate vertical positioning of the lenses.',
    category: 'measurements',
    subcategory: 'vertical-measurements',
    difficulty: 'easy'
  },
  {
    id: 'quiz-measurements-012',
    question: 'What potential problem can result from ordering progressive lenses with a segment height that\'s too low?',
    options: [
      'Distorted distance vision',
      'Limited or uncomfortable reading area',
      'Too much peripheral distortion',
      'Color aberrations'
    ],
    correctAnswer: 1,
    explanation: 'Ordering progressive lenses with a segment height that\'s too low can result in a limited or uncomfortable reading area. The patient may need to tilt their head backward or remove their glasses to read, as the near zone would be too low in the lens.',
    category: 'measurements',
    subcategory: 'vertical-measurements',
    difficulty: 'medium'
  },
  {
    id: 'quiz-measurements-013',
    question: 'What is the minimum recommended fitting height for most standard progressive lenses?',
    options: [
      '8-10 mm',
      '12-14 mm',
      '16-18 mm',
      '22-24 mm'
    ],
    correctAnswer: 2,
    explanation: 'The minimum recommended fitting height for most standard progressive lenses is typically 16-18 mm. This ensures sufficient room for the distance, intermediate, and near zones. Some compact designs can accommodate shorter heights (14-16 mm).',
    category: 'measurements',
    subcategory: 'vertical-measurements',
    difficulty: 'medium'
  },
  {
    id: 'quiz-measurements-014',
    question: 'What is major reference point (MRP) height?',
    options: [
      'The height of the lens from top to bottom',
      'The distance from the bottom of the lens to the optical center',
      'The vertical distance from pupil center to the bottom of the frame',
      'The height at which the frame sits on the face'
    ],
    correctAnswer: 1,
    explanation: 'Major reference point (MRP) height is the distance from the bottom of the lens to the optical center or fitting cross. It\'s particularly important for progressive and multifocal lenses to ensure proper vertical positioning of the optical zones.',
    category: 'measurements',
    subcategory: 'vertical-measurements',
    difficulty: 'hard'
  },
  {
    id: 'quiz-measurements-015',
    question: 'What is pantoscopic tilt and how does it affect vertical measurements?',
    options: [
      'The wrap of the frame around the face; it has no effect on vertical measurements',
      'The angle of the frame front relative to the vertical plane; it can affect where the optical center should be placed',
      'The distance between lenses; it only affects horizontal measurements',
      'The curvature of the lenses; it affects lens power'
    ],
    correctAnswer: 1,
    explanation: 'Pantoscopic tilt is the angle of the frame front relative to the vertical plane (top tilted away from the face). It affects vertical measurements because increased pantoscopic tilt requires the optical center to be positioned slightly higher than the pupil to compensate for the angle of the lenses relative to the visual axis.',
    category: 'measurements',
    subcategory: 'vertical-measurements',
    difficulty: 'medium'
  },
  {
    id: 'quiz-measurements-016',
    question: 'When is a monocular fitting height necessary?',
    options: [
      'For all multifocal lenses',
      'Only for trifocals',
      'When there is a significant difference in the vertical position of the pupils',
      'When the patient has astigmatism'
    ],
    correctAnswer: 2,
    explanation: 'A monocular fitting height is necessary when there is a significant difference in the vertical position of the pupils (asymmetry). This ensures that each lens is properly positioned relative to its corresponding pupil, which is especially important for progressive and multifocal lenses.',
    category: 'measurements',
    subcategory: 'vertical-measurements',
    difficulty: 'medium'
  },
  
  // Lens Thickness Calculations
  {
    id: 'quiz-measurements-017',
    question: 'What measurement is needed to calculate the minimum blank size for a lens?',
    options: [
      'Only the frame\'s A and B dimensions',
      'Only the patient\'s PD',
      'The frame dimensions and decentration based on PD',
      'Only the vertex distance'
    ],
    correctAnswer: 2,
    explanation: 'To calculate the minimum blank size for a lens, you need both the frame dimensions (A, B, and ED) and the decentration based on the patient\'s PD. This ensures the lens blank is large enough to accommodate both the frame size and proper optical center positioning.',
    category: 'measurements',
    subcategory: 'lens-thickness',
    difficulty: 'medium'
  },
  {
    id: 'quiz-measurements-018',
    question: 'What is vertex distance?',
    options: [
      'The distance between the eyes',
      'The distance from the back of the lens to the front of the cornea',
      'The distance from the center of one lens to the other',
      'The distance from the top of the frame to the bottom'
    ],
    correctAnswer: 1,
    explanation: 'Vertex distance is the distance from the back surface of the lens to the front surface of the cornea. It\'s particularly important for higher prescriptions because changes in vertex distance can significantly affect the effective power of the lens.',
    category: 'measurements',
    subcategory: 'lens-thickness',
    difficulty: 'easy'
  },
  {
    id: 'quiz-measurements-019',
    question: 'Why is vertex distance important when converting a contact lens prescription to eyeglasses?',
    options: [
      'It only affects the frame style selection',
      'It affects the effective power of the lenses, especially in stronger prescriptions',
      'It only affects the size of the lenses',
      'It only matters for bifocal prescriptions'
    ],
    correctAnswer: 1,
    explanation: 'Vertex distance is important when converting a contact lens prescription to eyeglasses because it affects the effective power of the lenses, especially in stronger prescriptions. Contact lenses sit directly on the eye (0mm vertex), whereas eyeglasses are positioned approximately 12-14mm from the eye, requiring power adjustments for prescriptions typically stronger than ±4.00D.',
    category: 'measurements',
    subcategory: 'lens-thickness',
    difficulty: 'medium'
  },
  {
    id: 'quiz-measurements-020',
    question: 'What formula is used to calculate the edge thickness of a minus lens?',
    options: [
      'Edge thickness = Center thickness + (r² × F × 0.1)',
      'Edge thickness = Center thickness - (r² × F × 0.1)',
      'Edge thickness = Center thickness + (r² × F × 10)',
      'Edge thickness = Center thickness - (r² × F × 10)'
    ],
    correctAnswer: 0,
    explanation: 'The formula for calculating the edge thickness of a minus lens is: Edge thickness = Center thickness + (r² × F × 0.1), where r is the semi-diameter of the lens (half the diameter), F is the lens power in diopters, and 0.1 is a constant for converting to millimeters.',
    category: 'measurements',
    subcategory: 'lens-thickness',
    difficulty: 'hard'
  },
  {
    id: 'quiz-measurements-021',
    question: 'What is the primary reason for measuring minimum blank size (MBS)?',
    options: [
      'To determine lens power',
      'To ensure the lens will be thick enough',
      'To ensure the lens blank is large enough to cut the desired lens shape with optical centers properly positioned',
      'To determine if progressives are suitable'
    ],
    correctAnswer: 2,
    explanation: 'The primary reason for measuring minimum blank size (MBS) is to ensure the lens blank is large enough to cut the desired lens shape with the optical centers properly positioned. This prevents the need to recut lenses due to insufficient size or decentration issues.',
    category: 'measurements',
    subcategory: 'lens-thickness',
    difficulty: 'medium'
  },
  {
    id: 'quiz-measurements-022',
    question: 'What is the sag formula used for?',
    options: [
      'Calculating lens power',
      'Calculating the center thickness of a lens',
      'Calculating how much a lens curves (the sagittal depth)',
      'Calculating decentration'
    ],
    correctAnswer: 2,
    explanation: 'The sag formula is used for calculating how much a lens curves (the sagittal depth). This is important for understanding how base curve affects lens thickness and for ensuring proper clearance when fitting lenses in frames, especially with high-powered or high-base curve lenses.',
    category: 'measurements',
    subcategory: 'lens-thickness',
    difficulty: 'hard'
  },
  {
    id: 'quiz-measurements-023',
    question: 'How does the selection of lens material affect center thickness?',
    options: [
      'It has no effect on center thickness',
      'Higher index materials allow for thinner center thickness while maintaining impact resistance',
      'Lower index materials always result in thinner lenses',
      'Lens material only affects edge thickness'
    ],
    correctAnswer: 1,
    explanation: 'The selection of lens material affects center thickness because higher index materials allow for thinner center thickness while maintaining impact resistance. Materials like polycarbonate and high-index plastics can be made thinner than CR-39 or glass while providing the same optical power and adequate strength.',
    category: 'measurements',
    subcategory: 'lens-thickness',
    difficulty: 'medium'
  },
  {
    id: 'quiz-measurements-024',
    question: 'What factor has the greatest impact on lens thickness for high minus prescriptions?',
    options: [
      'Lens diameter/frame size',
      'Vertex distance',
      'Center thickness',
      'Pantoscopic tilt'
    ],
    correctAnswer: 0,
    explanation: 'For high minus prescriptions, lens diameter/frame size has the greatest impact on lens thickness. Larger frames require more lens material at the edges, significantly increasing edge thickness. Reducing frame size is often the most effective way to minimize thickness in high minus prescriptions.',
    category: 'measurements',
    subcategory: 'lens-thickness',
    difficulty: 'medium'
  },
  {
    id: 'quiz-measurements-025',
    question: 'How is minimum blank size (MBS) calculated?',
    options: [
      'MBS = A + 2',
      'MBS = Diagonal of the lens + decentration',
      'MBS = ED + 2(decentration)',
      'MBS = PD + bridge size'
    ],
    correctAnswer: 2,
    explanation: 'Minimum blank size (MBS) is calculated as MBS = ED + 2(decentration), where ED is the effective diameter (lens width) and decentration is the distance the optical center needs to be moved from the geometric center based on the patient\'s PD and frame measurements. This ensures the blank is large enough to cut the lens with proper optical center placement.',
    category: 'measurements',
    subcategory: 'lens-thickness',
    difficulty: 'hard'
  }
]; 