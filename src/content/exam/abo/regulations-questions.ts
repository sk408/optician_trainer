import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * ABO Exam Questions: Regulations and Standards
 * 
 * Topics covered:
 * - Industry Standards and Tolerances
 * - Safety and Compliance Requirements
 * - Record Keeping and Prescription Requirements
 */

export const regulationsQuestions: ExamQuestion[] = [
  // Industry Standards and Tolerances
  {
    id: 'abo-reg-001',
    question: 'Which organization publishes the Z80.1 standard for prescription ophthalmic lenses?',
    options: [
      'FDA',
      'ANSI',
      'OSHA',
      'ISO'
    ],
    correctAnswer: 1,
    explanation: 'The American National Standards Institute (ANSI) publishes the Z80.1 standard for prescription ophthalmic lenses. This standard defines the tolerances and requirements for prescription spectacle lenses in the United States.',
    category: 'regulations',
    subcategory: 'industry-standards',
    difficulty: 'easy'
  },
  {
    id: 'abo-reg-002',
    question: 'According to ANSI Z80.1, what is the tolerance for cylinder power when the prescription is -2.00D?',
    options: [
      '±0.05D',
      '±0.13D',
      '±0.25D',
      '±0.50D'
    ],
    correctAnswer: 1,
    explanation: 'According to ANSI Z80.1, the tolerance for cylinder power when the prescription is -2.00D is ±0.13D. This standard ensures that finished lenses provide appropriate vision correction within acceptable limits.',
    category: 'regulations',
    subcategory: 'industry-standards',
    difficulty: 'medium'
  },
  {
    id: 'abo-reg-003',
    question: 'What is the maximum vertical prismatic imbalance permitted by ANSI for a bifocal at the reading level?',
    options: [
      '0.33 prism diopters',
      '0.5 prism diopters',
      '1.0 prism diopters',
      '2.0 prism diopters'
    ],
    correctAnswer: 2,
    explanation: 'The maximum vertical prismatic imbalance permitted by ANSI for a bifocal at the reading level is 1.0 prism diopters. This standard helps ensure comfortable binocular vision when using the near segment of bifocal lenses.',
    category: 'regulations',
    subcategory: 'industry-standards',
    difficulty: 'medium'
  },
  {
    id: 'abo-reg-004',
    question: 'Which ANSI standard governs the impact resistance requirements for dress ophthalmic lenses?',
    options: [
      'Z80.1',
      'Z80.3',
      'Z87.1',
      'Z97.1'
    ],
    correctAnswer: 0,
    explanation: 'ANSI Z80.1 governs the impact resistance requirements for dress ophthalmic lenses. This standard specifies that all prescription lenses must meet minimum impact resistance requirements, typically through drop ball testing.',
    category: 'regulations',
    subcategory: 'industry-standards',
    difficulty: 'medium'
  },
  {
    id: 'abo-reg-005',
    question: 'What is the minimum size steel ball used in the drop ball test for dress eyewear?',
    options: [
      '1/2 inch (12.7mm)',
      '5/8 inch (15.9mm)',
      '3/4 inch (19.0mm)',
      '1 inch (25.4mm)'
    ],
    correctAnswer: 0,
    explanation: 'The minimum size steel ball used in the drop ball test for dress eyewear is 1/2 inch (12.7mm). The ball is dropped from a height of 50 inches onto the horizontal lens surface to test impact resistance.',
    category: 'regulations',
    subcategory: 'industry-standards',
    difficulty: 'medium'
  },
  {
    id: 'abo-reg-006',
    question: 'What ANSI standard applies to non-prescription sunglasses and fashion eyewear?',
    options: [
      'Z80.1',
      'Z80.3',
      'Z87.1',
      'Z97.1'
    ],
    correctAnswer: 1,
    explanation: 'ANSI Z80.3 applies to non-prescription sunglasses and fashion eyewear. This standard covers requirements for non-prescription sunglasses and fashion eyewear, including optical quality, impact resistance, and UV protection.',
    category: 'regulations',
    subcategory: 'industry-standards',
    difficulty: 'easy'
  },
  {
    id: 'abo-reg-007',
    question: 'What is the ANSI Z80.1 tolerance for axis orientation on a -3.00D cylinder prescription?',
    options: [
      '±2 degrees',
      '±3 degrees',
      '±5 degrees',
      '±7 degrees'
    ],
    correctAnswer: 1,
    explanation: 'The ANSI Z80.1 tolerance for axis orientation on a -3.00D cylinder prescription is ±3 degrees. The tolerance for axis varies based on the cylinder power, with higher cylinder powers having stricter tolerances.',
    category: 'regulations',
    subcategory: 'industry-standards',
    difficulty: 'hard'
  },
  
  // Safety and Compliance Requirements
  {
    id: 'abo-reg-008',
    question: 'Which federal agency regulates prescription eyewear as medical devices?',
    options: [
      'FDA',
      'FTC',
      'CDC',
      'OSHA'
    ],
    correctAnswer: 0,
    explanation: 'The Food and Drug Administration (FDA) regulates prescription eyewear as medical devices. Under FDA regulations, prescription lenses, frames sold with prescription lenses, and contact lenses are classified as medical devices.',
    category: 'regulations',
    subcategory: 'safety-requirements',
    difficulty: 'easy'
  },
  {
    id: 'abo-reg-009',
    question: 'What regulation requires that all prescription lenses dispensed in the United States be impact-resistant?',
    options: [
      'OSHA 29 CFR 1910.133',
      'FDA 21 CFR 801.410',
      'ANSI Z87.1',
      'FTC 16 CFR 456'
    ],
    correctAnswer: 1,
    explanation: 'FDA 21 CFR 801.410 requires that all prescription lenses dispensed in the United States be impact-resistant. This regulation was implemented to minimize eye injuries from lens breakage during normal use.',
    category: 'regulations',
    subcategory: 'safety-requirements',
    difficulty: 'medium'
  },
  {
    id: 'abo-reg-010',
    question: 'Which of the following lenses is exempt from FDA impact resistance testing requirements?',
    options: [
      'Polycarbonate lenses',
      'CR-39 lenses',
      'Glass lenses thicker than 3.0 mm',
      'None of the above - all must be tested'
    ],
    correctAnswer: 2,
    explanation: 'Glass lenses thicker than 3.0 mm are exempt from FDA impact resistance testing requirements. The FDA recognizes that these thicker glass lenses inherently meet or exceed the impact resistance requirements without individual testing.',
    category: 'regulations',
    subcategory: 'safety-requirements',
    difficulty: 'hard'
  },
  {
    id: 'abo-reg-011',
    question: 'What must be included on the frame of safety eyewear that complies with ANSI Z87.1?',
    options: [
      'Price tag',
      'Manufacturing date',
      'Manufacturer\'s mark and "Z87" mark',
      'OSHA certification number'
    ],
    correctAnswer: 2,
    explanation: 'Safety eyewear that complies with ANSI Z87.1 must include the manufacturer\'s mark and "Z87" mark on the frame. Additional markings may be present for specific types of protection (e.g., "+" for high impact).',
    category: 'regulations',
    subcategory: 'safety-requirements',
    difficulty: 'medium'
  },
  {
    id: 'abo-reg-012',
    question: 'What is required by the FTC Eyeglass Rule?',
    options: [
      'All opticians must be licensed',
      'Eyewear must be returned within 30 days',
      'Patients must receive a copy of their eyeglass prescription',
      'All eyeglasses must have anti-reflective coating'
    ],
    correctAnswer: 2,
    explanation: 'The FTC Eyeglass Rule requires that patients receive a copy of their eyeglass prescription after an eye examination. This rule ensures patients can comparison shop for eyewear without being restricted to purchasing from their prescriber.',
    category: 'regulations',
    subcategory: 'safety-requirements',
    difficulty: 'medium'
  },
  {
    id: 'abo-reg-013',
    question: 'Which of the following materials automatically meets FDA impact resistance requirements without testing?',
    options: [
      'Crown glass',
      'Polycarbonate',
      'CR-39',
      'High-index plastic'
    ],
    correctAnswer: 1,
    explanation: 'Polycarbonate automatically meets FDA impact resistance requirements without testing. Due to its inherent impact resistance properties, the FDA exempts polycarbonate lenses from individual impact testing.',
    category: 'regulations',
    subcategory: 'safety-requirements',
    difficulty: 'medium'
  },
  {
    id: 'abo-reg-014',
    question: 'What is required for prescription sunglasses regarding UV protection?',
    options: [
      'All prescription sunglasses must block 100% of UVA and UVB',
      'There is no federal requirement for UV protection in prescription sunglasses',
      'Only glass prescription sunglasses must have UV protection',
      'UV protection is only required for children\'s prescription sunglasses'
    ],
    correctAnswer: 1,
    explanation: 'There is no federal requirement for UV protection in prescription sunglasses. While UV protection is recommended and commonly included, neither the FDA nor ANSI standards mandate specific levels of UV protection for prescription sunglasses.',
    category: 'regulations',
    subcategory: 'safety-requirements',
    difficulty: 'medium'
  },
  
  // Record Keeping and Prescription Requirements
  {
    id: 'abo-reg-015',
    question: 'According to the FTC Eyeglass Rule, how long must a prescriber maintain records of eye examinations?',
    options: [
      '1 year',
      '2 years',
      '3 years',
      'The FTC does not specify a retention period'
    ],
    correctAnswer: 3,
    explanation: 'The FTC Eyeglass Rule does not specify a record retention period for eye examinations. However, state laws and other regulations may require retention for specific periods, which opticians should follow.',
    category: 'regulations',
    subcategory: 'record-keeping',
    difficulty: 'hard'
  },
  {
    id: 'abo-reg-016',
    question: 'What is the minimum expiration date that must be included on an eyeglass prescription according to the FTC?',
    options: [
      'There is no minimum requirement',
      '6 months',
      '1 year',
      '2 years'
    ],
    correctAnswer: 0,
    explanation: 'The FTC does not specify a minimum expiration date for eyeglass prescriptions. State laws may establish minimum expiration periods, but there is no federal minimum requirement under the FTC Eyeglass Rule.',
    category: 'regulations',
    subcategory: 'record-keeping',
    difficulty: 'medium'
  },
  {
    id: 'abo-reg-017',
    question: 'Which of the following must be included on an eyeglass prescription according to the FTC Eyeglass Rule?',
    options: [
      'Patient\'s PD (pupillary distance)',
      'Frame size and model',
      'Lens material recommendation',
      'Prescriber\'s name, address, and signature'
    ],
    correctAnswer: 3,
    explanation: 'Under the FTC Eyeglass Rule, an eyeglass prescription must include the prescriber\'s name, address, and signature. The rule does not require inclusion of PD, frame information, or lens material recommendations, although some states may have additional requirements.',
    category: 'regulations',
    subcategory: 'record-keeping',
    difficulty: 'medium'
  },
  {
    id: 'abo-reg-018',
    question: 'What record-keeping method is required by the FDA for tracking impact resistance testing of prescription lenses?',
    options: [
      'Electronic records in an FDA-approved system',
      'Written logs certified by an optometrist',
      'Records of the tests performed or a statement of certification from the manufacturer',
      'Video recordings of all impact resistance tests'
    ],
    correctAnswer: 2,
    explanation: 'The FDA requires records of impact resistance tests performed or a statement of certification from the manufacturer. These records must be kept for at least three years by the person or firm dispensing the lenses.',
    category: 'regulations',
    subcategory: 'record-keeping',
    difficulty: 'medium'
  },
  {
    id: 'abo-reg-019',
    question: 'According to HIPAA regulations, what must an optical shop do with patient health information?',
    options: [
      'Share it only with other optical businesses',
      'Protect it according to Privacy Rule requirements',
      'Post it publicly to ensure transparency',
      'Delete it after dispensing eyewear'
    ],
    correctAnswer: 1,
    explanation: 'Under HIPAA regulations, an optical shop must protect patient health information according to Privacy Rule requirements. This includes implementing safeguards to protect patient information and limiting disclosures to those permitted by the regulations.',
    category: 'regulations',
    subcategory: 'record-keeping',
    difficulty: 'medium'
  },
  {
    id: 'abo-reg-020',
    question: 'What is required for an optical shop to legally fill an eyeglass prescription?',
    options: [
      'The prescription must be from an in-state doctor only',
      'The prescription must be current and valid',
      'The patient must purchase frames from the same location',
      'The prescription must be written on a specific form'
    ],
    correctAnswer: 1,
    explanation: 'For an optical shop to legally fill an eyeglass prescription, the prescription must be current and valid (not expired). Optical shops cannot require that patients purchase frames from their location or limit prescriptions to in-state doctors only.',
    category: 'regulations',
    subcategory: 'record-keeping',
    difficulty: 'easy'
  },
  {
    id: 'abo-reg-021',
    question: 'Which of the following is NOT typically included in a spectacle prescription?',
    options: [
      'Sphere power',
      'Cylinder power and axis',
      'Pantoscopic tilt',
      'Add power (if needed)'
    ],
    correctAnswer: 2,
    explanation: 'Pantoscopic tilt is NOT typically included in a spectacle prescription. It is a frame adjustment parameter determined during dispensing, not a refractive component of the prescription. Standard prescriptions include sphere power, cylinder power and axis, and add power if needed.',
    category: 'regulations',
    subcategory: 'record-keeping',
    difficulty: 'easy'
  },
  {
    id: 'abo-reg-022',
    question: 'What is the primary purpose of maintaining records of dispensed prescription eyewear?',
    options: [
      'To facilitate marketing of new products',
      'To comply with tax regulations',
      'To document the exact specifications provided to the patient',
      'To satisfy frame manufacturer warranties'
    ],
    correctAnswer: 2,
    explanation: 'The primary purpose of maintaining records of dispensed prescription eyewear is to document the exact specifications provided to the patient. These records are essential for addressing any issues with the eyewear, making duplicates, and demonstrating compliance with the prescription.',
    category: 'regulations',
    subcategory: 'record-keeping',
    difficulty: 'easy'
  }
]; 