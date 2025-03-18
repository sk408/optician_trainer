import { TopicStudyContent } from '../../interfaces/StudyContent';

export const lowVisionAidsContent: TopicStudyContent = {
  topicId: 'low-vision-aids',
  title: 'Low Vision Aids & Assistive Devices',
  introduction: 'Low vision refers to a visual impairment that cannot be fully corrected with standard eyeglasses, contact lenses, medications, or surgery. It affects millions of people worldwide and can significantly impact daily functioning. This module explores the range of optical and non-optical devices and strategies that can help individuals with low vision maintain independence and quality of life.',
  objectives: [
    'Define low vision and understand its common causes',
    'Identify different categories of low vision aids and their applications',
    'Understand the basic principles of magnification systems',
    'Describe non-optical assistive technologies for low vision patients',
    'Recognize when to refer patients for specialized low vision services',
    'Understand how to support patients in adapting to low vision devices'
  ],
  sections: [
    {
      id: 'low-vision-basics',
      title: 'Understanding Low Vision',
      type: 'introduction',
      content: [
        {
          id: 'low-vision-def',
          type: 'definition',
          content: {
            term: 'Low Vision',
            definition: 'A visual impairment that cannot be fully corrected with conventional eyewear, medical treatment, or surgery, and that interferes with daily activities. It is not the same as blindness, as individuals retain some useful vision.',
            related: ['Visual Impairment', 'Visual Rehabilitation']
          }
        },
        {
          id: 'low-vision-prevalence',
          type: 'paragraph',
          content: {
            text: 'Low vision affects people of all ages, though it is more common among older adults. According to the World Health Organization, approximately 246 million people worldwide have low vision. The prevalence is expected to increase with the aging population and rising incidence of conditions like diabetes that can affect vision.'
          }
        },
        {
          id: 'common-causes-heading',
          type: 'heading',
          content: {
            text: 'Common Causes of Low Vision',
            level: 3
          }
        },
        {
          id: 'common-causes',
          type: 'paragraph',
          content: {
            text: 'Low vision can result from various eye conditions and diseases:'
          }
        },
        {
          id: 'causes-list',
          type: 'list',
          content: {
            items: [
              'Age-related macular degeneration (AMD)',
              'Diabetic retinopathy',
              'Glaucoma',
              'Cataracts (advanced or inoperable)',
              'Retinitis pigmentosa',
              'Optic nerve atrophy',
              'Traumatic brain injury affecting visual pathways',
              'Amblyopia (in children)',
              'Congenital conditions and genetic disorders'
            ],
            ordered: false
          }
        },
        {
          id: 'visual-function-heading',
          type: 'heading',
          content: {
            text: 'Common Visual Function Impairments',
            level: 3
          }
        },
        {
          id: 'visual-function',
          type: 'paragraph',
          content: {
            text: 'Low vision can affect different aspects of visual function:'
          }
        },
        {
          id: 'visual-function-table',
          type: 'table',
          content: {
            headers: ['Visual Function', 'Description', 'Common Associated Conditions'],
            rows: [
              ['Central vision loss', 'Difficulty seeing detail directly ahead', 'Age-related macular degeneration, diabetic macular edema'],
              ['Peripheral vision loss', 'Reduced side vision, tunnel vision', 'Glaucoma, retinitis pigmentosa'],
              ['Contrast sensitivity loss', 'Difficulty distinguishing objects from backgrounds', 'Cataracts, optic nerve disease, diabetic retinopathy'],
              ['Light sensitivity', 'Discomfort in bright light conditions', 'Cataracts, retinal disorders, some corneal conditions'],
              ['Night blindness', 'Poor vision in low light', 'Retinitis pigmentosa, vitamin A deficiency'],
              ['Visual field defects', 'Blind spots or areas of non-vision', 'Stroke, brain injury, advanced glaucoma']
            ],
            caption: 'Common visual function impairments in low vision patients'
          }
        },
        {
          id: 'functional-impact-heading',
          type: 'heading',
          content: {
            text: 'Functional Impact of Low Vision',
            level: 3
          }
        },
        {
          id: 'functional-impact',
          type: 'paragraph',
          content: {
            text: 'Low vision can impact daily activities in various ways:'
          }
        },
        {
          id: 'functional-impact-list',
          type: 'list',
          content: {
            items: [
              'Difficulty reading print materials (books, newspapers, mail)',
              'Challenges with writing and financial management',
              'Problems recognizing faces or facial expressions',
              'Difficulty with personal tasks like grooming and meal preparation',
              'Mobility challenges, including navigation and driving',
              'Reduced ability to use electronic devices',
              'Diminished independence in daily activities',
              'Social isolation and reduced participation in community activities',
              'Increased risk of falls and accidents'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'optical-low-vision-aids',
      title: 'Optical Low Vision Devices',
      type: 'main',
      content: [
        {
          id: 'optical-devices-intro',
          type: 'paragraph',
          content: {
            text: 'Optical low vision aids use lenses to magnify images, making them easier to see. These devices range from simple handheld magnifiers to sophisticated electronic systems.'
          }
        },
        {
          id: 'magnification-principles-heading',
          type: 'heading',
          content: {
            text: 'Principles of Magnification',
            level: 3
          }
        },
        {
          id: 'magnification-principles',
          type: 'paragraph',
          content: {
            text: 'Magnification works by increasing the size of the retinal image. The degree of magnification is typically expressed as a multiple of the original size (e.g., 2x, 4x, 10x). Higher magnification generally results in a smaller field of view, creating a trade-off between detail and context.'
          }
        },
        {
          id: 'magnification-types-heading',
          type: 'heading',
          content: {
            text: 'Types of Magnification',
            level: 3
          }
        },
        {
          id: 'magnification-types-table',
          type: 'table',
          content: {
            headers: ['Type', 'Method', 'Examples'],
            rows: [
              ['Relative size magnification', 'Physically enlarging the object', 'Large print books, enlarged computer displays'],
              ['Relative distance magnification', 'Moving the object closer to the eye', 'Reading glasses that allow closer viewing'],
              ['Angular magnification', 'Using lenses to increase the visual angle', 'Magnifiers, telescopes, microscopes'],
              ['Projection magnification', 'Projecting an enlarged image', 'Electronic video magnifiers, projection systems']
            ],
            caption: 'Four primary types of magnification used in low vision aids'
          }
        },
        {
          id: 'reading-devices-heading',
          type: 'heading',
          content: {
            text: 'Near Vision Devices',
            level: 3
          }
        },
        {
          id: 'reading-devices',
          type: 'paragraph',
          content: {
            text: 'Near vision devices are designed primarily for reading and close-up tasks:'
          }
        },
        {
          id: 'reading-devices-list',
          type: 'list',
          content: {
            items: [
              'High-powered reading glasses: Single vision lenses with higher power than standard reading glasses',
              'Hand magnifiers: Portable devices held between the eye and the object',
              'Stand magnifiers: Rest directly on reading material, maintaining consistent focus distance',
              'Bar magnifiers: For reading lines of text while maintaining context',
              'Illuminated magnifiers: Include built-in lighting to improve contrast',
              'Pocket magnifiers: Compact magnifiers for portability'
            ],
            ordered: false
          }
        },
        {
          id: 'magnifier-image',
          type: 'image',
          content: {
            src: '/assets/images/study/low-vision-magnifiers.jpg',
            alt: 'Various types of optical magnifiers',
            caption: 'Different types of handheld and stand magnifiers for near vision tasks',
            width: 400
          }
        },
        {
          id: 'distance-devices-heading',
          type: 'heading',
          content: {
            text: 'Distance Vision Devices',
            level: 3
          }
        },
        {
          id: 'distance-devices',
          type: 'paragraph',
          content: {
            text: 'Distance vision aids help with tasks like viewing signs, television, classroom presentations, or theatrical performances:'
          }
        },
        {
          id: 'distance-devices-list',
          type: 'list',
          content: {
            items: [
              'Handheld monocular telescopes: Compact, portable single-eye telescopes',
              'Spectacle-mounted telescopes: Attached to eyeglasses for hands-free use',
              'Bioptic telescopes: Small telescopes mounted in the upper portion of eyeglass lenses',
              'Field expanders: Reverse telescopes that compress images to expand the visual field (for tunnel vision)'
            ],
            ordered: false
          }
        },
        {
          id: 'bioptic-definition',
          type: 'definition',
          content: {
            term: 'Bioptic Telescope',
            definition: 'A miniature telescope mounted on spectacles that allows the wearer to alternate between regular vision (looking through the carrier lens) and magnified vision (looking through the telescope). Some jurisdictions permit the use of bioptic telescopes for driving with restrictions.',
            related: ['Telescopic Systems', 'Low Vision Driving']
          }
        },
        {
          id: 'bioptic-image',
          type: 'image',
          content: {
            src: '/assets/images/study/bioptic-telescope.jpg',
            alt: 'Bioptic telescope mounted on eyeglasses',
            caption: 'Bioptic telescope system mounted on prescription eyeglasses',
            width: 400
          }
        },
        {
          id: 'specialty-optical-heading',
          type: 'heading',
          content: {
            text: 'Specialty Optical Systems',
            level: 3
          }
        },
        {
          id: 'specialty-optical',
          type: 'paragraph',
          content: {
            text: 'Some specialized optical systems address specific visual needs:'
          }
        },
        {
          id: 'specialty-optical-list',
          type: 'list',
          content: {
            items: [
              'Microscopic spectacles: Very high-powered reading glasses for close-up work',
              'Prism spectacles: Redirect images from one area to another, useful for some types of visual field loss',
              'Absorptive lenses: Filter specific wavelengths of light to reduce glare and enhance contrast',
              'Fresnel prisms: Thin, flexible prisms that can be attached to existing eyeglasses to help with visual field defects',
              'Hemianopic mirrors: Reflect images from the blind side into the seeing visual field',
              'Loupes: Used for specific tasks requiring high magnification'
            ],
            ordered: false
          }
        },
        {
          id: 'filters-heading',
          type: 'heading',
          content: {
            text: 'Filters and Tints for Low Vision',
            level: 3
          }
        },
        {
          id: 'filters-paragraph',
          type: 'paragraph',
          content: {
            text: 'Selective absorption filters can improve contrast and reduce glare, which is particularly helpful for people with light sensitivity or contrast sensitivity loss:'
          }
        },
        {
          id: 'filters-table',
          type: 'table',
          content: {
            headers: ['Filter Color', 'Benefits', 'Best For'],
            rows: [
              ['Yellow/Amber', 'Enhances contrast, especially in low light', 'Macular degeneration, diabetic retinopathy'],
              ['Orange', 'Reduces blue light scatter, enhances contrast', 'Cataracts, corneal edema'],
              ['Red', 'Highest contrast enhancement', 'Advanced macular degeneration'],
              ['Plum/Purple', 'Good contrast enhancement with color perception', 'Macular conditions, albinism'],
              ['Brown/Grey', 'General glare reduction with minimal color distortion', 'Photophobia, retinal conditions']
            ],
            caption: 'Common filters used for low vision conditions'
          }
        },
        {
          id: 'filters-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Filter Selection',
            text: 'The best filter for a patient often needs to be determined through trial and error. Have patients try different options in the environments where they\'ll be used most frequently.'
          }
        }
      ]
    },
    {
      id: 'electronic-devices',
      title: 'Electronic Low Vision Aids',
      type: 'main',
      content: [
        {
          id: 'electronic-intro',
          type: 'paragraph',
          content: {
            text: 'Electronic low vision aids use cameras and display screens to enhance images. They often provide greater magnification and additional features compared to optical devices.'
          }
        },
        {
          id: 'video-magnifiers-heading',
          type: 'heading',
          content: {
            text: 'Video Magnifiers (CCTV)',
            level: 3
          }
        },
        {
          id: 'video-magnifiers',
          type: 'paragraph',
          content: {
            text: 'Video magnifiers, also known as closed-circuit television (CCTV) systems, use a camera to capture an image and display it on a screen. They offer several advantages over traditional optical magnifiers:'
          }
        },
        {
          id: 'video-advantages-list',
          type: 'list',
          content: {
            items: [
              'Higher levels of magnification (up to 60x or more)',
              'Adjustable contrast and brightness',
              'Ability to invert colors (white text on black background)',
              'Multiple viewing modes and color combinations',
              'More comfortable viewing position',
              'Larger field of view at high magnification',
              'Some models offer image capture and storage'
            ],
            ordered: false
          }
        },
        {
          id: 'video-types-heading',
          type: 'heading',
          content: {
            text: 'Types of Video Magnifiers',
            level: 3
          }
        },
        {
          id: 'video-types-table',
          type: 'table',
          content: {
            headers: ['Type', 'Description', 'Best Use Case'],
            rows: [
              ['Desktop', 'Fixed system with monitor, camera, and reading table', 'Extended reading, writing, and detailed tasks at home/office'],
              ['Portable', 'Compact units with built-in screen', 'Reading while traveling, shopping, or in different locations'],
              ['Head-mounted', 'Wearable device with camera and display eyepieces', 'Hands-free use, mobility applications'],
              ['Smartphone-based', 'Apps that use smartphone camera and screen', 'On-the-go magnification, portability, cost-effective']
            ],
            caption: 'Categories of video magnification systems'
          }
        },
        {
          id: 'cctv-image',
          type: 'image',
          content: {
            src: '/assets/images/study/desktop-cctv.jpg',
            alt: 'Desktop video magnifier system',
            caption: 'Desktop video magnifier with adjustable monitor and reading table',
            width: 400
          }
        },
        {
          id: 'ocr-heading',
          type: 'heading',
          content: {
            text: 'Text-to-Speech Systems',
            level: 3
          }
        },
        {
          id: 'ocr-paragraph',
          type: 'paragraph',
          content: {
            text: 'Optical character recognition (OCR) technology converts printed text into digital text that can be read aloud by speech synthesis. These systems are particularly valuable for individuals with severe vision loss or those who experience visual fatigue with extended reading.'
          }
        },
        {
          id: 'ocr-types-list',
          type: 'list',
          content: {
            items: [
              'Standalone reading machines (all-in-one systems)',
              'Desktop scanners with OCR software',
              'Portable reading devices with built-in cameras',
              'Smartphone apps with OCR capabilities',
              'Reading pens that scan and read text aloud'
            ],
            ordered: false
          }
        },
        {
          id: 'ocr-advantages',
          type: 'paragraph',
          content: {
            text: 'Text-to-speech systems allow access to information without visual reading, enabling users to process larger volumes of text with less fatigue. Many modern systems also include features to navigate through documents, adjust reading speed, and save documents for future reference.'
          }
        },
        {
          id: 'wearable-tech-heading',
          type: 'heading',
          content: {
            text: 'Wearable Technology',
            level: 3
          }
        },
        {
          id: 'wearable-paragraph',
          type: 'paragraph',
          content: {
            text: 'Emerging wearable technologies offer new possibilities for low vision assistance:'
          }
        },
        {
          id: 'wearable-list',
          type: 'list',
          content: {
            items: [
              'Smart glasses with built-in cameras and displays',
              'Artificial intelligence systems that describe scenes or read text',
              'Navigation systems with haptic (touch) feedback',
              'Virtual/augmented reality systems that enhance contrast or magnify images',
              'Devices that provide auditory information about surroundings'
            ],
            ordered: false
          }
        },
        {
          id: 'wearable-callout',
          type: 'callout',
          content: {
            type: 'info',
            title: 'Emerging Technologies',
            text: 'The field of wearable assistive technology is rapidly evolving. Stay informed about new developments to provide patients with the most current options.'
          }
        }
      ]
    },
    {
      id: 'non-optical-aids',
      title: 'Non-Optical Assistive Devices',
      type: 'main',
      content: [
        {
          id: 'non-optical-intro',
          type: 'paragraph',
          content: {
            text: 'Non-optical aids don\'t involve magnification but help low vision patients perform daily tasks through other means. These devices are often simple, affordable, and can significantly improve independence.'
          }
        },
        {
          id: 'lighting-heading',
          type: 'heading',
          content: {
            text: 'Lighting Solutions',
            level: 3
          }
        },
        {
          id: 'lighting-paragraph',
          type: 'paragraph',
          content: {
            text: 'Proper lighting is crucial for people with low vision. The right lighting can enhance contrast, reduce glare, and make tasks easier without magnification.'
          }
        },
        {
          id: 'lighting-list',
          type: 'list',
          content: {
            items: [
              'Direct task lighting (desk lamps, gooseneck lamps)',
              'Full-spectrum lighting that mimics natural daylight',
              'Adjustable intensity lighting',
              'Glare reduction filters for existing lights',
              'Portable lighting for reading in different locations'
            ],
            ordered: false
          }
        },
        {
          id: 'lighting-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Lighting Recommendation',
            text: 'Position lighting to come from behind and over the shoulder for reading tasks. This helps reduce glare and shadowing.'
          }
        },
        {
          id: 'contrast-heading',
          type: 'heading',
          content: {
            text: 'Contrast Enhancement',
            level: 3
          }
        },
        {
          id: 'contrast-paragraph',
          type: 'paragraph',
          content: {
            text: 'Enhancing contrast makes items more visible without magnification:'
          }
        },
        {
          id: 'contrast-list',
          type: 'list',
          content: {
            items: [
              'High-contrast writing tools (black markers on white paper)',
              'Colored cutting boards that contrast with food',
              'Bold-lined paper for writing',
              'Contrasting dinnerware (dark plates for light foods)',
              'Colored tape to mark controls on appliances',
              'High-contrast keyboard stickers for computers'
            ],
            ordered: false
          }
        },
        {
          id: 'large-print-heading',
          type: 'heading',
          content: {
            text: 'Large Print Materials',
            level: 3
          }
        },
        {
          id: 'large-print-paragraph',
          type: 'paragraph',
          content: {
            text: 'Large print materials use relative size magnification:'
          }
        },
        {
          id: 'large-print-list',
          type: 'list',
          content: {
            items: [
              'Large print books and magazines',
              'Large print playing cards and board games',
              'Large display clocks, watches, and timers',
              'Telephones with large buttons and displays',
              'Enlarged calendars and planners',
              'Large print checks and banking materials'
            ],
            ordered: false
          }
        },
        {
          id: 'daily-living-heading',
          type: 'heading',
          content: {
            text: 'Daily Living Aids',
            level: 3
          }
        },
        {
          id: 'daily-living-paragraph',
          type: 'paragraph',
          content: {
            text: 'Specialized tools can help with everyday tasks:'
          }
        },
        {
          id: 'daily-living-table',
          type: 'table',
          content: {
            headers: ['Category', 'Examples'],
            rows: [
              ['Kitchen aids', 'Talking food scales, liquid level indicators, tactile stove markers'],
              ['Personal care', 'Talking scales, medication organizers with tactile markings'],
              ['Mobility', 'White canes, guide dogs, tactile markers for stairs/doorways'],
              ['Organization', 'Tactile labels, color-coding systems, bump dots'],
              ['Timepieces', 'Talking watches/clocks, large display timers'],
              ['Health management', 'Talking blood pressure monitors, glucose meters']
            ],
            caption: 'Categories of daily living aids for people with low vision'
          }
        },
        {
          id: 'writing-aids-heading',
          type: 'heading',
          content: {
            text: 'Writing Aids',
            level: 3
          }
        },
        {
          id: 'writing-aids-list',
          type: 'list',
          content: {
            items: [
              'Signature guides to help position pen for signing documents',
              'Check writing templates',
              'Bold-lined paper for better visibility',
              'Felt-tip pens that create high-contrast writing',
              'Writing guides for envelopes and forms',
              'Raised line paper that provides tactile feedback'
            ],
            ordered: false
          }
        },
        {
          id: 'tactile-audio-heading',
          type: 'heading',
          content: {
            text: 'Tactile and Audio Alternatives',
            level: 3
          }
        },
        {
          id: 'tactile-audio-paragraph',
          type: 'paragraph',
          content: {
            text: 'When vision is severely limited, other senses can be leveraged:'
          }
        },
        {
          id: 'tactile-audio-list',
          type: 'list',
          content: {
            items: [
              'Audiobooks and publications',
              'Screen reading software for computers',
              'Braille materials and braille displays',
              'Tactile graphics and maps',
              'Talking labels and identification systems',
              'Descriptive audio for television and movies'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'dispensing-considerations',
      title: 'Dispensing Low Vision Devices',
      type: 'clinical',
      content: [
        {
          id: 'dispensing-intro',
          type: 'paragraph',
          content: {
            text: 'Successfully dispensing low vision aids requires special considerations beyond standard optical dispensing. The right device, proper training, and ongoing support are essential for successful outcomes.'
          }
        },
        {
          id: 'patient-assessment-heading',
          type: 'heading',
          content: {
            text: 'Patient Assessment Factors',
            level: 3
          }
        },
        {
          id: 'patient-factors-paragraph',
          type: 'paragraph',
          content: {
            text: 'A comprehensive patient assessment should consider:'
          }
        },
        {
          id: 'patient-factors-list',
          type: 'list',
          content: {
            items: [
              'Visual acuity and contrast sensitivity measurements',
              'Visual field assessment',
              'Specific task requirements and goals',
              'Physical capabilities (dexterity, hand tremors)',
              'Cognitive abilities and learning capacity',
              'Motivation and psychological readiness',
              'Home and work environments',
              'Support system availability',
              'Prior experience with assistive devices',
              'Budget constraints and insurance coverage'
            ],
            ordered: false
          }
        },
        {
          id: 'goal-setting-heading',
          type: 'heading',
          content: {
            text: 'Goal Setting',
            level: 3
          }
        },
        {
          id: 'goal-setting-paragraph',
          type: 'paragraph',
          content: {
            text: 'Identifying specific goals helps determine appropriate device recommendations:'
          }
        },
        {
          id: 'goals-list',
          type: 'list',
          content: {
            items: [
              'Reading (books, mail, medication labels)',
              'Writing (checks, forms, correspondence)',
              'Distance viewing (television, street signs, faces)',
              'Mobility and navigation',
              'Specific hobbies or interests',
              'Workplace accommodations',
              'Educational needs'
            ],
            ordered: false
          }
        },
        {
          id: 'device-selection-heading',
          type: 'heading',
          content: {
            text: 'Device Selection Principles',
            level: 3
          }
        },
        {
          id: 'device-selection',
          type: 'paragraph',
          content: {
            text: 'When selecting appropriate devices, consider:'
          }
        },
        {
          id: 'device-selection-list',
          type: 'list',
          content: {
            items: [
              'Start with the simplest device that meets the need',
              'Consider multiple devices for different tasks rather than a single solution',
              'Select devices appropriate for the user\'s vision level and specific impairment',
              'Factor in the user\'s physical and cognitive abilities',
              'Consider the environments where the device will be used',
              'Evaluate cost-benefit ratio',
              'Allow hands-on trials before final recommendations'
            ],
            ordered: false
          }
        },
        {
          id: 'prescription-heading',
          type: 'heading',
          content: {
            text: 'Prescribing Magnification',
            level: 3
          }
        },
        {
          id: 'prescription-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Determining Required Magnification',
            text: 'A rough estimate of required magnification can be calculated by dividing the patient\'s current acuity by the target acuity. For example, if a patient has 20/200 vision and needs to read 20/40 print, the magnification required would be approximately 5x (200 ÷ 40 = 5).'
          }
        },
        {
          id: 'training-heading',
          type: 'heading',
          content: {
            text: 'Training and Education',
            level: 3
          }
        },
        {
          id: 'training-paragraph',
          type: 'paragraph',
          content: {
            highlight: true,
            text: 'Proper training is critical for successful adoption of low vision aids. Simply providing a device without adequate instruction often leads to abandonment.'
          }
        },
        {
          id: 'training-components-list',
          type: 'list',
          content: {
            items: [
              'Demonstrate proper technique and positioning',
              'Practice with realistic materials relevant to the patient',
              'Establish appropriate expectations about capability and limitations',
              'Develop a progressive training schedule',
              'Include caregivers or family members when appropriate',
              'Provide written instructions with large print or audio alternatives',
              'Schedule follow-up sessions to reinforce learning'
            ],
            ordered: false
          }
        },
        {
          id: 'follow-up-heading',
          type: 'heading',
          content: {
            text: 'Follow-up and Support',
            level: 3
          }
        },
        {
          id: 'follow-up-paragraph',
          type: 'paragraph',
          content: {
            text: 'Follow-up care is essential for long-term success:'
          }
        },
        {
          id: 'follow-up-list',
          type: 'list',
          content: {
            items: [
              'Schedule regular check-ins to assess device use and effectiveness',
              'Address any challenges or frustrations',
              'Make adjustments to devices as needed',
              'Introduce advanced techniques as basic skills improve',
              'Evaluate the need for additional devices',
              'Connect patients with support groups and resources',
              'Consider changes in vision that might require modifications'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'multidisciplinary-approach',
      title: 'Multidisciplinary Approach to Low Vision',
      type: 'advanced',
      content: [
        {
          id: 'multidisciplinary-intro',
          type: 'paragraph',
          content: {
            text: 'Effective low vision rehabilitation typically involves multiple professionals working together to address the complex needs of individuals with visual impairments.'
          }
        },
        {
          id: 'team-members-heading',
          type: 'heading',
          content: {
            text: 'Low Vision Rehabilitation Team',
            level: 3
          }
        },
        {
          id: 'team-members-table',
          type: 'table',
          content: {
            headers: ['Professional', 'Role in Low Vision Care'],
            rows: [
              ['Ophthalmologist', 'Medical evaluation, diagnosis, treatment of eye conditions'],
              ['Optometrist', 'Vision assessment, prescription of optical devices, monitoring'],
              ['Low Vision Therapist', 'Training in device use and adaptive techniques'],
              ['Occupational Therapist', 'Home and workplace adaptations, daily living skills'],
              ['Orientation & Mobility Specialist', 'Safe navigation, white cane training, travel skills'],
              ['Social Worker', 'Connection to resources, emotional support, benefits assistance'],
              ['Rehabilitation Teacher', 'Adaptive skills for independent living'],
              ['Assistive Technology Specialist', 'Selection and training on electronic devices']
            ],
            caption: 'Members of a comprehensive low vision rehabilitation team'
          }
        },
        {
          id: 'referral-heading',
          type: 'heading',
          content: {
            text: 'When to Refer',
            level: 3
          }
        },
        {
          id: 'referral-paragraph',
          type: 'paragraph',
          content: {
            text: 'Opticians should recognize when to refer patients for specialized low vision services:'
          }
        },
        {
          id: 'referral-list',
          type: 'list',
          content: {
            items: [
              'When a patient reports difficulty performing daily tasks despite standard correction',
              'Vision that cannot be corrected better than 20/40',
              'Visual field restrictions that impair functioning',
              'Significant contrast sensitivity issues',
              'When a patient expresses concerns about losing independence due to vision',
              'After significant changes in vision status',
              'When a patient needs multiple adaptive strategies beyond basic optical aids'
            ],
            ordered: false
          }
        },
        {
          id: 'referral-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Referral Resources',
            text: 'Maintain a current list of low vision specialists and rehabilitation services in your area. Early referral leads to better outcomes, as patients can learn adaptive skills before vision deteriorates further.'
          }
        },
        {
          id: 'resources-heading',
          type: 'heading',
          content: {
            text: 'Patient Resources',
            level: 3
          }
        },
        {
          id: 'resources-paragraph',
          type: 'paragraph',
          content: {
            text: 'Be prepared to direct patients to appropriate resources:'
          }
        },
        {
          id: 'resources-list',
          type: 'list',
          content: {
            items: [
              'National organizations for specific conditions (e.g., Macular Degeneration Association)',
              'State and local vision rehabilitation services',
              'Support groups for people with vision loss',
              'Libraries for the blind and print disabled',
              'Financial assistance programs for assistive technology',
              'Transportation services for people with disabilities',
              'Guide dog organizations',
              'Adaptive sports and recreation programs'
            ],
            ordered: false
          }
        },
        {
          id: 'emotional-aspects-heading',
          type: 'heading',
          content: {
            text: 'Psychological Aspects of Vision Loss',
            level: 3
          }
        },
        {
          id: 'emotional-aspects',
          type: 'paragraph',
          content: {
            text: 'Vision loss often triggers a grief process. Patients may experience denial, anger, depression, and eventually acceptance. Recognizing these emotional responses is important when working with low vision patients.'
          }
        },
        {
          id: 'emotional-callout',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Supporting Adjustment',
            text: 'A compassionate, patient approach acknowledges the emotional impact of vision loss while maintaining a positive focus on abilities rather than limitations. Success with even simple devices can help build confidence for more complex solutions.'
          }
        },
        {
          id: 'future-trends-heading',
          type: 'heading',
          content: {
            text: 'Emerging Trends and Future Directions',
            level: 3
          }
        },
        {
          id: 'future-trends-paragraph',
          type: 'paragraph',
          content: {
            text: 'The field of low vision rehabilitation continues to evolve:'
          }
        },
        {
          id: 'future-trends-list',
          type: 'list',
          content: {
            items: [
              'Artificial intelligence for real-time visual interpretation',
              'Advanced image enhancement algorithms',
              'Implantable retinal prostheses ("bionic eyes")',
              'Gene therapy for inherited retinal disorders',
              'Virtual and augmented reality applications',
              'Integration of multiple sensors (visual, auditory, haptic)',
              'Mainstream technology with built-in accessibility features'
            ],
            ordered: false
          }
        }
      ]
    }
  ],
  summary: 'Low vision aids and assistive devices play a crucial role in helping individuals with visual impairments maintain independence and quality of life. Understanding the range of options—from simple optical magnifiers to sophisticated electronic systems and non-optical aids—is essential for providing comprehensive vision care. Each solution must be tailored to the individual\'s specific visual condition, functional goals, and personal capabilities. A successful approach involves careful assessment, appropriate device selection, thorough training, and ongoing support. By developing knowledge in this specialized area, opticians can contribute significantly to the rehabilitation process and help patients maximize their remaining vision. As technology continues to advance, the options for low vision assistance will expand, offering new possibilities for enhancing visual function and independence.',
  references: [
    'Colenbrander A. Aspects of vision loss – visual functions and functional vision. Visual Impairment Research. 2003;5(3):115-136.',
    'Scheiman M, Scheiman M, Whittaker SG. Low Vision Rehabilitation: A Practical Guide for Occupational Therapists. Slack Incorporated; 2007.',
    'Massof RW. A model of the prevalence and incidence of low vision and blindness among adults in the U.S. Optometry and Vision Science. 2002;79(1):31-38.',
    'Watson GR. Low vision in the geriatric population: rehabilitation and management. Journal of the American Geriatrics Society. 2001;49(3):317-330.',
    'Markowitz SN. Principles of modern low vision rehabilitation. Canadian Journal of Ophthalmology. 2006;41(3):289-312.',
    'Rubin GS. Vision rehabilitation for patients with age-related macular degeneration. Eye. 2001;15(3):430-435.'
  ]
}; 