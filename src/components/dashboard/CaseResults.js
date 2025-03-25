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
  Paper
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const CaseResults = ({ competitors }) => {
  // Flatten all case results from all competitors
  const allCaseResults = competitors.flatMap(comp => 
    comp.caseResults.map(result => ({
      ...result,
      competitor: comp.name,
      position: comp.position
    }))
  );

  // Group by case type and find highest settlements
  const caseTypeHighs = {};
  allCaseResults.forEach(result => {
    const amount = parseFloat(result.amount.replace(/[^0-9.]/g, ''));
    if (!caseTypeHighs[result.type] || amount > caseTypeHighs[result.type].amount) {
      caseTypeHighs[result.type] = {
        type: result.type,
        amount,
        formattedAmount: result.amount,
        competitor: result.competitor,
        position: result.position
      };
    }
  });

  // Sort by highest settlements
  const sortedResults = allCaseResults.sort((a, b) => {
    const amountA = parseFloat(a.amount.replace(/[^0-9.]/g, ''));
    const amountB = parseFloat(b.amount.replace(/[^0-9.]/g, ''));
    return amountB - amountA;
  });

  // Get top case results
  const topResults = sortedResults.slice(0, 10);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Case Results & Settlements
        </Typography>
        
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgba(44, 62, 80, 0.05)' }}>
                <TableCell>Competitor</TableCell>
                <TableCell>Case Type</TableCell>
                <TableCell align="right">Settlement</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topResults.map((result, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {result.position}. {result.competitor.split(' ')[0]}
                  </TableCell>
                  <TableCell>{result.type}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600 }}>
                    {result.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <Typography variant="body2" sx={{ fontWeight: 500, mb: 2 }}>
          Highest Settlements by Case Type
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {Object.values(caseTypeHighs).map(high => (
            <Box 
              key={high.type} 
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                p: 1.5, 
                borderRadius: 1,
                backgroundColor: 'rgba(44, 62, 80, 0.03)',
                border: '1px solid rgba(44, 62, 80, 0.1)'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AttachMoneyIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  {high.type}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <Typography variant="body2" fontWeight={600}>
                  {high.formattedAmount}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {high.competitor.split(' ')[0]}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        
        <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(44, 62, 80, 0.05)', borderRadius: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Case Results Insight
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {(() => {
              const topCompetitorResults = competitors
                .filter(comp => comp.position <= 3)
                .flatMap(comp => comp.caseResults);
              
              const topAvg = topCompetitorResults.length > 0 
                ? topCompetitorResults.reduce((sum, result) => {
                    return sum + parseFloat(result.amount.replace(/[^0-9.]/g, ''));
                  }, 0) / topCompetitorResults.length
                : 0;
              
              const highestType = Object.values(caseTypeHighs).sort((a, b) => b.amount - a.amount)[0];
              
              return `Top 3 competitors showcase an average settlement of $${topAvg.toFixed(1)}M. The highest settlements are in ${highestType.type} cases, with ${highestType.competitor.split(' ')[0]} leading at ${highestType.formattedAmount}.`;
            })()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CaseResults; 