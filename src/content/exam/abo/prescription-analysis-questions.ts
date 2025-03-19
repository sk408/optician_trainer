import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * ABO Exam Questions: Prescription Analysis
 * 
 * Topics covered:
 * - Prescription Interpretation
 * - Prescription Verification
 * - Prescription Problem Solving
 */

export const originalPrescriptionAnalysisQuestions: ExamQuestion[] = [
  // Prescription Format and Terminology
  {
    id: 'abo-rx-001',
    question: 'In an ophthalmic prescription, what does "OD" stand for?',
    options: [
      'Ocular Distance',
      'Optical Degree',
      'Oculus Dexter (right eye)',
      'Outer Diameter'
    ],
    correctAnswer: 2,
    explanation: 'OD stands for Oculus Dexter, which is Latin for "right eye." This abbreviation is commonly used in ophthalmic prescriptions to indicate the right eye.',
    category: 'prescription-analysis',
    subcategory: 'rx-format',
    difficulty: 'easy'
  },
  {
    id: 'abo-rx-002',
    question: 'Which of the following best describes the meaning of the "sphere" component in a prescription?',
    options: [
      'The curvature of the cornea',
      'The amount of prismatic power',
      'The power that corrects nearsightedness or farsightedness',
      'The distance between the lenses'
    ],
    correctAnswer: 2,
    explanation: 'The sphere component in a prescription indicates the lens power in diopters that corrects nearsightedness (myopia, indicated by a minus sign) or farsightedness (hyperopia, indicated by a plus sign).',
    category: 'prescription-analysis',
    subcategory: 'rx-format',
    difficulty: 'easy'
  },
  {
    id: 'abo-rx-003',
    question: 'What does a prescription reading "OD: -2.50 DS" indicate?',
    options: [
      'The right eye needs a lens with -2.50 diopters of sphere power',
      'The right eye has 2.50 diopters of astigmatism',
      'The right eye needs a lens with +2.50 diopters of sphere power',
      'The right eye has a pupillary distance of 2.50 mm'
    ],
    correctAnswer: 0,
    explanation: 'A prescription of "OD: -2.50 DS" indicates that the right eye (OD) requires a lens with -2.50 diopters of sphere power. The negative sign indicates correction for myopia (nearsightedness), and "DS" stands for "diopters sphere."',
    category: 'prescription-analysis',
    subcategory: 'rx-format',
    difficulty: 'easy'
  },
  {
    id: 'abo-rx-004',
    question: 'In a prescription, what does the cylinder component measure?',
    options: [
      'The amount of presbyopia correction',
      'The amount of astigmatism correction',
      'The lens thickness',
      'The interpupillary distance'
    ],
    correctAnswer: 1,
    explanation: 'The cylinder component in a prescription measures the amount of astigmatism correction needed, expressed in diopters. It represents the additional power needed in one meridian of the lens.',
    category: 'prescription-analysis',
    subcategory: 'rx-format',
    difficulty: 'medium'
  },
  {
    id: 'abo-rx-005',
    question: 'What does the axis value in a prescription represent?',
    options: [
      'The center thickness of the lens',
      'The orientation of the cylinder correction in degrees',
      'The distance from the optical center to the edge of the lens',
      'The power of the lens in different meridians'
    ],
    correctAnswer: 1,
    explanation: 'The axis value in a prescription represents the orientation of the cylinder correction, measured in degrees from 1 to 180. It indicates the meridian that contains no cylinder power.',
    category: 'prescription-analysis',
    subcategory: 'rx-format',
    difficulty: 'medium'
  },
  {
    id: 'abo-rx-006',
    question: 'How is pupillary distance (PD) typically measured?',
    options: [
      'In prism diopters',
      'In millimeters',
      'In degrees',
      'In centimeters'
    ],
    correctAnswer: 1,
    explanation: 'Pupillary distance (PD) is typically measured in millimeters. It represents the distance between the centers of the pupils of both eyes.',
    category: 'prescription-analysis',
    subcategory: 'rx-format',
    difficulty: 'easy'
  },
  {
    id: 'abo-rx-007',
    question: 'What does "Add" refer to in a prescription?',
    options: [
      'The additional power needed for near vision',
      'The added lens treatments like anti-reflective coating',
      'The addition of prism to the prescription',
      'The adjustment to the frame size'
    ],
    correctAnswer: 0,
    explanation: 'The "Add" in a prescription refers to the additional plus power needed for near vision in multifocal lenses. It is used to correct presbyopia, the age-related difficulty in focusing on near objects.',
    category: 'prescription-analysis',
    subcategory: 'rx-format',
    difficulty: 'easy'
  },
  
  // Lens Design Selection
  {
    id: 'abo-rx-008',
    question: 'For a patient with a prescription of -8.00 DS OU who is concerned about lens thickness, which lens material would be most appropriate?',
    options: [
      'CR-39 plastic (index 1.498)',
      'Crown glass (index 1.523)',
      'Polycarbonate (index 1.586)',
      'High-index plastic (index 1.67 or higher)'
    ],
    correctAnswer: 3,
    explanation: 'For a high minus prescription (-8.00 DS), high-index plastic with an index of 1.67 or higher would be most appropriate to minimize lens thickness. Higher index materials allow for thinner lenses, especially important in high minus prescriptions.',
    category: 'prescription-analysis',
    subcategory: 'lens-design',
    difficulty: 'medium'
  },
  {
    id: 'abo-rx-009',
    question: 'Which lens design would be most appropriate for a patient with an Add of +2.50 who uses a computer for 8 hours daily?',
    options: [
      'Single vision lenses',
      'Bifocal lenses',
      'Progressive addition lenses',
      'Computer progressive lenses'
    ],
    correctAnswer: 3,
    explanation: 'Computer progressive lenses (also called office or occupational progressives) would be most appropriate for a patient who uses a computer for extended periods. These lenses are designed with a wider intermediate zone for computer use while still providing near correction for reading.',
    category: 'prescription-analysis',
    subcategory: 'lens-design',
    difficulty: 'medium'
  },
  {
    id: 'abo-rx-010',
    question: 'A patient with a prescription of +1.75 DS OU complains of significant chromatic aberration. Which lens material would help reduce this issue?',
    options: [
      'CR-39 plastic',
      'Trivex',
      'High-index plastic (1.74)',
      'Glass with high Abbe value'
    ],
    correctAnswer: 3,
    explanation: 'Glass lenses with a high Abbe value would help reduce chromatic aberration. The Abbe value measures a material\'s dispersion properties, with higher values indicating less chromatic aberration. Glass typically has higher Abbe values than plastic materials.',
    category: 'prescription-analysis',
    subcategory: 'lens-design',
    difficulty: 'hard'
  },
  {
    id: 'abo-rx-011',
    question: 'For a patient with high astigmatism (cylinder -3.00D), which lens form would be most appropriate?',
    options: [
      'Plano-concave',
      'Biconvex',
      'Lenticular',
      'Aspheric'
    ],
    correctAnswer: 3,
    explanation: 'Aspheric lens designs are most appropriate for patients with high astigmatism. Aspheric lenses have a more complex curvature that can better correct high astigmatism while providing better optical quality and thinner lens profiles.',
    category: 'prescription-analysis',
    subcategory: 'lens-design',
    difficulty: 'medium'
  },
  {
    id: 'abo-rx-012',
    question: 'Which lens design is characterized by a visible line dividing the distance and near portions?',
    options: [
      'Progressive addition lens',
      'Bifocal lens',
      'Trifocal lens',
      'Single vision lens'
    ],
    correctAnswer: 1,
    explanation: 'A bifocal lens has a visible line dividing the distance portion (upper) from the near portion (lower). This line represents the junction between the two different lens powers.',
    category: 'prescription-analysis',
    subcategory: 'lens-design',
    difficulty: 'easy'
  },
  {
    id: 'abo-rx-013',
    question: 'For a young patient with accommodative esotropia, what lens design would typically be prescribed?',
    options: [
      'Single vision lenses with prism',
      'Progressive addition lenses',
      'Bifocal lenses with high Add',
      'Single vision lenses with anti-fatigue design'
    ],
    correctAnswer: 2,
    explanation: 'Bifocal lenses with a high Add are typically prescribed for young patients with accommodative esotropia. The near addition reduces the accommodative demand and helps control the esotropia that occurs during near work.',
    category: 'prescription-analysis',
    subcategory: 'lens-design',
    difficulty: 'hard'
  },
  
  // Transposition and Conversion
  {
    id: 'abo-rx-014',
    question: 'Which of the following is the transposed form of Rx: -2.00 -1.50 x 180?',
    options: [
      '-3.50 +1.50 x 90',
      '-3.50 +1.50 x 180',
      '-0.50 -1.50 x 90',
      '-0.50 +1.50 x 90'
    ],
    correctAnswer: 0,
    explanation: 'To transpose a prescription, add the sphere and cylinder powers algebraically to get the new sphere, change the sign of the cylinder power, and add or subtract 90 degrees to/from the axis. So, -2.00 -1.50 x 180 becomes -3.50 ((-2.00) + (-1.50)) +1.50 x 90 (180 - 90).',
    category: 'prescription-analysis',
    subcategory: 'transposition',
    difficulty: 'medium'
  },
  {
    id: 'abo-rx-015',
    question: 'When would you need to transpose a prescription?',
    options: [
      'When changing from plus to minus cylinder notation',
      'When converting a spherical prescription to a cylindrical one',
      'When adjusting for pantoscopic tilt',
      'When calculating the effective power of a lens'
    ],
    correctAnswer: 0,
    explanation: 'Transposition is necessary when changing from plus to minus cylinder notation or vice versa. Different practitioners and labs may use different notations, requiring conversion between formats.',
    category: 'prescription-analysis',
    subcategory: 'transposition',
    difficulty: 'medium'
  },
  {
    id: 'abo-rx-016',
    question: 'What is the spherical equivalent of +2.50 -1.00 x 75?',
    options: [
      '+2.00 D',
      '+2.50 D',
      '+3.00 D',
      '+1.50 D'
    ],
    correctAnswer: 0,
    explanation: 'The spherical equivalent is calculated as the sphere power plus half the cylinder power. For +2.50 -1.00 x 75, it\'s +2.50 - 0.50 = +2.00 D.',
    category: 'prescription-analysis',
    subcategory: 'transposition',
    difficulty: 'medium'
  },
  {
    id: 'abo-rx-017',
    question: 'What is the result when combining the following prescription powers: +1.50 DS and +0.75 DS?',
    options: [
      '+0.75 DS',
      '+1.50 DS',
      '+2.25 DS',
      '+3.00 DS'
    ],
    correctAnswer: 2,
    explanation: 'When combining lens powers, you add the dioptric values algebraically. So, +1.50 DS + 0.75 DS = +2.25 DS.',
    category: 'prescription-analysis',
    subcategory: 'transposition',
    difficulty: 'easy'
  },
  {
    id: 'abo-rx-018',
    question: 'What is the back vertex power of a +5.00 D lens when moved 10 mm away from the eye?',
    options: [
      '+4.76 D',
      '+5.00 D',
      '+5.26 D',
      '+5.50 D'
    ],
    correctAnswer: 0,
    explanation: 'When a lens is moved away from the eye, the effective power changes. For a positive lens, the power decreases. Using the formula P\' = P/(1 + dP) where P is the original power (+5.00 D) and d is the distance in meters (0.01 m), we get P\' = 5/(1 + 0.01 × 5) = 5/1.05 = 4.76 D.',
    category: 'prescription-analysis',
    subcategory: 'transposition',
    difficulty: 'hard'
  },
  {
    id: 'abo-rx-019',
    question: 'Which of the following prescriptions would have the highest amount of induced prism when decentered by 2 mm?',
    options: [
      '+1.50 DS',
      '-1.50 DS',
      '+3.50 DS',
      '-3.50 DS'
    ],
    correctAnswer: 3,
    explanation: 'Induced prism is calculated using Prentice\'s Rule: P = c × F, where P is the prism in prism diopters, c is the decentration in centimeters, and F is the lens power in diopters. The highest absolute power (-3.50 DS) will induce the most prism when decentered by the same amount.',
    category: 'prescription-analysis',
    subcategory: 'transposition',
    difficulty: 'hard'
  },
  {
    id: 'abo-rx-020',
    question: 'A prescription reads +1.50 -0.50 x 180. What is the power in the 90-degree meridian?',
    options: [
      '+1.50 D',
      '+1.00 D',
      '+2.00 D',
      '+0.50 D'
    ],
    correctAnswer: 1,
    explanation: 'In the 90-degree meridian (perpendicular to the 180-degree axis), the power equals the sphere power plus the cylinder power. So, +1.50 + (-0.50) = +1.00 D.',
    category: 'prescription-analysis',
    subcategory: 'transposition',
    difficulty: 'medium'
  }
];

// Adding more prescription analysis questions
export const additionalPrescriptionAnalysisQuestions: ExamQuestion[] = [
  // Prescription Interpretation
  {
    id: 'abo-rx-021',
    question: 'A prescription reads: OD -2.25 -1.50 x 045, OS -2.00 -1.25 x 135. What is the spherical equivalent for the right eye?',
    options: [
      '-2.25D',
      '-3.00D',
      '-3.75D',
      '-4.00D'
    ],
    correctAnswer: 1,
    explanation: 'The spherical equivalent is calculated as sphere + (cylinder/2). For OD: -2.25 + (-1.50/2) = -2.25 + (-0.75) = -3.00D.',
    category: 'prescription-analysis',
    subcategory: 'prescription-interpretation',
    difficulty: 'medium'
  },
  {
    id: 'abo-rx-022',
    question: 'A prescription written as -3.00 +1.50 x 180 can be transposed to:',
    options: [
      '-1.50 -1.50 x 090',
      '-1.50 -3.00 x 090',
      '-4.50 +3.00 x 090',
      '-1.50 -1.50 x 180'
    ],
    correctAnswer: 0,
    explanation: 'To transpose a prescription, add the cylinder power to the sphere, change the sign of the cylinder, and add 90 degrees to the axis (or subtract 90 if the result exceeds 180). So -3.00 +1.50 x 180 becomes: -3.00 + 1.50 = -1.50 (new sphere), +1.50 becomes -1.50 (new cylinder), and 180 - 90 = 090 (new axis). Thus, -1.50 -1.50 x 090.',
    category: 'prescription-analysis',
    subcategory: 'prescription-interpretation',
    difficulty: 'medium'
  },
  {
    id: 'abo-rx-023',
    question: 'What is the resultant prism when 2Δ base up is combined with 3Δ base out in the same lens?',
    options: [
      '5Δ base up and out',
      '1Δ base out',
      '3.61Δ at an oblique direction',
      '6Δ base down and in'
    ],
    correctAnswer: 2,
    explanation: 'When prisms at right angles are combined, the resultant prism is calculated using the Pythagorean theorem. The magnitude is √(2² + 3²) = √13 = 3.61Δ. The direction will be at an oblique angle between the vertical (up) and horizontal (out) directions.',
    category: 'prescription-analysis',
    subcategory: 'prescription-interpretation',
    difficulty: 'hard'
  },
  {
    id: 'abo-rx-024',
    question: 'A patient\'s prescription includes "Add +2.25". This means:',
    options: [
      'The patient needs +2.25D more plus power for distance vision',
      'The patient needs +2.25D more plus power for near vision than for distance',
      'The patient\'s cylinder power should be increased by +2.25D',
      'The patient\'s PD should be increased by 2.25mm for near'
    ],
    correctAnswer: 1,
    explanation: 'An "Add +2.25" on a prescription indicates that the patient needs +2.25D more plus power for near vision than for distance vision. This is typically prescribed for presbyopic patients who need additional power for reading and near tasks.',
    category: 'prescription-analysis',
    subcategory: 'prescription-interpretation',
    difficulty: 'easy'
  },
  
  // Prescription Verification
  {
    id: 'abo-rx-025',
    question: 'When verifying a progressive lens, what measurement should be checked at the fitting cross?',
    options: [
      'Add power',
      'Distance power',
      'Prism',
      'Cylinder axis'
    ],
    correctAnswer: 1,
    explanation: 'When verifying a progressive lens, the distance power should be checked at the fitting cross. This location corresponds to the distance portion of the lens and is where the patient\'s distance prescription should be verified.',
    category: 'prescription-analysis',
    subcategory: 'prescription-verification',
    difficulty: 'medium'
  },
  {
    id: 'abo-rx-026',
    question: 'What is the acceptable tolerance for cylinder axis in a prescription with a cylinder power of -2.50D?',
    options: [
      '± 2 degrees',
      '± 3 degrees',
      '± 5 degrees',
      '± 7 degrees'
    ],
    correctAnswer: 1,
    explanation: 'For a cylinder power of -2.50D, the ANSI Z80.1 standard specifies an acceptable tolerance of ± 3 degrees for the cylinder axis. The tolerance becomes tighter as cylinder power increases, recognizing that axis errors have a greater impact with higher cylinder powers.',
    category: 'prescription-analysis',
    subcategory: 'prescription-verification',
    difficulty: 'medium'
  },
  {
    id: 'abo-rx-027',
    question: 'When using a lensometer to verify a multifocal lens with a +2.00D add, what should the power read in the near portion compared to the distance portion?',
    options: [
      '2.00D less plus power',
      '2.00D more plus power',
      'Same power but with cylinder',
      'Same power but with prism'
    ],
    correctAnswer: 1,
    explanation: 'When verifying a multifocal lens with a +2.00D add, the near portion should read 2.00D more plus power (or 2.00D less minus power) than the distance portion. This additional plus power is what enables the patient to focus at near distances.',
    category: 'prescription-analysis',
    subcategory: 'prescription-verification',
    difficulty: 'easy'
  },
  {
    id: 'abo-rx-028',
    question: 'Which of the following would be considered within ANSI standards for a single vision lens with a prescription of -3.75 -0.50 x 045?',
    options: [
      '-3.50 -0.50 x 045',
      '-3.75 -0.75 x 055',
      '-3.75 -0.50 x 060',
      '-4.00 -0.50 x 045'
    ],
    correctAnswer: 0,
    explanation: 'According to ANSI Z80.1 standards, for a prescription with sphere power of -3.75D, the acceptable tolerance is ±0.13D for powers over ±3.25D. The cylinder power of -0.50D has a tolerance of ±0.13D, and the axis (at this cylinder power) has a tolerance of ±7 degrees. Therefore, -3.50 -0.50 x 045 is within tolerance for the sphere power (-3.75 ±0.13D allows -3.62D to -3.88D).',
    category: 'prescription-analysis',
    subcategory: 'prescription-verification',
    difficulty: 'hard'
  },
  
  // Prescription Problem Solving
  {
    id: 'abo-rx-029',
    question: 'A patient complains that their new progressive lenses cause them to feel like they\'re "walking downhill." What is the most likely cause?',
    options: [
      'Incorrect PD',
      'Incorrect OC height',
      'Excessive pantoscopic tilt',
      'Incorrect ADD power'
    ],
    correctAnswer: 2,
    explanation: 'The sensation of "walking downhill" with new progressive lenses is most commonly caused by excessive pantoscopic tilt. This changes the effective power in the lower portion of the lens, creating unwanted vertical prismatic effects that alter spatial perception.',
    category: 'prescription-analysis',
    subcategory: 'problem-solving',
    difficulty: 'hard'
  },
  {
    id: 'abo-rx-030',
    question: 'A patient with a high plus prescription complains that objects appear larger than they should. This effect is known as:',
    options: [
      'Pincushion distortion',
      'Barrel distortion',
      'Spectacle magnification',
      'Chromatic aberration'
    ],
    correctAnswer: 2,
    explanation: 'The effect where objects appear larger with high plus prescriptions is known as spectacle magnification. Plus lenses magnify images, making objects appear larger than they actually are. This effect increases with higher plus powers and greater vertex distances.',
    category: 'prescription-analysis',
    subcategory: 'problem-solving',
    difficulty: 'medium'
  }
];

// Combine original and additional questions
export const prescriptionAnalysisQuestions: ExamQuestion[] = [
  ...originalPrescriptionAnalysisQuestions,
  ...additionalPrescriptionAnalysisQuestions
]; 