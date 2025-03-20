/**
 * Interface for enhanced flashcard data with comprehensive content
 * Designed to help student opticians with detailed information and examples
 */
export interface FlashcardData {
  id: string;
  term: string;
  definition: string;
  details: string;
  example: string;
  examType: 'ABO' | 'NCLE';
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  imageUrl?: string;
  furtherReading?: string;
}

export interface FlashcardCategory {
  id: string;
  name: string;
  description: string;
  examType: 'ABO' | 'NCLE' | 'both';
} 