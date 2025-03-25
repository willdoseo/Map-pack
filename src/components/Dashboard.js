import React from 'react';
import { Box, Grid, Paper, Typography, Button, Divider, IconButton, Card, CardContent, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  MoreVert as MoreVertIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';
import PropertyStats from './dashboard/PropertyStats';
import PropertyRankingsChart from './dashboard/PropertyRankingsChart';
import CompetitorAnalysisChart from './dashboard/CompetitorAnalysisChart';
import MapPackPositionsChart from './dashboard/MapPackPositionsChart';
import ServiceOfferingsTable from './dashboard/ServiceOfferingsTable';
import ReviewsOverTimeChart from './dashboard/ReviewsOverTimeChart';
import UpdateFrequencyChart from './dashboard/UpdateFrequencyChart';
import CompetitorTrends from './dashboard/CompetitorTrends';
import SocialMediaEngagement from './dashboard/SocialMediaEngagement';
import ClientTestimonials from './dashboard/ClientTestimonials';
import RankingsOverview from './dashboard/RankingsOverview';
import CompetitorComparison from './dashboard/CompetitorComparison';
import ServiceMatrix from './dashboard/ServiceMatrix';
import ReviewTrends from './dashboard/ReviewTrends';
import UpdateFrequency from './dashboard/UpdateFrequency';
import BadgesCredentials from './dashboard/BadgesCredentials';
import CaseResults from './dashboard/CaseResults';
import OptimizationRecommendations from './dashboard/OptimizationRecommendations';
import { recommendationData } from '../data/sampleData';

// Custom styled components
const DashboardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
}));

const DashboardCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 16,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.1)',
  },
}));

const CardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const RefreshButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  width: 36,
  height: 36,
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
}));

// Main Dashboard Component
const Dashboard = ({ competitors, services, selectedCompetitor, comparisonCompetitor }) => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Mock data for last sync time
  const lastSyncTime = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Local SEO Competitive Analysis
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Monitor Google Maps Pack rankings, competitor profiles, service offerings, and generate optimization recommendations
        </Typography>
      </Box>

      <Paper sx={{ mb: 4, p: { xs: 2, md: 3 } }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="dashboard tabs">
            <Tab label="Overview" />
            <Tab label="Competitor Analysis" />
            <Tab label="Recommendations" />
          </Tabs>
        </Box>

        {/* Tab 1: Overview */}
        <Box role="tabpanel" hidden={tabValue !== 0} id="tabpanel-0">
          {tabValue === 0 && (
            <>
              <RankingsOverview competitors={competitors.slice(0, 10)} />
              
              <Grid container spacing={4} sx={{ mt: 2 }}>
                <Grid item xs={12} md={7}>
                  <ReviewTrends competitors={competitors.slice(0, 5)} />
                </Grid>
                <Grid item xs={12} md={5}>
                  <UpdateFrequency competitors={competitors.slice(0, 5)} />
                </Grid>
              </Grid>
              
              <Grid container spacing={4} sx={{ mt: 2 }}>
                <Grid item xs={12} lg={7}>
                  <ServiceMatrix 
                    competitors={competitors.slice(0, 5)} 
                    services={services.slice(0, 12)} 
                  />
                </Grid>
                <Grid item xs={12} lg={5}>
                  <BadgesCredentials competitors={competitors.slice(0, 5)} />
                </Grid>
              </Grid>
            </>
          )}
        </Box>

        {/* Tab 2: Competitor Analysis */}
        <Box role="tabpanel" hidden={tabValue !== 1} id="tabpanel-1">
          {tabValue === 1 && (
            <>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <CompetitorComparison 
                    competitor1={selectedCompetitor} 
                    competitor2={comparisonCompetitor}
                    allCompetitors={competitors}
                  />
                </Grid>
              </Grid>
              
              <Grid container spacing={4} sx={{ mt: 1 }}>
                <Grid item xs={12} md={6}>
                  <CaseResults competitors={competitors.slice(0, 5)} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Keyword Positions
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Select a competitor to view keyword ranking data
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </>
          )}
        </Box>

        {/* Tab 3: Recommendations */}
        <Box role="tabpanel" hidden={tabValue !== 2} id="tabpanel-2">
          {tabValue === 2 && (
            <OptimizationRecommendations 
              recommendations={recommendationData} 
              topCompetitors={competitors.slice(0, 3)}
            />
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Dashboard; 