'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  CircularProgress,
  useTheme,
} from '@mui/material';
import {
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
  VpnKey as VpnKeyIcon,
} from '@mui/icons-material';

interface SummaryData {
  todayUsers: number;
  yesterdayUsers: number;
  thisMonthUsers: number;
  todayAmount: number;
  yesterdayAmount: number;
  thisMonthAmount: number;
}

interface PackageData {
  fifteenDayPackages: number;
  twentyDayPackages: number;
  thirtyDayPackages: number;
}

export default function AdminDashboard() {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [summaryData, setSummaryData] = useState<SummaryData>({
    todayUsers: 0,
    yesterdayUsers: 0,
    thisMonthUsers: 0,
    todayAmount: 0,
    yesterdayAmount: 0,
    thisMonthAmount: 0,
  });
  const [packageData, setPackageData] = useState<PackageData>({
    fifteenDayPackages: 0,
    twentyDayPackages: 0,
    thirtyDayPackages: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [summaryResponse, packageResponse] = await Promise.all([
        fetch('/api/admin/summary'),
        fetch('/api/admin/package-availability')
      ]);

      if (!summaryResponse.ok || !packageResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const [summaryData, packageData] = await Promise.all([
        summaryResponse.json(),
        packageResponse.json()
      ]);

      setSummaryData(summaryData);
      setPackageData(packageData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ 
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 600,
        color: theme.palette.primary.main,
        mb: 4
      }}>
        Dashboard Summary
      </Typography>

      <Grid container spacing={3}>
        {/* Users Summary */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, backgroundColor: theme.palette.primary.main, color: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PeopleIcon sx={{ mr: 1 }} />
              <Typography variant="h6" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
                Total Users
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                  {summaryData.todayUsers}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Today
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                  {summaryData.yesterdayUsers}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Yesterday
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                  {summaryData.thisMonthUsers}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  This Month
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Revenue Summary */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, backgroundColor: theme.palette.secondary.main, color: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <MoneyIcon sx={{ mr: 1 }} />
              <Typography variant="h6" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
                Total Revenue
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                  ${summaryData.todayAmount}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Today
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                  ${summaryData.yesterdayAmount}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Yesterday
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                  ${summaryData.thisMonthAmount}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  This Month
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Package Availability */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, backgroundColor: theme.palette.info.main, color: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <VpnKeyIcon sx={{ mr: 1 }} />
              <Typography variant="h6" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
                Available Packages
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                  {packageData.fifteenDayPackages}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  15-Day Packages
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                  {packageData.twentyDayPackages}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  20-Day Packages
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                  {packageData.thirtyDayPackages}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  30-Day Packages
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
} 