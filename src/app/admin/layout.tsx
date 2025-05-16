'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  People as PeopleIcon,
  VpnKey as VpnKeyIcon,
  Lock as LockIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  padding: theme.spacing(3),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  }),
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  margin: '8px 16px',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '& .MuiListItemIcon-root': {
    color: 'white',
    minWidth: '40px',
  },
  '& .MuiListItemText-primary': {
    color: 'white',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRight: 'none',
    boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
    overflowX: 'hidden',
  },
}));

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
    { text: 'VPN Users', icon: <VpnKeyIcon />, path: '/admin/vpn-users' },
    { text: 'System Users', icon: <PeopleIcon />, path: '/admin/users' },
    { text: 'ShadowSocks Codes', icon: <VpnKeyIcon />, path: '/admin/codes' },
    { text: 'Password Protection', icon: <LockIcon />, path: '/admin/passwords' },
  ];

  const drawer = (
    <Box sx={{ 
      height: '100%', 
      backgroundColor: theme.palette.primary.main,
      overflowX: 'hidden'
    }}>
      <Toolbar sx={{ 
        minHeight: '64px !important',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        mb: 2
      }}>
        <Typography variant="h6" sx={{ 
          color: 'white',
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          Admin Panel
        </Typography>
      </Toolbar>
      <Box sx={{ overflow: 'auto', overflowX: 'hidden' }}>
        <List>
          {menuItems.map((item) => (
            <StyledListItem
              key={item.text}
              onClick={() => {
                router.push(item.path);
                if (isMobile) {
                  setMobileOpen(false);
                }
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </StyledListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 2 }} />
        <List>
          <StyledListItem 
            onClick={handleLogout}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </StyledListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { sm: 'none' },
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          {drawer}
        </Drawer>
        <StyledDrawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </StyledDrawer>
      </Box>

      <Main open={!isMobile}>
        <Toolbar sx={{ display: { sm: 'none' } }} />
        <Box sx={{ 
          mt: { sm: 4 },
          width: '100%',
          height: '100%',
          overflow: 'auto'
        }}>
          {children}
        </Box>
      </Main>
    </Box>
  );
} 