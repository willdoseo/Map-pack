import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './styles/App.css';

// Sample data for the SEO dashboard
import { sampleCompetitors, sampleServices } from './data/sampleData';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2c3e50', // Deep blue
      light: '#3e5771',
      dark: '#1a2530',
    },
    secondary: {
      main: '#e74c3c', // Red accent
      light: '#f29c9c',
      dark: '#c0392b',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#7f8c8d',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.1rem',
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '8px 16px',
          boxShadow: 'none',
        },
        containedPrimary: {
          backgroundColor: '#2c3e50',
          '&:hover': {
            backgroundColor: '#1a2530',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  const [competitors] = useState(sampleCompetitors);
  const [services] = useState(sampleServices);
  const [selectedCompetitor, setSelectedCompetitor] = useState(null);
  const [comparisonCompetitor, setComparisonCompetitor] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app-container">
        <Sidebar 
          competitors={competitors}
          selectedCompetitor={selectedCompetitor}
          setSelectedCompetitor={setSelectedCompetitor}
          comparisonCompetitor={comparisonCompetitor}
          setComparisonCompetitor={setComparisonCompetitor}
        />
        <Box component="main" className="main-content">
          <Container maxWidth="xl" sx={{ py: 4 }}>
            <Dashboard 
              competitors={competitors}
              services={services}
              selectedCompetitor={selectedCompetitor}
              comparisonCompetitor={comparisonCompetitor}
            />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 