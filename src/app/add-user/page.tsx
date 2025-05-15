'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import QRCodeModal from '@/components/QRCodeModal';

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const packageOptions = [
  { value: 15, label: '15 Days' },
  { value: 20, label: '20 Days' },
  { value: 30, label: '30 Days' }
];

export default function AddUserPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    package_days: '',
    passportNo: '',
    phnNo: '',
    email: '',
    paid_amount: 30, // Default value
  });
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState('');
  const [showQRDialog, setShowQRDialog] = useState(false);
  const [qrData, setQrData] = useState<{
    main_link: string;
    alternative_link?: string;
    mirror1?: string;
    mirror2?: string;
  } | null>(null);

  useEffect(() => {
    // Check authentication
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        if (!response.ok) {
          console.log('Auth check failed:', response.status);
          router.push('/login');
          return;
        }
        const data = await response.json();
        console.log('Auth check response:', data); // Debug log
        
        if (!data.authenticated || !data.role) {
          console.log('Not authenticated or missing role');
          router.push('/login');
          return;
        }

        if (!['admin', 'super_admin'].includes(data.role)) {
          console.log('Insufficient permissions:', data.role);
          router.push('/');
          return;
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Auth check error:', err);
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShowPasswordDialog(true);
  };

  const handlePasswordSubmit = async () => {
    try {
      const response = await fetch('/api/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to add user');
      }

      if (data.message === 'no_qr_code') {
        setError('No QR codes available for the selected package duration');
        setShowPasswordDialog(false);
        return;
      }

      setQrData(data);
      setShowPasswordDialog(false);
      setShowQRDialog(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setShowPasswordDialog(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md">
      <FormContainer elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add New User
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            select
            label="Package Duration"
            name="package_days"
            value={formData.package_days}
            onChange={handleChange}
            margin="normal"
          >
            {packageOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            fullWidth
            type="number"
            label="Paid Amount"
            name="paid_amount"
            value={formData.paid_amount}
            onChange={handleChange}
            margin="normal"
            InputProps={{
              inputProps: { min: 0 }
            }}
          />
          <TextField
            fullWidth
            label="Passport Number"
            name="passportNo"
            value={formData.passportNo}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phnNo"
            value={formData.phnNo}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
          >
            Add User
          </Button>
        </Box>
      </FormContainer>

      {/* Password Dialog */}
      <Dialog open={showPasswordDialog} onClose={() => setShowPasswordDialog(false)}>
        <DialogTitle>Enter Protection Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPasswordDialog(false)}>Cancel</Button>
          <Button onClick={handlePasswordSubmit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* QR Code Modal */}
      {qrData && (
        <QRCodeModal
          open={showQRDialog}
          onClose={() => setShowQRDialog(false)}
          mainLink={qrData.main_link}
          alternativeLink={qrData.alternative_link}
          mirror1={qrData.mirror1}
          mirror2={qrData.mirror2}
          title="VPN Connection QR Code"
        />
      )}
    </Container>
  );
} 