import React from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Divider,
  Typography,
  Avatar,
  styled
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  BarChart as AnalyticsIcon,
  Home as PropertyIcon,
  People as TenantsIcon,
  Build as MaintenanceIcon,
  AttachMoney as FinanceIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  ExitToApp as LogoutIcon
} from '@mui/icons-material';

// Custom styled components
const SidebarContainer = styled(Drawer)(({ theme }) => ({
  width: 280,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 280,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    borderRight: 'none',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.05)',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
}));

const Logo = styled('img')({
  height: 48,
  marginRight: 12,
});

const UserSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 3),
  marginBottom: theme.spacing(2),
}));

const UserInfo = styled(Box)({
  marginLeft: 12,
});

const NavItem = styled(ListItemButton)(({ theme, active }) => ({
  borderRadius: 8,
  marginBottom: 4,
  marginLeft: 8,
  marginRight: 8,
  backgroundColor: active ? theme.palette.primary.light + '20' : 'transparent',
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.primary.light + '10',
  },
  '& .MuiListItemIcon-root': {
    color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  },
}));

// Menu items data
const mainMenuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, active: true },
  { text: 'Analytics', icon: <AnalyticsIcon /> },
  { text: 'Properties', icon: <PropertyIcon /> },
  { text: 'Tenants', icon: <TenantsIcon /> },
  { text: 'Maintenance', icon: <MaintenanceIcon /> },
  { text: 'Finance', icon: <FinanceIcon /> },
];

const secondaryMenuItems = [
  { text: 'Settings', icon: <SettingsIcon /> },
  { text: 'Help & Support', icon: <HelpIcon /> },
  { text: 'Logout', icon: <LogoutIcon /> },
];

const Sidebar = () => {
  return (
    <SidebarContainer variant="permanent">
      <LogoContainer>
        <Logo src="/logo.png" alt="PropertyPulse" />
        <Typography variant="h5" fontWeight={600} color="primary">
          PropertyPulse
        </Typography>
      </LogoContainer>
      
      <UserSection>
        <Avatar 
          sx={{ 
            width: 48, 
            height: 48, 
            bgcolor: '#3b4979' 
          }}
        >
          WF
        </Avatar>
        <UserInfo>
          <Typography variant="subtitle1" fontWeight={600}>
            Will Furcolo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Property Manager
          </Typography>
        </UserInfo>
      </UserSection>
      
      <Divider sx={{ mx: 2, mb: 2 }} />
      
      <Box mb={2}>
        <Typography 
          variant="overline" 
          color="text.secondary"
          sx={{ px: 3, py: 1, display: 'block' }}
        >
          Main Menu
        </Typography>
        <List>
          {mainMenuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <NavItem active={item.active}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{ 
                    fontWeight: item.active ? 600 : 400 
                  }} 
                />
              </NavItem>
            </ListItem>
          ))}
        </List>
      </Box>
      
      <Divider sx={{ mx: 2, mb: 2 }} />
      
      <Box>
        <Typography 
          variant="overline" 
          color="text.secondary"
          sx={{ px: 3, py: 1, display: 'block' }}
        >
          Other
        </Typography>
        <List>
          {secondaryMenuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <NavItem>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </NavItem>
            </ListItem>
          ))}
        </List>
      </Box>
    </SidebarContainer>
  );
};

export default Sidebar; 