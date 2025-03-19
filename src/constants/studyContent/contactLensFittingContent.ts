import { TopicStudyContent } from '../../interfaces/StudyContent';

export const contactLensFittingContent: TopicStudyContent = {
  topicId: 'cl-fitting',
  title: 'Contact Lens Fitting and Evaluation',
  introduction: 'Contact lens fitting is both a science and an art that requires understanding ocular anatomy, lens design parameters, and assessment techniques. A successful fit results in optimal vision, comfort, and eye health. This module covers the principles and techniques of fitting various types of contact lenses, as well as methods for evaluating and troubleshooting the fit.',
  objectives: [
    'Understand the principles of successful contact lens fitting',
    'Learn techniques for fitting soft contact lenses',
    'Learn techniques for fitting rigid gas permeable (RGP) lenses',
    'Identify key assessment points for evaluating lens fit',
    'Understand how to troubleshoot common fitting issues',
    'Learn documentation procedures for contact lens fittings'
  ],
  sections: [
    {
      id: 'fitting-principles',
      title: 'Principles of Contact Lens Fitting',
      type: 'introduction',
      content: [
        {
          id: 'fitting-goals',
          type: 'paragraph',
          content: {
            text: 'The goals of a successful contact lens fit are to achieve optimal vision, comfort, and ocular health. These three factors are interdependent - a lens that is uncomfortable will not be worn, a lens that compromises ocular health is unsafe, and a lens that does not provide clear vision defeats its primary purpose.'
          }
        },
        {
          id: 'fit-principles',
          type: 'list',
          content: {
            title: 'Key Principles for Successful Fitting:',
            items: [
              'Lens position and movement: The lens should center well and move adequately with blinking',
              'Lens-to-cornea relationship: The lens should align with the corneal surface appropriately',
              'Lens power: The power should provide optimal visual acuity at all required distances',
              'Comfort: The lens should be comfortable throughout the wearing period',
              'Physiological response: The eye should maintain normal physiology with minimal adverse effects',
              'Patient satisfaction: The patient should be satisfied with vision, comfort, and handling'
            ],
            ordered: false
          }
        },
        {
          id: 'prefitting-assessment',
          type: 'definition',
          content: {
            term: 'Pre-fitting Assessment',
            definition: 'A comprehensive evaluation of the patient\'s ocular health, refractive status, and visual needs conducted before lens selection and fitting. This includes examination of the anterior segment, tear film, corneal topography, and detailed case history.',
            related: ['corneal-topography', 'tear-film-analysis', 'ocular-health']
          }
        },
        {
          id: 'patient-factors',
          type: 'table',
          content: {
            headers: ['Factor', 'Considerations'],
            rows: [
              ['Refractive Error', 'Type and magnitude of error; presence of astigmatism; need for multifocal correction'],
              ['Ocular Health', 'Lid anatomy; corneal integrity; tear film quality and quantity; history of eye disease'],
              ['Patient Needs', 'Wearing schedule; occupational and recreational demands; cosmetic concerns'],
              ['Previous Experience', 'History with contact lenses; successes and failures; compliance history'],
              ['Dexterity and Motivation', 'Ability to handle lenses; motivation to overcome initial adaptation challenges']
            ],
            caption: 'Patient factors affecting contact lens selection and fitting'
          }
        }
      ]
    },
    {
      id: 'soft-lens-fitting',
      title: 'Soft Contact Lens Fitting',
      type: 'main',
      content: [
        {
          id: 'soft-lens-intro',
          type: 'paragraph',
          content: {
            text: 'Soft contact lenses drape over the cornea, conforming to its shape, and extend onto the sclera. The fitting characteristics are influenced by lens material, design, and parameters. While empirical fitting (based on refraction and keratometry) is common, diagnostic fitting with trial lenses provides the most accurate assessment.'
          }
        },
        {
          id: 'soft-lens-parameters',
          type: 'definition',
          content: {
            term: 'Critical Soft Lens Parameters',
            definition: 'The key lens specifications that must be determined during fitting, including base curve (BC), diameter, power, material, water content, and oxygen permeability (Dk/t).',
            related: ['base-curve', 'lens-diameter', 'lens-power', 'lens-material']
          }
        },
        {
          id: 'soft-lens-parameters-table',
          type: 'table',
          content: {
            headers: ['Parameter', 'Typical Range', 'Selection Considerations'],
            rows: [
              ['Base Curve (BC)', '8.0-9.2 mm', 'Based on corneal curvature; flatter K-reading + 0.5-1.0 mm is common starting point'],
              ['Diameter', '13.8-14.5 mm', 'Selected to achieve full corneal coverage with slight overlap onto sclera'],
              ['Power', 'Varies based on refraction', 'Adjusted for vertex distance if >4.00D; consider tear lens effects'],
              ['Material', 'Hydrogel or silicone hydrogel', 'Based on oxygen needs, wearing time, and patient sensitivities'],
              ['Center Thickness', '0.06-0.12 mm', 'Thinner is better for oxygen, but must maintain durability']
            ],
            caption: 'Common soft lens parameters and selection considerations'
          }
        },
        {
          id: 'soft-lens-fit-assessment',
          type: 'list',
          content: {
            title: 'Soft Lens Fit Assessment:',
            items: [
              'Centration: Lens should center well over the cornea in all directions',
              'Coverage: Lens should completely cover the cornea with 1-2 mm overlap onto sclera',
              'Movement: 0.5-1.0 mm of movement with blink and upward gaze',
              'Lag: Lens should move 1-2 mm upon upward gaze (lag behind eye movement)',
              'Push-up Test: Lens should offer mild resistance and return to center promptly',
              'Rotation: For toric lenses, assess axis alignment and stability'
            ],
            ordered: false
          }
        },
        {
          id: 'soft-lens-fit-image',
          type: 'image',
          content: {
            src: '/assets/images/study/soft-lens-fit.jpg',
            alt: 'Properly fitted soft contact lens showing good centration and coverage',
            caption: 'A well-fitted soft contact lens showing appropriate centration, coverage, and slight movement with the blink',
            width: '60%'
          }
        },
        {
          id: 'soft-fit-problems',
          type: 'table',
          content: {
            headers: ['Problem', 'Signs', 'Causes', 'Solutions'],
            rows: [
              ['Tight (Steep) Fit', 'Minimal movement (<0.2mm), difficult push-up test, poor tear exchange', 'BC too steep, diameter too large', 'Select flatter BC or smaller diameter'],
              ['Loose (Flat) Fit', 'Excessive movement (>1mm), lens decentration, edge awareness', 'BC too flat, diameter too small', 'Select steeper BC or larger diameter'],
              ['Decentered Fit', 'Lens positioning away from corneal center consistently', 'Corneal astigmatism, flat fit, lid influences', 'Adjust BC/diameter, consider toric design'],
              ['Bubble Formation', 'Air bubbles under lens, discomfort, vision fluctuation', 'Poor application technique, lens inversion', 'Improve application technique, check lens orientation']
            ],
            caption: 'Common fitting problems with soft contact lenses and their solutions'
          }
        }
      ]
    },
    {
      id: 'toric-soft-lens-fitting',
      title: 'Toric Soft Lens Fitting',
      type: 'main',
      content: [
        {
          id: 'toric-intro',
          type: 'paragraph',
          content: {
            text: 'Toric soft lenses correct astigmatism by incorporating different powers in different meridians. A stabilization system (such as prism ballast, peri-ballast, or thin zones) prevents lens rotation. Proper fitting requires assessment of lens rotation and stability in addition to standard fitting characteristics.'
          }
        },
        {
          id: 'toric-lens-stabilization',
          type: 'definition',
          content: {
            term: 'Toric Lens Stabilization',
            definition: 'Design features that orient and stabilize toric lenses on the eye, preventing rotation and maintaining correct alignment of the cylindrical correction.',
            related: ['prism-ballast', 'thin-zones', 'lens-marking']
          }
        },
        {
          id: 'toric-stabilization-types',
          type: 'list',
          content: {
            title: 'Common Stabilization Designs:',
            items: [
              'Prism Ballast: Incorporates base-down prism to create a thickness gradient that interacts with the lids',
              'Peri-Ballast: Similar to prism ballast but with thinner central optic zone for better oxygen transmission',
              'Double Slab-Off: Thinner zones at 3 and 9 o\'clock positions that interact with the lids during blinking',
              'Accelerated Stabilization Design (ASD): Uses pressure points that work with natural lid forces'
            ],
            ordered: false
          }
        },
        {
          id: 'toric-rotation-assessment',
          type: 'paragraph',
          content: {
            text: 'Toric lens rotation is assessed using lens markings, typically dots or lines that indicate the 6 o\'clock position. Rotation is described from the practitioner\'s perspective as LARS (Left Add, Right Subtract). If the marking is rotated to the patient\'s right, subtract that amount from the prescribed cylinder axis; if rotated to the patient\'s left, add to the prescribed axis.'
          }
        },
        {
          id: 'toric-rotation-example',
          type: 'callout',
          content: {
            type: 'example',
            title: 'LARS Calculation Example',
            text: 'If a patient\'s spectacle prescription is -3.00 -1.50 x 180, and the lens marking is rotated 10 degrees to the patient\'s right, the ordered lens axis would be 180 - 10 = 170 degrees. If the marking was rotated 10 degrees to the patient\'s left, the ordered axis would be 180 + 10 = 190 (or 10) degrees.'
          }
        },
        {
          id: 'toric-fit-assessment',
          type: 'list',
          content: {
            title: 'Toric Lens Fit Assessment:',
            items: [
              'Initial orientation: Note position of markings upon initial application',
              'Rotation with blink: Observe any rotation during natural blinking',
              'Rotation with gaze: Check stability during lateral and vertical gaze movements',
              'Rotation after settling: Reassess after 10-15 minutes of wear',
              'Vision stability: Check for fluctuations in vision during normal activities'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'rgp-lens-fitting',
      title: 'RGP Contact Lens Fitting',
      type: 'main',
      content: [
        {
          id: 'rgp-intro',
          type: 'paragraph',
          content: {
            text: 'Rigid gas permeable (RGP) lenses maintain their shape on the eye, creating a tear lens between the posterior lens surface and the cornea. This tear lens contributes to the optical correction and allows RGPs to correct irregular astigmatism. RGP fitting is more technical than soft lens fitting and relies heavily on fluorescein pattern assessment.'
          }
        },
        {
          id: 'rgp-parameters',
          type: 'definition',
          content: {
            term: 'Critical RGP Parameters',
            definition: 'The key specifications for RGP lenses including base curve radius (BCR), overall diameter (OAD), optic zone diameter (OZD), peripheral curves, power, center thickness, and material properties.',
            related: ['base-curve-radius', 'peripheral-curves', 'lens-diameter', 'optic-zone']
          }
        },
        {
          id: 'rgp-parameters-table',
          type: 'table',
          content: {
            headers: ['Parameter', 'Typical Range', 'Selection Considerations'],
            rows: [
              ['Base Curve Radius (BCR)', '7.30-8.20 mm', 'Based on K-readings; typically fitted aligned to slightly flatter'],
              ['Overall Diameter (OAD)', '9.0-10.5 mm', 'Based on corneal diameter and lid positioning'],
              ['Optic Zone Diameter (OZD)', '7.0-8.5 mm', 'Typically 1.0-1.5 mm smaller than OAD'],
              ['Peripheral Curves', 'Varies', 'Designed to optimize edge lift and tear exchange'],
              ['Power', 'Varies based on refraction', 'Adjusted for tear lens effect (typically +0.25D per 0.05mm flatter than K)']
            ],
            caption: 'Common RGP lens parameters and selection considerations'
          }
        },
        {
          id: 'fluorescein-pattern',
          type: 'definition',
          content: {
            term: 'Fluorescein Pattern',
            definition: 'The pattern of fluorescence visible when viewing an RGP lens on the eye with cobalt blue light after instilling fluorescein dye. The pattern reveals the relationship between the lens and cornea.',
            related: ['tear-film', 'alignment-fit', 'flat-fit', 'steep-fit']
          }
        },
        {
          id: 'fluorescein-patterns-image',
          type: 'image',
          content: {
            src: '/assets/images/study/fluorescein-patterns.jpg',
            alt: 'Three fluorescein patterns showing steep, aligned, and flat fits',
            caption: 'Fluorescein patterns: (A) Steep fit with central pooling, (B) Aligned fit with even fluorescence, (C) Flat fit with central touch',
            width: '80%'
          }
        },
        {
          id: 'fitting-relationships',
          type: 'table',
          content: {
            headers: ['Fitting Relationship', 'Fluorescein Pattern', 'Characteristics', 'When to Use'],
            rows: [
              ['Alignment (On K)', 'Even fluorescence across the lens', 'Good movement, stable position, even weight distribution', 'Most patients; standard starting point'],
              ['Steep (Steeper than K)', 'Central pooling (bright), peripheral touch (dark)', 'Lens may show minimal movement, potential for central bubbles', 'High myopia to reduce edge thickness; keratoconus (apical clearance)'],
              ['Flat (Flatter than K)', 'Central touch (dark), peripheral pooling (bright)', 'Excess movement, potential for 3-9 o\'clock staining', 'Low myopia; small amounts of corneal astigmatism']
            ],
            caption: 'RGP fitting relationships and their characteristics'
          }
        },
        {
          id: 'rgp-fit-assessment',
          type: 'list',
          content: {
            title: 'RGP Fit Assessment:',
            items: [
              'Centration: Lens should center well or position slightly superior',
              'Movement: 1-2 mm of movement with blink',
              'Fluorescein Pattern: Evaluate central and peripheral relationships',
              'Edge Lift: Should show appropriate fluorescein band at edge',
              'Stability: Lens should return to position quickly after displacement',
              'Comfort: After adaptation, lens should be comfortable'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'multifocal-lens-fitting',
      title: 'Multifocal Contact Lens Fitting',
      type: 'advanced',
      content: [
        {
          id: 'multifocal-intro',
          type: 'paragraph',
          content: {
            text: 'Multifocal contact lenses provide correction for both distance and near vision, addressing presbyopia. These lenses use either simultaneous vision designs (where multiple powers are presented to the pupil simultaneously) or segmented designs (similar to bifocal spectacles). Fitting multifocal lenses requires understanding unique design principles and managing patient expectations.'
          }
        },
        {
          id: 'multifocal-designs',
          type: 'definition',
          content: {
            term: 'Multifocal Lens Designs',
            definition: 'Contact lens designs that incorporate multiple focal powers to correct presbyopia, typically categorized as simultaneous vision (aspheric or concentric ring designs) or segmented/translating designs.',
            related: ['presbyopia', 'add-power', 'center-distance', 'center-near']
          }
        },
        {
          id: 'simultaneous-vision',
          type: 'list',
          content: {
            title: 'Simultaneous Vision Designs:',
            items: [
              'Center-Distance: Distance power in center with near power in periphery; works best in bright conditions',
              'Center-Near: Near power in center with distance power in periphery; works best in dim conditions',
              'Aspheric Designs: Gradual change in power from center to periphery',
              'Concentric Ring Designs: Alternating rings of distance and near power'
            ],
            ordered: false
          }
        },
        {
          id: 'multifocal-fitting-principles',
          type: 'paragraph',
          content: {
            text: 'Successful multifocal fitting relies on proper lens centration, appropriate add power selection, and managing the inherent visual compromises. Patients must understand that multifocal contacts typically provide functional vision at all distances but may not match the clarity of single-vision correction at specific distances.'
          }
        },
        {
          id: 'multifocal-fitting-tips',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Multifocal Fitting Tips',
            text: 'Start with the dominant eye for distance-biased vision. Allow adequate adaptation time (1-2 weeks) before making changes. Optimize distance vision first, then address near vision needs. Small adjustments in power can significantly impact performance.'
          }
        }
      ]
    },
    {
      id: 'specialty-lens-fitting',
      title: 'Specialty Contact Lens Fitting',
      type: 'advanced',
      content: [
        {
          id: 'specialty-lens-intro',
          type: 'paragraph',
          content: {
            text: 'Specialty contact lenses are designed for complex cases that cannot be adequately managed with conventional lenses. These include scleral lenses, hybrid lenses, orthokeratology lenses, and custom designs for conditions like keratoconus, post-surgical corneas, and severe ocular surface disease.'
          }
        },
        {
          id: 'scleral-lenses',
          type: 'definition',
          content: {
            term: 'Scleral Lenses',
            definition: 'Large-diameter RGP lenses that vault over the entire cornea and rest on the sclera, creating a fluid reservoir between the lens and cornea. Used for irregular corneas, severe dry eye, and post-surgical cases.',
            related: ['corneal-clearance', 'limbal-clearance', 'landing-zone']
          }
        },
        {
          id: 'scleral-fit-principles',
          type: 'list',
          content: {
            title: 'Scleral Lens Fitting Principles:',
            items: [
              'Central Clearance: 100-300 microns of clearance over the corneal apex',
              'Limbal Clearance: 50-100 microns to avoid stem cell compression',
              'Landing Zone Alignment: Appropriate alignment with the sclera without impingement or excessive edge lift',
              'Adequate Tear Exchange: Despite sealed system, some exchange is beneficial',
              'No Bubbles: Absence of bubbles under the lens',
              'Comfortable Landing: No blanching or impingement of conjunctival vessels'
            ],
            ordered: false
          }
        },
        {
          id: 'orthokeratology',
          type: 'definition',
          content: {
            term: 'Orthokeratology',
            definition: 'The use of specially designed RGP lenses worn overnight to temporarily reshape the cornea, providing clear vision during the day without correction. Commonly used for myopia control in children.',
            related: ['corneal-reshaping', 'myopia-control', 'reverse-geometry']
          }
        },
        {
          id: 'specialty-lens-table',
          type: 'table',
          content: {
            headers: ['Lens Type', 'Design Features', 'Primary Applications', 'Fitting Considerations'],
            rows: [
              ['Scleral', 'Large diameter (15-24mm), vaults cornea completely', 'Irregular corneas, severe dry eye, ocular surface disease', 'Sagittal depth, limbal clearance, landing zone alignment'],
              ['Hybrid', 'RGP center with soft skirt', 'RGP candidates concerned with comfort, mild-moderate irregularity', 'Vault, skirt curve, junction alignment'],
              ['Orthokeratology', 'Reverse geometry design', 'Myopia correction and control, mild astigmatism', 'Treatment zone position, bull\'s eye pattern, centration'],
              ['Mini-Scleral', 'Medium diameter (15-18mm)', 'Less severe irregularity, easier handling than full sclerals', 'Balance between corneal and mini-scleral designs']
            ],
            caption: 'Specialty contact lens types and their fitting considerations'
          }
        }
      ]
    },
    {
      id: 'documentation-follow-up',
      title: 'Documentation and Follow-up Care',
      type: 'summary',
      content: [
        {
          id: 'documentation-intro',
          type: 'paragraph',
          content: {
            text: 'Proper documentation of contact lens fittings is essential for continuity of care, troubleshooting, and legal requirements. A comprehensive record should include all lens parameters, fitting characteristics, assessment findings, and patient instructions.'
          }
        },
        {
          id: 'documentation-elements',
          type: 'list',
          content: {
            title: 'Essential Documentation Elements:',
            items: [
              'All lens parameters (material, design, BC, diameter, power, etc.)',
              'Fitting assessment (centration, movement, fluorescein pattern for RGPs)',
              'Over-refraction results and final prescription',
              'Slit lamp findings with and without lenses',
              'Visual acuity with lenses at distance and near',
              'Care system prescribed and instructions provided',
              'Wearing schedule recommendations',
              'Follow-up schedule and criteria for emergency care',
              'Patient education provided'
            ],
            ordered: false
          }
        },
        {
          id: 'follow-up-schedule',
          type: 'table',
          content: {
            headers: ['Patient Type', 'Initial Follow-up', 'Subsequent Follow-ups', 'Monitoring Points'],
            rows: [
              ['New Wearers', '1 week', '1 month, then annually', 'Adaptation, handling, compliance, corneal health'],
              ['Established Wearers', 'Annually', 'Or as needed', 'Prescription changes, lens condition, ocular health'],
              ['Specialty Lens Wearers', '24-48 hours', 'Weekly until stable, then quarterly', 'Fit changes, ocular response, vision stability'],
              ['Children/Teens', '1 month', 'Every 6 months', 'Growth-related changes, compliance, myopia progression']
            ],
            caption: 'Recommended follow-up schedules for different contact lens patient types'
          }
        },
        {
          id: 'follow-up-assessment',
          type: 'paragraph',
          content: {
            text: 'Follow-up evaluations should include assessment of vision, comfort, wearing time, lens condition, fit characteristics, over-refraction, slit lamp examination of the anterior segment, and review of compliance with care procedures. Changes to lens parameters, replacement schedule, or care systems should be made based on these findings.'
          }
        },
        {
          id: 'follow-up-warning',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Red Flags Requiring Immediate Attention',
            text: 'Educate patients to seek immediate care for: eye pain, significant redness, light sensitivity, decreased vision, or unusual discharge. These symptoms may indicate potentially serious complications requiring prompt intervention.'
          }
        }
      ]
    }
  ],
  summary: 'Contact lens fitting requires a systematic approach that considers ocular characteristics, lens parameters, and patient needs. Soft lenses are fitted based on corneal measurements and assessment of lens movement, centration, and coverage. RGP lenses require evaluation of fluorescein patterns to ensure proper alignment with the cornea. Specialty lenses address unique needs but require more advanced fitting techniques. Proper documentation and regular follow-up care are essential components of successful contact lens practice. Through understanding these principles and techniques, practitioners can provide optimal vision, comfort, and ocular health for their contact lens patients.',
  practiceQuestions: [
    {
      question: 'Which of the following best describes an aligned RGP fit when assessed with fluorescein?',
      options: [
        'Central pooling (bright) with peripheral touch (dark)',
        'Central touch (dark) with peripheral pooling (bright)',
        'Even fluorescence across the entire lens surface',
        'No fluorescence visible anywhere'
      ],
      correctAnswer: 2,
      explanation: 'An aligned RGP fit shows even fluorescence across the lens surface, indicating that the lens curvature matches the corneal curvature appropriately. This creates optimal weight distribution and typically provides good centration and movement.'
    },
    {
      question: 'How much movement is considered ideal for a properly fitted soft contact lens?',
      options: [
        '0-0.2 mm with blink',
        '0.5-1.0 mm with blink',
        '2-3 mm with blink',
        '4-5 mm with blink'
      ],
      correctAnswer: 1,
      explanation: '0.5-1.0 mm of movement with blink is considered optimal for soft contact lenses. This provides sufficient tear exchange without causing discomfort or vision fluctuations. Less movement may indicate a tight fit, while excessive movement suggests a loose fit.'
    },
    {
      question: 'When using the LARS rule for toric soft lenses, if the lens marking is rotated 15 degrees to the patient\'s right and the spectacle prescription is -2.00 -1.75 x 45, what axis should be ordered?',
      options: [
        '30 degrees',
        '45 degrees',
        '60 degrees',
        '75 degrees'
      ],
      correctAnswer: 0,
      explanation: 'Using the LARS rule (Left Add, Right Subtract), when the marking is rotated to the patient\'s right, you subtract that amount from the prescribed axis. In this case, 45 - 15 = 30 degrees.'
    },
    {
      question: 'Which of the following is a key consideration when fitting multifocal contact lenses?',
      options: [
        'Always fit the non-dominant eye for distance vision',
        'Start with the lowest possible add power',
        'Allow adequate adaptation time before making changes',
        'Prioritize near vision over distance vision'
      ],
      correctAnswer: 2,
      explanation: 'Allowing adequate adaptation time (typically 1-2 weeks) is crucial when fitting multifocal contact lenses. The visual system needs time to adjust to the simultaneous vision design, and premature changes can disrupt the adaptation process.'
    },
    {
      question: 'What is the primary benefit of scleral contact lenses for patients with irregular corneas?',
      options: [
        'Lower cost compared to other specialty lenses',
        'Easier insertion and removal',
        'Complete vaulting over the cornea, providing a smooth optical surface',
        'Longer wear time without removal'
      ],
      correctAnswer: 2,
      explanation: 'The primary benefit of scleral lenses for patients with irregular corneas is that they completely vault over the cornea, creating a fluid reservoir that fills in irregularities. This provides a smooth, regular optical surface, resulting in improved vision for conditions like keratoconus or post-surgical corneal irregularities.'
    }
  ]
}; 