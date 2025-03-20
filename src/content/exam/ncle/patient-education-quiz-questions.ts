import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * NCLE Quiz Questions: Patient Education
 * 
 * Topics covered:
 * - Lens Wear and Care Instruction
 * - Problem Identification and Resolution
 * - Compliance Issues
 * - Expected Outcomes
 */

export const patientEducationQuizQuestions: ExamQuestion[] = [
  // Lens Wear and Care Instruction
  {
    id: 'quiz-patient-edu-001',
    question: 'What is the most important step to emphasize to a new contact lens wearer during lens care education?',
    options: [
      'Using the correct solution',
      'Hand washing before handling lenses',
      'Following the replacement schedule',
      'Using enzymatic cleaners weekly'
    ],
    correctAnswer: 1,
    explanation: 'Hand washing before handling lenses is the most important step to emphasize to new contact lens wearers. Proper hand washing with soap and water, followed by thorough drying with a lint-free towel, helps prevent the introduction of microorganisms and debris that can cause eye infections and complications.',
    category: 'patient-education',
    subcategory: 'wear-care-instruction',
    difficulty: 'easy'
  },
  {
    id: 'quiz-patient-edu-002',
    question: 'A patient asks if they can rinse their contact lenses with tap water when solution is unavailable. What is the best response?',
    options: [
      'Yes, but only for rigid lenses',
      'Yes, but only for daily disposable lenses',
      'Yes, if the water is filtered',
      'No, never use tap water with any contact lenses'
    ],
    correctAnswer: 3,
    explanation: 'The best response is to never use tap water with any contact lenses. Tap water contains microorganisms, including Acanthamoeba, that can cause severe eye infections. Even filtered water is not sterile and should not be used for contact lens care or storage.',
    category: 'patient-education',
    subcategory: 'wear-care-instruction',
    difficulty: 'easy'
  },
  {
    id: 'quiz-patient-edu-003',
    question: 'What insertion technique should be taught to patients with steep corneas and high myopic corrections?',
    options: [
      'Using the dominant hand only',
      'Using a suction cup applicator',
      'Applying with lens filled with solution',
      'Using the side approach rather than straight-on'
    ],
    correctAnswer: 2,
    explanation: 'For patients with steep corneas and high myopic corrections, teaching insertion with the lens filled with solution is recommended. This technique helps prevent air bubbles from forming under the lens and improves initial comfort and fitting.',
    category: 'patient-education',
    subcategory: 'wear-care-instruction',
    difficulty: 'medium'
  },
  {
    id: 'quiz-patient-edu-004',
    question: 'Which statement about contact lens storage case hygiene is correct to include in patient education?',
    options: [
      'Rinse with tap water daily and air dry',
      'Replace the case every 1-3 months',
      'Boil the case weekly to sterilize it',
      'Clean the case only when visibly dirty'
    ],
    correctAnswer: 1,
    explanation: 'Patients should be instructed to replace their contact lens storage case every 1-3 months. Cases should be cleaned daily by rinsing with fresh contact lens solution (not tap water), rubbing, rinsing again, and allowing to air dry face down on a clean tissue. Old cases can harbor biofilm and become sources of contamination.',
    category: 'patient-education',
    subcategory: 'wear-care-instruction',
    difficulty: 'easy'
  },
  {
    id: 'quiz-patient-edu-005',
    question: 'Which instruction should be given to patients regarding swimming while wearing contact lenses?',
    options: [
      'Swimming with any contact lenses is acceptable',
      'Swimming is only acceptable with daily disposable lenses',
      'Swimming is acceptable with waterproof goggles over contacts',
      'No swimming should be done while wearing any contact lenses'
    ],
    correctAnswer: 2,
    explanation: 'Patients should be instructed that swimming with contact lenses is acceptable only when wearing waterproof goggles over their contacts. Without proper protection, lenses can absorb water, change their fit, and expose the eye to waterborne microorganisms. If swimming without goggles is necessary, daily disposable lenses that will be discarded immediately after swimming are the safest option.',
    category: 'patient-education',
    subcategory: 'wear-care-instruction',
    difficulty: 'medium'
  },
  
  // Problem Identification and Resolution
  {
    id: 'quiz-patient-edu-006',
    question: 'What should a patient be instructed to do if they experience sudden eye pain and redness while wearing contact lenses?',
    options: [
      'Wait until their next scheduled appointment',
      'Remove the lens and continue wear the next day',
      'Remove the lens and seek immediate professional care',
      'Use redness-relieving eye drops and continue wear'
    ],
    correctAnswer: 2,
    explanation: 'Patients should be instructed to remove the lens and seek immediate professional care if they experience sudden eye pain and redness. These symptoms could indicate a serious condition such as microbial keratitis, corneal abrasion, or another sight-threatening complication that requires prompt evaluation and treatment.',
    category: 'patient-education',
    subcategory: 'problem-identification',
    difficulty: 'easy'
  },
  {
    id: 'quiz-patient-edu-007',
    question: 'What should patients be taught about end-of-day discomfort with their contact lenses?',
    options: [
      'It\'s normal and to be expected with all lenses',
      'Using rewetting drops frequently throughout the day may help',
      'Increasing wear time will eventually eliminate the problem',
      'Discomfort means the prescription needs to be strengthened'
    ],
    correctAnswer: 1,
    explanation: 'Patients should be taught that using rewetting drops frequently throughout the day may help with end-of-day discomfort. While some decrease in comfort toward the end of the day can occur, frequent use of preservative-free rewetting drops can help maintain lens hydration and comfort. Persistent discomfort should still be reported to the eye care professional.',
    category: 'patient-education',
    subcategory: 'problem-identification',
    difficulty: 'medium'
  },
  {
    id: 'quiz-patient-edu-008',
    question: 'What is the most appropriate advice for a patient who reports their RGP lenses often eject from the eye when blinking?',
    options: [
      'Switch to soft lenses immediately',
      'Blink more forcefully to keep the lens in place',
      'Return for evaluation of lens fit and parameters',
      'Use adhesive drops to keep the lens attached'
    ],
    correctAnswer: 2,
    explanation: 'The most appropriate advice for a patient reporting RGP lens ejection is to return for evaluation of lens fit and parameters. Lens ejection is often a sign of an improper fit, such as a lens that is too flat or has insufficient edge clearance. Parameter adjustments can typically resolve this issue.',
    category: 'patient-education',
    subcategory: 'problem-identification',
    difficulty: 'medium'
  },
  {
    id: 'quiz-patient-edu-009',
    question: 'What should be recommended to a patient who reports their soft contact lenses feel tight and uncomfortable after several hours of wear?',
    options: [
      'Increase protein removal steps in their cleaning routine',
      'Switch to a higher water content lens material',
      'Have their tear film quality evaluated',
      'Use a more viscous rewetting drop'
    ],
    correctAnswer: 2,
    explanation: 'A patient reporting that soft lenses feel tight and uncomfortable after several hours should be advised to have their tear film quality evaluated. This symptom often indicates dry eye or poor tear film quality, which can cause the lens to dehydrate and tighten on the eye. Addressing the underlying tear film issue is more effective than simply changing lens materials.',
    category: 'patient-education',
    subcategory: 'problem-identification',
    difficulty: 'medium'
  },
  {
    id: 'quiz-patient-edu-010',
    question: 'What should a multifocal contact lens patient be taught about their vision expectations?',
    options: [
      'Vision should be perfect at all distances immediately',
      'Some compromise between distance and near vision may be necessary',
      'Reading glasses will always be needed with multifocal contacts',
      'One eye will be completely blurry for the adaptation period'
    ],
    correctAnswer: 1,
    explanation: 'Multifocal contact lens patients should be taught that some compromise between distance and near vision may be necessary. Unlike spectacles, multifocal contact lenses often require a period of neural adaptation, and patients may need to accept some visual compromise to achieve functional vision at multiple distances.',
    category: 'patient-education',
    subcategory: 'expected-outcomes',
    difficulty: 'medium'
  },
  
  // Compliance Issues
  {
    id: 'quiz-patient-edu-011',
    question: 'What is the most effective way to improve patient compliance with contact lens replacement schedules?',
    options: [
      'Threatening with potential complications',
      'Written instructions only',
      'Education about specific risks combined with calendar reminders',
      'Recommending daily disposable lenses to all patients'
    ],
    correctAnswer: 2,
    explanation: 'The most effective way to improve patient compliance with replacement schedules is through education about specific risks combined with practical tools like calendar reminders. Understanding the "why" behind recommendations, along with convenient methods to track replacement dates, leads to better compliance than scare tactics or written instructions alone.',
    category: 'patient-education',
    subcategory: 'compliance-issues',
    difficulty: 'medium'
  },
  {
    id: 'quiz-patient-edu-012',
    question: 'When providing instructions on lens care, which approach is most likely to improve patient compliance?',
    options: [
      'Verbal instructions only',
      'Detailed written materials only',
      'Demonstration combined with practice and written materials',
      'Recommending the most complex regimen to ensure thoroughness'
    ],
    correctAnswer: 2,
    explanation: 'Demonstration combined with patient practice and supplemental written materials is most likely to improve compliance with lens care regimens. This multi-modal approach engages different learning styles, provides hands-on experience, and gives reference materials for later review, maximizing retention and proper execution of care procedures.',
    category: 'patient-education',
    subcategory: 'compliance-issues',
    difficulty: 'easy'
  },
  {
    id: 'quiz-patient-edu-013',
    question: 'What statement about contact lens solution use should be emphasized to improve compliance?',
    options: [
      'Any multipurpose solution brand can be alternated daily',
      'Homemade saline is acceptable if commercial solutions cause irritation',
      'Never top off or reuse solution in the lens case',
      'Tap water can be used to rinse the case if solution is unavailable'
    ],
    correctAnswer: 2,
    explanation: 'To improve compliance, patients should be emphatically instructed never to top off or reuse solution in the lens case. This practice allows microorganisms to build up over time and reduces the disinfecting efficacy of the solution, significantly increasing infection risk.',
    category: 'patient-education',
    subcategory: 'compliance-issues',
    difficulty: 'easy'
  },
  {
    id: 'quiz-patient-edu-014',
    question: 'What compliance issue is most common among teenage contact lens wearers?',
    options: [
      'Sleeping in lenses not approved for extended wear',
      'Using saliva to wet lenses when solution is unavailable',
      'Sharing lenses with friends',
      'All of the above'
    ],
    correctAnswer: 3,
    explanation: 'All of these compliance issues are common among teenage contact lens wearers. Adolescents are more likely to engage in risky behaviors such as sleeping in lenses, using saliva as a wetting agent, and sharing lenses with friends. Education focusing specifically on these behaviors and their consequences is particularly important for this age group.',
    category: 'patient-education',
    subcategory: 'compliance-issues',
    difficulty: 'medium'
  },
  {
    id: 'quiz-patient-edu-015',
    question: 'What strategy is most effective for improving compliance with wearing schedules for patients who consistently overwear their lenses?',
    options: [
      'Switching to more expensive lenses',
      'Having the patient sign a compliance contract',
      'Recommending a modality that better fits their lifestyle',
      'Refusing to continue providing contact lens services'
    ],
    correctAnswer: 2,
    explanation: 'The most effective strategy for improving compliance with wearing schedules is recommending a modality that better fits the patient\'s lifestyle. For example, patients who consistently overwear two-week lenses might be better served with monthly replacement lenses, or those who sleep in daily wear lenses might need extended wear options. Matching the lens modality to the patient\'s actual behavior patterns improves both compliance and eye health.',
    category: 'patient-education',
    subcategory: 'compliance-issues',
    difficulty: 'medium'
  },
  
  // Expected Outcomes
  {
    id: 'quiz-patient-edu-016',
    question: 'What should first-time RGP lens wearers be told about the adaptation period?',
    options: [
      'There is no adaptation period with modern RGP lenses',
      'Adaptation takes 1-2 days maximum',
      'Expect 1-2 weeks of progressive adaptation',
      'Discomfort will persist indefinitely but vision will be superior'
    ],
    correctAnswer: 2,
    explanation: 'First-time RGP lens wearers should be told to expect 1-2 weeks of progressive adaptation. Unlike soft lenses, RGPs typically require a gradual adaptation period as the eye and eyelids adjust to the edges of the rigid material. Wear time should be increased gradually, and patients should understand that initial awareness or discomfort will improve substantially over this period.',
    category: 'patient-education',
    subcategory: 'expected-outcomes',
    difficulty: 'easy'
  },
  {
    id: 'quiz-patient-edu-017',
    question: 'What is the appropriate vision expectation to set for a presbyopic patient being fit with monovision contact lenses?',
    options: [
      'Vision will be identical to their progressive spectacles',
      'Some depth perception may be compromised, especially for driving and sports',
      'Reading vision will be perfect but distance will be significantly blurred',
      'The adaptation period is at least six months before useful vision is achieved'
    ],
    correctAnswer: 1,
    explanation: 'Patients being fit with monovision contact lenses should be informed that some depth perception may be compromised, especially for activities like driving and sports. While monovision provides functional vision at different distances, the visual system is not using both eyes together for all distances, which can affect stereopsis and depth perception. Some patients may need single vision distance lenses for specific activities.',
    category: 'patient-education',
    subcategory: 'expected-outcomes',
    difficulty: 'medium'
  },
  {
    id: 'quiz-patient-edu-018',
    question: 'What should patients be taught about the relationship between contact lens wear and dry eye symptoms?',
    options: [
      'Dry eye is unrelated to contact lens wear',
      'Contact lenses can exacerbate existing dry eye and induce symptoms in some patients',
      'All contact lenses cause dry eye eventually',
      'Dry eye symptoms always disappear with continued lens wear'
    ],
    correctAnswer: 1,
    explanation: 'Patients should be taught that contact lenses can exacerbate existing dry eye and may induce symptoms in some patients with previously asymptomatic dry eye. Contact lenses sit on the tear film and can disrupt its normal structure, potentially increasing evaporation and causing or worsening dry eye symptoms in predisposed individuals.',
    category: 'patient-education',
    subcategory: 'expected-outcomes',
    difficulty: 'medium'
  },
  {
    id: 'quiz-patient-edu-019',
    question: 'What guidance should be given to patients regarding contact lens wear during an upper respiratory infection?',
    options: [
      'Continue wear as normal',
      'Temporarily discontinue lens wear until symptoms resolve',
      'Switch to daily disposable lenses until recovered',
      'Use antibiotic eye drops with continued lens wear'
    ],
    correctAnswer: 1,
    explanation: 'Patients should be advised to temporarily discontinue contact lens wear until upper respiratory infection symptoms resolve. During such infections, the risk of transferring pathogens from the hands to the eyes increases, tear film composition may change, and the immune response may be compromised. Additionally, coughing and sneezing can contaminate lenses during handling.',
    category: 'patient-education',
    subcategory: 'expected-outcomes',
    difficulty: 'medium'
  },
  {
    id: 'quiz-patient-edu-020',
    question: 'What information about contact lens wear and cosmetics should be provided to patients?',
    options: [
      'Avoid wearing eye makeup with contact lenses',
      'Apply lenses before makeup and remove lenses before removing makeup',
      'Oil-based makeup is preferred for contact lens wearers',
      'Eyeliner should be applied to the inner eyelid margin for best results'
    ],
    correctAnswer: 1,
    explanation: 'Patients should be instructed to apply lenses before makeup and remove lenses before removing makeup. This sequence minimizes the risk of cosmetic products contaminating the lenses. Additionally, patients should be advised to use oil-free, hypoallergenic cosmetics, avoid applying eyeliner to the inner eyelid margin (waterline), and replace eye makeup more frequently to reduce contamination risks.',
    category: 'patient-education',
    subcategory: 'wear-care-instruction',
    difficulty: 'easy'
  }
]; 