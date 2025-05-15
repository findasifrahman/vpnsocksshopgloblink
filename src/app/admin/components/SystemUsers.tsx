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
  MenuItem,
  Alert,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface SystemUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  last_login: string | null;
}

interface SystemUsersProps {
  showFormOnly?: boolean;
}

export default function SystemUsers({ showFormOnly = false }: SystemUsersProps) {
  const [users, setUsers] = useState<SystemUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin',
  });
  const [deleteDialog, setDeleteDialog] = useState<{ 
    open: boolean; 
    userId: string | null;
    loading: boolean;
  }>({
    open: false,
    userId: null,
    loading: false,
  });

  useEffect(() => {
    if (!showFormOnly) {
      fetchUsers();
    } else {
      setLoading(false);
    }
  }, [showFormOnly]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/system-users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch users');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/admin/system-users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to add user');

      setSuccess('User added successfully');
      setFormData({
        name: '',
        email: '',
        password: '',
        role: 'admin',
      });
      if (!showFormOnly) {
        fetchUsers();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add user');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteDialog.userId) return;

    setDeleteDialog(prev => ({ ...prev, loading: true }));
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`/api/admin/system-users/${deleteDialog.userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete user');

      setSuccess('User deleted successfully');
      setDeleteDialog({ open: false, userId: null, loading: false });
      fetchUsers();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete user');
      setDeleteDialog(prev => ({ ...prev, loading: false }));
    }
  };

  if (loading) {
    return null;
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        System Users Management
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
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Password</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Last Login</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.password}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      {user.last_login ? new Date(user.last_login).toLocaleString() : 'Never'}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="error"
                        onClick={() => setDeleteDialog({ open: true, userId: user.id, loading: false })}
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
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            disabled={submitting}
          />
          <TextField
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            disabled={submitting}
          />
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
          <TextField
            required
            fullWidth
            select
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            margin="normal"
            disabled={submitting}
            SelectProps={{
              native: true,
            }}
          >
            <option value="admin">Admin</option>
            <option value="super_admin">Super Admin</option>
          </TextField>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            disabled={submitting}
            startIcon={submitting ? <CircularProgress size={20} /> : null}
          >
            {submitting ? 'Adding...' : 'Add User'}
          </Button>
        </Box>
      )}

      <Dialog
        open={deleteDialog.open}
        onClose={() => !deleteDialog.loading && setDeleteDialog({ open: false, userId: null, loading: false })}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this user?
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setDeleteDialog({ open: false, userId: null, loading: false })}
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