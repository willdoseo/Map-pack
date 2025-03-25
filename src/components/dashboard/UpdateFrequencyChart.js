import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
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
            {entry.value} updates in last 90 days
          </Typography>
        ))}
      </Box>
    );
  }
  return null;
};

const UpdateFrequencyChart = () => {
  const theme = useTheme();

  // Mock data for update frequency
  const data = [
    {
      name: 'Good Life',
      updates: 9,
      fill: theme.palette.primary.main,
    },
    {
      name: 'Utopia',
      updates: 4,
      fill: theme.palette.secondary.main,
    },
    {
      name: 'WeLease',
      updates: 11,
      fill: '#00897b',
    },
  ];

  // Calculate additional stats for context
  const maxUpdates = Math.max(...data.map(item => item.updates));
  const minUpdates = Math.min(...data.map(item => item.updates));
  const avgUpdates = data.reduce((sum, item) => sum + item.updates, 0) / data.length;

  // Update types breakdown
  const updateTypes = {
    'Good Life': {
      'New Services': 2,
      'Photos/Media': 3,
      'Posts/Content': 4,
    },
    'Utopia': {
      'New Services': 1,
      'Photos/Media': 1,
      'Posts/Content': 2,
    },
    'WeLease': {
      'New Services': 1,
      'Photos/Media': 2,
      'Posts/Content': 8,
    },
  };

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.grey[200]} />
            <XAxis 
              dataKey="name" 
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
            <Bar dataKey="updates" fill={theme.palette.primary.main}>
              {data.map((entry, index) => (
                <Bar key={`bar-${index}`} dataKey="updates" fill={entry.fill} />
              ))}
              <LabelList dataKey="updates" position="top" fill={theme.palette.text.secondary} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, fontSize: '0.75rem', color: theme.palette.text.secondary }}>
          Update Type Breakdown (Last 90 Days)
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {Object.entries(updateTypes).map(([company, types]) => (
            <Box key={company} sx={{ textAlign: 'center', px: 1 }}>
              <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                {company}
              </Typography>
              {Object.entries(types).map(([type, count]) => (
                <Typography key={type} variant="caption" sx={{ display: 'block', color: theme.palette.text.secondary }}>
                  {type}: {count}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default UpdateFrequencyChart; 