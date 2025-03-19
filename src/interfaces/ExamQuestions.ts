export interface ExamQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  subcategory?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  imageUrl?: string;
}

export interface ExamCategory {
  id: string;
  title: string;
  description: string;
  subcategories?: {
    id: string;
    title: string;
    description: string;
  }[];
}

export interface ExamType {
  id: 'abo' | 'ncle';
  title: string;
  description: string;
  categories: ExamCategory[];
}

export interface ExamSession {
  id: string;
  examType: 'abo' | 'ncle';
  startTime: Date;
  endTime?: Date;
  questions: string[]; // IDs of questions
  answers: Record<string, number>; // Question ID -> selected answer index
  complete: boolean;
  score?: {
    total: number;
    byCategory: Record<string, number>; // Category ID -> score in percentage
  };
}

export type ExamQuestionBank = Record<string, ExamQuestion>; // Question ID -> Question 