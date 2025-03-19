import { ContentSection } from '../../interfaces/content';

export const commonIssuesGuide: ContentSection = {
  id: 'common-troubleshooting-issues',
  title: 'Common Troubleshooting Guide for Eyewear',
  description: 'Practical guide to diagnosing and resolving common issues with glasses and contact lenses',
  sections: [
    {
      title: 'Troubleshooting Glasses Fit Issues',
      content: `
        Proper glasses fit is essential for comfort and optimal vision. Here's how to diagnose and fix common fit problems:

        1. Glasses Sliding Down
        - Cause: Nose pads too wide or frame too heavy
        - Solution: Adjust nose pads inward or tighten temple arms
        - Additional Fix: Consider adding silicone nose grips for plastic frames
        - When to Refer: If weight is the primary issue, suggest a lighter frame material

        2. Pinching at the Nose
        - Cause: Nose pads too close together
        - Solution: Gently adjust nose pads outward
        - Check For: Redness or indentation marks on the nose bridge
        - Prevention: Select frames with adjustable nose pads for patients with narrow bridges

        3. Pressure Behind the Ears
        - Cause: Temple arms too tight or incorrect angle
        - Solution: Adjust temple arms outward slightly and ensure proper downward angle
        - Technique: Heat temple tips for easier adjustment with acetate frames
        - Evaluation: Ensure 45° angle at the bend for proper weight distribution

        4. Uneven Frame
        - Cause: Uneven adjustment or facial asymmetry
        - Solution: Adjust frame alignment using proper optical tools
        - Assessment: Look for level lens heights and even temple positioning
        - Advanced Technique: Use frame warmer for more precise adjustments
      `,
      keyPoints: [
        'Most fit issues can be resolved with proper adjustment techniques',
        'Always verify adjustments by having the patient wear glasses for at least 5 minutes',
        'Document all adjustments made for future reference'
      ]
    },
    {
      title: 'Vision Problems With New Glasses',
      content: `
        When patients report vision issues with new glasses, follow this troubleshooting path:

        1. Blurry Vision
        - First Check: Verify prescription against lab order
        - Measurement Check: Confirm PD and OC heights are correct
        - Physical Inspection: Look for lens warpage or fabrication errors
        - Adaptation Period: Explain normal adaptation time (1-2 weeks for progressive lenses)

        2. Double Vision
        - Potential Causes: Incorrect PD, vertical imbalance, or prismatic effect
        - Check For: Lens centration and vertical alignment
        - Tests: Cover test to check for underlying binocular vision issues
        - Solution: Adjust lens position or remake with corrected measurements

        3. Distortion with Progressive Lenses
        - Common Issues: "Swimming" sensation, peripheral distortion
        - Frame Check: Ensure frame is properly adjusted and not sitting too low/high
        - Measurement Verification: Confirm fitting cross alignment with pupil
        - Adaptation Tips: Teach proper head positioning and suggest gradual wear increase

        4. Headaches or Eye Strain
        - First Action: Check for excessive lens tilt or wrap angle
        - Common Causes: Incorrect cylinder axis, PD errors, or excessive prismatic effect
        - Solution Path: Verify all measurements and make minor adjustments before considering remake
        - Documentation: Track time of day and specific activities that trigger symptoms
      `,
      keyPoints: [
        'Always verify prescription and measurements before assuming fabrication error',
        'Many vision issues resolve with proper adjustment and adaptation time',
        'Document all patient complaints specifically for better troubleshooting'
      ]
    },
    {
      title: 'Contact Lens Troubleshooting',
      content: `
        Contact lens issues require systematic assessment:

        1. Discomfort or Awareness
        - Initial Check: Examine for debris, tears, or inside-out lenses
        - Fit Evaluation: Check for proper movement and centration
        - Solution Issues: Consider preservative sensitivity or solution incompatibility
        - Action Plan: Try different solution, evaluate fit parameters, or switch material

        2. Vision Fluctuation
        - Common Causes: Lens dehydration, deposits, or fit issues
        - Assessment: Evaluate tear film quality and lens wettability
        - Solution: Consider more frequent replacement schedule or different material
        - Education: Discuss proper blinking techniques and environmental factors

        3. Redness and Irritation
        - Immediate Action: Assess for potential corneal abrasion or infection
        - Check For: Tight lens syndrome, solution sensitivity, or overwear
        - Solution Path: Temporary discontinuation and lubricating drops
        - Referral Criteria: When to refer for medical evaluation immediately

        4. Handling Difficulties
        - Assessment: Evaluate dexterity and technique
        - Teaching Tools: Use colored training lenses for visualization
        - Alternative Options: Discuss daily disposables for convenience
        - Support Materials: Provide step-by-step printed guides with images
      `,
      keyPoints: [
        'Contact lens issues often require evaluation of multiple factors',
        'Patient education is crucial for resolving and preventing problems',
        'Document all troubleshooting steps for continuity of care'
      ]
    },
    {
      title: 'Frame Repair and Maintenance',
      content: `
        Common frame issues and their solutions:

        1. Loose Screws
        - Prevention: Apply screw lock solution during dispensing
        - Repair: Replace with correct size, avoid overtightening
        - Patient Education: Provide small screwdriver and regular tightening schedule
        - Advanced Tip: Use nylon thread for temporary emergency repair

        2. Broken Temple Hinge
        - Assessment: Determine if temple or frame front hinge is damaged
        - Repair Options: Soldering for metal frames, acetone welding for plastic
        - Temporary Fix: Use heat-shrink tubing for emergency repair
        - Replacement: When to order new parts vs. recommend new frame

        3. Nose Pad Replacement
        - Selection: Choose proper size and style matching original
        - Technique: Proper plier use to avoid thread stripping
        - Material Options: Silicone vs. acetate pads for different skin types
        - Hypoallergenic Options: For patients with metal sensitivity

        4. Bridge Repair
        - Common Issues: Broken bridges in plastic frames
        - Repair Technique: Proper pin installation and acetone welding
        - Limitations: When repair will compromise structural integrity
        - Alternative: Discussing frame replacement when repair is not viable
      `,
      keyPoints: [
        'Quality repairs require proper tools and techniques',
        'Set realistic expectations about durability of repairs',
        'Prevention through proper maintenance should be emphasized'
      ]
    },
    {
      title: 'Lens Surface Issues',
      content: `
        Troubleshooting common lens surface problems:

        1. Scratched Lenses
        - Prevention: Proper case use and cleaning instructions
        - Assessment: Depth and location of scratches
        - Solution: AR coating reapplication for minor scratches
        - Recommendation: Discuss scratch-resistant treatments for future purchases

        2. Coating Peeling or Crazing
        - Causes: Heat damage, chemical exposure, or manufacturing defects
        - Identification: Rainbow-like appearance or visible peeling
        - Warranty Check: Verify manufacturer's warranty coverage
        - Solution: Complete lens replacement is usually required

        3. Smudging and Cleaning Issues
        - Cause: Oil-based makeup, lotion, or improper cleaning
        - Solution: Demonstrate proper cleaning technique (warm water, soap, microfiber)
        - Products to Avoid: Harsh cleaners, paper products, clothing
        - Recommendation: Hydrophobic treatments for easier maintenance

        4. Fogging
        - Common Situations: Temperature changes, mask wearing
        - Solutions: Anti-fog treatments and cloths
        - Application Technique: Proper anti-fog application methods
        - Frame Adjustments: How frame positioning can reduce fogging
      `,
      keyPoints: [
        'Proper cleaning and care significantly extends lens life',
        'Many surface issues can be prevented with patient education',
        'Document warranty coverage and expiration for all dispensed eyewear'
      ]
    }
  ],
  practiceQuestions: [
    {
      question: 'What is the most likely cause of new glasses sliding down the nose?',
      options: ['Frame too large', 'Nose pads too wide', 'Prescription too strong', 'Lenses too thick'],
      correctAnswer: 1
    },
    {
      question: 'A patient with new progressive lenses complains of peripheral distortion. What should you check first?',
      options: ['Prescription accuracy', 'Frame adjustment', 'Pupillary distance', 'Lens material'],
      correctAnswer: 1
    },
    {
      question: 'Which contact lens issue requires immediate medical referral?',
      options: ['Mild discomfort', 'Deposits on the lens', 'Red eye with pain', 'Vision fluctuation'],
      correctAnswer: 2
    },
    {
      question: 'What is the best solution for coating that is peeling off lenses?',
      options: ['Clean with alcohol', 'Polish the surface', 'Apply new AR coating', 'Replace the lenses'],
      correctAnswer: 3
    },
    {
      question: 'How should you properly fix glasses with a loose screw?',
      options: ['Apply glue to the screw', 'Replace with any available screw', 'Replace with correct size and apply screw lock', 'Tighten as firmly as possible'],
      correctAnswer: 2
    }
  ],
  relatedTopics: ['frame-materials', 'lens-coatings', 'contact-lens-care']
}; 