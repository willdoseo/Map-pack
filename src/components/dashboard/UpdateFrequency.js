import React from 'react';
import { 
  Typography, 
  Box, 
  Card, 
  CardContent,
  Chip
} from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const UpdateFrequency = ({ competitors }) => {
  // Tally up frequencies
  const frequencyCounts = {};
  competitors.forEach(comp => {
    frequencyCounts[comp.updateFrequency] = (frequencyCounts[comp.updateFrequency] || 0) + 1;
  });

  // Convert to chart data
  const chartData = Object.keys(frequencyCounts).map(frequency => ({
    name: frequency,
    value: frequencyCounts[frequency]
  }));

  // Colors for different frequencies
  const COLORS = {
    'Daily': '#2ecc71',
    'Weekly': '#3498db',
    'Bi-weekly': '#9b59b6',
    'Monthly': '#e67e22',
    'Quarterly': '#e74c3c',
    'Rarely': '#95a5a6'
  };

  // Get frequency color or default
  const getFrequencyColor = (frequency) => {
    return COLORS[frequency] || '#95a5a6';
  };

  // Get frequency weight for ranking (daily=highest, quarterly=lowest)
  const getFrequencyWeight = (frequency) => {
    const weights = {
      'Daily': 5,
      'Weekly': 4,
      'Bi-weekly': 3,
      'Monthly': 2,
      'Quarterly': 1,
      'Rarely': 0
    };
    return weights[frequency] || 0;
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Profile Update Frequency
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ flex: 1, minHeight: 220 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getFrequencyColor(entry.name)} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} competitors`, 'Frequency']} />
              </PieChart>
            </ResponsiveContainer>
          </Box>
          
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
              Competitor Update Patterns
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {competitors
                .sort((a, b) => getFrequencyWeight(b.updateFrequency) - getFrequencyWeight(a.updateFrequency))
                .map((comp) => (
                  <Box key={comp.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="body2">
                      {comp.position}. {comp.name.split(' ')[0]}
                    </Typography>
                    <Chip 
                      label={comp.updateFrequency} 
                      size="small" 
                      sx={{ 
                        backgroundColor: getFrequencyColor(comp.updateFrequency),
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '0.75rem'
                      }}
                    />
                  </Box>
                ))}
            </Box>
          </Box>
          
          <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(44, 62, 80, 0.05)', borderRadius: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Update Frequency Insight
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {(() => {
                const topFrequencies = competitors
                  .slice(0, 3)
                  .map(comp => comp.updateFrequency);
                
                const mostCommonTopFreq = topFrequencies.sort((a, b) => 
                  topFrequencies.filter(f => f === a).length - 
                  topFrequencies.filter(f => f === b).length
                ).pop();
                
                return `Top ranked competitors tend to update their profiles ${mostCommonTopFreq.toLowerCase()} while lower positions update less frequently. Consistent profile updates correlate with higher rankings.`;
              })()}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UpdateFrequency; 