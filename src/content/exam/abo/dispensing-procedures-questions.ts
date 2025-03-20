import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * ABO Exam Questions: Dispensing Procedures
 * 
 * Topics covered:
 * - Frame fitting and adjustments
 * - Measuring parameters
 * - Delivery and troubleshooting
 */

export const dispensingProceduresQuestions: ExamQuestion[] = [
  // Frame fitting and adjustments
  {
    id: 'abo-dispensing-001',
    question: 'What is the primary purpose of adjusting the pantoscopic tilt of a frame?',
    options: [
      'To improve the cosmetic appearance of the frame',
      'To properly position the optical centers of the lenses',
      'To adjust the frame for progressive lenses',
      'To make the temples more comfortable'
    ],
    correctAnswer: 2,
    explanation: 'Pantoscopic tilt adjustment is primarily important for progressive lenses to ensure proper positioning of the distance, intermediate, and near viewing zones.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'medium'
  },
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
  },
  {
    id: 'abo-dispensing-025',
    question: 'When measuring a monocular PD, from which point on the pupil should the measurement be taken?',
    options: [
      'The top edge of the pupil',
      'The bottom edge of the pupil',
      'The center of the pupil',
      'The edge of the iris'
    ],
    correctAnswer: 2,
    explanation: 'Monocular PD should be measured from the center of the pupil to the center of the bridge of the nose, then from the bridge to the center of the other pupil.',
    category: 'dispensing',
    subcategory: 'measuring-parameters',
    difficulty: 'easy'
  },
  {
    id: 'abo-dispensing-026',
    question: 'What is the purpose of measuring vertex distance?',
    options: [
      'To determine the proper frame size',
      'To calculate lens thickness',
      'To compensate for power changes in high-powered lenses',
      'To determine the pantoscopic tilt'
    ],
    correctAnswer: 2,
    explanation: 'Vertex distance measurement is necessary to compensate for power changes that occur when high-powered lenses are positioned at a different distance from the eye than was used during refraction.',
    category: 'dispensing',
    subcategory: 'measuring-parameters',
    difficulty: 'medium'
  },
  {
    id: 'abo-dispensing-027',
    question: 'What frame adjustment would you make if a patient complains that the frames slide down their nose?',
    options: [
      'Decrease pantoscopic tilt',
      'Tighten the nose pads or decrease the bridge width',
      'Loosen the temples',
      'Increase the face form angle'
    ],
    correctAnswer: 1,
    explanation: 'To prevent frames from sliding down the nose, you would tighten the nose pads by bringing them closer together or use a frame with a smaller bridge width that fits the patient\'s nose better.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'easy'
  },
  {
    id: 'abo-dispensing-028',
    question: 'How is the effective diameter (ED) of a lens calculated?',
    options: [
      'The average of the lens height and width',
      'The widest part of the lens',
      'The square root of the sum of the squares of the A and B dimensions',
      'The square root of (A² + B²) divided by 2'
    ],
    correctAnswer: 3,
    explanation: 'The effective diameter is calculated using the formula ED = √[(A² + B²)/2], where A is the horizontal dimension and B is the vertical dimension of the lens shape.',
    category: 'dispensing',
    subcategory: 'measuring-parameters',
    difficulty: 'hard'
  },
  {
    id: 'abo-dispensing-029',
    question: 'What is the appropriate temple length for a patient if the distance from the frame endpiece to the apex of the ear is 90mm?',
    options: [
      '90mm',
      '100mm',
      '110mm',
      '130mm'
    ],
    correctAnswer: 2,
    explanation: 'The appropriate temple length should be approximately 15-20mm longer than the measured distance from the frame endpiece to the apex of the ear. For a measurement of 90mm, a 110mm temple would be appropriate.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'medium'
  },
  {
    id: 'abo-dispensing-030',
    question: 'Which of the following would NOT be a suitable adjustment for a patient experiencing pressure behind the ears?',
    options: [
      'Reducing temple tension',
      'Adjusting the temple bend to better match ear contour',
      'Shortening the temples',
      'Rounding sharp temple ends'
    ],
    correctAnswer: 2,
    explanation: 'Shortening the temples would not relieve pressure behind the ears and might actually increase discomfort. The other options would help reduce pressure and improve comfort.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'medium'
  },
  {
    id: 'abo-dispensing-031',
    question: 'What is the purpose of a face form angle (wrap) adjustment?',
    options: [
      'To align the frame with the vertical plane of the face',
      'To improve comfort at the nose bridge',
      'To align the frame with the horizontal plane of the face',
      'To maintain alignment of the frame with the contour of the face'
    ],
    correctAnswer: 3,
    explanation: 'Face form angle (or wrap) adjustment helps maintain alignment of the frame with the horizontal contour of the face, ensuring that the lenses are properly positioned in front of the eyes and the frame fits comfortably.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'medium'
  },
  {
    id: 'abo-dispensing-032',
    question: 'When should bifocal height be measured from the pupil center rather than the lower lid?',
    options: [
      'For high minus lenses',
      'For high plus lenses',
      'For patients with ptosis',
      'For occupational lenses'
    ],
    correctAnswer: 2,
    explanation: 'For patients with ptosis (drooping eyelid), measuring bifocal height from the pupil center is more appropriate since the lower lid position is not in its normal anatomical position.',
    category: 'dispensing',
    subcategory: 'measuring-parameters',
    difficulty: 'hard'
  },
  {
    id: 'abo-dispensing-033',
    question: 'What is the primary purpose of the retroscopic tilt in eyeglasses?',
    options: [
      'To improve the cosmetic appearance',
      'To keep the lenses parallel to the frontal plane of the face',
      'To distribute weight more evenly',
      'To improve the field of view through progressive lenses'
    ],
    correctAnswer: 1,
    explanation: 'Retroscopic tilt (negative pantoscopic tilt) keeps the lenses parallel to the frontal plane of the face, which can be necessary for certain prescriptions or facial features, though it is less common than pantoscopic tilt.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'medium'
  },
  {
    id: 'abo-dispensing-034',
    question: 'During frame selection, which of the following is the MOST important consideration for a high-minus prescription?',
    options: [
      'Temple length',
      'Frame material',
      'Frame eye size and shape',
      'Nosepads versus integrated bridge'
    ],
    correctAnswer: 2,
    explanation: 'For high-minus prescriptions, a smaller eye size and a frame shape that positions the optical center close to the pupil helps minimize edge thickness and weight, making frame eye size and shape the most important consideration.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'medium'
  },
  {
    id: 'abo-dispensing-035',
    question: 'What is the recommended minimum vertical height for progressive lenses?',
    options: [
      '14mm',
      '18mm',
      '22mm',
      '28mm'
    ],
    correctAnswer: 2,
    explanation: 'The recommended minimum vertical height for most progressive lenses is typically 22mm, though this can vary by design. This ensures adequate room for the distance, intermediate, and near zones.',
    category: 'dispensing',
    subcategory: 'measuring-parameters',
    difficulty: 'medium'
  },
  {
    id: 'abo-dispensing-036',
    question: 'When measuring segment height for a bifocal, where should the top of the segment be positioned relative to the lower lid?',
    options: [
      'At the lower lid',
      'Slightly below the lower lid',
      'Tangent to or slightly above the lower lid',
      'At the pupil center'
    ],
    correctAnswer: 2,
    explanation: 'The top of a bifocal segment should be positioned tangent to or slightly above the lower lid to provide comfortable near vision and minimize interference with distance vision.',
    category: 'dispensing',
    subcategory: 'measuring-parameters',
    difficulty: 'easy'
  },
  {
    id: 'abo-dispensing-037',
    question: 'A patient is experiencing "swim" effect with their new progressive lenses. What is the most likely cause?',
    options: [
      'Incorrect PD measurement',
      'Incorrect fitting height',
      'Insufficient pantoscopic tilt',
      'All of the above'
    ],
    correctAnswer: 3,
    explanation: 'The "swim" effect in progressive lenses can be caused by incorrect PD measurement, incorrect fitting height, or insufficient pantoscopic tilt. All these factors affect how the wearer perceives through different parts of the lens.',
    category: 'dispensing',
    subcategory: 'delivery-troubleshooting',
    difficulty: 'hard'
  },
  {
    id: 'abo-dispensing-038',
    question: 'What is the primary purpose of a nosepad adjustment on a metal frame?',
    options: [
      'To improve the cosmetic appearance',
      'To position the lenses at the correct height',
      'To adjust the pantoscopic tilt',
      'To distribute the weight of the eyewear'
    ],
    correctAnswer: 1,
    explanation: 'The primary purpose of nosepad adjustments on metal frames is to position the lenses at the correct height in front of the eyes, ensuring proper alignment of the optical centers and any multifocal segments.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'easy'
  },
  {
    id: 'abo-dispensing-039',
    question: 'What tool would be most appropriate for adjusting plastic frames?',
    options: [
      'Needle-nose pliers',
      'Hot air frame warmer',
      'Screwdriver',
      'Nosepad pliers'
    ],
    correctAnswer: 1,
    explanation: 'A hot air frame warmer is the most appropriate tool for adjusting plastic frames as it softens the material to allow for adjustments without cracking or breaking the plastic.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'easy'
  },
  {
    id: 'abo-dispensing-040',
    question: 'When dispensing new progressive lenses, what should you demonstrate to the patient?',
    options: [
      'Only how to find the reading portion',
      'Only how to use the distance portion',
      'How to find and use distance, intermediate, and near zones',
      'How to clean their lenses properly'
    ],
    correctAnswer: 2,
    explanation: 'When dispensing progressive lenses, you should demonstrate how to find and use all three viewing zones (distance, intermediate, and near), as proper use of each zone is essential for patient comfort and satisfaction.',
    category: 'dispensing',
    subcategory: 'delivery-troubleshooting',
    difficulty: 'medium'
  },
  {
    id: 'abo-dispensing-041',
    question: 'A patient with a high astigmatic correction is experiencing visual distortion. What frame adjustment might help?',
    options: [
      'Increasing the pantoscopic tilt',
      'Decreasing the pantoscopic tilt',
      'Ensuring the frame is level and properly aligned',
      'Widening the bridge'
    ],
    correctAnswer: 2,
    explanation: 'For patients with high astigmatic corrections, ensuring the frame is level and properly aligned is crucial as any rotation of the cylinder axis can cause significant visual distortion.',
    category: 'dispensing',
    subcategory: 'delivery-troubleshooting',
    difficulty: 'hard'
  },
  {
    id: 'abo-dispensing-042',
    question: 'Which of the following is the correct way to verify the PD on mounted eyewear?',
    options: [
      'Measure from one lens edge to the other',
      'Measure from the temporal edge of one lens to the nasal edge of the other',
      'Mark the optical centers and measure the distance between them',
      'Measure from the center of the bridge to each lens center'
    ],
    correctAnswer: 2,
    explanation: 'To verify the PD on mounted eyewear, you should mark the optical centers of each lens and measure the distance between these marks. This confirms that the lenses were made to the specified PD.',
    category: 'dispensing',
    subcategory: 'delivery-troubleshooting',
    difficulty: 'medium'
  },
  {
    id: 'abo-dispensing-043',
    question: 'What is the proper method for measuring segment height for a flat-top bifocal?',
    options: [
      'From the bottom of the lens to the top of the segment',
      'From the center of the pupil to the top of the segment',
      'From the lower lid to the top of the segment',
      'From the bottom of the lens to the bottom of the segment'
    ],
    correctAnswer: 1,
    explanation: 'Segment height for a flat-top bifocal is properly measured from the center of the pupil to the top of the segment when the patient is looking straight ahead in a normal head position.',
    category: 'dispensing',
    subcategory: 'measuring-parameters',
    difficulty: 'medium'
  },
  {
    id: 'abo-dispensing-044',
    question: 'What is meant by "boxing system" in frame and lens measurements?',
    options: [
      'The method of packaging frames for shipment',
      'A system where frame dimensions are measured within an imaginary rectangle',
      'A system for measuring pupillary distance',
      'The method of verifying lens power'
    ],
    correctAnswer: 1,
    explanation: 'The boxing system is a standardized method where frame dimensions are measured within an imaginary rectangle that completely encloses the lens shape, providing consistent measurements for A, B, and ED dimensions.',
    category: 'dispensing',
    subcategory: 'measuring-parameters',
    difficulty: 'medium'
  },
  {
    id: 'abo-dispensing-045',
    question: 'A patient with a +5.00D prescription complains that objects appear larger than expected. What is the most likely cause?',
    options: [
      'The lens power is too strong',
      'The vertex distance is greater than during refraction',
      'The vertex distance is less than during refraction',
      'The optical centers are too far apart'
    ],
    correctAnswer: 1,
    explanation: 'If the vertex distance of the glasses is greater than what was used during refraction, a high plus lens will effectively have more plus power, causing objects to appear larger. This requires vertex compensation.',
    category: 'dispensing',
    subcategory: 'delivery-troubleshooting',
    difficulty: 'hard'
  }
]; 