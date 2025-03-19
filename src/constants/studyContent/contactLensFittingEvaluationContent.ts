import { TopicStudyContent } from '../../interfaces/StudyContent';

export const contactLensFittingEvaluationContent: TopicStudyContent = {
  topicId: 'cl-fitting-evaluation',
  title: 'Contact Lens Fitting and Evaluation',
  introduction: 'The process of fitting contact lenses requires systematic assessment, selection of appropriate lens parameters, and thorough evaluation to ensure optimal vision, comfort, and ocular health. This module covers comprehensive fitting approaches for various lens types, methods to evaluate fitting relationships, troubleshooting common issues, and follow-up assessment protocols.',
  objectives: [
    'Understand the principles of soft contact lens fitting assessment',
    'Learn systematic evaluation methods for rigid gas permeable lens fits',
    'Master specialty lens fitting techniques including scleral and hybrid lenses',
    'Develop skills to assess and optimize multifocal and toric lens performance',
    'Identify and resolve common fitting complications',
    'Establish appropriate follow-up protocols for different lens types and patient needs'
  ],
  sections: [
    {
      id: 'soft-lens-fitting',
      title: 'Soft Contact Lens Fitting',
      type: 'introduction',
      content: [
        {
          id: 'soft-fitting-intro',
          type: 'paragraph',
          content: {
            text: 'Soft contact lens fitting involves selecting appropriate lens parameters, assessing the lens-cornea relationship, and evaluating vision and comfort. While relatively straightforward compared to RGP fitting, attention to detail is essential for optimal results.'
          }
        },
        {
          id: 'initial-parameter-selection',
          type: 'paragraph',
          content: {
            text: 'Initial parameter selection is based on patient\'s refraction, corneal measurements, and ocular characteristics. For spherical soft lenses, this typically begins with choosing base curve and diameter from the manufacturer\'s available options.'
          }
        },
        {
          id: 'soft-fitting-assessment',
          type: 'table',
          content: {
            headers: ['Assessment Parameter', 'Optimal Finding', 'Significance'],
            rows: [
              ['Centration', 'Lens centered over cornea with minimal lag in all directions of gaze', 'Ensures optimal optical performance and comfort'],
              ['Movement', '0.5-1.0mm movement on blink and upward gaze', 'Facilitates tear exchange and oxygen delivery'],
              ['Coverage', 'Complete corneal coverage with 0.5-1.0mm limbal overlap', 'Prevents edge discomfort and debris entry'],
              ['Push-Up Test', 'Moderate resistance to movement with quick recentration', 'Indicates appropriate lens-cornea relationship'],
              ['Lens Surface', 'Smooth, wettable surface with minimal deposits', 'Supports comfortable wear and clear vision'],
              ['Conjunctival Impression', 'No significant compression or blanching', 'Indicates appropriate edge design and fit']
            ],
            caption: 'Soft Contact Lens Fitting Assessment Parameters'
          }
        },
        {
          id: 'base-curve-selection',
          type: 'paragraph',
          content: {
            text: 'Base curve selection is less critical for soft lenses than RGPs due to their conformability, but it remains important for optimizing movement and comfort. Most manufacturers offer limited base curve options (typically 2-3 choices per lens design).'
          }
        },
        {
          id: 'bc-fitting-guide',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Base Curve Selection Guide',
            text: 'As a general guide, for flatter corneas (K readings <42.00D), select flatter base curves; for average corneas (42.00-46.00D), select medium base curves; for steeper corneas (>46.00D), select steeper base curves. However, always refer to manufacturer fitting guides for specific recommendations.'
          }
        },
        {
          id: 'soft-toric-fitting',
          type: 'paragraph',
          content: {
            text: 'Soft toric lens fitting requires additional assessment of rotational stability and axis alignment. After lens insertion and settling (typically 5-10 minutes), evaluate the orientation marker position relative to the horizontal meridian.'
          }
        },
        {
          id: 'toric-evaluation',
          type: 'list',
          content: {
            title: 'Soft Toric Lens Evaluation Points:',
            items: [
              'Rotational stability: <5° rotation with blink and eye movement',
              'Consistent orientation marker position after multiple blinks',
              'Quick return to stable position after manual rotation',
              'Minimal rotation with different gaze positions',
              'Stable vision without fluctuations during normal blinking'
            ]
          }
        },
        {
          id: 'toric-troubleshooting',
          type: 'callout',
          content: {
            type: 'note',
            title: 'LARS Rule',
            text: 'When a toric lens rotates, use the LARS rule to compensate: Left Add, Right Subtract. If a lens rotates 20° to the left, add 20° to the ordered axis. If it rotates 20° to the right, subtract 20° from the ordered axis.'
          }
        }
      ]
    },
    {
      id: 'rgp-fitting',
      title: 'Rigid Gas Permeable Lens Fitting',
      type: 'main',
      content: [
        {
          id: 'rgp-fitting-intro',
          type: 'paragraph',
          content: {
            text: 'RGP lens fitting requires precise evaluation of the lens-cornea relationship, known as the fluorescein pattern. This pattern reveals areas of alignment, clearance, and bearing, which guide parameter selection and modifications.'
          }
        },
        {
          id: 'initial-rgp-parameters',
          type: 'paragraph',
          content: {
            text: 'Initial RGP parameters are selected based on keratometry readings, corneal topography, refraction, and horizontal visible iris diameter (HVID). The base curve is typically selected in relation to the flat K reading, depending on the fitting philosophy (alignment, apical clearance, or apical bearing).'
          }
        },
        {
          id: 'fitting-philosophies-table',
          type: 'table',
          content: {
            headers: ['Fitting Philosophy', 'Base Curve Selection', 'Typical Application'],
            rows: [
              ['Alignment Fit', 'BC = Flat K or Flat K + 0.25D', 'Standard approach for most patients'],
              ['Apical Clearance', 'BC = Flat K - 0.50 to -1.00D', 'High myopia, central corneal irregularities'],
              ['Apical Bearing', 'BC = Flat K + 0.50 to +1.00D', 'Mild to moderate keratoconus, steep corneas']
            ],
            caption: 'RGP Fitting Philosophies and Base Curve Selection'
          }
        },
        {
          id: 'fluorescein-pattern',
          type: 'definition',
          content: {
            term: 'Fluorescein Pattern',
            definition: 'The pattern observed when fluorescein is instilled while an RGP lens is on the eye. Areas of lens-cornea touch appear dark (no fluorescein), while areas of clearance appear bright green (fluorescein present). Evaluated with cobalt blue filter and yellow filter enhancement.',
            related: ['tear layer', 'alignment', 'clearance', 'bearing']
          }
        },
        {
          id: 'fluorescein-assessment',
          type: 'paragraph',
          content: {
            text: 'For optimal visualization of the fluorescein pattern, use a high molecular weight fluorescein solution, a cobalt blue filter, and a yellow Wratten filter. Examine the pattern in various illumination settings and have the patient blink normally several times before assessment.'
          }
        },
        {
          id: 'ideal-pattern',
          type: 'paragraph',
          content: {
            text: 'An ideal alignment fitting shows light touch at the center, mid-peripheral alignment, and moderate peripheral clearance (edge lift). This creates a "bull\'s-eye" pattern with slight central bearing, an aligned annular zone, and peripheral pooling.'
          }
        },
        {
          id: 'fluorescein-patterns-table',
          type: 'table',
          content: {
            headers: ['Pattern', 'Description', 'Interpretation', 'Modification Needed'],
            rows: [
              ['Steep (Apical Clearance)', 'Central pooling, minimal mid-peripheral alignment, excessive edge clearance', 'Base curve too steep for cornea', 'Flatten base curve by 0.50D increments'],
              ['Flat (Apical Bearing)', 'Central bearing/touch zone, excessive mid-peripheral clearance', 'Base curve too flat for cornea', 'Steepen base curve by 0.50D increments'],
              ['Alignment', 'Light central touch, good mid-peripheral alignment, moderate edge lift', 'Optimal fit', 'None - optimal relationship'],
              ['Lateral Decentration', 'Non-centered pattern with asymmetric peripheral clearance', 'Lens decentering, possible corneal toricity', 'Consider toric lens design or larger diameter'],
              ['Excessive Edge Lift', 'Significant peripheral pooling, good central alignment', 'Peripheral curve too flat', 'Steepen peripheral curves']
            ],
            caption: 'RGP Fluorescein Pattern Interpretation'
          }
        },
        {
          id: 'lens-position-movement',
          type: 'paragraph',
          content: {
            text: 'Beyond the fluorescein pattern, assess lens position, movement, and stability. An ideal RGP fit demonstrates slight superior positioning (0.5-1.0mm above center), 1-2mm of movement on blink, and quick recentration after each blink.'
          }
        },
        {
          id: 'interpalpebral-fit',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Interpalpebral Positioning',
            text: 'For most patients, an interpalpebral fit (lens positioned between the upper and lower lids) offers optimal comfort and adaptation. For patients with flat corneas or wide fissures, a lid-attachment fit (lens tucked under the upper lid) may provide better stability.'
          }
        }
      ]
    },
    {
      id: 'specialty-lens-fitting',
      title: 'Specialty Lens Fitting Techniques',
      type: 'main',
      content: [
        {
          id: 'specialty-lens-intro',
          type: 'paragraph',
          content: {
            text: 'Specialty lenses, including scleral, hybrid, and orthokeratology designs, require specific fitting approaches that differ from conventional soft and RGP lenses. These designs often address complex refractive or corneal conditions.'
          }
        },
        {
          id: 'scleral-lens-fitting',
          type: 'definition',
          content: {
            term: 'Scleral Lens Fitting',
            definition: 'The process of selecting and evaluating scleral lens parameters to achieve appropriate corneal vault, limbal clearance, and haptic alignment with the sclera. Typically assessed with insertion of preservative-free saline solution.',
            related: ['corneal vault', 'limbal clearance', 'haptic alignment', 'OCT assessment']
          }
        },
        {
          id: 'scleral-fitting-procedure',
          type: 'list',
          content: {
            title: 'Scleral Lens Fitting Procedure:',
            items: [
              'Fill lens bowl completely with preservative-free saline, optionally with fluorescein',
              'Insert lens with patient in horizontal position to minimize bubble formation',
              'Allow lens to settle for 20-30 minutes before detailed assessment',
              'Evaluate corneal clearance using optical section and/or OCT',
              'Assess limbal clearance to ensure no impingement',
              'Evaluate haptic alignment and edge relationship with the conjunctiva',
              'Check for air bubbles or debris under the lens'
            ]
          }
        },
        {
          id: 'scleral-evaluation',
          type: 'table',
          content: {
            headers: ['Zone', 'Optimal Finding', 'Assessment Method'],
            rows: [
              ['Central Clearance', '200-300 microns after settling', 'OCT, optical section, or sodium fluorescein'],
              ['Limbal Clearance', '50-100 microns without touch', 'Direct observation with and without fluorescein'],
              ['Haptic Alignment', 'Even landing without blanching or edge lift', 'Diffuse white light, OCT'],
              ['Edge Design', 'No impingement or conjunctival indentation', 'Diffuse white light, lifting lower lid'],
              ['Movement', 'Minimal movement (<1mm) with blink and eye movement', 'Direct observation during blinking'],
              ['Bubbles', 'No persistent bubbles under lens', 'Direct observation with and without fluorescein']
            ],
            caption: 'Scleral Lens Fitting Assessment'
          }
        },
        {
          id: 'hybrid-lens-fitting',
          type: 'paragraph',
          content: {
            text: 'Hybrid lens fitting combines elements of both RGP and soft lens assessment. The rigid center is evaluated for alignment and clearance using fluorescein, while the soft skirt is assessed for appropriate alignment with the conjunctiva.'
          }
        },
        {
          id: 'hybrid-fitting-points',
          type: 'list',
          content: {
            title: 'Hybrid Lens Fitting Considerations:',
            items: [
              'Assess central clearance of RGP portion (ideal: slight clearance without significant touch)',
              'Evaluate soft skirt alignment (avoid compression or excessive looseness)',
              'Check lens centration after blink (should remain well-centered)',
              'Assess movement (minimal movement with blink, typically <0.5mm)',
              'Examine junction zone for potential mechanical issues',
              'Ensure RGP portion fully vaults any irregular corneal features'
            ]
          }
        },
        {
          id: 'ortho-k-fitting',
          type: 'paragraph',
          content: {
            text: 'Orthokeratology lens fitting requires precise selection of parameters to achieve the desired corneal reshaping effect. Initial lens selection is based on corneal topography, refraction, and specific manufacturer fitting guides.'
          }
        },
        {
          id: 'ortho-k-assessment',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Orthokeratology Assessment',
            text: 'Orthokeratology fitting assessment includes both the initial lens fit (fluorescein pattern showing central touch zone, mid-peripheral clearance ring, and peripheral alignment) and the treatment effect (corneal topography showing central flattening and mid-peripheral steepening).'
          }
        },
        {
          id: 'advanced-imaging',
          type: 'paragraph',
          content: {
            text: 'Advanced imaging techniques enhance specialty lens fitting assessment. Anterior segment OCT provides precise measurement of lens clearance and alignment, while topography over the lens can evaluate optical quality and lens flexure.'
          }
        }
      ]
    },
    {
      id: 'multifocal-fitting',
      title: 'Multifocal and Toric Lens Evaluation',
      type: 'main',
      content: [
        {
          id: 'multifocal-intro',
          type: 'paragraph',
          content: {
            text: 'Multifocal contact lens fitting requires careful attention to lens design characteristics, pupil dynamics, and individual visual demands. The fitting process involves both physical fit assessment and visual performance evaluation.'
          }
        },
        {
          id: 'multifocal-types-recap',
          type: 'paragraph',
          content: {
            text: 'Multifocal lenses primarily use either simultaneous vision designs (center-near, center-distance, concentric, or aspheric) or translating designs (similar to bifocal spectacles). Each design requires specific evaluation protocols.'
          }
        },
        {
          id: 'simultaneous-fitting',
          type: 'list',
          content: {
            title: 'Simultaneous Vision Design Evaluation:',
            items: [
              'Assess lens centration with normal blink pattern (critical for optical performance)',
              'Evaluate stability of centration in different gaze positions',
              'Measure pupil size in various lighting conditions relative to optical zone size',
              'Assess visual acuity at distance, intermediate, and near in appropriate lighting',
              'Evaluate binocular vision and stereopsis',
              'Perform over-refraction to optimize prescription',
              'Assess functional vision with real-world tasks'
            ]
          }
        },
        {
          id: 'translating-fitting',
          type: 'list',
          content: {
            title: 'Translating Design Evaluation:',
            items: [
              'Assess lens position in primary gaze (distance optical zone should align with pupil)',
              'Evaluate lens translation on downward gaze (lens should move up 1-2mm)',
              'Check for consistent return to primary position after upward gaze',
              'Assess stability of lens position during reading tasks',
              'Evaluate visual acuity at distance and near in appropriate gaze positions',
              'Assess comfort during transition between viewing distances'
            ]
          }
        },
        {
          id: 'multifocal-troubleshooting',
          type: 'table',
          content: {
            headers: ['Problem', 'Possible Causes', 'Solutions'],
            rows: [
              ['Poor distance vision', 'Insufficient distance power, decentered optics, pupil size issues', 'Increase distance power, improve centration, consider center-distance design'],
              ['Poor near vision', 'Insufficient near power, inadequate translation, pupil size mismatch', 'Increase add power, adjust fit for better translation, consider center-near design'],
              ['Fluctuating vision', 'Lens movement, unstable tear film, design limitations', 'Improve lens stability, address dry eye, consider alternative design'],
              ['Poor intermediate vision', 'Design limitations, insufficient power gradient', 'Consider aspheric design, modified monovision, or trifocal options'],
              ['Reduced contrast sensitivity', 'Optical compromises of multifocal design', 'Optimize lens fit and power, consider different design or modified monovision'],
              ['Halos/glare', 'Abrupt power transitions, pupil size issues', 'Try aspheric design, adjust optical zone sizes, address pupil size mismatch']
            ],
            caption: 'Multifocal Contact Lens Troubleshooting'
          }
        },
        {
          id: 'toric-lens-evaluation',
          type: 'paragraph',
          content: {
            text: 'Toric lens evaluation focuses on rotational stability and consistent orientation. After lens insertion and settling, assess the orientation marker position relative to the horizontal meridian in primary gaze and with various head positions.'
          }
        },
        {
          id: 'toric-rotation-assessment',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Assessing Toric Lens Rotation',
            text: 'When assessing toric lens rotation, use a slit lamp with rotatable beam or reticle. Document degrees of rotation from the horizontal position. For consistent documentation, always note the direction of rotation from the practitioner\'s perspective (e.g., "10° rotation to the right" rather than "clockwise/counterclockwise").'
          }
        },
        {
          id: 'toric-multifocal',
          type: 'paragraph',
          content: {
            text: 'Toric multifocal lenses combine the fitting challenges of both designs. Prioritize stable orientation and rotation before addressing multifocal performance issues. A well-aligned toric component provides the foundation for effective multifocal function.'
          }
        }
      ]
    },
    {
      id: 'follow-up-evaluation',
      title: 'Follow-up Evaluation and Troubleshooting',
      type: 'clinical',
      content: [
        {
          id: 'follow-up-intro',
          type: 'paragraph',
          content: {
            text: 'Follow-up evaluation is essential for assessing long-term lens performance, ocular health, and patient adaptation. The timing and components of follow-up evaluations vary based on lens type, patient characteristics, and initial fitting results.'
          }
        },
        {
          id: 'follow-up-schedule',
          type: 'table',
          content: {
            headers: ['Lens Type', 'Initial Follow-up', 'Subsequent Follow-ups', 'Long-term Schedule'],
            rows: [
              ['Soft Spherical', '1-2 weeks', 'As needed for complications', 'Annual'],
              ['Soft Toric/Multifocal', '1-2 weeks', '1 month if adjustments made', 'Every 6-12 months'],
              ['RGP', '1 week', '1 month, then 3 months', 'Every 6 months'],
              ['Specialty (Scleral, Hybrid)', '1 day and 1 week', '1 month, then quarterly', 'Every 3-6 months'],
              ['Orthokeratology', '1 day', '1 week, 1 month, 3 months', 'Every 3-6 months'],
              ['Extended Wear', '1 week', 'Monthly for first 3 months', 'Every 3-6 months']
            ],
            caption: 'Recommended Follow-up Schedules by Lens Type'
          }
        },
        {
          id: 'follow-up-components',
          type: 'list',
          content: {
            title: 'Follow-up Evaluation Components:',
            items: [
              'Case history (wearing time, comfort, vision, handling issues)',
              'Visual acuity assessment (with lenses, with over-refraction)',
              'Lens fit evaluation (position, movement, surface condition)',
              'Biomicroscopy (corneal and conjunctival health, complications)',
              'Tear film assessment (quality, stability, interaction with lens)',
              'Lens surface examination (deposits, wettability, damage)',
              'Compliance review (cleaning, replacement schedule, solution use)'
            ]
          }
        },
        {
          id: 'complication-assessment',
          type: 'paragraph',
          content: {
            text: 'Follow-up visits should include detailed assessment for contact lens-related complications. Use white light, cobalt blue, and other specialized illumination techniques to evaluate the cornea, conjunctiva, and adnexa for signs of adverse responses.'
          }
        },
        {
          id: 'grading-systems',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Standardized Grading',
            text: 'Use standardized grading scales (e.g., Efron, CCLRU) to document ocular findings. Consistent grading allows for objective monitoring of changes over time and facilitates communication between practitioners.'
          }
        },
        {
          id: 'complications-table',
          type: 'table',
          content: {
            headers: ['Complication', 'Signs', 'Fitting-Related Causes', 'Management'],
            rows: [
              ['Corneal Hypoxia', 'Limbal hyperemia, microcysts, neovascularization', 'Low Dk/t, tight fit, excessive wear time', 'Higher Dk material, looser fit, reduced wear time'],
              ['SEAL (Superior Epithelial Arcuate Lesion)', 'Arc-shaped staining in superior cornea', 'Steep or excessive edge lift RGP', 'Flatten base curve, modify edge design'],
              ['3 & 9 O\'clock Staining', 'Peripheral corneal staining at 3 & 9 positions', 'Flat RGP fit, inadequate edge lift', 'Steepen base curve, increase diameter'],
              ['Giant Papillary Conjunctivitis', 'Upper tarsal papillae, mucous discharge', 'Protein deposits, mechanical irritation', 'More frequent replacement, different material'],
              ['Corneal Abrasion', 'Epithelial defect with pain and tearing', 'Foreign body, poor handling, lens damage', 'Discontinue lens wear, antibiotic prophylaxis'],
              ['Solution Sensitivity', 'Diffuse punctate keratitis, hyperemia', 'Preservative toxicity, chemical irritation', 'Change solution system, preservative-free options']
            ],
            caption: 'Common Contact Lens Complications and Fitting-Related Management'
          }
        },
        {
          id: 'troubleshooting-approach',
          type: 'paragraph',
          content: {
            text: 'A systematic approach to troubleshooting helps identify the root cause of problems. Begin with thorough case history, followed by examination of the lens on the eye, and finally assessment of ocular health and visual function.'
          }
        },
        {
          id: 'compliance-assessment',
          type: 'paragraph',
          content: {
            text: 'Patient compliance significantly impacts lens performance and ocular health. During follow-up, assess compliance with wearing schedule, replacement frequency, cleaning procedures, and solution use. Provide reinforcement education as needed.'
          }
        }
      ]
    },
    {
      id: 'documentation',
      title: 'Documentation and Record Keeping',
      type: 'summary',
      content: [
        {
          id: 'documentation-intro',
          type: 'paragraph',
          content: {
            text: 'Thorough documentation of contact lens fitting and follow-up assessments is essential for continuity of care, legal requirements, and quality assurance. Standardized recording systems facilitate effective monitoring of lens performance and ocular health.'
          }
        },
        {
          id: 'fitting-documentation',
          type: 'list',
          content: {
            title: 'Essential Documentation for Contact Lens Fitting:',
            items: [
              'Pre-fitting examination findings (keratometry, topography, tear assessment)',
              'Lens specifications (manufacturer, design, material, parameters)',
              'Fitting assessment (centration, movement, coverage, fluorescein pattern)',
              'Visual acuity with lenses (unaided and with over-refraction)',
              'Patient education provided and materials dispensed',
              'Follow-up schedule and recommendations',
              'Troubleshooting performed and outcomes',
              'Any adverse events or complications'
            ]
          }
        },
        {
          id: 'standardized-notation',
          type: 'paragraph',
          content: {
            text: 'Use standardized notation systems for lens parameters and fitting characteristics. Include diagram drawings or digital imaging when available to document lens position, fluorescein patterns, or complications.'
          }
        },
        {
          id: 'consent-documentation',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Informed Consent',
            text: 'Document informed consent discussions, particularly for specialty lenses or off-label uses. Include risks, benefits, alternatives discussed, and patient acknowledgment of potential complications.'
          }
        }
      ]
    }
  ],
  summary: 'This module provided comprehensive coverage of contact lens fitting and evaluation techniques for various lens designs. We explored systematic approaches to soft lens, rigid gas permeable, and specialty lens fitting, along with detailed assessment methods for multifocal and toric designs. The module also covered follow-up evaluation protocols, troubleshooting common complications, and documentation requirements. Mastery of these fitting and evaluation techniques is essential for successful contact lens practice and optimal patient outcomes.',
  references: [
    'Efron N. Contact Lens Practice. 3rd ed. Elsevier; 2018.',
    'Bennett ES, Henry VA. Clinical Manual of Contact Lenses. 4th ed. Lippincott Williams & Wilkins; 2014.',
    'Van der Worp E. A Guide to Scleral Lens Fitting. Scleral Lens Education Society; 2019.',
    'Caroline PJ, Andre MP. Contemporary Orthokeratology. Contact Lens Spectrum. 2019.',
    'Szczotka-Flynn LB, et al. The CLEAR Report by BCLA: Contact Lens Complications. Cont Lens Anterior Eye. 2021;44(2):330-367.'
  ]
}; 