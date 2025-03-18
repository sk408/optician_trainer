import { TopicStudyContent } from '../../interfaces/StudyContent';

export const sportsVisionContent: TopicStudyContent = {
  topicId: 'sports-vision',
  title: 'Sports Vision & Performance Eyewear',
  introduction: 'Sports vision is a specialized area of optometry focused on enhancing visual performance for athletes. Proper eyewear not only protects athletes from injury but can also improve visual skills critical for sports performance. This module explores the unique considerations for sports eyewear and how different designs address specific sporting needs.',
  objectives: [
    'Understand the visual demands of different sports',
    'Identify key features of performance sports eyewear',
    'Explain impact resistance standards and safety considerations',
    'Describe specialized lens tints and their benefits for various sports',
    'Understand how to fit and dispense sports eyewear properly'
  ],
  sections: [
    {
      id: 'sports-vision-intro',
      title: 'Introduction to Sports Vision',
      type: 'introduction',
      content: [
        {
          id: 'sports-vision-def',
          type: 'definition',
          content: {
            term: 'Sports Vision',
            definition: 'A specialized field that focuses on evaluating and enhancing the visual skills necessary for optimal performance in athletics.',
            related: ['Visual Performance', 'Hand-Eye Coordination']
          }
        },
        {
          id: 'sports-vision-importance',
          type: 'paragraph',
          content: {
            text: 'Vision is arguably the most important sense for most athletic activities. Athletes require not only clear vision but also excellent depth perception, peripheral awareness, hand-eye coordination, and visual reaction time. Sports vision specialists help optimize these visual skills through both corrective eyewear and training exercises.'
          }
        },
        {
          id: 'visual-demands-heading',
          type: 'heading',
          content: {
            text: 'Visual Demands in Sports',
            level: 3
          }
        },
        {
          id: 'visual-demands',
          type: 'paragraph',
          content: {
            text: 'Different sports place unique demands on the visual system. Understanding these requirements helps in recommending the most appropriate eyewear solutions.'
          }
        },
        {
          id: 'visual-demands-table',
          type: 'table',
          content: {
            headers: ['Sport', 'Key Visual Skills', 'Environmental Considerations'],
            rows: [
              ['Golf', 'Depth perception, visual acuity, alignment', 'Bright sun, changing light conditions'],
              ['Tennis', 'Dynamic visual acuity, tracking, reaction time', 'Rapid eye movement, bright conditions'],
              ['Swimming', 'Peripheral vision, contrast sensitivity', 'Water, chlorine, fog'],
              ['Cycling', 'Peripheral awareness, contrast sensitivity', 'Wind, debris, changing light'],
              ['Baseball', 'Dynamic visual acuity, depth perception', 'Glare, variable distances'],
              ['Basketball', 'Peripheral vision, depth perception', 'Indoor lighting, fast movement']
            ],
            caption: 'Visual demands vary significantly across different sports'
          }
        }
      ]
    },
    {
      id: 'sports-eyewear-features',
      title: 'Essential Features of Sports Eyewear',
      type: 'main',
      content: [
        {
          id: 'features-intro',
          type: 'paragraph',
          content: {
            text: 'Sports eyewear must balance protection, comfort, performance enhancement, and vision correction. The design should accommodate the specific activity while minimizing distractions and maximizing visual performance.'
          }
        },
        {
          id: 'features-list',
          type: 'list',
          content: {
            items: [
              'Impact resistance and protection from flying objects',
              'Secure fit during vigorous movement',
              'Lightweight materials to minimize distraction',
              'Fog resistance for temperature changes',
              'UV protection for outdoor activities',
              'Prescription compatibility',
              'Peripheral vision preservation',
              'Contrast enhancement for specific environments'
            ],
            ordered: false
          }
        },
        {
          id: 'impact-resistance-heading',
          type: 'heading',
          content: {
            text: 'Impact Resistance Standards',
            level: 3
          }
        },
        {
          id: 'impact-standards',
          type: 'paragraph',
          content: {
            text: 'Sports eyewear should meet appropriate safety standards depending on the activity level and risks involved.'
          }
        },
        {
          id: 'standards-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Key Safety Standards',
            text: 'ASTM F803 covers eye protectors for selected sports including racket sports, baseball, basketball, and hockey. ANSI Z87.1 sets requirements for industrial and educational environments. Make sure to recommend eyewear that meets the appropriate standard for the patient\'s specific activity.'
          }
        },
        {
          id: 'fit-considerations-heading',
          type: 'heading',
          content: {
            text: 'Fit Considerations',
            level: 3
          }
        },
        {
          id: 'fit-paragraph',
          type: 'paragraph',
          content: {
            text: 'Proper fit is critical for sports eyewear. Unlike regular frames, sports eyewear must stay in position during intense physical activity. Consider these elements when fitting:'
          }
        },
        {
          id: 'fit-list',
          type: 'list',
          content: {
            items: [
              'Head width and temple grip',
              'Nose bridge design and adjustability',
              'Pantoscopic tilt for optimal field of view',
              'Ventilation to prevent fogging',
              'Appropriate use of straps or retention systems',
              'Compatibility with helmets or other equipment'
            ],
            ordered: false
          }
        },
        {
          id: 'strap-systems-image',
          type: 'image',
          content: {
            src: '/assets/images/study/sports-eyewear-strap.jpg',
            alt: 'Sports eyewear strap retention system',
            caption: 'Strap systems provide additional security for high-impact or water sports',
            width: 400
          }
        }
      ]
    },
    {
      id: 'lens-technologies',
      title: 'Performance Lens Technologies',
      type: 'main',
      content: [
        {
          id: 'lens-tech-intro',
          type: 'paragraph',
          content: {
            text: 'Lens design and materials for sports eyewear are engineered to enhance visual performance in specific environments while providing necessary protection.'
          }
        },
        {
          id: 'material-heading',
          type: 'heading',
          content: {
            text: 'Lens Materials',
            level: 3
          }
        },
        {
          id: 'lens-materials-table',
          type: 'table',
          content: {
            headers: ['Material', 'Advantages', 'Best For'],
            rows: [
              ['Polycarbonate', 'Highest impact resistance, lightweight, UV protection', 'Most sports, especially high-impact'],
              ['Trivex', 'Impact resistant, lighter than polycarbonate, better optics', 'Sports requiring precise vision'],
              ['SR-91', 'Impact resistant, optically superior, chemical resistant', 'Premium sports sunglasses'],
              ['NXT Polyurethane', 'Highly impact resistant, lightweight, excellent optics', 'Premium performance eyewear']
            ],
            caption: 'Common lens materials used in sports eyewear'
          }
        },
        {
          id: 'tint-heading',
          type: 'heading',
          content: {
            text: 'Specialized Lens Tints',
            level: 3
          }
        },
        {
          id: 'tint-paragraph',
          type: 'paragraph',
          content: {
            text: 'Different tints and coatings can enhance contrast and visibility in specific sporting environments. Selecting the right tint can significantly improve performance.'
          }
        },
        {
          id: 'tints-table',
          type: 'table',
          content: {
            headers: ['Tint Color', 'Benefits', 'Ideal For'],
            rows: [
              ['Amber/Brown', 'Enhances contrast, depth perception in variable light', 'Baseball, golf, fishing'],
              ['Green', 'Reduces glare, maintains color balance', 'General outdoor, golf, tennis'],
              ['Yellow', 'Enhances contrast in low light, reduces blue light', 'Shooting, skiing (flat light), indoor sports'],
              ['Blue/Purple', 'Enhances contours, reduces glare on snow/water', 'Snow sports, water sports'],
              ['Red/Rose/Vermilion', 'Enhances detail and depth perception', 'Cycling, road running, hunting'],
              ['Gray', 'True color perception, reduces overall brightness', 'General purpose, driving, running']
            ],
            caption: 'Sport-specific lens tints and their performance benefits'
          }
        },
        {
          id: 'photochromic-paragraph',
          type: 'paragraph',
          content: {
            text: 'Photochromic lenses automatically adjust their tint based on UV exposure, making them especially useful for sports that involve changing light conditions, such as trail running, cycling, or alpine skiing.'
          }
        },
        {
          id: 'polarized-heading',
          type: 'heading',
          content: {
            text: 'Polarized Lenses',
            level: 3
          }
        },
        {
          id: 'polarized-paragraph',
          type: 'paragraph',
          content: {
            text: 'Polarized lenses eliminate glare reflected off horizontal surfaces like water, snow, or roads. They are particularly beneficial for water sports, fishing, skiing, and driving.'
          }
        },
        {
          id: 'polarized-callout',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Polarization Considerations',
            text: 'While polarized lenses excel at reducing glare, they may not be ideal for all sports. In some cases, they can make it difficult to read LED displays on equipment or see ice patterns in winter sports. They may also reduce visibility of some reflective surfaces that might be important for certain activities.'
          }
        }
      ]
    },
    {
      id: 'sport-specific-solutions',
      title: 'Sport-Specific Eyewear Solutions',
      type: 'main',
      content: [
        {
          id: 'specific-solutions-intro',
          type: 'paragraph',
          content: {
            text: 'Different sports require specialized eyewear designs to address their unique visual demands and environmental conditions.'
          }
        },
        {
          id: 'water-sports-heading',
          type: 'heading',
          content: {
            text: 'Water Sports',
            level: 3
          }
        },
        {
          id: 'water-sports-paragraph',
          type: 'paragraph',
          content: {
            text: 'Eyewear for swimming, water skiing, surfing, and other water activities needs to address water exposure, spray, and intense reflected light.'
          }
        },
        {
          id: 'water-sports-features',
          type: 'list',
          content: {
            items: [
              'Hydrophobic coatings to repel water',
              'Floating materials or attachable straps to prevent loss',
              'Polarized lenses to eliminate glare from water surfaces',
              'Secure wrapping design to prevent water entry',
              'Anti-fog treatments for temperature changes'
            ],
            ordered: false
          }
        },
        {
          id: 'ball-sports-heading',
          type: 'heading',
          content: {
            text: 'Ball and Racket Sports',
            level: 3
          }
        },
        {
          id: 'ball-sports-paragraph',
          type: 'paragraph',
          content: {
            text: 'Sports like tennis, racquetball, basketball, and baseball require protection from impact while maintaining excellent visual tracking abilities.'
          }
        },
        {
          id: 'ball-sports-features',
          type: 'list',
          content: {
            items: [
              'High impact resistance (ASTM F803 standard recommended)',
              'Full-coverage designs to protect from balls and equipment',
              'Anti-reflective coatings to enhance visual acuity',
              'Contrast-enhancing tints specific to playing conditions',
              'Minimal frame intrusion into field of view'
            ],
            ordered: false
          }
        },
        {
          id: 'cycling-heading',
          type: 'heading',
          content: {
            text: 'Cycling and Running',
            level: 3
          }
        },
        {
          id: 'cycling-paragraph',
          type: 'paragraph',
          content: {
            text: 'These activities require protection from wind, dust, bugs, and debris while maintaining comfort during prolonged wear.'
          }
        },
        {
          id: 'cycling-features',
          type: 'list',
          content: {
            items: [
              'Wraparound designs for wind and debris protection',
              'Lightweight materials for extended comfort',
              'Ventilation features to prevent fogging',
              'Interchangeable lenses for different light conditions',
              'Enhanced peripheral vision for situational awareness'
            ],
            ordered: false
          }
        },
        {
          id: 'winter-sports-heading',
          type: 'heading',
          content: {
            text: 'Winter Sports',
            level: 3
          }
        },
        {
          id: 'winter-paragraph',
          type: 'paragraph',
          content: {
            text: 'Skiing, snowboarding, and other winter activities present challenges of intense UV reflection, cold temperatures, and varying light conditions.'
          }
        },
        {
          id: 'winter-features',
          type: 'list',
          content: {
            items: [
              'Enhanced UV protection for high-altitude environments',
              'Anti-fog treatments and ventilation systems',
              'Helmet compatibility',
              'Photochromic or interchangeable lenses for changing conditions',
              'Cold-resistant materials that maintain flexibility'
            ],
            ordered: false
          }
        },
        {
          id: 'specialty-heading',
          type: 'heading',
          content: {
            text: 'Shooting Sports',
            level: 3
          }
        },
        {
          id: 'shooting-paragraph',
          type: 'paragraph',
          content: {
            text: 'Shooting sports require specific consideration for eye dominance, contrast enhancement, and protection from ejected shell casings or fragments.'
          }
        },
        {
          id: 'shooting-features',
          type: 'list',
          content: {
            items: [
              'Side shields for protection from ejected materials',
              'Yellow, orange, or vermilion tints to enhance target visibility',
              'Design considerations for cheek weld with firearms',
              'ANSI Z87.1+ high-impact rating',
              'Anti-reflection coatings to prevent distracting reflections'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'prescription-integration',
      title: 'Prescription Integration',
      type: 'main',
      content: [
        {
          id: 'rx-intro',
          type: 'paragraph',
          content: {
            text: 'Athletes with refractive errors need vision correction integrated with their performance eyewear. Several options exist, each with specific advantages and considerations.'
          }
        },
        {
          id: 'direct-glazing-heading',
          type: 'heading',
          content: {
            text: 'Direct Lens Glazing',
            level: 3
          }
        },
        {
          id: 'direct-glazing-paragraph',
          type: 'paragraph',
          content: {
            text: 'Many sports frames can be directly glazed with prescription lenses. This approach provides the best optical quality but may have limitations for higher prescriptions or complex designs.'
          }
        },
        {
          id: 'direct-callout',
          type: 'callout',
          content: {
            type: 'info',
            title: 'Prescription Limitations',
            text: 'Highly wrapped frames may induce unwanted prismatic effects with standard lens designs. Special compensated lenses designed for wrap frames are required for higher prescriptions.'
          }
        },
        {
          id: 'inserts-heading',
          type: 'heading',
          content: {
            text: 'Prescription Inserts',
            level: 3
          }
        },
        {
          id: 'inserts-paragraph',
          type: 'paragraph',
          content: {
            text: 'Prescription inserts involve a separate prescription lens carrier that attaches behind the protective outer lens. This system allows for full prescription correction while maintaining the protective and performance benefits of specialized sports lenses.'
          }
        },
        {
          id: 'inserts-advantages',
          type: 'list',
          content: {
            items: [
              'Accommodates higher or more complex prescriptions',
              'Allows for interchangeable outer lenses',
              'Prescription changes only require replacing the insert',
              'Maintains optimal wrap design and protection'
            ],
            ordered: false
          }
        },
        {
          id: 'inserts-image',
          type: 'image',
          content: {
            src: '/assets/images/study/rx-insert-eyewear.jpg',
            alt: 'Sports eyewear with prescription insert',
            caption: 'Prescription insert system showing the separate prescription carrier behind the outer protective lens',
            width: 400
          }
        },
        {
          id: 'contacts-heading',
          type: 'heading',
          content: {
            text: 'Contact Lenses with Sports Eyewear',
            level: 3
          }
        },
        {
          id: 'contacts-paragraph',
          type: 'paragraph',
          content: {
            text: 'Many athletes prefer to wear contact lenses under non-prescription sports eyewear. This combination provides natural vision without the limitations or additional weight of prescription sports lenses.'
          }
        },
        {
          id: 'contacts-advantages',
          type: 'list',
          content: {
            items: [
              'Full field of vision without frame restrictions',
              'Compatibility with any sports eyewear design',
              'No fogging between multiple lenses',
              'Often more comfortable for active sports'
            ],
            ordered: false
          }
        },
        {
          id: 'contacts-callout',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Water Sports Consideration',
            text: 'Contact lens wear is generally not recommended for water sports due to risk of lens loss and potential for eye infections.'
          }
        }
      ]
    },
    {
      id: 'clinical-applications',
      title: 'Clinical Applications',
      type: 'clinical',
      content: [
        {
          id: 'clinical-intro',
          type: 'paragraph',
          content: {
            text: 'When dispensing sports eyewear, a comprehensive approach ensures the patient receives the most appropriate solution for their specific needs.'
          }
        },
        {
          id: 'assessment-heading',
          type: 'heading',
          content: {
            text: 'Patient Assessment',
            level: 3
          }
        },
        {
          id: 'assessment-paragraph',
          type: 'paragraph',
          content: {
            text: 'A thorough assessment of the patient\'s needs should include:'
          }
        },
        {
          id: 'assessment-list',
          type: 'list',
          content: {
            items: [
              'Primary and secondary sports activities',
              'Level of participation (recreational, competitive, professional)',
              'Environmental conditions (indoor, outdoor, mixed)',
              'History of eye injuries or concerns',
              'Specific visual complaints during activities',
              'Current eyewear usage and limitations',
              'Budget considerations'
            ],
            ordered: false
          }
        },
        {
          id: 'fitting-heading',
          type: 'heading',
          content: {
            text: 'Fitting Recommendations',
            level: 3
          }
        },
        {
          id: 'fitting-paragraph',
          type: 'paragraph',
          content: {
            text: 'Proper fitting of sports eyewear differs from standard frames:'
          }
        },
        {
          id: 'fitting-list',
          type: 'list',
          content: {
            items: [
              'Select a design appropriate for the specific sport',
              'Ensure proper coverage, especially at the brow and sides',
              'Check for adequate ventilation to prevent fogging',
              'Verify secure fit with active movement tests',
              'Consider compatibility with other equipment (helmets, hats)',
              'Evaluate peripheral vision maintenance',
              'Ensure the nose bridge supports the frame without slipping'
            ],
            ordered: false
          }
        },
        {
          id: 'dispensing-heading',
          type: 'heading',
          content: {
            text: 'Dispensing Sports Eyewear',
            level: 3
          }
        },
        {
          id: 'dispensing-paragraph',
          type: 'paragraph',
          content: {
            text: 'When dispensing sports eyewear, provide the following:'
          }
        },
        {
          id: 'dispensing-list',
          type: 'list',
          content: {
            items: [
              'Instructions on proper use and care of specialized features',
              'Education about the protective limitations of the eyewear',
              'Explanation of how specific lens technologies benefit their activity',
              'Demonstration of correct fit adjustment if applicable',
              'Details on warranty and replacement options',
              'Recommendations for backup eyewear'
            ],
            ordered: false
          }
        },
        {
          id: 'follow-up-paragraph',
          type: 'paragraph',
          content: {
            highlight: true,
            text: 'Follow up with sports eyewear patients to ensure the solution is meeting their needs. Adjustments or modifications may be necessary after the patient has used the eyewear during their activity.'
          }
        }
      ]
    }
  ],
  summary: 'Sports eyewear represents a specialized category of vision care that balances protection, visual performance, and comfort. Understanding the visual demands of different sports and the technologies available to address them is essential for proper dispensing. From material selection to lens tint, fit, and prescription integration, each aspect of sports eyewear is designed to enhance athletic performance while protecting the eyes. As an optician, your recommendations should be tailored to the patient\'s specific activities, environmental conditions, and vision needs. By considering all these factors, you can provide athletes with eyewear solutions that not only protect their eyes but may also give them a competitive edge through enhanced visual performance.',
  references: [
    'American Society for Testing and Materials (ASTM) F803 Standard Specification for Eye Protectors for Selected Sports',
    'American National Standards Institute (ANSI) Z87.1 Occupational and Educational Personal Eye and Face Protection Devices',
    'Erickson GB. Sports Vision: Vision Care for the Enhancement of Sports Performance. Butterworth-Heinemann; 2007.',
    'Reichow AW, Stoner MW, Abbondanza J. 3D visual-sensory-motor testing performance: Reference values for developing athletes. Optometry. 2019;90(4):453-460.'
  ]
}; 