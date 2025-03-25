import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
          {`Search Query: "${label}"`}
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

const MapPackPositionsChart = () => {
  const theme = useTheme();
  const [timeRange, setTimeRange] = useState('last30Days');

  // Data for different time ranges
  const chartData = {
    last7Days: [
      {
        query: 'Property management San Diego',
        'Good Life Property Management': 1,
        'Utopia Management': 2,
        'WeLease Property Management': 3,
      },
      {
        query: 'San Diego rental management',
        'Good Life Property Management': 1,
        'Utopia Management': 2,
        'WeLease Property Management': 'Not in top 3',
      },
      {
        query: 'Property managers in San Diego',
        'Good Life Property Management': 1,
        'Utopia Management': 3,
        'WeLease Property Management': 2,
      },
    ],
    last30Days: [
      {
        query: 'Property management San Diego',
        'Good Life Property Management': 1,
        'Utopia Management': 2,
        'WeLease Property Management': 3,
      },
      {
        query: 'San Diego rental management',
        'Good Life Property Management': 2,
        'Utopia Management': 1,
        'WeLease Property Management': 'Not in top 3',
      },
      {
        query: 'Property managers in San Diego',
        'Good Life Property Management': 1,
        'Utopia Management': 3,
        'WeLease Property Management': 2,
      },
      {
        query: 'Rental property management San Diego',
        'Good Life Property Management': 1,
        'Utopia Management': 2,
        'WeLease Property Management': 3,
      },
      {
        query: 'Best property managers San Diego',
        'Good Life Property Management': 2,
        'Utopia Management': 1,
        'WeLease Property Management': 'Not in top 3',
      },
    ],
    last90Days: [
      {
        query: 'Property management San Diego',
        'Good Life Property Management': 2,
        'Utopia Management': 1,
        'WeLease Property Management': 3,
      },
      {
        query: 'San Diego rental management',
        'Good Life Property Management': 3,
        'Utopia Management': 1,
        'WeLease Property Management': 2,
      },
      {
        query: 'Property managers in San Diego',
        'Good Life Property Management': 2,
        'Utopia Management': 3,
        'WeLease Property Management': 1,
      },
      {
        query: 'Rental property management San Diego',
        'Good Life Property Management': 2,
        'Utopia Management': 1,
        'WeLease Property Management': 3,
      },
      {
        query: 'Best property managers San Diego',
        'Good Life Property Management': 3,
        'Utopia Management': 1,
        'WeLease Property Management': 2,
      },
      {
        query: 'San Diego property management companies',
        'Good Life Property Management': 2,
        'Utopia Management': 1,
        'WeLease Property Management': 3,
      },
    ],
  };

  const data = chartData[timeRange];

  const handleTimeRangeChange = (event, newTimeRange) => {
    if (newTimeRange !== null) {
      setTimeRange(newTimeRange);
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <ToggleButtonGroup
          size="small"
          value={timeRange}
          exclusive
          onChange={handleTimeRangeChange}
          aria-label="time range"
        >
          <ToggleButton value="last7Days" aria-label="last 7 days">
            <Typography variant="caption">7 Days</Typography>
          </ToggleButton>
          <ToggleButton value="last30Days" aria-label="last 30 days">
            <Typography variant="caption">30 Days</Typography>
          </ToggleButton>
          <ToggleButton value="last90Days" aria-label="last 90 days">
            <Typography variant="caption">90 Days</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.grey[200]} />
          <XAxis
            type="number"
            domain={[0, 3]}
            tickCount={4}
            tick={{ fill: theme.palette.text.secondary }}
            tickFormatter={(value) => (value > 0 && value <= 3 ? value : '')}
          />
          <YAxis
            dataKey="query"
            type="category"
            tick={{
              fill: theme.palette.text.secondary,
              fontSize: 12,
            }}
            width={150}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: 10 }}
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
          <Bar
            dataKey="Good Life Property Management"
            fill={theme.palette.primary.main}
            name="Good Life Property Management"
            minPointSize={2}
          >
            <LabelList
              dataKey="Good Life Property Management"
              position="center"
              fill="#ffffff"
              style={{ fontWeight: 'bold', fontSize: 12 }}
              formatter={(value) => (typeof value === 'number' ? value : 'N/A')}
            />
          </Bar>
          <Bar
            dataKey="Utopia Management"
            fill={theme.palette.secondary.main}
            name="Utopia Management"
            minPointSize={2}
          >
            <LabelList
              dataKey="Utopia Management"
              position="center"
              fill="#ffffff"
              style={{ fontWeight: 'bold', fontSize: 12 }}
              formatter={(value) => (typeof value === 'number' ? value : 'N/A')}
            />
          </Bar>
          <Bar
            dataKey="WeLease Property Management"
            fill="#00897b"
            name="WeLease Property Management"
            minPointSize={2}
          >
            <LabelList
              dataKey="WeLease Property Management"
              position="center"
              fill="#ffffff"
              style={{ fontWeight: 'bold', fontSize: 12 }}
              formatter={(value) => (typeof value === 'number' ? value : 'N/A')}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default MapPackPositionsChart; 