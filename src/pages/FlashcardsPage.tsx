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
  CircularProgress,
  Tooltip,
  CardMedia,
  CardHeader,
  Link,
  Collapse,
  Stack
} from '@mui/material';
import {
  FlipToBack as FlipIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  School as SchoolIcon,
  FilterList as FilterIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  Info as InfoIcon,
  AddCircleOutline as AddDetailsIcon,
  LinkOutlined as LinkIcon
} from '@mui/icons-material';
import { allFlashcards, flashcardCategories, FlashcardData } from '../content/flashcards';

// Interface for local flashcard state with bookmark status
interface FlashcardWithBookmark extends FlashcardData {
  bookmarked: boolean;
}

const FlashcardsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [flashcards, setFlashcards] = useState<FlashcardWithBookmark[]>([]);
  const [filteredCards, setFilteredCards] = useState<FlashcardWithBookmark[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [examType, setExamType] = useState<string>('all');
  const [category, setCategory] = useState<string>('all');
  const [difficulty, setDifficulty] = useState<string>('all');
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  
  // Load flashcards on component mount
  useEffect(() => {
    setLoading(true);
    
    // Get bookmarked state from localStorage
    const bookmarkedIds = JSON.parse(localStorage.getItem('bookmarkedFlashcards') || '[]');
    
    // Apply bookmarked state to our enhanced flashcards
    const cardsWithBookmarks = allFlashcards.map(card => ({
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
      const matchesCategory = category === 'all' || card.category.toLowerCase() === category.toLowerCase();
      const matchesDifficulty = difficulty === 'all' || card.difficulty === difficulty;
      const matchesBookmark = !onlyBookmarked || card.bookmarked;
      
      return matchesExamType && matchesCategory && matchesDifficulty && matchesBookmark;
    });
    
    setFilteredCards(filtered);
    setCurrentIndex(0);
    setFlipped(false);
    setShowDetails(false);
  }, [examType, category, difficulty, onlyBookmarked, flashcards]);
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
  const handleExamTypeChange = (event: SelectChangeEvent) => {
    setExamType(event.target.value);
    setCategory('all'); // Reset category when exam type changes
  };
  
  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
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
  
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
  const nextCard = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
      setShowDetails(false);
    }
  };
  
  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
      setShowDetails(false);
    }
  };
  
  if (loading) {
    return (
      <Container maxWidth={false}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }
  
  // Available categories based on selected exam type
  const availableCategories = examType === 'all' 
    ? flashcardCategories 
    : flashcardCategories.filter(cat => cat.examType === examType || cat.examType === 'both');
  
  return (
    <Container maxWidth={false} sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        ABO-NCLE Flashcards
      </Typography>
      
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Study key concepts with these comprehensive flashcards. Cards include detailed explanations, real-world examples, and technical details.
      </Typography>
      
      <Paper sx={{ p: 3, mb: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label="Study Flashcards" />
          <Tab label="Browse All" />
        </Tabs>
        
        {tabValue === 0 && (
          <Box>
            {filteredCards.length > 0 ? (
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Paper 
                    elevation={3} 
                    sx={{ 
                      height: '100%',
                      borderRadius: 2,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    <Card 
                      sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column',
                        position: 'relative'
                      }}
                    >
                      <Box sx={{ position: 'relative' }}>
                        {filteredCards[currentIndex].imageUrl && !flipped && (
                          <CardMedia
                            component="img"
                            height="140"
                            image={filteredCards[currentIndex].imageUrl}
                            alt={filteredCards[currentIndex].term}
                          />
                        )}
                        <CardHeader
                          action={
                            <IconButton 
                              aria-label="bookmark" 
                              onClick={() => toggleBookmark(filteredCards[currentIndex].id)}
                            >
                              {filteredCards[currentIndex].bookmarked ? 
                                <BookmarkIcon color="primary" /> : 
                                <BookmarkBorderIcon />
                              }
                            </IconButton>
                          }
                          title={
                            <Box display="flex" alignItems="center">
                              <Typography variant="h6">
                                {flipped ? "Definition" : filteredCards[currentIndex].term}
                              </Typography>
                              <Chip 
                                label={filteredCards[currentIndex].examType} 
                                size="small" 
                                color={filteredCards[currentIndex].examType === 'ABO' ? 'primary' : 'secondary'}
                                sx={{ ml: 1 }}
                              />
                              <Chip 
                                label={filteredCards[currentIndex].difficulty} 
                                size="small" 
                                color="default"
                                sx={{ ml: 1 }}
                              />
                            </Box>
                          }
                          subheader={!flipped ? `Category: ${filteredCards[currentIndex].category}` : null}
                        />
                      </Box>
                      
                      <CardContent sx={{ flexGrow: 1, pt: 1, pb: 1 }}>
                        <Box 
                          sx={{ 
                            minHeight: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                          }}
                        >
                          <Typography variant="body1" gutterBottom>
                            {flipped ? filteredCards[currentIndex].definition : (
                              <Box 
                                sx={{
                                  height: '100%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  cursor: 'pointer',
                                  p: 4
                                }}
                                onClick={flipCard}
                              >
                                <Typography variant="body2" color="text.secondary" align="center">
                                  (Click anywhere on card to see definition)
                                </Typography>
                              </Box>
                            )}
                          </Typography>
                          
                          {flipped && (
                            <Collapse in={showDetails}>
                              <Box sx={{ mt: 3 }}>
                                <Typography variant="subtitle1" color="primary" gutterBottom>
                                  Details:
                                </Typography>
                                <Typography variant="body2" paragraph>
                                  {filteredCards[currentIndex].details}
                                </Typography>
                                
                                <Typography variant="subtitle1" color="primary" gutterBottom>
                                  Example:
                                </Typography>
                                <Typography variant="body2" paragraph>
                                  {filteredCards[currentIndex].example}
                                </Typography>
                                
                                {filteredCards[currentIndex].furtherReading && (
                                  <Box sx={{ mt: 2 }}>
                                    <Typography variant="subtitle2" color="text.secondary">
                                      <LinkIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                                      Further Reading: {filteredCards[currentIndex].furtherReading}
                                    </Typography>
                                  </Box>
                                )}
                              </Box>
                            </Collapse>
                          )}
                        </Box>
                      </CardContent>
                      
                      <Divider />
                      
                      <CardActions disableSpacing>
                        <Button 
                          startIcon={<ArrowBackIcon />} 
                          disabled={currentIndex === 0}
                          onClick={prevCard}
                        >
                          Previous
                        </Button>
                        <Button 
                          endIcon={<ArrowForwardIcon />} 
                          disabled={currentIndex === filteredCards.length - 1}
                          onClick={nextCard}
                          sx={{ ml: 'auto' }}
                        >
                          Next
                        </Button>
                        <IconButton onClick={flipCard}>
                          <FlipIcon />
                        </IconButton>
                        {flipped && (
                          <Tooltip title="Show detailed explanation">
                            <IconButton onClick={toggleDetails}>
                              <AddDetailsIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                      </CardActions>
                      
                      <Box sx={{ p: 2, bgcolor: 'background.default' }}>
                        <Typography variant="caption" color="text.secondary">
                          Card {currentIndex + 1} of {filteredCards.length}
                        </Typography>
                      </Box>
                    </Card>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      <FilterIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                      Filters
                    </Typography>
                    
                    <Stack spacing={2}>
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
                      
                      <FormControl fullWidth>
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select
                          labelId="category-label"
                          id="category-select"
                          value={category}
                          label="Category"
                          onChange={handleCategoryChange}
                        >
                          <MenuItem value="all">All Categories</MenuItem>
                          {availableCategories.map(cat => (
                            <MenuItem key={cat.id} value={cat.id}>
                              {cat.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      
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
                      
                      <Button 
                        variant={onlyBookmarked ? "contained" : "outlined"}
                        color="primary"
                        startIcon={onlyBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                        onClick={toggleShowBookmarked}
                        fullWidth
                      >
                        {onlyBookmarked ? "Showing Bookmarked" : "Show Bookmarked Only"}
                      </Button>
                    </Stack>
                    
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="body2" color="text.secondary">
                        {filteredCards.length} flashcards available
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {flashcards.filter(c => c.bookmarked).length} cards bookmarked
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                        <InfoIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                        Click cards to flip between term and definition. Use the details button to see examples and additional information.
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            ) : (
              <Box sx={{ textAlign: 'center', py: 5 }}>
                <SchoolIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                <Typography variant="h6" color="text.secondary">
                  No flashcards match your current filters
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  sx={{ mt: 2 }}
                  onClick={() => {
                    setExamType('all');
                    setCategory('all');
                    setDifficulty('all');
                    setOnlyBookmarked(false);
                  }}
                >
                  Reset Filters
                </Button>
              </Box>
            )}
          </Box>
        )}
        
        {tabValue === 1 && (
          <Box>
            <Grid container spacing={3} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="browse-exam-type-label">Exam Type</InputLabel>
                  <Select
                    labelId="browse-exam-type-label"
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
                  <InputLabel id="browse-category-label">Category</InputLabel>
                  <Select
                    labelId="browse-category-label"
                    value={category}
                    label="Category"
                    onChange={handleCategoryChange}
                  >
                    <MenuItem value="all">All Categories</MenuItem>
                    {availableCategories.map(cat => (
                      <MenuItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="browse-difficulty-label">Difficulty</InputLabel>
                  <Select
                    labelId="browse-difficulty-label"
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
            </Grid>
            
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" sx={{ mr: 2 }}>
                {filteredCards.length} cards found
              </Typography>
              
              <Button 
                variant={onlyBookmarked ? "contained" : "outlined"}
                size="small"
                color="primary"
                startIcon={onlyBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                onClick={toggleShowBookmarked}
              >
                {onlyBookmarked ? "Showing Bookmarked" : "Show Bookmarked"}
              </Button>
            </Box>
            
            <Grid container spacing={2}>
              {filteredCards.map((card, idx) => (
                <Grid item xs={12} sm={6} md={4} key={card.id}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardHeader
                      action={
                        <IconButton onClick={() => toggleBookmark(card.id)}>
                          {card.bookmarked ? <BookmarkIcon color="primary" /> : <BookmarkBorderIcon />}
                        </IconButton>
                      }
                      title={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="subtitle1" noWrap>
                            {card.term}
                          </Typography>
                          <Chip 
                            label={card.examType} 
                            size="small" 
                            color={card.examType === 'ABO' ? 'primary' : 'secondary'}
                            sx={{ ml: 1 }}
                          />
                        </Box>
                      }
                      subheader={card.category}
                    />
                    <CardContent sx={{ flexGrow: 1, pt: 0 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {card.definition.substring(0, 120)}...
                      </Typography>
                      <Chip 
                        label={card.difficulty} 
                        size="small" 
                        variant="outlined"
                      />
                    </CardContent>
                    <CardActions>
                      <Button 
                        size="small" 
                        onClick={() => {
                          setTabValue(0);
                          setCurrentIndex(idx);
                        }}
                      >
                        Study This Card
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
            {filteredCards.length === 0 && (
              <Box sx={{ textAlign: 'center', py: 5 }}>
                <SchoolIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                <Typography variant="h6" color="text.secondary">
                  No flashcards match your current filters
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  sx={{ mt: 2 }}
                  onClick={() => {
                    setExamType('all');
                    setCategory('all');
                    setDifficulty('all');
                    setOnlyBookmarked(false);
                  }}
                >
                  Reset Filters
                </Button>
              </Box>
            )}
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default FlashcardsPage;