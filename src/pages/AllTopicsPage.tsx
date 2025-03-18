import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  CircularProgress,
  Divider,
  Chip,
  Button,
  Card,
  CardContent,
  CardActions
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  School as SchoolIcon
} from '@mui/icons-material';
import StudyProgressService from '../services/study/StudyProgressService';
import { StudyTopic } from '../constants/aboTopics';
import { TopicProgress } from '../interfaces/StudyTracker';
import StudyTopicCard from '../components/study/StudyTopicCard';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`filter-tabpanel-${index}`}
      aria-labelledby={`filter-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const AllTopicsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);
  const [topics, setTopics] = useState<{ topic: StudyTopic & { examType: string, sectionId: string }, progress: TopicProgress | null }[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState<string>('all');
  const [examType, setExamType] = useState<string>('all');
  const [sortOption, setSortOption] = useState<string>('recommended');

  useEffect(() => {
    const loadTopics = async () => {
      setLoading(true);
      const allTopics = StudyProgressService.getAllTopicsWithProgress();
      setTopics(allTopics as { topic: StudyTopic & { examType: string, sectionId: string }, progress: TopicProgress | null }[]);
      setLoading(false);
    };

    loadTopics();
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleDifficultyChange = (event: SelectChangeEvent) => {
    setDifficulty(event.target.value);
  };

  const handleExamTypeChange = (event: SelectChangeEvent) => {
    setExamType(event.target.value);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value);
  };

  const filteredTopics = topics.filter(item => {
    const matchesSearch = item.topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.topic.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDifficulty = difficulty === 'all' || item.topic.difficulty === difficulty;
    const matchesExamType = examType === 'all' || item.topic.examType === examType;

    return matchesSearch && matchesDifficulty && matchesExamType;
  });

  const sortedTopics = [...filteredTopics].sort((a, b) => {
    if (sortOption === 'recommended') {
      // If one is completed and the other isn't, show uncompleted first
      if (a.progress?.completed && !b.progress?.completed) return 1;
      if (!a.progress?.completed && b.progress?.completed) return -1;
      
      // Otherwise sort by title
      return a.topic.title.localeCompare(b.topic.title);
    } else if (sortOption === 'title') {
      return a.topic.title.localeCompare(b.topic.title);
    } else if (sortOption === 'difficulty') {
      const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
      return difficultyOrder[a.topic.difficulty as keyof typeof difficultyOrder] - 
        difficultyOrder[b.topic.difficulty as keyof typeof difficultyOrder];
    } else if (sortOption === 'time') {
      return a.topic.estimatedTimeMinutes - b.topic.estimatedTimeMinutes;
    } else if (sortOption === 'progress') {
      // Sort by completion status, then by amount of time spent
      if (a.progress?.completed && !b.progress?.completed) return -1;
      if (!a.progress?.completed && b.progress?.completed) return 1;
      return (b.progress?.timeSpentMinutes || 0) - (a.progress?.timeSpentMinutes || 0);
    }
    return 0;
  });

  const getTopicsBySection = (section: string, examType: string) => {
    return sortedTopics.filter(item => 
      item.topic.sectionId === section && 
      item.topic.examType === examType
    );
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
        ABO-NCLE Study Topics
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Browse all topics or filter to find specific content for your exam preparation.
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Box mb={3}>
          <TextField
            fullWidth
            placeholder="Search topics..."
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Grid container spacing={3}>
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
              <InputLabel id="sort-label">Sort By</InputLabel>
              <Select
                labelId="sort-label"
                id="sort-select"
                value={sortOption}
                label="Sort By"
                onChange={handleSortChange}
              >
                <MenuItem value="recommended">Recommended</MenuItem>
                <MenuItem value="title">Title (A-Z)</MenuItem>
                <MenuItem value="difficulty">Difficulty (Easiest First)</MenuItem>
                <MenuItem value="time">Time (Shortest First)</MenuItem>
                <MenuItem value="progress">Progress</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1">
            {filteredTopics.length} topics found
          </Typography>
          <Box>
            <Chip 
              label={`${filteredTopics.filter(t => t.progress?.completed).length} Completed`} 
              color="success" 
              variant="outlined" 
              sx={{ mr: 1 }} 
            />
            <Chip 
              label={`${filteredTopics.filter(t => !t.progress?.completed && t.progress?.timeSpentMinutes && t.progress.timeSpentMinutes > 0).length} In Progress`} 
              color="warning" 
              variant="outlined" 
            />
          </Box>
        </Box>
      </Paper>

      <Tabs 
        value={tabValue} 
        onChange={handleTabChange} 
        aria-label="topic filter tabs"
        sx={{ mb: 2 }}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="All Topics" id="filter-tab-0" aria-controls="filter-tabpanel-0" />
        <Tab label="ABO Topics" id="filter-tab-1" aria-controls="filter-tabpanel-1" />
        <Tab label="NCLE Topics" id="filter-tab-2" aria-controls="filter-tabpanel-2" />
        <Tab label="Completed" id="filter-tab-3" aria-controls="filter-tabpanel-3" />
        <Tab label="In Progress" id="filter-tab-4" aria-controls="filter-tabpanel-4" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={3}>
          {sortedTopics.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.topic.id}>
              <StudyTopicCard
                topic={item.topic}
                progress={item.progress}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        {/* ABO Topics by Section */}
        {['optical-theory', 'dispensing', 'lens-applications', 'regulations', 'measurements', 'tools-equipment'].map(section => {
          const sectionTopics = getTopicsBySection(section, 'ABO');
          if (sectionTopics.length === 0) return null;
          
          return (
            <Box key={section} mb={4}>
              <Typography variant="h5" gutterBottom>
                {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <Grid container spacing={3}>
                {sectionTopics.map(item => (
                  <Grid item xs={12} sm={6} md={4} key={item.topic.id}>
                    <StudyTopicCard
                      topic={item.topic}
                      progress={item.progress}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        })}
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        {/* NCLE Topics by Section */}
        {['pre-fitting', 'diagnostic-fitting', 'cl-materials', 'patient-education', 'follow-up-care', 'regulatory'].map(section => {
          const sectionTopics = getTopicsBySection(section, 'NCLE');
          if (sectionTopics.length === 0) return null;
          
          return (
            <Box key={section} mb={4}>
              <Typography variant="h5" gutterBottom>
                {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <Grid container spacing={3}>
                {sectionTopics.map(item => (
                  <Grid item xs={12} sm={6} md={4} key={item.topic.id}>
                    <StudyTopicCard
                      topic={item.topic}
                      progress={item.progress}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        })}
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        {/* Completed Topics */}
        <Grid container spacing={3}>
          {sortedTopics.filter(item => item.progress?.completed).map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.topic.id}>
              <StudyTopicCard
                topic={item.topic}
                progress={item.progress}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={4}>
        {/* In Progress Topics */}
        <Grid container spacing={3}>
          {sortedTopics.filter(item => !item.progress?.completed && item.progress?.timeSpentMinutes && item.progress.timeSpentMinutes > 0).map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.topic.id}>
              <StudyTopicCard
                topic={item.topic}
                progress={item.progress}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Container>
  );
};

export default AllTopicsPage; 