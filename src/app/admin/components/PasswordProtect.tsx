'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { formatToGMT } from '@/lib/utils';

interface PasswordProtect {
  id: string;
  password: string;
  expiry_date: string;
}

interface PasswordProtectProps {
  showFormOnly?: boolean;
}

export default function PasswordProtect({ showFormOnly = false }: PasswordProtectProps) {
  const [passwords, setPasswords] = useState<PasswordProtect[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    password: '',
    expiry_date: new Date(),
  });
  const [deleteDialog, setDeleteDialog] = useState<{ 
    open: boolean; 
    passwordId: string | null;
    loading: boolean;
  }>({
    open: false,
    passwordId: null,
    loading: false,
  });

  useEffect(() => {
    if (!showFormOnly) {
      fetchPasswords();
    } else {
      setLoading(false);
    }
  }, [showFormOnly]);

  const fetchPasswords = async () => {
    try {
      const response = await fetch('/api/admin/password-protect');
      if (!response.ok) throw new Error('Failed to fetch passwords');
      const data = await response.json();
      setPasswords(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch passwords');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFormData(prev => ({
        ...prev,
        expiry_date: date
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/admin/password-protect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to add password');

      setSuccess('Password added successfully');
      setFormData({
        password: '',
        expiry_date: new Date(),
      });
      if (!showFormOnly) {
        fetchPasswords();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add password');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteDialog.passwordId) return;

    setDeleteDialog(prev => ({ ...prev, loading: true }));
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`/api/admin/password-protect/${deleteDialog.passwordId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete password');

      setSuccess('Password deleted successfully');
      setDeleteDialog({ open: false, passwordId: null, loading: false });
      fetchPasswords();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete password');
      setDeleteDialog(prev => ({ ...prev, loading: false }));
    }
  };

  if (loading) {
    return null;
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Password Protection Management
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      {!showFormOnly && (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Password</TableCell>
                  <TableCell>Expiry Date</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {passwords.map((password) => (
                  <TableRow key={password.id}>
                    <TableCell>{password.password}</TableCell>
                    <TableCell>{formatToGMT(password.expiry_date)}</TableCell>
                    <TableCell>
                      <IconButton
                        color="error"
                        onClick={() => setDeleteDialog({ open: true, passwordId: password.id, loading: false })}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}

      {showFormOnly && (
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            disabled={submitting}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Expiry Date"
              value={formData.expiry_date}
              onChange={handleDateChange}
              sx={{ width: '100%', mt: 2 }}
              disabled={submitting}
            />
          </LocalizationProvider>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            disabled={submitting}
            startIcon={submitting ? <CircularProgress size={20} /> : null}
          >
            {submitting ? 'Adding...' : 'Add Password'}
          </Button>
        </Box>
      )}

      <Dialog
        open={deleteDialog.open}
        onClose={() => !deleteDialog.loading && setDeleteDialog({ open: false, passwordId: null, loading: false })}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this password?
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setDeleteDialog({ open: false, passwordId: null, loading: false })}
            disabled={deleteDialog.loading}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleDelete} 
            color="error" 
            variant="contained"
            disabled={deleteDialog.loading}
            startIcon={deleteDialog.loading ? <CircularProgress size={20} /> : null}
          >
            {deleteDialog.loading ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
} 