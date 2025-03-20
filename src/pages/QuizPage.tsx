import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  LinearProgress,
  Divider,
  Alert,
  AlertTitle,
  Paper,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  ArrowBack as ArrowBackIcon,
  Flag as FlagIcon,
  Help as HelpIcon,
  Timer as TimerIcon,
} from '@mui/icons-material';
import { 
  aboQuizQuestions, 
  ncleQuizQuestions, 
  getQuizQuestionsByCategory 
} from '../content/exam';
import { ExamQuestion } from '../interfaces/ExamQuestions';

interface QuizParams {
  examType: string; // 'abo' or 'ncle'
  section: string; // The section ID (e.g., 'opticalTheory', 'dispensing', etc.)
}

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const { examType, section } = useParams<keyof QuizParams>() as QuizParams;
  
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<number>(30 * 60); // 30 minutes in seconds
  const [showQuitDialog, setShowQuitDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Load questions based on exam type and section
  useEffect(() => {
    const fetchQuestions = () => {
      try {
        // Convert exam type to lowercase for consistency
        const formattedExamType = examType.toLowerCase() as 'abo' | 'ncle';
        
        // Get questions for the selected category
        let quizQuestions = getQuizQuestionsByCategory(formattedExamType, section);
        
        // If no questions are found, show an error or redirect
        if (!quizQuestions || quizQuestions.length === 0) {
          console.error('No questions found for this category');
          return;
        }
        
        // Shuffle the questions
        quizQuestions = shuffleArray(quizQuestions);
        
        // Initialize user answers array with nulls
        const initialUserAnswers = new Array(quizQuestions.length).fill(null);
        
        setQuestions(quizQuestions);
        setUserAnswers(initialUserAnswers);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading quiz questions:', error);
        setIsLoading(false);
      }
    };
    
    fetchQuestions();
  }, [examType, section]);
  
  // Timer countdown effect
  useEffect(() => {
    if (isLoading || quizCompleted) return;
    
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          submitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isLoading, quizCompleted]);
  
  // Format remaining time as MM:SS
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  // Handle answer selection
  const handleAnswerSelect = (answer: string) => {
    // Store the index of the selected answer option, not the text
    const answerIndex = currentQuestion.options.indexOf(answer);
    setSelectedAnswer(answerIndex.toString());
  };
  
  // Move to the next question
  const handleNextQuestion = () => {
    // Save the current answer
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(updatedUserAnswers);
    
    // Reset states
    setSelectedAnswer(null);
    setShowExplanation(false);
    
    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // If all questions are answered, ask to submit
      submitQuiz();
    }
  };
  
  // Move to the previous question
  const handlePreviousQuestion = () => {
    // Save the current answer
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(updatedUserAnswers);
    
    // Reset states
    setShowExplanation(false);
    
    // Move to the previous question
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // Load the previous answer
      setSelectedAnswer(updatedUserAnswers[currentQuestionIndex - 1]);
    }
  };
  
  // Toggle explanation visibility
  const handleShowExplanation = () => {
    setShowExplanation(!showExplanation);
  };
  
  // Toggle flagging a question
  const handleToggleFlag = () => {
    setFlaggedQuestions(prev => {
      if (prev.includes(currentQuestionIndex)) {
        return prev.filter(index => index !== currentQuestionIndex);
      } else {
        return [...prev, currentQuestionIndex];
      }
    });
  };
  
  // Submit the quiz and calculate results
  const submitQuiz = () => {
    // Save the last answer if not already saved
    if (selectedAnswer !== userAnswers[currentQuestionIndex]) {
      const finalUserAnswers = [...userAnswers];
      finalUserAnswers[currentQuestionIndex] = selectedAnswer;
      setUserAnswers(finalUserAnswers);
    }
    
    setQuizCompleted(true);
  };
  
  // Handle quiz retry
  const handleRetryQuiz = () => {
    // Reset all states
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setUserAnswers(new Array(questions.length).fill(null));
    setShowExplanation(false);
    setQuizCompleted(false);
    setFlaggedQuestions([]);
    setTimeRemaining(30 * 60); // Reset timer to 30 minutes
  };
  
  // Navigate back to exam prep page
  const handleBackToExamPrep = () => {
    navigate('/exam-prep');
  };
  
  // Calculate quiz results
  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    
    userAnswers.forEach((answer, index) => {
      if (answer === null) {
        unanswered++;
      } else if (parseInt(answer) === questions[index].correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });
    
    const score = Math.round((correct / questions.length) * 100);
    
    // Save results to localStorage for progress tracking
    const quizId = `${examType.toLowerCase()}-${section}`;
    const completedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes') || '[]');
    const quizResult = {
      id: quizId,
      score,
      date: new Date().toISOString(),
      correct,
      incorrect,
      unanswered
    };
    
    // Update or add the quiz result
    const existingIndex = completedQuizzes.findIndex((q: any) => q.id === quizId);
    if (existingIndex >= 0) {
      completedQuizzes[existingIndex] = quizResult;
    } else {
      completedQuizzes.push(quizResult);
    }
    
    localStorage.setItem('completedQuizzes', JSON.stringify(completedQuizzes));
    
    return {
      score,
      correct,
      incorrect,
      unanswered
    };
  };
  
  // Shuffle an array (Fisher-Yates algorithm)
  function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  
  // If still loading, show loading indicator
  if (isLoading) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="50vh">
          <Typography variant="h5" gutterBottom>
            Loading quiz questions...
          </Typography>
          <LinearProgress sx={{ width: '50%', mt: 2 }} />
        </Box>
      </Container>
    );
  }
  
  // If no questions are found, show error message
  if (questions.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="50vh">
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            <AlertTitle>Error</AlertTitle>
            No questions found for this quiz. Please try another section.
          </Alert>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={handleBackToExamPrep}
          >
            Back to Exam Prep
          </Button>
        </Box>
      </Container>
    );
  }
  
  // If quiz is completed, show results
  if (quizCompleted) {
    const results = calculateResults();
    
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Quiz Results
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            py: 3 
          }}>
            <Typography variant="h2" color={results.score >= 70 ? 'success.main' : 'error.main'}>
              {results.score}%
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {results.score >= 70 ? 'Congratulations!' : 'Keep practicing!'}
            </Typography>
            
            <Grid container spacing={2} sx={{ mt: 2, maxWidth: 500 }}>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Chip
                    icon={<CheckCircleIcon />}
                    label={results.correct}
                    color="success"
                    sx={{ width: '100%' }}
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Correct
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Chip
                    icon={<CancelIcon />}
                    label={results.incorrect}
                    color="error"
                    sx={{ width: '100%' }}
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Incorrect
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Chip
                    icon={<HelpIcon />}
                    label={results.unanswered}
                    color="default"
                    sx={{ width: '100%' }}
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Unanswered
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          
          <Divider sx={{ my: 3 }} />
          
          <Typography variant="h6" gutterBottom>
            Question Review
          </Typography>
          
          <List>
            {questions.map((question, index) => (
              <ListItem 
                key={index}
                sx={{ 
                  borderLeft: '4px solid',
                  borderColor: userAnswers[index] === null
                    ? 'grey.400'
                    : parseInt(userAnswers[index]) === question.correctAnswer
                      ? 'success.main'
                      : 'error.main',
                  mb: 2,
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                  boxShadow: 1
                }}
              >
                <ListItemIcon>
                  {userAnswers[index] === null ? (
                    <HelpIcon color="action" />
                  ) : parseInt(userAnswers[index]) === question.correctAnswer ? (
                    <CheckCircleIcon color="success" />
                  ) : (
                    <CancelIcon color="error" />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={question.question}
                  secondary={
                    <>
                      <Typography variant="body2" component="span" color="text.primary">
                        {userAnswers[index] === null
                          ? 'Unanswered'
                          : `Your answer: ${question.options[parseInt(userAnswers[index])]}`}
                      </Typography>
                      {userAnswers[index] !== null && parseInt(userAnswers[index]) !== question.correctAnswer && (
                        <Typography 
                          variant="body2" 
                          component="span" 
                          color="success.main"
                          sx={{ display: 'block' }}
                        >
                          Correct answer: {question.options[question.correctAnswer]}
                        </Typography>
                      )}
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ mt: 1, fontStyle: 'italic' }}
                      >
                        {question.explanation}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={handleBackToExamPrep}
            >
              Back to Exam Prep
            </Button>
            
            <Button
              variant="contained"
              onClick={handleRetryQuiz}
            >
              Retry Quiz
            </Button>
          </Box>
        </Paper>
      </Container>
    );
  }
  
  // Main quiz interface
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => setShowQuitDialog(true)}
        >
          Exit Quiz
        </Button>
        
        <Box display="flex" alignItems="center">
          <TimerIcon color="action" sx={{ mr: 1 }} />
          <Typography variant="h6" color={timeRemaining < 300 ? 'error.main' : 'text.primary'}>
            {formatTime(timeRemaining)}
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{ mb: 2 }}>
        <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: 5 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Question {currentQuestionIndex + 1} of {questions.length}
          </Typography>
          <Box display="flex" alignItems="center">
            <Button
              size="small"
              startIcon={<FlagIcon color={flaggedQuestions.includes(currentQuestionIndex) ? "error" : "action"} />}
              onClick={handleToggleFlag}
            >
              {flaggedQuestions.includes(currentQuestionIndex) ? 'Unflag' : 'Flag'}
            </Button>
          </Box>
        </Box>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {currentQuestion.question}
          </Typography>
          
          <Box sx={{ mt: 3 }}>
            <RadioGroup
              value={selectedAnswer ? currentQuestion.options[parseInt(selectedAnswer)] : ''}
              onChange={(e) => handleAnswerSelect(e.target.value)}
            >
              {currentQuestion.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                  sx={{ mb: 1 }}
                />
              ))}
            </RadioGroup>
          </Box>
          
          {showExplanation && (
            <Alert severity="info" sx={{ mt: 3 }}>
              <AlertTitle>Explanation</AlertTitle>
              {currentQuestion.explanation}
            </Alert>
          )}
        </CardContent>
      </Card>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button
          variant="outlined"
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        
        <Button
          variant="outlined"
          onClick={handleShowExplanation}
          disabled={!selectedAnswer}
        >
          {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
        </Button>
        
        <Button
          variant="contained"
          onClick={handleNextQuestion}
          disabled={!selectedAnswer}
        >
          {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish Quiz'}
        </Button>
      </Box>
      
      {/* Quit confirmation dialog */}
      <Dialog
        open={showQuitDialog}
        onClose={() => setShowQuitDialog(false)}
      >
        <DialogTitle>Quit Quiz?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to quit this quiz? Your progress will not be saved.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowQuitDialog(false)}>Cancel</Button>
          <Button onClick={handleBackToExamPrep} color="error">
            Quit Quiz
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default QuizPage; 