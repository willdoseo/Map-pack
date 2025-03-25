import React from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import { 
  BarChart as BarChartIcon,
  TrendingUp as TrendingUpIcon,
  CompareArrows as CompareArrowsIcon,
  Stars as StarsIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  LocalOffer as LocalOfferIcon,
  Timeline as TimelineIcon,
  SsidChart as SsidChartIcon
} from '@mui/icons-material';

const drawerWidth = 280;

const Sidebar = ({ 
  competitors, 
  selectedCompetitor, 
  setSelectedCompetitor, 
  comparisonCompetitor, 
  setComparisonCompetitor 
}) => {
  const handleCompetitorChange = (event) => {
    const selectedId = parseInt(event.target.value);
    const competitor = competitors.find(comp => comp.id === selectedId) || null;
    setSelectedCompetitor(competitor);
  };

  const handleComparisonChange = (event) => {
    const selectedId = parseInt(event.target.value);
    const competitor = competitors.find(comp => comp.id === selectedId) || null;
    setComparisonCompetitor(competitor);
  };

  const clearComparison = () => {
    setComparisonCompetitor(null);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#2c3e50',
          color: 'white',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Local SEO Dashboard
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Competitive Landscape Analysis
        </Typography>
      </Box>
      
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

      <Box sx={{ px: 3, py: 2 }}>
        <Typography variant="body2" sx={{ mb: 1, color: 'rgba(255, 255, 255, 0.7)' }}>
          Select Competitor
        </Typography>
        <FormControl fullWidth size="small" sx={{ mb: 2, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 1 }}>
          <Select
            value={selectedCompetitor ? selectedCompetitor.id : ''}
            onChange={handleCompetitorChange}
            displayEmpty
            sx={{ 
              color: 'white',
              '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.1)' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.3)' },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.5)' },
              '.MuiSvgIcon-root': { color: 'rgba(255, 255, 255, 0.7)' }
            }}
          >
            <MenuItem value="" disabled>
              <em>Select a competitor</em>
            </MenuItem>
            {competitors.map((competitor) => (
              <MenuItem key={competitor.id} value={competitor.id}>
                {competitor.position}. {competitor.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography variant="body2" sx={{ mb: 1, color: 'rgba(255, 255, 255, 0.7)' }}>
          Compare With
        </Typography>
        <FormControl fullWidth size="small" sx={{ mb: 1, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 1 }}>
          <Select
            value={comparisonCompetitor ? comparisonCompetitor.id : ''}
            onChange={handleComparisonChange}
            displayEmpty
            sx={{ 
              color: 'white',
              '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.1)' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.3)' },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.5)' },
              '.MuiSvgIcon-root': { color: 'rgba(255, 255, 255, 0.7)' }
            }}
          >
            <MenuItem value="" disabled>
              <em>Select for comparison</em>
            </MenuItem>
            {competitors.filter(comp => !selectedCompetitor || comp.id !== selectedCompetitor.id).map((competitor) => (
              <MenuItem key={competitor.id} value={competitor.id}>
                {competitor.position}. {competitor.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        {comparisonCompetitor && (
          <Button 
            variant="text" 
            size="small" 
            onClick={clearComparison}
            sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.75rem', textTransform: 'none', mb: 2 }}
          >
            Clear comparison
          </Button>
        )}
      </Box>

      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
      
      <List sx={{ px: 1 }}>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Rankings Overview" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
              <CompareArrowsIcon />
            </ListItemIcon>
            <ListItemText primary="Competitor Comparison" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText primary="Service Matrix" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText primary="Review Analysis" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary="Update Frequency" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
              <CheckCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Badges & Credentials" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
              <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary="Keyword Positions" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
              <SsidChartIcon />
            </ListItemIcon>
            <ListItemText primary="Optimization Recommendations" />
          </ListItemButton>
        </ListItem>
      </List>
      
      <Box sx={{ flexGrow: 1 }} />
      
      <Box sx={{ p: 3 }}>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem' }}>
          Data last updated: March 15, 2023
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar; 