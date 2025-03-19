export interface StudyContentSection {
  id: string;
  title: string;
  type: 'introduction' | 'main' | 'advanced' | 'summary' | 'clinical' | 'interactive';
  content: StudyContentElement[];
}

export interface StudyContentElement {
  id: string;
  type: 'paragraph' | 'heading' | 'image' | 'list' | 'definition' | 'callout' | 'table' | 'video' | 'interactive';
  content: any;
}

export interface StudyParagraph {
  text: string;
  highlight?: boolean;
}

export interface StudyHeading {
  text: string;
  level: 2 | 3 | 4 | 5;
}

export interface StudyImage {
  src: string;
  alt: string;
  caption?: string;
  width?: string | number;
  height?: string | number;
}

export interface StudyList {
  items: string[];
  ordered?: boolean;
}

export interface StudyDefinition {
  term: string;
  definition: string;
  related?: string[];
}

export interface StudyCallout {
  type: 'info' | 'warning' | 'tip' | 'note' | 'important';
  title?: string;
  text: string;
}

export interface StudyTable {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface StudyVideo {
  src: string;
  title: string;
  posterImage?: string;
  duration?: string;
}

export interface StudyInteractive {
  type: 'quiz' | 'flashcard' | 'simulation' | 'calculator';
  data: any;
}

export interface TopicStudyContent {
  topicId: string;
  title: string;
  introduction: string;
  objectives: string[];
  sections: StudyContentSection[];
  summary: string;
  references?: string[];
  practiceQuestions?: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
  }[];
} 