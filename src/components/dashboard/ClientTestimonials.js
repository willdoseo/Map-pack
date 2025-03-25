import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  Rating, 
  Chip,
  IconButton,
  Paper
} from '@mui/material';
import { 
  FormatQuote as QuoteIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  Apartment as ApartmentIcon,
  House as HouseIcon
} from '@mui/icons-material';

const ClientTestimonials = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  // Mock testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Property Owner',
      propertyType: 'Residential',
      rating: 5,
      date: 'June 15, 2023',
      text: 'Good Life Property Management has been exceptional in handling my rental property. Their communication is prompt, maintenance issues are resolved quickly, and they have a knack for finding great tenants. My rental income has increased by 15% since switching to them!',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'HOA President',
      propertyType: 'Multi-Family',
      rating: 4.5,
      date: 'August 3, 2023',
      text: 'Our HOA board unanimously voted to renew our contract with Good Life. Their transparent reporting and proactive approach to property maintenance has saved us thousands in potential repair costs. They truly understand the unique challenges of multi-family properties.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Investment Group Manager',
      propertyType: 'Commercial',
      rating: 5,
      date: 'October 22, 2023',
      text: 'As someone managing multiple commercial properties, I need a partner who understands the importance of tenant satisfaction while maximizing ROI. Good Life has expertly balanced these priorities, resulting in longer tenant retention and improved property values.',
      avatar: 'https://randomuser.me/api/portraits/women/67.jpg'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Property Owner',
      propertyType: 'Residential',
      rating: 4.5,
      date: 'November 8, 2023',
      text: 'After having disappointing experiences with two other property management companies, I was hesitant to try again. Good Life has completely changed my perspective. Their team is professional, responsive, and genuinely cares about my property as if it were their own.',
      avatar: 'https://randomuser.me/api/portraits/men/54.jpg'
    },
  ];

  const getPropertyIcon = (type) => {
    switch (type) {
      case 'Residential':
        return <HouseIcon fontSize="small" />;
      case 'Commercial':
      case 'Multi-Family':
        return <ApartmentIcon fontSize="small" />;
      default:
        return <HouseIcon fontSize="small" />;
    }
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
      <Typography variant="h6" gutterBottom>
        Client Testimonials
      </Typography>
      
      <Card 
        variant="outlined" 
        sx={{ 
          height: 'calc(100% - 40px)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          borderColor: theme.palette.divider,
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          }
        }}
      >
        <CardContent sx={{ flex: 1, pb: 1 }}>
          <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar 
                src={activeTestimonial.avatar} 
                alt={activeTestimonial.name}
                sx={{ width: 48, height: 48, mr: 1.5 }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {activeTestimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {activeTestimonial.role}
                </Typography>
              </Box>
            </Box>
            <Chip
              icon={getPropertyIcon(activeTestimonial.propertyType)}
              label={activeTestimonial.propertyType}
              size="small"
              sx={{ 
                bgcolor: theme.palette.background.default,
                color: theme.palette.text.primary,
                borderRadius: 1
              }}
            />
          </Box>
          
          <Box sx={{ position: 'relative', px: 1, py: 1 }}>
            <QuoteIcon 
              sx={{ 
                position: 'absolute', 
                top: -12, 
                left: -12, 
                color: theme.palette.grey[200], 
                fontSize: 40,
                transform: 'rotate(180deg)'
              }} 
            />
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                fontStyle: 'italic',
                position: 'relative',
                zIndex: 1,
                textIndent: '0.5em'
              }}
            >
              {activeTestimonial.text}
            </Typography>
            <QuoteIcon 
              sx={{ 
                position: 'absolute', 
                bottom: -30, 
                right: -12, 
                color: theme.palette.grey[200], 
                fontSize: 40 
              }} 
            />
          </Box>
        </CardContent>

        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            backgroundColor: theme.palette.background.default,
            p: 1.5,
            borderTop: `1px solid ${theme.palette.divider}`
          }}
        >
          <Box>
            <Rating 
              value={activeTestimonial.rating} 
              precision={0.5} 
              readOnly 
              size="small"
              sx={{ color: theme.palette.warning.main }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
              Posted on {activeTestimonial.date}
            </Typography>
          </Box>
          <Box>
            <IconButton 
              size="small" 
              onClick={handlePrev}
              sx={{ mr: 1 }}
            >
              <ArrowBackIcon fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              onClick={handleNext}
            >
              <ArrowForwardIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Card>

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        mt: 1.5,
        position: 'absolute',
        bottom: 8,
        left: 0,
        width: '100%'
      }}>
        {testimonials.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              mx: 0.5,
              bgcolor: index === activeIndex ? theme.palette.primary.main : theme.palette.grey[300],
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ClientTestimonials; 