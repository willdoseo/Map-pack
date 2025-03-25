import React from 'react';
import { useTheme } from '@mui/material/styles';
import { 
  Box, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Chip,
  LinearProgress,
  Tooltip
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat as TrendingFlatIcon
} from '@mui/icons-material';

const CompetitorTrends = () => {
  const theme = useTheme();

  // Mock data for competitor trends
  const trendData = [
    {
      metric: 'Review Growth',
      goodLife: { value: 15, trend: 'up' },
      utopia: { value: 8, trend: 'up' },
      weLease: { value: -3, trend: 'down' }
    },
    {
      metric: 'Visibility Score',
      goodLife: { value: 12, trend: 'up' },
      utopia: { value: -2, trend: 'down' },
      weLease: { value: 5, trend: 'up' }
    },
    {
      metric: 'Engagement Rate',
      goodLife: { value: 9, trend: 'up' },
      utopia: { value: 1, trend: 'flat' },
      weLease: { value: 7, trend: 'up' }
    },
    {
      metric: 'Service Expansion',
      goodLife: { value: 3, trend: 'up' },
      utopia: { value: 0, trend: 'flat' },
      weLease: { value: 2, trend: 'up' }
    },
    {
      metric: 'Search Ranking',
      goodLife: { value: 4, trend: 'up' },
      utopia: { value: -1, trend: 'down' },
      weLease: { value: 0, trend: 'flat' }
    }
  ];

  // Helper function to render trend icon
  const renderTrendIcon = (trend, value) => {
    if (trend === 'up') {
      return (
        <Tooltip title={`${value > 0 ? '+' : ''}${value}% increase`}>
          <TrendingUpIcon 
            sx={{ 
              color: 'success.main', 
              fontSize: 18, 
              verticalAlign: 'middle', 
              ml: 0.5 
            }} 
          />
        </Tooltip>
      );
    } else if (trend === 'down') {
      return (
        <Tooltip title={`${value}% decrease`}>
          <TrendingDownIcon 
            sx={{ 
              color: 'error.main', 
              fontSize: 18, 
              verticalAlign: 'middle', 
              ml: 0.5 
            }} 
          />
        </Tooltip>
      );
    } else {
      return (
        <Tooltip title="No significant change">
          <TrendingFlatIcon 
            sx={{ 
              color: 'text.secondary', 
              fontSize: 18, 
              verticalAlign: 'middle', 
              ml: 0.5 
            }} 
          />
        </Tooltip>
      );
    }
  };

  // Helper function to render trend percentage
  const renderTrendValue = (value, trend) => {
    let color;
    let prefix = '';
    
    if (trend === 'up') {
      color = theme.palette.success.main;
      prefix = '+';
    } else if (trend === 'down') {
      color = theme.palette.error.main;
      prefix = '';
    } else {
      color = theme.palette.text.secondary;
      prefix = '';
    }

    return (
      <Typography 
        variant="body2" 
        component="span" 
        sx={{ 
          color,
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {value !== 0 ? `${prefix}${value}%` : '0%'}
        {renderTrendIcon(trend, value)}
      </Typography>
    );
  };
  
  // Calculate progress bar percentage
  const getProgressValue = (value) => {
    const absValue = Math.abs(value);
    // Scale to make progress bar more visible (15% change = 100% bar)
    return Math.min(absValue * 6.6, 100);
  };

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <TableContainer sx={{ height: '100%' }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell 
                sx={{ 
                  fontWeight: 600, 
                  backgroundColor: theme.palette.background.paper 
                }}
              >
                Metric
              </TableCell>
              <TableCell 
                align="center" 
                sx={{ 
                  fontWeight: 600, 
                  backgroundColor: theme.palette.background.paper 
                }}
              >
                Good Life
              </TableCell>
              <TableCell 
                align="center" 
                sx={{ 
                  fontWeight: 600, 
                  backgroundColor: theme.palette.background.paper 
                }}
              >
                Utopia
              </TableCell>
              <TableCell 
                align="center" 
                sx={{ 
                  fontWeight: 600, 
                  backgroundColor: theme.palette.background.paper 
                }}
              >
                WeLease
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trendData.map((row) => (
              <TableRow key={row.metric}>
                <TableCell component="th" scope="row">
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {row.metric}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                    {renderTrendValue(row.goodLife.value, row.goodLife.trend)}
                    <LinearProgress
                      variant="determinate"
                      value={getProgressValue(row.goodLife.value)}
                      sx={{ 
                        width: '80%', 
                        height: 4,
                        borderRadius: 2,
                        bgcolor: theme.palette.grey[200],
                        '& .MuiLinearProgress-bar': {
                          bgcolor: row.goodLife.trend === 'up' 
                            ? 'success.main' 
                            : row.goodLife.trend === 'down' 
                              ? 'error.main' 
                              : 'text.secondary'
                        }
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                    {renderTrendValue(row.utopia.value, row.utopia.trend)}
                    <LinearProgress
                      variant="determinate"
                      value={getProgressValue(row.utopia.value)}
                      sx={{ 
                        width: '80%',
                        height: 4,
                        borderRadius: 2,
                        bgcolor: theme.palette.grey[200],
                        '& .MuiLinearProgress-bar': {
                          bgcolor: row.utopia.trend === 'up' 
                            ? 'success.main' 
                            : row.utopia.trend === 'down' 
                              ? 'error.main' 
                              : 'text.secondary'
                        }
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                    {renderTrendValue(row.weLease.value, row.weLease.trend)}
                    <LinearProgress
                      variant="determinate"
                      value={getProgressValue(row.weLease.value)}
                      sx={{ 
                        width: '80%',
                        height: 4,
                        borderRadius: 2,
                        bgcolor: theme.palette.grey[200],
                        '& .MuiLinearProgress-bar': {
                          bgcolor: row.weLease.trend === 'up' 
                            ? 'success.main' 
                            : row.weLease.trend === 'down' 
                              ? 'error.main' 
                              : 'text.secondary'
                        }
                      }}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CompetitorTrends; 