import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Typography,
  Box,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Check as CheckIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: '0.85rem',
  padding: '12px 16px',
  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected,
  },
}));

const ServiceChip = styled(Chip)(({ theme, serviceType }) => {
  let color;
  switch (serviceType) {
    case 'basic':
      color = theme.palette.info.main;
      break;
    case 'advanced':
      color = theme.palette.success.main;
      break;
    case 'premium':
      color = theme.palette.secondary.main;
      break;
    default:
      color = theme.palette.primary.main;
  }
  
  return {
    backgroundColor: `${color}10`,
    color: color,
    fontWeight: 600,
    fontSize: '0.75rem',
    height: 24,
  };
});

const ServiceOfferingsTable = () => {
  // Service offerings data
  const services = [
    {
      service: 'Tenant Screening',
      goodLife: true,
      goodLifeType: 'advanced',
      utopia: true,
      utopiaType: 'advanced',
      weLease: true,
      weLeaseType: 'basic',
    },
    {
      service: 'Rent Collection',
      goodLife: true,
      goodLifeType: 'advanced',
      utopia: true,
      utopiaType: 'advanced',
      weLease: true,
      weLeaseType: 'advanced',
    },
    {
      service: 'Property Marketing',
      goodLife: true,
      goodLifeType: 'premium',
      utopia: true,
      utopiaType: 'advanced',
      weLease: true,
      weLeaseType: 'basic',
    },
    {
      service: 'Maintenance Coordination',
      goodLife: true,
      goodLifeType: 'advanced',
      utopia: true,
      utopiaType: 'basic',
      weLease: true,
      weLeaseType: 'advanced',
    },
    {
      service: 'Legal Compliance',
      goodLife: true,
      goodLifeType: 'premium',
      utopia: true,
      utopiaType: 'advanced',
      weLease: true,
      weLeaseType: 'basic',
    },
    {
      service: 'Property Inspections',
      goodLife: true,
      goodLifeType: 'premium',
      utopia: true,
      utopiaType: 'basic',
      weLease: true,
      weLeaseType: 'advanced',
    },
    {
      service: 'Eviction Services',
      goodLife: true,
      goodLifeType: 'advanced',
      utopia: true,
      utopiaType: 'advanced',
      weLease: false,
      weLeaseType: null,
    },
    {
      service: 'Online Owner Portal',
      goodLife: true,
      goodLifeType: 'premium',
      utopia: true,
      utopiaType: 'advanced',
      weLease: true,
      weLeaseType: 'basic',
    },
    {
      service: 'Online Tenant Portal',
      goodLife: true,
      goodLifeType: 'premium',
      utopia: true,
      utopiaType: 'advanced',
      weLease: true,
      weLeaseType: 'advanced',
    },
    {
      service: 'Financial Reporting',
      goodLife: true,
      goodLifeType: 'premium',
      utopia: true,
      utopiaType: 'advanced',
      weLease: true,
      weLeaseType: 'basic',
    },
    {
      service: '24/7 Emergency Support',
      goodLife: true,
      goodLifeType: 'premium',
      utopia: true,
      utopiaType: 'basic',
      weLease: false,
      weLeaseType: null,
    },
    {
      service: 'Rental Market Analysis',
      goodLife: true,
      goodLifeType: 'premium',
      utopia: true,
      utopiaType: 'advanced',
      weLease: false,
      weLeaseType: null,
    },
  ];

  const renderServiceLevel = (offered, serviceType) => {
    if (!offered) {
      return <CloseIcon fontSize="small" color="error" />;
    }

    let label;
    switch (serviceType) {
      case 'basic':
        label = 'Basic';
        break;
      case 'advanced':
        label = 'Advanced';
        break;
      case 'premium':
        label = 'Premium';
        break;
      default:
        label = 'Standard';
    }

    return (
      <ServiceChip 
        size="small" 
        label={label} 
        serviceType={serviceType} 
      />
    );
  };

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table size="small" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>Service</StyledTableCell>
            <StyledTableCell align="center">Good Life</StyledTableCell>
            <StyledTableCell align="center">Utopia</StyledTableCell>
            <StyledTableCell align="center">WeLease</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((row) => (
            <StyledTableRow key={row.service}>
              <StyledTableCell component="th" scope="row">
                <Typography variant="body2" fontWeight={500}>
                  {row.service}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                {renderServiceLevel(row.goodLife, row.goodLifeType)}
              </StyledTableCell>
              <StyledTableCell align="center">
                {renderServiceLevel(row.utopia, row.utopiaType)}
              </StyledTableCell>
              <StyledTableCell align="center">
                {renderServiceLevel(row.weLease, row.weLeaseType)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ServiceOfferingsTable; 