import { ContentSection } from '../../interfaces/content';

export const basicEyeAnatomy: ContentSection = {
  id: 'basic-eye-anatomy',
  title: 'Basic Eye Anatomy',
  description: 'Understanding the fundamental structures of the eye and their functions',
  sections: [
    {
      title: 'Introduction to Eye Anatomy',
      content: `
        The human eye is a complex organ that allows us to see the world around us. Think of it like a camera:
        it captures light, focuses it, and converts it into signals that our brain can understand. Let's explore
        the main parts of the eye and how they work together.

        Key Terms to Remember:
        - Cornea: The clear, dome-shaped front surface of the eye
        - Iris: The colored part of the eye that controls pupil size
        - Pupil: The black opening in the center of the iris
        - Lens: The clear structure behind the iris that helps focus light
        - Retina: The light-sensitive layer at the back of the eye
        - Optic Nerve: The nerve that carries visual information to the brain
      `,
      keyPoints: [
        'The eye is like a camera system',
        'Each part has a specific function',
        'Understanding these parts helps in fitting glasses and contact lenses'
      ]
    },
    {
      title: 'The Front of the Eye',
      content: `
        Let's start with the parts we can see when looking at someone's eye:

        1. The Cornea
        - Think of the cornea as the eye's clear window
        - It's the first surface that light hits when entering the eye
        - It helps focus light (about 70% of the eye's focusing power)
        - It's very sensitive to touch and injury
        - It's about 0.5mm thick in the center

        2. The Iris and Pupil
        - The iris is the colored part of the eye (blue, brown, green, etc.)
        - It works like a camera's aperture, controlling how much light enters
        - The pupil is the black opening in the center of the iris
        - The pupil gets smaller in bright light and larger in dim light
        - This is called the pupillary reflex

        Common Issues:
        - Corneal abrasions (scratches)
        - Iris inflammation (iritis)
        - Irregular pupil shape
      `,
      keyPoints: [
        'The cornea is the eye\'s main focusing surface',
        'The iris controls light entry',
        'The pupil size changes with light conditions'
      ]
    },
    {
      title: 'The Middle of the Eye',
      content: `
        Behind the iris, we find several important structures:

        1. The Lens
        - Located behind the iris
        - Clear and flexible
        - Changes shape to focus on near and far objects
        - This process is called accommodation
        - Becomes less flexible with age (presbyopia)

        2. The Ciliary Body
        - Surrounds the lens
        - Contains muscles that control lens shape
        - Produces aqueous humor (fluid in the front of the eye)
        - Important for maintaining eye pressure

        3. The Vitreous
        - Clear, gel-like substance
        - Fills the space between lens and retina
        - Helps maintain eye shape
        - Can develop floaters with age

        Common Conditions:
        - Cataracts (clouding of the lens)
        - Presbyopia (age-related focusing difficulty)
        - Floaters (vitreous changes)
      `,
      keyPoints: [
        'The lens changes shape to focus',
        'The ciliary body controls the lens',
        'The vitreous maintains eye shape'
      ]
    },
    {
      title: 'The Back of the Eye',
      content: `
        The back of the eye contains the retina and related structures:

        1. The Retina
        - Light-sensitive layer at the back of the eye
        - Contains rods (for night vision) and cones (for color vision)
        - Converts light into electrical signals
        - Most sensitive in the center (macula)

        2. The Macula
        - Central part of the retina
        - Responsible for detailed central vision
        - Contains the fovea (point of sharpest vision)
        - Most important for reading and fine detail

        3. The Optic Nerve
        - Carries visual information to the brain
        - Exits the eye at the optic disc
        - Contains about 1 million nerve fibers
        - No light-sensitive cells at the optic disc (blind spot)

        Common Conditions:
        - Macular degeneration
        - Retinal detachment
        - Glaucoma (optic nerve damage)
      `,
      keyPoints: [
        'The retina converts light to signals',
        'The macula handles central vision',
        'The optic nerve carries information to the brain'
      ]
    },
    {
      title: 'Protective Structures',
      content: `
        The eye has several protective features:

        1. The Sclera
        - The white part of the eye
        - Tough, protective outer layer
        - Maintains eye shape
        - Attachment point for eye muscles

        2. The Conjunctiva
        - Thin, clear membrane
        - Covers the sclera and inner eyelids
        - Produces mucus and tears
        - Helps protect against infection

        3. The Eyelids
        - Protect the eye from injury
        - Spread tears across the eye
        - Help maintain tear film
        - Blink reflex protects from foreign objects

        Common Issues:
        - Conjunctivitis (pink eye)
        - Dry eye syndrome
        - Eyelid inflammation (blepharitis)
      `,
      keyPoints: [
        'The sclera provides structural support',
        'The conjunctiva helps protect the eye',
        'Eyelids protect and maintain tear film'
      ]
    }
  ],
  practiceQuestions: [
    {
      question: 'What is the main focusing structure of the eye?',
      options: ['Cornea', 'Iris', 'Lens', 'Retina'],
      correctAnswer: 0
    },
    {
      question: 'Which structure controls how much light enters the eye?',
      options: ['Cornea', 'Iris', 'Lens', 'Retina'],
      correctAnswer: 1
    },
    {
      question: 'What is the light-sensitive layer at the back of the eye?',
      options: ['Cornea', 'Iris', 'Lens', 'Retina'],
      correctAnswer: 3
    }
  ],
  relatedTopics: ['visual-pathway', 'eye-muscles']
}; 