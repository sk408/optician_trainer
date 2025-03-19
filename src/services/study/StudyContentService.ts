import { TopicStudyContent } from '../../interfaces/StudyContent';
import { 
  eyeAnatomyContent,
  frameBasicsContent,
  lensBasicsContent,
  patientCommunicationContent,
  refractiveErrorsContent,
  lensMaterialsContent,
  lensCoatingsContent,
  lensDesignsContent,
  contactLensOverviewContent,
  eyeAnatomyClContent,
  // New content modules
  sportsVisionContent,
  lowVisionAidsContent,
  // Newly added content modules
  sunglassesAndTintsContent,
  frameAdjustmentContent,
  childrenEyewearContent,
  // Measurement content
  pdMeasurementContent,
  // Optical theory content
  basicOpticsContent,
  lensTypesContent,
  // Now including all available content modules
  refractiveErrorsAdvancedContent,
  occupationalLensesContent,
  prescriptionAnalysisContent,
  // New contact lens modules
  contactLensComplicationsContent,
  contactLensCareContent,
  contactLensFittingContent,
  // Laboratory procedures module
  laboratoryProceduresContent,
  // Regulations and contact lens design modules
  regulationsStandardsContent,
  contactLensDesignMaterialsContent,
  contactLensEducationFollowupContent,
  // ABO and NCLE specific modules
  dispensingMeasurementsContent,
  frameStylesSelectionContent,
  contactLensPreFittingContent,
  contactLensDesignsDetailedContent,
  contactLensFittingEvaluationContent,
  // Newly added prism content
  prismBasicsContent
} from '../../constants/studyContent';

// Map of topic IDs to their study content
const studyContentMap: Record<string, TopicStudyContent> = {
  'eye-anatomy': eyeAnatomyContent,
  'frame-basics': frameBasicsContent,
  'lens-basics': lensBasicsContent,
  'patient-communication': patientCommunicationContent,
  'pd-measurement': pdMeasurementContent,
  'prescription-analysis': prescriptionAnalysisContent,
  'prism': prismBasicsContent,
  'refractive-errors': refractiveErrorsContent,
  'lens-materials': lensMaterialsContent,
  'lens-coatings': lensCoatingsContent,
  'lens-designs': lensDesignsContent,
  'cl-overview': contactLensOverviewContent,
  'eye-anatomy-cl': eyeAnatomyClContent,
  // New content added
  'sports-vision': sportsVisionContent,
  'low-vision-aids': lowVisionAidsContent,
  // Newly added content
  'sunglasses-tints': sunglassesAndTintsContent,
  'frame-adjustment': frameAdjustmentContent,
  'children-eyewear': childrenEyewearContent,
  // Optical theory content
  'basic-optics': basicOpticsContent,
  'lens-types': lensTypesContent,
  // Now including all available content:
  'refractive-errors-advanced': refractiveErrorsAdvancedContent,
  'occupational-lenses': occupationalLensesContent,
  // New contact lens modules
  'cl-complications': contactLensComplicationsContent,
  'cl-care': contactLensCareContent,
  'cl-fitting': contactLensFittingContent,
  // Laboratory procedures module
  'laboratory-procedures': laboratoryProceduresContent,
  // Regulations and contact lens design modules
  'regulations-standards': regulationsStandardsContent,
  'contact-lens-design-materials': contactLensDesignMaterialsContent,
  'contact-lens-education-followup': contactLensEducationFollowupContent,
  // ABO and NCLE specific modules
  'dispensing-measurements': dispensingMeasurementsContent,
  'frame-styles-selection': frameStylesSelectionContent,
  'cl-pre-fitting': contactLensPreFittingContent,
  'cl-designs-detailed': contactLensDesignsDetailedContent,
  'cl-fitting-evaluation': contactLensFittingEvaluationContent
};

class StudyContentService {
  /**
   * Get study content for a specific topic
   * @param topicId The ID of the topic to get content for
   * @returns The study content for the topic, or undefined if not found
   */
  getStudyContent(topicId: string): TopicStudyContent | undefined {
    return studyContentMap[topicId];
  }

  /**
   * Check if study content exists for a topic
   * @param topicId The ID of the topic to check
   * @returns True if content exists, false otherwise
   */
  hasStudyContent(topicId: string): boolean {
    return !!studyContentMap[topicId];
  }

  /**
   * Get all topics that have study content
   * @returns Array of topic IDs that have content
   */
  getTopicsWithContent(): string[] {
    return Object.keys(studyContentMap);
  }

  /**
   * Create a fallback study content for topics that don't have dedicated content
   * This generates basic content structure from topic metadata
   * @param topicId The ID of the topic to create fallback content for
   * @param topic The topic object containing metadata
   * @returns A generated TopicStudyContent object
   */
  createFallbackContent(topicId: string, topic: any): TopicStudyContent {
    return {
      topicId: topicId,
      title: topic.title,
      introduction: `This is a comprehensive introduction to ${topic.title}. ${topic.description}`,
      objectives: [
        `Understand the fundamentals of ${topic.title}`,
        `Identify key principles related to ${topic.title}`,
        `Apply knowledge of ${topic.title} in practical scenarios`,
        `Recognize the relationship between ${topic.title} and other optical concepts`
      ],
      sections: [
        {
          id: `${topicId}-intro`,
          title: 'Introduction',
          type: 'introduction',
          content: [
            {
              id: `${topicId}-intro-p1`,
              type: 'paragraph',
              content: {
                text: topic.description,
                highlight: true
              }
            },
            {
              id: `${topicId}-intro-p2`,
              type: 'paragraph',
              content: {
                text: `This topic is essential for understanding optical principles and applications in the field.`
              }
            }
          ]
        },
        {
          id: `${topicId}-main`,
          title: 'Main Concepts',
          type: 'main',
          content: topic.keyPoints.map((point: string, index: number) => ({
            id: `${topicId}-point-${index}`,
            type: 'paragraph',
            content: {
              text: point,
              highlight: index === 0
            }
          }))
        }
      ],
      summary: `${topic.title} is a critical area of study for optical professionals. Understanding these concepts will help in practical applications and exam preparation.`,
      references: [
        'American Board of Opticianry (ABO) Exam Guide',
        'National Contact Lens Examiners (NCLE) Study Materials',
        'Principles of Ophthalmic Lenses (4th Edition)'
      ]
    };
  }
}

export default new StudyContentService(); 