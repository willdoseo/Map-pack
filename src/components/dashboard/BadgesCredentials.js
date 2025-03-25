import React from 'react';
import { 
  Typography, 
  Box, 
  Card, 
  CardContent,
  Chip,
  Divider
} from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BadgeIcon from '@mui/icons-material/Badge';
import VerifiedIcon from '@mui/icons-material/Verified';

const BadgesCredentials = ({ competitors }) => {
  // Get all unique badges across competitors
  const allBadges = [...new Set(competitors.flatMap(comp => comp.badges))];
  
  // Get all unique attributes across competitors
  const allAttributes = [...new Set(competitors.flatMap(comp => comp.attributes))];
  
  // Count how many competitors have each badge
  const badgeCounts = allBadges.reduce((acc, badge) => {
    acc[badge] = competitors.filter(comp => comp.badges.includes(badge)).length;
    return acc;
  }, {});
  
  // Count how many competitors have each attribute
  const attributeCounts = allAttributes.reduce((acc, attr) => {
    acc[attr] = competitors.filter(comp => comp.attributes.includes(attr)).length;
    return acc;
  }, {});
  
  // Sort badges by prevalence
  const sortedBadges = allBadges.sort((a, b) => badgeCounts[b] - badgeCounts[a]);
  
  // Sort attributes by prevalence
  const sortedAttributes = allAttributes.sort((a, b) => attributeCounts[b] - attributeCounts[a]);

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Badges & Credentials
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
            Most Common Badges
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {sortedBadges.map(badge => (
              <Chip
                key={badge}
                icon={<WorkspacePremiumIcon fontSize="small" />}
                label={`${badge} (${badgeCounts[badge]})`}
                sx={{ 
                  backgroundColor: badgeCounts[badge] >= 3 ? 'rgba(46, 204, 113, 0.1)' : 'rgba(44, 62, 80, 0.05)',
                  border: badgeCounts[badge] >= 3 ? '1px solid rgba(46, 204, 113, 0.3)' : 'none'
                }}
              />
            ))}
          </Box>
        </Box>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
            Business Attributes
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {sortedAttributes.map(attr => (
              <Chip
                key={attr}
                icon={<BadgeIcon fontSize="small" />}
                label={`${attr} (${attributeCounts[attr]})`}
                variant="outlined"
                size="small"
              />
            ))}
          </Box>
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        <Typography variant="body2" sx={{ fontWeight: 500, mb: 2 }}>
          Competitor Badges Breakdown
        </Typography>
        
        {competitors.map(comp => (
          <Box key={comp.id} sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {comp.position}. {comp.name.split(' ')[0]}
              </Typography>
              {comp.badges.length > 0 && (
                <Chip 
                  icon={<VerifiedIcon fontSize="small" />}
                  label={`${comp.badges.length} badges`}
                  size="small"
                  color={comp.position <= 3 ? "primary" : "default"}
                  sx={{ ml: 1, height: 20, fontSize: '0.625rem' }}
                />
              )}
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {comp.badges.map(badge => (
                <Chip
                  key={badge}
                  label={badge}
                  size="small"
                  sx={{ 
                    fontSize: '0.7rem', 
                    height: 24,
                    backgroundColor: comp.position <= 3 
                      ? 'rgba(44, 62, 80, 0.1)' 
                      : 'rgba(189, 195, 199, 0.2)'
                  }}
                />
              ))}
              {comp.badges.length === 0 && (
                <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                  No badges listed
                </Typography>
              )}
            </Box>
          </Box>
        ))}
        
        <Box sx={{ mt: 2, p: 2, bgcolor: 'rgba(44, 62, 80, 0.05)', borderRadius: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Badge Insight
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {(() => {
              const topBadgeCounts = competitors.slice(0, 3).map(comp => comp.badges.length);
              const avgTopBadges = topBadgeCounts.reduce((a, b) => a + b, 0) / topBadgeCounts.length;
              
              const lowerBadgeCounts = competitors.slice(3).map(comp => comp.badges.length);
              const avgLowerBadges = lowerBadgeCounts.reduce((a, b) => a + b, 0) / lowerBadgeCounts.length;
              
              const mostCommonBadge = sortedBadges[0];
              
              return `Top competitors average ${avgTopBadges.toFixed(1)} badges vs ${avgLowerBadges.toFixed(1)} for lower positions. "${mostCommonBadge}" appears in ${badgeCounts[mostCommonBadge]} out of ${competitors.length} profiles.`;
            })()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BadgesCredentials; 