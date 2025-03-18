import { TopicStudyContent } from '../../interfaces/StudyContent';

export const basicOpticsContent: TopicStudyContent = {
  topicId: 'basic-optics',
  title: 'Basic Principles of Light',
  introduction: 'Light is fundamental to the field of opticianry. Understanding how light travels and interacts with different materials is essential for comprehending how eyeglasses correct vision. This module introduces the basic properties of light, helping you build a solid foundation for understanding more complex optical concepts.',
  objectives: [
    'Define light and identify its characteristics within the electromagnetic spectrum',
    'Explain the processes of reflection, refraction, and absorption of light',
    'Understand the concept of index of refraction and its importance in optics',
    'Describe how light travels through different mediums',
    'Apply Snell\'s law to basic optics problems',
    'Identify the visible light spectrum and relevant wavelengths'
  ],
  sections: [
    {
      id: 'what-is-light',
      title: 'What is Light?',
      type: 'introduction',
      content: [
        {
          id: 'light-def',
          type: 'paragraph',
          content: {
            text: 'Light is a form of electromagnetic radiation that can be detected by the human eye. It\'s both a wave and a particle (photon), demonstrating what physicists call "wave-particle duality."'
          }
        },
        {
          id: 'light-em-spectrum',
          type: 'paragraph',
          content: {
            text: 'Light is part of the electromagnetic spectrum, which includes radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays. The visible spectrum is just a small portion of this entire range.'
          }
        },
        {
          id: 'em-spectrum-image',
          type: 'image',
          content: {
            src: '/assets/images/study/electromagnetic-spectrum.svg',
            alt: 'The electromagnetic spectrum showing visible light in relation to other radiation types',
            caption: 'The electromagnetic spectrum with visible light highlighted. Note that visible light is only a small portion of the full spectrum.',
            width: '80%'
          }
        },
        {
          id: 'visible-spectrum',
          type: 'paragraph',
          content: {
            text: 'The visible light spectrum ranges from approximately 380 to 700 nanometers (nm) in wavelength. Different wavelengths within this range correspond to different colors:'
          }
        },
        {
          id: 'color-wavelengths',
          type: 'table',
          content: {
            headers: ['Color', 'Wavelength Range (nm)'],
            rows: [
              ['Violet', '380-450'],
              ['Blue', '450-495'],
              ['Green', '495-570'],
              ['Yellow', '570-590'],
              ['Orange', '590-620'],
              ['Red', '620-700']
            ],
            caption: 'Approximate wavelength ranges for colors in the visible spectrum'
          }
        },
        {
          id: 'wavelength-freq',
          type: 'paragraph',
          content: {
            text: 'The wavelength (λ) of light is inversely proportional to its frequency (f). The relationship is given by c = λf, where c is the speed of light (approximately 3 × 10^8 meters per second in a vacuum).'
          }
        }
      ]
    },
    {
      id: 'light-interactions',
      title: 'How Light Interacts with Matter',
      type: 'main',
      content: [
        {
          id: 'interactions-intro',
          type: 'paragraph',
          content: {
            text: 'When light encounters matter, three main interactions can occur: reflection, refraction, and absorption. Understanding these interactions is crucial for comprehending how lenses and other optical devices work.'
          }
        },
        {
          id: 'reflection-heading',
          type: 'heading',
          content: {
            text: 'Reflection',
            level: 3
          }
        },
        {
          id: 'reflection-def',
          type: 'definition',
          content: {
            term: 'Reflection',
            definition: 'The bouncing of light off a surface. The angle of incidence equals the angle of reflection.',
            related: ['Specular reflection', 'Diffuse reflection']
          }
        },
        {
          id: 'reflection-explanation',
          type: 'paragraph',
          content: {
            text: 'When light reflects off a surface, it follows the law of reflection: the angle of incidence equals the angle of reflection. This is why mirrors work - they have a smooth surface that reflects light in a predictable way.'
          }
        },
        {
          id: 'reflection-types',
          type: 'paragraph',
          content: {
            text: 'There are two main types of reflection:'
          }
        },
        {
          id: 'reflection-types-list',
          type: 'list',
          content: {
            items: [
              'Specular reflection: Occurs on smooth surfaces where all light rays reflect at the same angle. This produces clear images, like in mirrors.',
              'Diffuse reflection: Occurs on rough surfaces where light rays scatter in many directions. This is why most objects don\'t have mirror-like properties.'
            ],
            ordered: false
          }
        },
        {
          id: 'reflection-image',
          type: 'image',
          content: {
            src: '/assets/images/study/reflection-types.svg',
            alt: 'Diagram showing specular vs diffuse reflection',
            caption: 'Specular reflection (left) vs. diffuse reflection (right)',
            width: '70%'
          }
        },
        {
          id: 'refraction-heading',
          type: 'heading',
          content: {
            text: 'Refraction',
            level: 3
          }
        },
        {
          id: 'refraction-def',
          type: 'definition',
          content: {
            term: 'Refraction',
            definition: 'The bending of light as it passes from one medium to another due to a change in speed.',
            related: ['Index of refraction', 'Snell\'s law']
          }
        },
        {
          id: 'refraction-explanation',
          type: 'paragraph',
          content: {
            text: 'Refraction is the most important optical phenomenon for understanding how eyeglasses work. When light passes from one medium to another (e.g., from air to glass), it changes speed, which causes it to bend or change direction.'
          }
        },
        {
          id: 'refraction-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Key Concept',
            text: 'Refraction is the primary mechanism that allows lenses to focus light and correct vision problems.'
          }
        },
        {
          id: 'refraction-image',
          type: 'image',
          content: {
            src: '/assets/images/study/refraction.svg',
            alt: 'Diagram showing light refraction between two mediums',
            caption: 'Light refracting as it passes from air into glass and then back into air',
            width: '70%'
          }
        },
        {
          id: 'absorption-heading',
          type: 'heading',
          content: {
            text: 'Absorption',
            level: 3
          }
        },
        {
          id: 'absorption-def',
          type: 'definition',
          content: {
            term: 'Absorption',
            definition: 'The process by which light energy is taken up by matter, typically converted to heat or other forms of energy.',
            related: ['Transmission', 'Opacity']
          }
        },
        {
          id: 'absorption-explanation',
          type: 'paragraph',
          content: {
            text: 'When light is absorbed, its energy is converted to another form, usually heat. Different materials absorb different wavelengths of light. This is why objects appear to have different colors - they\'re absorbing some wavelengths while reflecting others.'
          }
        },
        {
          id: 'absorption-example',
          type: 'paragraph',
          content: {
            text: 'For example, a red object appears red because it absorbs all wavelengths of light except red, which it reflects. In eyewear, absorption is important for UV protection and tinted lenses.'
          }
        }
      ]
    },
    {
      id: 'index-of-refraction',
      title: 'Index of Refraction',
      type: 'main',
      content: [
        {
          id: 'ior-def',
          type: 'definition',
          content: {
            term: 'Index of Refraction (n)',
            definition: 'A measure of how much light is slowed down when it enters a material. Mathematically, it equals the speed of light in a vacuum divided by the speed of light in the material.',
            related: ['Refraction', 'Optical density']
          }
        },
        {
          id: 'ior-formula',
          type: 'paragraph',
          content: {
            text: 'The index of refraction (n) is calculated using the formula:',
            highlight: true
          }
        },
        {
          id: 'ior-formula-p2',
          type: 'paragraph',
          content: {
            text: 'n = c / v',
            highlight: true
          }
        },
        {
          id: 'ior-formula-p3',
          type: 'paragraph',
          content: {
            text: 'Where c is the speed of light in a vacuum (3 × 10^8 m/s) and v is the speed of light in the material.'
          }
        },
        {
          id: 'common-ior-table',
          type: 'table',
          content: {
            headers: ['Material', 'Approximate Index of Refraction'],
            rows: [
              ['Vacuum', '1.0'],
              ['Air', '1.0003'],
              ['Water', '1.33'],
              ['Crown glass', '1.52'],
              ['Flint glass', '1.62'],
              ['Polycarbonate', '1.59'],
              ['High-index plastic (1.67)', '1.67'],
              ['High-index plastic (1.74)', '1.74'],
              ['Diamond', '2.42']
            ],
            caption: 'Common materials and their approximate indices of refraction'
          }
        },
        {
          id: 'ior-importance',
          type: 'paragraph',
          content: {
            text: 'The index of refraction is crucial in opticianry for several reasons:'
          }
        },
        {
          id: 'ior-importance-list',
          type: 'list',
          content: {
            items: [
              'Higher index materials can create thinner lenses for the same prescription',
              'The difference in indices between materials determines how much light bends at their interface',
              'Index affects reflections - higher index materials tend to create more surface reflections (this is why anti-reflective coatings are important for high-index lenses)',
              'Index is related to dispersion (how much a material separates light into its component colors)'
            ],
            ordered: false
          }
        },
        {
          id: 'ior-note',
          type: 'callout',
          content: {
            type: 'note',
            text: 'The index of refraction can vary slightly with the wavelength of light. This phenomenon is called dispersion and is responsible for effects like the rainbow created by a prism.'
          }
        }
      ]
    },
    {
      id: 'snells-law',
      title: 'Snell\'s Law',
      type: 'main',
      content: [
        {
          id: 'snells-def',
          type: 'definition',
          content: {
            term: 'Snell\'s Law',
            definition: 'A formula used to describe the relationship between the angles of incidence and refraction when light passes from one medium to another.',
            related: ['Refraction', 'Index of refraction']
          }
        },
        {
          id: 'snells-formula',
          type: 'paragraph',
          content: {
            text: 'Snell\'s Law is expressed mathematically as:',
            highlight: true
          }
        },
        {
          id: 'snells-formula-p2',
          type: 'paragraph',
          content: {
            text: 'n₁ sin(θ₁) = n₂ sin(θ₂)',
            highlight: true
          }
        },
        {
          id: 'snells-explanation',
          type: 'paragraph',
          content: {
            text: 'Where n₁ is the index of refraction of the first medium, θ₁ is the angle of incidence, n₂ is the index of refraction of the second medium, and θ₂ is the angle of refraction.'
          }
        },
        {
          id: 'snells-image',
          type: 'image',
          content: {
            src: '/assets/images/study/snells-law.svg',
            alt: 'Diagram illustrating Snell\'s Law with incident and refracted light rays',
            caption: 'Illustration of Snell\'s Law showing the relationship between angles and indices of refraction',
            width: '70%'
          }
        },
        {
          id: 'snells-application',
          type: 'paragraph',
          content: {
            text: 'In opticianry, Snell\'s Law helps us understand how light behaves when it passes through lenses of different materials and shapes. It\'s the fundamental principle behind how eyeglass lenses bend light to correct vision problems.'
          }
        },
        {
          id: 'snells-example',
          type: 'callout',
          content: {
            type: 'info',
            title: 'Simple Example',
            text: 'When light passes from air (n = 1.0) to crown glass (n = 1.52) at a 30° angle of incidence, the angle of refraction can be calculated as: sin(θ₂) = (1.0 × sin(30°)) ÷ 1.52 = 0.33, giving θ₂ ≈ 19°. This shows how light bends toward the normal when entering a denser medium.'
          }
        }
      ]
    },
    {
      id: 'clinical-applications',
      title: 'Clinical Applications in Opticianry',
      type: 'clinical',
      content: [
        {
          id: 'clinical-intro',
          type: 'paragraph',
          content: {
            text: 'Understanding the basic principles of light is essential for clinical applications in opticianry. Here are some practical ways these concepts apply in your future work:'
          }
        },
        {
          id: 'reflection-app',
          type: 'heading',
          content: {
            text: 'Reflection Applications',
            level: 3
          }
        },
        {
          id: 'reflection-app-list',
          type: 'list',
          content: {
            items: [
              'Anti-reflective coatings reduce unwanted reflections from lens surfaces, improving vision and cosmetic appearance',
              'Pupillometers use reflection principles to measure pupillary distance',
              'Retinoscopy relies on the reflection of light from the retina to determine refractive errors'
            ],
            ordered: false
          }
        },
        {
          id: 'refraction-app',
          type: 'heading',
          content: {
            text: 'Refraction Applications',
            level: 3
          }
        },
        {
          id: 'refraction-app-list',
          type: 'list',
          content: {
            items: [
              'Different lens designs (spherical, cylindrical, prismatic) use refraction principles to correct various vision problems',
              'Higher-index materials are used to create thinner lenses for strong prescriptions',
              'Progressive lenses use carefully designed refractive surfaces to provide smooth power transitions'
            ],
            ordered: false
          }
        },
        {
          id: 'absorption-app',
          type: 'heading',
          content: {
            text: 'Absorption Applications',
            level: 3
          }
        },
        {
          id: 'absorption-app-list',
          type: 'list',
          content: {
            items: [
              'UV-blocking lenses absorb harmful ultraviolet radiation before it reaches the eye',
              'Photochromic lenses use absorption principles to darken in response to UV light',
              'Tinted lenses selectively absorb certain wavelengths to enhance contrast or reduce glare'
            ],
            ordered: false
          }
        },
        {
          id: 'clinical-tip',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Clinical Tip',
            text: 'When dispensing high-index lenses, always recommend anti-reflective coating. Higher index materials naturally produce more surface reflections due to their greater difference from the refractive index of air.'
          }
        }
      ]
    }
  ],
  summary: 'In this module, we\'ve explored the fundamental properties of light, including its nature as part of the electromagnetic spectrum and the ways it interacts with matter through reflection, refraction, and absorption. We\'ve examined the concept of refractive index and how Snell\'s Law describes the bending of light as it passes between different media. These basic optical principles form the foundation for understanding how eyeglass lenses work to correct vision problems. As you continue your studies, these concepts will be applied to more complex topics like lens design, materials, and optical calculations.',
  references: [
    'Brooks, C. W., & Borish, I. M. (2007). System for Ophthalmic Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Jalie, M. (2003). Ophthalmic Lenses and Dispensing. Butterworth-Heinemann.',
    'American Board of Opticianry. (2022). Exam Content Outline.',
    'Fannin, T. E., & Grosvenor, T. (1996). Clinical Optics. Butterworth-Heinemann.'
  ]
}; 