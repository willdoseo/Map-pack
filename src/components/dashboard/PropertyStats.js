import React from 'react';
import { Grid, Paper, Box, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Star as StarIcon,
  People as PeopleIcon,
  Business as BusinessIcon,
  Update as UpdateIcon,
} from '@mui/icons-material';

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 16,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: 'transform 0.3s, box-shadow 0.3s',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.1)',
  },
}));

const IconCircle = styled(Avatar)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor,
  width: 52,
  height: 52,
}));

const StatValue = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 700,
  marginBottom: theme.spacing(0.5),
  display: 'block',
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
  display: 'block',
}));

const TrendIndicator = styled(Box)(({ theme, positive }) => ({
  display: 'flex',
  alignItems: 'center',
  color: positive ? '#4caf50' : '#f44336',
  fontSize: '0.875rem',
  fontWeight: 600,
  marginTop: theme.spacing(0.5),
}));

const PropertyStats = () => {
  // Stats data
  const stats = [
    {
      label: 'Maps Pack Position',
      value: '#1',
      change: '+2 positions',
      positive: true,
      icon: <TrendingUpIcon />,
      color: '#3b4979',
    },
    {
      label: 'Average Rating',
      value: '4.9',
      change: '+0.2 points',
      positive: true,
      icon: <StarIcon />,
      color: '#f9a825',
    },
    {
      label: 'Total Reviews',
      value: '1,458',
      change: '+47 this month',
      positive: true,
      icon: <PeopleIcon />,
      color: '#bf6e4e',
    },
    {
      label: 'Years in Business',
      value: '10+',
      change: 'Stable position',
      positive: true,
      icon: <BusinessIcon />,
      color: '#5e35b1',
    },
    {
      label: 'Service Offerings',
      value: '27',
      change: '+3 new services',
      positive: true,
      icon: <BusinessIcon />,
      color: '#00897b',
    },
    {
      label: 'Profile Updates',
      value: '9',
      change: '-2 vs competitors',
      positive: false,
      icon: <UpdateIcon />,
      color: '#d81b60',
    },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
          <StatsCard className="dashboard-card fade-in">
            <Box>
              <StatValue variant="h4">
                {stat.value}
              </StatValue>
              <StatLabel variant="body2">
                {stat.label}
              </StatLabel>
              <TrendIndicator positive={stat.positive}>
                {stat.positive ? 
                  <TrendingUpIcon fontSize="small" sx={{ mr: 0.5 }} /> : 
                  <TrendingDownIcon fontSize="small" sx={{ mr: 0.5 }} />
                }
                {stat.change}
              </TrendIndicator>
            </Box>
            <IconCircle bgcolor={`${stat.color}20`}>
              <Box sx={{ color: stat.color }}>
                {stat.icon}
              </Box>
            </IconCircle>
          </StatsCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyStats; 