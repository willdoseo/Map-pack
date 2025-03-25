import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }) => {
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
        <Box sx={{ fontWeight: 600, mb: 1 }}>{label}</Box>
        {payload.map((entry, index) => (
          <Box
            key={`item-${index}`}
            sx={{ 
              color: entry.color,
              display: 'flex',
              alignItems: 'center',
              mb: 0.5,
              fontSize: '0.85rem'
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: entry.color,
                mr: 1,
                borderRadius: '50%',
              }}
            />
            {entry.name}: {entry.value} reviews
          </Box>
        ))}
      </Box>
    );
  }
  return null;
};

const ReviewsOverTimeChart = () => {
  const theme = useTheme();

  // Mock data for review count over time
  const data = [
    {
      month: 'Jan',
      'Good Life Property Management': 102,
      'Utopia Management': 84,
      'WeLease Property Management': 23,
    },
    {
      month: 'Feb',
      'Good Life Property Management': 118,
      'Utopia Management': 91,
      'WeLease Property Management': 29,
    },
    {
      month: 'Mar',
      'Good Life Property Management': 132,
      'Utopia Management': 99,
      'WeLease Property Management': 31,
    },
    {
      month: 'Apr',
      'Good Life Property Management': 146,
      'Utopia Management': 105,
      'WeLease Property Management': 36,
    },
    {
      month: 'May',
      'Good Life Property Management': 156,
      'Utopia Management': 112,
      'WeLease Property Management': 38,
    },
    {
      month: 'Jun',
      'Good Life Property Management': 167,
      'Utopia Management': 118,
      'WeLease Property Management': 41,
    },
  ];

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.grey[200]} />
          <XAxis 
            dataKey="month" 
            tickLine={false}
            axisLine={{ stroke: theme.palette.grey[300] }}
            tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
          />
          <YAxis 
            tickLine={false}
            axisLine={{ stroke: theme.palette.grey[300] }}
            tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="Good Life Property Management"
            stackId="1"
            stroke={theme.palette.primary.main}
            fill={theme.palette.primary.main}
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="Utopia Management"
            stackId="2"
            stroke={theme.palette.secondary.main}
            fill={theme.palette.secondary.main}
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="WeLease Property Management"
            stackId="3"
            stroke="#00897b"
            fill="#00897b"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ReviewsOverTimeChart; 