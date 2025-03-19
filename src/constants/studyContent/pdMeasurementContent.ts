import { TopicStudyContent } from '../../interfaces/StudyContent';

export const pdMeasurementContent: TopicStudyContent = {
  topicId: 'pd-measurement',
  title: 'Measuring Pupillary Distance',
  introduction: 'Pupillary distance (PD) is one of the most critical measurements in eyewear dispensing. It ensures that the optical centers of the lenses align properly with the patient\'s pupils, providing optimal vision and comfort. This module covers the fundamental techniques for accurately measuring PD for different types of eyewear, common tools used, and how to address special situations that may arise.',
  objectives: [
    'Define pupillary distance and explain its importance in eyewear dispensing',
    'Distinguish between monocular and binocular PD measurements',
    'Demonstrate proper technique for measuring PD using different methods',
    'Identify and use common PD measuring tools correctly',
    'Recognize and address special PD measurement situations',
    'Understand how to verify PD measurements for quality control'
  ],
  sections: [
    {
      id: 'pd-fundamentals',
      title: 'Understanding Pupillary Distance',
      type: 'introduction',
      content: [
        {
          id: 'pd-definition',
          type: 'definition',
          content: {
            term: 'Pupillary Distance (PD)',
            definition: 'The distance between the centers of the pupils of the eyes, typically measured in millimeters. It represents the optical centers through which a person looks when viewing straight ahead.',
            related: ['Monocular PD', 'Binocular PD', 'Near PD']
          }
        },
        {
          id: 'pd-importance',
          type: 'paragraph',
          content: {
            text: 'Pupillary distance (PD) is essential for proper eyewear fitting because it ensures that the patient is looking through the optical center of each lens. Incorrect PD can cause visual discomfort, eyestrain, headaches, and in prescriptions with stronger powers or prism, may induce unwanted prismatic effects.',
            highlight: true
          }
        },
        {
          id: 'pd-types',
          type: 'paragraph',
          content: {
            text: 'There are several types of PD measurements that are important to understand:'
          }
        },
        {
          id: 'pd-types-list',
          type: 'list',
          content: {
            items: [
              'Binocular (Total) PD: The total distance between the centers of both pupils',
              'Monocular PD: The distance from the center of each pupil to the bridge of the nose',
              'Distance PD: Measured when a patient is looking at a distant object (infinity)',
              'Near PD: Measured when a patient is looking at a near object (typically 40cm away)',
              'Vertical PD: The height difference between pupils (for asymmetrical faces)'
            ],
            ordered: false
          }
        },
        {
          id: 'pd-diagram',
          type: 'image',
          content: {
            src: '/assets/images/study/pd-diagram.svg',
            alt: 'Diagram showing binocular and monocular PD measurements',
            caption: 'Binocular PD (total distance between pupils) and monocular PD (distance from each pupil to the center of the nose).',
            width: '70%'
          }
        },
        {
          id: 'pd-ranges',
          type: 'paragraph',
          content: {
            text: 'Adult PD measurements typically range from 54mm to 74mm, with an average of about 62mm for women and 64mm for men. Children\'s PDs are smaller and increase as they grow. Most patients have slightly asymmetrical faces, resulting in right and left monocular PDs that are not exactly equal.'
          }
        },
        {
          id: 'pd-misconception',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Common Misconception',
            text: 'Many beginners assume that the PD is always symmetrical (equal distance from center to each pupil). In reality, facial asymmetry is common, and monocular PDs often differ by 1-2mm between eyes. This is why monocular measurements are preferred for higher prescriptions.'
          }
        }
      ]
    },
    {
      id: 'measuring-techniques',
      title: 'PD Measurement Techniques',
      type: 'main',
      content: [
        {
          id: 'pd-tools-intro',
          type: 'paragraph',
          content: {
            text: 'Several tools and techniques are available for measuring pupillary distance. Each has advantages and specific applications:'
          }
        },
        {
          id: 'pd-tool-pupilometer',
          type: 'heading',
          content: {
            text: 'Using a Pupilometer',
            level: 3
          }
        },
        {
          id: 'pupilometer-description',
          type: 'paragraph',
          content: {
            text: 'A pupilometer is a specialized instrument designed specifically for measuring PD. It\'s considered one of the most accurate methods when used correctly. Modern digital pupilometers can measure both distance and near PDs, as well as monocular values.'
          }
        },
        {
          id: 'pupilometer-steps',
          type: 'paragraph',
          content: {
            text: 'Basic steps for using a pupilometer:'
          }
        },
        {
          id: 'pupilometer-steps-list',
          type: 'list',
          content: {
            items: [
              'Ensure the instrument is calibrated and clean',
              'Adjust the height so the patient can comfortably rest their forehead against the forehead rest',
              'Ask the patient to look at the target light or image inside the device',
              'Align the instrument\'s markers with the patient\'s pupils',
              'Read and record both binocular and monocular measurements',
              'For near PD, change the setting to near vision and repeat the process'
            ],
            ordered: true
          }
        },
        {
          id: 'pupilometer-image',
          type: 'image',
          content: {
            src: '/assets/images/study/pupilometer.svg',
            alt: 'Image of a pupilometer being used to measure PD',
            caption: 'A typical pupilometer with forehead rest and eyepiece for measuring PD.',
            width: '60%'
          }
        },
        {
          id: 'pd-tool-ruler',
          type: 'heading',
          content: {
            text: 'Using a PD Ruler',
            level: 3
          }
        },
        {
          id: 'ruler-description',
          type: 'paragraph',
          content: {
            text: 'A PD ruler (sometimes called a distometer or millimeter ruler) is a simple, inexpensive tool that can provide reasonably accurate measurements with proper technique. It requires good practitioner skill and patient cooperation.'
          }
        },
        {
          id: 'ruler-steps',
          type: 'paragraph',
          content: {
            text: 'Basic steps for using a PD ruler:'
          }
        },
        {
          id: 'ruler-steps-list',
          type: 'list',
          content: {
            items: [
              'Position yourself directly in front of the patient at eye level',
              'Ask the patient to look at your right eye (their left) while you look at their right eye',
              'Hold the ruler across the patient\'s bridge, ensuring it\'s level',
              'Align the zero mark with the temporal edge of their right pupil',
              'Without moving the ruler, note the measurement at the temporal edge of their left pupil',
              'For monocular PD, mark the position of the center of the bridge of the nose'
            ],
            ordered: true
          }
        },
        {
          id: 'ruler-tips',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Improving Accuracy with a Ruler',
            text: 'To improve accuracy when using a PD ruler, place a small dot on your non-dominant eye and ask the patient to focus on it. This helps maintain proper alignment and prevents the patient\'s gaze from wandering during measurement.'
          }
        },
        {
          id: 'pd-tool-corneal-reflex',
          type: 'heading',
          content: {
            text: 'Corneal Reflection Method',
            level: 3
          }
        },
        {
          id: 'corneal-description',
          type: 'paragraph',
          content: {
            text: 'The corneal reflection method uses a penlight to create reflections on the patient\'s corneas, which are then measured. This method is useful for uncooperative patients, children, or when other methods aren\'t available.'
          }
        },
        {
          id: 'corneal-steps',
          type: 'paragraph',
          content: {
            text: 'Basic steps for the corneal reflection method:'
          }
        },
        {
          id: 'corneal-steps-list',
          type: 'list',
          content: {
            items: [
              'Position yourself directly in front of the patient at eye level',
              'Hold a penlight at your eye level, directly between your eyes',
              'Ask the patient to look at the light',
              'Observe the reflection of the light on each cornea (it should appear in the center of each pupil)',
              'Measure the distance between these corneal reflections using a PD ruler'
            ],
            ordered: true
          }
        },
        {
          id: 'pd-advanced-tips',
          type: 'paragraph',
          content: {
            text: 'For all methods, it\'s best practice to take multiple measurements and average the results. This helps minimize measurement errors. Also, ensure the patient\'s head is straight and not tilted, as this can affect the accuracy of the measurement.'
          }
        }
      ]
    },
    {
      id: 'special-situations',
      title: 'Special PD Measurement Situations',
      type: 'main',
      content: [
        {
          id: 'special-intro',
          type: 'paragraph',
          content: {
            text: 'Certain situations require special consideration when measuring PD:'
          }
        },
        {
          id: 'measuring-children',
          type: 'heading',
          content: {
            text: 'Measuring Children',
            level: 3
          }
        },
        {
          id: 'children-description',
          type: 'paragraph',
          content: {
            text: 'Children can be challenging to measure due to shorter attention spans and difficulty following instructions. Additionally, children\'s PDs change as they grow, necessitating more frequent updates.'
          }
        },
        {
          id: 'children-tips-list',
          type: 'list',
          content: {
            items: [
              'Use quick measurement techniques like the corneal reflection method',
              'Have a parent help keep the child\'s attention',
              'Use engaging targets like small toys or colorful lights',
              'Take several quick measurements rather than one perfect one',
              'Consider using the frame trial method for verification'
            ],
            ordered: false
          }
        },
        {
          id: 'children-growth',
          type: 'table',
          content: {
            headers: ['Age', 'Average PD Range (mm)', 'Annual Growth (mm)'],
            rows: [
              ['1 year', '40-48', '1-2'],
              ['5 years', '46-54', '0.8-1'],
              ['10 years', '50-58', '0.5-0.8'],
              ['16 years', '54-65', '0.2-0.5'],
              ['Adult', '56-74', 'Minimal to none']
            ],
            caption: 'Average PD ranges by age and typical annual growth'
          }
        },
        {
          id: 'high-rx',
          type: 'heading',
          content: {
            text: 'High Prescriptions',
            level: 3
          }
        },
        {
          id: 'high-rx-description',
          type: 'paragraph',
          content: {
            text: 'For patients with high prescriptions (generally +/-4.00D or greater), monocular PD measurements are especially important. Even small inaccuracies can create significant unwanted prismatic effects in higher prescriptions.'
          }
        },
        {
          id: 'high-rx-tips',
          type: 'callout',
          content: {
            type: 'important',
            title: 'High Rx Best Practice',
            text: 'For prescriptions over ±4.00D, always measure monocular PDs and consider taking multiple measurements with different methods to ensure accuracy. Even 1mm of decentration in a 10.00D lens can induce 1 prism diopter of unwanted prismatic effect.'
          }
        },
        {
          id: 'pd-multifocals',
          type: 'heading',
          content: {
            text: 'Multifocal Lenses',
            level: 3
          }
        },
        {
          id: 'multifocals-description',
          type: 'paragraph',
          content: {
            text: 'For multifocal lenses, especially progressives, both distance and near PDs are important. The near PD is typically 3-4mm less than the distance PD due to convergence when looking at near objects.'
          }
        },
        {
          id: 'near-pd-calculation',
          type: 'paragraph',
          content: {
            text: 'If you can\'t directly measure the near PD, you can estimate it by subtracting 3mm from the distance PD for most adults. However, a direct measurement is always preferable for accuracy, especially for progressive lenses.'
          }
        },
        {
          id: 'pd-verification',
          type: 'heading',
          content: {
            text: 'PD Verification',
            level: 3
          }
        },
        {
          id: 'verification-methods',
          type: 'paragraph',
          content: {
            text: 'To verify your PD measurements:'
          }
        },
        {
          id: 'verification-list',
          type: 'list',
          content: {
            items: [
              'Compare with previous measurements if available',
              'Use multiple measurement methods and compare results',
              'Have a colleague take a second measurement',
              'Use the frame trial method: mark the pupil positions on the demo lenses while the patient wears the selected frame',
              'For existing glasses, measure the distance between optical centers using a lensometer'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'pd-clinical-applications',
      title: 'Clinical Applications and Problem Solving',
      type: 'clinical',
      content: [
        {
          id: 'pd-problems-intro',
          type: 'paragraph',
          content: {
            text: 'Understanding how to address common PD-related problems is an important skill for optical professionals:'
          }
        },
        {
          id: 'pd-complaints',
          type: 'heading',
          content: {
            text: 'Addressing PD-Related Complaints',
            level: 3
          }
        },
        {
          id: 'complaints-table',
          type: 'table',
          content: {
            headers: ['Patient Complaint', 'Possible PD-Related Cause', 'Solution'],
            rows: [
              ['Eyestrain or headaches', 'Optical centers don\'t align with pupils', 'Verify and correct PD; check for induced prism'],
              ['Difficulty adapting to new glasses', 'PD different from previous glasses', 'Compare old vs. new PDs; adjust if needed'],
              ['Distortion when looking through the sides', 'Binocular PD used when monocular needed', 'Remeasure using monocular technique'],
              ['One eye seems clearer than the other', 'Asymmetrical face not accounted for', 'Verify monocular PDs and adjust'],
              ['Discomfort with progressive lenses', 'Incorrect near PD measurement', 'Check near PD; verify fitting height']
            ],
            caption: 'Common PD-related patient complaints and solutions'
          }
        },
        {
          id: 'pd-frame-selection',
          type: 'heading',
          content: {
            text: 'PD Considerations in Frame Selection',
            level: 3
          }
        },
        {
          id: 'frame-selection-paragraph',
          type: 'paragraph',
          content: {
            text: 'The frame\'s size and shape must be appropriate for the patient\'s PD. As a rule of thumb, the distance between the frame\'s lens optical centers (typically the boxing center) should be reasonably close to the patient\'s PD.'
          }
        },
        {
          id: 'frame-problems-list',
          type: 'list',
          content: {
            items: [
              'For narrow PDs: Avoid wide frames that would require excessive inward decentration',
              'For wide PDs: Ensure frame is wide enough to accommodate the PD without excessive outward decentration',
              'For high prescriptions: Limit frame size to minimize lens thickness and weight',
              'For children: Select adjustable frames that can accommodate growth'
            ],
            ordered: false
          }
        },
        {
          id: 'pd-case-studies',
          type: 'callout',
          content: {
            type: 'example',
            title: 'Case Study',
            text: 'A patient with a 72mm PD selects a narrow frame with a 62mm distance between lens centers. This 10mm difference would require 5mm of outward decentration per lens. In a -6.00D prescription, this would induce approximately 3Δ of unwanted base-in prism, potentially causing diplopia or discomfort. The optician should guide the patient toward a wider frame choice or discuss with the prescriber about incorporating prism compensation.'
          }
        },
        {
          id: 'pd-documentation',
          type: 'paragraph',
          content: {
            text: 'Always document your PD measurements in the patient\'s record, including the method used, the values obtained, and any special considerations. This documentation is invaluable for troubleshooting and future reference.'
          }
        }
      ]
    }
  ],
  summary: 'Accurate pupillary distance measurement is a fundamental skill in opticianry that directly impacts patient vision and comfort. Understanding the distinction between binocular and monocular PDs, mastering various measurement techniques (pupilometer, PD ruler, corneal reflection), and knowing how to address special situations ensures proper lens placement. For high prescriptions, progressive lenses, and patients with facial asymmetry, precise monocular measurements are essential to avoid unwanted prismatic effects. Always verify measurements using multiple methods, document your findings, and consider PD when helping patients select appropriate frames. With practice and attention to detail, you can consistently provide accurate PD measurements for optimal eyewear performance.',
  references: [
    'Brooks CW, Borish IM. System for Ophthalmic Dispensing, 3rd Edition',
    'Clifford W. Brooks. Essentials for Ophthalmic Lens Work',
    'American Board of Opticianry (ABO) Study Guide',
    'Optical Laboratories Association. OLA Guide to Prescription Eyewear Processing'
  ],
  practiceQuestions: [
    {
      question: 'What is the main reason accurate PD measurements are important?',
      options: [
        'To determine the cost of the lenses',
        'To ensure the patient is looking through the optical centers of the lenses',
        'To determine the lens material needed',
        'To calculate the frame size required'
      ],
      correctAnswer: 1,
      explanation: 'Accurate PD measurements ensure the patient looks through the optical centers of their lenses, which provides optimal vision and prevents unwanted prismatic effects.'
    },
    {
      question: 'For which of the following patients would monocular PD measurements be MOST critical?',
      options: [
        'A patient with a -1.00D prescription',
        'A patient with a +8.00D prescription',
        'A patient needing reading glasses only',
        'A patient purchasing sunglasses without prescription'
      ],
      correctAnswer: 1,
      explanation: 'Monocular PD measurements are most critical for patients with high prescriptions (over +/-4.00D) like +8.00D, as even small inaccuracies can create significant unwanted prismatic effects.'
    },
    {
      question: 'How does the near PD typically compare to the distance PD?',
      options: [
        'Near PD is usually 3-4mm less than distance PD',
        'Near PD is usually 3-4mm more than distance PD',
        'Near PD is exactly the same as distance PD',
        'Near PD can be either larger or smaller than distance PD, depending on individual factors'
      ],
      correctAnswer: 0,
      explanation: 'Due to convergence when looking at near objects, the near PD is typically 3-4mm less than the distance PD for most adults.'
    },
    {
      question: 'When using a pupilometer, what should the patient focus on?',
      options: [
        'The optician\'s face',
        'A distant object outside the window',
        'The target light or image inside the device',
        'The floor'
      ],
      correctAnswer: 2,
      explanation: 'When using a pupilometer, the patient should focus on the target light or image inside the device to ensure an accurate measurement of their PD.'
    }
  ]
}; 