import { TopicStudyContent } from '../../interfaces/StudyContent';

export const regulationsStandardsContent: TopicStudyContent = {
  topicId: 'regulations-standards',
  title: 'Regulations and Standards in Opticianry',
  introduction: 'The optical industry is governed by a comprehensive set of regulations, standards, and best practices that ensure patient safety, product quality, and professional integrity. Understanding these regulations is essential for opticians to maintain compliance, provide high-quality care, and avoid legal liability. This module covers key industry standards, regulatory requirements, prescription protocols, and record-keeping practices.',
  objectives: [
    'Understand ANSI Z80 standards for ophthalmic products',
    'Learn FDA regulations pertaining to optical devices and contact lenses',
    'Understand prescription requirements, validity periods, and release regulations',
    'Learn proper record-keeping practices and HIPAA compliance',
    'Identify key safety standards for optical materials and impact resistance',
    'Understand professional liability and scope of practice considerations'
  ],
  sections: [
    {
      id: 'industry-standards',
      title: 'Industry Standards and Tolerances',
      type: 'introduction',
      content: [
        {
          id: 'standards-intro',
          type: 'paragraph',
          content: {
            text: 'The optical industry relies on established standards to ensure consistency, quality, and safety of eyewear products. These standards define acceptable tolerances and specifications for various aspects of ophthalmic lenses and frames, providing benchmarks for quality control and verification.'
          }
        },
        {
          id: 'ansi-overview',
          type: 'paragraph',
          content: {
            text: 'The American National Standards Institute (ANSI) Z80 committee develops and maintains the most widely recognized standards for ophthalmic products in the United States. These standards cover specifications for eyeglass lenses, frames, contact lenses, and other vision care products.'
          }
        },
        {
          id: 'ansi-standards',
          type: 'table',
          content: {
            headers: ['Standard', 'Description', 'Key Requirements'],
            rows: [
              ['ANSI Z80.1', 'Prescription Ophthalmic Lenses', 'Tolerances for power, cylinder, axis, prism, and center thickness'],
              ['ANSI Z80.5', 'Requirements for Ophthalmic Frames', 'Frame dimensions, material requirements, and labeling'],
              ['ANSI Z80.9', 'Optical Devices for Low Vision', 'Specifications for low vision aids and devices'],
              ['ANSI Z80.20', 'Contact Lenses', 'Standards for contact lens parameters and performance'],
              ['ANSI Z87.1', 'Occupational Eye and Face Protection', 'Impact resistance and safety requirements']
            ],
            caption: 'Key ANSI Standards Relevant to Opticianry'
          }
        },
        {
          id: 'iso-standards',
          type: 'list',
          content: {
            title: 'International Standards Organization (ISO):',
            items: [
              'ISO 8980 series: Standards for uncut finished spectacle lenses',
              'ISO 12870: Requirements for spectacle frames',
              'ISO 16034: Vocabulary and symbols for optical properties of spectacle lenses',
              'ISO 14889: Fundamental requirements for uncut finished lenses',
              'ISO 18369 series: Standards for contact lenses and contact lens care products'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'lens-tolerances',
      title: 'Lens Power and Measurement Tolerances',
      type: 'main',
      content: [
        {
          id: 'tolerance-intro',
          type: 'paragraph',
          content: {
            text: 'Prescription tolerances define the acceptable margins of error when fabricating and verifying eyewear. These tolerances vary based on the prescription parameters and lens type, with stricter requirements for higher-powered lenses and specific features like prism.'
          }
        },
        {
          id: 'sphere-tolerance',
          type: 'table',
          content: {
            headers: ['Sphere Power Range', 'Tolerance'],
            rows: [
              ['0.00 to ±6.50D', '±0.13D'],
              ['6.51 to ±12.00D', '±0.15D'],
              ['Over ±12.00D', '±0.25D']
            ],
            caption: 'ANSI Z80.1 Sphere Power Tolerances'
          }
        },
        {
          id: 'cylinder-tolerance',
          type: 'table',
          content: {
            headers: ['Cylinder Power Range', 'Power Tolerance', 'Axis Tolerance'],
            rows: [
              ['0.00 to 2.00D', '±0.13D', '±7°'],
              ['2.25 to 4.50D', '±0.15D', '±5°'],
              ['Over 4.50D', '±0.25D', '±3°']
            ],
            caption: 'ANSI Z80.1 Cylinder Power and Axis Tolerances'
          }
        },
        {
          id: 'add-tolerance',
          type: 'table',
          content: {
            headers: ['Add Power Range', 'Tolerance'],
            rows: [
              ['0.75 to 3.50D', '±0.12D'],
              ['Over 3.50D', '±0.18D']
            ],
            caption: 'ANSI Z80.1 Add Power Tolerances'
          }
        },
        {
          id: 'prism-tolerance',
          type: 'table',
          content: {
            headers: ['Condition', 'Tolerance'],
            rows: [
              ['When prism is prescribed or induced by power', 'The greater of ±0.33Δ or 1/3 of prescribed prism'],
              ['For prescribed prism over 10Δ', '±0.5Δ'],
              ['Vertical imbalance (differential)', '0.33Δ for up to 3.375Δ of prescribed vertical prism']
            ],
            caption: 'ANSI Z80.1 Prism Tolerances'
          }
        },
        {
          id: 'verification-tips',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Verification Best Practices',
            text: 'Always verify finished eyewear with a calibrated lensometer. For high-powered lenses or complex prescriptions, take multiple readings and verify at different points across the lens. Document all verification measurements for quality assurance and record-keeping purposes.'
          }
        }
      ]
    },
    {
      id: 'regulatory-requirements',
      title: 'Regulatory Requirements and Compliance',
      type: 'main',
      content: [
        {
          id: 'fda-regulations',
          type: 'paragraph',
          content: {
            text: 'The U.S. Food and Drug Administration (FDA) regulates eyeglasses, contact lenses, and other optical devices as medical devices. This regulatory oversight ensures that these products meet safety standards and are properly labeled, manufactured, and distributed.'
          }
        },
        {
          id: 'impact-resistance',
          type: 'definition',
          content: {
            term: 'Impact Resistance Requirements',
            definition: 'FDA regulations require that all prescription lenses meet minimum impact resistance standards. This is typically verified through drop ball testing, where a 5/8-inch steel ball is dropped from a height of 50 inches onto the lens without causing breakage.',
            related: ['drop-ball-test', 'safety-eyewear', 'polycarbonate']
          }
        },
        {
          id: 'uv-claims',
          type: 'paragraph',
          content: {
            text: 'The FDA regulates claims related to UV protection in eyewear. For lenses to be labeled as providing UV protection, they must block at least 99% of UVB rays and 95% of UVA rays. Claims about specific levels of protection must be substantiated with appropriate testing and documentation.'
          }
        },
        {
          id: 'contact-lens-regulations',
          type: 'list',
          content: {
            title: 'FDA Contact Lens Regulations:',
            items: [
              'Contact lenses are classified as Class II or Class III medical devices',
              'All contact lenses require a valid prescription for purchase',
              'Prescriptions must include specific parameters (base curve, diameter, power, etc.)',
              'Sellers must verify prescriptions with the prescriber',
              'Prescription expiration dates must be honored (typically 1-2 years)',
              'Contact lens care products must meet disinfection efficacy standards'
            ],
            ordered: false
          }
        },
        {
          id: 'fda-regulations-table',
          type: 'table',
          content: {
            headers: ['Product Category', 'FDA Classification', 'Key Requirements'],
            rows: [
              ['Spectacle Lenses', 'Class I Medical Device', 'Impact resistance, proper labeling, manufacturing controls'],
              ['Contact Lenses', 'Class II/III Medical Device', 'Prescription requirements, material safety, sterility'],
              ['Low Vision Devices', 'Varies by Device', 'Safety, effectiveness, proper labeling'],
              ['Lens Care Products', 'Varies by Product', 'Disinfection efficacy, preservative systems, shelf life']
            ],
            caption: 'FDA Classifications and Requirements for Optical Products'
          }
        }
      ]
    },
    {
      id: 'prescription-requirements',
      title: 'Prescription Requirements and Patient Rights',
      type: 'main',
      content: [
        {
          id: 'rx-elements',
          type: 'paragraph',
          content: {
            text: 'Optical prescriptions must contain specific elements to be considered valid and complete. Understanding these requirements is essential for proper dispensing and compliance with regulations such as the Eyeglass Rule and Contact Lens Rule enforced by the Federal Trade Commission (FTC).'
          }
        },
        {
          id: 'prescription-elements',
          type: 'list',
          content: {
            title: 'Required Elements of a Valid Eyeglass Prescription:',
            items: [
              'Patient name and date of examination',
              'Prescriber name, address, phone number, and signature',
              'Sphere power for each eye (if needed)',
              'Cylinder power and axis (if needed)',
              'Add power (for multifocal prescriptions)',
              'Prism and base direction (if needed)',
              'Expiration date (varies by state law)',
              'Additional specifications or requirements (if needed)'
            ],
            ordered: false
          }
        },
        {
          id: 'cl-prescription-elements',
          type: 'list',
          content: {
            title: 'Additional Required Elements for Contact Lens Prescriptions:',
            items: [
              'Base curve or appropriate designation',
              'Diameter or appropriate designation',
              'Material and/or manufacturer',
              'Brand name',
              'Specific wearing schedule and replacement interval'
            ],
            ordered: false
          }
        },
        {
          id: 'ftc-rules',
          type: 'paragraph',
          content: {
            text: 'The FTC enforces the Eyeglass Rule and Contact Lens Rule, which require prescribers to automatically provide patients with a copy of their prescription after completion of an eye examination, even if the patient doesn\'t specifically request it. The rules also prohibit prescribers from requiring patients to purchase eyewear from them as a condition of providing the prescription.'
          }
        },
        {
          id: 'prescription-release',
          type: 'definition',
          content: {
            term: 'Prescription Release Requirements',
            definition: 'Eye care providers must provide patients with a copy of their spectacle prescription at the completion of an eye examination. For contact lens prescriptions, the prescription must be provided once the lens fitting is complete and parameters are finalized.',
            related: ['eyeglass-rule', 'contact-lens-rule', 'ftc-regulations']
          }
        },
        {
          id: 'patient-rights',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Patient Rights Regarding Prescriptions',
            text: 'Patients have the right to receive their prescription without having to ask, purchase eyewear, sign a waiver, or pay an additional fee. They also have the right to have their prescription filled at the provider of their choice.'
          }
        },
        {
          id: 'verification-requirements',
          type: 'paragraph',
          content: {
            text: 'Sellers of contact lenses must verify prescriptions with the prescriber before dispensing lenses to patients. The verification can be passive (no response within 8 business hours constitutes verification) or active (direct confirmation from the prescriber).'
          }
        }
      ]
    },
    {
      id: 'record-keeping',
      title: 'Record Keeping and Documentation',
      type: 'main',
      content: [
        {
          id: 'records-intro',
          type: 'paragraph',
          content: {
            text: 'Proper record-keeping is essential for optical businesses to maintain compliance with regulatory requirements, track patient care, manage inventory, and document quality control measures. Comprehensive records also provide legal protection and facilitate continuity of care.'
          }
        },
        {
          id: 'patient-records',
          type: 'list',
          content: {
            title: 'Essential Patient Record Elements:',
            items: [
              'Patient demographics and contact information',
              'Insurance information and eligibility verification',
              'Current and previous prescriptions',
              'Measurements (PD, segment height, frame dimensions, etc.)',
              'Products dispensed (frame, lens type, material, treatments)',
              'Adjustments, repairs, and follow-up visits',
              'Communications regarding eyewear issues or concerns',
              'Signed acknowledgments and consent forms'
            ],
            ordered: false
          }
        },
        {
          id: 'hipaa-compliance',
          type: 'definition',
          content: {
            term: 'HIPAA Compliance',
            definition: 'The Health Insurance Portability and Accountability Act (HIPAA) establishes standards for protecting patient health information. Optical businesses that bill insurance electronically are considered covered entities and must comply with HIPAA privacy and security rules.',
            related: ['protected-health-information', 'patient-privacy', 'security-rule']
          }
        },
        {
          id: 'hipaa-requirements',
          type: 'list',
          content: {
            title: 'Key HIPAA Requirements for Optical Businesses:',
            items: [
              'Implement written privacy policies and procedures',
              'Designate a privacy officer responsible for compliance',
              'Train staff on privacy policies and procedures',
              'Secure physical and electronic patient information',
              'Obtain patient acknowledgment of privacy practices',
              'Implement appropriate technical safeguards for electronic records',
              'Maintain records of disclosures of protected health information'
            ],
            ordered: false
          }
        },
        {
          id: 'record-retention',
          type: 'table',
          content: {
            headers: ['Record Type', 'Recommended Retention Period', 'Considerations'],
            rows: [
              ['Patient Records', '7-10 years (check state laws)', 'Longer for minors (typically until age of majority plus statute of limitations)'],
              ['Prescription Records', '5-7 years', 'Required for verification and warranty claims'],
              ['Insurance Claims', '7 years', 'Required for audit purposes and dispute resolution'],
              ['Quality Control Records', '3-5 years', 'Documentation of verification and standards compliance'],
              ['Business Records', '7 years', 'Required for tax and regulatory purposes']
            ],
            caption: 'Recommended Record Retention Periods'
          }
        },
        {
          id: 'records-best-practices',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Record-Keeping Best Practices',
            text: 'Implement a consistent system for organizing and labeling records. Regularly back up electronic records and secure them with appropriate encryption and access controls. Train staff on proper documentation procedures and the importance of thorough record-keeping. Consider using practice management software with integrated electronic health records for improved efficiency and compliance.'
          }
        }
      ]
    },
    {
      id: 'liability-scope',
      title: 'Professional Liability and Scope of Practice',
      type: 'main',
      content: [
        {
          id: 'liability-intro',
          type: 'paragraph',
          content: {
            text: 'Opticians face various professional liability considerations related to the accurate filling of prescriptions, proper dispensing of eyewear, and adherence to scope of practice limitations. Understanding these issues is essential for minimizing risk and maintaining professional integrity.'
          }
        },
        {
          id: 'scope-of-practice',
          type: 'definition',
          content: {
            term: 'Scope of Practice',
            definition: 'The legally defined boundaries within which a licensed optical professional may practice. Scope of practice varies by state and licensure category, but generally includes measuring, fitting, and adapting eyewear to fill prescriptions written by optometrists or ophthalmologists.',
            related: ['licensure', 'certification', 'state-regulations']
          }
        },
        {
          id: 'state-variations',
          type: 'paragraph',
          content: {
            text: 'Optician licensing and scope of practice regulations vary significantly from state to state. Some states require opticians to be licensed, some have voluntary certification, and others have no specific requirements. Licensed states typically have more clearly defined scope of practice boundaries and educational requirements.'
          }
        },
        {
          id: 'state-requirements',
          type: 'table',
          content: {
            headers: ['Regulatory Structure', 'Number of States', 'Key Features'],
            rows: [
              ['Licensed/Regulated States', '22 states + DC', 'Formal education, examination, continuing education requirements'],
              ['Certification (Voluntary)', '28 states', 'Voluntary credentials through ABO-NCLE or state associations'],
              ['Title Protection', 'Varies', 'Only certified individuals can use specific professional titles']
            ],
            caption: 'Optician Regulatory Structures in the United States'
          }
        },
        {
          id: 'prohibited-activities',
          type: 'list',
          content: {
            title: 'Activities Typically Outside Optician Scope of Practice:',
            items: [
              'Diagnosing eye conditions or diseases',
              'Prescribing corrective lenses or medications',
              'Treating eye diseases or conditions',
              'Performing eye examinations to determine refractive errors',
              'Modifying prescriptions without authorization from the prescriber',
              'Claiming to provide medical eye care services'
            ],
            ordered: false
          }
        },
        {
          id: 'liability-issues',
          type: 'list',
          content: {
            title: 'Common Sources of Professional Liability:',
            items: [
              'Errors in filling prescriptions',
              'Improper fitting of eyewear leading to adaptation issues',
              'Dispensing inappropriate lens types for specific activities',
              'Failure to adequately educate patients about adaptation or limitations',
              'Failure to verify prescriptions when required',
              'Practicing outside the legal scope of practice',
              'Inadequate record-keeping and documentation'
            ],
            ordered: false
          }
        },
        {
          id: 'risk-management',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Risk Management Strategies',
            text: 'Maintain professional liability insurance appropriate for your practice scope. Document all patient interactions, measurements, and dispensing activities. Verify all prescriptions carefully and maintain verification records. Never make unauthorized changes to prescriptions or claim credentials you don\'t possess. Stay within your legal scope of practice and refer patients to appropriate eye care providers when necessary.'
          }
        }
      ]
    },
    {
      id: 'summary-review',
      title: 'Summary and Review',
      type: 'summary',
      content: [
        {
          id: 'summary-paragraph',
          type: 'paragraph',
          content: {
            text: 'Understanding and complying with optical industry regulations and standards is essential for professional opticians. These rules and guidelines ensure that patients receive accurate, quality eyewear that meets their visual needs while protecting their safety and rights. By maintaining knowledge of current standards, prescription requirements, record-keeping practices, and scope of practice limitations, opticians can provide high-quality care while minimizing professional liability risks.'
          }
        },
        {
          id: 'key-takeaways',
          type: 'list',
          content: {
            title: 'Key Takeaways:',
            items: [
              'ANSI Z80.1 standards establish tolerances for prescription ophthalmic lenses that must be met for quality verification',
              'FDA regulations govern impact resistance, UV protection claims, and classification of various optical products',
              'The FTC Eyeglass Rule and Contact Lens Rule establish prescription release and verification requirements',
              'Proper record-keeping and HIPAA compliance are essential for optical practices',
              'Understanding scope of practice limitations helps prevent professional liability issues',
              'Standards and regulations continue to evolve, requiring ongoing professional education'
            ],
            ordered: false
          }
        },
        {
          id: 'assessment-prep',
          type: 'callout',
          content: {
            type: 'note',
            title: 'ABO Exam Preparation',
            text: 'For ABO certification exams, understand ANSI tolerances, FDA impact resistance requirements, FTC prescription rules, and standard record-keeping practices. Be prepared to identify appropriate responses to scenarios involving prescription verification, patient rights, and scope of practice issues.'
          }
        }
      ]
    }
  ],
  summary: 'Understanding and complying with optical industry regulations and standards is essential for professional opticians. ANSI Z80.1 standards establish tolerances for prescription ophthalmic lenses that must be met for quality verification. FDA regulations govern impact resistance, UV protection claims, and classification of various optical products. The FTC Eyeglass Rule and Contact Lens Rule establish prescription release and verification requirements. Proper record-keeping and HIPAA compliance are essential for optical practices. Understanding scope of practice limitations helps prevent professional liability issues. Opticians must stay informed about these regulations to provide quality care while maintaining legal compliance.',
  practiceQuestions: [
    {
      question: 'According to ANSI Z80.1 standards, what is the acceptable tolerance for a prescribed cylinder power of 3.00D?',
      options: [
        '±0.13D',
        '±0.15D',
        '±0.25D',
        '±0.50D'
      ],
      correctAnswer: 1,
      explanation: 'ANSI Z80.1 standards specify that cylinder powers between 2.25D and 4.50D have a tolerance of ±0.15D.'
    },
    {
      question: 'What is the standard method for testing impact resistance in prescription lenses as required by the FDA?',
      options: [
        'Polariscope testing',
        'Drop ball testing',
        'Pressure testing',
        'Thermal shock testing'
      ],
      correctAnswer: 1,
      explanation: 'The FDA requires that prescription lenses meet impact resistance standards through drop ball testing, where a 5/8-inch steel ball is dropped from a height of 50 inches onto the lens without causing breakage.'
    },
    {
      question: 'Under the FTC Eyeglass Rule, when must a prescriber provide the patient with a copy of their prescription?',
      options: [
        'Only if the patient specifically requests it',
        'Only if the patient purchases eyewear elsewhere',
        'Automatically upon completion of the eye examination',
        'Within 30 days of the examination'
      ],
      correctAnswer: 2,
      explanation: 'The FTC Eyeglass Rule requires prescribers to automatically provide patients with a copy of their prescription after completion of an eye examination, without requiring a specific request from the patient.'
    },
    {
      question: 'How long do contact lens sellers have to wait for a prescriber response during passive verification before filling an order?',
      options: [
        '24 hours',
        '48 hours',
        '8 business hours',
        '3 business days'
      ],
      correctAnswer: 2,
      explanation: 'Under the FTC Contact Lens Rule, if a prescriber does not respond to a verification request within 8 business hours, the prescription is considered verified, and the seller may proceed with filling the order.'
    },
    {
      question: 'Which of the following is NOT a requirement under HIPAA for optical businesses?',
      options: [
        'Implementing written privacy policies',
        'Training staff on privacy procedures',
        'Obtaining patient acknowledgment of privacy practices',
        'Refusing to release prescriptions to third-party sellers'
      ],
      correctAnswer: 3,
      explanation: 'HIPAA requires implementing privacy policies, training staff, and obtaining patient acknowledgments, but it does not allow providers to refuse to release prescriptions to third-party sellers. In fact, the FTC Eyeglass Rule and Contact Lens Rule require the release of prescriptions so patients can fill them at the provider of their choice.'
    },
    {
      question: 'Which of the following activities is typically within an optician\'s scope of practice?',
      options: [
        'Diagnosing eye conditions',
        'Modifying prescriptions to improve visual acuity',
        'Measuring pupillary distance and fitting height',
        'Performing refraction to determine prescription needs'
      ],
      correctAnswer: 2,
      explanation: 'Measuring pupillary distance and fitting height are within an optician\'s scope of practice. Diagnosing conditions, modifying prescriptions, and performing refractions are typically reserved for optometrists and ophthalmologists.'
    },
    {
      question: 'What is the ANSI Z80.1 axis tolerance for a lens with a cylinder power of 1.50D?',
      options: [
        '±3°',
        '±5°',
        '±7°',
        '±10°'
      ],
      correctAnswer: 2,
      explanation: 'According to ANSI Z80.1 standards, lenses with cylinder powers from 0.00D to 2.00D have an axis tolerance of ±7°.'
    },
    {
      question: 'What is the generally recommended minimum retention period for adult patient records in an optical practice?',
      options: [
        '2-3 years',
        '5-7 years',
        '7-10 years',
        'Indefinitely'
      ],
      correctAnswer: 2,
      explanation: 'The generally recommended retention period for adult patient records is 7-10 years, though specific requirements may vary by state law and type of practice.'
    },
    {
      question: 'For lenses to be labeled as providing UV protection according to FDA regulations, what percentage of UVB rays must they block?',
      options: [
        'At least 70%',
        'At least 85%',
        'At least 95%',
        'At least 99%'
      ],
      correctAnswer: 3,
      explanation: 'FDA regulations require that lenses labeled as providing UV protection must block at least 99% of UVB rays and 95% of UVA rays.'
    },
    {
      question: 'Which of the following is the best practice for reducing professional liability when dispensing high-power prescriptions?',
      options: [
        'Advising the patient to get a second opinion',
        'Carefully documenting all measurements and verification tests',
        'Recommending only premium lens materials',
        'Refusing to fill prescriptions over a certain power'
      ],
      correctAnswer: 1,
      explanation: 'Careful documentation of all measurements, verification tests, and patient communications is the best practice for reducing professional liability when dispensing high-power prescriptions. This creates a record of proper procedure and due diligence.'
    }
  ]
}; 