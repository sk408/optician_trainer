import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Divider,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  CircularProgress,
  Alert,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  Flag as FlagIcon,
  Home as HomeIcon,
  Timer as TimerIcon,
  Check as CheckIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { ExamQuestion, ExamSession } from '../interfaces/ExamQuestions';
import { generateFullExam, examStructures } from '../content/exam';
import { v4 as uuidv4 } from 'uuid';

const ComprehensiveExamPage: React.FC = () => {
  const { examType = 'abo' } = useParams<{ examType: 'abo' | 'ncle' }>();
  const navigate = useNavigate();
  
  // Exam state
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [timeRemaining, setTimeRemaining] = useState(150 * 60); // 150 minutes in seconds
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [examSession, setExamSession] = useState<ExamSession | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  
  // UI state
  const [confirmEndExam, setConfirmEndExam] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  
  // Load questions on component mount
  useEffect(() => {
    setLoading(true);
    
    try {
      // Generate a full exam with 150 questions
      const fullExam = generateFullExam(examType, 150);
      
      setQuestions(fullExam);
      
      // Create a new exam session
      const session: ExamSession = {
        id: uuidv4(),
        examType,
        startTime: new Date(),
        questions: fullExam.map(q => q.id),
        answers: {},
        complete: false
      };
      
      setExamSession(session);
      setTimeRemaining(150 * 60); // 2.5 hours in seconds
      setLoading(false);
    } catch (error) {
      console.error('Error loading exam:', error);
      setSnackbarMessage('Error loading exam questions. Please try again.');
      setSnackbarOpen(true);
      setLoading(false);
    }
  }, [examType]);
  
  // Timer effect
  useEffect(() => {
    if (!examStarted || examFinished || loading) return;
    
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto-submit when time runs out
          handleEndExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [examStarted, examFinished, loading]);
  
  // Handlers
  const handleStartExam = () => {
    setExamStarted(true);
  };
  
  const handleSelectAnswer = (questionId: string, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };
  
  const handleFlagQuestion = (questionId: string) => {
    setFlagged(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
    
    const action = flagged[questionId] ? 'unflagged' : 'flagged';
    setSnackbarMessage(`Question ${currentIndex + 1} ${action} for review`);
    setSnackbarOpen(true);
  };
  
  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowExplanation(false);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowExplanation(false);
    }
  };
  
  const handleJumpToQuestion = (index: number) => {
    setCurrentIndex(index);
    setShowExplanation(false);
  };
  
  const handleEndExam = () => {
    if (examSession) {
      const endTime = new Date();
      const score = calculateScore();
      
      const updatedSession: ExamSession = {
        ...examSession,
        endTime,
        answers,
        complete: true,
        score
      };
      
      // In a real app, save session to backend or localStorage
      setExamSession(updatedSession);
      saveExamSession(updatedSession);
      
      setExamFinished(true);
      setShowResults(true);
    }
  };
  
  const handleConfirmEndExam = () => {
    setConfirmEndExam(true);
  };
  
  const handleCloseConfirmDialog = () => {
    setConfirmEndExam(false);
  };
  
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  
  const handleToggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };
  
  const handleRestartExam = () => {
    navigate(0); // Refresh the page to restart
  };
  
  const handleGoHome = () => {
    navigate('/exam-prep');
  };
  
  // Helper functions
  const calculateScore = () => {
    const correctCount = questions.reduce((count, question) => {
      return answers[question.id] === question.correctAnswer ? count + 1 : count;
    }, 0);
    
    const totalScore = Math.round((correctCount / questions.length) * 100);
    
    // Calculate score by category
    const categoryScores: Record<string, number> = {};
    const categoryQuestions: Record<string, number> = {};
    const categoryCorrect: Record<string, number> = {};
    
    questions.forEach(question => {
      const { category } = question;
      
      if (!categoryQuestions[category]) {
        categoryQuestions[category] = 0;
        categoryCorrect[category] = 0;
      }
      
      categoryQuestions[category]++;
      
      if (answers[question.id] === question.correctAnswer) {
        categoryCorrect[category]++;
      }
    });
    
    Object.keys(categoryQuestions).forEach(category => {
      categoryScores[category] = Math.round(
        (categoryCorrect[category] / categoryQuestions[category]) * 100
      );
    });
    
    return {
      total: totalScore,
      byCategory: categoryScores
    };
  };
  
  const saveExamSession = (session: ExamSession) => {
    try {
      // Get existing completed exams from localStorage
      const completedExams = JSON.parse(localStorage.getItem('completedExams') || '[]');
      completedExams.push(session);
      
      // Save back to localStorage
      localStorage.setItem('completedExams', JSON.stringify(completedExams));
    } catch (error) {
      console.error('Error saving exam session:', error);
    }
  };
  
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const getAnsweredCount = () => {
    return Object.keys(answers).length;
  };
  
  const getFlaggedCount = () => {
    return Object.values(flagged).filter(Boolean).length;
  };
  
  const getCurrentQuestion = () => {
    return questions[currentIndex];
  };
  
  const isAnswered = (questionId: string) => {
    return answers[questionId] !== undefined;
  };
  
  const isFlagged = (questionId: string) => {
    return Boolean(flagged[questionId]);
  };
  
  const isCorrect = (questionId: string) => {
    return answers[questionId] === questions.find(q => q.id === questionId)?.correctAnswer;
  };
  
  if (loading) {
    return (
      <Container maxWidth={false} sx={{ py: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="70vh">
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>Loading exam questions...</Typography>
        </Box>
      </Container>
    );
  }
  
  // Introduction screen
  if (!examStarted && !examFinished) {
    return (
      <Container maxWidth={false} sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            {examType.toUpperCase()} Comprehensive Practice Exam
          </Typography>
          
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            This is a full-length practice exam that simulates the actual {examType.toUpperCase()} certification exam.
          </Typography>
          
          <Box my={3}>
            <Typography variant="h6" gutterBottom>Exam Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography><strong>Exam Type:</strong> {examStructures[examType].title}</Typography>
                <Typography><strong>Questions:</strong> {questions.length}</Typography>
                <Typography><strong>Time Limit:</strong> 2 hours 30 minutes</Typography>
                <Typography><strong>Passing Score:</strong> 70%</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography><strong>Format:</strong> Multiple choice</Typography>
                <Typography><strong>Difficulty:</strong> Mixed (easy, medium, hard)</Typography>
                <Typography><strong>Categories:</strong> {examStructures[examType].categories.length} main categories</Typography>
              </Grid>
            </Grid>
          </Box>
          
          <Box my={3}>
            <Typography variant="h6" gutterBottom>Instructions</Typography>
            <Typography paragraph>
              • Read each question carefully before selecting your answer.
            </Typography>
            <Typography paragraph>
              • You can flag questions to review later.
            </Typography>
            <Typography paragraph>
              • You can navigate between questions using the next/previous buttons or the question navigator.
            </Typography>
            <Typography paragraph>
              • Your answers are automatically saved as you progress.
            </Typography>
            <Typography paragraph>
              • When you're finished, click the "End Exam" button to submit your answers and see your results.
            </Typography>
            <Typography paragraph>
              • The timer will automatically submit your exam when time expires.
            </Typography>
          </Box>
          
          <Box display="flex" justifyContent="center" mt={4}>
            <Button 
              variant="contained" 
              size="large" 
              onClick={handleStartExam}
              startIcon={<TimerIcon />}
              color="primary"
            >
              Start Exam
            </Button>
          </Box>
        </Paper>
      </Container>
    );
  }
  
  // Results screen
  if (examFinished && showResults && examSession?.score) {
    const { total: totalScore, byCategory } = examSession.score;
    const isPassing = totalScore >= 70;
    
    return (
      <Container maxWidth={false} sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Exam Results
          </Typography>
          
          <Box my={3} textAlign="center">
            <Typography variant="h5" gutterBottom>Your Score</Typography>
            <Box sx={{ position: 'relative', display: 'inline-flex', m: 2 }}>
              <CircularProgress 
                variant="determinate" 
                value={totalScore} 
                size={120} 
                thickness={5} 
                color={isPassing ? 'success' : 'error'}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h4" component="div" color="text.secondary">
                  {totalScore}%
                </Typography>
              </Box>
            </Box>
            
            <Box mt={2}>
              <Chip 
                label={isPassing ? 'PASS' : 'FAIL'} 
                color={isPassing ? 'success' : 'error'} 
                icon={isPassing ? <CheckIcon /> : <CloseIcon />}
                sx={{ fontSize: '1rem', py: 1, px: 2 }}
              />
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                (Passing score: 70%)
              </Typography>
            </Box>
          </Box>
          
          <Box my={4}>
            <Typography variant="h6" gutterBottom>Score by Category</Typography>
            <Grid container spacing={2}>
              {examStructures[examType].categories.map(category => (
                <Grid item xs={12} md={6} key={category.id}>
                  <Card variant="outlined" sx={{ mb: 2 }}>
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        {category.title}
                      </Typography>
                      <LinearProgress 
                        variant="determinate" 
                        value={byCategory[category.id] || 0} 
                        color={byCategory[category.id] >= 70 ? 'success' : 'error'}
                        sx={{ height: 10, borderRadius: 5, mb: 1 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {byCategory[category.id] || 0}% ({byCategory[category.id] >= 70 ? 'Pass' : 'Needs Improvement'})
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          <Divider sx={{ my: 3 }} />
          
          <Box display="flex" justifyContent="center" gap={2}>
            <Button 
              variant="outlined" 
              startIcon={<HomeIcon />}
              onClick={handleGoHome}
            >
              Return to Study Dashboard
            </Button>
            <Button 
              variant="contained" 
              startIcon={<RestartIcon />}
              onClick={handleRestartExam}
            >
              Take Another Practice Exam
            </Button>
          </Box>
        </Paper>
      </Container>
    );
  }
  
  // Exam in progress
  const currentQuestion = getCurrentQuestion();
  
  return (
    <Container maxWidth={false} sx={{ py: 2 }}>
      {/* Exam Header */}
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6">
              {examType.toUpperCase()} Practice Exam
            </Typography>
          </Grid>
          
          <Grid item xs={6} md={4} textAlign="center">
            <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
              <TimerIcon color="primary" />
              <Typography variant="h6" fontFamily="monospace">
                {formatTime(timeRemaining)}
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={4} textAlign="right">
            <Button
              variant="contained"
              color="error"
              onClick={handleConfirmEndExam}
            >
              End Exam
            </Button>
          </Grid>
        </Grid>
      </Paper>
      
      {/* Progress Bar */}
      <Paper elevation={1} sx={{ p: 2, mb: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ width: '100%' }}>
              <LinearProgress 
                variant="determinate" 
                value={(getAnsweredCount() / questions.length) * 100}
                sx={{ height: 10, borderRadius: 5 }}
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography>
              {getAnsweredCount()} of {questions.length} answered | {getFlaggedCount()} flagged
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      
      <Grid container spacing={3}>
        {/* Question Panel */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3, minHeight: '60vh' }}>
            {/* Question Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6">
                Question {currentIndex + 1} of {questions.length}
              </Typography>
              
              <IconButton 
                color={isFlagged(currentQuestion.id) ? 'warning' : 'default'}
                onClick={() => handleFlagQuestion(currentQuestion.id)}
                title={isFlagged(currentQuestion.id) ? 'Unflag question' : 'Flag for review'}
              >
                <FlagIcon />
              </IconButton>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            {/* Question */}
            <Typography variant="body1" paragraph sx={{ fontWeight: 500 }}>
              {currentQuestion.question}
            </Typography>
            
            {/* Image if exists */}
            {currentQuestion.imageUrl && (
              <Box my={2} textAlign="center">
                <img 
                  src={currentQuestion.imageUrl} 
                  alt="Question visual aid" 
                  style={{ maxWidth: '100%', maxHeight: '300px' }}
                />
              </Box>
            )}
            
            {/* Answer Options */}
            <FormControl component="fieldset" sx={{ width: '100%', my: 2 }}>
              <RadioGroup
                value={answers[currentQuestion.id] ?? -1}
                onChange={(e) => handleSelectAnswer(currentQuestion.id, parseInt(e.target.value))}
              >
                {currentQuestion.options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={index}
                    control={<Radio />}
                    label={option}
                    sx={{
                      py: 1,
                      px: 2,
                      my: 0.5,
                      borderRadius: 1,
                      ...(showResults && {
                        bgcolor: index === currentQuestion.correctAnswer 
                          ? 'success.50' 
                          : (answers[currentQuestion.id] === index ? 'error.50' : 'transparent')
                      })
                    }}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            
            {/* Explanation (only shown after exam is finished) */}
            {examFinished && (
              <Box mt={3}>
                <Button 
                  variant="outlined"
                  onClick={handleToggleExplanation}
                  fullWidth
                >
                  {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
                </Button>
                
                {showExplanation && (
                  <Paper sx={{ p: 2, mt: 2, bgcolor: 'info.50' }}>
                    <Typography variant="subtitle2" gutterBottom>Explanation:</Typography>
                    <Typography variant="body2">{currentQuestion.explanation}</Typography>
                  </Paper>
                )}
              </Box>
            )}
            
            {/* Navigation */}
            <Box display="flex" justifyContent="space-between" mt={4}>
              <Button
                startIcon={<ArrowBackIcon />}
                onClick={handlePrevQuestion}
                disabled={currentIndex === 0}
              >
                Previous
              </Button>
              
              <Button
                endIcon={<ArrowForwardIcon />}
                onClick={handleNextQuestion}
                disabled={currentIndex === questions.length - 1}
              >
                Next
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        {/* Question Navigator */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" gutterBottom>Question Navigator</Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 2 }}>
              {questions.map((q, index) => (
                <Button
                  key={q.id}
                  variant="outlined"
                  size="small"
                  sx={{
                    minWidth: '40px',
                    height: '40px',
                    p: 0,
                    borderColor: isFlagged(q.id) ? 'warning.main' : 'divider',
                    bgcolor: 
                      currentIndex === index 
                        ? 'primary.main' 
                        : isAnswered(q.id) 
                          ? 'success.light' 
                          : 'background.paper',
                    color: 
                      currentIndex === index 
                        ? 'primary.contrastText' 
                        : isAnswered(q.id) 
                          ? 'success.contrastText' 
                          : 'text.primary',
                  }}
                  onClick={() => handleJumpToQuestion(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </Box>
            
            <Box mt={2}>
              <Typography variant="body2" gutterBottom>Legend:</Typography>
              <Box display="flex" flexWrap="wrap" gap={1}>
                <Chip size="small" label="Current" sx={{ bgcolor: 'primary.main', color: 'white' }} />
                <Chip size="small" label="Answered" sx={{ bgcolor: 'success.light', color: 'white' }} />
                <Chip size="small" label="Flagged" sx={{ borderColor: 'warning.main', color: 'warning.main' }} variant="outlined" />
                <Chip size="small" label="Unanswered" variant="outlined" />
              </Box>
            </Box>
          </Paper>
          
          {/* Exam Category Info */}
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Current Category:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              {examStructures[examType].categories.find(
                c => c.id === currentQuestion.category
              )?.title || 'Unknown Category'}
            </Typography>
            
            {currentQuestion.subcategory && (
              <>
                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                  Subcategory:
                </Typography>
                <Typography variant="body1">
                  {examStructures[examType].categories
                    .find(c => c.id === currentQuestion.category)
                    ?.subcategories?.find(sc => sc.id === currentQuestion.subcategory)
                    ?.title || 'Unknown Subcategory'}
                </Typography>
              </>
            )}
            
            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
              Difficulty:
            </Typography>
            <Chip 
              size="small" 
              label={currentQuestion.difficulty.toUpperCase()} 
              color={
                currentQuestion.difficulty === 'easy' 
                  ? 'success' 
                  : currentQuestion.difficulty === 'medium' 
                    ? 'warning' 
                    : 'error'
              }
            />
          </Paper>
        </Grid>
      </Grid>
      
      {/* Confirm End Exam Dialog */}
      <Dialog
        open={confirmEndExam}
        onClose={handleCloseConfirmDialog}
      >
        <DialogTitle>End Exam</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to end this exam?
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            You have answered {getAnsweredCount()} of {questions.length} questions.
            {getAnsweredCount() < questions.length && (
              <Typography color="error" sx={{ mt: 1 }}>
                Warning: You have {questions.length - getAnsweredCount()} unanswered questions.
              </Typography>
            )}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmDialog}>Cancel</Button>
          <Button onClick={handleEndExam} variant="contained" color="primary">
            End Exam
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={
          <IconButton
            size="small"
            color="inherit"
            onClick={handleCloseSnackbar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Container>
  );
};

// This is needed for the RestartIcon that's used in the Results screen
// You can replace with a different icon if you prefer
const RestartIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 9h7V2l-2.35 2.35z"/>
    </svg>
  );
};

export default ComprehensiveExamPage; 