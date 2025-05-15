"use client";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2eade2',
    },
  },
});

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
            {children}
          </Container>
          <Footer />
        </Box>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
} 