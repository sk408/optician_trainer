import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
  CardMedia,
  Divider,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  CircularProgress
} from '@mui/material';
import {
  QuizOutlined as QuizIcon,
  AccessTime as TimeIcon,
  CheckCircle as CheckCircleIcon,
  School as SchoolIcon,
  Timer as TimerIcon
} from '@mui/icons-material';
import { aboExamSections } from '../constants/aboTopics';
import { ncleExamSections } from '../constants/ncleTopics';

// Interface for quiz data
interface QuizData {
  id: string;
  title: string;
  description: string;
  examType: 'ABO' | 'NCLE';
  section: string;
  numQuestions: number;
  estimatedTimeMinutes: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completed?: boolean;
  score?: number;
}

// Generate quizzes from the topic data
const generateQuizzes = (): QuizData[] => {
  const quizzes: QuizData[] = [];
  
  // Generate section quizzes for ABO
  aboExamSections.forEach(section => {
    quizzes.push({
      id: `abo-${section.id}`,
      title: `${section.title} Quiz`,
      description: `Test your knowledge on ${section.title.toLowerCase()} concepts`,
      examType: 'ABO',
      section: section.id,
      numQuestions: Math.round(section.weightPercentage / 5),
      estimatedTimeMinutes: Math.round(section.weightPercentage / 2),
      difficulty: 'beginner'
    });
  });
  
  // Generate section quizzes for NCLE
  ncleExamSections.forEach(section => {
    quizzes.push({
      id: `ncle-${section.id}`,
      title: `${section.title} Quiz`,
      description: `Test your knowledge on ${section.title.toLowerCase()} concepts`,
      examType: 'NCLE',
      section: section.id,
      numQuestions: Math.round(section.weightPercentage / 5),
      estimatedTimeMinutes: Math.round(section.weightPercentage / 2),
      difficulty: 'beginner'
    });
  });
  
  // Add full practice tests
  quizzes.push({
    id: 'abo-full-beginner',
    title: 'ABO Full Practice Exam (Beginner)',
    description: 'A complete simulation of the ABO certification exam with beginner-friendly questions',
    examType: 'ABO',
    section: 'full',
    numQuestions: 125,
    estimatedTimeMinutes: 150,
    difficulty: 'beginner'
  });
  
  quizzes.push({
    id: 'ncle-full-beginner',
    title: 'NCLE Full Practice Exam (Beginner)',
    description: 'A complete simulation of the NCLE certification exam with beginner-friendly questions',
    examType: 'NCLE',
    section: 'full',
    numQuestions: 125,
    estimatedTimeMinutes: 150,
    difficulty: 'beginner'
  });
  
  return quizzes;
};

const ExamPrepPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState<QuizData[]>([]);
  const [tabValue, setTabValue] = useState(0);
  
  // Load quizzes on component mount
  useEffect(() => {
    setLoading(true);
    
    // In a real app, this would come from an API
    const quizData = generateQuizzes();
    
    // Get completed quizzes from localStorage
    const completedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes') || '[]');
    const quizzesWithProgress = quizData.map(quiz => ({
      ...quiz,
      completed: completedQuizzes.some((cq: any) => cq.id === quiz.id),
      score: completedQuizzes.find((cq: any) => cq.id === quiz.id)?.score || 0
    }));
    
    setQuizzes(quizzesWithProgress);
    setLoading(false);
  }, []);
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
  // Filter quizzes based on active tab
  const filteredQuizzes = quizzes.filter(quiz => {
    if (tabValue === 0) return true; // All quizzes
    if (tabValue === 1) return quiz.examType === 'ABO'; // ABO quizzes
    if (tabValue === 2) return quiz.examType === 'NCLE'; // NCLE quizzes
    if (tabValue === 3) return quiz.section === 'full'; // Full practice exams
    if (tabValue === 4) return quiz.completed; // Completed quizzes
    return true;
  });
  
  if (loading) {
    return (
      <Container maxWidth={false}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }
  
  return (
    <Container maxWidth={false} sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        ABO-NCLE Exam Preparation
      </Typography>
      
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Test your knowledge with practice quizzes and full-length simulated exams.
      </Typography>
      
      <Paper sx={{ p: 3, mb: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="All Quizzes" />
            <Tab label="ABO Quizzes" />
            <Tab label="NCLE Quizzes" />
            <Tab label="Full Practice Exams" />
            <Tab label="Completed" />
          </Tabs>
        </Box>
        
        <Box my={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Exam Preparation Progress</Typography>
                  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ position: 'relative', display: 'inline-flex', mr: 2 }}>
                      <CircularProgress 
                        variant="determinate" 
                        value={quizzes.length > 0 
                          ? (quizzes.filter(q => q.completed).length / quizzes.length) * 100 
                          : 0
                        } 
                        size={80} 
                        thickness={5} 
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
                        <Typography variant="body2" component="div" color="text.secondary">
                          {`${Math.round((quizzes.filter(q => q.completed).length / quizzes.length) * 100)}%`}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="body1">
                        {quizzes.filter(q => q.completed).length} of {quizzes.length} quizzes completed
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Average score: {
                          quizzes.filter(q => q.completed).length > 0
                            ? Math.round(quizzes.filter(q => q.completed).reduce((sum, quiz) => sum + (quiz.score || 0), 0) / quizzes.filter(q => q.completed).length)
                            : 0
                        }%
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Exam Strategy Tips</Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Complete section quizzes before full practice exams" 
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Review incorrect answers and retry challenging sections" 
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Aim for at least 80% on each section before the exam" 
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">
            {filteredQuizzes.length} quizzes available
          </Typography>
        </Box>
        
        <Grid container spacing={3}>
          {filteredQuizzes.map(quiz => (
            <Grid item xs={12} md={6} lg={4} key={quiz.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {quiz.completed && (
                  <Box sx={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
                    <Chip 
                      icon={<CheckCircleIcon />} 
                      label={`${quiz.score}%`} 
                      color={quiz.score && quiz.score >= 80 ? "success" : "primary"} 
                      variant="filled" 
                    />
                  </Box>
                )}
                
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://placehold.co/600x400/${quiz.examType === 'ABO' ? '3f51b5' : 'f50057'}/white?text=${quiz.examType}+Quiz`}
                  alt={quiz.title}
                />
                
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {quiz.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {quiz.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    <Chip 
                      icon={<QuizIcon />} 
                      label={`${quiz.numQuestions} Questions`} 
                      size="small" 
                      variant="outlined" 
                    />
                    <Chip 
                      icon={<TimeIcon />} 
                      label={`${quiz.estimatedTimeMinutes} min`} 
                      size="small" 
                      variant="outlined" 
                    />
                    <Chip 
                      label={quiz.difficulty} 
                      size="small" 
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
                
                <CardActions>
                  <Button 
                    fullWidth 
                    variant={quiz.completed ? "outlined" : "contained"} 
                    color="primary"
                    // In a real app, this would link to the actual quiz
                    component={RouterLink}
                    to="#"
                    onClick={() => alert('Quiz functionality would be implemented here')}
                    startIcon={quiz.completed ? <TimerIcon /> : <QuizIcon />}
                  >
                    {quiz.completed ? 'Retake Quiz' : 'Start Quiz'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        {filteredQuizzes.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No quizzes match the current filter
            </Typography>
            <Button 
              variant="contained" 
              sx={{ mt: 2 }}
              onClick={() => setTabValue(0)}
            >
              View All Quizzes
            </Button>
          </Box>
        )}
      </Paper>
      
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Additional Exam Resources
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Exam Day Tips
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Get a good night's sleep before the exam" 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Arrive 30 minutes early to the testing center" 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Bring required identification documents" 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Read each question carefully before answering" 
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Official Exam Information
                </Typography>
                <Typography variant="body2" paragraph>
                  For the most up-to-date information about the ABO-NCLE certification exams, visit the official website.
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary"
                  href="https://www.abo-ncle.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                >
                  Visit ABO-NCLE Website
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Study Flashcards
                </Typography>
                <Typography variant="body2" paragraph>
                  Reinforce your knowledge with flashcards covering key terms and concepts from the exam.
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary"
                  component={RouterLink}
                  to="/study/flashcards"
                  fullWidth
                >
                  Go to Flashcards
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Comprehensive Full-Length Exams
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Take a comprehensive full-length exam that simulates the actual certification exam.
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">ABO Comprehensive Exam</Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                150 questions covering all ABO exam topics in a simulated test environment
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <TimerIcon color="action" />
                <Typography variant="body2">2.5 hours</Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button 
                component={RouterLink} 
                to="/comprehensive-exam/abo" 
                variant="contained" 
                color="primary"
                fullWidth
              >
                Start Exam
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">NCLE Comprehensive Exam</Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                150 questions covering all NCLE exam topics in a simulated test environment
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <TimerIcon color="action" />
                <Typography variant="body2">2.5 hours</Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button 
                component={RouterLink} 
                to="/comprehensive-exam/ncle" 
                variant="contained" 
                color="primary"
                fullWidth
              >
                Start Exam
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExamPrepPage; 