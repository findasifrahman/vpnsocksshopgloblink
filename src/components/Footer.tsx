"use client";

import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} GloblinkVPN
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link href="/terms" style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>
            Terms of Service
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            Contact
          </Link>
        </Typography>
      </Container>
    </Box>
  );
} 