"use client";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {!isAdminRoute && <Navbar />}
          {isAdminRoute ? (
            children
          ) : (
            <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
              {children}
            </Container>
          )}
          {!isAdminRoute && <Footer />}
        </Box>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
} 