import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * ABO Exam Questions: Dispensing Procedures
 * 
 * Topics covered:
 * - Frame Selection and Fitting
 * - Patient Measurements
 * - Frame Adjustments and Repairs
 */

export const dispensingProceduresQuestions: ExamQuestion[] = [
  // Frame Selection and Fitting
  {
    id: 'abo-disp-001',
    question: 'Which of the following is the most important factor when selecting a frame for a patient with a strong minus prescription?',
    options: [
      'Frame color',
      'Frame size and eye position',
      'Temple length',
      'Bridge style'
    ],
    correctAnswer: 1,
    explanation: 'Frame size and eye position are most important for strong minus prescriptions. Smaller frames with the eyes well-centered minimize edge thickness and weight while reducing peripheral distortions.',
    category: 'dispensing-procedures',
    subcategory: 'frame-selection',
    difficulty: 'medium'
  },
  {
    id: 'abo-disp-002',
    question: 'What is the recommended minimum vertical height for a progressive lens?',
    options: [
      '14 mm',
      '18 mm',
      '22 mm',
      '26 mm'
    ],
    correctAnswer: 2,
    explanation: 'The recommended minimum vertical height for a progressive lens is typically 22 mm. This ensures sufficient room for the distance, intermediate, and near zones, allowing proper functionality of the progressive design.',
    category: 'dispensing-procedures',
    subcategory: 'frame-selection',
    difficulty: 'easy'
  },
  {
    id: 'abo-disp-003',
    question: 'Which face shape is best complemented by oval frames?',
    options: [
      'Oval face',
      'Round face',
      'Square face',
      'Heart-shaped face'
    ],
    correctAnswer: 2,
    explanation: 'Square faces are best complemented by oval frames. The rounded contours of oval frames help soften the angular features of square faces, creating a balanced appearance.',
    category: 'dispensing-procedures',
    subcategory: 'frame-selection',
    difficulty: 'easy'
  },
  {
    id: 'abo-disp-004',
    question: 'What is the effect of a narrow PD (pupillary distance) compared to a wider PD when selecting frames?',
    options: [
      'Narrow PD patients should select wider frames',
      'Narrow PD patients should select narrower frames',
      'PD has no effect on frame selection',
      'Narrow PD patients should only wear rimless frames'
    ],
    correctAnswer: 1,
    explanation: 'Patients with a narrow PD should generally select narrower frames. This ensures proper alignment of the optical centers with the patient\'s pupils and prevents excessive decentration, which could induce unwanted prismatic effects.',
    category: 'dispensing-procedures',
    subcategory: 'frame-selection',
    difficulty: 'medium'
  },
  {
    id: 'abo-disp-005',
    question: 'When fitting frames on a patient with a flat bridge, which of the following is most appropriate?',
    options: [
      'Frames with adjustable nose pads',
      'Frames with a keyhole bridge',
      'Frames with a high bridge',
      'Frames with a wide bridge'
    ],
    correctAnswer: 0,
    explanation: 'Frames with adjustable nose pads are most appropriate for patients with flat bridges. The nose pads can be adjusted to provide proper fit and weight distribution, preventing the frame from sliding down.',
    category: 'dispensing-procedures',
    subcategory: 'frame-selection',
    difficulty: 'medium'
  },
  {
    id: 'abo-disp-006',
    question: 'What frame characteristic is most important for a patient with high prescription lenses (+/- 8.00D or greater)?',
    options: [
      'Stylish design',
      'Lightweight material',
      'Small eye size with proper centration',
      'Spring hinges'
    ],
    correctAnswer: 2,
    explanation: 'Small eye size with proper centration is most important for patients with high prescriptions. Smaller lenses minimize weight and thickness, while proper centration reduces unwanted prismatic effects and optimizes optical quality.',
    category: 'dispensing-procedures',
    subcategory: 'frame-selection',
    difficulty: 'medium'
  },
  {
    id: 'abo-disp-007',
    question: 'What is the primary benefit of a frame with a higher pantoscopic tilt?',
    options: [
      'It provides a more fashionable appearance',
      'It reduces vertical prismatic effects',
      'It brings the reading area closer to the eye',
      'It increases the field of view'
    ],
    correctAnswer: 2,
    explanation: 'The primary benefit of a frame with higher pantoscopic tilt is that it brings the reading area closer to the eye, especially for progressive and bifocal wearers. This allows for a more natural head position during near vision tasks.',
    category: 'dispensing-procedures',
    subcategory: 'frame-selection',
    difficulty: 'hard'
  },
  
  // Patient Measurements
  {
    id: 'abo-disp-008',
    question: 'What is the proper way to measure pupillary distance (PD)?',
    options: [
      'From the center of one pupil to the center of the other pupil',
      'From the outer edge of one pupil to the outer edge of the other pupil',
      'From the inner corner of one eye to the inner corner of the other eye',
      'From the outer corner of one eye to the outer corner of the other eye'
    ],
    correctAnswer: 0,
    explanation: 'The proper way to measure pupillary distance (PD) is from the center of one pupil to the center of the other pupil. This measurement ensures proper alignment of the optical centers with the patient\'s visual axes.',
    category: 'dispensing-procedures',
    subcategory: 'measurements',
    difficulty: 'easy'
  },
  {
    id: 'abo-disp-009',
    question: 'When should monocular PDs be measured instead of binocular PD?',
    options: [
      'When fitting progressive lenses',
      'When a patient has significant facial asymmetry',
      'When fitting bifocal lenses',
      'When the prescription is higher than +/-4.00D'
    ],
    correctAnswer: 1,
    explanation: 'Monocular PDs should be measured when a patient has significant facial asymmetry. This ensures proper optical center placement for each eye independently, accounting for the asymmetrical position of the eyes in the face.',
    category: 'dispensing-procedures',
    subcategory: 'measurements',
    difficulty: 'medium'
  },
  {
    id: 'abo-disp-010',
    question: 'What measurement is most critical for properly fitting progressive lenses?',
    options: [
      'Temple length',
      'Bridge size',
      'Fitting height (seg height)',
      'Frame front curvature'
    ],
    correctAnswer: 2,
    explanation: 'Fitting height (seg height) is the most critical measurement for properly fitting progressive lenses. This measurement determines the vertical position of the optical center and the progressive corridor, ensuring proper alignment with the patient\'s visual needs.',
    category: 'dispensing-procedures',
    subcategory: 'measurements',
    difficulty: 'medium'
  },
  {
    id: 'abo-disp-011',
    question: 'What is the "A" measurement in frame dimensions?',
    options: [
      'The vertical height of the lens',
      'The horizontal width of the lens',
      'The bridge size',
      'The temple length'
    ],
    correctAnswer: 1,
    explanation: 'The "A" measurement in frame dimensions refers to the horizontal width of the lens (eye size). It is typically measured at the widest point of the lens shape.',
    category: 'dispensing-procedures',
    subcategory: 'measurements',
    difficulty: 'easy'
  },
  {
    id: 'abo-disp-012',
    question: 'How is vertex distance measured?',
    options: [
      'From the corneal apex to the back surface of the lens',
      'From the center of the pupil to the front surface of the lens',
      'From the center of rotation of the eye to the lens',
      'From the lateral canthus to the temple'
    ],
    correctAnswer: 0,
    explanation: 'Vertex distance is measured from the corneal apex (the front surface of the cornea) to the back surface of the lens. This measurement is particularly important for high-powered prescriptions as it affects the effective power of the lens.',
    category: 'dispensing-procedures',
    subcategory: 'measurements',
    difficulty: 'medium'
  },
  {
    id: 'abo-disp-013',
    question: 'What is the purpose of measuring pantoscopic tilt?',
    options: [
      'To determine the wrap of the frame around the face',
      'To determine the vertical angle of the frame front relative to the face',
      'To measure the distance between the lenses',
      'To measure the curvature of the frame front'
    ],
    correctAnswer: 1,
    explanation: 'Pantoscopic tilt refers to the vertical angle of the frame front relative to the face (typically with the top of the lenses angled slightly inward toward the face). This measurement is important for proper lens positioning, especially for progressive and multifocal lenses.',
    category: 'dispensing-procedures',
    subcategory: 'measurements',
    difficulty: 'medium'
  },
  {
    id: 'abo-disp-014',
    question: 'When measuring the fitting height for progressive lenses, where is the reference point on the patient\'s eye?',
    options: [
      'The top of the pupil',
      'The center of the pupil',
      'The lower eyelid',
      'The center of the cornea'
    ],
    correctAnswer: 1,
    explanation: 'When measuring fitting height for progressive lenses, the reference point on the patient\'s eye is the center of the pupil. The measurement is taken from this point to the lowest point of the lens in the frame.',
    category: 'dispensing-procedures',
    subcategory: 'measurements',
    difficulty: 'medium'
  },
  
  // Frame Adjustments and Repairs
  {
    id: 'abo-disp-015',
    question: 'Which part of the frame should be adjusted first if a frame is sitting too low on the patient\'s face?',
    options: [
      'Endpieces',
      'Nose pads or bridge',
      'Temple length',
      'Temple bend'
    ],
    correctAnswer: 1,
    explanation: 'If a frame is sitting too low on a patient\'s face, the nose pads or bridge should be adjusted first. Adjusting these components will raise the frame on the face and is the most direct way to address this issue.',
    category: 'dispensing-procedures',
    subcategory: 'adjustments',
    difficulty: 'easy'
  },
  {
    id: 'abo-disp-016',
    question: 'Which tool is most appropriate for adjusting acetate frames?',
    options: [
      'Snipe nose pliers',
      'Hot air blower or frame warmer',
      'Screwdriver',
      'Adjustable wrench'
    ],
    correctAnswer: 1,
    explanation: 'A hot air blower or frame warmer is most appropriate for adjusting acetate frames. Heat softens the acetate material, allowing it to be bent and shaped without cracking or breaking.',
    category: 'dispensing-procedures',
    subcategory: 'adjustments',
    difficulty: 'easy'
  },
  {
    id: 'abo-disp-017',
    question: 'What is the proper technique for tightening a loose screw in eyeglass frames?',
    options: [
      'Apply clear nail polish to the screw threads before tightening',
      'Over-tighten the screw and then back it off slightly',
      'Replace the screw with a larger one',
      'Use pliers to tighten the screw as much as possible'
    ],
    correctAnswer: 0,
    explanation: 'The proper technique for tightening a loose screw in eyeglass frames is to apply clear nail polish or a screw-locking compound to the screw threads before tightening. This helps secure the screw in place and prevents it from loosening again.',
    category: 'dispensing-procedures',
    subcategory: 'adjustments',
    difficulty: 'easy'
  },
  {
    id: 'abo-disp-018',
    question: 'What adjustment should be made if a frame is causing pressure on the mastoid process (behind the ear)?',
    options: [
      'Increase the pantoscopic tilt',
      'Widen the frame front',
      'Adjust the temple bend or reduce temple pressure',
      'Tighten the screws in the hinges'
    ],
    correctAnswer: 2,
    explanation: 'If a frame is causing pressure on the mastoid process (behind the ear), the temple bend should be adjusted or temple pressure reduced. This usually involves adjusting the temple curvature to better match the contour of the patient\'s ear and head.',
    category: 'dispensing-procedures',
    subcategory: 'adjustments',
    difficulty: 'medium'
  },
  {
    id: 'abo-disp-019',
    question: 'What is the most likely cause of a frame that consistently tilts to one side?',
    options: [
      'Uneven nose pads or bridge',
      'Different prescription powers in each eye',
      'Unaligned temples',
      'Poor quality frame material'
    ],
    correctAnswer: 2,
    explanation: 'Unaligned temples are the most likely cause of a frame that consistently tilts to one side. When one temple is bent higher or lower than the other, it creates an imbalance that causes the frame to tilt.',
    category: 'dispensing-procedures',
    subcategory: 'adjustments',
    difficulty: 'medium'
  },
  {
    id: 'abo-disp-020',
    question: 'What is the appropriate way to adjust plastic frames that are too tight at the temples?',
    options: [
      'Use pliers to bend the temples outward',
      'Heat the frame front and gently widen it',
      'Add silicone sleeves to the temples',
      'Replace the temples with longer ones'
    ],
    correctAnswer: 1,
    explanation: 'The appropriate way to adjust plastic frames that are too tight at the temples is to heat the frame front and gently widen it. Heating plastic frames makes them pliable and allows for adjustments without damaging the material.',
    category: 'dispensing-procedures',
    subcategory: 'adjustments',
    difficulty: 'medium'
  },
  {
    id: 'abo-disp-021',
    question: 'Which method is most appropriate for repairing a broken plastic temple?',
    options: [
      'Use super glue to bond the pieces together',
      'Replace the entire temple',
      'Use a small metal pin to join the pieces',
      'Wrap the broken area with wire'
    ],
    correctAnswer: 1,
    explanation: 'Replacing the entire temple is the most appropriate method for repairing a broken plastic temple. Repairs such as gluing or pinning are typically temporary and may not withstand normal use, potentially resulting in sharp edges that could harm the patient.',
    category: 'dispensing-procedures',
    subcategory: 'adjustments',
    difficulty: 'easy'
  },
  {
    id: 'abo-disp-022',
    question: 'What adjustment would help if a patient complains that their progressive lenses don\'t provide clear intermediate vision?',
    options: [
      'Increase the vertex distance',
      'Decrease the pantoscopic tilt',
      'Adjust the nose pads to raise the frame slightly',
      'Adjust the temple tension'
    ],
    correctAnswer: 2,
    explanation: 'Adjusting the nose pads to raise the frame slightly would help if a patient complains about poor intermediate vision with progressive lenses. This adjustment allows the patient to look through a different part of the progressive corridor, potentially improving intermediate vision.',
    category: 'dispensing-procedures',
    subcategory: 'adjustments',
    difficulty: 'hard'
  }
]; 