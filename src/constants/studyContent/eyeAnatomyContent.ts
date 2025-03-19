import { TopicStudyContent } from '../../interfaces/StudyContent';

export const eyeAnatomyContent: TopicStudyContent = {
  topicId: 'eye-anatomy',
  title: 'Human Eye Anatomy & Function',
  introduction: 'Understanding the anatomy and function of the human eye is fundamental for any optician. This knowledge helps you comprehend how vision works, why vision problems occur, and how optical solutions can correct them. Don\'t worry if you\'re new to these terms - we\'ll explain everything in simple language that you can then use with your patients.',
  objectives: [
    'Identify the major anatomical structures of the eye',
    'Understand the function of each part of the eye in the visual process',
    'Explain how light is processed by the eye to create vision',
    'Recognize common vision conditions related to eye anatomy',
    'Understand how different corrective lenses interact with eye structures',
    'Apply anatomical knowledge to better communicate with patients about their vision'
  ],
  sections: [
    {
      id: 'eye-overview',
      title: 'Overview of the Eye',
      type: 'introduction',
      content: [
        {
          id: 'eye-intro',
          type: 'paragraph',
          content: {
            text: 'The human eye is an incredibly complex sensory organ that allows us to perceive the world around us. Despite being only about one inch in diameter (about the size of a ping pong ball), it contains over two million working parts that function together to convert light into electrical signals that the brain interprets as visual images.'
          }
        },
        {
          id: 'eye-diagram',
          type: 'image',
          content: {
            src: '/assets/images/study/eye-anatomy-diagram.jpg',
            alt: 'Detailed diagram of human eye anatomy',
            caption: 'Cross-section of the human eye showing major anatomical structures',
            width: '90%'
          }
        },
        {
          id: 'eye-comparison',
          type: 'paragraph',
          content: {
            text: 'The eye is often compared to a camera, as both capture light and create images. Think of the front of your eye (cornea and lens) as the camera lens, the iris as the aperture that controls light, and the retina as the film or digital sensor that captures the image. However, the eye is vastly more sophisticated than any camera ever made, capable of automatic focusing, adjusting to varying light conditions, and processing incredible detail and color variation.'
          }
        }
      ]
    },
    {
      id: 'external-structures',
      title: 'External Structures of the Eye',
      type: 'main',
      content: [
        {
          id: 'external-intro',
          type: 'paragraph',
          content: {
            text: 'Before examining the internal components of the eye, it\'s important to understand the external structures that protect the eye and assist in its function. These are the parts you can see when looking at someone\'s face.'
          }
        },
        {
          id: 'external-structures-heading',
          type: 'heading',
          content: {
            text: 'Protective Structures',
            level: 3
          }
        },
        {
          id: 'eyelids-def',
          type: 'definition',
          content: {
            term: 'Eyelids',
            definition: 'Thin folds of skin that protect the eye from foreign objects, spread tears over the cornea, and limit light entry. Think of them as natural blinds or shutters for your eyes.',
            related: ['blink-reflex', 'eyelashes']
          }
        },
        {
          id: 'eyelashes-def',
          type: 'definition',
          content: {
            term: 'Eyelashes',
            definition: 'Short hairs growing from the edges of the eyelids that help protect the eye from debris. They work like guards, keeping dust and small particles from entering your eyes.',
            related: ['eyelids']
          }
        },
        {
          id: 'orbit-def',
          type: 'definition',
          content: {
            term: 'Orbit',
            definition: 'The bony socket in the skull that houses and protects the eyeball. This is the eye\'s "room" in your skull, providing protection much like a helmet protects your head.',
            related: ['extraocular-muscles']
          }
        },
        {
          id: 'lacrimal-system',
          type: 'heading',
          content: {
            text: 'Lacrimal System (Tear System)',
            level: 3
          }
        },
        {
          id: 'lacrimal-gland-def',
          type: 'definition',
          content: {
            term: 'Lacrimal Glands',
            definition: 'Glands located above the outer corner of each eye that produce tears to keep the eye moist and clean. These are your eye\'s natural "cleaning system" that works constantly to keep your eyes comfortable.',
            related: ['tears', 'lacrimal-ducts']
          }
        },
        {
          id: 'lacrimal-ducts-def',
          type: 'definition',
          content: {
            term: 'Lacrimal Ducts',
            definition: 'Small channels that drain tears from the eye into the nasal cavity. This is why your nose often runs when you cry - the tears are flowing through these ducts from your eyes to your nose.',
            related: ['lacrimal-gland']
          }
        },
        {
          id: 'tears-callout',
          type: 'callout',
          content: {
            type: 'info',
            title: 'The Importance of Tears',
            text: 'Tears are essential for maintaining eye health. They lubricate the eye (like oil in a machine), wash away particles (like windshield washer fluid), and contain antibodies that protect against infection. Conditions like dry eye can significantly impact vision comfort and quality. Many patients with dry eyes will need special eyedrops to supplement their natural tears.'
          }
        },
        {
          id: 'extraocular-muscles-heading',
          type: 'heading',
          content: {
            text: 'Extraocular Muscles (Eye Movement Muscles)',
            level: 3
          }
        },
        {
          id: 'extraocular-muscles-para',
          type: 'paragraph',
          content: {
            text: 'Six muscles control the movement of each eye. These muscles work in coordination to allow precise eye movements and focusing on objects at different distances. Think of these as the "steering system" for your eyes.'
          }
        },
        {
          id: 'eye-muscles-list',
          type: 'list',
          content: {
            items: [
              'Superior rectus - moves the eye upward (looking up)',
              'Inferior rectus - moves the eye downward (looking down)',
              'Lateral rectus - moves the eye outward, away from the nose (looking to the side)',
              'Medial rectus - moves the eye inward, toward the nose (looking toward your nose)',
              'Superior oblique - rotates the eye inward and downward (complex movements)',
              'Inferior oblique - rotates the eye outward and upward (complex movements)'
            ],
            ordered: false
          }
        },
        {
          id: 'eye-muscle-callout',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Clinical Note',
            text: 'Imbalances in these muscles can lead to strabismus (crossed eyes) or diplopia (double vision). When these muscles don\'t work together properly, one eye might turn in a different direction than the other, or a person might see two images instead of one. Understanding these conditions is important when fitting certain types of corrective lenses.'
          }
        }
      ]
    },
    {
      id: 'anterior-segment',
      title: 'Anterior Segment of the Eye (Front Part)',
      type: 'main',
      content: [
        {
          id: 'anterior-intro',
          type: 'paragraph',
          content: {
            text: 'The anterior (front) segment of the eye includes structures from the cornea to the lens. These components are crucial for focusing light onto the retina, similar to how the lens of a camera focuses light onto film or a digital sensor.'
          }
        },
        {
          id: 'cornea-heading',
          type: 'heading',
          content: {
            text: 'The Cornea (Front Window)',
            level: 3
          }
        },
        {
          id: 'cornea-def',
          type: 'definition',
          content: {
            term: 'Cornea',
            definition: 'The clear, dome-shaped front surface of the eye that provides most of the eye\'s focusing power. It bends (refracts) light as it enters the eye. Think of it as the front window of the eye - it must stay clear for light to enter properly.',
            related: ['refraction', 'corneal-layers']
          }
        },
        {
          id: 'cornea-para',
          type: 'paragraph',
          content: {
            text: 'The cornea provides approximately 2/3 of the eye\'s total focusing power. It has no blood vessels, receiving oxygen directly from the air (like your skin breathes). Its transparency is crucial for clear vision - any clouding or irregularity here will significantly affect sight.'
          }
        },
        {
          id: 'corneal-conditions-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Important',
            text: 'Corneal conditions such as keratoconus (cone-shaped cornea), corneal abrasions (scratches), and dystrophies (inherited disorders) can significantly impact vision and may require special contact lens fittings or other interventions. When patients mention having a "scratched cornea" or "cornea problems," these conditions may be what they\'re referring to.'
          }
        },
        {
          id: 'anterior-chamber-def',
          type: 'definition',
          content: {
            term: 'Anterior Chamber',
            definition: 'The fluid-filled space between the cornea and the iris, filled with aqueous humor. This is like a small reservoir of clear fluid in the front part of the eye.',
            related: ['aqueous-humor', 'iridocorneal-angle']
          }
        },
        {
          id: 'aqueous-humor-def',
          type: 'definition',
          content: {
            term: 'Aqueous Humor',
            definition: 'Clear fluid that fills the anterior chamber, providing nutrients to the cornea and lens while maintaining intraocular pressure. This fluid is constantly produced and drained - similar to how water flows into and out of a sink with the tap on and the drain open.',
            related: ['anterior-chamber', 'intraocular-pressure']
          }
        },
        {
          id: 'iris-def',
          type: 'definition',
          content: {
            term: 'Iris',
            definition: 'The colored part of the eye that controls the size of the pupil, regulating the amount of light entering the eye. Just like the aperture on a camera adjusts to different lighting conditions, your iris expands and contracts to control light entry.',
            related: ['pupil', 'eye-color']
          }
        },
        {
          id: 'iris-para',
          type: 'paragraph',
          content: {
            text: 'The iris contains pigmented cells that determine eye color (blue, green, brown, etc.). It has two types of muscles: the sphincter pupillae (constricts the pupil in bright light) and the dilator pupillae (enlarges the pupil in dim light). When an eye doctor puts in drops that "dilate" your eyes, they\'re temporarily disabling the sphincter muscle, making your pupils stay large.'
          }
        },
        {
          id: 'pupil-def',
          type: 'definition',
          content: {
            term: 'Pupil',
            definition: 'The adjustable opening in the center of the iris that allows light to enter the eye.',
            related: ['iris', 'pupillary-response']
          }
        },
        {
          id: 'lens-heading',
          type: 'heading',
          content: {
            text: 'The Lens',
            level: 3
          }
        },
        {
          id: 'lens-def',
          type: 'definition',
          content: {
            term: 'Crystalline Lens',
            definition: 'A transparent, biconvex structure behind the iris that changes shape to focus on objects at various distances (accommodation).',
            related: ['accommodation', 'presbyopia']
          }
        },
        {
          id: 'lens-table',
          type: 'table',
          content: {
            headers: ['Lens Property', 'Description', 'Relevance to Opticianry'],
            rows: [
              ['Transparency', 'Clear, allows light to pass through', 'Cataracts develop when transparency is reduced'],
              ['Elasticity', 'Ability to change shape', 'Decreases with age, leading to presbyopia'],
              ['Accommodation', 'Ability to focus at different distances', 'Determines need for reading glasses or bifocals'],
              ['Refractive Power', 'Ability to bend light', 'Works with cornea to focus images on retina']
            ],
            caption: 'Properties of the crystalline lens and their optical significance'
          }
        },
        {
          id: 'accommodation-para',
          type: 'paragraph',
          content: {
            text: 'Accommodation is the process by which the eye changes focus from distant to near objects. The ciliary muscles contract, allowing the lens to become more convex (rounded) for near vision. As we age, the lens becomes less elastic, reducing accommodation ability and resulting in presbyopia.'
          }
        },
        {
          id: 'presbyopia-callout',
          type: 'callout',
          content: {
            type: 'info',
            title: 'Presbyopia and Optical Solutions',
            text: 'Presbyopia typically begins around age 40-45. Optical solutions include reading glasses, bifocals, progressive lenses, and multifocal contact lenses. Understanding this condition is essential for opticians working with middle-aged and older adults.'
          }
        }
      ]
    },
    {
      id: 'posterior-segment',
      title: 'Posterior Segment of the Eye',
      type: 'main',
      content: [
        {
          id: 'posterior-intro',
          type: 'paragraph',
          content: {
            text: 'The posterior (back) segment contains structures essential for converting light into neural signals, including the vitreous humor, retina, choroid, and the optic nerve.'
          }
        },
        {
          id: 'vitreous-def',
          type: 'definition',
          content: {
            term: 'Vitreous Humor',
            definition: 'Clear, gel-like substance that fills the space between the lens and the retina, helping maintain the eye\'s shape.',
            related: ['posterior-chamber', 'floaters']
          }
        },
        {
          id: 'retina-heading',
          type: 'heading',
          content: {
            text: 'The Retina',
            level: 3
          }
        },
        {
          id: 'retina-def',
          type: 'definition',
          content: {
            term: 'Retina',
            definition: 'Light-sensitive layer at the back of the eye containing photoreceptor cells (rods and cones) that convert light into electrical signals.',
            related: ['rods', 'cones', 'macula']
          }
        },
        {
          id: 'photoreceptors-para',
          type: 'paragraph',
          content: {
            text: 'The retina contains two types of photoreceptor cells:'
          }
        },
        {
          id: 'photoreceptors-list',
          type: 'list',
          content: {
            items: [
              'Rods: Approximately 120 million cells responsible for vision in low light conditions. They provide peripheral and black-and-white vision but offer low visual acuity.',
              'Cones: Approximately 6-7 million cells concentrated in the macula. They provide color vision and high visual acuity in bright light conditions.'
            ],
            ordered: false
          }
        },
        {
          id: 'macula-def',
          type: 'definition',
          content: {
            term: 'Macula',
            definition: 'Small area near the center of the retina with the highest concentration of cones, responsible for central vision and fine detail.',
            related: ['fovea', 'macular-degeneration']
          }
        },
        {
          id: 'fovea-def',
          type: 'definition',
          content: {
            term: 'Fovea',
            definition: 'Small depression in the center of the macula with the highest density of cones, providing our sharpest vision.',
            related: ['macula', 'visual-acuity']
          }
        },
        {
          id: 'amd-callout',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Age-Related Macular Degeneration (AMD)',
            text: 'AMD is a leading cause of vision loss in people over 50. It affects the macula, causing blurred or distorted central vision. Patients with AMD may require special low vision aids or magnification devices.'
          }
        },
        {
          id: 'optic-disc-def',
          type: 'definition',
          content: {
            term: 'Optic Disc',
            definition: 'The point where the optic nerve connects to the retina. This area has no photoreceptors, creating a natural blind spot in our visual field.',
            related: ['optic-nerve', 'blind-spot']
          }
        },
        {
          id: 'optic-nerve-def',
          type: 'definition',
          content: {
            term: 'Optic Nerve',
            definition: 'Transmits visual information from the retina to the brain for processing and interpretation.',
            related: ['optic-disc', 'visual-pathway']
          }
        },
        {
          id: 'choroid-def',
          type: 'definition',
          content: {
            term: 'Choroid',
            definition: 'Layer of blood vessels between the retina and sclera that supplies oxygen and nutrients to the outer retina.',
            related: ['retina', 'sclera']
          }
        },
        {
          id: 'sclera-def',
          type: 'definition',
          content: {
            term: 'Sclera',
            definition: 'The tough, white outer layer of the eyeball that maintains the eye\'s shape and protects its internal components.',
            related: ['choroid', 'extraocular-muscles']
          }
        }
      ]
    },
    {
      id: 'vision-process',
      title: 'The Visual Process',
      type: 'main',
      content: [
        {
          id: 'vision-process-intro',
          type: 'paragraph',
          content: {
            text: 'Vision is a complex process that involves multiple structures working together to transform light into recognizable images.'
          }
        },
        {
          id: 'vision-process-steps',
          type: 'heading',
          content: {
            text: 'Steps in the Visual Process',
            level: 3
          }
        },
        {
          id: 'vision-steps-list',
          type: 'list',
          content: {
            items: [
              '1. Light enters the eye through the cornea, which begins focusing the light',
              '2. The amount of light is regulated by the pupil (iris)',
              '3. Light passes through the lens, which adjusts its shape to further focus the light',
              '4. The focused light passes through the vitreous humor and reaches the retina',
              '5. The retina\'s photoreceptors (rods and cones) convert light into electrical signals',
              '6. These signals travel through the optic nerve to the brain',
              '7. The brain interprets these signals as visual images'
            ],
            ordered: true
          }
        },
        {
          id: 'visual-pathway-image',
          type: 'image',
          content: {
            src: '/assets/images/study/visual-pathway-diagram.jpg',
            alt: 'Diagram showing the path of light through the eye and visual signals to the brain',
            caption: 'The visual pathway from light entering the eye to processing in the brain',
            width: '85%'
          }
        },
        {
          id: 'visual-field-para',
          type: 'paragraph',
          content: {
            text: 'The visual field is the entire area that can be seen when focusing on a single point. The right half of each eye\'s visual field is processed by the left hemisphere of the brain, and vice versa. This crossover occurs at the optic chiasm.'
          }
        },
        {
          id: 'binocular-vision-callout',
          type: 'callout',
          content: {
            type: 'info',
            title: 'Binocular Vision',
            text: 'Humans have binocular vision, meaning both eyes work together to provide depth perception (stereopsis). This allows us to judge distances and perceive three-dimensional space - a crucial factor when fitting eyewear.'
          }
        }
      ]
    },
    {
      id: 'common-conditions',
      title: 'Common Vision Conditions',
      type: 'clinical',
      content: [
        {
          id: 'conditions-intro',
          type: 'paragraph',
          content: {
            text: 'Understanding common vision conditions is essential for opticians to properly recommend and fit corrective lenses.'
          }
        },
        {
          id: 'refractive-errors-heading',
          type: 'heading',
          content: {
            text: 'Refractive Errors',
            level: 3
          }
        },
        {
          id: 'refractive-errors-table',
          type: 'table',
          content: {
            headers: ['Condition', 'Description', 'Correction'],
            rows: [
              ['Myopia (Nearsightedness)', 'Clear vision up close, blurry distance vision. Eyeball too long or cornea too curved.', 'Minus (concave) lenses'],
              ['Hyperopia (Farsightedness)', 'Better distance vision, difficulty focusing up close. Eyeball too short or cornea too flat.', 'Plus (convex) lenses'],
              ['Astigmatism', 'Blurred or distorted vision at all distances due to irregular cornea shape.', 'Cylindrical or toric lenses'],
              ['Presbyopia', 'Age-related difficulty focusing up close due to reduced lens elasticity.', 'Reading glasses, bifocals, or progressive lenses']
            ],
            caption: 'Common refractive errors and their optical corrections'
          }
        },
        {
          id: 'refractive-errors-diagram',
          type: 'image',
          content: {
            src: '/assets/images/study/refractive-errors-diagram.jpg',
            alt: 'Diagram showing how light focuses in different refractive errors',
            caption: 'Light focusing patterns in emmetropia (normal vision), myopia, hyperopia, and astigmatism',
            width: '90%'
          }
        },
        {
          id: 'other-conditions-heading',
          type: 'heading',
          content: {
            text: 'Other Common Eye Conditions',
            level: 3
          }
        },
        {
          id: 'other-conditions-list',
          type: 'list',
          content: {
            items: [
              'Cataracts - Clouding of the lens that affects vision clarity',
              'Glaucoma - Increased intraocular pressure that can damage the optic nerve',
              'Age-related Macular Degeneration - Deterioration of the macula affecting central vision',
              'Diabetic Retinopathy - Damage to retinal blood vessels due to diabetes',
              'Dry Eye Syndrome - Insufficient tear production or poor tear quality'
            ],
            ordered: false
          }
        },
        {
          id: 'special-needs-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Special Eyewear Needs',
            text: 'Patients with conditions like cataracts or macular degeneration may benefit from special lens options such as blue light filters, higher index materials, polarized lenses, or specific tints. Understanding these conditions helps opticians provide more targeted recommendations.'
          }
        }
      ]
    },
    {
      id: 'practical-applications',
      title: 'Practical Applications for Opticians',
      type: 'summary',
      content: [
        {
          id: 'applications-intro',
          type: 'paragraph',
          content: {
            text: 'Knowledge of eye anatomy directly impacts an optician\'s ability to properly fit eyewear and address patients\' visual needs.'
          }
        },
        {
          id: 'application-points-list',
          type: 'list',
          content: {
            items: [
              'Properly measuring pupillary distance (PD) to align lenses with the visual axis',
              'Understanding vertex distance for accurate lens power in high prescriptions',
              'Recommending appropriate lens designs based on specific visual needs',
              'Explaining to patients how their corrective lenses address their specific vision conditions',
              'Selecting appropriate frame sizes and shapes based on facial anatomy',
              'Troubleshooting adaptation issues with new prescriptions',
              'Advising on protective eyewear based on ocular health concerns'
            ],
            ordered: false
          }
        },
        {
          id: 'communication-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Communicating with Patients',
            text: 'Using your knowledge of eye anatomy to clearly explain vision conditions and lens options builds trust with patients. Simple analogies (like comparing the eye to a camera) can help patients better understand their vision needs.'
          }
        },
        {
          id: 'summary-paragraph',
          type: 'paragraph',
          content: {
            text: 'A thorough understanding of eye anatomy provides the foundation for all aspects of opticianry. By mastering these concepts, you\'ll be better equipped to interpret prescriptions, recommend appropriate lens options, troubleshoot fitting issues, and educate patients about their vision.'
          }
        }
      ]
    }
  ],
  summary: 'The human eye is a remarkable optical system that converts light into electrical signals for the brain to interpret as images. Its major components include the cornea and lens (which focus light), the iris (which regulates light entry), and the retina (which contains photoreceptors). Understanding how these structures work together helps opticians comprehend vision problems and their optical solutions. Common vision conditions like myopia, hyperopia, astigmatism, and presbyopia result from specific anatomical variations that can be corrected with appropriate lenses. This knowledge forms the foundation for all aspects of opticianry practice, from interpreting prescriptions to fitting eyewear and educating patients.',
  references: [
    'American Academy of Ophthalmology. (2022). Fundamentals of Ophthalmic Practice.',
    'Brooks, C. W., & Borish, I. M. (2007). System for Ophthalmic Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Jalie, M. (2008). Ophthalmic Lenses and Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Remington, L. A. (2012). Clinical Anatomy and Physiology of the Visual System (3rd ed.). Butterworth-Heinemann.'
  ],
  practiceQuestions: [
    {
      question: 'Which structure provides approximately 2/3 of the eye\'s focusing power?',
      options: [
        'Lens',
        'Cornea',
        'Iris',
        'Vitreous humor'
      ],
      correctAnswer: 1,
      explanation: 'The cornea provides approximately 2/3 (about 43 diopters) of the eye\'s total focusing power (around 60 diopters), making it the primary refracting structure. The lens provides the remaining focusing power and can change shape to adjust focus.'
    },
    {
      question: 'What structure controls the amount of light entering the eye?',
      options: [
        'Cornea',
        'Lens',
        'Iris',
        'Pupil'
      ],
      correctAnswer: 2,
      explanation: 'The iris is the colored part of the eye that controls the size of the pupil. It contains muscles that contract or relax to adjust how much light enters the eye, similar to the aperture of a camera.'
    },
    {
      question: 'Which cells in the retina are responsible for color vision?',
      options: [
        'Rods',
        'Cones',
        'Bipolar cells',
        'Ganglion cells'
      ],
      correctAnswer: 1,
      explanation: 'Cones are specialized photoreceptor cells responsible for color vision and detailed central vision. They function best in bright light and are concentrated in the macula, particularly in the fovea.'
    },
    {
      question: 'Where is the blind spot located in the eye?',
      options: [
        'Center of the macula',
        'Periphery of the retina',
        'At the optic nerve head',
        'On the cornea'
      ],
      correctAnswer: 2,
      explanation: 'The blind spot is located at the optic nerve head (optic disc), where the optic nerve exits the eye. This area lacks photoreceptors, so no visual information can be detected there.'
    },
    {
      question: 'In presbyopia, which structure loses its elasticity?',
      options: [
        'Cornea',
        'Crystalline lens',
        'Iris',
        'Retina'
      ],
      correctAnswer: 1,
      explanation: 'Presbyopia results from the gradual loss of elasticity in the crystalline lens and/or weakening of the ciliary muscles. This reduces the ability to focus on near objects and typically becomes noticeable around age 40-45.'
    },
    {
      question: 'What is the function of the ciliary body?',
      options: [
        'Controls pupil size',
        'Changes lens shape for focusing',
        'Produces tears',
        'Converts light into neural signals'
      ],
      correctAnswer: 1,
      explanation: 'The ciliary body contains muscles that control the shape of the lens for focusing (accommodation) and produces aqueous humor. When ciliary muscles contract, the lens becomes more convex for near vision; when they relax, the lens flattens for distance vision.'
    },
    {
      question: 'Which part of the eye contains the highest concentration of cone photoreceptors?',
      options: [
        'Peripheral retina',
        'Optic disc',
        'Fovea centralis',
        'Cornea'
      ],
      correctAnswer: 2,
      explanation: 'The fovea centralis, located in the center of the macula, contains the highest concentration of cone photoreceptors and provides the sharpest vision. It has no blood vessels to interfere with light reaching the photoreceptors.'
    },
    {
      question: 'What is the purpose of the vitreous humor?',
      options: [
        'To focus light rays',
        'To maintain eye shape and support retina',
        'To supply oxygen to the lens',
        'To produce aqueous fluid'
      ],
      correctAnswer: 1,
      explanation: 'The vitreous humor is a clear, gel-like substance that fills the space between the lens and the retina. It helps maintain the eye\'s shape, supports the retina, and keeps it properly positioned against the back of the eye.'
    },
    {
      question: 'Which condition results from an elongated eyeball?',
      options: [
        'Hyperopia',
        'Myopia',
        'Presbyopia',
        'Color blindness'
      ],
      correctAnswer: 1,
      explanation: 'Myopia (nearsightedness) typically results from an eyeball that is too long, causing light to focus in front of the retina rather than directly on it. This makes distant objects appear blurry while near objects remain clear.'
    },
    {
      question: 'What is the function of the sclera?',
      options: [
        'To focus light',
        'To protect and maintain eye shape',
        'To control pupil size',
        'To convert light to electrical signals'
      ],
      correctAnswer: 1,
      explanation: 'The sclera is the white, opaque, protective outer layer of the eye. It maintains the eye\'s shape, provides structural support and protection, and serves as an attachment site for the extraocular muscles that control eye movement.'
    }
  ]
}; 