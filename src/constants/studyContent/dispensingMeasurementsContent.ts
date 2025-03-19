import { TopicStudyContent } from '../../interfaces/StudyContent';

export const dispensingMeasurementsContent: TopicStudyContent = {
  topicId: 'dispensing-measurements',
  title: 'Patient Measurements for Dispensing',
  introduction: 'Accurate patient measurements are essential for properly fitting eyewear. Precise measurements ensure optical centers align with the patient\'s visual axis, providing optimal vision, comfort, and appearance. This module covers the various measurements required for successful eyewear dispensing, techniques to obtain them, and how they influence lens and frame performance.',
  objectives: [
    'Understand the importance of accurate measurements in eyewear dispensing',
    'Learn proper techniques for taking pupillary distance (PD) measurements',
    'Master the measurement of segment height for multifocal lenses',
    'Understand how to measure vertex distance, pantoscopic tilt, and wrap angle',
    'Learn how facial features influence frame selection and fit',
    'Practice documenting measurements for manufacturing and troubleshooting'
  ],
  sections: [
    {
      id: 'measurement-fundamentals',
      title: 'Fundamentals of Dispensing Measurements',
      type: 'introduction',
      content: [
        {
          id: 'measurement-importance',
          type: 'paragraph',
          content: {
            text: 'Precise optical measurements are the foundation of successful eyewear dispensing. They ensure that lenses are properly positioned in front of the patient\'s eyes, maximizing visual performance and comfort while minimizing adaptation issues.'
          }
        },
        {
          id: 'measurement-accuracy',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Measurement Accuracy',
            text: 'A 1mm error in pupillary distance can induce approximately 1∆ (prism diopter) of unwanted prismatic effect, potentially causing eyestrain, headaches, or double vision.'
          }
        },
        {
          id: 'measurement-tools',
          type: 'paragraph',
          content: {
            text: 'Various tools are available for taking dispensing measurements, ranging from simple PD rulers to digital measuring systems. Regardless of the technology used, understanding the principles behind each measurement is essential for accuracy.'
          }
        },
        {
          id: 'tools-list',
          type: 'list',
          content: {
            title: 'Common Measuring Tools',
            items: [
              'Pupillary distance (PD) ruler or pupillometer',
              'Digital centration devices',
              'Dispensing cross',
              'Millimeter ruler',
              'Frame adjustment tools',
              'Height measuring devices for progressive/bifocal lenses',
              'Lens clock for base curve measurement',
              'Distometer for vertex distance'
            ]
          }
        }
      ]
    },
    {
      id: 'pupillary-distance',
      title: 'Pupillary Distance Measurement',
      type: 'main',
      content: [
        {
          id: 'pd-definition',
          type: 'definition',
          content: {
            term: 'Pupillary Distance (PD)',
            definition: 'The measurement in millimeters of the distance between the centers of the pupils. This measurement ensures that the optical centers of the lenses align with the visual axis of each eye.',
            related: ['monocular PD', 'binocular PD', 'distance PD', 'near PD']
          }
        },
        {
          id: 'pd-types',
          type: 'paragraph',
          content: {
            text: 'PD measurements come in several varieties, each serving specific purposes in eyewear dispensing:'
          }
        },
        {
          id: 'pd-types-table',
          type: 'table',
          content: {
            headers: ['PD Type', 'Description', 'Application'],
            rows: [
              ['Binocular PD', 'Total distance between pupils', 'Standard single vision distance glasses'],
              ['Monocular PD', 'Distance from bridge of nose to each pupil center', 'Asymmetrical faces, high prescriptions'],
              ['Distance PD', 'PD measured for far vision', 'Distance glasses, progressive top portion'],
              ['Near PD', 'PD measured for near vision (typically 3-5mm less than distance PD)', 'Reading glasses, bifocal or progressive near portion']
            ],
            caption: 'Types of Pupillary Distance Measurements'
          }
        },
        {
          id: 'measuring-pd',
          type: 'heading',
          content: {
            text: 'Measuring PD Using a Ruler',
            level: 3
          }
        },
        {
          id: 'pd-ruler-technique',
          type: 'list',
          content: {
            items: [
              'Position yourself directly in front of the patient at eye level',
              'Ask the patient to look at your right eye (or a distant target)',
              'Place the PD ruler on the bridge of the patient\'s nose',
              'Align the zero mark with the center of the patient\'s right pupil',
              'Read the measurement at the center of the left pupil',
              'Repeat measurement 2-3 times for accuracy',
              'For monocular PD, measure from the center of the bridge to each pupil separately'
            ]
          }
        },
        {
          id: 'pd-pupillometer',
          type: 'paragraph',
          content: {
            text: 'For greater accuracy, a pupillometer can be used. This instrument measures both monocular and binocular PDs and can measure both distance and near PDs.'
          }
        },
        {
          id: 'pd-digital',
          type: 'paragraph',
          content: {
            text: 'Digital measuring systems use photographs or video capture to measure PD, along with other facial measurements. These systems typically require calibration with a reference object of known size and proper patient positioning.'
          }
        }
      ]
    },
    {
      id: 'multifocal-measurements',
      title: 'Multifocal Lens Measurements',
      type: 'main',
      content: [
        {
          id: 'segment-height-def',
          type: 'definition',
          content: {
            term: 'Segment Height',
            definition: 'The distance from the lowest part of the eyewire or lens to the top of the bifocal segment or the fitting cross of a progressive lens.',
            related: ['progressive lens', 'bifocal', 'fitting cross']
          }
        },
        {
          id: 'fitting-height',
          type: 'paragraph',
          content: {
            text: 'Proper fitting height is critical for multifocal lenses. For bifocals, the segment top should typically align with the lower eyelid or slightly higher. For progressive lenses, the fitting cross should align with the center of the pupil in primary gaze.'
          }
        },
        {
          id: 'measuring-seg-height',
          type: 'list',
          content: {
            title: 'Steps for Measuring Segment Height:',
            items: [
              'Position the frame properly on the patient\'s face (adjust nose pads, temples)',
              'Mark the center of the pupil on the demo lens while patient is in normal posture',
              'For bifocals: Measure from the lowest point of the lens to desired segment position',
              'For progressives: Measure from the lowest point of the lens to the pupil mark',
              'Consider the patient\'s typical activities and habits',
              'For progressive lenses, check manufacturer specifications for minimum fitting height'
            ]
          }
        },
        {
          id: 'seg-height-factors',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Factors Affecting Segment Height',
            text: 'When determining segment height, consider the patient\'s occupation, hobbies, previous adaptation, frame size, and pantoscopic tilt of the frame.'
          }
        },
        {
          id: 'decentration',
          type: 'paragraph',
          content: {
            text: 'In addition to height, horizontal positioning of the optical center (decentration) is crucial for progressive lenses. The distance between the fitting crosses should match the patient\'s near PD for optimal visual performance in the reading zone.'
          }
        }
      ]
    },
    {
      id: 'frame-position-measurements',
      title: 'Frame Position Measurements',
      type: 'main',
      content: [
        {
          id: 'position-intro',
          type: 'paragraph',
          content: {
            text: 'The position of the frame on the face affects both vision and lens performance. Three key measurements—vertex distance, pantoscopic tilt, and wrap angle—are particularly important for high-powered lenses and progressive lenses.'
          }
        },
        {
          id: 'vertex-distance',
          type: 'definition',
          content: {
            term: 'Vertex Distance',
            definition: 'The distance in millimeters from the back surface of the lens to the front surface of the cornea.',
            related: ['effective power', 'power adjustment']
          }
        },
        {
          id: 'measuring-vertex',
          type: 'paragraph',
          content: {
            text: 'Vertex distance is typically measured using a distometer or ruler. The standard vertex distance is 12-14mm, though this varies by frame style and facial features. For prescriptions stronger than ±4.00D, vertex distance must be considered when calculating effective power.'
          }
        },
        {
          id: 'vertex-calculation',
          type: 'callout',
          content: {
            type: 'formula',
            title: 'Vertex Distance Formula',
            text: 'Adjusted power = Original power / (1 - (Original power × Change in vertex distance in meters))'
          }
        },
        {
          id: 'pantoscopic-tilt',
          type: 'definition',
          content: {
            term: 'Pantoscopic Tilt',
            definition: 'The angle between the vertical plane and the frame front, with the top of the frame tilted inward toward the face. Typically ranges from 8-12 degrees.',
            related: ['retroscopic tilt', 'face form angle']
          }
        },
        {
          id: 'measuring-pantoscopic',
          type: 'paragraph',
          content: {
            text: 'Pantoscopic tilt can be measured using a protractor or specialized tools. This angle affects the vertical position of the optical center and is particularly important for progressive lenses, where improper tilt can cause distortion in the corridor.'
          }
        },
        {
          id: 'wrap-angle',
          type: 'definition',
          content: {
            term: 'Wrap Angle (Face Form)',
            definition: 'The angle formed by the curvature of the frame front as it wraps around the face. Also called face-form angle.',
            related: ['base curve', 'panoramic angle']
          }
        },
        {
          id: 'frame-position-impact',
          type: 'table',
          content: {
            headers: ['Measurement', 'Effect on Vision', 'Prescription Consideration'],
            rows: [
              ['Vertex Distance', 'Changes effective power of lens', 'Critical for ±4.00D and higher'],
              ['Pantoscopic Tilt', 'Affects vertical placement of optical center', 'Important for progressive lenses'],
              ['Wrap Angle', 'Affects horizontal placement of optical center', 'Critical for wrap frames and high prescriptions']
            ],
            caption: 'Impact of Frame Position Measurements on Vision'
          }
        }
      ]
    },
    {
      id: 'documenting-measurements',
      title: 'Recording and Documenting Measurements',
      type: 'summary',
      content: [
        {
          id: 'documentation-importance',
          type: 'paragraph',
          content: {
            text: 'Proper documentation of all measurements is essential for order processing, troubleshooting, and future reference. A comprehensive measurement form should include all relevant parameters and notes about patient preferences or concerns.'
          }
        },
        {
          id: 'measurement-form',
          type: 'list',
          content: {
            title: 'Essential Elements for Measurement Documentation:',
            items: [
              'Patient name and date',
              'PD (monocular and binocular, distance and near)',
              'Segment height or fitting height for multifocals',
              'Vertex distance (especially for high prescriptions)',
              'Pantoscopic tilt and face form angle',
              'Frame details (manufacturer, model, size, color)',
              'Special instructions for lab processing',
              'Optician\'s name or identification'
            ]
          }
        },
        {
          id: 'verification',
          type: 'paragraph',
          content: {
            text: 'Always verify measurements before submitting orders. For critical prescriptions or complex multifocals, double-checking measurements can prevent remakes and patient dissatisfaction.'
          }
        },
        {
          id: 'documentation-case',
          type: 'callout',
          content: {
            type: 'example',
            title: 'Case Study: The Importance of Documentation',
            text: 'A patient returned with adaptation issues in their progressive lenses. By consulting the documentation, the optician noticed the new frame had a different pantoscopic tilt than the previous one. Adjusting the frame to match the documented measurements resolved the issue without requiring new lenses.'
          }
        }
      ]
    }
  ],
  summary: 'Accurate patient measurements are the foundation of successful dispensing. This module covered essential techniques for measuring pupillary distance, segment height, vertex distance, pantoscopic tilt, and wrap angle. Understanding these measurements and documenting them properly ensures proper lens positioning, optimal vision, and patient comfort. Careful attention to measurement accuracy helps prevent adaptation issues and reduces remakes, ultimately leading to higher patient satisfaction.',
  references: [
    'Brooks CW, Borish IM. System for Ophthalmic Dispensing. 3rd ed. Butterworth-Heinemann; 2007.',
    'Jalie M. Ophthalmic Lenses and Dispensing. 3rd ed. Butterworth-Heinemann; 2008.',
    'American National Standards Institute. ANSI Z80.1-2015 Ophthalmics - Prescription Lenses. 2015.'
  ]
}; 