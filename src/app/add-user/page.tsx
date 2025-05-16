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
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import QRCodeModal from '@/components/QRCodeModal';
import {
  VpnKey as VpnKeyIcon,
} from '@mui/icons-material';

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const PackageSummary = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.primary.main,
  color: 'white',
}));

const packageOptions = [
  { value: 15, label: '15 Days' },
  { value: 20, label: '20 Days' },
  { value: 30, label: '30 Days' }
];

interface PackageAvailability {
  fifteenDayPackages: number;
  twentyDayPackages: number;
  thirtyDayPackages: number;
}

const initialFormData = {
  name: '',
  package_days: '',
  passportNo: '',
  phnNo: '',
  email: '',
  paid_amount: 30,
};

export default function AddUserPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [packageAvailability, setPackageAvailability] = useState<PackageAvailability>({
    fifteenDayPackages: 0,
    twentyDayPackages: 0,
    thirtyDayPackages: 0,
  });
  const [formData, setFormData] = useState(initialFormData);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState('');
  const [showQRDialog, setShowQRDialog] = useState(false);
  const [qrData, setQrData] = useState<{
    main_link: string;
    alternative_link?: string;
    mirror1?: string;
    mirror2?: string;
  } | null>(null);
  const [modalTimer, setModalTimer] = useState(60);

  const fetchPackageAvailability = async () => {
    try {
      const response = await fetch('/api/admin/package-availability', {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (response.ok) {
        const packageData = await response.json();
        setPackageAvailability(packageData);
      }
    } catch (error) {
      console.error('Error fetching package availability:', error);
    }
  };

  useEffect(() => {
    // Check authentication and fetch package availability
    const initialize = async () => {
      try {
        const [authResponse, packageResponse] = await Promise.all([
          fetch('/api/auth/check', {
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            }
          }),
          fetch('/api/admin/package-availability', {
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            }
          })
        ]);

        if (!authResponse.ok) {
          console.log('Auth check failed:', authResponse.status);
          router.push('/login');
          return;
        }

        const authData = await authResponse.json();
        console.log('Auth check response:', authData);
        
        if (!authData.authenticated || !authData.role) {
          console.log('Not authenticated or missing role');
          router.push('/login');
          return;
        }

        if (!['admin', 'super_admin'].includes(authData.role)) {
          console.log('Insufficient permissions:', authData.role);
          router.push('/');
          return;
        }

        if (packageResponse.ok) {
          const packageData = await packageResponse.json();
          setPackageAvailability(packageData);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Initialization error:', err);
        router.push('/login');
      }
    };
    initialize();
  }, [router]);

  const resetForm = () => {
    setFormData(initialFormData);
    setError('');
    setPassword('');
  };

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

    // Check if selected package is available
    const selectedDays = parseInt(formData.package_days);
    const availablePackages = {
      15: packageAvailability.fifteenDayPackages,
      20: packageAvailability.twentyDayPackages,
      30: packageAvailability.thirtyDayPackages,
    }[selectedDays] || 0;

    if (availablePackages <= 0) {
      setError(`No ${selectedDays}-day packages available`);
      return;
    }

    setShowPasswordDialog(true);
  };

  const handlePasswordSubmit = async () => {
    try {
      console.log('Submitting with password:', password);
      const response = await fetch('/api/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        },
        body: JSON.stringify({
          ...formData,
          password,
        }),
      });

      const data = await response.json();
      console.log('Response status:', response.status);
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to add user');
      }

      if (data.message === 'no_qr_code') {
        setError('No QR codes available for the selected package duration');
        setShowPasswordDialog(false);
        return;
      }

      // Fetch updated package availability
      await fetchPackageAvailability();

      // Reset form and show QR code
      resetForm();
      setQrData(data);
      setShowPasswordDialog(false);
      setShowQRDialog(true);
      setModalTimer(60);

      // Start countdown timer
      const timer = setInterval(() => {
        setModalTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setShowQRDialog(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Cleanup timer on unmount
      return () => clearInterval(timer);
    } catch (err) {
      console.error('Error details:', err);
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
      <PackageSummary elevation={3}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <VpnKeyIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
            Available Packages
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
              {packageAvailability.fifteenDayPackages}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              15-Day Packages
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
              {packageAvailability.twentyDayPackages}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              20-Day Packages
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
              {packageAvailability.thirtyDayPackages}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              30-Day Packages
            </Typography>
          </Grid>
        </Grid>
      </PackageSummary>

      <FormContainer elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add VPN User
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
              <MenuItem 
                key={option.value} 
                value={option.value}
                disabled={
                  (option.value === 15 && packageAvailability.fifteenDayPackages <= 0) ||
                  (option.value === 20 && packageAvailability.twentyDayPackages <= 0) ||
                  (option.value === 30 && packageAvailability.thirtyDayPackages <= 0)
                }
              >
                {option.label} ({option.value === 15 ? packageAvailability.fifteenDayPackages :
                                option.value === 20 ? packageAvailability.twentyDayPackages :
                                packageAvailability.thirtyDayPackages} available)
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
            <Typography variant="h6" component="div" color="white" sx={{ flexGrow: 1 }}>
              Add VPN User
            </Typography>
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
          message={`Subscription code found! This window will close in ${modalTimer} seconds.`}
          countdown={modalTimer}
        />
      )}
    </Container>
  );
} 