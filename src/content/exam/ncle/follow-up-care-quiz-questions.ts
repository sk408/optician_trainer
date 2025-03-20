import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * NCLE Quiz Questions: Follow-Up Care
 * 
 * Topics covered:
 * - Scheduled Follow-Up Evaluations
 * - Problem-Solving Assessments
 * - Lens Replacement Guidelines
 * - Prescription Updates
 */

export const followUpCareQuizQuestions: ExamQuestion[] = [
  // Scheduled Follow-Up Evaluations
  {
    id: 'quiz-follow-up-001',
    question: 'What is the recommended follow-up schedule for a new RGP contact lens wearer?',
    options: [
      'One day, one week, one month',
      'One week, one month, three months',
      'Two weeks, one month, six months',
      'One month, three months, six months'
    ],
    correctAnswer: 0,
    explanation: 'The recommended follow-up schedule for a new RGP contact lens wearer is typically one day, one week, and one month after dispensing. This allows for early assessment of adaptation, initial fit evaluation, and monitoring of any corneal changes during the critical adaptation period.',
    category: 'follow-up-care',
    subcategory: 'scheduled-evaluations',
    difficulty: 'easy'
  },
  {
    id: 'quiz-follow-up-002',
    question: 'What key elements should be assessed at every follow-up visit for contact lens patients?',
    options: [
      'Visual acuity and comfort only',
      'Visual acuity, lens fit, corneal health, and patient compliance',
      'Refractive error and tear film only',
      'Lens parameters and brand preferences'
    ],
    correctAnswer: 1,
    explanation: 'At every follow-up visit, the practitioner should assess visual acuity, lens fit, corneal health, and patient compliance. This comprehensive approach ensures that both the functional aspects (vision, comfort) and the physiological impacts (ocular health) are monitored, while also addressing any compliance issues that might affect outcomes.',
    category: 'follow-up-care',
    subcategory: 'scheduled-evaluations',
    difficulty: 'easy'
  },
  {
    id: 'quiz-follow-up-003',
    question: 'What is the primary purpose of the one-week follow-up visit for new soft contact lens wearers?',
    options: [
      'To collect payment for professional services',
      'To assess lens handling ability and compliance with care regimen',
      'To adjust the prescription power',
      'To sell additional lens care products'
    ],
    correctAnswer: 1,
    explanation: 'The primary purpose of the one-week follow-up visit for new soft contact lens wearers is to assess lens handling ability and compliance with the care regimen. This early evaluation helps identify and correct any handling or care issues before they become habituated and potentially lead to complications.',
    category: 'follow-up-care',
    subcategory: 'scheduled-evaluations',
    difficulty: 'easy'
  },
  {
    id: 'quiz-follow-up-004',
    question: 'When should a patient wearing silicone hydrogel lenses on a monthly replacement schedule be evaluated if they have no apparent issues?',
    options: [
      'Every month',
      'Every 3 months',
      'Every 6 months',
      'Annually'
    ],
    correctAnswer: 3,
    explanation: 'Patients wearing silicone hydrogel lenses on a monthly replacement schedule with no apparent issues should typically be evaluated annually. This schedule allows for regular assessment of ocular health while not being so frequent as to be burdensome for a compliant, asymptomatic patient. However, patients should be instructed to seek care immediately if problems arise between scheduled visits.',
    category: 'follow-up-care',
    subcategory: 'scheduled-evaluations',
    difficulty: 'medium'
  },
  {
    id: 'quiz-follow-up-005',
    question: 'What specialized test should be regularly included in follow-up care for extended wear contact lens patients?',
    options: [
      'Corneal topography',
      'Contrast sensitivity testing',
      'Endothelial cell count',
      'Epithelial thickness mapping'
    ],
    correctAnswer: 0,
    explanation: 'Corneal topography should be regularly included in follow-up care for extended wear contact lens patients. This test can detect subtle corneal changes, including early signs of warpage or irregularity, that may not be visible with standard slit lamp examination but could indicate fitting issues or physiological stress from extended wear.',
    category: 'follow-up-care',
    subcategory: 'scheduled-evaluations',
    difficulty: 'medium'
  },
  
  // Problem-Solving Assessments
  {
    id: 'quiz-follow-up-006',
    question: 'A patient reports persistent lens awareness with their new RGP lenses after 3 weeks of wear. What is the most appropriate initial assessment?',
    options: [
      'Immediately refit with soft lenses',
      'Evaluate lens edge design and peripheral curves',
      'Prescribe stronger lubricating drops',
      'Reduce daily wearing time'
    ],
    correctAnswer: 1,
    explanation: 'When a patient reports persistent lens awareness with RGP lenses after 3 weeks (beyond the typical adaptation period), the most appropriate initial assessment is to evaluate the lens edge design and peripheral curves. Lens edge issues are a common cause of persistent awareness, and modifying these parameters often resolves the problem without needing to change lens modality.',
    category: 'follow-up-care',
    subcategory: 'problem-solving',
    difficulty: 'medium'
  },
  {
    id: 'quiz-follow-up-007',
    question: 'What is the most appropriate next step when a patient presents with a red eye and a corneal infiltrate while wearing extended wear contact lenses?',
    options: [
      'Change to daily wear schedule',
      'Discontinue lens wear and refer for medical evaluation',
      'Switch to a higher Dk lens material',
      'Prescribe antibiotic drops and continue lens wear'
    ],
    correctAnswer: 1,
    explanation: 'When a patient presents with a red eye and corneal infiltrate while wearing extended wear contact lenses, the most appropriate next step is to discontinue lens wear and refer for medical evaluation. Corneal infiltrates, especially when accompanied by redness, can indicate a serious complication such as microbial keratitis, which requires prompt medical attention and discontinuation of lens wear.',
    category: 'follow-up-care',
    subcategory: 'problem-solving',
    difficulty: 'easy'
  },
  {
    id: 'quiz-follow-up-008',
    question: 'During a follow-up assessment, you notice 3-9 o\'clock staining on an RGP lens wearer. What is the most likely cause?',
    options: [
      'Lens is too steep',
      'Lens is too flat',
      'Lens diameter is too large',
      'Lens is too thick'
    ],
    correctAnswer: 1,
    explanation: '3-9 o\'clock staining (staining at the lateral and medial limbal areas) in an RGP lens wearer is most likely caused by a lens that is too flat. When the lens does not align properly with the cornea and has excessive edge lift, it can cause desiccation and mechanical irritation at these positions, resulting in the characteristic staining pattern.',
    category: 'follow-up-care',
    subcategory: 'problem-solving',
    difficulty: 'medium'
  },
  {
    id: 'quiz-follow-up-009',
    question: 'A patient with toric soft lenses reports inconsistent vision that improves with blinking. What should you assess first?',
    options: [
      'Prescription accuracy',
      'Lens rotation and stabilization',
      'Tear film quality',
      'Corneal astigmatism amount'
    ],
    correctAnswer: 1,
    explanation: 'For a patient with toric soft lenses reporting inconsistent vision that improves with blinking, lens rotation and stabilization should be assessed first. This symptom pattern strongly suggests that the lens is rotating or not stabilizing properly. When the patient blinks, the lens momentarily returns to the correct orientation, temporarily improving vision before rotating again.',
    category: 'follow-up-care',
    subcategory: 'problem-solving',
    difficulty: 'medium'
  },
  {
    id: 'quiz-follow-up-010',
    question: 'What follow-up assessment is most important for a patient reporting decreased wear time tolerance with their silicone hydrogel lenses?',
    options: [
      'Visual acuity testing',
      'Lens deposit evaluation',
      'Tear film assessment',
      'Over-refraction'
    ],
    correctAnswer: 2,
    explanation: 'For a patient reporting decreased wear time tolerance with silicone hydrogel lenses, tear film assessment is the most important follow-up evaluation. Decreased wear time often indicates dry eye issues, which may be due to changes in the patient\'s tear film quality or quantity, or interaction between the lens material and the tear film over time.',
    category: 'follow-up-care',
    subcategory: 'problem-solving',
    difficulty: 'medium'
  },
  
  // Lens Replacement Guidelines
  {
    id: 'quiz-follow-up-011',
    question: 'What is a sign that an RGP lens needs replacement due to material deterioration?',
    options: [
      'Slight lens rotation',
      'Decreased lens movement',
      'Visible scratches and wetting defects',
      'Change in lens tint'
    ],
    correctAnswer: 2,
    explanation: 'Visible scratches and wetting defects are signs that an RGP lens needs replacement due to material deterioration. These surface changes can cause discomfort, reduced vision quality, increased deposits, and potential ocular surface damage. They indicate that the lens material has degraded beyond what polishing or cleaning can restore.',
    category: 'follow-up-care',
    subcategory: 'replacement-guidelines',
    difficulty: 'easy'
  },
  {
    id: 'quiz-follow-up-012',
    question: 'What is the recommended replacement schedule for most current daily wear silicone hydrogel contact lenses?',
    options: [
      'Every 1-2 weeks',
      'Every 2-4 weeks',
      'Every 3-6 months',
      'Every year'
    ],
    correctAnswer: 1,
    explanation: 'The recommended replacement schedule for most current daily wear silicone hydrogel contact lenses is every 2-4 weeks (typically monthly). This replacement frequency balances the material durability of silicone hydrogel with the inevitable buildup of deposits and material degradation that occurs with regular wear, helping maintain ocular health and comfort.',
    category: 'follow-up-care',
    subcategory: 'replacement-guidelines',
    difficulty: 'easy'
  },
  {
    id: 'quiz-follow-up-013',
    question: 'Under what circumstance should the practitioner recommend immediate lens replacement regardless of the lens age?',
    options: [
      'When visual acuity drops by 0.25D',
      'When the patient reports slight end-of-day discomfort',
      'When the lens has been exposed to contamination or infection risk',
      'When the patient wants a different lens color'
    ],
    correctAnswer: 2,
    explanation: 'The practitioner should recommend immediate lens replacement when the lens has been exposed to contamination or infection risk, regardless of the lens age. This includes exposure to tap water, swimming without protection, cases of eye infection, or improper handling that introduces significant contamination risk. Safety concerns always override regular replacement schedules.',
    category: 'follow-up-care',
    subcategory: 'replacement-guidelines',
    difficulty: 'easy'
  },
  {
    id: 'quiz-follow-up-014',
    question: 'What factor might necessitate more frequent lens replacement than the manufacturer\'s recommended schedule?',
    options: [
      'High myopia',
      'Heavy protein depositor',
      'Prior LASIK surgery',
      'Presbyopia'
    ],
    correctAnswer: 1,
    explanation: 'Being a heavy protein depositor might necessitate more frequent lens replacement than the manufacturer\'s recommended schedule. Patients who rapidly accumulate protein and lipid deposits on their lenses may experience decreased comfort, reduced vision, and increased complication risk, requiring more frequent replacement to maintain optimal performance and eye health.',
    category: 'follow-up-care',
    subcategory: 'replacement-guidelines',
    difficulty: 'medium'
  },
  {
    id: 'quiz-follow-up-015',
    question: 'What is the proper recommendation for a patient who repeatedly extends the use of monthly replacement lenses to 6-8 weeks?',
    options: [
      'Refuse to continue providing contact lens services',
      'Prescribe more frequent replacement lenses with stricter warnings',
      'Consider prescribing a more durable lens with a longer replacement schedule',
      'Recommend switching to daily disposable lenses'
    ],
    correctAnswer: 2,
    explanation: 'For a patient who repeatedly extends monthly replacement lenses to 6-8 weeks despite education, considering a more durable lens with a longer FDA-approved replacement schedule may be the most practical approach. Matching the prescribed replacement schedule to the patient\'s actual behavior (when a longer schedule option exists) can lead to better compliance and potentially better ocular health than continued non-compliance with a shorter schedule.',
    category: 'follow-up-care',
    subcategory: 'replacement-guidelines',
    difficulty: 'medium'
  },
  
  // Prescription Updates
  {
    id: 'quiz-follow-up-016',
    question: 'How often should a contact lens prescription be updated for a stable adult patient with no ocular health concerns?',
    options: [
      'Every 3 months',
      'Every 6 months',
      'Annually',
      'Every 2 years'
    ],
    correctAnswer: 2,
    explanation: 'For a stable adult patient with no ocular health concerns, a contact lens prescription should typically be updated annually. This frequency allows for regular assessment of ocular health, lens fit, and visual needs while ensuring the prescription remains current and appropriate. Many states and regulatory bodies also require annual examinations to renew prescriptions.',
    category: 'follow-up-care',
    subcategory: 'prescription-updates',
    difficulty: 'easy'
  },
  {
    id: 'quiz-follow-up-017',
    question: 'What is the minimum prescription change that typically warrants updating a contact lens power?',
    options: [
      '0.25D',
      '0.50D',
      '0.75D',
      '1.00D'
    ],
    correctAnswer: 1,
    explanation: 'The minimum prescription change that typically warrants updating a contact lens power is 0.50D. Changes of 0.25D are often not clinically significant enough to justify a new lens, while changes of 0.50D or greater usually provide noticeable improvement in vision that outweighs the adaptation requirements and costs of updating the prescription.',
    category: 'follow-up-care',
    subcategory: 'prescription-updates',
    difficulty: 'medium'
  },
  {
    id: 'quiz-follow-up-018',
    question: 'What approach is recommended when updating the prescription for a successful long-term RGP lens wearer with a significant refractive change?',
    options: [
      'Switch immediately to soft lenses',
      'Make incremental changes if the total change is large',
      'Always change to the full new prescription regardless of magnitude',
      'Recommend refractive surgery instead'
    ],
    correctAnswer: 1,
    explanation: 'When updating the prescription for a successful long-term RGP lens wearer with a significant refractive change, making incremental changes is recommended if the total change is large. This approach helps the patient adapt more comfortably to the new prescription, especially if they\'ve been wearing the previous prescription successfully for many years.',
    category: 'follow-up-care',
    subcategory: 'prescription-updates',
    difficulty: 'medium'
  },
  {
    id: 'quiz-follow-up-019',
    question: 'What is an appropriate follow-up protocol after updating a multifocal contact lens prescription?',
    options: [
      'No follow-up is needed if the patient has worn multifocals before',
      'One week follow-up to assess near and distance vision performance',
      'Three month follow-up only',
      'Follow-up only if the patient reports problems'
    ],
    correctAnswer: 1,
    explanation: 'After updating a multifocal contact lens prescription, a one-week follow-up to assess near and distance vision performance is appropriate. Multifocal lens changes often require fine-tuning and neuroadaptation. The one-week follow-up allows assessment of real-world visual function and provides an opportunity to make adjustments before the patient becomes frustrated with suboptimal performance.',
    category: 'follow-up-care',
    subcategory: 'prescription-updates',
    difficulty: 'medium'
  },
  {
    id: 'quiz-follow-up-020',
    question: 'When should a presbyopic patient\'s add power be reassessed?',
    options: [
      'Only when the patient complains about near vision',
      'Every 6 months regardless of symptoms',
      'Annually during regular comprehensive examination',
      'Every 2-3 years unless problems arise'
    ],
    correctAnswer: 2,
    explanation: 'A presbyopic patient\'s add power should be reassessed annually during their regular comprehensive examination. Presbyopia typically progresses gradually, and annual reassessment allows for timely adjustments to maintain optimal near vision. This schedule coincides with the recommended frequency for general contact lens evaluations, making it convenient for both practitioner and patient.',
    category: 'follow-up-care',
    subcategory: 'prescription-updates',
    difficulty: 'easy'
  }
]; 