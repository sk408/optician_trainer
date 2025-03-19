import { TopicStudyContent } from '../../interfaces/StudyContent';

export const contactLensCareContent: TopicStudyContent = {
  topicId: 'cl-care',
  title: 'Contact Lens Care and Maintenance',
  introduction: 'Proper care and maintenance of contact lenses is essential for maintaining eye health, maximizing lens performance, and preventing complications. This module covers the various care systems, cleaning regimens, and best practices for contact lens handling, storage, and maintenance. Understanding these principles is critical for all contact lens wearers and the professionals who advise them.',
  objectives: [
    'Understand the different types of contact lens care systems and their appropriate use',
    'Learn proper lens cleaning, disinfection, and storage procedures',
    'Identify common errors in contact lens care and their consequences',
    'Understand the relationship between lens care and ocular complications',
    'Learn effective patient education techniques for proper lens care',
    'Compare compliance strategies for different patient populations'
  ],
  sections: [
    {
      id: 'care-systems-overview',
      title: 'Contact Lens Care Systems Overview',
      type: 'introduction',
      content: [
        {
          id: 'care-intro',
          type: 'paragraph',
          content: {
            text: 'Contact lens care systems are designed to clean, disinfect, and store contact lenses. The appropriate system depends on the lens material, replacement schedule, patient sensitivities, and individual needs. Using the correct solutions and following proper care procedures are essential for maintaining healthy lens wear.'
          }
        },
        {
          id: 'care-purpose',
          type: 'list',
          content: {
            title: 'Functions of Contact Lens Care Systems:',
            items: [
              'Cleaning: removing deposits, debris, and microorganisms from the lens surface',
              'Disinfection: killing or inactivating potentially harmful microorganisms',
              'Storage: maintaining lens hydration and preserving disinfection between wearing periods',
              'Rinsing: removing cleaning agents before lens insertion',
              'Wetting/lubricating: enhancing lens surface wettability and comfort'
            ],
            ordered: false
          }
        },
        {
          id: 'system-types',
          type: 'table',
          content: {
            headers: ['Care System Type', 'Description', 'Best For', 'Considerations'],
            rows: [
              ['Multipurpose Solutions (MPS)', 'All-in-one solution for cleaning, rinsing, disinfecting, and storage', 'Most soft lens wearers; convenience-focused patients', 'Some patients may have sensitivity to preservatives'],
              ['Hydrogen Peroxide Systems', 'Uses 3% hydrogen peroxide for disinfection with subsequent neutralization', 'Sensitive patients; heavy protein depositors', 'Requires specific neutralization time; more steps than MPS'],
              ['Daily Cleaners', 'Used before disinfection for enhanced cleaning', 'Heavy depositors; makeup wearers; extended replacement schedules', 'Additional step in care regimen'],
              ['Enzymatic Cleaners', 'Breaks down protein deposits periodically', 'Protein depositors; quarterly or longer replacement', 'Used weekly or monthly as a supplement'],
              ['Saline Solutions', 'For rinsing only; no disinfection properties', 'Rinsing after other cleaning steps', 'Never use for storage or disinfection']
            ],
            caption: 'Types of contact lens care systems and their applications'
          }
        }
      ]
    },
    {
      id: 'multipurpose-solutions',
      title: 'Multipurpose Solutions',
      type: 'main',
      content: [
        {
          id: 'mps-overview',
          type: 'paragraph',
          content: {
            text: 'Multipurpose solutions (MPS) are the most commonly prescribed care systems due to their convenience and effectiveness. These solutions combine cleaning, disinfection, and storage functions in a single product, simplifying the care regimen.'
          }
        },
        {
          id: 'mps-components',
          type: 'definition',
          content: {
            term: 'Multipurpose Solution Components',
            definition: 'MPS typically contains several active ingredients including antimicrobial agents (preservatives), surfactants for cleaning, chelating agents, and buffering agents to maintain pH.',
            related: ['preservatives', 'surfactants', 'disinfection']
          }
        },
        {
          id: 'common-preservatives',
          type: 'table',
          content: {
            headers: ['Preservative', 'Examples', 'Properties'],
            rows: [
              ['PHMB (Polyhexamethylene Biguanide)', 'ReNu, Complete', 'Effective antimicrobial; may cause sensitivity in some patients'],
              ['Polyquaternium-1', 'Opti-Free', 'Quaternary ammonium compound; broad antimicrobial spectrum'],
              ['Alexidine', 'Opti-Free PureMoist', 'Biguanide disinfectant with good safety profile'],
              ['MAPD (Myristamidopropyl Dimethylamine)', 'OPTI-FREE Express', 'Amidoamine; effective against Acanthamoeba']
            ],
            caption: 'Common preservatives used in multipurpose solutions'
          }
        },
        {
          id: 'mps-procedure',
          type: 'list',
          content: {
            title: 'Proper MPS Procedure:',
            items: [
              'Wash hands thoroughly with soap and water and dry with lint-free towel',
              'Place lens in palm and apply several drops of solution',
              'Rub the lens gently with fingertip for 20-30 seconds on each side',
              'Rinse thoroughly with fresh solution',
              'Place lens in clean case filled with fresh solution',
              'Repeat for the second lens',
              'Allow minimum recommended soaking time (usually 4-6 hours)'
            ],
            ordered: true
          }
        },
        {
          id: 'rub-rinse-warning',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Rub and Rinse Required',
            text: 'Even with "no-rub" solutions, mechanical rubbing of lenses is still recommended by most eye care professionals to enhance cleaning effectiveness. Studies show significantly better cleaning with the rub step included.'
          }
        }
      ]
    },
    {
      id: 'hydrogen-peroxide-systems',
      title: 'Hydrogen Peroxide Systems',
      type: 'main',
      content: [
        {
          id: 'peroxide-overview',
          type: 'paragraph',
          content: {
            text: 'Hydrogen peroxide systems use 3% hydrogen peroxide as a disinfectant, which must be neutralized before lens wear. These systems are preservative-free, making them ideal for patients with solution sensitivities or allergies.'
          }
        },
        {
          id: 'peroxide-advantages',
          type: 'list',
          content: {
            title: 'Advantages of Peroxide Systems:',
            items: [
              'Preservative-free - reduced risk of chemical sensitivity',
              'Excellent disinfection efficacy, including against Acanthamoeba',
              'Effective protein removal',
              'No preservative uptake into lens material',
              'Better option for silicone hydrogel lenses'
            ],
            ordered: false
          }
        },
        {
          id: 'peroxide-types',
          type: 'definition',
          content: {
            term: 'Types of Peroxide Systems',
            definition: 'Hydrogen peroxide systems come in two main forms: two-step systems that require a separate neutralization step, and one-step systems that incorporate neutralization into the storage case.',
            related: ['catalytic-disc', 'neutralization', 'one-step-systems']
          }
        },
        {
          id: 'peroxide-systems-table',
          type: 'table',
          content: {
            headers: ['System Type', 'Neutralization Method', 'Advantages', 'Disadvantages'],
            rows: [
              ['One-step (e.g., CLEAR CARE)', 'Platinum disc in case catalyzes neutralization', 'Convenient; controlled neutralization time', 'Requires specific case; can\'t rinse with solution'],
              ['Two-step (less common now)', 'Separate neutralizing tablet or solution', 'Can be more thorough', 'More steps; risk of forgetting neutralization']
            ],
            caption: 'Comparison of hydrogen peroxide system types'
          }
        },
        {
          id: 'peroxide-warning',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Peroxide Safety',
            text: 'Un-neutralized hydrogen peroxide causes severe burning and redness if placed on the eye. Patients must understand the importance of complete neutralization (typically 6+ hours) before lens insertion. Never rinse lenses with peroxide solution directly before insertion.'
          }
        }
      ]
    },
    {
      id: 'lens-cases',
      title: 'Contact Lens Cases and Hygiene',
      type: 'main',
      content: [
        {
          id: 'case-importance',
          type: 'paragraph',
          content: {
            text: 'Contact lens cases are a critical component of lens care, yet they are often overlooked as a potential source of contamination. Proper case care and regular replacement are essential for preventing microbial contamination and subsequent eye infections.'
          }
        },
        {
          id: 'case-contamination',
          type: 'definition',
          content: {
            term: 'Case Contamination',
            definition: 'The presence of microorganisms in the lens case that can form biofilms and potentially cause eye infections. Studies have shown that 50-80% of contact lens cases used by asymptomatic wearers are contaminated with bacteria or fungi.',
            related: ['biofilm', 'acanthamoeba', 'microbial-keratitis']
          }
        },
        {
          id: 'case-care-protocol',
          type: 'list',
          content: {
            title: 'Lens Case Care Protocol:',
            items: [
              'Empty and rinse case with fresh solution (not tap water) after removing lenses',
              'Rub case with clean fingers to remove debris',
              'Rinse with fresh multipurpose solution',
              'Allow to air dry completely by placing face down on clean tissue with caps off',
              'Replace cases at least every 3 months or immediately if cracked or damaged',
              'Use only the case designed for your care system (especially for hydrogen peroxide systems)'
            ],
            ordered: true
          }
        },
        {
          id: 'case-mistakes',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Common Case Care Mistakes',
            text: 'Never rinse cases with tap water as it may contain Acanthamoeba. Avoid topping off old solution with new solution. Don\'t use the same case indefinitely - regular replacement is crucial for safety.'
          }
        },
        {
          id: 'case-types',
          type: 'image',
          content: {
            src: '/assets/images/study/lens-case-types.jpg',
            alt: 'Various types of contact lens cases including standard, flat, and hydrogen peroxide cases',
            caption: 'Common contact lens case types: standard case (left), flat pack travel case (center), hydrogen peroxide case with neutralizing disc (right)',
            width: '70%'
          }
        }
      ]
    },
    {
      id: 'compliance-challenges',
      title: 'Compliance Challenges and Solutions',
      type: 'main',
      content: [
        {
          id: 'compliance-intro',
          type: 'paragraph',
          content: {
            text: 'Non-compliance with lens care instructions is extremely common, with studies suggesting 40-90% of contact lens wearers do not fully comply with recommended care procedures. Understanding the barriers to compliance and implementing effective strategies can improve patient outcomes.'
          }
        },
        {
          id: 'common-non-compliance',
          type: 'list',
          content: {
            title: 'Common Non-Compliant Behaviors:',
            items: [
              'Using tap water to rinse lenses or cases',
              'Sleeping in lenses not approved for overnight wear',
              'Topping off solution instead of using fresh solution',
              'Exceeding recommended wearing time',
              'Using expired solutions or lenses',
              'Failing to wash hands before handling lenses',
              'Swimming or showering while wearing lenses',
              'Using saliva to wet lenses',
              'Not replacing cases regularly',
              'Using homemade saline or alternative solutions'
            ],
            ordered: false
          }
        },
        {
          id: 'compliance-barriers',
          type: 'table',
          content: {
            headers: ['Barrier to Compliance', 'Solution Strategy'],
            rows: [
              ['Lack of understanding of risks', 'Clear education with specific examples of complications'],
              ['Complicated care regimens', 'Simplify when possible (e.g., daily disposables)'],
              ['Financial concerns', 'Discuss cost-effective options that maintain safety'],
              ['Forgetfulness', 'Establish routines; set phone reminders'],
              ['Time constraints', 'Suggest time-saving but safe alternatives'],
              ['Complacency after long-term wear', 'Regular reinforcement of care protocols at check-ups']
            ],
            caption: 'Barriers to compliance and potential solutions'
          }
        },
        {
          id: 'compliance-strategies',
          type: 'paragraph',
          content: {
            text: 'The most effective approach to improving compliance combines clear education, appropriate lens and solution selection for the individual, written instructions, demonstrations, and regular reinforcement. For patients with persistent non-compliance, consider recommending daily disposable lenses to eliminate care regimen entirely.'
          }
        },
        {
          id: 'simplification-tip',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Simplification Strategy',
            text: 'When possible, recommend daily disposable lenses for patients with compliance issues or complicated schedules. Though more expensive initially, they eliminate most care-related complications and may reduce long-term costs from complications.'
          }
        }
      ]
    },
    {
      id: 'special-considerations',
      title: 'Special Considerations for Lens Care',
      type: 'advanced',
      content: [
        {
          id: 'rgp-care',
          type: 'definition',
          content: {
            term: 'RGP Lens Care',
            definition: 'Rigid gas permeable lenses often require different care systems than soft lenses, typically involving separate cleaning, disinfecting, and wetting solutions.',
            related: ['surface-deposits', 'wetting-agents', 'boston-solutions']
          }
        },
        {
          id: 'rgp-care-steps',
          type: 'list',
          content: {
            title: 'RGP Care Procedure:',
            items: [
              'Clean with RGP cleaning solution, rubbing gently between fingers',
              'Rinse thoroughly with preservative-free saline or rinsing solution',
              'Place in storage case with conditioning/disinfecting solution',
              'Use wetting drops before insertion if needed'
            ],
            ordered: true
          }
        },
        {
          id: 'scleral-lens-care',
          type: 'paragraph',
          content: {
            text: 'Scleral lenses require additional considerations due to their size and the fact that they hold a reservoir of solution against the cornea. Preservative-free solutions are typically required for filling the bowl of the lens before insertion to avoid preservative reactions. Proper cleaning of the landing zone is essential for comfort and health.'
          }
        },
        {
          id: 'specialty-lens-table',
          type: 'table',
          content: {
            headers: ['Lens Type', 'Special Care Considerations'],
            rows: [
              ['Scleral Lenses', 'Preservative-free saline for filling; DMV plunger for removal; thorough cleaning of landing zone'],
              ['Hybrid Lenses', 'Special care to clean junction between RGP center and soft skirt; specific solutions recommended by manufacturer'],
              ['Custom Soft Lenses', 'Often require more intensive cleaning regimens due to longer replacement intervals'],
              ['Orthokeratology Lenses', 'Thorough cleaning after overnight wear; special conditioning solutions may be required']
            ],
            caption: 'Special care considerations for specialty contact lenses'
          }
        },
        {
          id: 'travel-considerations',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Travel Considerations',
            text: 'When traveling, advise patients to: bring adequate supplies, consider daily disposables for trips, use sealed travel-size solutions, avoid tap water exposure in all locations, and never store lenses in water or saliva if solutions are unavailable (instead, dispose of the lenses).'
          }
        }
      ]
    }
  ],
  summary: 'Proper contact lens care and maintenance are fundamental to successful contact lens wear. The right care system, cleaning techniques, case hygiene, and patient compliance all contribute to maintaining eye health and preventing complications. Understanding the various options available and matching them to individual patient needs is an essential skill for eye care professionals. Patient education, regular reinforcement, and simplification of regimens when possible are the best approaches to ensuring long-term safety and satisfaction with contact lens wear.',
  practiceQuestions: [
    {
      question: 'Which of the following contact lens care system types is preservative-free?',
      options: [
        'Multipurpose solution',
        'Hydrogen peroxide system',
        'Daily cleaner',
        'Saline solution for soft lenses'
      ],
      correctAnswer: 1,
      explanation: 'Hydrogen peroxide systems are preservative-free, making them ideal for patients with sensitivities to the preservatives found in multipurpose solutions. The hydrogen peroxide itself acts as the disinfectant and must be neutralized before lens wear.'
    },
    {
      question: 'What is the correct procedure for contact lens case care?',
      options: [
        'Rinse with hot tap water and allow to air dry',
        'Wipe with alcohol and let dry completely',
        'Rinse with solution, rub, air dry face down, and replace every 3 months',
        'Rinse and immediately close to keep moisture inside'
      ],
      correctAnswer: 2,
      explanation: 'Proper lens case care includes rinsing with fresh solution (not tap water), rubbing to remove debris, air drying completely face down on a clean tissue with caps off, and replacing the case at least every 3 months.'
    },
    {
      question: 'Which of the following is a common component of multipurpose solutions that may cause sensitivity reactions in some patients?',
      options: [
        'Sodium chloride',
        'Polyvinyl alcohol',
        'PHMB (Polyhexamethylene Biguanide)',
        'Hydroxypropyl methylcellulose'
      ],
      correctAnswer: 2,
      explanation: 'PHMB (Polyhexamethylene Biguanide) is a common preservative in multipurpose solutions that, while effective as an antimicrobial agent, may cause sensitivity reactions in some patients, resulting in symptoms like redness, stinging, or irritation.'
    },
    {
      question: 'What is the primary risk of not properly neutralizing a hydrogen peroxide cleaning system?',
      options: [
        'Contact lens discoloration',
        'Severe ocular burning and redness',
        'Blurry vision for a few hours',
        'Protein buildup on lenses'
      ],
      correctAnswer: 1,
      explanation: 'Unneutralized hydrogen peroxide causes severe burning, pain, and redness if it comes in contact with the eye. Complete neutralization (typically requiring 6+ hours) is essential before inserting lenses cleaned with a peroxide system.'
    },
    {
      question: 'Which of the following is the most effective strategy for improving contact lens care compliance in patients with persistent non-compliance issues?',
      options: [
        'Written instructions with detailed care steps',
        'Recommending daily disposable lenses',
        'More frequent follow-up appointments',
        'Switching to a different multipurpose solution'
      ],
      correctAnswer: 1,
      explanation: 'For patients with persistent non-compliance issues, daily disposable lenses eliminate most care-related steps, significantly reducing the risk of complications from improper cleaning, disinfection, or storage. This simplification strategy is often the most effective solution for non-compliant patients.'
    }
  ]
}; 