'use client';

import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SystemUsers from '../components/SystemUsers';

export default function UsersPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [tab, setTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ 
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 600,
        color: theme.palette.primary.main
      }}>
        System Users Management
      </Typography>

      <Paper sx={{ width: '100%', mb: 3 }}>
        <Tabs 
          value={tab} 
          onChange={handleTabChange}
          variant={isMobile ? "fullWidth" : "standard"}
          centered={!isMobile}
          sx={{
            '& .MuiTab-root': {
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
            }
          }}
        >
          <Tab label="Users List" />
          <Tab label="Add New User" />
        </Tabs>
      </Paper>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: 3,
      }}>
        {tab === 0 ? (
          <SystemUsers />
        ) : (
          <Paper sx={{ p: { xs: 2, sm: 3 } }}>

            <SystemUsers showFormOnly />
          </Paper>
        )}
      </Box>
    </Box>
  );
} 