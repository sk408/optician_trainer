import { TopicStudyContent } from '../../interfaces/StudyContent';

export const basicOpticsContent: TopicStudyContent = {
  topicId: 'basic-optics',
  title: 'Basic Principles of Light',
  introduction: 'Light is fundamental to the field of opticianry - after all, we\'re in the business of helping people see! Understanding how light travels and interacts with different materials helps explain why eyeglasses work. Don\'t worry if physics wasn\'t your favorite subject - we\'ll use everyday examples to explain these concepts in simple terms that you can later use to explain vision correction to your patients.',
  objectives: [
    'Define light and identify its characteristics within the electromagnetic spectrum',
    'Explain the processes of reflection, refraction, and absorption of light using everyday examples',
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
            text: 'Light is a form of electromagnetic radiation that can be detected by the human eye. It\'s both a wave and a particle (photon), demonstrating what physicists call "wave-particle duality." Think of it like water at the beach - it comes in waves, but you can also splash individual drops (particles) of water.'
          }
        },
        {
          id: 'light-everyday',
          type: 'paragraph',
          content: {
            text: 'In your daily life, you encounter light constantly: sunlight streaming through a window, the glow of your phone screen, or the beam of a flashlight. These are all forms of visible light that allow us to see the world around us. When your patients ask how glasses work, the conversation always begins with how light behaves.'
          }
        },
        {
          id: 'beginner-misconception',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Common Misconception',
            text: 'Many beginners think of light as just "brightness" or "illumination." While light does create these effects, it\'s actually energy traveling in waves that your eyes can detect and your brain interprets as images. Understanding light as energy in motion is key to understanding how lenses work.'
          }
        },
        {
          id: 'light-em-spectrum',
          type: 'paragraph',
          content: {
            text: 'Light is part of the electromagnetic spectrum, which includes radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays. The visible spectrum (what we can see) is just a small portion of this entire range, like one small section of a long piano keyboard.'
          }
        },
        {
          id: 'spectrum-analogy',
          type: 'paragraph',
          content: {
            text: 'Imagine the entire electromagnetic spectrum as a massive highway stretching thousands of miles. The portion we can actually see (visible light) would be just about 500 feet of that highway! Everything else is invisible to our eyes, though we use devices to detect and use other parts of the spectrum (like radios for radio waves or X-ray machines for X-rays).'
          }
        },
        {
          id: 'em-spectrum-image',
          type: 'image',
          content: {
            src: '/assets/images/study/electromagnetic-spectrum.svg',
            alt: 'The electromagnetic spectrum showing visible light in relation to other radiation types',
            caption: 'The electromagnetic spectrum with visible light highlighted. Note that visible light is only a small portion of the full spectrum - equivalent to about one octave on a piano with many octaves.',
            width: '80%'
          }
        },
        {
          id: 'light-travels-straight',
          type: 'paragraph',
          content: {
            text: 'One of the most important properties of light for understanding vision is that light travels in straight lines (called "rays") until it encounters something that changes its path. This is why we can\'t see around corners - the light rays traveling from objects around the corner don\'t bend to reach our eyes.'
          }
        },
        {
          id: 'light-demonstration',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Quick Demonstration',
            text: 'You can demonstrate how light travels in straight lines with a simple flashlight in a dark room. The beam creates a straight line that only changes direction if it hits something. If you add smoke or dust to the air, you can actually see the straight path the light takes.'
          }
        },
        {
          id: 'visible-spectrum',
          type: 'paragraph',
          content: {
            text: 'The visible light spectrum ranges from approximately 380 to 700 nanometers (nm) in wavelength. Different wavelengths within this range correspond to different colors that we see. Remember the rainbow acronym ROYGBIV (Red, Orange, Yellow, Green, Blue, Indigo, Violet)? That\'s the visible spectrum arranged by wavelength, from longest (red) to shortest (violet).'
          }
        },
        {
          id: 'rainbow-practical',
          type: 'paragraph',
          content: {
            text: 'You can see this color spectrum whenever you see a rainbow or when white light passes through a prism. The prism separates white light into its component colors because each color (wavelength) bends at a slightly different angle when passing through the prism material - this separation of colors is called "dispersion."'
          }
        },
        {
          id: 'color-wavelengths',
          type: 'table',
          content: {
            headers: ['Color', 'Wavelength Range (nm)', 'What It Looks Like'],
            rows: [
              ['Violet', '380-450', 'Color of lavender flowers or amethyst gemstones'],
              ['Blue', '450-495', 'Color of a clear sky or blueberries'],
              ['Green', '495-570', 'Color of grass or emeralds'],
              ['Yellow', '570-590', 'Color of lemons or sunflowers'],
              ['Orange', '590-620', 'Color of carrots or pumpkins'],
              ['Red', '620-700', 'Color of ripe strawberries or stop signs']
            ],
            caption: 'Approximate wavelength ranges for colors in the visible spectrum with familiar examples'
          }
        },
        {
          id: 'wavelength-freq',
          type: 'paragraph',
          content: {
            text: 'The wavelength (λ) of light is inversely proportional to its frequency (f). The relationship is given by c = λf, where c is the speed of light (approximately 3 × 10^8 meters per second in a vacuum). Simply put, colors with shorter wavelengths (like violet) have higher frequencies than colors with longer wavelengths (like red).'
          }
        },
        {
          id: 'wavelength-practical',
          type: 'paragraph',
          content: {
            text: 'While understanding wavelength and frequency might seem technical, it has practical applications in opticianry. For example, blue light (shorter wavelength) scatters more easily than red light (longer wavelength). This is why the sky appears blue - blue light from the sun scatters more throughout the atmosphere. It\'s also why blue light filtering lenses are becoming popular to reduce eye strain from digital screens, which emit more blue light.'
          }
        },
        {
          id: 'light-overview-callout',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Light in Everyday Terms',
            text: 'When explaining light to patients, you might say: "Light is energy that travels in waves. Different colors of light have different wavelengths, like different-sized ripples in water. Your eyes detect these wavelengths and your brain interprets them as colors."'
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
            text: 'When light encounters matter, three main interactions can occur: reflection, refraction, and absorption. Understanding these interactions is crucial for comprehending how lenses and other optical devices work. These concepts explain why eyeglass lenses can correct vision problems.'
          }
        },
        {
          id: 'interactions-everyday',
          type: 'paragraph',
          content: {
            text: 'Every day, you witness these interactions without realizing it. When you see your reflection in a mirror, that\'s reflection. When a straw appears bent in a glass of water, that\'s refraction. When sunglasses darken your view, that\'s selective absorption. Learning to recognize these phenomena will help reinforce your understanding.'
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
            definition: 'The bouncing of light off a surface. The angle of incidence equals the angle of reflection - like a billiard ball bouncing off the rail of a pool table at the same angle it approached.',
            related: ['Specular reflection', 'Diffuse reflection']
          }
        },
        {
          id: 'reflection-explanation',
          type: 'paragraph',
          content: {
            text: 'When light reflects off a surface, it follows the law of reflection: the angle of incidence equals the angle of reflection. This is why mirrors work - they have a smooth surface that reflects light in a predictable way. Think about bouncing a tennis ball on the ground - if you throw it straight down, it bounces straight up. If you throw it at an angle, it bounces away at the same angle.'
          }
        },
        {
          id: 'reflection-animated',
          type: 'paragraph',
          content: {
            text: 'Imagine you shine a flashlight at a mirror at a 30-degree angle from perpendicular. The light will bounce off the mirror at a 30-degree angle on the opposite side - just like how a pool ball bounces off a cushion. This predictable behavior is what makes mirrors so useful - they reflect light in a way that maintains the image.'
          }
        },
        {
          id: 'reflection-everyday',
          type: 'paragraph',
          content: {
            text: 'Reflection isn\'t limited to mirrors. Any smooth surface can reflect light to some degree. The screen you\'re reading this on, polished countertops, still water in a lake - all create reflections. Even eyeglass lenses reflect some light, which is why anti-reflective coatings are important for optimal vision.'
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
              'Specular reflection: Occurs on smooth surfaces where all light rays reflect at the same angle. This produces clear images, like in mirrors, polished metal, or still water.',
              'Diffuse reflection: Occurs on rough surfaces where light rays scatter in many directions. This is why most objects don\'t have mirror-like properties. Paper, fabric, and unpolished surfaces create diffuse reflection.'
            ],
            ordered: false
          }
        },
        {
          id: 'reflection-comparison',
          type: 'paragraph',
          content: {
            text: 'To understand the difference, compare a glossy photo print (more specular reflection) to a matte print (more diffuse reflection). The glossy print might show clear reflections of light sources, while the matte print diffuses the light without creating distinct reflections.'
          }
        },
        {
          id: 'reflection-image',
          type: 'image',
          content: {
            src: '/assets/images/study/reflection-types.svg',
            alt: 'Diagram showing specular vs diffuse reflection',
            caption: 'Specular reflection (left) vs. diffuse reflection (right). Notice how parallel light rays stay parallel in specular reflection but scatter in diffuse reflection.',
            width: '70%'
          }
        },
        {
          id: 'reflection-everyday-callout',
          type: 'callout',
          content: {
            type: 'example',
            title: 'Reflection in Eyewear',
            text: 'Anti-reflective (AR) coatings reduce unwanted reflections from the surface of eyeglass lenses. This allows more light to pass through the lens instead of bouncing off, improving vision and reducing glare, especially when driving at night or working on a computer.'
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
            definition: 'The bending of light as it passes from one medium to another due to a change in speed. This is similar to how a car\'s wheels slow down when moving from pavement to sand, causing the car to change direction if it hits the sand at an angle.',
            related: ['Index of refraction', 'Snell\'s law']
          }
        },
        {
          id: 'refraction-explanation',
          type: 'paragraph',
          content: {
            text: 'Refraction is the most important optical phenomenon for understanding how eyeglasses work. When light passes from one medium to another (e.g., from air to glass), it changes speed, which causes it to bend or change direction. This is why a straw appears bent when placed in a glass of water - the light rays bend as they move from water to air, creating an optical illusion.'
          }
        },
        {
          id: 'refraction-everyday',
          type: 'paragraph',
          content: {
            text: 'You can see refraction in action with this simple experiment: place a pencil in a glass of water at an angle. The portion of the pencil below the water surface will appear disconnected from the portion above water due to light bending as it moves between water and air. This same principle is what makes pools look shallower than they really are!'
          }
        },
        {
          id: 'refraction-direction',
          type: 'paragraph',
          content: {
            text: 'The direction of bending depends on the media involved. When light travels from a less dense to a more dense medium (like air to glass), it bends toward what\'s called the "normal" (an imaginary line perpendicular to the surface). When moving from more dense to less dense (like glass to air), it bends away from the normal.'
          }
        },
        {
          id: 'refraction-visualization',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Visualizing Refraction',
            text: 'Imagine a line of people walking from firm pavement onto soft sand at an angle. As each person\'s feet hit the sand, they slow down, while the people still on pavement maintain their speed. This causes the entire line to pivot and change direction - just like how light rays bend when they encounter a new medium where they travel at a different speed.'
          }
        },
        {
          id: 'refraction-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Key Concept',
            text: 'Refraction is the primary mechanism that allows lenses to focus light and correct vision problems. When you prescribe eyeglasses, you\'re essentially creating a refractive solution that bends light to the correct focal point on the patient\'s retina.'
          }
        },
        {
          id: 'refraction-image',
          type: 'image',
          content: {
            src: '/assets/images/study/refraction.svg',
            alt: 'Diagram showing light refraction between two mediums',
            caption: 'Light refracting as it passes from air into glass and then back into air. Notice how the light ray changes direction at each boundary between materials.',
            width: '70%'
          }
        },
        {
          id: 'refraction-examples-callout',
          type: 'callout',
          content: {
            type: 'example',
            title: 'Everyday Examples of Refraction',
            text: 'A swimming pool looks shallower than it really is due to refraction. A magnifying glass works by refracting light to create a larger image. And most importantly for our field, eyeglass lenses refract light to focus it properly on the retina, correcting vision problems.'
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
            definition: 'The process by which light energy is taken up by matter, typically converted to heat or other forms of energy. Think of a black T-shirt on a hot day - it absorbs most light wavelengths, converting them to heat, which is why dark colors feel warmer in sunlight.',
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
          id: 'absorption-colors',
          type: 'paragraph',
          content: {
            text: 'A red shirt appears red because it absorbs most non-red wavelengths (like blue, green, and yellow) and reflects or scatters the red wavelengths back to your eyes. Similarly, plants appear green because their chlorophyll absorbs red and blue light while reflecting green light.'
          }
        },
        {
          id: 'absorption-example',
          type: 'paragraph',
          content: {
            text: 'For example, a red object appears red because it absorbs all wavelengths of light except red, which it reflects. In eyewear, absorption is important for UV protection and tinted lenses.'
          }
        },
        {
          id: 'absorption-eyewear',
          type: 'paragraph',
          content: {
            text: 'In eyewear, we use absorption properties to our advantage. UV-blocking lenses absorb harmful ultraviolet light before it reaches the eye. Sunglasses absorb a portion of visible light to reduce brightness and glare. Photochromic lenses change their absorption properties based on UV exposure, darkening in bright conditions and becoming clearer indoors.'
          }
        },
        {
          id: 'selective-absorption',
          type: 'paragraph',
          content: {
            text: 'Some specialty lenses use selective absorption to enhance certain visual tasks. For example, yellow-tinted "shooting glasses" selectively absorb blue light, which can reduce haze and improve contrast when looking at targets against a blue sky.'
          }
        },
        {
          id: 'interactive-light-learning',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Interactive Learning Activity',
            text: 'To better understand these three light interactions, gather these simple materials: a mirror, a glass of water, a transparent plastic ruler, and 3-4 different colored objects. Observe how light reflects off the mirror, refracts through the water when you place the ruler at an angle, and how different colored objects absorb different wavelengths (notice how their color changes slightly under different lighting). These hands-on observations will cement these concepts better than any diagram.'
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
  summary: 'Basic optics provides the scientific foundation for understanding how light behaves and how lenses correct vision. Key principles include the nature of light, refraction, reflection, and focal properties of lenses. Light travels in straight lines until it encounters a different medium, where it bends (refracts) according to Snell\'s Law. This bending forms the basis for lens design, where convex lenses converge light rays (for hyperopia correction) and concave lenses diverge them (for myopia correction). Lens power is measured in diopters, defined as the reciprocal of the focal length in meters. Understanding these fundamental concepts enables opticians to comprehend how prescription lenses manipulate light to correct specific vision problems and provide clear sight at various distances.',
  references: [
    'Jalie, M. (2016). Principles of Ophthalmic Lenses (5th ed.). Association of British Dispensing Opticians.',
    'Brooks, C. W., & Borish, I. M. (2007). System for Ophthalmic Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Freeman, M. H., & Hull, C. C. (2003). Optics (11th ed.). Butterworth-Heinemann.',
    'American Academy of Ophthalmology. (2022). Clinical Optics.'
  ],
  practiceQuestions: [
    {
      question: 'What is the power in diopters of a lens with a focal length of 25 centimeters?',
      options: [
        '+0.25D',
        '+0.40D',
        '+2.50D',
        '+4.00D'
      ],
      correctAnswer: 3,
      explanation: 'To calculate lens power in diopters, use the formula D = 1/f where f is the focal length in meters. For a focal length of 25 centimeters (0.25 meters), D = 1/0.25 = 4.00 diopters. Since the lens is converging (positive focal length), the power is +4.00D.'
    },
    {
      question: 'According to Snell\'s Law, when light passes from air into a material with a higher index of refraction, it:',
      options: [
        'Maintains its original direction',
        'Bends away from the normal',
        'Bends toward the normal',
        'Scatters in multiple directions'
      ],
      correctAnswer: 2,
      explanation: 'Snell\'s Law states that when light passes from a medium with a lower index of refraction (like air) into a medium with a higher index of refraction (like glass or plastic), it bends toward the normal, which is the perpendicular line to the surface at the point of incidence.'
    },
    {
      question: 'Which type of lens has a greater thickness at the edges than at the center?',
      options: [
        'Plano lens',
        'Convex (plus) lens',
        'Concave (minus) lens',
        'Cylindrical lens'
      ],
      correctAnswer: 2,
      explanation: 'A concave (minus) lens is thinner in the center and thicker at the edges. This shape causes light rays to diverge, which is used to correct myopia (nearsightedness) by moving the focal point back onto the retina.'
    },
    {
      question: 'The refractive index of a material indicates:',
      options: [
        'How much the material weighs',
        'How well the material reflects light',
        'How much the material slows down light',
        'How easily the material can be scratched'
      ],
      correctAnswer: 2,
      explanation: 'The refractive index (n) of a material indicates how much light slows down when passing through it compared to its speed in vacuum. It is calculated as n = c/v, where c is the speed of light in vacuum and v is the speed of light in the material. Higher index materials slow light more, causing greater refraction.'
    },
    {
      question: 'What is the primary optical problem addressed by cylindrical lenses?',
      options: [
        'Myopia',
        'Hyperopia',
        'Astigmatism',
        'Presbyopia'
      ],
      correctAnswer: 2,
      explanation: 'Cylindrical lenses are primarily used to correct astigmatism. Unlike spherical lenses that have the same power in all meridians, cylindrical lenses have power only along one meridian, correcting the uneven curvature of the cornea or lens that causes astigmatism.'
    },
    {
      question: 'Which law states that the angle of incidence equals the angle of reflection?',
      options: [
        'Snell\'s Law',
        'Law of Reflection',
        'Beer\'s Law',
        'Fermat\'s Principle'
      ],
      correctAnswer: 1,
      explanation: 'The Law of Reflection states that when light is reflected from a surface, the angle of incidence equals the angle of reflection, with both angles measured from the normal to the surface at the point of incidence.'
    },
    {
      question: 'What happens to the focal length of a lens when its power increases?',
      options: [
        'The focal length increases',
        'The focal length decreases',
        'The focal length remains the same',
        'The focal length becomes negative'
      ],
      correctAnswer: 1,
      explanation: 'As the power of a lens increases, its focal length decreases. This inverse relationship is expressed by the formula D = 1/f, where D is the power in diopters and f is the focal length in meters. A stronger lens (higher power) bends light more sharply, bringing it to a focus at a shorter distance.'
    },
    {
      question: 'What is the vergence of parallel light rays?',
      options: [
        '+1.00D',
        '0.00D',
        '-1.00D',
        'Infinite diopters'
      ],
      correctAnswer: 1,
      explanation: 'Parallel light rays (such as those from a distant object) have a vergence of 0.00D. Vergence describes the degree of convergence or divergence of light rays, with parallel rays neither converging nor diverging, resulting in zero vergence.'
    },
    {
      question: 'What optical principle explains why a lens can correct refractive errors?',
      options: [
        'Absorption',
        'Refraction',
        'Diffraction',
        'Polarization'
      ],
      correctAnswer: 1,
      explanation: 'Refraction is the bending of light as it passes from one medium to another with a different optical density. Ophthalmic lenses correct refractive errors by using this principle to redirect light rays, compensating for the eye\'s inability to focus light properly on the retina.'
    },
    {
      question: 'When light passes through a prism, in which direction does it bend?',
      options: [
        'Toward the apex',
        'Toward the base',
        'Perpendicular to the base',
        'It does not bend'
      ],
      correctAnswer: 1,
      explanation: 'When light passes through a prism, it bends toward the base (thicker part) of the prism. This principle is used in prismatic lenses to shift the visual image, which can help with certain binocular vision issues or compensate for muscle imbalances.'
    }
  ]
}; 