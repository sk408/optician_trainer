import { TopicStudyContent } from '../../interfaces/StudyContent';
import { prismImages } from '../mediaAssets';

export const prismBasicsContent: TopicStudyContent = {
  topicId: 'prism',
  title: 'Introduction to Prism',
  introduction: 'Optical prisms are powerful tools in eyecare that can be used to diagnose and treat various binocular vision issues. Understanding how prisms bend light and their applications in eyewear is essential knowledge for optical professionals. This module will introduce you to the fundamental concepts of optical prisms, how they work, and their practical applications in patient care.',
  objectives: [
    'Define what an optical prism is and describe its basic properties',
    'Explain how prisms bend light and understand the principle of deviation',
    'Recognize how prism power is measured in prism diopters',
    'Identify the four primary base directions and their effects on image position',
    'Understand common clinical applications of prism in eyewear',
    'Apply basic prism concepts to solve simple clinical problems'
  ],
  sections: [
    {
      id: 'prism-fundamentals',
      title: 'Prism Fundamentals',
      type: 'introduction',
      content: [
        {
          id: 'prism-def',
          type: 'paragraph',
          content: {
            text: 'An optical prism is a transparent optical element with flat, polished surfaces that refract light. Unlike lenses that have curved surfaces, prisms have flat surfaces arranged at specific angles to each other. The most common shape used in opticianry is the triangular prism.',
            highlight: true
          }
        },
        {
          id: 'prism-everyday',
          type: 'paragraph',
          content: {
            text: 'You\'ve likely seen prisms in action before - they\'re what create rainbows when light passes through crystal ornaments hanging in windows. In opticianry, we use prisms not to create pretty rainbows, but to precisely redirect light entering the eye.'
          }
        },
        {
          id: 'prism-parts',
          type: 'paragraph',
          content: {
            text: 'A typical optical prism has several key parts:'
          }
        },
        {
          id: 'prism-parts-list',
          type: 'list',
          content: {
            items: [
              'Base: The thickest part of the prism',
              'Apex: The thinnest part of the prism (opposite the base)',
              'Angle: The degree of separation between the two refracting surfaces',
              'Refracting surfaces: The flat surfaces through which light enters and exits'
            ],
            ordered: false
          }
        },
        {
          id: 'prism-diagram',
          type: 'image',
          content: {
            src: prismImages.diagram.path,
            alt: 'Basic prism diagram showing how light bends through a prism',
            caption: 'Light bends toward the base when passing through a prism'
          }
        },
        {
          id: 'prism-vs-lens',
          type: 'paragraph',
          content: {
            text: 'It\'s important to distinguish prisms from lenses. While both manipulate light, lenses primarily focus or disperse light, changing convergence or divergence. Prisms, by contrast, redirect light without significantly changing its focus. They shift the apparent position of objects by bending light toward the base of the prism.'
          }
        },
        {
          id: 'beginner-misconception',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Common Misconception',
            text: 'Many beginners confuse prisms with lenses. Remember: prisms have flat surfaces and primarily redirect light, while lenses have curved surfaces and primarily focus or disperse light. Both are important in optometry, but they serve different purposes.'
          }
        }
      ]
    },
    {
      id: 'how-prisms-work',
      title: 'How Prisms Bend Light',
      type: 'main',
      content: [
        {
          id: 'prism-bending',
          type: 'paragraph',
          content: {
            text: 'Prisms bend light through the process of refraction. When light enters a prism, it slows down due to the higher density of the material compared to air. This causes the light rays to bend toward the normal (an imaginary line perpendicular to the surface). When the light exits the prism, it speeds up again and bends away from the normal.'
          }
        },
        {
          id: 'prism-deviation',
          type: 'paragraph',
          content: {
            text: 'The key principle to remember is that light always bends toward the base of the prism. This means that objects viewed through a prism appear to be displaced toward the apex. This displacement is called "deviation" and is the fundamental effect we use in prescription prisms.'
          }
        },
        {
          id: 'prentice-rule',
          type: 'paragraph',
          content: {
            text: 'The amount of deviation depends on several factors: the refractive index of the prism material, the angle of the prism, and the distance from the optical center. This relationship is described by Prentice\'s Rule, which we\'ll explore in more advanced modules.'
          }
        },
        {
          id: 'prism-light-path',
          type: 'image',
          content: {
            src: prismImages.lightPath.path,
            alt: 'Diagram showing the path of light through a prism',
            caption: 'Light path through a prism showing deviation toward the base'
          }
        },
        {
          id: 'prism-bending-analogy',
          type: 'paragraph',
          content: {
            text: 'Here\'s a helpful analogy: Imagine a car driving diagonally from pavement onto sand. The first wheels to hit the sand slow down first, causing the car to turn. Similarly, when light rays enter a prism at an angle, one side of the beam slows down before the other, causing the beam to bend.'
          }
        },
        {
          id: 'prism-practical-example',
          type: 'callout',
          content: {
            type: 'example',
            title: 'Practical Example',
            text: 'Place a pencil half in a glass of water, observing from the side. The pencil appears to be broken at the water line because light bends when moving between air and water. This is the same principle that makes prisms work - light bends when moving between materials with different optical densities.'
          }
        }
      ]
    },
    {
      id: 'measuring-prism',
      title: 'Measuring Prism Power',
      type: 'main',
      content: [
        {
          id: 'prism-diopter-intro',
          type: 'paragraph',
          content: {
            text: 'Prism power is measured in "prism diopters" (Δ or PD), not to be confused with regular diopters used for measuring lens power. A prism diopter represents a displacement of 1 centimeter at a distance of 1 meter.'
          }
        },
        {
          id: 'prism-diopter-definition',
          type: 'definition',
          content: {
            term: 'Prism Diopter (Δ)',
            definition: 'A unit of measurement for prism power. One prism diopter displaces an image by 1 centimeter at a distance of 1 meter.',
            related: ['Deviation', 'Base direction']
          }
        },
        {
          id: 'prism-measurement-explanation',
          type: 'paragraph',
          content: {
            text: 'For example, if a patient looks at an object 1 meter away through a 2Δ prism, the object will appear to be displaced by 2 centimeters. If the distance is 2 meters, the displacement would be 4 centimeters (2Δ × 2 meters).'
          }
        },
        {
          id: 'prism-diopter-visual',
          type: 'image',
          content: {
            src: prismImages.diopter.path,
            alt: 'Diagram illustrating prism diopter measurement',
            caption: 'Visual representation of how prism diopters are measured'
          }
        },
        {
          id: 'prism-measurement-simplified',
          type: 'paragraph',
          content: {
            text: 'In practical terms, the higher the prism diopter value, the stronger the prism and the greater the displacement of images. Common prescriptions range from 0.5Δ to 10Δ, though higher values may be used in specific cases.'
          }
        },
        {
          id: 'prism-power-tools',
          type: 'paragraph',
          content: {
            text: 'Prism power in eyeglasses can be measured using a lensometer (also called a lensmeter or focimeter). Special techniques are required to measure prism power, which we\'ll cover in more advanced modules on lens verification.'
          }
        }
      ]
    },
    {
      id: 'prism-direction',
      title: 'Prism Base Direction',
      type: 'main',
      content: [
        {
          id: 'base-direction-intro',
          type: 'paragraph',
          content: {
            text: 'Just as important as the prism power is the direction of the prism base. The base direction determines in which direction the light will be bent, and consequently, in which direction objects will appear to move.'
          }
        },
        {
          id: 'base-directions-list',
          type: 'paragraph',
          content: {
            text: 'There are four primary base directions in prism prescriptions:'
          }
        },
        {
          id: 'base-directions-detailed',
          type: 'list',
          content: {
            items: [
              'Base In (BI): Base is toward the nose; moves images outward (temporally)',
              'Base Out (BO): Base is toward the temple; moves images inward (nasally)',
              'Base Up (BU): Base is toward the top of the lens; moves images downward',
              'Base Down (BD): Base is toward the bottom of the lens; moves images upward'
            ],
            ordered: false
          }
        },
        {
          id: 'eye-movement-principle',
          type: 'paragraph',
          content: {
            text: 'A helpful principle to remember is "BINO" - Base In Nasalizes Objects (moves them toward the nose), while Base Out does the opposite. Similarly, Base Up lowers objects, while Base Down raises them.'
          }
        },
        {
          id: 'base-direction-diagram',
          type: 'image',
          content: {
            src: prismImages.directions.path,
            alt: 'Diagram showing different prism base directions',
            caption: 'Prism base directions and their effects on image displacement'
          }
        },
        {
          id: 'oblique-prisms',
          type: 'paragraph',
          content: {
            text: 'In addition to these four primary directions, prisms can be prescribed in oblique (diagonal) directions, specified by degrees (e.g., "2Δ base at 45°"). This allows for precise correction of specific binocular vision issues.'
          }
        },
        {
          id: 'prism-right-vs-left',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Right vs. Left Eye',
            text: 'Remember that Base In for the right eye points toward the patient\'s nose (leftward), while Base In for the left eye points toward the patient\'s nose (rightward). Always consider which eye you\'re working with when interpreting prism directions.'
          }
        }
      ]
    },
    {
      id: 'applications',
      title: 'Clinical Applications of Prism',
      type: 'clinical',
      content: [
        {
          id: 'applications-intro',
          type: 'paragraph',
          content: {
            text: 'Prisms are used in eyewear for various clinical purposes. Here are some of the most common applications:'
          }
        },
        {
          id: 'applications-list',
          type: 'list',
          content: {
            items: [
              'Diplopia (Double Vision): Prisms can align separate images to provide single vision',
              'Binocular Vision Disorders: Helps correct eye alignment issues like esophoria (eyes turning inward) or exophoria (eyes turning outward)',
              'Strabismus: Can assist in the management of some forms of strabismus (eye turns)',
              'Visual Field Defects: For patients with visual field loss, prisms can shift images into the functioning visual field',
              'Vertigo and Balance Disorders: May help in some cases of vertically misaligned vision causing balance issues'
            ],
            ordered: false
          }
        },
        {
          id: 'prism-case-study',
          type: 'paragraph',
          content: {
            text: 'Case Example: A patient with esophoria (tendency of eyes to turn inward) might be prescribed Base Out prism. This moves images inward, reducing the amount the eyes need to turn outward to maintain single vision, thus alleviating eye strain and potential headaches.'
          }
        },
        {
          id: 'prism-temporary',
          type: 'paragraph',
          content: {
            text: 'Prism can be incorporated into eyeglasses permanently or applied temporarily with Fresnel prisms (thin, press-on sheets of prism). Fresnel prisms are often used for diagnostic purposes or when large amounts of prism are needed temporarily.'
          }
        },
        {
          id: 'fresnel-prism-image',
          type: 'image',
          content: {
            src: prismImages.fresnelPrism.path,
            alt: 'Diagram of a Fresnel prism',
            caption: 'Structure of a Fresnel prism showing the thin, segmented design'
          }
        },
        {
          id: 'applications-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Communicating with Patients',
            text: 'When explaining prism to patients, you might say: "Prism in your glasses helps align what each eye sees, making it easier for your eyes to work together. It\'s like having built-in assistance that reduces strain on your eye muscles."'
          }
        }
      ]
    }
  ],
  summary: 'Optical prisms are crucial tools in vision correction that bend light toward their base, allowing us to reposition images seen by each eye. Prism power is measured in prism diopters (Δ), with one prism diopter displacing an image by 1 cm at a distance of 1 meter. The four primary base directions (in, out, up, down) determine how images are displaced. Clinically, prisms help manage binocular vision disorders, diplopia, and certain visual field defects. Understanding prism basics is essential for properly interpreting prescriptions and explaining their benefits to patients.',
  references: [
    'Brooks CW, Borish IM. System for Ophthalmic Dispensing, 3rd Edition',
    'American Academy of Ophthalmology: Basic and Clinical Science Course',
    'Clinical Management of Binocular Vision: Heterophoric, Accommodative, and Eye Movement Disorders',
    'American Board of Opticianry (ABO) Exam Guide'
  ],
  practiceQuestions: [
    {
      question: 'What happens to light when it passes through a prism?',
      options: [
        'Light bends toward the base of the prism',
        'Light bends toward the apex of the prism',
        'Light is focused to a point',
        'Light is scattered in all directions'
      ],
      correctAnswer: 0,
      explanation: 'Light always bends toward the base of the prism. This is the fundamental principle of how prisms work in optics.'
    },
    {
      question: 'What unit is used to measure prism power?',
      options: [
        'Diopter',
        'Prism diopter',
        'Centimeter',
        'Degree'
      ],
      correctAnswer: 1,
      explanation: 'Prism power is measured in prism diopters (Δ), where 1Δ displaces an image by 1 cm at a distance of 1 meter.'
    },
    {
      question: 'If a prescription includes "2Δ Base Out" for the right eye, in which direction will images appear to move?',
      options: [
        'Toward the right',
        'Toward the left (nasally)',
        'Upward',
        'Downward'
      ],
      correctAnswer: 1,
      explanation: 'Base Out prism for the right eye has its base toward the right temple, causing images to appear to move toward the left (nasally).'
    },
    {
      question: 'Which of the following is NOT a common clinical application of prism?',
      options: [
        'Correcting diplopia (double vision)',
        'Managing binocular vision disorders',
        'Correcting refractive errors like myopia',
        'Helping with visual field defects'
      ],
      correctAnswer: 2,
      explanation: 'Prisms do not correct refractive errors like myopia, hyperopia, or astigmatism. Those require spherical or cylindrical lenses. Prisms are used for binocular vision issues and image relocation.'
    }
  ]
}; 