import React from 'react';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Chip, 
  Box, 
  Button,
  LinearProgress,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  AccessTime as TimeIcon,
  CheckCircle as CheckIcon,
  School as SchoolIcon,
  Link as LinkIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { StudyTopic } from '../../constants/aboTopics';
import { TopicProgress } from '../../interfaces/StudyTracker';

interface StudyTopicCardProps {
  topic: StudyTopic & { examType: 'ABO' | 'NCLE', sectionId: string };
  progress?: TopicProgress | null;
  onStart?: (topicId: string) => void;
  isCurrent?: boolean;
}

const StudyTopicCard: React.FC<StudyTopicCardProps> = ({ 
  topic, 
  progress, 
  onStart,
  isCurrent = false
}) => {
  const handleStartClick = () => {
    if (onStart) {
      onStart(topic.id);
    }
  };
  
  const isCompleted = progress?.completed || false;
  const hasStarted = progress?.timeSpentMinutes && progress.timeSpentMinutes > 0;
  
  return (
    <Card 
      variant={isCurrent ? "elevation" : "outlined"} 
      elevation={isCurrent ? 3 : 0}
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderLeft: isCurrent 
          ? '5px solid'
          : isCompleted 
            ? '5px solid' 
            : 'none',
        borderLeftColor: isCurrent 
          ? 'primary.main'
          : isCompleted 
            ? 'success.main' 
            : 'transparent',
        opacity: isCompleted ? 0.85 : 1
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Typography variant="h6" component="div" gutterBottom>
            {topic.title}
          </Typography>
          {isCompleted && (
            <CheckIcon color="success" fontSize="small" />
          )}
        </Box>
        
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip 
            label={topic.examType} 
            size="small" 
            color={topic.examType === 'ABO' ? 'primary' : 'secondary'}
            variant="outlined"
          />
          <Chip 
            icon={<TimeIcon fontSize="small" />}
            label={`${topic.estimatedTimeMinutes} min`} 
            size="small" 
          />
          <Chip 
            label={topic.difficulty} 
            size="small"
            color="default"
            variant="outlined"
          />
        </Stack>
        
        <Typography variant="body2" color="text.secondary" paragraph>
          {topic.description}
        </Typography>
        
        {hasStarted && (
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Progress
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={isCompleted ? 100 : Math.min(
                (progress?.timeSpentMinutes || 0) / topic.estimatedTimeMinutes * 100, 
                90
              )} 
              color={isCompleted ? "success" : "primary"}
              sx={{ height: 6, borderRadius: 3 }}
            />
            <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
              {progress?.timeSpentMinutes || 0} min spent
              {progress?.quizScore !== undefined && ` • Quiz score: ${progress.quizScore}%`}
            </Typography>
          </Box>
        )}
        
        <Divider sx={{ my: 2 }} />
        
        <Typography variant="subtitle2" gutterBottom>
          Key Points:
        </Typography>
        <List dense disablePadding>
          {topic.keyPoints.slice(0, 3).map((point, index) => (
            <ListItem key={index} disablePadding sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <SchoolIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText primary={point} />
            </ListItem>
          ))}
          {topic.keyPoints.length > 3 && (
            <ListItem disablePadding sx={{ py: 0.5 }}>
              <ListItemText 
                primary={`+${topic.keyPoints.length - 3} more points...`} 
                primaryTypographyProps={{ variant: 'caption', color: 'text.secondary' }}
              />
            </ListItem>
          )}
        </List>
      </CardContent>
      
      {topic.relatedTopics.length > 0 && (
        <Box sx={{ px: 2, pb: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Related topics: {topic.relatedTopics.join(', ')}
          </Typography>
        </Box>
      )}
      
      <CardActions>
        <Button 
          fullWidth 
          variant="contained" 
          component={Link}
          to={`/study/${topic.id}`}
          color={isCompleted ? "success" : "primary"}
          onClick={handleStartClick}
          startIcon={isCompleted ? <CheckIcon /> : undefined}
        >
          {isCompleted ? "Review" : hasStarted ? "Continue" : "Start"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default StudyTopicCard; 