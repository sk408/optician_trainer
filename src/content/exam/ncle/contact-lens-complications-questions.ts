import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * NCLE Exam Questions: Contact Lens Complications
 * 
 * Topics covered:
 * - Corneal Complications
 * - Allergic and Toxic Reactions
 * - Contact Lens Discomfort
 */

export const contactLensComplicationsQuestions: ExamQuestion[] = [
  // Corneal Complications
  {
    id: 'ncle-comp-001',
    question: 'What is corneal neovascularization?',
    options: [
      'Corneal swelling due to hypoxia',
      'Growth of new blood vessels into the normally avascular cornea',
      'Small breaks in the epithelial layer of the cornea',
      'Inflammation of the corneal stroma'
    ],
    correctAnswer: 1,
    explanation: 'Corneal neovascularization is the growth of new blood vessels into the normally avascular cornea. It typically occurs in response to chronic hypoxia (lack of oxygen) and is a serious complication of contact lens wear that can threaten corneal clarity and vision.',
    category: 'cl-complications',
    subcategory: 'corneal-complications',
    difficulty: 'medium'
  },
  {
    id: 'ncle-comp-002',
    question: 'What is the primary cause of corneal ulcers in contact lens wearers?',
    options: [
      'Excessive lens cleaning solution',
      'Microbial infection often associated with poor hygiene',
      'Allergic reaction to lens material',
      'Natural aging of the cornea'
    ],
    correctAnswer: 1,
    explanation: 'The primary cause of corneal ulcers in contact lens wearers is microbial infection, often associated with poor hygiene practices, extended wear schedules, contaminated solutions, or damaged lenses. Pseudomonas aeruginosa is a common causative organism.',
    category: 'cl-complications',
    subcategory: 'corneal-complications',
    difficulty: 'medium'
  },
  {
    id: 'ncle-comp-003',
    question: 'What is the primary symptom of microbial keratitis?',
    options: [
      'Itching and burning',
      'Moderate lens awareness',
      'Severe pain, redness, and photophobia',
      'Mild dryness and discomfort'
    ],
    correctAnswer: 2,
    explanation: 'The primary symptoms of microbial keratitis include severe pain, redness, photophobia (light sensitivity), and decreased vision. This is a serious, potentially sight-threatening condition that requires immediate medical attention.',
    category: 'cl-complications',
    subcategory: 'corneal-complications',
    difficulty: 'medium'
  },
  {
    id: 'ncle-comp-004',
    question: 'Which contact lens-related complication presents as small, infiltrative white dots in the corneal stroma?',
    options: [
      'Epithelial microcysts',
      'Corneal neovascularization',
      'Infiltrative keratitis',
      'Superior limbic keratoconjunctivitis'
    ],
    correctAnswer: 2,
    explanation: 'Infiltrative keratitis presents as small, infiltrative white dots in the corneal stroma, often accompanied by redness and mild to moderate discomfort. These infiltrates are clusters of inflammatory cells that may be sterile or infectious in nature.',
    category: 'cl-complications',
    subcategory: 'corneal-complications',
    difficulty: 'hard'
  },
  {
    id: 'ncle-comp-005',
    question: 'What is corneal epithelial edema?',
    options: [
      'Swelling of the corneal epithelium due to hypoxia',
      'Thinning of the cornea due to mechanical pressure',
      'Scratches on the corneal surface',
      'Inflammatory reaction in the corneal stroma'
    ],
    correctAnswer: 0,
    explanation: 'Corneal epithelial edema is swelling of the corneal epithelium due to hypoxia (oxygen deprivation). It occurs when the cornea doesn\'t receive enough oxygen, often from extended lens wear or low-oxygen transmissible lenses, causing fluid accumulation in epithelial cells.',
    category: 'cl-complications',
    subcategory: 'corneal-complications',
    difficulty: 'medium'
  },
  {
    id: 'ncle-comp-006',
    question: 'What is the clinical appearance of a corneal abrasion?',
    options: [
      'A white, opaque lesion with defined borders',
      'A defect in the corneal epithelium that stains with fluorescein',
      'Multiple small vesicles on the corneal surface',
      'Corneal thinning with protrusion'
    ],
    correctAnswer: 1,
    explanation: 'A corneal abrasion appears as a defect in the corneal epithelium that stains with fluorescein dye. It results from mechanical trauma to the corneal surface, which may be caused by foreign bodies, contact lens edges, or improper insertion or removal techniques.',
    category: 'cl-complications',
    subcategory: 'corneal-complications',
    difficulty: 'easy'
  },
  {
    id: 'ncle-comp-007',
    question: 'What is the proper management for a patient with a corneal ulcer?',
    options: [
      'Continue lens wear but switch to daily disposables',
      'Use steroid eye drops to reduce inflammation',
      'Discontinue lens wear and refer for immediate medical treatment',
      'Switch to rigid gas permeable lenses'
    ],
    correctAnswer: 2,
    explanation: 'The proper management for a corneal ulcer is to discontinue contact lens wear immediately and refer the patient for urgent medical treatment. Corneal ulcers are serious infections that require prompt antibiotic therapy and close monitoring to prevent permanent vision loss.',
    category: 'cl-complications',
    subcategory: 'corneal-complications',
    difficulty: 'medium'
  },
  
  // Allergic and Toxic Reactions
  {
    id: 'ncle-comp-008',
    question: 'What is giant papillary conjunctivitis (GPC)?',
    options: [
      'A bacterial infection of the conjunctiva',
      'An inflammatory reaction characterized by large papillae on the upper tarsal conjunctiva',
      'Inflammation of the corneal stroma',
      'A viral infection that causes vesicles on the conjunctiva'
    ],
    correctAnswer: 1,
    explanation: 'Giant papillary conjunctivitis (GPC) is an inflammatory reaction characterized by large papillae (> 0.3 mm) on the upper tarsal conjunctiva. It\'s typically caused by mechanical irritation from contact lenses or by an allergic response to deposits on the lens surface or lens care solutions.',
    category: 'cl-complications',
    subcategory: 'allergic-reactions',
    difficulty: 'medium'
  },
  {
    id: 'ncle-comp-009',
    question: 'What is the most common symptom of solution toxicity?',
    options: [
      'Severe pain',
      'Burning and stinging upon lens insertion',
      'Itching and tearing',
      'Blurred vision'
    ],
    correctAnswer: 1,
    explanation: 'The most common symptom of solution toxicity is burning and stinging upon lens insertion. This reaction occurs when the corneal epithelium is damaged by toxic agents in lens care solutions, often preservatives like benzalkonium chloride or excessive use of hydrogen peroxide without proper neutralization.',
    category: 'cl-complications',
    subcategory: 'allergic-reactions',
    difficulty: 'medium'
  },
  {
    id: 'ncle-comp-010',
    question: 'What is contact lens-induced acute red eye (CLARE)?',
    options: [
      'An acute inflammatory reaction occurring during overnight lens wear',
      'A chronic allergic reaction to lens materials',
      'Dryness causing redness after long hours of lens wear',
      'A bacterial infection of the cornea'
    ],
    correctAnswer: 0,
    explanation: 'Contact lens-induced acute red eye (CLARE) is an acute inflammatory reaction that typically occurs during overnight lens wear. It presents with significant conjunctival redness, infiltrates, and discomfort upon awakening, often related to bacterial toxins trapped under the lens.',
    category: 'cl-complications',
    subcategory: 'allergic-reactions',
    difficulty: 'medium'
  },
  {
    id: 'ncle-comp-011',
    question: 'Which preservative commonly found in multipurpose solutions is most frequently associated with solution sensitivity?',
    options: [
      'Sodium chloride',
      'Poloxamine',
      'Polyquaternium-1',
      'Polyhexamethylene biguanide (PHMB)'
    ],
    correctAnswer: 3,
    explanation: 'Polyhexamethylene biguanide (PHMB) is the preservative most frequently associated with solution sensitivity. It\'s found in many multipurpose solutions and can cause toxic or allergic reactions in sensitive individuals, particularly those with dry eyes or compromised corneal surfaces.',
    category: 'cl-complications',
    subcategory: 'allergic-reactions',
    difficulty: 'hard'
  },
  {
    id: 'ncle-comp-012',
    question: 'What is the appropriate management for a patient showing signs of solution toxicity?',
    options: [
      'Continue with the same care regimen but increase cleaning time',
      'Switch to a different solution, preferably preservative-free or hydrogen peroxide-based',
      'Continue lens wear but reduce wearing time',
      'Use topical steroid drops while continuing lens wear'
    ],
    correctAnswer: 1,
    explanation: 'The appropriate management for solution toxicity is to switch to a different solution, preferably preservative-free or hydrogen peroxide-based. Discontinuing the offending solution allows the corneal epithelium to recover. It may also be necessary to temporarily discontinue lens wear until symptoms resolve.',
    category: 'cl-complications',
    subcategory: 'allergic-reactions',
    difficulty: 'medium'
  },
  {
    id: 'ncle-comp-013',
    question: 'What is contact dermatoconjunctivitis?',
    options: [
      'Inflammation of the eyelids caused by mechanical rubbing',
      'A delayed hypersensitivity reaction affecting the eyelids and conjunctiva',
      'A bacterial infection of the eyelid margins',
      'An acute viral infection of the conjunctiva'
    ],
    correctAnswer: 1,
    explanation: 'Contact dermatoconjunctivitis is a delayed hypersensitivity reaction affecting the eyelids and conjunctiva. In contact lens wearers, it\'s often caused by preservatives in lens care solutions, resulting in redness, scaling, and irritation of the eyelids and conjunctiva.',
    category: 'cl-complications',
    subcategory: 'allergic-reactions',
    difficulty: 'hard'
  },
  
  // Contact Lens Discomfort
  {
    id: 'ncle-comp-014',
    question: 'What is contact lens-associated dry eye?',
    options: [
      'Dryness that occurs only in non-contact lens wearers',
      'A reduction in tear production caused by contact lens wear',
      'Eye dryness that occurs with any type of lens wear',
      'Discomfort and dryness symptoms associated with contact lens wear'
    ],
    correctAnswer: 3,
    explanation: 'Contact lens-associated dry eye refers to discomfort and dryness symptoms associated with contact lens wear. It may result from pre-existing dry eye exacerbated by lenses, or may be induced by lenses disrupting the tear film, increasing evaporation, or causing inflammatory responses.',
    category: 'cl-complications',
    subcategory: 'cl-discomfort',
    difficulty: 'easy'
  },
  {
    id: 'ncle-comp-015',
    question: 'Which layer of the tear film is most disrupted by contact lens wear?',
    options: [
      'Mucin layer',
      'Aqueous layer',
      'Lipid layer',
      'All layers equally'
    ],
    correctAnswer: 2,
    explanation: 'The lipid layer of the tear film is most disrupted by contact lens wear. Contact lenses split the tear film, with the lens sitting between the mucin and aqueous layers. This disrupts the lipid layer, which normally prevents evaporation, leading to increased tear evaporation and dryness symptoms.',
    category: 'cl-complications',
    subcategory: 'cl-discomfort',
    difficulty: 'medium'
  },
  {
    id: 'ncle-comp-016',
    question: 'What is the most common time for patients to experience contact lens discomfort?',
    options: [
      'Immediately upon insertion',
      'After 2-3 hours of wear',
      'Toward the end of the day',
      'Only during computer use'
    ],
    correctAnswer: 2,
    explanation: 'The most common time for patients to experience contact lens discomfort is toward the end of the day. This "end-of-day discomfort" typically results from a combination of factors including lens dehydration, tear film changes, environmental factors, and deposit accumulation throughout the day.',
    category: 'cl-complications',
    subcategory: 'cl-discomfort',
    difficulty: 'easy'
  },
  {
    id: 'ncle-comp-017',
    question: 'Which contact lens material property is most closely associated with end-of-day comfort?',
    options: [
      'Oxygen permeability (Dk)',
      'Water content',
      'Surface wettability',
      'Center thickness'
    ],
    correctAnswer: 2,
    explanation: 'Surface wettability is most closely associated with end-of-day comfort. Lenses with better surface wettability maintain a more stable tear film over the lens surface throughout the day, reducing friction between the lens and lids and improving comfort.',
    category: 'cl-complications',
    subcategory: 'cl-discomfort',
    difficulty: 'medium'
  },
  {
    id: 'ncle-comp-018',
    question: 'What is most likely causing a patient to report lens awareness only when blinking?',
    options: [
      'Lens deposits',
      'Corneal edema',
      'Lens edge design or fit issues',
      'Solution toxicity'
    ],
    correctAnswer: 2,
    explanation: 'Lens awareness only when blinking is most likely caused by lens edge design or fit issues. During a blink, the eyelid interacts with the lens edge, and if the edge design is too thick or the lens fit allows excessive edge lift, the patient may experience awareness or discomfort during blinking.',
    category: 'cl-complications',
    subcategory: 'cl-discomfort',
    difficulty: 'medium'
  },
  {
    id: 'ncle-comp-019',
    question: 'What is 3 o\'clock and 9 o\'clock staining?',
    options: [
      'Circular staining pattern around the entire cornea',
      'Staining that occurs only at specific times of day',
      'Staining localized to the nasal and temporal limbal areas',
      'Staining that appears in a clock-face pattern'
    ],
    correctAnswer: 2,
    explanation: '3 o\'clock and 9 o\'clock staining refers to fluorescein staining localized to the nasal and temporal limbal areas (positions corresponding to 3 and 9 on a clock face). It\'s commonly seen with RGP lenses and is caused by inadequate tear flow under the lens edge, often due to lens decentration or poor edge design.',
    category: 'cl-complications',
    subcategory: 'cl-discomfort',
    difficulty: 'medium'
  },
  {
    id: 'ncle-comp-020',
    question: 'What modification would likely improve comfort for a soft contact lens wearer experiencing end-of-day dryness?',
    options: [
      'Increase lens thickness',
      'Switch to a higher water content lens',
      'Change to a more frequent replacement schedule',
      'Increase lens diameter'
    ],
    correctAnswer: 2,
    explanation: 'Changing to a more frequent replacement schedule would likely improve comfort for a patient experiencing end-of-day dryness. More frequent replacement reduces deposit buildup that can cause discomfort. Daily disposable lenses often provide the best comfort for patients with dryness issues.',
    category: 'cl-complications',
    subcategory: 'cl-discomfort',
    difficulty: 'medium'
  },
  {
    id: 'ncle-comp-021',
    question: 'What is the appropriate management for a patient with lens-related dryness that occurs in low humidity environments?',
    options: [
      'Switch to a lower water content lens material',
      'Recommend rewetting drops specifically formulated for contact lenses',
      'Increase lens thickness',
      'Switch to extended wear lenses'
    ],
    correctAnswer: 1,
    explanation: 'For a patient experiencing lens-related dryness in low humidity environments, recommending rewetting drops specifically formulated for contact lenses is appropriate. These drops help replenish the tear film over the lens surface, temporarily relieving dryness symptoms in challenging environments.',
    category: 'cl-complications',
    subcategory: 'cl-discomfort',
    difficulty: 'easy'
  }
]; 