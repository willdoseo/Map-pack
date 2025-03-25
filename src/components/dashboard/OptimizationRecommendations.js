import React from 'react';
import { 
  Typography, 
  Box, 
  Card, 
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Grid,
  Chip
} from '@mui/material';
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  Stars as StarsIcon,
  Schedule as ScheduleIcon,
  Assignment as AssignmentIcon,
  PriorityHigh as PriorityHighIcon
} from '@mui/icons-material';

const OptimizationRecommendations = ({ recommendations, topCompetitors }) => {
  const { serviceGaps, reviewStrategy, contentStrategy, profileCompletion, prioritizedActions } = recommendations;

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Optimization Recommendations
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PriorityHighIcon color="secondary" sx={{ mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Prioritized Actions
                </Typography>
              </Box>
              
              <Divider sx={{ mb: 2 }} />
              
              <List>
                {prioritizedActions.map((action, index) => (
                  <ListItem key={index} sx={{ py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Box 
                        sx={{ 
                          width: 24, 
                          height: 24, 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          bgcolor: 'secondary.main',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '0.8rem'
                        }}
                      >
                        {index + 1}
                      </Box>
                    </ListItemIcon>
                    <ListItemText primary={action} />
                  </ListItem>
                ))}
              </List>
              
              <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(44, 62, 80, 0.05)', borderRadius: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Impact Analysis
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  These prioritized actions are based on gaps between your profile and the top 3 competitors, focusing on the most impactful changes for improved Map Pack rankings.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <StarsIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Top Performer Analysis
                </Typography>
              </Box>
              
              <Divider sx={{ mb: 2 }} />
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                  Service Gaps
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {serviceGaps.map((gap, index) => (
                    <Chip 
                      key={index} 
                      label={gap} 
                      color="error"
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                  What Top Performers Do Better
                </Typography>
                
                <List dense>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <CheckCircleOutlineIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={`Average ${topCompetitors.reduce((sum, comp) => sum + comp.services.length, 0) / topCompetitors.length} services listed`} 
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <CheckCircleOutlineIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={`${topCompetitors.reduce((sum, comp) => sum + comp.reviewCount, 0) / topCompetitors.length} reviews average`} 
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <CheckCircleOutlineIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={`${topCompetitors.reduce((sum, comp) => sum + comp.reviewVelocity, 0) / topCompetitors.length} new reviews monthly`} 
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <CheckCircleOutlineIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={`${topCompetitors.filter(comp => comp.updateFrequency === 'Weekly' || comp.updateFrequency === 'Bi-weekly').length} update at least bi-weekly`} 
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItem>
                </List>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AssignmentIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Profile Optimization
                </Typography>
              </Box>
              
              <Divider sx={{ mb: 2 }} />
              
              <List dense>
                {profileCompletion.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <CheckCircleOutlineIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={item} 
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItem>
                ))}
              </List>
              
              <Box sx={{ mt: 2, p: 2, bgcolor: 'rgba(44, 62, 80, 0.05)', borderRadius: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Content Strategy Tip
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  When adding new services, include them in both the profile services section and incorporate them into your regular updates with customer success stories.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ScheduleIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Ongoing Maintenance Plan
                </Typography>
              </Box>
              
              <Divider sx={{ mb: 2 }} />
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                  Review Generation Strategy
                </Typography>
                
                <List dense>
                  {reviewStrategy.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon sx={{ minWidth: 28 }}>
                        <CheckCircleOutlineIcon fontSize="small" color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={item} 
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
              
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                  Content Update Schedule
                </Typography>
                
                <List dense>
                  {contentStrategy.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon sx={{ minWidth: 28 }}>
                        <CheckCircleOutlineIcon fontSize="small" color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={item} 
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OptimizationRecommendations; 