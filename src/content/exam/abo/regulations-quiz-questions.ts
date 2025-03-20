import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * ABO Quiz Questions: Regulations and Standards
 * 
 * Topics covered:
 * - Prescription Interpretation
 * - Basic Optical Standards
 * - Safety Eyewear
 */

export const regulationsQuizQuestions: ExamQuestion[] = [
  // Prescription Interpretation
  {
    id: 'quiz-regulations-001',
    question: 'In a prescription, what does "OD" stand for?',
    options: [
      'Optical Distance',
      'Ocular Decentration',
      'Oculus Dexter (right eye)',
      'Outer Diameter'
    ],
    correctAnswer: 2,
    explanation: 'OD stands for Oculus Dexter, the Latin term for right eye. It\'s used on prescriptions to indicate measurements for the right eye.',
    category: 'regulations',
    subcategory: 'rx-interpretation',
    difficulty: 'easy'
  },
  {
    id: 'quiz-regulations-002',
    question: 'What does a prescription value of -2.50 DS indicate?',
    options: [
      'The eye is farsighted with 2.5 diopters of correction needed',
      'The eye is nearsighted with 2.5 diopters of correction needed',
      'The eye has 2.5 diopters of astigmatism',
      'The eye needs 2.5 diopters of prism'
    ],
    correctAnswer: 1,
    explanation: 'A prescription value of -2.50 DS (diopters sphere) indicates the eye is nearsighted (myopic) and requires 2.5 diopters of minus power correction. The negative sign indicates a diverging lens is needed.',
    category: 'regulations',
    subcategory: 'rx-interpretation',
    difficulty: 'easy'
  },
  {
    id: 'quiz-regulations-003',
    question: 'How would you interpret the following prescription: OD: +1.50 -0.75 x 180?',
    options: [
      '+1.50 diopters of sphere power for the right eye',
      'The right eye has +1.50 sphere power with 0.75 diopters of astigmatism at axis 180',
      'The right eye has +1.50 prism diopters at 180 degrees',
      'The right eye has an add power of +1.50 and cylinder of 0.75'
    ],
    correctAnswer: 1,
    explanation: 'The prescription OD: +1.50 -0.75 x 180 indicates the right eye has +1.50 diopters of sphere power (hyperopia correction) with 0.75 diopters of astigmatism at axis 180 degrees (minus cylinder notation). The spherical equivalent would be +1.125D.',
    category: 'regulations',
    subcategory: 'rx-interpretation',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulations-004',
    question: 'What does "Add +2.00" mean on a prescription?',
    options: [
      'Add 2.00 diopters to the sphere power',
      'Add 2.00 diopters for reading/near vision to the distance prescription',
      'Add 2.00 diopters of prism',
      'Add 2.00 mm to the pupillary distance'
    ],
    correctAnswer: 1,
    explanation: 'The "Add +2.00" notation indicates an addition of +2.00 diopters for reading/near vision, added to the distance prescription. This is for presbyopia correction and indicates the power needed in the lower portion of bifocals, trifocals, or progressive lenses.',
    category: 'regulations',
    subcategory: 'rx-interpretation',
    difficulty: 'easy'
  },
  {
    id: 'quiz-regulations-005',
    question: 'What does the "x" represent in the prescription notation "-2.00 -1.50 x 45"?',
    options: [
      'It represents the multiplication of sphere and cylinder powers',
      'It indicates the axis of the cylindrical correction',
      'It represents crossed cylinder notation',
      'It indicates an incorrect prescription'
    ],
    correctAnswer: 1,
    explanation: 'In prescription notation, the "x" indicates the axis of the cylindrical correction. In this case, the cylinder power of -1.50 diopters is positioned at axis 45 degrees.',
    category: 'regulations',
    subcategory: 'rx-interpretation',
    difficulty: 'easy'
  },
  {
    id: 'quiz-regulations-006',
    question: 'How would you convert this minus cylinder prescription to plus cylinder: -3.00 -2.00 x 180?',
    options: [
      '-5.00 +2.00 x 90',
      '-1.00 +2.00 x 90',
      '-5.00 +2.00 x 180',
      '-1.00 +2.00 x 180'
    ],
    correctAnswer: 1,
    explanation: 'To convert from minus to plus cylinder: 1) Add the sphere and cylinder powers (-3.00 + -2.00 = -5.00), 2) Change the sign of the cylinder from minus to plus (-2.00 becomes +2.00), 3) Change the axis by 90 degrees (180 becomes 90). The result is -5.00 +2.00 x 90. But to get the correct transposition, we add the cylinder to the sphere: -3.00 + (-2.00) = -5.00, then the sphere becomes -5.00, the cylinder becomes +2.00, and the axis changes by 90 degrees to 90. So -3.00 -2.00 x 180 becomes -5.00 +2.00 x 90.',
    category: 'regulations',
    subcategory: 'rx-interpretation',
    difficulty: 'hard'
  },
  {
    id: 'quiz-regulations-007',
    question: 'What does "PD 64" indicate on a prescription?',
    options: [
      'The patient\'s pulse is 64 beats per minute',
      'The pupillary distance is 64 millimeters',
      'The prism diopters are 64',
      'The patient\'s age is 64'
    ],
    correctAnswer: 1,
    explanation: 'PD 64 indicates the pupillary distance is 64 millimeters. This is the distance between the centers of the pupils, which is essential for properly positioning optical centers of lenses.',
    category: 'regulations',
    subcategory: 'rx-interpretation',
    difficulty: 'easy'
  },
  {
    id: 'quiz-regulations-008',
    question: 'How would you interpret the prism notation "2Δ BU OD"?',
    options: [
      '2 prism diopters base up for the right eye',
      '2 prism diopters base up for the left eye',
      '2 prism diopters base down for the right eye',
      '2 prism diopters base down for the left eye'
    ],
    correctAnswer: 0,
    explanation: '2Δ BU OD indicates 2 prism diopters base up for the right eye (OD). Prism power is measured in prism diopters (Δ), and the base direction indicates which way the base of the prism is oriented (in this case, up).',
    category: 'regulations',
    subcategory: 'rx-interpretation',
    difficulty: 'medium'
  },
  
  // Basic Optical Standards
  {
    id: 'quiz-regulations-009',
    question: 'What is ANSI Z80.1?',
    options: [
      'A standard for progressive addition lenses',
      'A standard for ophthalmic prescriptions',
      'A standard for prescription ophthalmic lenses',
      'A standard for contact lenses'
    ],
    correctAnswer: 2,
    explanation: 'ANSI Z80.1 is the American National Standards Institute standard for prescription ophthalmic lenses. It specifies tolerances and requirements for finished prescription spectacle lenses and mounted pairs.',
    category: 'regulations',
    subcategory: 'basic-standards',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulations-010',
    question: 'According to ANSI standards, what is the typical power tolerance for a single vision lens with a power range between ±3.25D and ±6.50D?',
    options: [
      '±0.13D',
      '±0.15D',
      '±0.18D',
      '±0.25D'
    ],
    correctAnswer: 1,
    explanation: 'According to ANSI Z80.1 standards, the typical power tolerance for a single vision lens with a power range between ±3.25D and ±6.50D is ±0.15D. This means the measured power can be 0.15 diopters more or less than the prescribed power and still be within acceptable limits.',
    category: 'regulations',
    subcategory: 'basic-standards',
    difficulty: 'hard'
  },
  {
    id: 'quiz-regulations-011',
    question: 'What federal agency regulates the impact resistance of prescription lenses in the United States?',
    options: [
      'OSHA (Occupational Safety and Health Administration)',
      'FDA (Food and Drug Administration)',
      'EPA (Environmental Protection Agency)',
      'FTC (Federal Trade Commission)'
    ],
    correctAnswer: 1,
    explanation: 'The FDA (Food and Drug Administration) regulates the impact resistance of prescription lenses in the United States. FDA regulations require all prescription lenses to be impact-resistant and undergo drop-ball testing or meet ANSI Z87.1 standards for safety eyewear.',
    category: 'regulations',
    subcategory: 'basic-standards',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulations-012',
    question: 'What is the Eyeglass Rule enforced by the FTC?',
    options: [
      'A rule requiring opticians to verify prescriptions for accuracy',
      'A rule requiring patients to update prescriptions annually',
      'A rule requiring prescribers to provide patients with a copy of their eyeglass prescription',
      'A rule requiring opticians to use only FDA-approved frames'
    ],
    correctAnswer: 2,
    explanation: 'The Eyeglass Rule, enforced by the Federal Trade Commission (FTC), requires prescribers to provide patients with a copy of their eyeglass prescription after completion of an eye examination, without requiring a request from the patient or additional fee.',
    category: 'regulations',
    subcategory: 'basic-standards',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulations-013',
    question: 'What is the minimum center thickness required by the FDA for glass dress lenses?',
    options: [
      '1.0 mm',
      '2.0 mm',
      '3.0 mm',
      '4.0 mm'
    ],
    correctAnswer: 1,
    explanation: 'The FDA requires a minimum center thickness of 2.0 mm for glass dress lenses regardless of prescription power. This ensures adequate impact resistance for regular everyday wear.',
    category: 'regulations',
    subcategory: 'basic-standards',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulations-014',
    question: 'What does the drop ball test measure?',
    options: [
      'The refractive index of lens materials',
      'The impact resistance of lenses',
      'The optical quality of lenses',
      'The UV protection of lenses'
    ],
    correctAnswer: 1,
    explanation: 'The drop ball test measures the impact resistance of lenses. It involves dropping a 5/8-inch steel ball from a height of 50 inches onto the lens. If the lens doesn\'t fracture, chip, or crack, it passes the test and meets the minimum FDA impact resistance requirements.',
    category: 'regulations',
    subcategory: 'basic-standards',
    difficulty: 'easy'
  },
  {
    id: 'quiz-regulations-015',
    question: 'According to ANSI standards, what is the maximum permissible horizontal prism imbalance for a pair of glasses with distance PD matching the frame PD?',
    options: [
      '0.33Δ',
      '0.67Δ',
      '1.0Δ',
      '2.5Δ'
    ],
    correctAnswer: 0,
    explanation: 'According to ANSI Z80.1 standards, for a pair of glasses with the distance PD matching the frame PD (no decentration), the maximum permissible horizontal prism imbalance is 0.33Δ. This ensures comfortable binocular vision without unwanted prismatic effects.',
    category: 'regulations',
    subcategory: 'basic-standards',
    difficulty: 'hard'
  },
  {
    id: 'quiz-regulations-016',
    question: 'What record keeping is typically required for dispensing prescription eyewear?',
    options: [
      'No records need to be kept',
      'Only the patient\'s name and date of service',
      'Prescription information, lens and frame details, measurements, and fees',
      'Only the prescribing doctor\'s information'
    ],
    correctAnswer: 2,
    explanation: 'When dispensing prescription eyewear, comprehensive records should be kept including prescription information, lens and frame details, measurements (PD, seg heights, etc.), services provided, fees charged, and patient/doctor information. Most states have regulations specifying record retention periods.',
    category: 'regulations',
    subcategory: 'basic-standards',
    difficulty: 'medium'
  },
  
  // Safety Eyewear
  {
    id: 'quiz-regulations-017',
    question: 'What standard governs occupational and educational eye and face protection?',
    options: [
      'ANSI Z80.1',
      'ANSI Z80.3',
      'ANSI Z87.1',
      'ANSI Z97.1'
    ],
    correctAnswer: 2,
    explanation: 'ANSI Z87.1 is the American National Standard for Occupational and Educational Eye and Face Protection. It sets the criteria for the design, manufacturing, testing, and use of eye protection devices, including spectacles, goggles, and face shields used in workplace and school environments.',
    category: 'regulations',
    subcategory: 'safety-eyewear',
    difficulty: 'easy'
  },
  {
    id: 'quiz-regulations-018',
    question: 'What marking indicates a safety frame that meets the ANSI Z87.1 high impact standard?',
    options: [
      'Z87',
      'Z87+',
      'Z87-2',
      'S87'
    ],
    correctAnswer: 1,
    explanation: 'The marking "Z87+" indicates a safety frame that meets the ANSI Z87.1 high impact standard. The plus sign specifically denotes high impact protection, while a plain "Z87" marking indicates basic impact protection.',
    category: 'regulations',
    subcategory: 'safety-eyewear',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulations-019',
    question: 'What is required for prescription safety eyewear according to ANSI Z87.1?',
    options: [
      'Glass lenses with a minimum thickness of 3mm',
      'Impact-resistant lenses and frames that both meet ANSI Z87.1 standards',
      'Regular frames with polycarbonate lenses',
      'Any prescription lenses as long as they pass the drop ball test'
    ],
    correctAnswer: 1,
    explanation: 'According to ANSI Z87.1, prescription safety eyewear requires both impact-resistant lenses and frames that meet ANSI Z87.1 standards. Both components must be Z87-rated, and for high-impact applications, they must be Z87+ rated. Regular dress frames with impact-resistant lenses are not sufficient.',
    category: 'regulations',
    subcategory: 'safety-eyewear',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulations-020',
    question: 'What is the key difference between "basic impact" and "high impact" safety eyewear?',
    options: [
      'Basic impact is for casual use, high impact is for workplace use',
      'Basic impact is tested with a drop ball test, high impact undergoes more rigorous testing',
      'Basic impact is for indoor use, high impact is for outdoor use',
      'Basic impact is cheaper, high impact is more expensive'
    ],
    correctAnswer: 1,
    explanation: 'The key difference between "basic impact" and "high impact" safety eyewear is the testing criteria. Basic impact protection (Z87) includes the drop ball test, while high impact protection (Z87+) undergoes additional rigorous testing including high-velocity impact tests with projectiles at different speeds and a high mass impact test.',
    category: 'regulations',
    subcategory: 'safety-eyewear',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulations-021',
    question: 'What does the marking "D3" indicate on safety eyewear?',
    options: [
      'It is suitable for protecting against dust',
      'It is suitable for protecting against droplets and splashes',
      'It is suitable for protection against fine dust',
      'It has a minimum thickness of 3mm'
    ],
    correctAnswer: 1,
    explanation: 'The marking "D3" on safety eyewear indicates it is suitable for protecting against droplets and splashes. This designation is important in chemical, biological, or medical environments where liquid hazards may exist.',
    category: 'regulations',
    subcategory: 'safety-eyewear',
    difficulty: 'hard'
  },
  {
    id: 'quiz-regulations-022',
    question: 'What is a sideshield in safety eyewear?',
    options: [
      'A decorative element added to safety frames',
      'A protective extension that shields the eye from side hazards',
      'A special coating on the side of lenses',
      'The hinges of safety frames'
    ],
    correctAnswer: 1,
    explanation: 'A sideshield in safety eyewear is a protective extension that shields the eye from hazards approaching from the side. ANSI Z87.1 requires safety spectacles to have permanent or removable sideshields that provide lateral protection from flying objects, particles, or splashes.',
    category: 'regulations',
    subcategory: 'safety-eyewear',
    difficulty: 'easy'
  },
  {
    id: 'quiz-regulations-023',
    question: 'When are detachable sideshields allowed for safety eyewear?',
    options: [
      'Never, sideshields must always be permanent',
      'Only in low-risk environments',
      'Only if the manufacturer has designed the frame to accept them and they meet ANSI Z87.1 when attached',
      'Anytime, as long as they are provided to the wearer'
    ],
    correctAnswer: 2,
    explanation: 'Detachable sideshields are allowed for safety eyewear only if the manufacturer has specifically designed the frame to accept them and the complete assembly meets ANSI Z87.1 standards when the sideshields are attached. The sideshields must be secure and not easily dislodged during use.',
    category: 'regulations',
    subcategory: 'safety-eyewear',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulations-024',
    question: 'Which of the following markings on safety eyewear indicates protection against optical radiation?',
    options: [
      'Z87+',
      'D4',
      'U2',
      'W'
    ],
    correctAnswer: 2,
    explanation: 'The marking "U2" on safety eyewear indicates protection against optical radiation, specifically ultraviolet (UV) radiation. The number indicates the scale number or shade designation. Different scale numbers are available for different levels of protection against various types of optical radiation.',
    category: 'regulations',
    subcategory: 'safety-eyewear',
    difficulty: 'hard'
  },
  {
    id: 'quiz-regulations-025',
    question: 'According to OSHA regulations, who is responsible for ensuring employees use appropriate eye protection?',
    options: [
      'The employee only',
      'The employer only',
      'The eyewear manufacturer',
      'OSHA inspectors'
    ],
    correctAnswer: 1,
    explanation: 'According to OSHA regulations, the employer is responsible for ensuring employees use appropriate eye protection. Employers must provide suitable eye protection for work environments with eye hazards, ensure it is properly used and maintained, and replace damaged equipment as needed.',
    category: 'regulations',
    subcategory: 'safety-eyewear',
    difficulty: 'easy'
  }
]; 