import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * NCLE Exam Questions: Patient Education
 * 
 * Topics covered:
 * - Contact Lens Wear and Care
 * - Lens Replacement Schedules
 * - Recognizing Complications
 */

export const originalPatientEducationQuestions: ExamQuestion[] = [
  // Insertion and Removal Training
  {
    id: 'ncle-edu-001',
    question: 'What is the first step in teaching a new contact lens wearer proper insertion technique?',
    options: [
      'Placing the lens on the eye',
      'Proper hand washing',
      'Checking the lens for defects',
      'Using a mirror'
    ],
    correctAnswer: 1,
    explanation: 'Proper hand washing is the first step in teaching contact lens insertion technique. This fundamental step prevents the introduction of microorganisms and debris that could cause infection or irritation.',
    category: 'patient-education',
    subcategory: 'insertion-removal',
    difficulty: 'easy'
  },
  {
    id: 'ncle-edu-002',
    question: 'What is the recommended method for verifying that a soft contact lens is not inside-out before insertion?',
    options: [
      'The edge should form a perfect circle',
      'The lens should form a bowl shape when placed on a fingertip',
      'The edge should turn outward like a rimmed soup bowl',
      'The lens should form a "taco" shape when gently squeezed'
    ],
    correctAnswer: 2,
    explanation: 'A correctly oriented soft contact lens should form a bowl shape with the edges turning slightly inward. If the lens is inside-out, the edges will turn outward resembling a rimmed soup bowl. This "edge test" helps patients verify proper orientation before insertion.',
    category: 'patient-education',
    subcategory: 'insertion-removal',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-003',
    question: 'Which finger combination is most commonly recommended for RGP lens insertion?',
    options: [
      'Thumb and forefinger',
      'Forefinger and middle finger',
      'Middle finger of both hands',
      'Pinky finger for precise control'
    ],
    correctAnswer: 0,
    explanation: 'The thumb and forefinger (index finger) combination is most commonly recommended for RGP lens insertion. The lens is typically balanced on the fingertip of the index finger or placed between the thumb and index finger during insertion.',
    category: 'patient-education',
    subcategory: 'insertion-removal',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-004',
    question: 'What is the most common issue new contact lens wearers have during the insertion process?',
    options: [
      'Improper hand washing',
      'Blinking or squeezing eyes shut',
      'Using too much solution',
      'Placing the lens on the wrong eye'
    ],
    correctAnswer: 1,
    explanation: 'The most common issue new contact lens wearers have during insertion is blinking or squeezing their eyes shut as the lens approaches. This natural reflex makes insertion difficult and is overcome with practice and proper technique.',
    category: 'patient-education',
    subcategory: 'insertion-removal',
    difficulty: 'easy'
  },
  {
    id: 'ncle-edu-005',
    question: 'What is the safest method for removing a soft contact lens that appears to be stuck to the eye?',
    options: [
      'Immediately remove with tweezers',
      'Apply rewetting drops and wait a few minutes before attempting removal',
      'Rub the eyelid firmly until the lens dislodges',
      'Apply soap and water directly to the eye'
    ],
    correctAnswer: 1,
    explanation: 'When a soft lens appears stuck, applying rewetting drops and waiting a few minutes before attempting removal is the safest method. The drops rehydrate the lens and restore proper movement, making removal easier and safer.',
    category: 'patient-education',
    subcategory: 'insertion-removal',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-006',
    question: 'Which method is recommended for teaching new wearers to remove soft contact lenses?',
    options: [
      'Direct pinch method',
      'Sliding method',
      'Two-finger method',
      'Suction cup removal'
    ],
    correctAnswer: 0,
    explanation: 'The direct pinch method is recommended for teaching new wearers to remove soft contact lenses. This involves sliding the lens to the white of the eye with the index finger, then pinching it gently between the thumb and index finger to remove it.',
    category: 'patient-education',
    subcategory: 'insertion-removal',
    difficulty: 'easy'
  },
  {
    id: 'ncle-edu-007',
    question: 'What is the primary reason for recommending new contact lens wearers to start with the same eye each time during insertion?',
    options: [
      'It simplifies the billing process',
      'To establish a routine and avoid mixing up lenses',
      'To strengthen the dominant eye first',
      'It makes no difference which eye is first'
    ],
    correctAnswer: 1,
    explanation: 'New contact lens wearers are recommended to start with the same eye each time during insertion to establish a consistent routine and avoid mixing up lenses. This reduces errors, particularly with different prescriptions for each eye.',
    category: 'patient-education',
    subcategory: 'insertion-removal',
    difficulty: 'easy'
  },
  {
    id: 'ncle-edu-008',
    question: 'What instruction should be given to a patient who regularly experiences difficulty removing RGP lenses?',
    options: [
      'Use a suction cup for removal',
      'Ensure the lens is mobile on the eye before attempting removal',
      'Remove lenses immediately after waking',
      'Apply pressure directly to the center of the lens'
    ],
    correctAnswer: 1,
    explanation: 'Patients experiencing difficulty removing RGP lenses should ensure the lens is mobile on the eye before attempting removal. If the lens is adhered to the cornea, instilling rewetting drops and waiting for the lens to move freely will make removal easier and prevent corneal trauma.',
    category: 'patient-education',
    subcategory: 'insertion-removal',
    difficulty: 'medium'
  },
  
  // Wear Schedule and Replacement
  {
    id: 'ncle-edu-009',
    question: 'What is the typical initial wearing time recommended for a new RGP contact lens wearer?',
    options: [
      '4 hours on the first day, increasing by 1-2 hours daily',
      'Full-time wear from day one',
      '30 minutes on the first day, doubling each day',
      'Overnight wear to speed adaptation'
    ],
    correctAnswer: 0,
    explanation: 'The typical initial wearing time recommended for a new RGP contact lens wearer is 4 hours on the first day, gradually increasing by 1-2 hours daily. This gradual adaptation schedule allows the cornea to adjust to the lens and minimizes discomfort during the adaptation period.',
    category: 'patient-education',
    subcategory: 'wear-schedule',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-010',
    question: 'What is the maximum recommended daily wear time for standard daily wear soft contact lenses?',
    options: [
      '6-8 hours',
      '10-12 hours',
      '12-14 hours',
      'As long as comfortable, up to 16 hours'
    ],
    correctAnswer: 3,
    explanation: 'The maximum recommended daily wear time for standard daily wear soft contact lenses is generally as long as comfortable, up to 16 hours. However, this varies by individual and lens type, and patients should remove lenses if they experience discomfort or redness.',
    category: 'patient-education',
    subcategory: 'wear-schedule',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-011',
    question: 'Which of the following contact lens types requires the most frequent replacement?',
    options: [
      'Conventional soft lenses',
      'Daily disposable lenses',
      'Bi-weekly replacement lenses',
      'Monthly replacement lenses'
    ],
    correctAnswer: 1,
    explanation: 'Daily disposable lenses require the most frequent replacement, as they are designed to be worn once and then discarded. This frequent replacement schedule offers benefits in terms of convenience, comfort, and eye health by eliminating the need for cleaning and storage.',
    category: 'patient-education',
    subcategory: 'wear-schedule',
    difficulty: 'easy'
  },
  {
    id: 'ncle-edu-012',
    question: 'What should be emphasized to patients regarding the replacement schedule for contact lenses?',
    options: [
      'Lenses can often be worn longer than the manufacturer recommends',
      'The replacement schedule is just a suggestion',
      'Following the prescribed replacement schedule is essential for eye health',
      'Replacement is only necessary when lenses feel uncomfortable'
    ],
    correctAnswer: 2,
    explanation: 'Patients should be emphasized that following the prescribed replacement schedule is essential for eye health. Even if lenses still feel comfortable, protein and lipid deposits, as well as lens deterioration, can lead to complications if replacement schedules are not followed.',
    category: 'patient-education',
    subcategory: 'wear-schedule',
    difficulty: 'easy'
  },
  {
    id: 'ncle-edu-013',
    question: 'What instructions should be given to a patient regarding contact lens wear during an eye infection?',
    options: [
      'Reduce wearing time but continue using the lenses',
      'Switch to a different type of lens temporarily',
      'Discontinue lens wear until the infection resolves and new lenses are dispensed',
      'Clean the lenses more thoroughly and continue wearing'
    ],
    correctAnswer: 2,
    explanation: 'Patients should be instructed to discontinue contact lens wear completely during an eye infection until the infection has fully resolved and, in most cases, new lenses are dispensed. Continuing to wear lenses during an infection can exacerbate the condition and delay healing.',
    category: 'patient-education',
    subcategory: 'wear-schedule',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-014',
    question: 'What should be recommended to a patient who frequently falls asleep while wearing daily wear contact lenses?',
    options: [
      'Use rewetting drops more frequently',
      'Switch to extended wear or continuous wear lenses if appropriate',
      'Clean the lenses more aggressively',
      'Wear the lenses for fewer hours during the day'
    ],
    correctAnswer: 1,
    explanation: 'For a patient who frequently falls asleep while wearing daily wear lenses, switching to FDA-approved extended wear or continuous wear lenses may be appropriate (if no contraindications exist). Daily wear lenses are not designed for overnight wear and can cause serious complications if worn while sleeping.',
    category: 'patient-education',
    subcategory: 'wear-schedule',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-015',
    question: 'What is the recommended replacement schedule for a typical RGP contact lens?',
    options: [
      'Every 1-2 weeks',
      'Every 1-2 months',
      'Every 1-2 years',
      'Every 5 years'
    ],
    correctAnswer: 2,
    explanation: 'The recommended replacement schedule for a typical RGP contact lens is every 1-2 years. However, actual replacement timing depends on lens condition, deposit buildup, changes in prescription, and compliance with care regimens.',
    category: 'patient-education',
    subcategory: 'wear-schedule',
    difficulty: 'medium'
  },
  
  // Follow-up Schedule and Evaluations
  {
    id: 'ncle-edu-016',
    question: 'What is the typical follow-up schedule for a new soft contact lens wearer?',
    options: [
      'One week after dispensing, then annually',
      'One day after dispensing, one week, then annually',
      'One week after dispensing, one month, then annually',
      'Six months after dispensing, then annually'
    ],
    correctAnswer: 2,
    explanation: 'The typical follow-up schedule for a new soft contact lens wearer is one week after dispensing to assess initial adaptation, then one month to ensure stable fit and comfort, followed by annual evaluations. This schedule may be adjusted based on individual patient needs and risk factors.',
    category: 'patient-education',
    subcategory: 'follow-up-care',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-017',
    question: 'Which of the following is NOT typically evaluated during a contact lens follow-up examination?',
    options: [
      'Lens fit and movement',
      'Corneal integrity',
      'Visual acuity',
      'Color vision changes'
    ],
    correctAnswer: 3,
    explanation: 'Color vision changes are not typically evaluated during routine contact lens follow-up examinations unless there is a specific concern. Standard evaluations include lens fit and movement, corneal integrity, visual acuity, comfort assessment, and compliance with care regimens.',
    category: 'patient-education',
    subcategory: 'follow-up-care',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-018',
    question: 'Why is corneal topography often performed during follow-up visits for RGP lens wearers?',
    options: [
      'To determine if the prescription has changed',
      'To evaluate for corneal warpage or irregularities',
      'To measure pupil size in different lighting conditions',
      'To check for color vision deficiencies'
    ],
    correctAnswer: 1,
    explanation: 'Corneal topography is often performed during follow-up visits for RGP lens wearers to evaluate for corneal warpage or irregularities that may develop from lens wear. This technology can detect subtle changes in corneal shape that might not be visible during standard examination.',
    category: 'patient-education',
    subcategory: 'follow-up-care',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-019',
    question: 'What should be documented at each contact lens follow-up visit?',
    options: [
      'Only visual acuity with lenses',
      'Only adverse reactions or complications',
      'Lens fit, comfort, wearing time, care compliance, and ocular health',
      'Only changes to the prescription'
    ],
    correctAnswer: 2,
    explanation: 'At each contact lens follow-up visit, lens fit, comfort, wearing time, care compliance, and ocular health should be documented. This comprehensive documentation provides a record of the patient\'s contact lens experience and helps identify potential issues early.',
    category: 'patient-education',
    subcategory: 'follow-up-care',
    difficulty: 'easy'
  },
  {
    id: 'ncle-edu-020',
    question: 'What is the primary purpose of fluorescein evaluation during RGP follow-up examinations?',
    options: [
      'To identify corneal staining and assess lens fit',
      'To measure intraocular pressure',
      'To evaluate the crystalline lens',
      'To determine tear film quality'
    ],
    correctAnswer: 0,
    explanation: 'The primary purpose of fluorescein evaluation during RGP follow-up examinations is to identify corneal staining, which may indicate epithelial damage, and to assess lens fit through fluorescein pattern analysis. This evaluation is crucial for ensuring proper lens-cornea relationship.',
    category: 'patient-education',
    subcategory: 'follow-up-care',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-021',
    question: 'When should a patient be instructed to seek immediate care between scheduled follow-up visits?',
    options: [
      'If they lose a contact lens',
      'If they experience persistent redness, pain, discharge, or decreased vision',
      'If they run out of contact lens solution',
      'If they need to order more lenses'
    ],
    correctAnswer: 1,
    explanation: 'Patients should be instructed to seek immediate care if they experience persistent redness, pain, discharge, or decreased vision, as these symptoms may indicate a serious complication such as infection or corneal ulcer that requires prompt medical attention.',
    category: 'patient-education',
    subcategory: 'follow-up-care',
    difficulty: 'easy'
  },
  {
    id: 'ncle-edu-022',
    question: 'What is the recommended follow-up schedule for an established orthokeratology patient?',
    options: [
      'Every 1-2 weeks',
      'Every 1-2 months',
      'Every 6 months',
      'Every 3-6 months initially, then annually'
    ],
    correctAnswer: 3,
    explanation: 'The recommended follow-up schedule for an established orthokeratology patient is every 3-6 months initially to ensure stable treatment effect and healthy corneal response, then annually for ongoing monitoring. More frequent visits may be needed for younger patients or those with complications.',
    category: 'patient-education',
    subcategory: 'follow-up-care',
    difficulty: 'hard'
  },
  {
    id: 'ncle-edu-023',
    question: 'What is the purpose of reviewing a patient\'s contact lens care routine during follow-up visits?',
    options: [
      'To sell more contact lens solutions',
      'To identify and correct non-compliance issues that may affect ocular health',
      'To satisfy insurance requirements',
      'To extend the examination time'
    ],
    correctAnswer: 1,
    explanation: 'Reviewing a patient\'s contact lens care routine during follow-up visits serves to identify and correct non-compliance issues that may affect ocular health. Many contact lens complications are directly related to improper care, handling, or non-adherence to replacement schedules.',
    category: 'patient-education',
    subcategory: 'follow-up-care',
    difficulty: 'easy'
  }
];

// Adding more patient education questions
export const additionalPatientEducationQuestions: ExamQuestion[] = [
  // Contact Lens Wear and Care
  {
    id: 'ncle-edu-024',
    question: 'When educating a new contact lens wearer about lens insertion, which instruction is most important?',
    options: [
      'Always insert the right lens first',
      'Insert lenses before applying makeup',
      'Wash hands thoroughly before handling lenses',
      'Always use saline solution when inserting lenses'
    ],
    correctAnswer: 2,
    explanation: 'Washing hands thoroughly before handling lenses is the most important instruction for lens insertion. This helps prevent eye infections by removing bacteria, oils, lotions, and other contaminants that could be transferred to the lens and subsequently to the eye.',
    category: 'patient-education',
    subcategory: 'wear-care',
    difficulty: 'easy'
  },
  {
    id: 'ncle-edu-025',
    question: 'What should patients be advised regarding swimming while wearing contact lenses?',
    options: [
      'It\'s safe as long as they use daily disposable lenses',
      'It\'s never recommended due to risk of infection',
      'It\'s acceptable if they use prescription swim goggles over contacts',
      'It\'s safe as long as they use preservative-free rewetting drops afterward'
    ],
    correctAnswer: 1,
    explanation: 'Patients should be advised that swimming while wearing contact lenses is never recommended due to the risk of infection. Water contains microorganisms like Acanthamoeba that can adhere to contact lenses and cause serious eye infections, which can lead to permanent vision loss.',
    category: 'patient-education',
    subcategory: 'wear-care',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-026',
    question: 'When should a patient be instructed to discontinue contact lens wear immediately?',
    options: [
      'When they experience mild dryness',
      'If lens deposits are visible',
      'If they develop eye pain, redness, or vision changes',
      'When they run out of solution'
    ],
    correctAnswer: 2,
    explanation: 'Patients should be instructed to discontinue contact lens wear immediately if they develop eye pain, redness, or vision changes. These symptoms can indicate a potentially serious complication such as microbial keratitis or corneal ulcer, which requires prompt evaluation by an eye care professional.',
    category: 'patient-education',
    subcategory: 'complications',
    difficulty: 'medium'
  },
  
  // Lens Replacement Schedules
  {
    id: 'ncle-edu-027',
    question: 'What should a patient be told about wearing their two-week replacement lenses for an extra week "to save money"?',
    options: [
      'It\'s acceptable if they clean the lenses thoroughly',
      'It\'s fine as long as they use fresh solution daily',
      'It\'s not recommended as it increases risk of complications',
      'It\'s acceptable if they have no history of eye problems'
    ],
    correctAnswer: 2,
    explanation: 'Patients should be told that wearing contact lenses beyond their prescribed replacement schedule is not recommended as it increases the risk of complications. Protein deposits, reduced oxygen permeability, and microbial contamination all increase with extended wear, potentially leading to discomfort, inflammation, and infections.',
    category: 'patient-education',
    subcategory: 'replacement',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-028',
    question: 'What is the most appropriate advice for a patient who reports occasionally falling asleep while wearing their daily wear contact lenses?',
    options: [
      'Switch to extended wear lenses',
      'Apply lubricating drops before removing the lenses',
      'Discontinue lens wear for 24 hours after this occurs',
      'No action needed if it only happens occasionally'
    ],
    correctAnswer: 2,
    explanation: 'The most appropriate advice for a patient who reports occasionally falling asleep in daily wear contact lenses is to discontinue lens wear for 24 hours after this occurs. This allows the cornea to recover from hypoxic stress and reduces the risk of complications. The patient should also be educated about the risks of sleeping in lenses not approved for extended wear.',
    category: 'patient-education',
    subcategory: 'wear-care',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-029',
    question: 'Which statement should be included when educating patients about proper soft contact lens case care?',
    options: [
      'Clean the case once a month with soap and water',
      'Keep the case closed and dry between uses',
      'Rinse with tap water, then air dry face down',
      'Rinse with solution, air dry face up, and replace every 3 months'
    ],
    correctAnswer: 3,
    explanation: 'When educating patients about proper soft contact lens case care, they should be told to rinse the case with fresh solution (not tap water), air dry face up (to avoid contamination), and replace the case every 3 months. This regimen helps prevent biofilm formation and reduces the risk of microbial contamination.',
    category: 'patient-education',
    subcategory: 'wear-care',
    difficulty: 'medium'
  },
  
  // Recognizing Complications
  {
    id: 'ncle-edu-030',
    question: 'What should patients be taught about contact lens discomfort that worsens throughout the day?',
    options: [
      'It\'s normal and expected with all lens types',
      'It indicates they need to switch to a different brand',
      'It could indicate dry eye or deposits on lenses',
      'It means they need to increase their wearing time'
    ],
    correctAnswer: 2,
    explanation: 'Patients should be taught that contact lens discomfort that worsens throughout the day could indicate dry eye or deposits on lenses. This pattern suggests either inadequate tear film quality/quantity or lens surface degradation, both of which can be addressed with appropriate intervention.',
    category: 'patient-education',
    subcategory: 'complications',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-031',
    question: 'When educating patients about Giant Papillary Conjunctivitis (GPC), which symptom should they be advised to watch for?',
    options: [
      'Discharge from the eye',
      'Increased lens awareness and itchiness',
      'Blurred vision only at night',
      'Pain when blinking'
    ],
    correctAnswer: 1,
    explanation: 'When educating patients about Giant Papillary Conjunctivitis (GPC), they should be advised to watch for increased lens awareness and itchiness. This symptom, especially when worse upon lens removal or insertion, is characteristic of GPC, which is an inflammatory reaction to lens deposits or mechanical irritation.',
    category: 'patient-education',
    subcategory: 'complications',
    difficulty: 'medium'
  },
  {
    id: 'ncle-edu-032',
    question: 'What is the most appropriate advice for a new contact lens wearer experiencing mild discomfort?',
    options: [
      'Remove lenses immediately and seek medical attention',
      'This is normal during adaptation; continue gradually increasing wearing time',
      'Apply over-the-counter eye drops designed for red eyes',
      'Switch to a different contact lens brand without consulting their eye care practitioner'
    ],
    correctAnswer: 1,
    explanation: 'For a new contact lens wearer experiencing mild discomfort, the most appropriate advice is that this is normal during adaptation and they should continue gradually increasing wearing time as prescribed. Initial awareness and minor discomfort are common as the eye adjusts to the presence of the lens, but should improve with adaptation.',
    category: 'patient-education',
    subcategory: 'wear-care',
    difficulty: 'easy'
  },
  {
    id: 'ncle-edu-033',
    question: 'Which of the following should be included in patient education about overnight wear of extended wear contact lenses?',
    options: [
      'Extended wear lenses eliminate all risks associated with overnight wear',
      'Extended wear is completely safe if using silicone hydrogel materials',
      'Overnight wear increases the risk of corneal infection compared to daily wear',
      'Patients should only remove lenses once a week for cleaning'
    ],
    correctAnswer: 2,
    explanation: 'Patient education about overnight wear of extended wear contact lenses should include that this modality increases the risk of corneal infection compared to daily wear. Even with silicone hydrogel materials, which provide improved oxygen transmission, studies show a 5-15 times greater risk of microbial keratitis with overnight wear.',
    category: 'patient-education',
    subcategory: 'wear-care',
    difficulty: 'medium'
  }
];

// Combine original and additional questions
export const patientEducationQuestions: ExamQuestion[] = [
  ...originalPatientEducationQuestions,
  ...additionalPatientEducationQuestions
]; 