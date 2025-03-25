import React from 'react';
import { Typography, Box, Grid, Paper, Card, CardContent, Button, Alert } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const CompetitorComparison = ({ competitor1, competitor2, allCompetitors }) => {
  if (!competitor1 && !competitor2) {
    return (
      <Alert severity="info" sx={{ mb: 3 }}>
        Please select at least one competitor from the sidebar to see comparison data.
      </Alert>
    );
  }

  return (
    <div className="comparison-container">
      <div className="comparison-header">
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
          Competitor Comparison
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Side-by-side analysis of competitor data and features
        </Typography>
      </div>
      
      <div className="comparison-grid">
        <div className="metric-column">
          <div className="metric-header">Metric</div>
          <div className="metric-row">Position</div>
          <div className="metric-row">Rating</div>
          <div className="metric-row">Reviews</div>
          <div className="metric-row">Services</div>
          <div className="metric-row">Update Frequency</div>
          <div className="metric-row">Photos</div>
          <div className="metric-row">Posts</div>
          <div className="metric-row">Q&A</div>
          <div className="metric-row">Review Velocity</div>
          <div className="metric-row">Badges</div>
        </div>
        
        <div className="competitor-column">
          <div className="competitor-header">
            {competitor1 ? competitor1.name : 'Not Selected'}
          </div>
          <div className="metric-row">{competitor1 ? competitor1.position : '-'}</div>
          <div className="metric-row">{competitor1 ? `${competitor1.rating} ⭐` : '-'}</div>
          <div className="metric-row">{competitor1 ? competitor1.reviewCount : '-'}</div>
          <div className="metric-row">{competitor1 ? competitor1.services.length : '-'}</div>
          <div className="metric-row">{competitor1 ? competitor1.updateFrequency : '-'}</div>
          <div className="metric-row">{competitor1 ? competitor1.photos : '-'}</div>
          <div className="metric-row">{competitor1 ? competitor1.posts : '-'}</div>
          <div className="metric-row">{competitor1 ? competitor1.qAndA : '-'}</div>
          <div className="metric-row">{competitor1 ? `${competitor1.reviewVelocity}/month` : '-'}</div>
          <div className="metric-row">{competitor1 ? competitor1.badges.length : '-'}</div>
        </div>
        
        <div className="competitor-column">
          <div className="competitor-header">
            {competitor2 ? competitor2.name : 'Not Selected'}
          </div>
          <div className="metric-row">{competitor2 ? competitor2.position : '-'}</div>
          <div className="metric-row">{competitor2 ? `${competitor2.rating} ⭐` : '-'}</div>
          <div className="metric-row">{competitor2 ? competitor2.reviewCount : '-'}</div>
          <div className="metric-row">{competitor2 ? competitor2.services.length : '-'}</div>
          <div className="metric-row">{competitor2 ? competitor2.updateFrequency : '-'}</div>
          <div className="metric-row">{competitor2 ? competitor2.photos : '-'}</div>
          <div className="metric-row">{competitor2 ? competitor2.posts : '-'}</div>
          <div className="metric-row">{competitor2 ? competitor2.qAndA : '-'}</div>
          <div className="metric-row">{competitor2 ? `${competitor2.reviewVelocity}/month` : '-'}</div>
          <div className="metric-row">{competitor2 ? competitor2.badges.length : '-'}</div>
        </div>
      </div>
      
      {competitor1 && competitor2 && (
        <Box sx={{ mt: 4, p: 2, bgcolor: 'rgba(44, 62, 80, 0.05)', borderRadius: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Key Differences
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Typography variant="body2" color="text.secondary">
              <strong>{competitor1.name}</strong> has {competitor1.reviewCount - competitor2.reviewCount} {competitor1.reviewCount > competitor2.reviewCount ? 'more' : 'fewer'} reviews 
              and {competitor1.services.length - competitor2.services.length} {competitor1.services.length > competitor2.services.length ? 'more' : 'fewer'} services listed 
              compared to <strong>{competitor2.name}</strong>.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              <strong>{competitor1.name}</strong> updates {competitor1.updateFrequency.toLowerCase()} while <strong>{competitor2.name}</strong> updates {competitor2.updateFrequency.toLowerCase()}.
            </Typography>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default CompetitorComparison; 