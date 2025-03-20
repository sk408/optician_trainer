import React from 'react';
import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardContent,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
} from '@mui/material';
import { 
  TopicStudyContent, 
  StudyContentSection, 
  StudyContentElement,
  StudyParagraph,
  StudyHeading,
  StudyImage,
  StudyList,
  StudyDefinition,
  StudyCallout,
  StudyTable
} from '../../interfaces/StudyContent';

interface StudyContentRendererProps {
  content: TopicStudyContent;
}

const StudyContentRenderer: React.FC<StudyContentRendererProps> = ({ content }) => {
  if (!content) {
    return (
      <Alert severity="info">
        No study content available for this topic yet.
      </Alert>
    );
  }
  
  return (
    <Box>
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Introduction
        </Typography>
        <Typography variant="body1">
          {content.introduction}
        </Typography>
        
        <Box mt={3}>
          <Typography variant="h6" gutterBottom>
            Learning Objectives
          </Typography>
          <List>
            {content.objectives.map((objective, index) => (
              <ListItem key={index} sx={{ py: 0.5 }}>
                <ListItemText primary={objective} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      
      <Divider sx={{ my: 4 }} />
      
      {content.sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
      
      <Divider sx={{ my: 4 }} />
      
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Summary
        </Typography>
        <Typography variant="body1">
          {content.summary}
        </Typography>
      </Box>
      
      {content.references && content.references.length > 0 && (
        <Box>
          <Typography variant="h6" gutterBottom>
            References
          </Typography>
          <List>
            {content.references.map((reference, index) => (
              <ListItem key={index} sx={{ py: 0.5 }}>
                <ListItemText primary={reference} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

interface SectionRendererProps {
  section: StudyContentSection;
}

const SectionRenderer: React.FC<SectionRendererProps> = ({ section }) => {
  let backgroundColor = 'transparent';
  
  switch (section.type) {
    case 'introduction':
      backgroundColor = 'rgba(232, 244, 253, 0.3)';
      break;
    case 'clinical':
      backgroundColor = 'rgba(237, 247, 237, 0.3)';
      break;
    case 'interactive':
      backgroundColor = 'rgba(255, 244, 229, 0.3)';
      break;
    case 'advanced':
      backgroundColor = 'rgba(253, 237, 237, 0.3)';
      break;
    default:
      backgroundColor = 'transparent';
  }
  
  return (
    <Box mb={5} sx={{ backgroundColor, p: section.type !== 'main' ? 2 : 0, borderRadius: 1 }}>
      <Typography variant="h5" gutterBottom>
        {section.title}
      </Typography>
      
      {section.content.map((element) => (
        <ElementRenderer key={element.id} element={element} />
      ))}
    </Box>
  );
};

interface ElementRendererProps {
  element: StudyContentElement;
}

const ElementRenderer: React.FC<ElementRendererProps> = ({ element }) => {
  switch (element.type) {
    case 'paragraph':
      return <ParagraphRenderer content={element.content as StudyParagraph} />;
    case 'heading':
      return <HeadingRenderer content={element.content as StudyHeading} />;
    case 'image':
      return <ImageRenderer content={element.content as StudyImage} />;
    case 'list':
      return <ListRenderer content={element.content as StudyList} />;
    case 'definition':
      return <DefinitionRenderer content={element.content as StudyDefinition} />;
    case 'callout':
      return <CalloutRenderer content={element.content as StudyCallout} />;
    case 'table':
      return <TableRenderer content={element.content as StudyTable} />;
    default:
      return <Box>Unsupported element type: {element.type}</Box>;
  }
};

interface ParagraphRendererProps {
  content: StudyParagraph;
}

const ParagraphRenderer: React.FC<ParagraphRendererProps> = ({ content }) => {
  return (
    <Typography 
      variant="body1" 
      paragraph 
      sx={content.highlight ? { 
        backgroundColor: 'rgba(255, 244, 229, 0.5)', 
        p: 1, 
        borderLeft: '4px solid orange' 
      } : {}}
    >
      {content.text}
    </Typography>
  );
};

interface HeadingRendererProps {
  content: StudyHeading;
}

const HeadingRenderer: React.FC<HeadingRendererProps> = ({ content }) => {
  return (
    <Typography 
      variant={`h${content.level}` as 'h2' | 'h3' | 'h4' | 'h5'} 
      gutterBottom
      sx={{ mt: 3, mb: 1 }}
    >
      {content.text}
    </Typography>
  );
};

interface ImageRendererProps {
  content: StudyImage;
}

const ImageRenderer: React.FC<ImageRendererProps> = ({ content }) => {
  return (
    <Box my={3} textAlign="center">
      <Card elevation={0} variant="outlined">
        <CardMedia
          component="img"
          image={content.src}
          alt={content.alt}
          sx={{ 
            height: content.height, 
            width: content.width,
            maxWidth: '100%',
            maxHeight: { xs: '300px', sm: '400px', md: '500px' },
            objectFit: 'contain',
            margin: '0 auto',
            display: 'block'
          }}
        />
        {content.caption && (
          <CardContent>
            <Typography variant="caption" color="text.secondary">
              {content.caption}
            </Typography>
          </CardContent>
        )}
      </Card>
    </Box>
  );
};

interface ListRendererProps {
  content: StudyList;
}

const ListRenderer: React.FC<ListRendererProps> = ({ content }) => {
  return (
    <Box my={2}>
      {content.ordered ? (
        <Box component="ol" sx={{ pl: 3 }}>
          {content.items.map((item, index) => (
            <Box component="li" key={index} sx={{ mb: 1 }}>
              <Typography variant="body1">{item}</Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Box component="ul" sx={{ pl: 3 }}>
          {content.items.map((item, index) => (
            <Box component="li" key={index} sx={{ mb: 1 }}>
              <Typography variant="body1">{item}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

interface DefinitionRendererProps {
  content: StudyDefinition;
}

const DefinitionRenderer: React.FC<DefinitionRendererProps> = ({ content }) => {
  return (
    <Box my={2} sx={{ pl: 2, borderLeft: '4px solid #ccc' }}>
      <Typography variant="h6" gutterBottom>
        {content.term}
      </Typography>
      <Typography variant="body1">
        {content.definition}
      </Typography>
      {content.related && content.related.length > 0 && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Related: {content.related.join(', ')}
        </Typography>
      )}
    </Box>
  );
};

interface CalloutRendererProps {
  content: StudyCallout;
}

const CalloutRenderer: React.FC<CalloutRendererProps> = ({ content }) => {
  let severity: 'info' | 'warning' | 'error' | 'success';
  
  switch (content.type) {
    case 'warning':
      severity = 'warning';
      break;
    case 'important':
      severity = 'error';
      break;
    case 'tip':
      severity = 'success';
      break;
    default:
      severity = 'info';
  }
  
  return (
    <Alert severity={severity} sx={{ my: 2 }}>
      {content.title && (
        <Typography variant="subtitle1" gutterBottom>
          {content.title}
        </Typography>
      )}
      <Typography variant="body1">
        {content.text}
      </Typography>
    </Alert>
  );
};

interface TableRendererProps {
  content: StudyTable;
}

const TableRenderer: React.FC<TableRendererProps> = ({ content }) => {
  return (
    <Box my={3}>
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              {content.headers.map((header, index) => (
                <TableCell key={index} sx={{ fontWeight: 'bold' }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {content.rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {content.caption && (
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center', mt: 1 }}>
          {content.caption}
        </Typography>
      )}
    </Box>
  );
};

export default StudyContentRenderer; 