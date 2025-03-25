import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './styles/App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#bf6e4e', // Reddish-brown from screenshot
      light: '#e99b7a',
      dark: '#8a4e36',
    },
    secondary: {
      main: '#3b4979', // Navy blue from screenshot
      light: '#656eaa',
      dark: '#27324f',
    },
    background: {
      default: '#f5f3f1', // Light beige from screenshot
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
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
          borderRadius: 28,
          padding: '10px 20px',
          boxShadow: 'none',
        },
        containedPrimary: {
          backgroundColor: '#bf6e4e',
          '&:hover': {
            backgroundColor: '#8a4e36',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          borderRadius: 16,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Dashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App; 