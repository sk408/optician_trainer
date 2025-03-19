import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * NCLE Exam Questions: Contact Lens Care and Maintenance
 * 
 * Topics covered:
 * - Contact Lens Care Systems
 * - Contact Lens Hygiene
 * - Lens Case Care and Replacement
 */

export const contactLensCareQuestions: ExamQuestion[] = [
  // Contact Lens Care Systems
  {
    id: 'ncle-care-001',
    question: 'What is the primary purpose of a multipurpose solution for soft contact lenses?',
    options: [
      'Disinfection only',
      'Cleaning only',
      'Multiple functions including cleaning, disinfecting, rinsing and storing',
      'Removing protein deposits only'
    ],
    correctAnswer: 2,
    explanation: 'Multipurpose solutions are designed to perform multiple functions including cleaning, disinfecting, rinsing, and storing soft contact lenses in a single solution, offering convenience for contact lens wearers.',
    category: 'cl-care',
    subcategory: 'care-systems',
    difficulty: 'easy'
  },
  {
    id: 'ncle-care-002',
    question: 'Which preservative is commonly found in multipurpose solutions and has been associated with solution sensitivity reactions?',
    options: [
      'Hydrogen peroxide',
      'Polyquaternium-1',
      'PHMB (polyhexamethylene biguanide)',
      'Sodium chloride'
    ],
    correctAnswer: 2,
    explanation: 'PHMB (polyhexamethylene biguanide) is a preservative commonly found in multipurpose solutions that has been associated with solution sensitivity reactions in some patients. These reactions can include redness, irritation, and inflammation.',
    category: 'cl-care',
    subcategory: 'care-systems',
    difficulty: 'medium'
  },
  {
    id: 'ncle-care-003',
    question: 'What is the active ingredient in hydrogen peroxide-based contact lens care systems?',
    options: [
      '3% hydrogen peroxide',
      '2% hydrogen peroxide',
      '5% hydrogen peroxide',
      '1% hydrogen peroxide'
    ],
    correctAnswer: 0,
    explanation: '3% hydrogen peroxide is the active ingredient in hydrogen peroxide-based contact lens care systems. It provides highly effective disinfection but must be neutralized before lens insertion to prevent ocular damage.',
    category: 'cl-care',
    subcategory: 'care-systems',
    difficulty: 'easy'
  },
  {
    id: 'ncle-care-004',
    question: 'When should a patient be advised to discontinue wearing contact lenses and seek professional care?',
    options: [
      'When they experience intermittent dryness',
      'When they observe cloudy vision that improves with blinking',
      'When they experience persistent redness, pain, or reduced vision',
      'When they need to use rewetting drops more than once daily'
    ],
    correctAnswer: 2,
    explanation: 'Patients should be advised to discontinue contact lens wear and seek immediate professional care if they experience persistent redness, pain, or reduced vision. These symptoms may indicate a serious complication such as microbial keratitis or corneal ulcer.',
    category: 'cl-care',
    subcategory: 'care-systems',
    difficulty: 'easy'
  },
  {
    id: 'ncle-care-005',
    question: 'What is the purpose of an enzymatic cleaner for contact lenses?',
    options: [
      'To disinfect lenses',
      'To remove lipid deposits',
      'To remove accumulated protein deposits',
      'To hydrate the lens material'
    ],
    correctAnswer: 2,
    explanation: 'Enzymatic cleaners are specifically designed to remove accumulated protein deposits from contact lenses. These deposits build up over time and are not completely removed by daily cleaning solutions.',
    category: 'cl-care',
    subcategory: 'care-systems',
    difficulty: 'easy'
  },
  {
    id: 'ncle-care-006',
    question: 'Which contact lens care system requires the most time for disinfection before lenses can be worn?',
    options: [
      'Multipurpose solution',
      'Hydrogen peroxide system (one-step)',
      'Hydrogen peroxide system (two-step)',
      'Daily surfactant cleaner'
    ],
    correctAnswer: 2,
    explanation: 'A two-step hydrogen peroxide system typically requires the most time for disinfection, usually 6 hours or overnight. The first step is the disinfection with hydrogen peroxide, and the second step is the separate neutralization process before the lenses can be worn.',
    category: 'cl-care',
    subcategory: 'care-systems',
    difficulty: 'medium'
  },
  {
    id: 'ncle-care-007',
    question: 'What type of solution would be MOST appropriate for a patient with sensitivity to preservatives?',
    options: [
      'Preserved multipurpose solution',
      'Preserved saline solution',
      'Hydrogen peroxide system',
      'Tap water'
    ],
    correctAnswer: 2,
    explanation: 'A hydrogen peroxide system would be most appropriate for a patient with sensitivity to preservatives. After neutralization, hydrogen peroxide systems contain no preservatives, making them suitable for patients with preservative sensitivities.',
    category: 'cl-care',
    subcategory: 'care-systems',
    difficulty: 'medium'
  },
  
  // Contact Lens Hygiene
  {
    id: 'ncle-care-008',
    question: 'What is the most important step in contact lens hygiene?',
    options: [
      'Using expensive solutions',
      'Hand washing before handling lenses',
      'Using daily disposable lenses',
      'Using only name-brand solutions'
    ],
    correctAnswer: 1,
    explanation: 'Hand washing before handling contact lenses is the most important step in contact lens hygiene. Proper hand washing with soap and water, followed by thorough drying with a lint-free towel, reduces the risk of introducing microorganisms and debris to the lenses and eyes.',
    category: 'cl-care',
    subcategory: 'cl-hygiene',
    difficulty: 'easy'
  },
  {
    id: 'ncle-care-009',
    question: 'Which of the following is a correct recommendation for contact lens hygiene?',
    options: [
      'Rinse contact lens cases with tap water',
      'Top off existing solution in the case',
      'Discard and replace solution daily',
      'Use saliva to wet lenses in emergencies'
    ],
    correctAnswer: 2,
    explanation: 'Discarding and replacing contact lens solution daily is a correct recommendation for proper lens hygiene. Reusing or topping off solution can lead to decreased disinfection efficacy and increased risk of contamination.',
    category: 'cl-care',
    subcategory: 'cl-hygiene',
    difficulty: 'easy'
  },
  {
    id: 'ncle-care-010',
    question: 'What is the recommended technique for cleaning a soft contact lens?',
    options: [
      'Rubbing the lens in the palm with solution, then rinsing with solution',
      'Soaking the lens in solution overnight without rubbing',
      'Rinsing the lens with tap water, then soaking in solution',
      'Cleaning with solution once a week is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'The recommended technique for cleaning a soft contact lens is rubbing the lens in the palm with solution, then rinsing with solution. The mechanical action of rubbing, even with "no-rub" solutions, provides better removal of deposits and microorganisms.',
    category: 'cl-care',
    subcategory: 'cl-hygiene',
    difficulty: 'easy'
  },
  {
    id: 'ncle-care-011',
    question: 'Why should contact lens wearers avoid using tap water with their lenses?',
    options: [
      'Tap water is too acidic for contact lenses',
      'Tap water contains chlorine that damages lenses',
      'Tap water may contain Acanthamoeba and other pathogens',
      'Tap water causes lenses to change color'
    ],
    correctAnswer: 2,
    explanation: 'Contact lens wearers should avoid using tap water because it may contain Acanthamoeba and other pathogens that can cause serious eye infections. Acanthamoeba keratitis is a rare but severe infection that can lead to vision loss and is associated with water exposure to contact lenses.',
    category: 'cl-care',
    subcategory: 'cl-hygiene',
    difficulty: 'medium'
  },
  {
    id: 'ncle-care-012',
    question: 'Which activity should contact lens wearers AVOID while wearing their lenses?',
    options: [
      'Using computers',
      'Swimming or showering',
      'Watching television',
      'Driving at night'
    ],
    correctAnswer: 1,
    explanation: 'Contact lens wearers should avoid swimming or showering while wearing their lenses. Water exposure increases the risk of microbial contamination, particularly from Acanthamoeba, which can lead to severe eye infections.',
    category: 'cl-care',
    subcategory: 'cl-hygiene',
    difficulty: 'easy'
  },
  {
    id: 'ncle-care-013',
    question: 'What is the correct order of steps for proper contact lens insertion?',
    options: [
      'Wash hands, rinse lens, check lens, insert lens',
      'Check lens, wash hands, rinse lens, insert lens',
      'Rinse lens, wash hands, check lens, insert lens',
      'Wash hands, check lens, rinse lens, insert lens'
    ],
    correctAnswer: 3,
    explanation: 'The correct order of steps for proper contact lens insertion is: wash hands, check lens for defects or debris, rinse lens with appropriate solution, then insert the lens. This sequence minimizes contamination and ensures the lens is in good condition before placement on the eye.',
    category: 'cl-care',
    subcategory: 'cl-hygiene',
    difficulty: 'medium'
  },
  {
    id: 'ncle-care-014',
    question: 'What should be recommended to patients who apply makeup while wearing contact lenses?',
    options: [
      'Apply makeup before inserting lenses',
      'Apply makeup after inserting lenses',
      'Avoid wearing makeup with contact lenses',
      'Use only oil-based makeup products'
    ],
    correctAnswer: 0,
    explanation: 'Patients who apply makeup while wearing contact lenses should be advised to apply makeup before inserting their lenses. This reduces the risk of makeup particles and residues contaminating the lenses during application.',
    category: 'cl-care',
    subcategory: 'cl-hygiene',
    difficulty: 'medium'
  },
  
  // Lens Case Care and Replacement
  {
    id: 'ncle-care-015',
    question: 'How often should a contact lens case be replaced?',
    options: [
      'Every week',
      'Every 1-3 months',
      'Every 6 months',
      'Once a year'
    ],
    correctAnswer: 1,
    explanation: 'Contact lens cases should be replaced every 1-3 months. Regular case replacement helps reduce the risk of contamination and biofilm formation that can occur over time, even with proper cleaning and maintenance.',
    category: 'cl-care',
    subcategory: 'case-care',
    difficulty: 'easy'
  },
  {
    id: 'ncle-care-016',
    question: 'What is the recommended way to clean a contact lens case?',
    options: [
      'Rinse with tap water and air dry',
      'Wipe with a paper towel and close tightly',
      'Rinse with contact lens solution, rub, rinse again, and air dry face down',
      'Soak in saline solution overnight'
    ],
    correctAnswer: 2,
    explanation: 'The recommended way to clean a contact lens case is to rinse it with contact lens solution (not tap water), rub to remove any debris, rinse again with solution, and then allow it to air dry face down on a clean tissue. This method minimizes contamination and biofilm formation.',
    category: 'cl-care',
    subcategory: 'case-care',
    difficulty: 'medium'
  },
  {
    id: 'ncle-care-017',
    question: 'Why should contact lens cases be stored open and face down when not in use?',
    options: [
      'To allow trapped solution to drain out',
      'To allow air circulation and prevent moisture buildup',
      'To prevent solution from evaporating',
      'To protect the inside of the case from dust'
    ],
    correctAnswer: 1,
    explanation: 'Contact lens cases should be stored open and face down when not in use to allow air circulation and prevent moisture buildup. This helps reduce bacterial growth and biofilm formation that thrive in moist environments.',
    category: 'cl-care',
    subcategory: 'case-care',
    difficulty: 'easy'
  },
  {
    id: 'ncle-care-018',
    question: 'What is a biofilm in relation to contact lens cases?',
    options: [
      'A protective coating applied to new lens cases',
      'A layer of residual contact lens solution',
      'A community of microorganisms attached to a surface',
      'A film created by tear proteins on the lens surface'
    ],
    correctAnswer: 2,
    explanation: 'A biofilm is a community of microorganisms (bacteria, fungi) that attach to a surface, such as the inside of a contact lens case, and secrete a protective matrix. Biofilms are resistant to disinfection and can serve as a source of recurrent contamination for contact lenses.',
    category: 'cl-care',
    subcategory: 'case-care',
    difficulty: 'medium'
  },
  {
    id: 'ncle-care-019',
    question: 'Which of the following is a sign that a contact lens case should be replaced immediately?',
    options: [
      'The case is three weeks old',
      'The case has visible cracks or damage',
      'The case is a different color than the lens solution bottle',
      'The case takes longer than usual to dry'
    ],
    correctAnswer: 1,
    explanation: 'A contact lens case should be replaced immediately if it has visible cracks or damage. Cracks and other damage can harbor bacteria and other microorganisms that are difficult to remove during cleaning, increasing the risk of eye infection.',
    category: 'cl-care',
    subcategory: 'case-care',
    difficulty: 'easy'
  },
  {
    id: 'ncle-care-020',
    question: 'What is the primary reason flat contact lens cases are not recommended for hydrogen peroxide systems?',
    options: [
      'They don\'t neutralize the solution properly',
      'They are more likely to leak',
      'They are harder to clean',
      'They are more expensive'
    ],
    correctAnswer: 0,
    explanation: 'Flat contact lens cases are not recommended for hydrogen peroxide systems because they don\'t neutralize the solution properly. Hydrogen peroxide systems require special cases with a built-in neutralizing disc or catalyst, which are typically barrel-shaped rather than flat.',
    category: 'cl-care',
    subcategory: 'case-care',
    difficulty: 'medium'
  },
  {
    id: 'ncle-care-021',
    question: 'Which of the following practices increases the risk of contact lens case contamination?',
    options: [
      'Replacing the case monthly',
      'Allowing the case to air dry',
      'Using fresh solution daily',
      'Rinsing the case with tap water'
    ],
    correctAnswer: 3,
    explanation: 'Rinsing a contact lens case with tap water increases the risk of contamination. Tap water can contain microorganisms like Acanthamoeba that are resistant to contact lens disinfection solutions and can cause serious eye infections.',
    category: 'cl-care',
    subcategory: 'case-care',
    difficulty: 'medium'
  },
  {
    id: 'ncle-care-022',
    question: 'What color are the caps on contact lens cases typically designed to be?',
    options: [
      'Black for left, white for right',
      'Red for left, clear for right',
      'Blue for left, green for right',
      'Yellow for left, blue for right'
    ],
    correctAnswer: 2,
    explanation: 'Contact lens case caps are typically designed to be blue for the left eye (L) and green for the right eye (R). This color coding helps patients consistently place the correct lens in the appropriate side of the case to avoid mixing up lenses.',
    category: 'cl-care',
    subcategory: 'case-care',
    difficulty: 'easy'
  }
]; 