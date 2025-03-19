import { TopicStudyContent } from '../../interfaces/StudyContent';

export const patientCommunicationContent: TopicStudyContent = {
  topicId: 'patient-communication',
  title: 'Patient Communication & Service Skills',
  introduction: 'Effective communication and service skills are just as important for opticians as technical knowledge. Many patients will be unfamiliar with optical terminology, so your ability to explain complex concepts in simple terms is essential. This module will help you develop the communication skills needed to build patient trust, understand their needs, and provide exceptional service - skills that often determine whether a patient returns to your practice.',
  objectives: [
    'Develop effective communication techniques for the optical environment',
    'Learn how to explain complex optical concepts in accessible language',
    'Understand strategies for identifying patient needs and expectations',
    'Master basic techniques for handling difficult situations',
    'Learn to provide frame and lens recommendations effectively',
    'Develop skills for building patient loyalty and trust'
  ],
  sections: [
    {
      id: 'communication-basics',
      title: 'Optical Communication Fundamentals',
      type: 'introduction',
      content: [
        {
          id: 'basics-intro',
          type: 'paragraph',
          content: {
            text: 'Communication in an optical setting requires balancing technical accuracy with language patients can understand. Think of yourself as a translator between the technical optical world and the everyday world of your patients. Effective communication builds trust, ensures needs are met, and improves patient satisfaction and compliance.'
          }
        },
        {
          id: 'active-listening-heading',
          type: 'heading',
          content: {
            text: 'Active Listening Skills',
            level: 3
          }
        },
        {
          id: 'active-listening-para',
          type: 'paragraph',
          content: {
            text: 'Active listening involves fully focusing on what the patient is saying rather than passively hearing their words or thinking about what you\'ll say next. This skill helps identify both stated and unstated needs. Remember that many patients don\'t know how to express their vision issues in technical terms.'
          }
        },
        {
          id: 'listening-techniques-list',
          type: 'list',
          content: {
            items: [
              'Maintain appropriate eye contact to show engagement (but be mindful of cultural differences)',
              'Use body language that shows attention (leaning slightly forward, nodding)',
              'Avoid interrupting while the patient speaks, even if you think you know what they\'re trying to say',
              'Ask clarifying questions like "Can you tell me more about when you notice this blurriness?"',
              'Paraphrase what you heard to confirm accuracy: "So you\'re having trouble seeing your computer screen clearly, is that right?"',
              'Take notes on important points when appropriate, especially unique vision needs'
            ],
            ordered: false
          }
        },
        {
          id: 'first-impressions-heading',
          type: 'heading',
          content: {
            text: 'Creating Positive First Impressions',
            level: 3
          }
        },
        {
          id: 'first-impressions-para',
          type: 'paragraph',
          content: {
            text: 'The first 30 seconds of interaction set the tone for the entire patient experience. Professional appearance and demeanor create confidence in your expertise. Remember that getting new glasses can be stressful for patients - they may be worried about cost, appearance, or adapting to a new prescription.'
          }
        },
        {
          id: 'impression-list',
          type: 'list',
          content: {
            items: [
              'Greet patients by name and with a smile when possible ("Good morning, Mr. Johnson, welcome to our practice")',
              'Introduce yourself and explain your role ("I\'m Sarah, I\'ll be your optician today helping you select and fit your new eyewear")',
              'Maintain a professional appearance that reflects optical expertise (clean, professional attire and well-fitting eyewear if you wear glasses)',
              'Acknowledge waiting patients if you\'re busy with others ("I\'ll be with you in about 5 minutes, Ms. Garcia")',
              'Use positive language ("I\'d be happy to help you find frames that work with your prescription" rather than "Your prescription limits your options")'
            ],
            ordered: false
          }
        },
        {
          id: 'communication-barriers-callout',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Communication Barriers',
            text: 'Be aware of potential barriers to effective communication, including hearing impairments, language differences, technical jargon, vision limitations without corrective eyewear, and cognitive disabilities. Adapt your approach to address these barriers appropriately. For example, for a patient with hearing difficulties, face them directly when speaking and reduce background noise when possible. For patients without their glasses, provide a hand-held mirror positioned at a distance they can see clearly.'
          }
        }
      ]
    },
    {
      id: 'needs-assessment',
      title: 'Identifying Patient Needs',
      type: 'main',
      content: [
        {
          id: 'needs-intro',
          type: 'paragraph',
          content: {
            text: 'A complete understanding of the patient\'s vision needs, lifestyle, preferences, and concerns is essential for making appropriate recommendations. Think of yourself as a detective, gathering clues about how the patient uses their eyes throughout the day. Effective questioning techniques help uncover this information, even when patients don\'t know what\'s relevant to share.'
          }
        },
        {
          id: 'questioning-heading',
          type: 'heading',
          content: {
            text: 'Effective Questioning Techniques',
            level: 3
          }
        },
        {
          id: 'question-types-table',
          type: 'table',
          content: {
            headers: ['Question Type', 'Purpose', 'Example'],
            rows: [
              ['Open-ended', 'Gather detailed information', '"What activities do you typically do while wearing your glasses?"'],
              ['Closed', 'Confirm specific information', '"Do you use a computer at work?"'],
              ['Probing', 'Explore concerns in greater detail', '"You mentioned having headaches - when do they typically occur? Before or after reading?"'],
              ['Reflective', 'Clarify and show understanding', '"So you find your current glasses uncomfortable after a few hours of computer work?"'],
              ['Lifestyle', 'Understand daily activities', '"Walk me through your typical day and how you use your vision, from morning to evening."']
            ],
            caption: 'Types of questions and their uses in patient assessment'
          }
        },
        {
          id: 'lifestyle-assessment-heading',
          type: 'heading',
          content: {
            text: 'Lifestyle Assessment',
            level: 3
          }
        },
        {
          id: 'lifestyle-para',
          type: 'paragraph',
          content: {
            text: 'Understanding a patient\'s lifestyle helps determine the most appropriate eyewear options. Patients often don\'t realize how their daily activities impact their eyewear needs. Key areas to explore include:'
          }
        },
        {
          id: 'lifestyle-list',
          type: 'list',
          content: {
            items: [
              'Occupation and work environment (computer usage, distance to monitor, exposure to impacts or chemicals, multiple working distances)',
              'Hobbies and recreational activities (sports, reading, crafts, outdoor activities, water exposure)',
              'Digital device usage patterns (screen time, multiple devices, viewing distances, device sizes)',
              'Driving habits (frequency, night driving, sun exposure, dashboard visibility needs)',
              'Previous eyewear experiences (likes, dislikes, comfort issues, adaptation problems)',
              'Cosmetic preferences and style considerations (fashion preferences, frame size and color preferences)'
            ],
            ordered: false
          }
        },
        {
          id: 'patient-history-heading',
          type: 'heading',
          content: {
            text: 'Understanding Patient History',
            level: 3
          }
        },
        {
          id: 'history-list',
          type: 'list',
          content: {
            items: [
              'Previous prescription information and changes ("How have your glasses changed over the years?")',
              'Adaptation issues with past eyewear ("How long did it take to get used to your last pair of glasses?")',
              'Comfort concerns with previous frames or lenses ("Do your current glasses cause any discomfort?")',
              'Relevant medical conditions affecting vision or eyewear needs (diabetes, dry eye, allergies)',
              'Allergies that might impact frame material selection (nickel allergies, skin sensitivities)',
              'Duration of current eyewear and reason for change ("What prompted you to get new glasses now?")'
            ],
            ordered: false
          }
        },
        {
          id: 'needs-assessment-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Creating a Comfortable Environment',
            text: 'Patients will share more information when they feel comfortable. Create a private consultation space where possible, use a conversational tone rather than simply completing a checklist, and show genuine interest in their responses. Avoid making patients feel rushed, even when you\'re busy. A simple statement like "Let\'s take a few minutes to understand exactly what you need from your new glasses" can set a positive tone.'
          }
        }
      ]
    },
    {
      id: 'explaining-concepts',
      title: 'Explaining Optical Concepts',
      type: 'main',
      content: [
        {
          id: 'explaining-intro',
          type: 'paragraph',
          content: {
            text: 'A key skill for opticians is translating complex optical concepts into language that patients can understand. This helps patients make informed decisions and increases compliance with recommendations.'
          }
        },
        {
          id: 'simplification-heading',
          type: 'heading',
          content: {
            text: 'Simplifying Without Oversimplifying',
            level: 3
          }
        },
        {
          id: 'simplification-para',
          type: 'paragraph',
          content: {
            text: 'The goal is to convey accurate information in accessible terms without talking down to patients. Gauge the patient\'s level of understanding and adjust your explanation accordingly.'
          }
        },
        {
          id: 'jargon-table',
          type: 'table',
          content: {
            headers: ['Technical Term', 'Patient-Friendly Alternative'],
            rows: [
              ['Presbyopia', '"Age-related focusing difficulty" or "The need for reading glasses as we age"'],
              ['Astigmatism', '"Irregularly shaped cornea" or "An eye shaped more like a football than a basketball"'],
              ['Myopia', '"Nearsightedness" or "Difficulty seeing things far away"'],
              ['Hyperopia', '"Farsightedness" or "Difficulty seeing things up close"'],
              ['Anti-reflective coating', '"Glare reduction treatment" or "Coating that reduces reflections and improves clarity"'],
              ['Progressive addition lenses', '"No-line multifocal lenses" or "Glasses that let you see at all distances without lines"']
            ],
            caption: 'Translating optical terminology for patients'
          }
        },
        {
          id: 'visual-aids-heading',
          type: 'heading',
          content: {
            text: 'Using Visual Aids and Models',
            level: 3
          }
        },
        {
          id: 'visual-aids-para',
          type: 'paragraph',
          content: {
            text: 'Visual aids help patients understand concepts that may be difficult to grasp through verbal explanation alone. Effective demonstrations make abstract concepts concrete.'
          }
        },
        {
          id: 'aids-list',
          type: 'list',
          content: {
            items: [
              'Lens material samples to demonstrate thickness and weight differences',
              'AR coating demonstrators showing glare reduction',
              'Progressive lens diagrams showing viewing zones',
              'Eye models for explaining how vision problems occur',
              'Before/after photos showing lens thickness differences with various materials',
              'Lens coating demonstrators (water droplets on hydrophobic surfaces, etc.)'
            ],
            ordered: false
          }
        },
        {
          id: 'analogies-heading',
          type: 'heading',
          content: {
            text: 'Effective Analogies',
            level: 3
          }
        },
        {
          id: 'analogies-para',
          type: 'paragraph',
          content: {
            text: 'Analogies connect unfamiliar concepts to familiar ones, making them easier to understand. Use relevant comparisons from daily life.'
          }
        },
        {
          id: 'analogies-table',
          type: 'table',
          content: {
            headers: ['Optical Concept', 'Helpful Analogy'],
            rows: [
              ['Progressive lenses', '"Like a smooth ramp from distance to reading, instead of stairs with a sudden step (bifocals)"'],
              ['High-index materials', '"Similar to compressing a file on a computer - same information in less space"'],
              ['Anti-reflective coating', '"Like noise-canceling headphones, but for light reflections instead of sound"'],
              ['Astigmatism', '"If a normal eye is shaped like a basketball, an astigmatic eye is shaped more like a football"'],
              ['Photochromic lenses', '"Like automatic light adjusters that respond to UV light, similar to a dimmer switch"'],
              ['Vertex distance', '"Like how objects look different sizes depending on how far away you hold them"']
            ],
            caption: 'Useful analogies for explaining optical concepts'
          }
        },
        {
          id: 'explaining-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Check Understanding',
            text: 'After explaining a concept, ask the patient to explain it back to you in their own words. This confirms understanding and gives you an opportunity to clarify any misconceptions before proceeding.'
          }
        }
      ]
    },
    {
      id: 'recommendations',
      title: 'Making Effective Recommendations',
      type: 'main',
      content: [
        {
          id: 'recommendations-intro',
          type: 'paragraph',
          content: {
            text: 'Effective recommendations balance professional expertise with patient preferences. The goal is to guide patients toward options that best meet their needs while respecting their decision-making role.'
          }
        },
        {
          id: 'features-benefits-heading',
          type: 'heading',
          content: {
            text: 'Features vs. Benefits Approach',
            level: 3
          }
        },
        {
          id: 'features-benefits-para',
          type: 'paragraph',
          content: {
            text: 'When recommending products, focus more on benefits to the patient rather than technical features. Benefits answer the patient\'s unspoken question: "What\'s in it for me?"'
          }
        },
        {
          id: 'features-benefits-table',
          type: 'table',
          content: {
            headers: ['Feature', 'Benefit'],
            rows: [
              ['High-index lens material', 'Thinner, lighter lenses that look better and feel more comfortable'],
              ['Anti-reflective coating', 'Clearer vision, especially when driving at night, and better appearance in photos'],
              ['Polycarbonate material', 'Greater protection against eye injuries during sports or active work'],
              ['Digital lens design', 'Reduced eye strain during computer use and more comfortable vision all day'],
              ['Progressive lens design', 'Natural vision at all distances without the visible line of bifocals'],
              ['Spring hinges', 'More comfortable fit and greater durability if frames are accidentally bent']
            ],
            caption: 'Translating features into meaningful benefits'
          }
        },
        {
          id: 'recommendation-technique-heading',
          type: 'heading',
          content: {
            text: 'Recommendation Techniques',
            level: 3
          }
        },
        {
          id: 'technique-list',
          type: 'list',
          content: {
            items: [
              'Present options as good/better/best when appropriate',
              'Tailor recommendations to previously identified needs and concerns',
              'Begin with what you recommend most strongly based on the patient\'s specific situation',
              'Explain why a particular option is recommended for their specific needs',
              'Acknowledge budget concerns but focus first on optimal solutions',
              'Avoid overwhelming with too many options (limit to 2-3 choices when possible)'
            ],
            ordered: false
          }
        },
        {
          id: 'matching-heading',
          type: 'heading',
          content: {
            text: 'Matching Solutions to Needs',
            level: 3
          }
        },
        {
          id: 'matching-para',
          type: 'paragraph',
          content: {
            text: 'Effective recommendations clearly connect to the specific needs the patient has expressed, showing you\'ve listened and understood their situation.'
          }
        },
        {
          id: 'matching-table',
          type: 'table',
          content: {
            headers: ['Patient Need/Concern', 'Targeted Recommendation'],
            rows: [
              ['Computer eye strain', 'Computer-specific lenses with blue light filtering'],
              ['Frequent prescription changes', 'Higher quality frame that will last through lens changes'],
              ['Active lifestyle/sports', 'Impact-resistant materials and secure-fitting frames'],
              ['Cosmetic concerns about thick lenses', 'High-index materials and frames that minimize thickness'],
              ['Difficulty adapting to progressives', 'Premium progressive design with wider corridors'],
              ['Driving at night', 'Anti-reflective coating to reduce glare from headlights']
            ],
            caption: 'Connecting patient needs to specific recommendations'
          }
        },
        {
          id: 'recommendation-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Professional Confidence',
            text: 'Present recommendations with confidence based on your expertise, but avoid being pushy. Phrases like "Based on what you\'ve told me about your work, I would recommend..." show you\'re applying expertise to their specific situation rather than giving a generic sales pitch.'
          }
        }
      ]
    },
    {
      id: 'difficult-situations',
      title: 'Handling Challenging Situations',
      type: 'clinical',
      content: [
        {
          id: 'difficult-intro',
          type: 'paragraph',
          content: {
            text: 'Even with excellent communication skills, opticians occasionally face challenging situations. Having strategies to address these professionally helps maintain patient satisfaction and resolve issues effectively.'
          }
        },
        {
          id: 'adaptation-issues-heading',
          type: 'heading',
          content: {
            text: 'Adaptation Issues',
            level: 3
          }
        },
        {
          id: 'adaptation-para',
          type: 'paragraph',
          content: {
            text: 'New prescriptions or lens designs sometimes require an adaptation period. Preparing patients in advance and responding appropriately to concerns helps manage this process.'
          }
        },
        {
          id: 'adaptation-steps-list',
          type: 'list',
          content: {
            items: [
              'Set realistic expectations before dispensing (e.g., "The first few days with progressives will require some adjustment")',
              'Explain normal adaptation symptoms vs. signs that something might be wrong',
              'Provide specific adaptation strategies for different lens types',
              'Schedule follow-up communication to check on progress',
              'Remain confident in your recommendation while showing empathy for temporary discomfort',
              'Know when to refer back to the doctor for prescription verification'
            ],
            ordered: false
          }
        },
        {
          id: 'complaints-heading',
          type: 'heading',
          content: {
            text: 'Managing Complaints',
            level: 3
          }
        },
        {
          id: 'complaint-steps-list',
          type: 'list',
          content: {
            items: [
              '1. Listen fully without interrupting or becoming defensive',
              '2. Express empathy for their frustration or disappointment',
              '3. Ask clarifying questions to fully understand the issue',
              '4. Restate the problem to confirm understanding',
              '5. Explain what actions you can take to address the concern',
              '6. Follow through promptly on promised actions',
              '7. Follow up to ensure satisfaction with the resolution'
            ],
            ordered: true
          }
        },
        {
          id: 'complaint-phrases-table',
          type: 'table',
          content: {
            headers: ['Situation', 'Helpful Response'],
            rows: [
              ['Patient unhappy with frame appearance', '"I understand this isn\'t what you expected. Let\'s look at what specific aspects aren\'t working for you and find alternatives."'],
              ['Complaint about price', '"I appreciate that\'s a significant investment. Let me explain the value you\'re receiving and also explore some options that might better fit your budget."'],
              ['Adaptation difficulties', '"Thank you for letting me know you\'re having trouble. This isn\'t uncommon, and I have several suggestions that might help. Could you describe exactly what you\'re experiencing?"'],
              ['Delayed order', '"I apologize for the delay. That\'s frustrating when you\'re waiting for your glasses. Let me check on the status right now and give you a specific update."'],
              ['Warranty question', '"Great question about your warranty coverage. Let me clarify exactly what\'s covered so you\'ll know what to expect."']
            ],
            caption: 'Constructive responses to common complaints'
          }
        },
        {
          id: 'diffusing-heading',
          type: 'heading',
          content: {
            text: 'Diffusing Tension',
            level: 3
          }
        },
        {
          id: 'diffusing-para',
          type: 'paragraph',
          content: {
            text: 'Occasionally, patients may be visibly frustrated, angry, or emotional. These situations require special communication skills to de-escalate and resolve productively.'
          }
        },
        {
          id: 'diffusing-list',
          type: 'list',
          content: {
            items: [
              'Remain calm and maintain a steady, moderate tone of voice',
              'Acknowledge emotions without mirroring them ("I can see you\'re frustrated")',
              'Move to a private area if possible to avoid embarrassment and audience effects',
              'Use the patient\'s name and maintain appropriate eye contact',
              'Focus on solutions rather than blame or defending past actions',
              'Set clear expectations about what can and cannot be done',
              'Know when to involve a manager or supervisor'
            ],
            ordered: false
          }
        },
        {
          id: 'difficult-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Self-Management',
            text: 'Managing your own emotions is essential in difficult situations. If you feel yourself becoming defensive or frustrated, take a deep breath and refocus on the goal: finding a solution that works for the patient. Remember that complaints are often opportunities to create loyal patients when handled well.'
          }
        }
      ]
    },
    {
      id: 'building-relationships',
      title: 'Building Patient Relationships',
      type: 'summary',
      content: [
        {
          id: 'relationships-intro',
          type: 'paragraph',
          content: {
            text: 'Long-term practice success depends on building lasting relationships with patients. Effective opticians view each interaction as part of an ongoing relationship rather than a single transaction.'
          }
        },
        {
          id: 'follow-up-heading',
          type: 'heading',
          content: {
            text: 'Effective Follow-Up',
            level: 3
          }
        },
        {
          id: 'follow-up-para',
          type: 'paragraph',
          content: {
            text: 'Proactive follow-up demonstrates care for the patient beyond the sale and provides an opportunity to address any issues early.'
          }
        },
        {
          id: 'follow-up-list',
          type: 'list',
          content: {
            items: [
              'Contact patients 1-2 weeks after dispensing new eyewear to check satisfaction',
              'Schedule specific follow-up appointments for complex prescriptions or first-time progressive wearers',
              'Document patient preferences and special requirements for future reference',
              'Send periodic reminders for examinations or eyewear updates',
              'Reach out after addressing complaints to ensure resolution was satisfactory'
            ],
            ordered: false
          }
        },
        {
          id: 'adding-value-heading',
          type: 'heading',
          content: {
            text: 'Adding Value Beyond the Sale',
            level: 3
          }
        },
        {
          id: 'value-list',
          type: 'list',
          content: {
            items: [
              'Offer complimentary adjustments and cleanings between purchases',
              'Provide educational materials about eye health and vision care',
              'Remember personal details and preferences from previous visits',
              'Celebrate milestones (birthdays, anniversaries) with cards or small tokens',
              'Create a welcoming environment where patients feel recognized and valued',
              'Offer honest advice even when it doesn\'t lead to immediate sales'
            ],
            ordered: false
          }
        },
        {
          id: 'success-metrics-heading',
          type: 'heading',
          content: {
            text: 'Measuring Success',
            level: 3
          }
        },
        {
          id: 'metrics-para',
          type: 'paragraph',
          content: {
            text: 'While technical skills are important, an optician\'s success ultimately depends on both patient care and business metrics:'
          }
        },
        {
          id: 'metrics-list',
          type: 'list',
          content: {
            items: [
              'Patient retention and return rates',
              'Referrals from existing patients',
              'Patient satisfaction scores',
              'Low remake and return rates',
              'Positive patient feedback and reviews',
              'Average sale value (as appropriate to patient needs)',
              'Efficiency in patient flow and service'
            ],
            ordered: false
          }
        },
        {
          id: 'relationship-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'The Golden Rule of Optical Care',
            text: 'Provide the same level of care, advice, and service you would want for your own family members. This simple principle guides ethical practice and helps build the trust that leads to long-term relationships and practice success.'
          }
        }
      ]
    }
  ],
  summary: 'Effective patient communication is essential for opticians, combining technical knowledge with accessible language. Key skills include active listening, thorough needs assessment through specific questioning techniques, and translating complex optical concepts into understandable terms using analogies and visual aids. When making recommendations, focus on connecting specific features to patient benefits rather than technical specifications. Challenges like adaptation issues and complaints should be handled with empathy, clear explanation, and prompt follow-through on solutions. Building long-term patient relationships requires proactive follow-up, adding value beyond transactions, and consistency in providing exceptional care. These communication and service skills complement technical expertise and are crucial to both patient satisfaction and practice success.',
  references: [
    'American Board of Opticianry. (2023). Effective Communication for Opticians.',
    'Harris, M. G. (2007). Professional Communication Skills for Optometrists. Butterworth-Heinemann.',
    'Classe, J. G. (2004). Business Aspects of Optometry. Butterworth-Heinemann.',
    'Squire, L. F., et al. (2017). Fundamentals of Ophthalmic Practice Management. American Academy of Ophthalmology.',
    'Bennett, E. S. (2008). Communication Skills for the Eye Care Professional. Butterworth-Heinemann.'
  ]
}; 