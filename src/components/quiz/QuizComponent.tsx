import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Card,
  CardContent,
  CardActions,
  CircularProgress,
  Divider,
  Stack,
  Alert,
  Stepper,
  Step,
  StepLabel,
  IconButton
} from '@mui/material';
import {
  ArrowBack as BackIcon,
  ArrowForward as NextIcon,
  CheckCircle as CorrectIcon,
  Cancel as WrongIcon,
  Refresh as ResetIcon
} from '@mui/icons-material';
import StudyProgressService from '../../services/study/StudyProgressService';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
}

interface QuizComponentProps {
  topicId: string;
  questions: QuizQuestion[];
  onComplete?: (score: number) => void;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ topicId, questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isSubmitted) return;
    
    const answerIndex = parseInt(event.target.value, 10);
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
    }
  };

  const handleSubmit = () => {
    // Calculate score
    let correctCount = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selectedAnswers[i] === questions[i].correctAnswer) {
        correctCount++;
      }
    }
    
    const finalScore = Math.round((correctCount / questions.length) * 100);
    setScore(finalScore);
    setIsSubmitted(true);
    
    // Save to progress
    StudyProgressService.saveQuizScore(topicId, finalScore);
    
    if (onComplete) {
      onComplete(finalScore);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(questions.length).fill(null));
    setIsSubmitted(false);
    setScore(null);
    setShowExplanation(false);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const isCorrect = isSubmitted && selectedAnswer === currentQuestion.correctAnswer;
  const isWrong = isSubmitted && selectedAnswer !== null && !isCorrect;
  const isAnswered = selectedAnswer !== null;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const allQuestionsAnswered = selectedAnswers.every(answer => answer !== null);

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Topic Quiz
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Test your knowledge of this topic with these practice questions.
        </Typography>

        <Stepper 
          activeStep={currentQuestionIndex} 
          alternativeLabel 
          sx={{ mb: 3, overflowX: 'auto', py: 2 }}
        >
          {questions.map((_, index) => (
            <Step 
              key={index} 
              completed={selectedAnswers[index] !== null}
              sx={{ 
                cursor: 'pointer',
                '& .MuiStepLabel-root': { cursor: 'pointer' }
              }}
              onClick={() => !isSubmitted && setCurrentQuestionIndex(index)}
            >
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box mb={3}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="subtitle1">
              Question {currentQuestionIndex + 1} of {questions.length}
            </Typography>
            {isSubmitted && score !== null && (
              <Typography variant="subtitle1" color={score >= 80 ? "success.main" : "warning.main"}>
                Score: {score}%
              </Typography>
            )}
          </Stack>
          
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {currentQuestion.question}
              </Typography>
              
              <FormControl component="fieldset" sx={{ width: '100%', mt: 2 }}>
                <RadioGroup 
                  value={selectedAnswer === null ? '' : selectedAnswer.toString()} 
                  onChange={handleAnswerChange}
                >
                  {currentQuestion.options.map((option, index) => (
                    <FormControlLabel 
                      key={index} 
                      value={index.toString()} 
                      control={<Radio />} 
                      label={
                        <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                          {option}
                          {isSubmitted && index === currentQuestion.correctAnswer && (
                            <CorrectIcon color="success" sx={{ ml: 1 }} />
                          )}
                          {isSubmitted && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                            <WrongIcon color="error" sx={{ ml: 1 }} />
                          )}
                        </Box>
                      }
                      disabled={isSubmitted}
                      sx={{
                        my: 1,
                        p: 1,
                        borderRadius: 1,
                        bgcolor: isSubmitted ? 
                          index === currentQuestion.correctAnswer ? 
                            'success.light' 
                            : index === selectedAnswer ? 
                              'error.light' 
                              : 'transparent'
                          : 'transparent',
                        '&:hover': {
                          bgcolor: isSubmitted ? 
                            index === currentQuestion.correctAnswer ? 
                              'success.light' 
                              : index === selectedAnswer ? 
                                'error.light' 
                                : 'action.hover'
                            : 'action.hover'
                        }
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              
              {isSubmitted && (
                <Box mt={3}>
                  <Button 
                    variant="text" 
                    color="primary" 
                    onClick={() => setShowExplanation(!showExplanation)}
                    sx={{ mb: 1 }}
                  >
                    {showExplanation ? "Hide Explanation" : "Show Explanation"}
                  </Button>
                  
                  {showExplanation && (
                    <Alert severity={isCorrect ? "success" : "info"} sx={{ mt: 1 }}>
                      <Typography variant="body2">
                        {currentQuestion.explanation}
                      </Typography>
                    </Alert>
                  )}
                </Box>
              )}
            </CardContent>
            
            <CardActions sx={{ px: 2, pb: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Button 
                startIcon={<BackIcon />}
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </Button>
              
              <Box>
                {!isSubmitted ? (
                  isLastQuestion ? (
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={handleSubmit}
                      disabled={!allQuestionsAnswered}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button 
                      endIcon={<NextIcon />}
                      variant="contained" 
                      onClick={handleNext}
                      disabled={!isAnswered}
                    >
                      Next
                    </Button>
                  )
                ) : (
                  <Button 
                    startIcon={<ResetIcon />}
                    variant="outlined" 
                    onClick={handleReset}
                  >
                    Reset Quiz
                  </Button>
                )}
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Paper>
      
      {isSubmitted && score !== null && (
        <Paper sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Quiz Complete!
          </Typography>
          
          <Box sx={{ position: 'relative', display: 'inline-block', my: 2 }}>
            <CircularProgress 
              variant="determinate" 
              value={100} 
              size={120} 
              thickness={4}
              sx={{ color: 'grey.300' }}
            />
            <CircularProgress 
              variant="determinate" 
              value={score} 
              size={120} 
              thickness={4}
              sx={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                color: score >= 80 ? 'success.main' : score >= 60 ? 'warning.main' : 'error.main'
              }}
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
                {score}%
              </Typography>
            </Box>
          </Box>
          
          <Typography variant="body1" paragraph>
            You answered {selectedAnswers.filter((answer, index) => 
              answer === questions[index].correctAnswer
            ).length} out of {questions.length} questions correctly.
          </Typography>
          
          <Box sx={{ mt: 3 }}>
            {score >= 80 ? (
              <Alert severity="success" sx={{ mb: 2 }}>
                Great job! You've mastered this topic.
              </Alert>
            ) : score >= 60 ? (
              <Alert severity="warning" sx={{ mb: 2 }}>
                Good effort! Review the questions you missed and try again.
              </Alert>
            ) : (
              <Alert severity="info" sx={{ mb: 2 }}>
                You might need more study on this topic. Review the content and try again.
              </Alert>
            )}
            
            <Button variant="contained" onClick={handleReset} sx={{ mr: 2 }}>
              Retake Quiz
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default QuizComponent; 