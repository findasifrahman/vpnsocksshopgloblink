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
import ShadowSocksCodes from '../components/ShadowSocksCodes';

export default function CodesPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [tab, setTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ShadowSocks Codes Management
      </Typography>

      <Paper sx={{ width: '100%', mb: 3 }}>
        <Tabs 
          value={tab} 
          onChange={handleTabChange}
          variant={isMobile ? "fullWidth" : "standard"}
          centered={!isMobile}
        >
          <Tab label="Codes List" />
          <Tab label="Add New Code" />
        </Tabs>
      </Paper>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: 3,
      }}>
        {tab === 0 ? (
          <ShadowSocksCodes />
        ) : (
          <Paper sx={{ p: { xs: 2, sm: 3 } }}>
            <Typography variant="h6" gutterBottom>
              Add New Code
            </Typography>
            <ShadowSocksCodes showFormOnly />
          </Paper>
        )}
      </Box>
    </Box>
  );
} 