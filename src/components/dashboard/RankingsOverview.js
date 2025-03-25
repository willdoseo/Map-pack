import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const RankingsOverview = ({ competitors }) => {
  return (
    <div className="rankings-overview">
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        Google Maps Pack Rankings
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Current positions for top competitors in the local search results
      </Typography>
      
      <div className="rankings-grid">
        {competitors.map((comp, index) => (
          <div 
            key={comp.id} 
            className={`ranking-item ${index < 3 ? 'top-ranking' : ''}`}
          >
            <div className="position">{comp.position}</div>
            <div className="details">
              <h3>{comp.name}</h3>
              <div className="stats">
                <span>⭐ {comp.rating}</span>
                <span>({comp.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(44, 62, 80, 0.05)', borderRadius: 2 }}>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          Top 3 Rankings Analysis
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          The top 3 ranked businesses average {(competitors.slice(0, 3).reduce((acc, comp) => acc + comp.reviewCount, 0) / 3).toFixed(0)} reviews with a {(competitors.slice(0, 3).reduce((acc, comp) => acc + comp.rating, 0) / 3).toFixed(1)} rating. All top positions update their profiles at least bi-weekly.
        </Typography>
      </Box>
    </div>
  );
};

export default RankingsOverview; 