'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  useTheme,
} from '@mui/material';
import {
  People as PeopleIcon,
  VpnKey as VpnKeyIcon,
  Lock as LockIcon,
} from '@mui/icons-material';

interface DashboardStats {
  usersCount: number;
  codesCount: number;
  passwordsCount: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState<DashboardStats>({
    usersCount: 0,
    codesCount: 0,
    passwordsCount: 0,
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        if (!response.ok) {
          router.push('/login');
          return;
        }
        const data = await response.json();
        if (data.role !== 'super_admin') {
          router.push('/');
          return;
        }
        setLoading(false);
        fetchStats();
      } catch (err) {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  const fetchStats = async () => {
    try {
      const [usersRes, codesRes, passwordsRes] = await Promise.all([
        fetch('/api/admin/system-users'),
        fetch('/api/admin/shadow-socks'),
        fetch('/api/admin/password-protect'),
      ]);

      const users = await usersRes.json();
      const codes = await codesRes.json();
      const passwords = await passwordsRes.json();

      setStats({
        usersCount: users.length,
        codesCount: codes.length,
        passwordsCount: passwords.length,
      });
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const cards = [
    {
      title: 'System Users',
      count: stats.usersCount,
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      path: '/admin/users',
      color: theme.palette.primary.main,
    },
    {
      title: 'ShadowSocks Codes',
      count: stats.codesCount,
      icon: <VpnKeyIcon sx={{ fontSize: 40 }} />,
      path: '/admin/codes',
      color: theme.palette.secondary.main,
    },
    {
      title: 'Password Protection',
      count: stats.passwordsCount,
      icon: <LockIcon sx={{ fontSize: 40 }} />,
      path: '/admin/passwords',
      color: theme.palette.success.main,
    },
  ];

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', maxWidth: '100%' }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ width: '100%', m: 0 }}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.title}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 2,
                  color: card.color,
                }}>
                  {card.icon}
                  <Typography variant="h6" sx={{ ml: 1 }}>
                    {card.title}
                  </Typography>
                </Box>
                <Typography 
                  variant="h3" 
                  component="div" 
                  sx={{ 
                    fontWeight: 'bold',
                    color: card.color,
                  }}
                >
                  {card.count}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  onClick={() => router.push(card.path)}
                  sx={{ 
                    color: card.color,
                    '&:hover': {
                      backgroundColor: `${card.color}10`,
                    },
                  }}
                >
                  Manage
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 