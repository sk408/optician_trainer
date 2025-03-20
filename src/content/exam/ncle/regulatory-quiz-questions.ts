import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * NCLE Quiz Questions: Regulatory and Standards
 * 
 * Topics covered:
 * - Contact Lens Regulations
 * - Contact Lens Standards
 * - Documentation Requirements
 */

export const regulatoryQuizQuestions: ExamQuestion[] = [
  // Contact Lens Regulations
  {
    id: 'quiz-regulatory-001',
    question: 'Under the Fairness to Contact Lens Consumers Act (FCLCA), how long is a contact lens prescription valid?',
    options: [
      '6 months',
      '1 year',
      'It depends on state law',
      'There is no federal time limit'
    ],
    correctAnswer: 2,
    explanation: 'Under the FCLCA, the expiration date of a contact lens prescription is determined by state law. The FCLCA does not set a specific expiration period but defers to state regulations, which typically range from 1-2 years depending on the state.',
    category: 'regulatory',
    subcategory: 'cl-regulations',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulatory-002',
    question: 'What information MUST be included on a valid contact lens prescription according to federal law?',
    options: [
      'Only brand name and parameters',
      'Only power and base curve',
      'Patient name, examination date, prescriber info, power, material/brand, and expiration',
      'Just the prescriber\'s signature and lens power'
    ],
    correctAnswer: 2,
    explanation: 'A valid contact lens prescription must include: the patient\'s name, the examination date, the issue date (if different from exam date), the prescriber\'s name, address, phone number, and license number, the power, material and/or manufacturer, base curve/diameter (if applicable), and the expiration date.',
    category: 'regulatory',
    subcategory: 'cl-regulations',
    difficulty: 'easy'
  },
  {
    id: 'quiz-regulatory-003',
    question: 'What is the maximum time a seller has to verify a contact lens prescription before filling an order?',
    options: [
      '8 business hours',
      '24 hours',
      '48 hours',
      '8 business hours plus a reasonable time to communicate with the prescriber'
    ],
    correctAnswer: 3,
    explanation: 'Under the FCLCA, a seller has 8 business hours plus a reasonable time to communicate with the prescriber to verify a prescription. If the prescriber doesn\'t respond within that timeframe, the prescription is considered verified, and the seller may proceed with filling the order.',
    category: 'regulatory',
    subcategory: 'cl-regulations',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulatory-004',
    question: 'Under the Contact Lens Rule, what is "passive verification"?',
    options: [
      'When a patient verbally confirms their prescription',
      'When a seller can fill an order if the prescriber fails to respond to a verification request within a set timeframe',
      'When a seller keeps a copy of the patient\'s original prescription',
      'When a prescriber verifies a prescription over the phone'
    ],
    correctAnswer: 1,
    explanation: 'Under the Contact Lens Rule, "passive verification" occurs when a seller can fill an order if the prescriber fails to respond to a properly communicated verification request within 8 business hours (plus reasonable communication time). This allows sales to proceed if prescribers are unavailable or unresponsive.',
    category: 'regulatory',
    subcategory: 'cl-regulations',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulatory-005',
    question: 'Which federal agency enforces the Fairness to Contact Lens Consumers Act?',
    options: [
      'Food and Drug Administration (FDA)',
      'Federal Trade Commission (FTC)',
      'Centers for Medicare & Medicaid Services (CMS)',
      'Consumer Product Safety Commission (CPSC)'
    ],
    correctAnswer: 1,
    explanation: 'The Federal Trade Commission (FTC) enforces the Fairness to Contact Lens Consumers Act (FCLCA) and the Contact Lens Rule. The FTC is responsible for consumer protection and preventing anti-competitive business practices in the marketplace.',
    category: 'regulatory',
    subcategory: 'cl-regulations',
    difficulty: 'easy'
  },
  
  // Contact Lens Standards
  {
    id: 'quiz-regulatory-006',
    question: 'Which organization classifies contact lenses into FDA groups?',
    options: [
      'American National Standards Institute (ANSI)',
      'Food and Drug Administration (FDA)',
      'International Organization for Standardization (ISO)',
      'American Academy of Ophthalmology (AAO)'
    ],
    correctAnswer: 1,
    explanation: 'The Food and Drug Administration (FDA) classifies contact lenses into groups based on their physical and chemical properties. These classifications are used to determine the appropriate testing and approval processes for different types of contact lenses.',
    category: 'regulatory',
    subcategory: 'cl-standards',
    difficulty: 'easy'
  },
  {
    id: 'quiz-regulatory-007',
    question: 'How are soft contact lenses classified by the FDA?',
    options: [
      'By water content and ionic content',
      'By thickness and color',
      'By manufacturer and brand',
      'By prescription power only'
    ],
    correctAnswer: 0,
    explanation: 'The FDA classifies soft contact lenses into four groups based on water content and ionic content: Group I (low water, non-ionic), Group II (high water, non-ionic), Group III (low water, ionic), and Group IV (high water, ionic). The dividing line between low and high water content is 50%.',
    category: 'regulatory',
    subcategory: 'cl-standards',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulatory-008',
    question: 'What does ISO 18369 primarily address?',
    options: [
      'Contact lens care products',
      'Ophthalmic optics and contact lenses specifications',
      'Packaging and labeling of contact lenses',
      'Contact lens manufacturing facilities'
    ],
    correctAnswer: 1,
    explanation: 'ISO 18369 primarily addresses ophthalmic optics and contact lens specifications. This international standard provides guidelines for terminology, tolerances, measurement methods, classification systems, and other technical specifications for contact lenses to ensure quality and consistency across manufacturers.',
    category: 'regulatory',
    subcategory: 'cl-standards',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulatory-009',
    question: 'What is the FDA classification for contact lenses as medical devices?',
    options: [
      'Class I (low risk)',
      'Class II (moderate risk)',
      'Class III (high risk)',
      'Class IV (extreme risk)'
    ],
    correctAnswer: 1,
    explanation: 'The FDA classifies contact lenses as Class II medical devices (moderate risk). This classification requires special controls including performance standards, post-market surveillance, patient registries, and special labeling requirements to provide reasonable assurance of safety and effectiveness.',
    category: 'regulatory',
    subcategory: 'cl-standards',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulatory-010',
    question: 'What is required for a new contact lens material to receive FDA approval?',
    options: [
      'Only laboratory testing data',
      'Testing data and a 510(k) submission showing substantial equivalence to an existing device',
      'Just a manufacturer declaration of safety',
      'Only clinical trials with at least 1,000 subjects'
    ],
    correctAnswer: 1,
    explanation: 'For a new contact lens material to receive FDA approval, manufacturers typically need to submit testing data and a 510(k) premarket notification demonstrating that the lens is substantially equivalent to a legally marketed device. This includes data on physical properties, biocompatibility, microbiology, toxicology, shelf life, and clinical performance.',
    category: 'regulatory',
    subcategory: 'cl-standards',
    difficulty: 'medium'
  },
  
  // Documentation Requirements
  {
    id: 'quiz-regulatory-011',
    question: 'Which of the following must be documented during a contact lens fitting according to standard of care?',
    options: [
      'Only the final prescription',
      'Only lens parameters and visual acuity',
      'Comprehensive findings including lens fit, visual acuity, over-refraction, and ocular health',
      'Just the brand and power of lenses dispensed'
    ],
    correctAnswer: 2,
    explanation: 'Standard of care requires documentation of comprehensive findings during a contact lens fitting, including: lens parameters (base curve, diameter, power, material), fit assessment (centration, movement, coverage), visual acuity with lenses, over-refraction results, ocular health evaluation, and patient education provided.',
    category: 'regulatory',
    subcategory: 'cl-documentation',
    difficulty: 'easy'
  },
  {
    id: 'quiz-regulatory-012',
    question: 'How long should contact lens patient records typically be maintained according to best practices?',
    options: [
      '1 year',
      '3 years',
      'At least 7-10 years depending on state requirements',
      'Only until the prescription expires'
    ],
    correctAnswer: 2,
    explanation: 'Contact lens patient records should typically be maintained for at least 7-10 years, though specific requirements vary by state. Some states require longer retention periods, especially for minors (often until age 21 or longer). Best practices suggest keeping records as long as legally required plus the statute of limitations for malpractice claims in your state.',
    category: 'regulatory',
    subcategory: 'cl-documentation',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulatory-013',
    question: 'What must be documented when a patient discontinues contact lens wear due to a complication?',
    options: [
      'Only that the patient stopped wearing lenses',
      'Just the date of discontinuation',
      'Detailed information about the complication, treatment, recommendations, and patient education',
      'Only a recommendation to return to glasses'
    ],
    correctAnswer: 2,
    explanation: 'When a patient discontinues contact lens wear due to a complication, documentation should include detailed information about: the nature and severity of the complication, clinical findings and diagnosis, treatment provided or recommended, advice given to the patient, patient\'s understanding and compliance, follow-up plans, and any referrals made. This thorough documentation is essential for patient care and risk management.',
    category: 'regulatory',
    subcategory: 'cl-documentation',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulatory-014',
    question: 'What is required when documenting contact lens instruction for a new wearer?',
    options: [
      'Just a notation that instruction was provided',
      'Only the type of cleaning solution recommended',
      'Detailed documentation of all aspects of lens care and handling instruction',
      'Only a signature from the patient'
    ],
    correctAnswer: 2,
    explanation: 'When documenting contact lens instruction for a new wearer, detailed documentation should include: insertion and removal instruction and demonstration, cleaning and disinfection procedures, wearing schedule guidance, warnings about sleeping in lenses (if not approved), signs/symptoms requiring immediate attention, replacement schedule, and confirmation of patient understanding (often with a signed acknowledgment form).',
    category: 'regulatory',
    subcategory: 'cl-documentation',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulatory-015',
    question: 'Which of the following is NOT typically required when documenting a contact lens follow-up visit?',
    options: [
      'Lens comfort assessment',
      'Visual acuity with lenses',
      'Ocular health evaluation',
      'Patient\'s family medical history'
    ],
    correctAnswer: 3,
    explanation: 'A patient\'s family medical history is NOT typically required when documenting a contact lens follow-up visit. While the family history is important during comprehensive examinations, follow-up visits typically focus on lens performance, comfort, wearing time, vision, compliance with care regimens, and ocular health assessment.',
    category: 'regulatory',
    subcategory: 'cl-documentation',
    difficulty: 'easy'
  },
  {
    id: 'quiz-regulatory-016',
    question: 'According to HIPAA regulations, what must happen before contact lens information is shared with a third-party seller?',
    options: [
      'Nothing, prescription information can always be shared',
      'Patient authorization must be obtained',
      'Information can only be faxed, never electronically transmitted',
      'A written explanation must be provided to the patient'
    ],
    correctAnswer: 1,
    explanation: 'According to HIPAA regulations, patient authorization must be obtained before sharing contact lens information with a third-party seller, except when required by law (such as responding to a proper verification request under the FCLCA). This authorization should specify what information will be disclosed, to whom, and for what purpose.',
    category: 'regulatory',
    subcategory: 'cl-regulations',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulatory-017',
    question: 'What must be included in patient records when "off-label" contact lens use is prescribed?',
    options: [
      'Nothing special, same as regular prescribing',
      'Only a notation that it\'s off-label',
      'Detailed informed consent documentation including risks, benefits, and alternatives',
      'Only manufacturer information'
    ],
    correctAnswer: 2,
    explanation: 'When prescribing "off-label" contact lens use (such as extended wear of daily wear lenses or overnight orthokeratology), detailed informed consent documentation must be included in patient records. This should cover: the fact that it\'s off-label, specific risks involved, potential benefits, available alternatives, patient questions and understanding, and often a signed informed consent form.',
    category: 'regulatory',
    subcategory: 'cl-documentation',
    difficulty: 'hard'
  },
  {
    id: 'quiz-regulatory-018',
    question: 'Under the Contact Lens Rule, what notification must prescribers provide to patients?',
    options: [
      'Information about lens care only',
      'Notice that patients are entitled to a copy of their prescription',
      'Details about where to purchase contact lenses',
      'Information about vision insurance coverage'
    ],
    correctAnswer: 1,
    explanation: 'Under the Contact Lens Rule, prescribers must provide patients with notice that they are entitled to a copy of their contact lens prescription. This notification must be given to the patient at the completion of the contact lens fitting, and the prescriber must keep records of this notification for at least three years.',
    category: 'regulatory',
    subcategory: 'cl-regulations',
    difficulty: 'easy'
  },
  {
    id: 'quiz-regulatory-019',
    question: 'Which of the following is a key requirement for documenting the release of contact lens trial lenses to patients?',
    options: [
      'Trial lenses don\'t need to be documented',
      'Only the brand needs to be recorded',
      'Complete parameters, lot number, expiration date, and instructions must be documented',
      'Only a signature from the patient is required'
    ],
    correctAnswer: 2,
    explanation: 'When documenting the release of contact lens trial lenses to patients, complete documentation should include: lens parameters (brand, material, power, base curve, diameter), lot number, expiration date, wearing instructions given, care system recommended, follow-up appointment scheduled, and often a patient signature acknowledging receipt of the lenses and instructions.',
    category: 'regulatory',
    subcategory: 'cl-documentation',
    difficulty: 'medium'
  },
  {
    id: 'quiz-regulatory-020',
    question: 'What does the FDA require regarding the labeling of contact lens packages?',
    options: [
      'Only the brand name is required',
      'Just the expiration date',
      'Comprehensive information including parameters, sterility indication, directions, and warnings',
      'Only the manufacturer name'
    ],
    correctAnswer: 2,
    explanation: 'The FDA requires comprehensive labeling on contact lens packages, including: lens parameters (power, base curve, diameter), material/brand name, sterility indication, expiration date, directions for use, care regimen recommendations, warnings and precautions, storage information, and the manufacturer\'s name and address. This ensures users have complete information for safe use.',
    category: 'regulatory',
    subcategory: 'cl-standards',
    difficulty: 'easy'
  }
]; 