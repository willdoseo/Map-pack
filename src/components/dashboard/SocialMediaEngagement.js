import React from 'react';
import { useTheme } from '@mui/material/styles';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Divider,
  Avatar
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon
} from '@mui/icons-material';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts';

const SocialMediaEngagement = () => {
  const theme = useTheme();
  
  // Social media data
  const socialMediaData = [
    { name: 'Facebook', goodLife: 85, utopia: 62, weLease: 78, fullMark: 100 },
    { name: 'Instagram', goodLife: 92, utopia: 70, weLease: 89, fullMark: 100 },
    { name: 'Twitter', goodLife: 65, utopia: 55, weLease: 49, fullMark: 100 },
    { name: 'LinkedIn', goodLife: 78, utopia: 86, weLease: 65, fullMark: 100 },
    { name: 'YouTube', goodLife: 70, utopia: 45, weLease: 55, fullMark: 100 },
  ];

  // Platform-specific metrics
  const platformMetrics = {
    'Good Life': {
      'Facebook': { followers: '2.4K', engagement: '5.6%', posts: 38 },
      'Instagram': { followers: '3.8K', engagement: '7.2%', posts: 52 },
      'Twitter': { followers: '1.2K', engagement: '3.1%', posts: 64 },
      'LinkedIn': { followers: '1.8K', engagement: '4.5%', posts: 26 },
      'YouTube': { followers: '950', engagement: '3.8%', posts: 15 },
    },
    'Utopia': {
      'Facebook': { followers: '1.8K', engagement: '4.2%', posts: 26 },
      'Instagram': { followers: '2.2K', engagement: '5.1%', posts: 36 },
      'Twitter': { followers: '980', engagement: '2.6%', posts: 48 },
      'LinkedIn': { followers: '2.1K', engagement: '5.7%', posts: 32 },
      'YouTube': { followers: '620', engagement: '2.4%', posts: 8 },
    },
    'WeLease': {
      'Facebook': { followers: '2.1K', engagement: '4.9%', posts: 32 },
      'Instagram': { followers: '3.2K', engagement: '6.5%', posts: 45 },
      'Twitter': { followers: '850', engagement: '2.3%', posts: 38 },
      'LinkedIn': { followers: '1.3K', engagement: '3.8%', posts: 24 },
      'YouTube': { followers: '780', engagement: '3.2%', posts: 12 },
    }
  };

  // Render social icon based on platform name
  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'Facebook':
        return <FacebookIcon sx={{ color: '#4267B2' }} />;
      case 'Instagram':
        return <InstagramIcon sx={{ color: '#C13584' }} />;
      case 'Twitter':
        return <TwitterIcon sx={{ color: '#1DA1F2' }} />;
      case 'LinkedIn':
        return <LinkedInIcon sx={{ color: '#0077B5' }} />;
      case 'YouTube':
        return <YouTubeIcon sx={{ color: '#FF0000' }} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Box sx={{ height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Social Media Engagement Score
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={socialMediaData}>
                <PolarGrid stroke={theme.palette.grey[300]} />
                <PolarAngleAxis 
                  dataKey="name" 
                  tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
                />
                <PolarRadiusAxis 
                  angle={30} 
                  domain={[0, 100]} 
                  tick={{ fill: theme.palette.text.secondary, fontSize: 10 }} 
                />
                <Radar 
                  name="Good Life" 
                  dataKey="goodLife" 
                  stroke={theme.palette.primary.main} 
                  fill={theme.palette.primary.main} 
                  fillOpacity={0.5} 
                />
                <Radar 
                  name="Utopia" 
                  dataKey="utopia" 
                  stroke={theme.palette.secondary.main} 
                  fill={theme.palette.secondary.main} 
                  fillOpacity={0.5} 
                />
                <Radar 
                  name="WeLease" 
                  dataKey="weLease" 
                  stroke="#00897b" 
                  fill="#00897b" 
                  fillOpacity={0.5} 
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box sx={{ height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Platform Metrics
            </Typography>
            <Card variant="outlined" sx={{ height: 'calc(100% - 30px)', overflow: 'auto' }}>
              <CardContent sx={{ p: 1 }}>
                {Object.entries(platformMetrics['Good Life']).map(([platform, metrics], index) => (
                  <Box key={platform} sx={{ mb: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar
                        sx={{ 
                          width: 28, 
                          height: 28, 
                          mr: 1,
                          bgcolor: 'background.paper',
                          boxShadow: 1
                        }}
                      >
                        {getSocialIcon(platform)}
                      </Avatar>
                      <Typography variant="subtitle2">{platform}</Typography>
                    </Box>
                    <Grid container spacing={1} sx={{ ml: 0.5 }}>
                      <Grid item xs={4}>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          Followers
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                            {metrics.followers}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          Engagement
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                            {metrics.engagement}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          Posts (90d)
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                            {metrics.posts}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    {index < Object.entries(platformMetrics['Good Life']).length - 1 && (
                      <Divider sx={{ mt: 1.5 }} />
                    )}
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialMediaEngagement; 