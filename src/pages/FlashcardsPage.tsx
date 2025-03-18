import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  CardActions,
  Divider,
  Tabs,
  Tab,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  IconButton,
  CircularProgress
} from '@mui/material';
import {
  FlipToBack as FlipIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  School as SchoolIcon,
  FilterList as FilterIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon
} from '@mui/icons-material';
import { aboExamSections } from '../constants/aboTopics';
import { ncleExamSections } from '../constants/ncleTopics';

// Interface for flashcard data
interface Flashcard {
  id: string;
  term: string;
  definition: string;
  examType: 'ABO' | 'NCLE';
  section: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  bookmarked?: boolean;
}

// Generate flashcards from the topic data
const generateFlashcards = (): Flashcard[] => {
  const flashcards: Flashcard[] = [];
  
  // Generate ABO flashcards
  aboExamSections.forEach(section => {
    section.topics.forEach(topic => {
      // Create a main topic flashcard
      flashcards.push({
        id: `abo-${topic.id}-main`,
        term: topic.title,
        definition: topic.description,
        examType: 'ABO',
        section: section.id,
        difficulty: topic.difficulty
      });
      
      // Create flashcards for key points
      topic.keyPoints.forEach((point, index) => {
        flashcards.push({
          id: `abo-${topic.id}-kp-${index}`,
          term: `${topic.title}: Key Point`,
          definition: point,
          examType: 'ABO',
          section: section.id,
          difficulty: topic.difficulty
        });
      });
    });
  });
  
  // Generate NCLE flashcards
  ncleExamSections.forEach(section => {
    section.topics.forEach(topic => {
      // Create a main topic flashcard
      flashcards.push({
        id: `ncle-${topic.id}-main`,
        term: topic.title,
        definition: topic.description,
        examType: 'NCLE',
        section: section.id,
        difficulty: topic.difficulty
      });
      
      // Create flashcards for key points
      topic.keyPoints.forEach((point, index) => {
        flashcards.push({
          id: `ncle-${topic.id}-kp-${index}`,
          term: `${topic.title}: Key Point`,
          definition: point,
          examType: 'NCLE',
          section: section.id,
          difficulty: topic.difficulty
        });
      });
    });
  });
  
  return flashcards;
};

const FlashcardsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [filteredCards, setFilteredCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [examType, setExamType] = useState<string>('all');
  const [difficulty, setDifficulty] = useState<string>('all');
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  
  // Load flashcards on component mount
  useEffect(() => {
    setLoading(true);
    
    // In a real app, this would come from an API
    const cards = generateFlashcards();
    
    // Get bookmarked state from localStorage
    const bookmarkedIds = JSON.parse(localStorage.getItem('bookmarkedFlashcards') || '[]');
    
    // Apply bookmarked state
    const cardsWithBookmarks = cards.map(card => ({
      ...card,
      bookmarked: bookmarkedIds.includes(card.id)
    }));
    
    setFlashcards(cardsWithBookmarks);
    setFilteredCards(cardsWithBookmarks);
    setLoading(false);
  }, []);
  
  // Apply filters when they change
  useEffect(() => {
    const filtered = flashcards.filter(card => {
      const matchesExamType = examType === 'all' || card.examType === examType;
      const matchesDifficulty = difficulty === 'all' || card.difficulty === difficulty;
      const matchesBookmark = !onlyBookmarked || card.bookmarked;
      
      return matchesExamType && matchesDifficulty && matchesBookmark;
    });
    
    setFilteredCards(filtered);
    setCurrentIndex(0);
    setFlipped(false);
  }, [examType, difficulty, onlyBookmarked, flashcards]);
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
  const handleExamTypeChange = (event: SelectChangeEvent) => {
    setExamType(event.target.value);
  };
  
  const handleDifficultyChange = (event: SelectChangeEvent) => {
    setDifficulty(event.target.value);
  };
  
  const toggleBookmark = (id: string) => {
    // Update state
    const updatedCards = flashcards.map(card => 
      card.id === id ? { ...card, bookmarked: !card.bookmarked } : card
    );
    setFlashcards(updatedCards);
    
    // Update localStorage
    const bookmarkedIds = updatedCards
      .filter(card => card.bookmarked)
      .map(card => card.id);
    
    localStorage.setItem('bookmarkedFlashcards', JSON.stringify(bookmarkedIds));
  };
  
  const toggleShowBookmarked = () => {
    setOnlyBookmarked(!onlyBookmarked);
  };
  
  const flipCard = () => {
    setFlipped(!flipped);
  };
  
  const nextCard = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    }
  };
  
  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };
  
  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        ABO-NCLE Flashcards
      </Typography>
      
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Study key concepts with these interactive flashcards. Click cards to flip between terms and definitions.
      </Typography>
      
      <Paper sx={{ p: 3, mb: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label="Study Flashcards" />
          <Tab label="Browse All" />
        </Tabs>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="exam-type-label">Exam Type</InputLabel>
              <Select
                labelId="exam-type-label"
                id="exam-type-select"
                value={examType}
                label="Exam Type"
                onChange={handleExamTypeChange}
              >
                <MenuItem value="all">All Exams</MenuItem>
                <MenuItem value="ABO">ABO</MenuItem>
                <MenuItem value="NCLE">NCLE</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="difficulty-label">Difficulty</InputLabel>
              <Select
                labelId="difficulty-label"
                id="difficulty-select"
                value={difficulty}
                label="Difficulty"
                onChange={handleDifficultyChange}
              >
                <MenuItem value="all">All Levels</MenuItem>
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Button
              fullWidth
              variant={onlyBookmarked ? "contained" : "outlined"}
              color="primary"
              startIcon={onlyBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
              onClick={toggleShowBookmarked}
              sx={{ height: '56px' }}
            >
              {onlyBookmarked ? "Showing Bookmarked" : "Show Bookmarked"}
            </Button>
          </Grid>
        </Grid>
        
        <Box mt={2} display="flex" alignItems="center">
          <Typography>
            {filteredCards.length} flashcards available
          </Typography>
          <Chip 
            label={`${flashcards.filter(c => c.bookmarked).length} Bookmarked`}
            color="primary"
            variant="outlined"
            sx={{ ml: 2 }}
          />
        </Box>
      </Paper>
      
      {filteredCards.length > 0 ? (
        <>
          {tabValue === 0 ? (
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Card {currentIndex + 1} of {filteredCards.length}
              </Typography>
              
              <Card 
                sx={{ 
                  height: 350, 
                  display: 'flex', 
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.6s',
                  perspective: 1000,
                  backgroundColor: flipped ? '#f0f8ff' : 'white'
                }}
                onClick={flipCard}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 4 }}>
                  <Box position="absolute" top={10} right={10}>
                    <IconButton 
                      color="primary" 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(filteredCards[currentIndex].id);
                      }}
                    >
                      {filteredCards[currentIndex].bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                  </Box>
                  
                  <Box display="flex" alignItems="center" mb={2}>
                    <Chip 
                      label={filteredCards[currentIndex].examType} 
                      color={filteredCards[currentIndex].examType === 'ABO' ? 'primary' : 'secondary'} 
                      size="small" 
                      sx={{ mr: 1 }}
                    />
                    <Chip 
                      label={filteredCards[currentIndex].difficulty} 
                      color="default" 
                      size="small" 
                    />
                  </Box>
                  
                  <Typography variant={flipped ? 'body1' : 'h5'} align="center" sx={{ mb: 2 }}>
                    {flipped ? 'Definition:' : 'Term:'}
                  </Typography>
                  
                  <Typography variant={flipped ? 'body1' : 'h6'} align="center">
                    {flipped ? filteredCards[currentIndex].definition : filteredCards[currentIndex].term}
                  </Typography>
                  
                  <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Chip icon={<FlipIcon />} label="Click to flip" variant="outlined" />
                  </Box>
                </CardContent>
                
                <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                  <Button 
                    startIcon={<ArrowBackIcon />} 
                    disabled={currentIndex === 0}
                    onClick={(e) => {
                      e.stopPropagation();
                      prevCard();
                    }}
                  >
                    Previous
                  </Button>
                  
                  <Button 
                    endIcon={<ArrowForwardIcon />} 
                    disabled={currentIndex === filteredCards.length - 1}
                    onClick={(e) => {
                      e.stopPropagation();
                      nextCard();
                    }}
                  >
                    Next
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ) : (
            <Grid container spacing={2}>
              {filteredCards.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={card.id}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                        <Box>
                          <Chip 
                            label={card.examType} 
                            color={card.examType === 'ABO' ? 'primary' : 'secondary'} 
                            size="small" 
                            sx={{ mr: 1 }}
                          />
                          <Chip 
                            label={card.difficulty} 
                            color="default" 
                            size="small" 
                          />
                        </Box>
                        
                        <IconButton 
                          color="primary"
                          onClick={() => toggleBookmark(card.id)}
                        >
                          {card.bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                        </IconButton>
                      </Box>
                      
                      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                        {card.term}
                      </Typography>
                      
                      <Divider sx={{ my: 1 }} />
                      
                      <Typography variant="body2" color="text.secondary">
                        {card.definition}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </>
      ) : (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            No flashcards match your current filters
          </Typography>
          <Button 
            variant="contained" 
            sx={{ mt: 2 }}
            onClick={() => {
              setExamType('all');
              setDifficulty('all');
              setOnlyBookmarked(false);
            }}
          >
            Reset Filters
          </Button>
        </Paper>
      )}
    </Container>
  );
};

export default FlashcardsPage; 