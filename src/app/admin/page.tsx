'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  CircularProgress,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import {
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
  VpnKey as VpnKeyIcon,
  Store as StoreIcon,
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

interface ShopStats {
  shopName: string;
  today: {
    count: number;
    amount: number;
  };
  yesterday: {
    count: number;
    amount: number;
  };
  thisMonth: {
    count: number;
    amount: number;
  };
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
  const [shopStats, setShopStats] = useState<ShopStats[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [summaryResponse, packageResponse, shopStatsResponse] = await Promise.all([
        fetch('/api/admin/summary', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        }),
        fetch('/api/admin/package-availability', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        }),
        fetch('/api/admin/shop-stats', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        })
      ]);

      if (!summaryResponse.ok || !packageResponse.ok || !shopStatsResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const [summaryData, packageData, shopStats] = await Promise.all([
        summaryResponse.json(),
        packageResponse.json(),
        shopStatsResponse.json()
      ]);

      console.log('Summary Data:', summaryData);
      console.log('Package Data:', packageData);
      console.log('Shop Stats:', shopStats);

      setSummaryData(summaryData);
      setPackageData(packageData);
      setShopStats(Array.isArray(shopStats) ? shopStats : []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
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
              <Typography variant="h6" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
                Total Revenue
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                  {summaryData.todayAmount}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Today
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                  {summaryData.yesterdayAmount}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Yesterday
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                  {summaryData.thisMonthAmount}
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

      {/* Shop Statistics Cards */}
      <Typography variant="h5" gutterBottom sx={{ 
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 600,
        color: theme.palette.primary.main,
        mt: 4,
        mb: 3
      }}>
        Shop-wise Statistics
      </Typography>

      <Grid container spacing={3}>
        {Array.isArray(shopStats) && shopStats.map((shop) => (
          <Grid item xs={12} md={4} key={shop.shopName}>
            <Card 
              elevation={3}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8]
                }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <StoreIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                  <Typography variant="h6" sx={{ 
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 600,
                    color: theme.palette.primary.main
                  }}>
                    {shop.shopName}
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  {/* Today Stats */}
                  <Grid item xs={12}>
                    <Paper sx={{ p: 2, bgcolor: theme.palette.primary.light, color: 'white' }}>
                      <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>Today</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                        <Typography variant="h6">{shop.today.count} Users</Typography>
                        <Typography variant="h6">¥{shop.today.amount.toFixed(2)}</Typography>
                      </Box>
                    </Paper>
                  </Grid>

                  {/* Yesterday Stats */}
                  <Grid item xs={12}>
                    <Paper sx={{ p: 2, bgcolor: theme.palette.secondary.light, color: 'white' }}>
                      <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>Yesterday</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                        <Typography variant="h6">{shop.yesterday.count} Users</Typography>
                        <Typography variant="h6">¥{shop.yesterday.amount.toFixed(2)}</Typography>
                      </Box>
                    </Paper>
                  </Grid>

                  {/* This Month Stats */}
                  <Grid item xs={12}>
                    <Paper sx={{ p: 2, bgcolor: theme.palette.info.light, color: 'white' }}>
                      <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>This Month</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                        <Typography variant="h6">{shop.thisMonth.count} Users</Typography>
                        <Typography variant="h6">¥{shop.thisMonth.amount.toFixed(2)}</Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 