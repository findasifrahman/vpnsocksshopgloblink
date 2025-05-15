'use client';

import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '60vh',
  minHeight: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #2eade2 0%, #1a5276 100%)',
  color: 'white',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
    opacity: 0.5,
  },
}));

const AboutSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[2],
}));

export default function Home() {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              mb: 2,
            }}
          >
            Globlink VPN socks
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              opacity: 0.9,
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            Secure, Fast, and Reliable VPN Service
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="md">
        <AboutSection>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            About This App
          </Typography>
          <Typography variant="body1" paragraph>
            Globlink VPN socks is a powerful and secure VPN service that provides you with:
          </Typography>
          <Typography component="ul" sx={{ pl: 2 }}>
            <li>High-speed connections with unlimited bandwidth</li>
            <li>Advanced encryption for maximum security</li>
            <li>Multiple server locations worldwide</li>
            <li>Easy-to-use interface for all your devices</li>
            <li>24/7 customer support</li>
          </Typography>
        </AboutSection>

        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Button
            variant="contained"
            size="large"
            href="/add-user"
            sx={{
              py: 2,
              px: 4,
              fontSize: '1.2rem',
              borderRadius: 2,
              boxShadow: 3,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 6,
              },
              transition: 'all 0.3s ease',

            }}
          >
            <Typography color='white'>
                  ADD NEW USER
            </Typography>

          </Button>
        </Box>
      </Container>
    </Box>
  );
}
