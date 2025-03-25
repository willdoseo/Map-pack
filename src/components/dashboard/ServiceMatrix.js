import React, { useState } from 'react';
import { 
  Typography, 
  Box, 
  Card, 
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Chip
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const ServiceMatrix = ({ competitors, services }) => {
  const [selectedServices, setSelectedServices] = useState(services);
  const [highlightGaps, setHighlightGaps] = useState(false);

  const handleServiceFilter = (event) => {
    setSelectedServices(event.target.value);
  };

  const hasService = (competitor, service) => {
    return competitor.services.includes(service);
  };

  const isServiceGap = (service) => {
    if (!highlightGaps) return false;
    
    // Define a gap as: at least one top 3 competitor offers it, but not all
    const topCompetitors = competitors.slice(0, 3);
    const someTopHave = topCompetitors.some(comp => hasService(comp, service));
    const allTopHave = topCompetitors.every(comp => hasService(comp, service));
    
    return someTopHave && !allTopHave;
  };

  return (
    <Card className="service-matrix">
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Service Matrix
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center', mb: 3 }}>
          <FormControl size="small" sx={{ width: 200 }}>
            <InputLabel id="service-filter-label">Filter Services</InputLabel>
            <Select
              labelId="service-filter-label"
              id="service-filter"
              multiple
              value={selectedServices}
              onChange={handleServiceFilter}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.slice(0, 2).map((value) => (
                    <Chip key={value} label={value} size="small" />
                  ))}
                  {selected.length > 2 && (
                    <Chip label={`+${selected.length - 2} more`} size="small" />
                  )}
                </Box>
              )}
            >
              {services.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <FormControlLabel
            control={
              <Checkbox 
                checked={highlightGaps}
                onChange={(e) => setHighlightGaps(e.target.checked)}
                size="small"
              />
            }
            label="Highlight service gaps"
          />
        </Box>
        
        <div className="service-matrix-grid">
          <div className="service-matrix-header">
            Service
          </div>
          
          {competitors.map((comp) => (
            <div key={comp.id} className="service-matrix-header">
              {comp.name.split(' ')[0]}
            </div>
          ))}
          
          {selectedServices.map((service) => (
            <React.Fragment key={service}>
              <div 
                className="service-matrix-cell"
                style={isServiceGap(service) ? { backgroundColor: 'rgba(231, 76, 60, 0.05)', fontWeight: '500' } : {}}
              >
                {service}
                {isServiceGap(service) && (
                  <Chip 
                    label="Gap" 
                    size="small" 
                    color="error" 
                    sx={{ ml: 1, height: 20, fontSize: '0.625rem' }}
                  />
                )}
              </div>
              
              {competitors.map((comp) => (
                <div key={`${comp.id}-${service}`} className="service-matrix-cell">
                  {hasService(comp, service) ? (
                    <CheckIcon className="service-offered" fontSize="small" />
                  ) : (
                    <CloseIcon className="service-not-offered" fontSize="small" />
                  )}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceMatrix; 