import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import AppThemeProvider from './components/ThemeProvider';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Layout from './components/Layout';

// Import base styling
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Lazy-loaded routes for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const PatientsPage = lazy(() => import('./pages/PatientsPage'));
const TestingPage = lazy(() => import('./pages/TestingPage'));
const EyeAnatomyPage = lazy(() => import('./pages/EyeAnatomyPage'));
const ContactLensFittingPage = lazy(() => import('./pages/ContactLensFittingPage'));
const TroubleshootingGuidePage = lazy(() => import('./pages/TroubleshootingGuidePage'));
const FollowUpPage = lazy(() => import('./pages/FollowUpPage'));

// Existing ABO-NCLE exam preparation pages
const DispensingBasicsPage = lazy(() => import('./pages/DispensingBasicsPage'));
const OpticalTheoryPage = lazy(() => import('./pages/OpticalTheoryPage'));

// New study system pages
const AllTopicsPage = lazy(() => import('./pages/AllTopicsPage'));
const StudyTopicPage = lazy(() => import('./pages/StudyTopicPage'));
const StudyDashboardPage = lazy(() => import('./pages/StudyDashboardPage'));
const ExamPrepPage = lazy(() => import('./pages/ExamPrepPage'));
const FlashcardsPage = lazy(() => import('./pages/FlashcardsPage'));
const ComprehensiveExamPage = lazy(() => import('./pages/ComprehensiveExamPage'));
const QuizPage = lazy(() => import('./pages/QuizPage'));

// Tutorial pages for beginners
const PrescriptionBasicsPage = lazy(() => import('./pages/tutorials/PrescriptionBasicsPage'));
// Future tutorial pages (we'll implement these later)
// const FrameSelectionPage = lazy(() => import('./pages/tutorials/FrameSelectionPage'));
// const LensOptionsPage = lazy(() => import('./pages/tutorials/LensOptionsPage'));

// Loading component for Suspense
const LoadingComponent = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </Box>
);

// Router configuration with Layout wrapper
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'patients',
          element: <PatientsPage />,
        },
        {
          path: 'testing/:patientId',
          element: <TestingPage />,
        },
        {
          path: 'eye-anatomy',
          element: <EyeAnatomyPage />,
        },
        {
          path: 'contact-lens-fitting',
          element: <ContactLensFittingPage />,
        },
        {
          path: 'troubleshooting-guide',
          element: <TroubleshootingGuidePage />,
        },
        {
          path: 'follow-up',
          element: <FollowUpPage />,
        },
        // Existing ABO-NCLE exam preparation pages
        {
          path: 'dispensing-basics',
          element: <DispensingBasicsPage />,
        },
        {
          path: 'optical-theory',
          element: <OpticalTheoryPage />,
        },
        // Tutorial pages for beginners
        {
          path: 'tutorial/prescription-basics',
          element: <PrescriptionBasicsPage />,
        },
        {
          path: 'tutorial/frame-selection',
          // Temporary redirect to prescription basics until implemented
          element: <PrescriptionBasicsPage />,
        },
        {
          path: 'tutorial/lens-options',
          // Temporary redirect to prescription basics until implemented
          element: <PrescriptionBasicsPage />,
        },
        // Enhanced study system routes
        {
          path: 'study',
          element: <StudyDashboardPage />,
        },
        {
          path: 'study/abo',
          element: <StudyDashboardPage />,
        },
        {
          path: 'study/ncle',
          element: <StudyDashboardPage />,
        },
        {
          path: 'study/exam-prep',
          element: <ExamPrepPage />,
        },
        {
          path: 'study/flashcards',
          element: <FlashcardsPage />,
        },
        // Wildcard route for individual topics - must come after specific routes
        {
          path: 'study/:topicId',
          element: <StudyTopicPage />,
        },
        {
          path: 'exam-prep',
          element: <ExamPrepPage />,
        },
        // Quiz route
        {
          path: 'quiz/:examType/:section',
          element: <QuizPage />,
        },
        // New comprehensive exam routes
        {
          path: 'comprehensive-exam/:examType',
          element: <ComprehensiveExamPage />,
        },
        {
          path: 'comprehensive-exam',
          element: <ComprehensiveExamPage />,
        },
      ],
    }
  ],
  {
    basename: '/optician_trainer'
  }
);

function App() {
  return (
    <ThemeProvider>
      <AppThemeProvider>
        <Suspense fallback={<LoadingComponent />}>
          <RouterProvider router={router} />
        </Suspense>
      </AppThemeProvider>
    </ThemeProvider>
  );
}

export default App;
