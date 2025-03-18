import { TopicStudyContent } from '../../interfaces/StudyContent';

export const occupationalLensesContent: TopicStudyContent = {
  topicId: 'occupational-lenses',
  title: 'Occupational Lenses & Safety Eyewear',
  introduction: 'Occupational lenses and safety eyewear are specialized optical products designed to meet the unique visual demands of specific workplace environments and tasks. From computer users to industrial workers, these specialized eyewear solutions enhance visual performance, comfort, and safety on the job. This module covers the various types of occupational lenses, safety standards, and considerations for recommending appropriate workplace eyewear.',
  objectives: [
    'Understand common visual demands and challenges in different occupational settings',
    'Describe the features and benefits of various occupational lens designs',
    'Explain safety eyewear standards and certification requirements',
    'Identify appropriate lens materials and treatments for different occupational hazards',
    'Apply proper fitting considerations for occupational and safety eyewear',
    'Recommend suitable eyewear solutions based on occupational visual requirements'
  ],
  sections: [
    {
      id: 'occupational-vision',
      title: 'Occupational Vision Requirements',
      type: 'introduction',
      content: [
        {
          id: 'vision-demands-def',
          type: 'definition',
          content: {
            term: 'Occupational Vision Demands',
            definition: 'The specific visual requirements needed to perform job tasks efficiently, comfortably, and safely within a particular work environment.',
            related: ['Task Analysis', 'Visual Ergonomics', 'Working Distance']
          }
        },
        {
          id: 'demand-importance',
          type: 'paragraph',
          content: {
            text: 'Different occupations place unique demands on the visual system. Understanding these demands is crucial for recommending appropriate eyewear solutions that enhance productivity, reduce visual fatigue, and protect eye health. A comprehensive occupational vision analysis considers working distances, viewing angles, lighting conditions, and potential hazards.'
          }
        },
        {
          id: 'common-demands',
          type: 'heading',
          content: {
            text: 'Common Occupational Visual Demands',
            level: 3
          }
        },
        {
          id: 'demands-table',
          type: 'table',
          content: {
            headers: ['Occupation Category', 'Primary Visual Tasks', 'Visual Challenges', 'Key Considerations'],
            rows: [
              ['Office/Computer Work', 'Screen viewing, document reading, intermediate tasks', 'Digital eye strain, multiple working distances', 'Blue light protection, intermediate/near vision enhancement'],
              ['Manufacturing/Industrial', 'Machine operation, material inspection, varied distances', 'Hazardous environments, precision tasks', 'Impact protection, optical clarity, durability'],
              ['Healthcare', 'Patient assessment, charting, detailed near work', 'Variable lighting, precision requirements', 'Magnification options, infection control compatibility'],
              ['Skilled Trades', 'Blueprint reading, tool use, material manipulation', 'Dust/debris, varying distances', 'Impact resistance, anti-fog treatments, versatile focus'],
              ['Transportation', 'Distance viewing, dashboard monitoring', 'Glare, night driving, weather conditions', 'Anti-glare, contrast enhancement, light adaptation'],
              ['Outdoor Work', 'Variable distance tasks, environmental exposure', 'UV radiation, glare, debris', 'UV protection, polarization, durability']
            ],
            caption: 'Common visual demands across different occupational categories'
          }
        },
        {
          id: 'ergonomic-factors',
          type: 'heading',
          content: {
            text: 'Ergonomic Factors and Viewing Zones',
            level: 3
          }
        },
        {
          id: 'ergonomics-paragraph',
          type: 'paragraph',
          content: {
            text: 'Visual ergonomics plays a significant role in occupational lens design and selection. Key ergonomic factors include:'
          }
        },
        {
          id: 'ergonomics-list',
          type: 'list',
          content: {
            items: [
              'Working distance: The distance between the eyes and the primary visual task',
              'Viewing angle: The angle at which visual tasks are typically viewed',
              'Head posture: Natural head position during task performance',
              'Task duration: Length of time spent on particular visual tasks',
              'Task transitions: Frequency of shifting between different viewing distances',
              'Workspace layout: Arrangement of visual targets in the work environment'
            ]
          }
        },
        {
          id: 'analysis-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Occupational Vision Analysis',
            text: 'A thorough assessment of workplace visual demands should include task observation, workstation measurements, and discussion of visual symptoms. This analysis provides the foundation for appropriate lens design selection.'
          }
        }
      ]
    },
    {
      id: 'occupational-lens-designs',
      title: 'Occupational Lens Designs',
      type: 'main',
      content: [
        {
          id: 'designs-intro',
          type: 'paragraph',
          content: {
            text: 'Occupational lens designs are specialized progressive and multifocal lenses engineered for specific working environments and visual tasks. Unlike general-purpose progressive lenses, occupational designs optimize certain viewing zones based on workplace demands.'
          }
        },
        {
          id: 'computer-lenses',
          type: 'heading',
          content: {
            text: 'Computer & Office Lenses',
            level: 3
          }
        },
        {
          id: 'computer-def',
          type: 'definition',
          content: {
            term: 'Computer/Office Lenses',
            definition: 'Progressive lens designs that prioritize intermediate and near viewing zones for desktop, monitor, and reading tasks in office environments.',
            related: ['Digital Progressive', 'Room Lenses', 'Intermediate Focus']
          }
        },
        {
          id: 'computer-paragraph',
          type: 'paragraph',
          content: {
            text: 'Computer lenses are designed with enhanced intermediate zones (typically 50-70cm) and wider reading areas than standard progressives. They often de-emphasize or eliminate distance vision to expand the more useful working zones.'
          }
        },
        {
          id: 'computer-features',
          type: 'list',
          content: {
            items: [
              'Expanded intermediate zone for monitor viewing',
              'Wide near zone for documents and reading materials',
              'Reduced peripheral distortion in working zones',
              'Limited or absent distance vision correction',
              'Often paired with blue light filtering treatments',
              'Lower fitting heights than standard progressives'
            ]
          }
        },
        {
          id: 'computer-examples',
          type: 'table',
          content: {
            headers: ['Brand', 'Design Name', 'Key Features', 'Recommended For'],
            rows: [
              ['Essilor', 'Computer™', 'Enhanced intermediate with some distance, 4m max viewing', 'Office workers needing occasional distance viewing'],
              ['Zeiss', 'Officelens Plus', 'Customized for desk depth and monitor position', 'Tailored workspace configurations'],
              ['Hoya', 'Tact', 'Wide intermediate zone, minimal peripheral blur', 'Extended computer use with document reference'],
              ['Shamir', 'WorkSpace', 'Three variants for different maximum distances (4m, 3m, 1.5m)', 'Various office layouts and needs'],
              ['Rodenstock', 'Ergo', 'Enhanced near and intermediate zones, minimal head movement', 'Intensive screen users with static posture']
            ],
            caption: 'Examples of common computer lens designs and their features'
          }
        },
        {
          id: 'enhanced-readers',
          type: 'heading',
          content: {
            text: 'Enhanced Reading & Near Task Lenses',
            level: 3
          }
        },
        {
          id: 'enhanced-paragraph',
          type: 'paragraph',
          content: {
            text: 'Enhanced reading designs prioritize near vision performance while providing some intermediate vision capability. They are ideal for occupations requiring extended periods of detailed near work with occasional intermediate reference.'
          }
        },
        {
          id: 'enhanced-examples',
          type: 'list',
          content: {
            items: [
              'Bookkeeper/Accountant lenses: Wider near zone with some intermediate capability',
              'Craftsman lenses: Enhanced near vision with wider field and depth perception',
              'Reading room designs: Extra-wide reading zones with minimal peripheral distortion',
              'Near-variable focus: Limited power progression optimized for varying near tasks'
            ]
          }
        },
        {
          id: 'room-lenses',
          type: 'heading',
          content: {
            text: 'Room & Enhanced Environment Lenses',
            level: 3
          }
        },
        {
          id: 'room-def',
          type: 'definition',
          content: {
            term: 'Room Lenses',
            definition: 'Occupational progressive designs that provide clear vision for room distances (typically up to 4-6 meters) while maintaining enhanced intermediate and near zones.',
            related: ['Indoor Progressives', 'Office Lenses', 'Mid-Distance Designs']
          }
        },
        {
          id: 'room-paragraph',
          type: 'paragraph',
          content: {
            text: 'Room lenses are ideal for professionals who work primarily indoors and need clear vision across their environment without the full distance vision of standard progressives. They often provide clearer peripheral vision and wider corridors than conventional designs.'
          }
        },
        {
          id: 'room-applications',
          type: 'list',
          content: {
            items: [
              'Retail environments: Clear vision from register to store floor',
              'Classroom teaching: Viewing students, whiteboard, and teaching materials',
              'Laboratory settings: Instrumentation, workbench, and room awareness',
              'Culinary arts: Food preparation and kitchen navigation',
              'Nursing/Healthcare: Patient care within typical room dimensions'
            ]
          }
        },
        {
          id: 'vocational-lenses',
          type: 'heading',
          content: {
            text: 'Specialized Vocational Designs',
            level: 3
          }
        },
        {
          id: 'vocational-paragraph',
          type: 'paragraph',
          content: {
            text: 'Some lens designs are highly specialized for particular occupations with unique visual demands:'
          }
        },
        {
          id: 'vocational-list',
          type: 'list',
          content: {
            items: [
              'Pilot lenses: Enhanced upper near zone for instrument panels with excellent distance vision',
              'Musician lenses: Optimized for music stand distance and conductor viewing',
              'Mechanic lenses: Wider intermediate zones with oil/grease resistant treatments',
              'Chef lenses: Heat-resistant materials with enhanced intermediate viewing',
              'Driving lenses: Enhanced distance with dashboard viewing zones'
            ]
          }
        },
        {
          id: 'design-selection',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Selecting the Right Occupational Design',
            text: 'For optimal occupational lens performance, consider: 1) Primary working distance, 2) Range of distances needed, 3) Head posture during tasks, 4) Duration of visual tasks, 5) Lighting conditions, and 6) Need for accessory treatments like AR or blue light filtering.'
          }
        }
      ]
    },
    {
      id: 'occupational-materials',
      title: 'Lens Materials and Treatments for Occupational Use',
      type: 'main',
      content: [
        {
          id: 'materials-intro',
          type: 'paragraph',
          content: {
            text: 'The selection of appropriate lens materials and treatments is crucial for occupational eyewear performance and safety. Different work environments present unique hazards and visual challenges that require specific material properties and enhancements.'
          }
        },
        {
          id: 'impact-resistance',
          type: 'heading',
          content: {
            text: 'Impact-Resistant Materials',
            level: 3
          }
        },
        {
          id: 'polycarbonate-def',
          type: 'definition',
          content: {
            term: 'Polycarbonate',
            definition: 'A thermoplastic polymer known for exceptional impact resistance, making it the primary material choice for safety eyewear in environments with mechanical hazards.',
            related: ['Impact Resistance', 'Safety Eyewear', 'Trivex']
          }
        },
        {
          id: 'impact-paragraph',
          type: 'paragraph',
          content: {
            text: 'Impact-resistant materials are essential for occupational environments with flying debris, particles, or mechanical hazards. These materials offer varying levels of protection:'
          }
        },
        {
          id: 'impact-materials-list',
          type: 'list',
          content: {
            items: [
              'Polycarbonate: Offers superior impact resistance (20-50 times more impact-resistant than regular plastic), built-in UV protection, and is relatively lightweight. Required for most high-impact safety applications.',
              'Trivex: Combines excellent impact resistance with superior optical clarity compared to polycarbonate. Appropriate for precision tasks requiring both protection and optical performance.',
              'High-index safety materials: Specialized formulations that combine impact resistance with high-index properties for stronger prescriptions while maintaining safety certification.'
            ]
          }
        },
        {
          id: 'impact-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Material Selection for Impact Protection',
            text: 'For ANSI Z87.1 high-impact (Z87+) certification, polycarbonate or Trivex is usually required. Regular plastic or glass lenses typically cannot meet high-impact testing requirements, regardless of thickness.'
          }
        },
        {
          id: 'chemical-resistant',
          type: 'heading',
          content: {
            text: 'Chemical-Resistant Materials',
            level: 3
          }
        },
        {
          id: 'chemical-paragraph',
          type: 'paragraph',
          content: {
            text: 'For environments with chemical exposure risks, lens materials must resist degradation, fogging, and surface damage from chemical contact.'
          }
        },
        {
          id: 'chemical-table',
          type: 'table',
          content: {
            headers: ['Material', 'Chemical Resistance Properties', 'Best Application'],
            rows: [
              ['CR-39 with specialized coatings', 'Good resistance to many solvents; less prone to chemical attack than polycarbonate', 'Laboratories with minimal impact hazards'],
              ['Treated polycarbonate', 'Combined impact and chemical resistance; protective coatings enhance chemical durability', 'Industrial settings with combined hazards'],
              ['Glass (specialized)', 'Excellent resistance to most chemicals and solvents; extremely scratch-resistant', 'Static positions with severe chemical exposure, minimal impact risk'],
              ['Fluoropolymer-coated lenses', 'Superior resistance to aggressive chemicals; hydrophobic properties', 'Chemical manufacturing, pharmaceutical production']
            ],
            caption: 'Chemical-resistant lens material options'
          }
        },
        {
          id: 'thermal-resistant',
          type: 'heading',
          content: {
            text: 'Heat and Thermal Stress Resistance',
            level: 3
          }
        },
        {
          id: 'thermal-paragraph',
          type: 'paragraph',
          content: {
            text: 'Occupations involving high temperatures, radiant heat, or thermal fluctuations require materials that maintain integrity and optical performance under thermal stress.'
          }
        },
        {
          id: 'thermal-list',
          type: 'list',
          content: {
            items: [
              'Heat-stabilized polycarbonate: Specially formulated to resist warping at higher temperatures',
              'Glass lenses: Superior heat resistance but limited by impact vulnerability',
              'Composite materials: Layered designs that combine heat resistance with other protective features'
            ]
          }
        },
        {
          id: 'radiation-protection',
          type: 'heading',
          content: {
            text: 'Radiation Protection Materials',
            level: 3
          }
        },
        {
          id: 'radiation-paragraph',
          type: 'paragraph',
          content: {
            text: 'Specialized lens materials and treatments protect against various forms of harmful radiation in occupational settings:'
          }
        },
        {
          id: 'radiation-table',
          type: 'table',
          content: {
            headers: ['Radiation Type', 'Protective Material/Treatment', 'Applications'],
            rows: [
              ['Ultraviolet (UV)', 'Polycarbonate, UV-absorbing additives, UV coatings', 'Outdoor work, welding, UV curing operations'],
              ['Infrared (IR)', 'Special absorptive materials, metallic filters, IR-reflective coatings', 'Furnace work, glass blowing, foundry operations'],
              ['Visible light (High intensity)', 'Photochromic, polarized, or fixed-tint materials', 'Outdoor precision work, water/snow environments'],
              ['Laser radiation', 'Wavelength-specific absorptive materials, reflective coatings', 'Medical facilities, research labs, manufacturing with lasers'],
              ['X-ray/Gamma radiation', 'Lead-infused materials, specially formulated high-density glass', 'Medical/dental radiography, nuclear applications'],
              ['Blue light', 'Blue-blocking materials, selective absorptive coatings', 'Extended computer use, LED/fluorescent environments']
            ],
            caption: 'Lens materials for radiation protection by type'
          }
        },
        {
          id: 'specialized-treatments',
          type: 'heading',
          content: {
            text: 'Specialized Occupational Lens Treatments',
            level: 3
          }
        },
        {
          id: 'ar-coating',
          type: 'definition',
          content: {
            term: 'Anti-Reflective (AR) Treatment',
            definition: 'A multi-layer thin film coating applied to lens surfaces to reduce reflections, increase light transmission, and improve visual clarity.',
            related: ['Light Transmission', 'Visual Clarity', 'Glare Reduction']
          }
        },
        {
          id: 'treatments-paragraph',
          type: 'paragraph',
          content: {
            text: 'Occupational lenses often require specialized treatments to enhance performance in specific workplace environments:'
          }
        },
        {
          id: 'treatments-table',
          type: 'table',
          content: {
            headers: ['Treatment', 'Properties', 'Occupational Benefits'],
            rows: [
              ['Anti-reflective (AR) coating', 'Reduces surface reflections; increases light transmission', 'Enhanced visual clarity for precision tasks; reduced eye fatigue; improved appearance for customer-facing roles'],
              ['Anti-fog treatment', 'Prevents condensation on lens surfaces', 'Essential for transitions between temperature zones; useful in humid work environments'],
              ['Scratch-resistant coating', 'Hardened surface to resist abrasion', 'Increased lens longevity in abrasive environments; maintained optical clarity'],
              ['Hydrophobic coating', 'Repels water and moisture', 'Improved visibility in wet conditions; easier cleaning of water-based contaminants'],
              ['Oleophobic coating', 'Repels oils and greases', 'Easier cleaning in food service, automotive, and manufacturing environments'],
              ['Static-resistant treatment', 'Dissipates electrical charges', 'Prevents dust attraction in clean rooms; protects sensitive electronics'],
              ['Blue light filtering', 'Selectively blocks high-energy visible light', 'Reduced digital eye strain for computer-intensive occupations']
            ],
            caption: 'Specialized lens treatments for occupational applications'
          }
        },
        {
          id: 'photochromic',
          type: 'heading',
          content: {
            text: 'Photochromic Technology for Variable Environments',
            level: 3
          }
        },
        {
          id: 'photochromic-def',
          type: 'definition',
          content: {
            term: 'Occupational Photochromics',
            definition: 'Light-sensitive lenses that automatically adjust their tint based on UV exposure, designed specifically for workplace transitions between indoor and outdoor environments.',
            related: ['Variable Tint', 'Light Adaptation', 'Indoor-Outdoor Lenses']
          }
        },
        {
          id: 'photochromic-paragraph',
          type: 'paragraph',
          content: {
            text: 'Photochromic lenses offer significant advantages for occupations requiring frequent transitions between indoor and outdoor environments:'
          }
        },
        {
          id: 'photochromic-list',
          type: 'list',
          content: {
            items: [
              'Construction supervision: Eliminates need to switch between clear and tinted eyewear',
              'Delivery services: Automatic adaptation when moving between buildings and vehicles',
              'Field service technicians: Consistent protection during variable work locations',
              'Landscaping/grounds maintenance: Appropriate tint levels throughout the workday',
              'Security personnel: Enhanced visibility in varying light conditions'
            ]
          }
        },
        {
          id: 'photochromic-considerations',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Occupational Photochromic Considerations',
            text: 'Standard photochromics may not darken in vehicles due to UV-blocking windshields. Extra-reactive formulations or polarized photochromics may be more appropriate for driving-intensive occupations.'
          }
        },
        {
          id: 'polarized',
          type: 'heading',
          content: {
            text: 'Polarized Lenses for Glare-Intensive Environments',
            level: 3
          }
        },
        {
          id: 'polarized-paragraph',
          type: 'paragraph',
          content: {
            text: 'Polarized lenses contain a special filter that blocks horizontally polarized light, effectively eliminating glare from reflective surfaces. They provide significant benefits in occupations with high-glare environments:'
          }
        },
        {
          id: 'polarized-list',
          type: 'list',
          content: {
            items: [
              'Water-based occupations: Fishing, marine operations, lifeguarding',
              'Highway maintenance and construction: Reduces glare from road surfaces',
              'Snow removal operations: Minimizes intense reflections from snow',
              'Roofing and exterior building maintenance: Reduces glare from metal surfaces',
              'Drivers and transportation workers: Enhances visibility and reduces eye fatigue'
            ]
          }
        },
        {
          id: 'polarized-limitations',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Polarized Lens Limitations',
            text: 'Polarized lenses may interfere with viewing certain digital screens (especially LCD displays) and can make it difficult to see ice patches on roads. They are not recommended for occupations requiring accurate LCD screen reading or where ice hazard detection is critical.'
          }
        },
        {
          id: 'materials-selection',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Material Selection Process',
            text: 'When selecting materials and treatments for occupational lenses, follow this process: 1) Identify primary hazards and visual demands, 2) Determine required safety certifications, 3) Consider secondary environmental factors, 4) Evaluate material options meeting these requirements, 5) Select complementary treatments to enhance performance.'
          }
        }
      ]
    },
    {
      id: 'safety-eyewear-standards',
      title: 'Safety Eyewear Standards & Regulations',
      type: 'main',
      content: [
        {
          id: 'safety-intro',
          type: 'paragraph',
          content: {
            text: 'Safety eyewear is governed by regulatory standards that establish minimum requirements for design, performance, testing, and marking of protective eyewear. Understanding these standards is essential for optical professionals who dispense occupational eyewear in hazardous environments.'
          }
        },
        {
          id: 'ansi-standard',
          type: 'heading',
          content: {
            text: 'ANSI Z87.1 Standard',
            level: 3
          }
        },
        {
          id: 'ansi-def',
          type: 'definition',
          content: {
            term: 'ANSI Z87.1',
            definition: 'American National Standards Institute standard for Occupational and Educational Personal Eye and Face Protection Devices, which specifies requirements for design, construction, testing, and use of eye protection products.',
            related: ['Safety Rating', 'Impact Resistance', 'High Velocity Impact']
          }
        },
        {
          id: 'ansi-paragraph',
          type: 'paragraph',
          content: {
            text: 'The ANSI Z87.1 standard classifies protective eyewear into two main categories: Basic Impact (Z87) and High Impact (Z87+). Markings on both frames and lenses indicate the level of protection and special features.'
          }
        },
        {
          id: 'ansi-markings',
          type: 'table',
          content: {
            headers: ['Marking', 'Location', 'Meaning'],
            rows: [
              ['Z87', 'Frame & Lens', 'Meets basic impact requirements'],
              ['Z87+', 'Frame & Lens', 'Meets high impact requirements'],
              ['D3', 'Frame', 'Provides protection against droplets and splashes'],
              ['D4', 'Frame', 'Provides protection against dust'],
              ['D5', 'Frame', 'Provides protection against fine dust'],
              ['W', 'Frame', 'Suitable for use with welding filters'],
              ['H', 'Frame', 'Designed for smaller head sizes'],
              ['V', 'Lens', 'Photochromic lens'],
              ['S', 'Lens', 'Special tint (for specific light transmittance)'],
              ['L', 'Lens', 'Visible light filter (specified by number)'],
              ['R', 'Lens', 'Infrared light filter (specified by number)'],
              ['U', 'Lens', 'UV filter (specified by number)']
            ],
            caption: 'ANSI Z87.1 Markings and Their Meanings'
          }
        },
        {
          id: 'osha-regs',
          type: 'heading',
          content: {
            text: 'OSHA Regulations',
            level: 3
          }
        },
        {
          id: 'osha-paragraph',
          type: 'paragraph',
          content: {
            text: 'The Occupational Safety and Health Administration (OSHA) mandates that employers provide appropriate eye protection when employees are exposed to eye hazards. The specific requirements are outlined in OSHA standard 29 CFR 1910.133 for general industry.'
          }
        },
        {
          id: 'osha-requirements',
          type: 'list',
          content: {
            items: [
              'Protective eyewear must comply with ANSI Z87.1 standards',
              'Employers must provide appropriate eyewear for specific workplace hazards',
              'Eyewear must be comfortable and fit properly',
              'Prescription safety eyewear must incorporate protective features into the design',
              'Side protection is required when there is a hazard from flying objects',
              'Filter lenses with appropriate shade numbers are required for protection against radiant energy'
            ]
          }
        },
        {
          id: 'international-standards',
          type: 'heading',
          content: {
            text: 'International Standards',
            level: 3
          }
        },
        {
          id: 'eu-standard',
          type: 'paragraph',
          content: {
            text: 'In the European Union and many other countries, safety eyewear must conform to EN 166 standards, which categorize protection levels and applications through a system of markings on both frames and lenses.'
          }
        },
        {
          id: 'en-markings',
          type: 'table',
          content: {
            headers: ['Marking', 'Location', 'Meaning'],
            rows: [
              ['1', 'Lens', 'Optical quality class (1 = highest)'],
              ['F', 'Frame & Lens', 'Low energy impact protection (45m/s)'],
              ['B', 'Frame & Lens', 'Medium energy impact protection (120m/s)'],
              ['A', 'Frame & Lens', 'High energy impact protection (190m/s)'],
              ['3', 'Frame', 'Protection against liquids (droplets/splashes)'],
              ['4', 'Frame', 'Protection against large dust particles'],
              ['5', 'Frame', 'Protection against gas and fine dust'],
              ['8', 'Frame', 'Protection against short circuit electric arc'],
              ['9', 'Frame & Lens', 'Protection against molten metals and hot solids'],
              ['K', 'Lens', 'Resistance to surface damage by fine particles'],
              ['N', 'Lens', 'Resistance to fogging']
            ],
            caption: 'EN 166 Markings and Their Meanings'
          }
        },
        {
          id: 'csa-standards',
          type: 'paragraph',
          content: {
            text: 'In Canada, safety eyewear must meet CSA Z94.3 standards, which include classifications for eye and face protectors by hazard type and testing requirements.'
          }
        },
        {
          id: 'industry-specific',
          type: 'heading',
          content: {
            text: 'Industry-Specific Requirements',
            level: 3
          }
        },
        {
          id: 'industry-paragraph',
          type: 'paragraph',
          content: {
            text: 'Beyond general standards, certain industries have additional requirements for eye protection based on specific hazards:'
          }
        },
        {
          id: 'industry-table',
          type: 'table',
          content: {
            headers: ['Industry', 'Specific Requirements', 'Applicable Standards'],
            rows: [
              ['Welding', 'Appropriate filter shade based on welding type; side protection; infrared protection', 'ANSI Z87.1; OSHA 29 CFR 1910.252'],
              ['Healthcare', 'Splash protection; blood and bodily fluid barriers; disinfection compatibility', 'OSHA Bloodborne Pathogens Standard'],
              ['Chemical Handling', 'Chemical splash protection; indirect ventilation; full-seal capability', 'ANSI Z87.1; OSHA 29 CFR 1910.120'],
              ['Construction', 'High impact resistance; dust protection; UV protection for outdoor work', 'OSHA 29 CFR 1926.102'],
              ['Electronics Manufacturing', 'ESD (electrostatic discharge) compatibility; magnification capabilities', 'ANSI/ESD S20.20'],
              ['Military/Ballistic', 'Extreme impact resistance; optical clarity under stress; MIL-PRF-31013 standards', 'MIL-PRF-31013; MCEPS']
            ],
            caption: 'Industry-Specific Eye Protection Requirements'
          }
        },
        {
          id: 'certification-process',
          type: 'heading',
          content: {
            text: 'Testing and Certification Process',
            level: 3
          }
        },
        {
          id: 'testing-paragraph',
          type: 'paragraph',
          content: {
            text: 'Safety eyewear undergoes rigorous testing to ensure compliance with applicable standards:'
          }
        },
        {
          id: 'testing-list',
          type: 'list',
          content: {
            items: [
              'Impact resistance: Testing with varying velocities of projectiles',
              'Penetration resistance: Testing with weighted penetrators',
              'Optical clarity: Measuring refractive power, astigmatism, and prism deviation',
              'Coverage area: Ensuring adequate protection of orbital region',
              'Ignition/flame resistance: Testing material response to flame exposure',
              'Chemical resistance: Testing frame and lens materials with various substances',
              'Environmental durability: Testing performance after temperature cycling and UV exposure'
            ]
          }
        },
        {
          id: 'standards-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Identifying Certified Safety Eyewear',
            text: 'Always verify that safety eyewear has proper markings indicating compliance with relevant standards. Non-certified products may not provide adequate protection against workplace hazards, and their use could violate occupational safety regulations.'
          }
        }
      ]
    },
    {
      id: 'fitting-dispensing',
      title: 'Fitting and Dispensing Occupational Eyewear',
      type: 'main',
      content: [
        {
          id: 'fitting-intro',
          type: 'paragraph',
          content: {
            text: 'Proper fitting and dispensing of occupational eyewear is critical for both comfort and safety. Unlike conventional eyewear, occupational and safety frames must meet specific requirements for coverage, stability, and compatibility with other protective equipment.'
          }
        },
        {
          id: 'frame-selection',
          type: 'heading',
          content: {
            text: 'Occupational Frame Selection',
            level: 3
          }
        },
        {
          id: 'frame-selection-paragraph',
          type: 'paragraph',
          content: {
            text: 'Frame selection for occupational use requires consideration of several workplace-specific factors that may not apply to everyday eyewear:'
          }
        },
        {
          id: 'frame-considerations',
          type: 'list',
          content: {
            items: [
              'Coverage requirements: Adequate orbital protection based on hazard assessment',
              'Material compatibility: Resistance to workplace chemicals, heat, or environmental factors',
              'Weight and comfort: Balanced for extended wear throughout work shifts',
              'Stability features: Secure fit during movement, bending, or high activity',
              'Integration with PPE: Compatibility with helmets, respirators, or hearing protection',
              'Removable side shields: Required for many industrial applications',
              'Temple design: Appropriate style (straight, skull, comfort cable) for specific tasks'
            ]
          }
        },
        {
          id: 'safety-frame-types',
          type: 'heading',
          content: {
            text: 'Types of Safety Frames',
            level: 3
          }
        },
        {
          id: 'safety-frame-def',
          type: 'definition',
          content: {
            term: 'Safety Frame',
            definition: 'A frame designed to hold safety lenses securely in place during impact, with features that prevent lenses from being pushed toward the eye during frontal impact.',
            related: ['Z87.1 Standard', 'Side Shields', 'Safety Eyewear']
          }
        },
        {
          id: 'frame-types-table',
          type: 'table',
          content: {
            headers: ['Frame Type', 'Characteristics', 'Occupational Applications'],
            rows: [
              ['Full-frame safety spectacles', 'Traditional appearance with reinforced frame front; permanent or detachable side shields', 'General industrial use; environments with moderate hazards'],
              ['Sport-inspired safety frames', 'Wraparound design with integrated side protection; often more aesthetically appealing', 'Mixed environments requiring style and protection; increased compliance'],
              ['Overspecs/Cover glasses', 'Designed to fit over prescription eyewear; larger profile', 'Visitors; temporary workers; prescription eyewear wearers without Rx safety glasses'],
              ['Goggle-style safety eyewear', 'Full seal around orbital area; often used with indirect ventilation', 'Chemical environments; dusty settings; potential splash hazards'],
              ['Sealed eyewear systems', 'Foam or rubber gasket creates seal with face; prevents particle intrusion', 'Extreme dust; woodworking; grinding operations'],
              ['Face shield compatible frames', 'Low-profile design to work with face shields; often with special temple designs', 'Healthcare settings; situations with potential facial exposure']
            ],
            caption: 'Safety frame types and their applications'
          }
        },
        {
          id: 'fitting-principles',
          type: 'heading',
          content: {
            text: 'Special Fitting Principles',
            level: 3
          }
        },
        {
          id: 'fitting-paragraph',
          type: 'paragraph',
          content: {
            text: 'Occupational eyewear fitting follows specific protocols that prioritize safety and functionality:'
          }
        },
        {
          id: 'fitting-list',
          type: 'list',
          content: {
            items: [
              'Position: Safety frames should sit higher on the face than conventional frames to maximize protection and viewing area',
              'Pantoscopic tilt: Minimal to moderate tilt (2-5 degrees) ensures proper shield positioning',
              'Face form angle: Typically greater than dress eyewear to enhance side protection',
              'Vertex distance: Calibrated for optimum visual performance while maintaining impact resistance',
              'Bridge fit: Must support weight without slipping, even during perspiration or movement',
              'Temple tension: Firmer than conventional eyewear to prevent displacement during activity',
              'Retention systems: Head straps or cable temples may be required for specific activities'
            ]
          }
        },
        {
          id: 'specialized-fitting',
          type: 'heading',
          content: {
            text: 'Specialized Fitting Considerations',
            level: 3
          }
        },
        {
          id: 'computer-eyewear-fit',
          type: 'paragraph',
          content: {
            text: 'Computer and office occupational lenses require specific fitting considerations to maximize their specialized design features:'
          }
        },
        {
          id: 'computer-fitting-list',
          type: 'list',
          content: {
            items: [
              'Segment height: Positioned higher than traditional progressives to enlarge intermediate zone',
              'Frame depth: Sufficient to accommodate larger near/intermediate zones',
              'Pantoscopic tilt: Calibrated for natural head position at computer workstation',
              'Vertex distance: Minimized to maximize field of view in working zones',
              'Wrap angle: Moderate to maximize peripheral clarity at workstation',
              'Monitor positioning: Frame selection should account for typical monitor placement'
            ]
          }
        },
        {
          id: 'rx-safety-considerations',
          type: 'heading',
          content: {
            text: 'Prescription Safety Eyewear Considerations',
            level: 3
          }
        },
        {
          id: 'rx-safety-paragraph',
          type: 'paragraph',
          content: {
            text: 'Prescription safety eyewear presents unique challenges that must be addressed during dispensing:'
          }
        },
        {
          id: 'rx-considerations-list',
          type: 'list',
          content: {
            items: [
              'Prescription verification: Critical to meet both visual and safety requirements',
              'Lens thickness: May exceed standard eyewear due to material and safety requirements',
              'Frame channel depth: Must be sufficient to secure impact-resistant lenses',
              'Optical center placement: Precisely positioned to minimize distortion during tasks',
              'Lens size constraints: Some prescriptions may require adjustments for safety frame parameters',
              'Prism considerations: Special attention to base curve coordination with prescribed prism',
              'Impact testing: Complete eyewear assembly (not just lenses) must meet standards'
            ]
          }
        },
        {
          id: 'certification-verification',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Certification Verification',
            text: 'Before dispensing occupational safety eyewear, verify that all components (frame, lenses, side shields) carry appropriate certification markings for the intended work environment. Documentation of compliance should be provided to the patient/employer.'
          }
        },
        {
          id: 'multifocal-safety',
          type: 'heading',
          content: {
            text: 'Multifocal and Progressive Safety Eyewear',
            level: 3
          }
        },
        {
          id: 'multifocal-safety-paragraph',
          type: 'paragraph',
          content: {
            text: 'Presbyopic workers require special consideration when designing safety eyewear solutions:'
          }
        },
        {
          id: 'multifocal-options-table',
          type: 'table',
          content: {
            headers: ['Option', 'Advantages', 'Limitations', 'Best Applications'],
            rows: [
              ['Safety bifocals', 'Wide reading area; minimal adaptation; cost-effective', 'Visible line; limited intermediate vision', 'Manufacturing with specific near tasks; budget-conscious programs'],
              ['Safety trifocals', 'Defined zones for all distances; predictable performance', 'Visible lines; narrower zones than single vision', 'Complex manufacturing requiring multiple working distances'],
              ['Safety progressives', 'No visible lines; smooth transition between distances', 'Narrower corridors; peripheral blur; adaptation period', 'Varied visual tasks; professional environments; full-time wear'],
              ['Occupational safety progressives', 'Enhanced intermediate and near zones; wider corridors', 'Limited distance vision; specialized design', 'Controlled environments with limited distance viewing needs']
            ],
            caption: 'Multifocal safety eyewear options'
          }
        },
        {
          id: 'evaluation-protocols',
          type: 'heading',
          content: {
            text: 'Dispensing and Evaluation Protocols',
            level: 3
          }
        },
        {
          id: 'initial-dispensing',
          type: 'paragraph',
          content: {
            text: 'Proper dispensing of occupational eyewear includes specific steps beyond standard eyewear delivery:'
          }
        },
        {
          id: 'dispensing-list',
          type: 'list',
          content: {
            items: [
              'Verification of safety markings and certification compliance',
              'Documentation of safety features for employer records',
              'Inspection of lens material, thickness, and treatment durability',
              'Assessment of frame-to-face seal where required',
              'Confirmation of compatibility with other required PPE',
              'Demonstration of proper donning, removal, and adjustment techniques',
              'Instructions for appropriate cleaning and maintenance protocols',
              'Review of limitations (when to replace, signs of damage, etc.)',
              'Written care instructions specific to the material and treatment combination'
            ]
          }
        },
        {
          id: 'workplace-evaluation',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Workplace Evaluation',
            text: 'When possible, conduct a follow-up evaluation of occupational eyewear in the actual work environment. This allows observation of performance during real tasks and identification of any necessary adjustments based on workstation setup, lighting conditions, or integration with other equipment.'
          }
        },
        {
          id: 'employee-education',
          type: 'heading',
          content: {
            text: 'Employee and Employer Education',
            level: 3
          }
        },
        {
          id: 'education-paragraph',
          type: 'paragraph',
          content: {
            text: 'Comprehensive education is essential for successful occupational eyewear programs:'
          }
        },
        {
          id: 'education-list',
          type: 'list',
          content: {
            items: [
              'Worker training on proper use, care, and limitation of eyewear',
              'Employer education on compliance requirements and documentation',
              'Maintenance protocols specific to lens treatments and materials',
              'Recognition of damage or wear requiring replacement',
              'Understanding adaptation periods for specialized designs',
              'Appropriate cleaning procedures to preserve coatings and treatments',
              'Documentation of training for regulatory compliance',
              'Troubleshooting common issues (fogging, discomfort, optical performance)'
            ]
          }
        }
      ]
    },
    {
      id: 'specialized-applications',
      title: 'Specialized Occupational Applications',
      type: 'advanced',
      content: [
        {
          id: 'specialized-intro',
          type: 'paragraph',
          content: {
            text: 'Beyond general occupational eyewear, certain professions and environments require highly specialized solutions that address unique visual demands and protective requirements. These applications often combine multiple technologies and custom design elements to optimize both visual performance and safety.'
          }
        },
        {
          id: 'computer-vision-syndrome',
          type: 'heading',
          content: {
            text: 'Digital Workspace Solutions',
            level: 3
          }
        },
        {
          id: 'cvs-def',
          type: 'definition',
          content: {
            term: 'Computer Vision Syndrome (CVS)',
            definition: 'A collection of eye and vision problems related to prolonged computer, tablet, and smartphone use, characterized by eyestrain, headaches, blurred vision, and dry eyes.',
            related: ['Digital Eye Strain', 'Blue Light Exposure', 'Office Ergonomics']
          }
        },
        {
          id: 'digital-workspace-paragraph',
          type: 'paragraph',
          content: {
            text: 'The modern digital workspace presents unique visual challenges that require specialized eyewear solutions combining multiple technologies:'
          }
        },
        {
          id: 'digital-solutions-table',
          type: 'table',
          content: {
            headers: ['Technology', 'Function', 'Benefits'],
            rows: [
              ['Blue light filtering', 'Selectively blocks high-energy visible light from digital screens', 'Reduced digital eye strain; potential sleep cycle regulation; decreased glare'],
              ['Anti-reflective technology', 'Minimizes reflections from screens and ambient lighting', 'Enhanced visual clarity; reduced accommodative stress; improved contrast'],
              ['Optimized intermediate design', 'Progressive design with enlarged intermediate zone', 'Natural viewing positions; reduced neck strain; wider field of view'],
              ['Low add power options', 'Minimal reading power (0.50-0.75D) to relax accommodation', 'Reduced fatigue for pre-presbyopic users; minimized magnification effects'],
              ['Anti-fatigue designs', 'Slight plus power in lower portion of single vision lenses', 'Accommodative relief for prolonged near work; reduced eye strain']
            ],
            caption: 'Digital workspace eyewear technologies'
          }
        },
        {
          id: 'multi-screen-config',
          type: 'paragraph',
          content: {
            text: 'Modern offices often feature multi-screen configurations requiring specialized lens designs that accommodate wider viewing angles and multiple focal distances. These designs may feature asymmetric progressive corridors or variable inset values to optimize performance across extended visual fields.'
          }
        },
        {
          id: 'industrial-environments',
          type: 'heading',
          content: {
            text: 'Industrial and Manufacturing Environments',
            level: 3
          }
        },
        {
          id: 'industrial-paragraph',
          type: 'paragraph',
          content: {
            text: 'Industrial settings present complex visual needs combined with significant hazards, requiring integrated eyewear solutions:'
          }
        },
        {
          id: 'industrial-list',
          type: 'list',
          content: {
            items: [
              'Prescription inserts for full-face respirators: Custom lens systems that integrate with respiratory protection',
              'Magnification systems for precision manufacturing: Clip-on or integrated loupe systems that maintain safety compliance',
              'Sideshield integration with custom prescriptions: Ensuring peripheral protection without compromising optical quality',
              'Anti-static designs for electronics manufacturing: Specialized materials that dissipate static electricity while maintaining optical clarity',
              'Thermal-resistant systems: Specialized frames and lenses for high-temperature environments',
              'Task-specific filtering: Selective light transmission profiles for specific manufacturing processes'
            ]
          }
        },
        {
          id: 'welding-applications',
          type: 'paragraph',
          content: {
            text: 'Welding applications require specialized shade numbers based on the welding process and amperage. Prescription welding eyewear must incorporate appropriate filtration while maintaining optical clarity and impact protection:'
          }
        },
        {
          id: 'welding-table',
          type: 'table',
          content: {
            headers: ['Welding Process', 'Appropriate Shade Number', 'Special Considerations'],
            rows: [
              ['Gas welding (light)', '4-5', 'UV/IR protection, potential for flip-up design'],
              ['Gas welding (medium/heavy)', '6-8', 'Enhanced side protection, infrared filtration'],
              ['Arc welding (< 60A)', '7-10', 'Full coverage design, minimal light leakage'],
              ['Arc welding (60-160A)', '10-11', 'Heat-resistant materials, sealed eyecup design'],
              ['Arc welding (160-250A)', '12', 'Maximum UV/IR protection, potentially with air gap design'],
              ['Arc welding (250-550A)', '13-14', 'Full-face integration, maximum filtration with ventilation']
            ],
            caption: 'Welding shade recommendations by process'
          }
        },
        {
          id: 'healthcare-environments',
          type: 'heading',
          content: {
            text: 'Healthcare Applications',
            level: 3
          }
        },
        {
          id: 'healthcare-paragraph',
          type: 'paragraph',
          content: {
            text: 'Healthcare professionals require specialized eyewear that combines precise vision correction, infection control features, and protection from various hazards:'
          }
        },
        {
          id: 'healthcare-table',
          type: 'table',
          content: {
            headers: ['Healthcare Setting', 'Special Requirements', 'Recommended Features'],
            rows: [
              ['Surgical environments', 'Magnification, splash protection, fog resistance', 'Surgical loupes with sealed design; anti-fog treatments; disposable covers'],
              ['Dental practices', 'Precision near vision, spray/splash protection, infection control', 'Task-specific progressives; full coverage design; autoclavable frames'],
              ['Imaging departments', 'Radiation protection, contrast enhancement', 'Leaded lenses for X-ray areas; contrast-enhancing tints for viewing screens'],
              ['Laboratory settings', 'Chemical resistance, impact protection, precision optics', 'Chemical-resistant materials; splash guards; enhanced near optics'],
              ['General patient care', 'Infection control, comfort for long shifts, multi-distance viewing', 'Antimicrobial materials; lightweight design; occupational progressives'],
              ['Emergency services', 'Rapid response, blood/fluid protection, durability', 'Quick-release features; sealed design options; impact-resistant materials']
            ],
            caption: 'Healthcare eyewear applications and features'
          }
        },
        {
          id: 'laser-protection',
          type: 'definition',
          content: {
            term: 'Laser Protection Eyewear',
            definition: 'Specialized eyewear designed to filter specific wavelengths of laser radiation while maintaining adequate visible light transmission for the task. Required in medical, research, and industrial settings using laser equipment.',
            related: ['Optical Density', 'Wavelength Specificity', 'Light Transmission']
          }
        },
        {
          id: 'laser-paragraph',
          type: 'paragraph',
          content: {
            text: 'Laser protection eyewear must be precisely matched to the specific wavelength and power density of the laser being used. These highly specialized devices use absorptive or reflective technologies to block harmful laser radiation while maintaining essential visibility.'
          }
        },
        {
          id: 'transportation-applications',
          type: 'heading',
          content: {
            text: 'Transportation and Heavy Equipment',
            level: 3
          }
        },
        {
          id: 'driving-def',
          type: 'definition',
          content: {
            term: 'Driving-Optimized Lenses',
            definition: 'Specialized lens designs that enhance visual performance for professional drivers by optimizing distance vision while providing convenient access to dashboard and mirror zones.',
            related: ['Contrast Enhancement', 'Polarization', 'Selective Filtering']
          }
        },
        {
          id: 'transportation-paragraph',
          type: 'paragraph',
          content: {
            text: 'Professional drivers and heavy equipment operators face unique visual challenges requiring specialized lens solutions:'
          }
        },
        {
          id: 'transportation-list',
          type: 'list',
          content: {
            items: [
              'Enhanced peripheral awareness: Wider field of view for situational awareness',
              'Contrast enhancement: Selective filtering to improve visibility in variable conditions',
              'Anti-glare technology: Advanced polarization or selective filtering for headlight and reflection management',
              'Instrument panel optimization: Near/intermediate zones positioned for dashboard viewing without head movement',
              'Day/night adaptability: Photochromic technologies with driving-specific activation profiles',
              'Fatigue reduction: Carefully calculated power distributions to minimize visual stress during long shifts'
            ]
          }
        },
        {
          id: 'night-driving',
          type: 'paragraph',
          content: {
            text: 'Night driving presents additional challenges, particularly for aging drivers with increased glare sensitivity. Specialized coatings with selective light transmission characteristics can enhance contrast while reducing disabling glare from oncoming headlights.'
          }
        },
        {
          id: 'specialized-professions',
          type: 'heading',
          content: {
            text: 'Highly Specialized Professions',
            level: 3
          }
        },
        {
          id: 'specialized-paragraph',
          type: 'paragraph',
          content: {
            text: 'Some professions have highly specific visual requirements that demand customized eyewear solutions:'
          }
        },
        {
          id: 'specialized-table',
          type: 'table',
          content: {
            headers: ['Profession', 'Visual Requirements', 'Specialized Solution'],
            rows: [
              ['Aviation', 'Clear distance vision; instrument panel viewing; adaptation to altitude changes', 'Pilot-specific progressive designs; anti-glare treatments; pressure-equalized lenses'],
              ['Jewelers/Watchmakers', 'Extreme near magnification; sustained focus; color accuracy', 'Specialized high-add segments; integrated magnification; full-spectrum lighting compatibility'],
              ['Architects/Engineers', 'Multiple working distances; blueprint/detailed drawing viewing', 'Enhanced intermediate designs; drawing board-optimized progressives'],
              ['Musicians', 'Sheet music distance; conductor viewing; specific posture requirements', 'Music stand-optimized focal length; wide intermediate corridor; minimal peripheral distortion'],
              ['First Responders', 'Extreme condition adaptability; integration with protective equipment', 'Impact resistance; anti-fog capabilities; quick-exchange systems; night visibility enhancement'],
              ['Research Microscopy', 'Micron-level focus; extended viewing periods; integration with equipment', 'Custom working distance correction; ergonomic positioning; eye fatigue minimization']
            ],
            caption: 'Specialized professional eyewear solutions'
          }
        },
        {
          id: 'emerging-technologies',
          type: 'heading',
          content: {
            text: 'Emerging Occupational Technologies',
            level: 3
          }
        },
        {
          id: 'ar-vr-paragraph',
          type: 'paragraph',
          content: {
            text: 'As workplaces incorporate augmented reality (AR) and virtual reality (VR) technologies, new eyewear solutions are being developed to address the unique visual demands of these environments:'
          }
        },
        {
          id: 'emerging-list',
          type: 'list',
          content: {
            items: [
              'AR-compatible progressive designs: Optimized for focusing at display focal distance while maintaining real-world awareness',
              'VR prescription inserts: Custom lens systems that integrate with VR headsets',
              'Accommodative support systems: Specialized designs that reduce vergence-accommodation conflict in mixed reality environments',
              'Computer-vision optimized coatings: Enhanced contrast for artificial display viewing while reducing eye strain',
              'Smart lens technologies: Variable focus systems that adapt to digital and real-world viewing demands'
            ]
          }
        },
        {
          id: 'future-callout',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Future Directions',
            text: 'As workplace technologies evolve, occupational eyewear will increasingly incorporate smart features like selective light filtering, automatic adaptation to viewing tasks, integrated displays, and customized vision enhancement for specific work environments. These technologies will continue to blur the line between corrective eyewear and productivity/safety tools.'
          }
        },
        {
          id: 'recommending-solutions',
          type: 'heading',
          content: {
            text: 'Recommending Specialized Solutions',
            level: 3
          }
        },
        {
          id: 'recommendation-paragraph',
          type: 'paragraph',
          content: {
            text: 'When recommending specialized occupational eyewear, follow this comprehensive approach:'
          }
        },
        {
          id: 'recommendation-list',
          type: 'list',
          content: {
            items: [
              'Conduct a detailed occupational history including specific visual tasks, distances, and environments',
              'Perform task-specific measurements of working distances and angles',
              'Consider workplace hazards and required certifications',
              'Evaluate compatibility with other protective equipment',
              'Assess ergonomic factors and positioning during tasks',
              'Identify primary, secondary, and occasional visual needs',
              'Consider lighting conditions and environmental factors',
              'Evaluate duration of wear and transition between environments',
              'Balance performance requirements with comfort and adaptability',
              'Document occupational requirements for future reference and compliance'
            ]
          }
        },
        {
          id: 'specialized-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Documentation for Specialized Occupational Eyewear',
            text: 'For specialized occupational eyewear, maintain detailed records of workplace requirements, safety standards, and specific design parameters. This documentation is valuable for future replacement, workplace compliance, and potential insurance or workers\' compensation claims.'
          }
        }
      ]
    }
  ],
  summary: 'Occupational lenses and safety eyewear represent specialized categories of vision correction and protection that address the unique requirements of diverse workplace environments. By understanding occupational visual demands, appropriate lens designs, safety standards, and proper fitting techniques, opticians can provide customized solutions that enhance visual performance, comfort, and protection. The right occupational eyewear not only improves workplace productivity and reduces visual fatigue but also plays a critical role in preventing eye injuries and maintaining long-term eye health.',
  references: [
    'ANSI/ISEA Z87.1-2020: American National Standard for Occupational and Educational Personal Eye and Face Protection Devices',
    'American Optometric Association. (2020). Computer vision syndrome (digital eye strain). Retrieved from aoa.org',
    'Chou, B. R., & Krauss, J. (2016). Industrial and Occupational Lenses. In Essentials of Ophthalmic Lens Finishing (2nd ed., pp. 286-304)',
    'Occupational Safety and Health Administration. (2016). Eye and Face Protection. Standards - 29 CFR 1910.133',
    'Werner, D. L. (2018). Computer vision syndrome: A review of ocular causes and potential treatments. Ophthalmic and Physiological Optics, 38(2), 106-116',
    'International Organization for Standardization. (2019). ISO 16321-1:2019 Eye and face protection for occupational use',
    'Sheedy, J. E., & Shaw-McMinn, P. G. (2017). Diagnosing and treating computer-related vision problems. Butterworth-Heinemann',
    'Twa, M. D., & Solaka, N. (2020). Occupational eyewear: Understanding standards and applications. Contact Lens Spectrum, 35(6), 40-45',
    'Patel, I., & Havard, S. (2019). Material properties of spectacle lens materials relevant to occupational safety. Clinical and Experimental Optometry, 102(3), 278-285',
    'American Academy of Ophthalmology. (2021). Protective eyewear for young athletes. Retrieved from aao.org'
  ]
}; 