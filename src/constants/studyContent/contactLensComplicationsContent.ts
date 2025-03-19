import { TopicStudyContent } from '../../interfaces/StudyContent';

export const contactLensComplicationsContent: TopicStudyContent = {
  topicId: 'cl-complications',
  title: 'Contact Lens Complications',
  introduction: 'Contact lens wear can lead to various complications ranging from mild discomfort to serious sight-threatening conditions. Understanding, identifying, and managing these complications is essential for any eye care professional working with contact lens patients. This module covers the most common complications associated with contact lens wear, their causes, symptoms, and management strategies.',
  objectives: [
    'Identify and describe common corneal complications related to contact lens wear',
    'Recognize the signs and symptoms of allergic and toxic reactions',
    'Understand the causes of contact lens discomfort and intolerance',
    'Learn appropriate management strategies for various complications',
    'Develop skills to differentiate between urgent and non-urgent complications',
    'Understand prevention strategies to minimize complications'
  ],
  sections: [
    {
      id: 'corneal-complications',
      title: 'Corneal Complications',
      type: 'main',
      content: [
        {
          id: 'corneal-intro',
          type: 'paragraph',
          content: {
            text: 'The cornea is particularly vulnerable to complications from contact lens wear due to its direct interaction with the lens and its need for oxygen. Many corneal complications arise from hypoxia (oxygen deprivation), mechanical trauma, or microbial invasion.'
          }
        },
        {
          id: 'microbial-keratitis',
          type: 'definition',
          content: {
            term: 'Microbial Keratitis',
            definition: 'A serious infection of the cornea that can be bacterial, fungal, or caused by amoeba. This is the most serious complication of contact lens wear and can lead to permanent vision loss if not treated promptly.',
            related: ['corneal-ulcer', 'acanthamoeba', 'pseudomonas']
          }
        },
        {
          id: 'mk-signs-symptoms',
          type: 'list',
          content: {
            title: 'Signs and Symptoms of Microbial Keratitis:',
            items: [
              'Severe pain and photophobia',
              'Redness and inflammation',
              'Decreased vision',
              'Corneal infiltrate or ulceration',
              'Anterior chamber reaction',
              'Discharge'
            ],
            ordered: false
          }
        },
        {
          id: 'mk-risk-factors',
          type: 'list',
          content: {
            title: 'Risk Factors:',
            items: [
              'Overnight wear of contact lenses',
              'Poor lens hygiene',
              'Swimming or showering while wearing lenses',
              'Extended lens wearing time',
              'Contaminated lens case or solution',
              'Previous corneal trauma'
            ],
            ordered: false
          }
        },
        {
          id: 'mk-management',
          type: 'paragraph',
          content: {
            text: 'Management of microbial keratitis requires immediate professional attention. Treatment typically involves intensive antimicrobial therapy with frequent application of topical antibiotics. Severe cases may require hospitalization and possible surgical intervention.'
          }
        },
        {
          id: 'mk-warning',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Emergency Condition',
            text: 'Microbial keratitis is an ocular emergency. Patients with suspected microbial keratitis should be referred immediately to an ophthalmologist.'
          }
        },
        {
          id: 'corneal-infiltrates',
          type: 'definition',
          content: {
            term: 'Corneal Infiltrates',
            definition: 'Accumulations of inflammatory cells in the cornea that appear as small whitish or grayish opacities. They can be sterile (inflammatory) or infectious.',
            related: ['immune-response', 'hypersensitivity', 'microbial-keratitis']
          }
        },
        {
          id: 'infiltrates-types',
          type: 'table',
          content: {
            headers: ['Type', 'Characteristics', 'Management'],
            rows: [
              ['Sterile Peripheral Infiltrates', 'Small, peripheral, minimal symptoms', 'Discontinue lens wear, monitor, possibly topical steroids'],
              ['Infectious Infiltrates', 'More central, painful, anterior chamber reaction', 'Antimicrobial therapy, intensive monitoring'],
              ['CLARE (Contact Lens Acute Red Eye)', 'Occurs after overnight wear, multiple infiltrates', 'Discontinue lens wear, consider solution change'],
              ['CLPU (Contact Lens Peripheral Ulcer)', 'Small peripheral ulcer with infiltrate', 'Discontinue lens wear, antibiotics as needed']
            ],
            caption: 'Types of corneal infiltrates associated with contact lens wear'
          }
        },
        {
          id: 'corneal-neovascularization',
          type: 'definition',
          content: {
            term: 'Corneal Neovascularization',
            definition: 'Growth of new blood vessels into the normally avascular cornea, usually due to chronic hypoxia.',
            related: ['hypoxia', 'oxygen-permeability', 'chronic-inflammation']
          }
        },
        {
          id: 'neovascularization-image',
          type: 'image',
          content: {
            src: '/assets/images/study/corneal-neovascularization.jpg',
            alt: 'Corneal neovascularization in a contact lens wearer',
            caption: 'Corneal neovascularization secondary to chronic contact lens-induced hypoxia',
            width: '60%'
          }
        },
        {
          id: 'neovascularization-management',
          type: 'paragraph',
          content: {
            text: 'Management includes switching to a higher oxygen-permeable lens material, reducing wearing time, ensuring proper fit, and in some cases, discontinuing lens wear. Neovascularization may be reversible in early stages if the hypoxic stimulus is removed.'
          }
        },
        {
          id: 'corneal-edema',
          type: 'definition',
          content: {
            term: 'Corneal Edema',
            definition: 'Swelling of the cornea due to excessive fluid accumulation, often resulting from hypoxia. Can cause blurred vision and halos around lights, especially upon waking.',
            related: ['endothelial-function', 'hypoxia', 'tight-lens-syndrome']
          }
        }
      ]
    },
    {
      id: 'allergic-toxic-reactions',
      title: 'Allergic and Toxic Reactions',
      type: 'main',
      content: [
        {
          id: 'allergic-intro',
          type: 'paragraph',
          content: {
            text: 'Contact lens wearers may experience allergic or toxic reactions to lens materials, preservatives in care solutions, or deposits on lenses. These reactions can cause significant discomfort and may lead to contact lens intolerance if not properly managed.'
          }
        },
        {
          id: 'gpc-definition',
          type: 'definition',
          content: {
            term: 'Giant Papillary Conjunctivitis (GPC)',
            definition: 'An inflammatory condition of the upper tarsal conjunctiva characterized by enlarged papillae, often caused by mechanical irritation from lens deposits or a hypersensitivity reaction.',
            related: ['papillae', 'protein-deposits', 'mechanical-irritation']
          }
        },
        {
          id: 'gpc-symptoms',
          type: 'list',
          content: {
            title: 'Symptoms of GPC:',
            items: [
              'Increased mucus production',
              'Itching, especially when removing lenses',
              'Lens awareness and discomfort',
              'Lens intolerance (reduced wearing time)',
              'Excessive lens movement',
              'Blurred vision'
            ],
            ordered: false
          }
        },
        {
          id: 'gpc-management',
          type: 'paragraph',
          content: {
            text: 'Management includes temporarily discontinuing lens wear, switching to daily disposable lenses, improving cleaning regimens, or changing lens materials. Topical mast cell stabilizers or antihistamines may be prescribed in severe cases.'
          }
        },
        {
          id: 'solution-sensitivity',
          type: 'definition',
          content: {
            term: 'Solution Sensitivity/Toxicity',
            definition: 'A reaction to preservatives or other components in contact lens solutions, causing irritation, redness, and discomfort upon lens insertion or throughout wear.',
            related: ['preservatives', 'PHMB', 'thimerosal', 'hydrogen-peroxide']
          }
        },
        {
          id: 'solution-reactions',
          type: 'table',
          content: {
            headers: ['Reaction Type', 'Common Causes', 'Symptoms', 'Management'],
            rows: [
              ['Preservative Toxicity', 'PHMB, polyquaternium-1', 'Stinging, redness upon insertion', 'Switch to preservative-free system'],
              ['Delayed Hypersensitivity', 'Thimerosal, chlorhexidine', 'Redness, itching developing over time', 'Identify and eliminate allergen'],
              ['Solution-Induced Corneal Staining', 'Incompatibility between solution and lens material', 'Corneal staining visible with fluorescein', 'Change solution system'],
              ['Hydrogen Peroxide Reaction', 'Residual peroxide (inadequate neutralization)', 'Severe burning, redness immediately after insertion', 'Ensure proper neutralization time']
            ],
            caption: 'Common solution-related reactions in contact lens wearers'
          }
        },
        {
          id: 'solution-toxicity-tip',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Diagnosing Solution Reactions',
            text: 'If a patient reports burning or stinging upon lens insertion that improves during the day, solution sensitivity should be suspected. Try switching to a different solution system or hydrogen peroxide system (with proper neutralization).'
          }
        }
      ]
    },
    {
      id: 'cl-discomfort',
      title: 'Contact Lens Discomfort and Intolerance',
      type: 'main',
      content: [
        {
          id: 'discomfort-intro',
          type: 'paragraph',
          content: {
            text: 'Contact lens discomfort (CLD) is a condition characterized by adverse ocular sensations related to lens wear. It can range from mild awareness to severe discomfort that necessitates lens removal. CLD is a leading cause of contact lens dropout.'
          }
        },
        {
          id: 'cld-definition',
          type: 'definition',
          content: {
            term: 'Contact Lens Discomfort (CLD)',
            definition: 'Recurring or persistent adverse ocular sensations related to lens wear, either during wear or after removal, with or without visual disturbance, resulting from reduced compatibility between the lens and the ocular environment.',
            related: ['dryness', 'lens-awareness', 'discontinuation', 'dropout']
          }
        },
        {
          id: 'cld-factors',
          type: 'list',
          content: {
            title: 'Factors Contributing to CLD:',
            items: [
              'Environmental factors (low humidity, air conditioning, digital device use)',
              'Lens material and design (wettability, edge design, modulus)',
              'Lens care solutions and compliance',
              'Wearing schedule and replacement frequency',
              'Tear film abnormalities (quality, quantity, stability)',
              'Meibomian gland dysfunction',
              'Underlying ocular surface disease'
            ],
            ordered: false
          }
        },
        {
          id: 'dry-eye-cl',
          type: 'definition',
          content: {
            term: 'Contact Lens-Induced Dry Eye',
            definition: 'Dryness symptoms specifically associated with contact lens wear, often due to tear film disruption, increased evaporation, or altered tear composition.',
            related: ['tear-film-stability', 'evaporative-dry-eye', 'aqueous-deficiency']
          }
        },
        {
          id: 'cld-management',
          type: 'paragraph',
          content: {
            text: 'Management of contact lens discomfort requires a systematic approach to identify contributing factors. Interventions may include changing lens material, design, or replacement schedule; modifying the care regimen; addressing environmental factors; and treating underlying ocular conditions.'
          }
        },
        {
          id: 'cld-interventions',
          type: 'table',
          content: {
            headers: ['Intervention', 'Details', 'Potential Benefit'],
            rows: [
              ['Lens Material Modification', 'Switch to silicone hydrogel or higher water content hydrogel', 'Improved oxygen transmission and wettability'],
              ['Replacement Schedule', 'Change to more frequent replacement (e.g., daily disposable)', 'Reduced deposit buildup and fresh lens surface'],
              ['Rewetting Drops', 'Preservative-free artificial tears compatible with CLs', 'Temporary relief of dryness symptoms'],
              ['Care System Optimization', 'Hydrogen peroxide systems or preservative-free options', 'Reduced chemical sensitivity and toxicity'],
              ['Environmental Management', 'Humidifiers, reduced screen time, proper blinking', 'Improved tear film stability'],
              ['Tear Film Treatment', 'Medications for dry eye disease, lid hygiene', 'Addressing underlying ocular surface issues'],
              ['Lens Design', 'Different edge profiles, thinner designs', 'Reduced mechanical irritation']
            ],
            caption: 'Management strategies for contact lens discomfort'
          }
        }
      ]
    },
    {
      id: 'prevention-strategies',
      title: 'Prevention Strategies and Patient Education',
      type: 'summary',
      content: [
        {
          id: 'prevention-intro',
          type: 'paragraph',
          content: {
            text: 'Preventing contact lens complications begins with thorough patient education and continues with regular follow-up care. Implementing proper prevention strategies can significantly reduce the risk of serious complications.'
          }
        },
        {
          id: 'education-checklist',
          type: 'list',
          content: {
            title: 'Essential Patient Education Points:',
            items: [
              'Proper hand washing before handling lenses',
              'Correct cleaning and disinfection procedures',
              'Lens case hygiene and regular replacement',
              'Adherence to wearing and replacement schedules',
              'Avoiding water exposure while wearing lenses',
              'Not sleeping in lenses unless specifically prescribed',
              'Signs and symptoms requiring immediate professional attention',
              'Regular follow-up appointments even without symptoms'
            ],
            ordered: false
          }
        },
        {
          id: 'red-flags',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Red Flags Requiring Immediate Attention',
            text: 'Instruct patients to seek immediate care for: pain, photophobia, redness, reduced vision, or unusual discharge. These symptoms may indicate a sight-threatening condition that requires urgent treatment.'
          }
        },
        {
          id: 'follow-up-schedule',
          type: 'paragraph',
          content: {
            text: 'Establish appropriate follow-up schedules based on lens type, patient risk factors, and compliance history. New wearers or those with previous complications may need more frequent monitoring. All contact lens wearers should be evaluated at least annually to assess ocular health and update prescriptions.'
          }
        }
      ]
    }
  ],
  summary: 'Contact lens complications range from minor discomfort to sight-threatening conditions like microbial keratitis. Corneal complications often result from hypoxia, mechanical trauma, or infection, while allergic reactions typically respond to changes in lens materials or care systems. Understanding the causes, symptoms, and management of these complications is essential for providing optimal care to contact lens patients. Prevention through proper education, regular follow-up, and appropriate lens selection remains the best approach to maintaining successful contact lens wear.',
  practiceQuestions: [
    {
      question: 'Which of the following is considered an ocular emergency requiring immediate professional attention?',
      options: [
        'Mild lens awareness after a full day of wear',
        'Slight redness that resolves after lens removal',
        'Painful eye with a white corneal infiltrate',
        'Solution sensitivity causing stinging upon insertion'
      ],
      correctAnswer: 2,
      explanation: 'A painful eye with a white corneal infiltrate may indicate microbial keratitis, which is an ocular emergency that requires immediate attention to prevent vision loss.'
    },
    {
      question: 'Corneal neovascularization in contact lens wearers is most commonly associated with:',
      options: [
        'Allergic reaction to lens care solutions',
        'Chronic corneal hypoxia',
        'Bacterial contamination of the lens case',
        'Mechanical trauma from lens insertion'
      ],
      correctAnswer: 1,
      explanation: 'Corneal neovascularization is primarily caused by chronic hypoxia (oxygen deprivation), which triggers the growth of new blood vessels into the normally avascular cornea as a compensatory mechanism.'
    },
    {
      question: 'Which of the following is the most appropriate initial management for Giant Papillary Conjunctivitis (GPC)?',
      options: [
        'Topical antibiotic therapy',
        'Temporary discontinuation of lens wear',
        'Switch to extended wear schedule',
        'Increase protein removal cleaning'
      ],
      correctAnswer: 1,
      explanation: 'The initial management for GPC typically involves temporarily discontinuing lens wear to allow the inflammatory response to resolve. Additional measures may include changing to daily disposable lenses or improving cleaning regimens.'
    },
    {
      question: 'A patient reports burning and stinging immediately upon inserting lenses that gradually improves throughout the day. The most likely cause is:',
      options: [
        'Microbial keratitis',
        'Solution sensitivity or toxicity',
        'Corneal abrasion',
        'Giant Papillary Conjunctivitis'
      ],
      correctAnswer: 1,
      explanation: 'Burning and stinging immediately upon lens insertion that improves during wear is a classic sign of solution sensitivity or toxicity. This reaction occurs when the preservatives or other components in the solution cause irritation to the ocular surface.'
    },
    {
      question: 'Risk factors for microbial keratitis in contact lens wearers include all of the following EXCEPT:',
      options: [
        'Overnight wear of contact lenses',
        'Swimming while wearing contact lenses',
        'Using daily disposable lenses as prescribed',
        'Poor hand hygiene before handling lenses'
      ],
      correctAnswer: 2,
      explanation: 'Using daily disposable lenses as prescribed is actually protective against microbial keratitis. All the other options are known risk factors that increase the likelihood of developing contact lens-related infections.'
    }
  ]
}; 