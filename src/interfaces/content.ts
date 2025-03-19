export interface ContentSection {
  id: string;
  title: string;
  description: string;
  sections: {
    title: string;
    content: string;
    keyPoints: string[];
  }[];
  practiceQuestions: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
  relatedTopics: string[];
} 