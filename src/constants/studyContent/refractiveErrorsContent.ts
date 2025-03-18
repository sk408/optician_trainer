import { TopicStudyContent } from '../../interfaces/StudyContent';

export const refractiveErrorsContent: TopicStudyContent = {
  topicId: 'refractive-errors',
  title: 'Understanding Refractive Errors',
  introduction: 'Refractive errors are vision conditions that occur when the eye cannot properly focus light, resulting in blurred vision. As an optician, understanding these errors is essential for interpreting prescriptions and explaining vision conditions to patients. This module covers the main types of refractive errors, their causes, symptoms, and correction methods.',
  objectives: [
    'Identify and explain the four main types of refractive errors',
    'Understand how each refractive error affects vision',
    'Learn how different lens types correct specific refractive errors',
    'Recognize common symptoms associated with each refractive error',
    'Understand how to interpret prescription values for different refractive conditions',
    'Learn to explain refractive errors to patients in simple terms'
  ],
  sections: [
    {
      id: 'introduction-section',
      title: 'Introduction to Refractive Errors',
      type: 'introduction',
      content: [
        {
          id: 'intro-heading',
          type: 'heading',
          content: {
            text: 'What Are Refractive Errors?',
            level: 2
          }
        },
        {
          id: 'intro-paragraph-1',
          type: 'paragraph',
          content: {
            text: 'Refractive errors are vision problems that occur when the shape of the eye prevents light from focusing directly on the retina. When light doesn\'t focus properly, images appear blurry or distorted. Refractive errors are the most common vision problems, affecting millions of people worldwide.'
          }
        },
        {
          id: 'intro-image',
          type: 'image',
          content: {
            src: '/assets/images/study/refractive-errors-intro.png',
            alt: 'Diagram showing how light focuses in a normal eye vs. eyes with refractive errors',
            caption: 'Comparison of light focusing in normal vision versus refractive errors'
          }
        },
        {
          id: 'normal-vision-heading',
          type: 'heading',
          content: {
            text: 'Normal Vision (Emmetropia)',
            level: 3
          }
        },
        {
          id: 'normal-vision-paragraph',
          type: 'paragraph',
          content: {
            text: 'In an eye with normal vision (emmetropia), light rays enter through the cornea and are precisely focused on the retina, creating a clear image. The cornea and lens work together to bend (refract) light rays to focus them exactly on the retina. The length of the eyeball, corneal curvature, and lens power all must be properly coordinated for clear vision.'
          }
        },
        {
          id: 'error-causes-heading',
          type: 'heading',
          content: {
            text: 'What Causes Refractive Errors?',
            level: 3
          }
        },
        {
          id: 'error-causes-paragraph',
          type: 'paragraph',
          content: {
            text: 'Refractive errors typically result from one or more of these factors:'
          }
        },
        {
          id: 'error-causes-list',
          type: 'list',
          content: {
            items: [
              'Eyeball length (too long or too short)',
              'Corneal shape irregularities',
              'Aging of the crystalline lens',
              'Alterations in the refractive index of the lens'
            ],
            ordered: false
          }
        },
        {
          id: 'error-prevalence-callout',
          type: 'callout',
          content: {
            type: 'info',
            title: 'Did You Know?',
            text: 'Approximately 150 million Americans use some form of eyewear to correct refractive errors, making them the most common vision problems in the United States.'
          }
        }
      ]
    },
    {
      id: 'myopia-section',
      title: 'Myopia (Nearsightedness)',
      type: 'main',
      content: [
        {
          id: 'myopia-heading',
          type: 'heading',
          content: {
            text: 'Myopia (Nearsightedness)',
            level: 2
          }
        },
        {
          id: 'myopia-definition',
          type: 'definition',
          content: {
            term: 'Myopia',
            definition: 'A refractive error where close objects appear clear, but distant objects appear blurry because light focuses in front of the retina rather than directly on it.',
            related: ['hyperopia', 'astigmatism']
          }
        },
        {
          id: 'myopia-description',
          type: 'paragraph',
          content: {
            text: 'In myopia, the eyeball is typically too long or the cornea is too curved. This causes light rays to focus at a point in front of the retina rather than directly on its surface. Myopia typically develops during childhood and adolescence and may progress until early adulthood.'
          }
        },
        {
          id: 'myopia-image',
          type: 'image',
          content: {
            src: '/assets/images/study/myopia-diagram.png',
            alt: 'Diagram showing light focusing in a myopic eye',
            caption: 'In myopia, light focuses in front of the retina instead of on it'
          }
        },
        {
          id: 'myopia-symptoms-heading',
          type: 'heading',
          content: {
            text: 'Common Symptoms',
            level: 3
          }
        },
        {
          id: 'myopia-symptoms-list',
          type: 'list',
          content: {
            items: [
              'Blurry vision when looking at distant objects',
              'Clear vision when looking at nearby objects',
              'Need to squint to see clearly',
              'Eyestrain or headaches after activities requiring distance vision',
              'Difficulty driving, especially at night'
            ],
            ordered: false
          }
        },
        {
          id: 'myopia-correction-heading',
          type: 'heading',
          content: {
            text: 'Correction Methods',
            level: 3
          }
        },
        {
          id: 'myopia-correction-paragraph',
          type: 'paragraph',
          content: {
            text: 'Myopia is corrected with minus (concave) lenses that diverge light rays before they enter the eye, allowing them to focus properly on the retina.'
          }
        },
        {
          id: 'myopia-lens-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Lens Identification Tip',
            text: 'Minus lenses used for myopia correction are thinner in the center and thicker at the edges. When looking through a minus lens, objects appear smaller.'
          }
        },
        {
          id: 'myopia-prescription-example',
          type: 'paragraph',
          content: {
            text: 'A typical myopia prescription might read: -2.50 DS (diopter sphere). The minus sign indicates the lens power needed to correct myopia. Higher numbers indicate stronger correction.'
          }
        }
      ]
    },
    {
      id: 'hyperopia-section',
      title: 'Hyperopia (Farsightedness)',
      type: 'main',
      content: [
        {
          id: 'hyperopia-heading',
          type: 'heading',
          content: {
            text: 'Hyperopia (Farsightedness)',
            level: 2
          }
        },
        {
          id: 'hyperopia-definition',
          type: 'definition',
          content: {
            term: 'Hyperopia',
            definition: 'A refractive error where distant objects may appear more clear than nearby objects because light focuses behind the retina rather than directly on it.',
            related: ['myopia', 'presbyopia']
          }
        },
        {
          id: 'hyperopia-description',
          type: 'paragraph',
          content: {
            text: 'In hyperopia, the eyeball is usually too short or the cornea is too flat. This causes light rays to focus at a point behind the retina rather than directly on its surface. Many young people with mild hyperopia may not experience symptoms because their crystalline lens can compensate by accommodating (changing shape to increase focusing power).'
          }
        },
        {
          id: 'hyperopia-image',
          type: 'image',
          content: {
            src: '/assets/images/study/hyperopia-diagram.png',
            alt: 'Diagram showing light focusing in a hyperopic eye',
            caption: 'In hyperopia, light would focus behind the retina if not corrected'
          }
        },
        {
          id: 'hyperopia-symptoms-heading',
          type: 'heading',
          content: {
            text: 'Common Symptoms',
            level: 3
          }
        },
        {
          id: 'hyperopia-symptoms-list',
          type: 'list',
          content: {
            items: [
              'Blurry vision, especially for near objects',
              'Eyestrain or discomfort after reading or close work',
              'Headaches after visual tasks',
              'Need to squint for clearer vision',
              'Eye fatigue or burning eyes'
            ],
            ordered: false
          }
        },
        {
          id: 'hyperopia-correction-heading',
          type: 'heading',
          content: {
            text: 'Correction Methods',
            level: 3
          }
        },
        {
          id: 'hyperopia-correction-paragraph',
          type: 'paragraph',
          content: {
            text: 'Hyperopia is corrected with plus (convex) lenses that converge light rays before they enter the eye, allowing them to focus properly on the retina.'
          }
        },
        {
          id: 'hyperopia-lens-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Lens Identification Tip',
            text: 'Plus lenses used for hyperopia correction are thicker in the center and thinner at the edges. When looking through a plus lens, objects appear larger.'
          }
        },
        {
          id: 'hyperopia-prescription-example',
          type: 'paragraph',
          content: {
            text: 'A typical hyperopia prescription might read: +1.75 DS (diopter sphere). The plus sign indicates the lens power needed to correct hyperopia.'
          }
        }
      ]
    },
    {
      id: 'astigmatism-section',
      title: 'Astigmatism',
      type: 'main',
      content: [
        {
          id: 'astigmatism-heading',
          type: 'heading',
          content: {
            text: 'Astigmatism',
            level: 2
          }
        },
        {
          id: 'astigmatism-definition',
          type: 'definition',
          content: {
            term: 'Astigmatism',
            definition: 'A refractive error caused by an irregularly shaped cornea or lens that prevents light from focusing evenly on the retina, resulting in blurred or distorted vision at all distances.',
            related: ['myopia', 'hyperopia']
          }
        },
        {
          id: 'astigmatism-description',
          type: 'paragraph',
          content: {
            text: 'In astigmatism, the cornea or lens has an irregular shape – more like a football than a basketball. This means light rays focus at multiple points rather than a single focal point, causing blurred or distorted vision. Astigmatism often occurs alongside myopia or hyperopia.'
          }
        },
        {
          id: 'astigmatism-image',
          type: 'image',
          content: {
            src: '/assets/images/study/astigmatism-diagram.png',
            alt: 'Diagram showing light focusing in an eye with astigmatism',
            caption: 'In astigmatism, light rays focus at multiple points instead of a single point'
          }
        },
        {
          id: 'astigmatism-symptoms-heading',
          type: 'heading',
          content: {
            text: 'Common Symptoms',
            level: 3
          }
        },
        {
          id: 'astigmatism-symptoms-list',
          type: 'list',
          content: {
            items: [
              'Blurred or distorted vision at all distances',
              'Eyestrain or discomfort',
              'Headaches, especially after reading or screen time',
              'Squinting to try to see clearly',
              'Difficulties with night vision'
            ],
            ordered: false
          }
        },
        {
          id: 'astigmatism-correction-heading',
          type: 'heading',
          content: {
            text: 'Correction Methods',
            level: 3
          }
        },
        {
          id: 'astigmatism-correction-paragraph',
          type: 'paragraph',
          content: {
            text: 'Astigmatism is corrected with cylindrical lenses that have different focusing powers in different meridians (directions) to compensate for the irregular corneal shape.'
          }
        },
        {
          id: 'astigmatism-prescription-heading',
          type: 'heading',
          content: {
            text: 'Prescription Notation',
            level: 3
          }
        },
        {
          id: 'astigmatism-prescription-table',
          type: 'table',
          content: {
            headers: ['Component', 'Example', 'Meaning'],
            rows: [
              ['Sphere (SPH)', '-2.00', 'Corrects for myopia/hyperopia'],
              ['Cylinder (CYL)', '-1.25', 'Amount of astigmatism correction'],
              ['Axis', '180', 'Direction of astigmatism (0-180°)']
            ],
            caption: 'Components of an astigmatism prescription'
          }
        },
        {
          id: 'astigmatism-prescription-explanation',
          type: 'paragraph',
          content: {
            text: 'A prescription for astigmatism includes three components: sphere power (for myopia or hyperopia), cylinder power (for astigmatism), and axis (the orientation of the astigmatism, measured in degrees from 0 to 180).'
          }
        }
      ]
    },
    {
      id: 'presbyopia-section',
      title: 'Presbyopia',
      type: 'main',
      content: [
        {
          id: 'presbyopia-heading',
          type: 'heading',
          content: {
            text: 'Presbyopia',
            level: 2
          }
        },
        {
          id: 'presbyopia-definition',
          type: 'definition',
          content: {
            term: 'Presbyopia',
            definition: 'An age-related refractive condition where the eye gradually loses its ability to focus on nearby objects due to hardening of the crystalline lens.',
            related: ['hyperopia', 'accommodation']
          }
        },
        {
          id: 'presbyopia-description',
          type: 'paragraph',
          content: {
            text: 'Unlike other refractive errors, presbyopia is an inevitable part of aging. As we age, the crystalline lens in our eye becomes less flexible, making it more difficult to focus on near objects. Presbyopia typically becomes noticeable in the early to mid-40s and continues to progress until around age 65.'
          }
        },
        {
          id: 'presbyopia-image',
          type: 'image',
          content: {
            src: '/assets/images/study/presbyopia-diagram.png',
            alt: 'Diagram showing how the lens changes with age',
            caption: 'The lens becomes less flexible with age, leading to presbyopia'
          }
        },
        {
          id: 'presbyopia-symptoms-heading',
          type: 'heading',
          content: {
            text: 'Common Symptoms',
            level: 3
          }
        },
        {
          id: 'presbyopia-symptoms-list',
          type: 'list',
          content: {
            items: [
              'Difficulty focusing on small print or near objects',
              'Tendency to hold reading material at arm\'s length',
              'Blurred vision at normal reading distance',
              'Eyestrain or headaches after reading or doing close work',
              'Need for brighter lighting when reading or doing close work'
            ],
            ordered: false
          }
        },
        {
          id: 'presbyopia-correction-heading',
          type: 'heading',
          content: {
            text: 'Correction Methods',
            level: 3
          }
        },
        {
          id: 'presbyopia-correction-paragraph',
          type: 'paragraph',
          content: {
            text: 'Presbyopia is typically corrected with reading glasses, bifocals, progressive lenses, or multifocal contact lenses that provide additional power for near vision.'
          }
        },
        {
          id: 'presbyopia-add-power',
          type: 'paragraph',
          content: {
            text: 'The additional power needed for near vision is called the "Add" or "Addition" and is written as a plus value (e.g., +1.50 Add). This value increases as presbyopia progresses with age.'
          }
        },
        {
          id: 'presbyopia-progression-table',
          type: 'table',
          content: {
            headers: ['Age Range', 'Typical Add Power'],
            rows: [
              ['40-44', '+0.75 to +1.00'],
              ['45-49', '+1.00 to +1.50'],
              ['50-54', '+1.50 to +2.00'],
              ['55+', '+2.00 to +2.50']
            ],
            caption: 'Typical Add power progression with age'
          }
        },
        {
          id: 'presbyopia-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Patient Counseling',
            text: 'When explaining presbyopia to patients, emphasize that it\'s a normal part of aging that affects everyone. This helps patients accept the need for reading glasses or multifocal lenses.'
          }
        }
      ]
    },
    {
      id: 'prescription-section',
      title: 'Understanding Prescriptions',
      type: 'advanced',
      content: [
        {
          id: 'prescription-heading',
          type: 'heading',
          content: {
            text: 'How to Interpret Eyeglass Prescriptions',
            level: 2
          }
        },
        {
          id: 'prescription-intro',
          type: 'paragraph',
          content: {
            text: 'As an optician, one of your most important skills will be correctly interpreting eyeglass prescriptions. Prescriptions contain specific information about the lenses needed to correct a patient\'s refractive errors.'
          }
        },
        {
          id: 'prescription-components-table',
          type: 'table',
          content: {
            headers: ['Abbreviation', 'Term', 'Meaning'],
            rows: [
              ['OD', 'Oculus Dexter', 'Right eye'],
              ['OS', 'Oculus Sinister', 'Left eye'],
              ['OU', 'Oculus Uterque', 'Both eyes'],
              ['SPH/DS', 'Sphere/Diopter Sphere', 'Corrects nearsightedness (-) or farsightedness (+)'],
              ['CYL/DC', 'Cylinder/Diopter Cylinder', 'Corrects astigmatism'],
              ['AXIS', 'Axis', 'Orientation of cylinder correction (0-180°)'],
              ['ADD', 'Addition', 'Extra power for near vision (presbyopia)'],
              ['PD', 'Pupillary Distance', 'Distance between pupils in millimeters']
            ],
            caption: 'Common prescription abbreviations and meanings'
          }
        },
        {
          id: 'prescription-example-heading',
          type: 'heading',
          content: {
            text: 'Sample Prescription Analysis',
            level: 3
          }
        },
        {
          id: 'prescription-example-callout',
          type: 'callout',
          content: {
            type: 'example',
            title: 'Sample Prescription',
            text: 'OD: -2.50 -1.25 x 180 Add +2.00\nOS: -2.25 -0.75 x 165 Add +2.00\nPD: 62mm'
          }
        },
        {
          id: 'prescription-analysis-paragraph',
          type: 'paragraph',
          content: {
            text: 'Interpretation: This patient has myopia in both eyes (-2.50 in right eye, -2.25 in left eye), astigmatism in both eyes (-1.25 cylinder at 180° in right eye, -0.75 cylinder at 165° in left eye), and presbyopia (Add +2.00 for both eyes). The patient\'s pupillary distance is 62mm.'
          }
        },
        {
          id: 'prescription-tips-heading',
          type: 'heading',
          content: {
            text: 'Practical Tips for Prescription Interpretation',
            level: 3
          }
        },
        {
          id: 'prescription-tips-list',
          type: 'list',
          content: {
            items: [
              'Always double-check which notation is being used (plus or minus cylinder)',
              'Verify that the axis values are between 0-180 degrees',
              'Remember that a higher numeric value (ignoring the sign) means a stronger prescription',
              'When transpositioning prescriptions, ensure the sphere and cylinder powers are adjusted correctly and the axis rotates by 90°',
              'Always calculate the spherical equivalent when needed for lens ordering'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'clinical-applications-section',
      title: 'Clinical Applications',
      type: 'clinical',
      content: [
        {
          id: 'clinical-heading',
          type: 'heading',
          content: {
            text: 'From Theory to Practice: Applying Knowledge of Refractive Errors',
            level: 2
          }
        },
        {
          id: 'lens-selection-heading',
          type: 'heading',
          content: {
            text: 'Lens Selection Based on Refractive Error',
            level: 3
          }
        },
        {
          id: 'lens-selection-paragraph',
          type: 'paragraph',
          content: {
            text: 'Understanding refractive errors helps in recommending appropriate lens materials and designs:'
          }
        },
        {
          id: 'lens-selection-table',
          type: 'table',
          content: {
            headers: ['Refractive Error', 'Lens Considerations'],
            rows: [
              ['High Myopia', 'High-index materials to reduce thickness; aspheric designs to reduce edge thickness'],
              ['High Hyperopia', 'High-index materials; aspheric designs to reduce center thickness and weight'],
              ['Astigmatism', 'Stable frame materials; proper PD and fitting height crucial for axis alignment'],
              ['Presbyopia', 'Progressive, bifocal, or office lenses based on lifestyle needs']
            ],
            caption: 'Lens considerations for different refractive errors'
          }
        },
        {
          id: 'frame-selection-heading',
          type: 'heading',
          content: {
            text: 'Frame Selection Considerations',
            level: 3
          }
        },
        {
          id: 'frame-selection-paragraph',
          type: 'paragraph',
          content: {
            text: 'Different refractive errors benefit from specific frame styles and materials:'
          }
        },
        {
          id: 'frame-selection-list',
          type: 'list',
          content: {
            items: [
              'High Myopia: Smaller frames help minimize edge thickness and weight',
              'High Hyperopia: Frames with sufficient depth for proper optical centering; careful positioning to minimize apparent lens thickness',
              'Strong Astigmatism: Stable frame materials that maintain adjustment to keep axes properly aligned',
              'Presbyopia: Frame dimensions that accommodate the progressive corridor or bifocal segment height'
            ],
            ordered: false
          }
        },
        {
          id: 'patient-education-heading',
          type: 'heading',
          content: {
            text: 'Patient Education',
            level: 3
          }
        },
        {
          id: 'patient-education-paragraph',
          type: 'paragraph',
          content: {
            text: 'Being able to explain refractive errors in simple terms is essential for patient education and compliance. Use visual aids, simple analogies, and everyday examples to help patients understand their vision condition.'
          }
        },
        {
          id: 'patient-education-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Communication Tip',
            text: 'When explaining prescriptions, avoid too much technical terminology. Instead of saying "You have -2.50 diopters of myopia," you might say, "Your prescription shows you\'re nearsighted, which means you see things up close clearly, but distant objects are blurry."'
          }
        }
      ]
    },
    {
      id: 'interactive-section',
      title: 'Interactive Learning',
      type: 'interactive',
      content: [
        {
          id: 'interactive-quiz',
          type: 'interactive',
          content: {
            type: 'quiz',
            data: {
              questions: [
                {
                  question: 'Which refractive error is corrected with minus (concave) lenses?',
                  options: ['Hyperopia', 'Myopia', 'Presbyopia', 'Emmetropia'],
                  correctAnswer: 1,
                  explanation: 'Myopia (nearsightedness) is corrected with minus lenses that diverge light rays, allowing them to focus properly on the retina.'
                },
                {
                  question: 'A patient with a prescription of +2.50 DS most likely has:',
                  options: ['Myopia', 'Hyperopia', 'Astigmatism only', 'Presbyopia only'],
                  correctAnswer: 1,
                  explanation: 'The plus power (+2.50) indicates hyperopia (farsightedness).'
                },
                {
                  question: 'What does the "Axis" value in a prescription represent?',
                  options: ['The power of the lens', 'The orientation of astigmatism correction', 'The amount of near vision power', 'The center thickness of the lens'],
                  correctAnswer: 1,
                  explanation: 'The Axis (measured in degrees from 0-180) indicates the orientation of astigmatism correction.'
                }
              ]
            }
          }
        },
        {
          id: 'interactive-simulation',
          type: 'interactive',
          content: {
            type: 'simulation',
            data: {
              simulationType: 'refractiveErrors',
              description: 'This simulation allows you to see how different refractive errors affect vision. Use the controls to adjust the type and severity of refractive error.'
            }
          }
        }
      ]
    },
    {
      id: 'summary-section',
      title: 'Module Summary',
      type: 'summary',
      content: [
        {
          id: 'summary-heading',
          type: 'heading',
          content: {
            text: 'Key Takeaways',
            level: 2
          }
        },
        {
          id: 'summary-list',
          type: 'list',
          content: {
            items: [
              'Refractive errors occur when the eye cannot focus light properly on the retina, resulting in blurred vision',
              'Myopia (nearsightedness) is corrected with minus lenses and occurs when light focuses in front of the retina',
              'Hyperopia (farsightedness) is corrected with plus lenses and occurs when light would focus behind the retina',
              'Astigmatism is caused by an irregularly shaped cornea or lens and is corrected with cylindrical lenses',
              'Presbyopia is an age-related condition affecting near vision and is corrected with reading glasses or multifocal lenses',
              'Understanding prescriptions requires knowledge of abbreviations (OD, OS, SPH, CYL, AXIS, ADD, PD) and their meanings',
              'Proper lens and frame selection should take into account both the patient\'s prescription and lifestyle needs'
            ],
            ordered: false
          }
        },
        {
          id: 'next-steps-paragraph',
          type: 'paragraph',
          content: {
            text: 'With a solid understanding of refractive errors, you are now better equipped to interpret prescriptions, recommend appropriate eyewear solutions, and explain vision conditions to patients. Continue your study with lens materials and designs to further enhance your knowledge as an optician.'
          }
        }
      ]
    }
  ],
  summary: 'Refractive errors occur when the eye cannot focus light properly on the retina. The four main types are myopia (nearsightedness), hyperopia (farsightedness), astigmatism, and presbyopia. Myopia is corrected with minus lenses, hyperopia with plus lenses, astigmatism with cylindrical lenses, and presbyopia with reading glasses or multifocal lenses. Understanding these errors is essential for interpreting prescriptions, selecting appropriate eyewear, and educating patients about their vision conditions. Prescriptions contain specific information including sphere power, cylinder power, axis, and add power that indicate the lenses needed to correct the patient\'s vision.',
  references: [
    'American Optometric Association. (2022). Refractive Errors & Refractive Surgery.',
    'Brooks, C. W., & Borish, I. M. (2007). System for Ophthalmic Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Jalie, M. (2008). Ophthalmic Lenses and Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Fannin, T. E., & Grosvenor, T. (1996). Clinical Optics. Butterworth-Heinemann.',
    'Benjamin, W. J. (2006). Borish\'s Clinical Refraction (2nd ed.). Butterworth-Heinemann.'
  ]
}; 