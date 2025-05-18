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
import ShopNames from '../components/ShopNames';

export default function ShopNamesPage() {
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
        Shop Names Management
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
          <Tab label="Shops List" />
          <Tab label="Add New Shop" />
        </Tabs>
      </Paper>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: 3,
      }}>
        {tab === 0 ? (
          <ShopNames />
        ) : (
          <Paper sx={{ p: { xs: 2, sm: 3 } }}>
            <ShopNames showFormOnly />
          </Paper>
        )}
      </Box>
    </Box>
  );
} 