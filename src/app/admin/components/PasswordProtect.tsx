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
import { format } from 'date-fns';

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
  const [newPassword, setNewPassword] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    passwordId: string;
    loading: boolean;
  }>({
    open: false,
    passwordId: '',
    loading: false,
  });

  const formatDateTime = (dateString: string | null) => {
    if (!dateString) return 'Never';
    try {
      const date = new Date(dateString);
      return format(date, 'yyyy-MM-dd HH:mm:ss');
    } catch (error) {
      console.error('Error formatting date:', dateString, error);
      return 'Invalid date';
    }
  };

  const fetchPasswords = async () => {
    try {
      const response = await fetch('/api/admin/password-protect', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch passwords');
      const data = await response.json();
      setPasswords(data);
    } catch (error) {
      console.error('Error fetching passwords:', error);
      setError('Failed to fetch passwords');
    }
  };

  useEffect(() => {
    fetchPasswords();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!newPassword || !expiryDate) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/admin/password-protect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        },
        body: JSON.stringify({
          password: newPassword,
          expiry_date: expiryDate,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to create password');
      }

      setNewPassword('');
      setExpiryDate('');
      setSuccess('Password created successfully');
      fetchPasswords();
    } catch (error) {
      console.error('Error creating password:', error);
      setError(error instanceof Error ? error.message : 'Failed to create password');
    }
  };

  const handleDelete = async () => {
    setDeleteDialog(prev => ({ ...prev, loading: true }));
    try {
      const response = await fetch(`/api/admin/password-protect/${deleteDialog.passwordId}`, {
        method: 'DELETE',
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        }
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to delete password');
      }

      setSuccess('Password deleted successfully');
      fetchPasswords();
    } catch (error) {
      console.error('Error deleting password:', error);
      setError(error instanceof Error ? error.message : 'Failed to delete password');
    } finally {
      setDeleteDialog({ open: false, passwordId: '', loading: false });
    }
  };

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
                  <TableCell>Expiry Date (UTC)</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {passwords.map((password) => (
                  <TableRow key={password.id}>
                    <TableCell>{password.password}</TableCell>
                    <TableCell>
                      {formatDateTime(password.expiry_date)}
                    </TableCell>
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
            label="Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Expiry Date"
            type="datetime-local"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Add Password
          </Button>
        </Box>
      )}

      <Dialog
        open={deleteDialog.open}
        onClose={() => setDeleteDialog({ ...deleteDialog, open: false })}
      >
        <DialogTitle>Delete Password</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this password?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDeleteDialog({ ...deleteDialog, open: false })}
            disabled={deleteDialog.loading}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            color="error"
            disabled={deleteDialog.loading}
          >
            {deleteDialog.loading ? (
              <CircularProgress size={24} />
            ) : (
              'Delete'
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
} 