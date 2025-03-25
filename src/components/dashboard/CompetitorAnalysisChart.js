import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
} from 'recharts';

// Custom tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {payload.map((entry, index) => (
          <Typography
            key={`item-${index}`}
            variant="body2"
            sx={{ color: entry.color, fontWeight: 500 }}
          >
            {entry.name}: {entry.value}/10
          </Typography>
        ))}
      </Box>
    );
  }
  return null;
};

const CompetitorAnalysisChart = () => {
  const theme = useTheme();

  // Mock data for competitor analysis
  const data = [
    {
      metric: 'Reviews',
      'Good Life Property Management': 9.5,
      'Utopia Management': 7.8,
      'WeLease Property Management': 6.4,
    },
    {
      metric: 'Service Coverage',
      'Good Life Property Management': 8.7,
      'Utopia Management': 9.2,
      'WeLease Property Management': 7.1,
    },
    {
      metric: 'Profile Completeness',
      'Good Life Property Management': 9.8,
      'Utopia Management': 8.5,
      'WeLease Property Management': 8.3,
    },
    {
      metric: 'Update Frequency',
      'Good Life Property Management': 7.6,
      'Utopia Management': 6.5,
      'WeLease Property Management': 8.9,
    },
    {
      metric: 'Local Citations',
      'Good Life Property Management': 8.9,
      'Utopia Management': 9.1,
      'WeLease Property Management': 7.4,
    },
    {
      metric: 'Response Time',
      'Good Life Property Management': 9.3,
      'Utopia Management': 7.2,
      'WeLease Property Management': 8.7,
    },
  ];

  const colors = {
    'Good Life Property Management': theme.palette.primary.main,
    'Utopia Management': theme.palette.secondary.main,
    'WeLease Property Management': '#00897b',
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke={theme.palette.grey[200]} />
          <PolarAngleAxis
            dataKey="metric"
            tick={{ 
              fill: theme.palette.text.secondary, 
              fontSize: 12
            }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 10]}
            tick={{ 
              fill: theme.palette.text.secondary, 
              fontSize: 10 
            }}
          />
          <Radar
            name="Good Life Property Management"
            dataKey="Good Life Property Management"
            stroke={colors['Good Life Property Management']}
            fill={colors['Good Life Property Management']}
            fillOpacity={0.3}
          />
          <Radar
            name="Utopia Management"
            dataKey="Utopia Management"
            stroke={colors['Utopia Management']}
            fill={colors['Utopia Management']}
            fillOpacity={0.3}
          />
          <Radar
            name="WeLease Property Management"
            dataKey="WeLease Property Management"
            stroke={colors['WeLease Property Management']}
            fill={colors['WeLease Property Management']}
            fillOpacity={0.3}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            formatter={(value) => (
              <Typography
                variant="body2"
                sx={{ 
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                  fontSize: '0.8rem'
                }}
              >
                {value}
              </Typography>
            )}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CompetitorAnalysisChart; 