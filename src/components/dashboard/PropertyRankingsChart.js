import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import {
  ResponsiveContainer,
  LineChart,
  Line,
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
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
          {label}
        </Typography>
        {payload.map((entry, index) => (
          <Typography
            key={`item-${index}`}
            variant="body2"
            sx={{ color: entry.color, fontWeight: 500 }}
          >
            {entry.name}: Position #{entry.value}
          </Typography>
        ))}
      </Box>
    );
  }
  return null;
};

const PropertyRankingsChart = () => {
  const theme = useTheme();

  // Mock data for property rankings over time
  // Lower position numbers are better (1 is top position)
  const data = [
    {
      month: 'Jan',
      'Good Life Property Management': 3,
      'Utopia Management': 1,
      'WeLease Property Management': 2,
    },
    {
      month: 'Feb',
      'Good Life Property Management': 2,
      'Utopia Management': 1,
      'WeLease Property Management': 3,
    },
    {
      month: 'Mar',
      'Good Life Property Management': 2,
      'Utopia Management': 3,
      'WeLease Property Management': 1,
    },
    {
      month: 'Apr',
      'Good Life Property Management': 1,
      'Utopia Management': 2,
      'WeLease Property Management': 3,
    },
    {
      month: 'May',
      'Good Life Property Management': 1,
      'Utopia Management': 3,
      'WeLease Property Management': 2,
    },
    {
      month: 'Jun',
      'Good Life Property Management': 1,
      'Utopia Management': 2,
      'WeLease Property Management': 3,
    },
    {
      month: 'Jul',
      'Good Life Property Management': 1,
      'Utopia Management': 2,
      'WeLease Property Management': 3,
    },
  ];

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 10,
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
            domain={[1, 3]}
            ticks={[1, 2, 3]}
            reversed
            label={{ 
              value: 'Position in Maps Pack', 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle', fill: theme.palette.text.secondary, fontSize: 12 }
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
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
          <Line
            type="monotone"
            dataKey="Good Life Property Management"
            stroke={theme.palette.primary.main}
            strokeWidth={3}
            dot={{ stroke: theme.palette.primary.main, strokeWidth: 2, r: 4, fill: 'white' }}
            activeDot={{ stroke: theme.palette.primary.main, strokeWidth: 2, r: 6, fill: 'white' }}
          />
          <Line
            type="monotone"
            dataKey="Utopia Management"
            stroke={theme.palette.secondary.main}
            strokeWidth={3}
            dot={{ stroke: theme.palette.secondary.main, strokeWidth: 2, r: 4, fill: 'white' }}
            activeDot={{ stroke: theme.palette.secondary.main, strokeWidth: 2, r: 6, fill: 'white' }}
          />
          <Line
            type="monotone"
            dataKey="WeLease Property Management"
            stroke="#00897b"
            strokeWidth={3}
            dot={{ stroke: '#00897b', strokeWidth: 2, r: 4, fill: 'white' }}
            activeDot={{ stroke: '#00897b', strokeWidth: 2, r: 6, fill: 'white' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PropertyRankingsChart; 