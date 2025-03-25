import React from 'react';
import { Box, Grid, Paper, Typography, Button, Divider, IconButton } from '@mui/material';
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
const Dashboard = () => {
  // Mock data for last sync time
  const lastSyncTime = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <Box sx={{ py: 2, px: 1 }}>
      <DashboardHeader>
        <Box>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Property Management Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Monitor your property rankings, competitor analysis, and market trends
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Last synced: {lastSyncTime}
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<RefreshIcon />}
          >
            Refresh Data
          </Button>
        </Box>
      </DashboardHeader>

      <Grid container spacing={3}>
        {/* Property Statistics */}
        <Grid item xs={12}>
          <PropertyStats />
        </Grid>

        {/* Maps Pack Rankings Chart */}
        <Grid item xs={12} md={8}>
          <DashboardCard className="dashboard-card fade-in">
            <CardHeader>
              <Typography variant="h6" fontWeight={600}>
                Google Maps Pack Rankings
              </Typography>
              <Box>
                <RefreshButton size="small">
                  <RefreshIcon fontSize="small" />
                </RefreshButton>
                <IconButton size="small">
                  <MoreVertIcon fontSize="small" />
                </IconButton>
              </Box>
            </CardHeader>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ height: 350, flex: 1 }}>
              <PropertyRankingsChart />
            </Box>
          </DashboardCard>
        </Grid>

        {/* Competitor Analysis */}
        <Grid item xs={12} md={4}>
          <DashboardCard className="dashboard-card fade-in">
            <CardHeader>
              <Typography variant="h6" fontWeight={600}>
                Competitor Analysis
              </Typography>
              <IconButton size="small">
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </CardHeader>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ height: 350, flex: 1 }}>
              <CompetitorAnalysisChart />
            </Box>
          </DashboardCard>
        </Grid>

        {/* Maps Pack Positions Analysis */}
        <Grid item xs={12} md={6}>
          <DashboardCard className="dashboard-card fade-in">
            <CardHeader>
              <Typography variant="h6" fontWeight={600}>
                Maps Pack Positions Analysis
              </Typography>
              <IconButton size="small">
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </CardHeader>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ height: 300, flex: 1 }}>
              <MapPackPositionsChart />
            </Box>
          </DashboardCard>
        </Grid>

        {/* Service Offerings Comparison */}
        <Grid item xs={12} md={6}>
          <DashboardCard className="dashboard-card fade-in">
            <CardHeader>
              <Typography variant="h6" fontWeight={600}>
                Service Offerings Comparison
              </Typography>
              <IconButton size="small">
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </CardHeader>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ height: 300, overflowY: 'auto', flex: 1 }}>
              <ServiceOfferingsTable />
            </Box>
          </DashboardCard>
        </Grid>

        {/* Social Media Engagement */}
        <Grid item xs={12} md={8}>
          <DashboardCard className="dashboard-card fade-in">
            <CardHeader>
              <Typography variant="h6" fontWeight={600}>
                Social Media Engagement
              </Typography>
              <IconButton size="small">
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </CardHeader>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ height: 350, flex: 1 }}>
              <SocialMediaEngagement />
            </Box>
          </DashboardCard>
        </Grid>

        {/* Client Testimonials */}
        <Grid item xs={12} md={4}>
          <DashboardCard className="dashboard-card fade-in">
            <CardHeader>
              <Typography variant="h6" fontWeight={600}>
                Client Testimonials
              </Typography>
              <IconButton size="small">
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </CardHeader>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ height: 350, flex: 1 }}>
              <ClientTestimonials />
            </Box>
          </DashboardCard>
        </Grid>

        {/* Reviews Over Time */}
        <Grid item xs={12} md={4}>
          <DashboardCard className="dashboard-card fade-in">
            <CardHeader>
              <Typography variant="h6" fontWeight={600}>
                Reviews Over Time
              </Typography>
              <IconButton size="small">
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </CardHeader>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ height: 300, flex: 1 }}>
              <ReviewsOverTimeChart />
            </Box>
          </DashboardCard>
        </Grid>

        {/* Update Frequency */}
        <Grid item xs={12} md={4}>
          <DashboardCard className="dashboard-card fade-in">
            <CardHeader>
              <Typography variant="h6" fontWeight={600}>
                Profile Update Frequency
              </Typography>
              <IconButton size="small">
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </CardHeader>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ height: 300, flex: 1 }}>
              <UpdateFrequencyChart />
            </Box>
          </DashboardCard>
        </Grid>

        {/* Competitor Trends */}
        <Grid item xs={12} md={4}>
          <DashboardCard className="dashboard-card fade-in">
            <CardHeader>
              <Typography variant="h6" fontWeight={600}>
                Competitor Trends
              </Typography>
              <IconButton size="small">
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </CardHeader>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ height: 300, flex: 1 }}>
              <CompetitorTrends />
            </Box>
          </DashboardCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 