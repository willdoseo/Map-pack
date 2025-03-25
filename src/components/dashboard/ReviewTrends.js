import React from 'react';
import { 
  Typography, 
  Box, 
  Card, 
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ReviewTrends = ({ competitors }) => {
  // Process data for chart
  const chartData = competitors.map(comp => ({
    name: comp.name.split(' ')[0],
    reviews: comp.reviewCount,
    velocity: comp.reviewVelocity,
    position: comp.position,
    rating: comp.rating
  }));

  // Calculate metrics
  const totalReviews = competitors.reduce((sum, comp) => sum + comp.reviewCount, 0);
  const avgRating = competitors.reduce((sum, comp) => sum + comp.rating, 0) / competitors.length;
  const avgReviewVelocity = competitors.reduce((sum, comp) => sum + comp.reviewVelocity, 0) / competitors.length;
  
  // Get the max review count for scaling the chart
  const maxReviews = Math.max(...competitors.map(comp => comp.reviewCount));

  // Determine the correlation between review count and position
  const reviewPositionCorrelation = competitors
    .sort((a, b) => a.position - b.position)
    .map(comp => comp.reviewCount)
    .every((count, i, arr) => i === 0 || count <= arr[i-1])
    ? "Strong negative correlation"
    : "Mixed correlation";

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Review Analysis
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [value, name === "reviews" ? "Reviews" : "Review Velocity"]}
                labelFormatter={(value) => `${value}`}
              />
              <Legend />
              <Bar name="Reviews" dataKey="reviews" fill="#2c3e50" />
              <Bar name="Monthly New Reviews" dataKey="velocity" fill="#e74c3c" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Total Reviews
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {totalReviews}
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="body2" color="text.secondary">
              Average Rating
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {avgRating.toFixed(1)} ⭐
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="body2" color="text.secondary">
              Monthly New Reviews
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {avgReviewVelocity.toFixed(1)}
            </Typography>
          </Box>
        </Box>
        
        <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
          Competitor Review Breakdown
        </Typography>
        
        <TableContainer sx={{ mb: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Competitor</TableCell>
                <TableCell align="right">Reviews</TableCell>
                <TableCell align="right">Rating</TableCell>
                <TableCell align="right">Monthly</TableCell>
                <TableCell>Percentage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {competitors.map((comp) => (
                <TableRow key={comp.id}>
                  <TableCell component="th" scope="row">
                    {comp.position}. {comp.name.split(' ')[0]}
                  </TableCell>
                  <TableCell align="right">{comp.reviewCount}</TableCell>
                  <TableCell align="right">{comp.rating} ⭐</TableCell>
                  <TableCell align="right">{comp.reviewVelocity}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress 
                          variant="determinate" 
                          value={(comp.reviewCount / maxReviews) * 100} 
                          sx={{ 
                            height: 6, 
                            borderRadius: 3,
                            backgroundColor: 'rgba(44, 62, 80, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: comp.position <= 3 ? '#e74c3c' : '#2c3e50',
                            }
                          }}
                        />
                      </Box>
                      <Box sx={{ minWidth: 35 }}>
                        <Typography variant="body2" color="text.secondary">
                          {((comp.reviewCount / totalReviews) * 100).toFixed(0)}%
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <Box sx={{ p: 2, bgcolor: 'rgba(44, 62, 80, 0.05)', borderRadius: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Review Insights
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {reviewPositionCorrelation} between review count and ranking position.
            Top 3 competitors average {(competitors.slice(0, 3).reduce((sum, comp) => sum + comp.reviewVelocity, 0) / 3).toFixed(1)} new reviews monthly,
            compared to {(competitors.slice(3).reduce((sum, comp) => sum + comp.reviewVelocity, 0) / (competitors.length - 3)).toFixed(1)} for lower positions.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReviewTrends; 