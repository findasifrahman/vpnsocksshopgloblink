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
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';

interface SystemUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  last_login: string | null;
  shop_name: string | null;
  shop?: {
    shopname: string;
  };
}

interface ShopName {
  id: string;
  shopname: string;
}

interface SystemUsersProps {
  showFormOnly?: boolean;
}

export default function SystemUsers({ showFormOnly = false }: SystemUsersProps) {
  const [users, setUsers] = useState<SystemUser[]>([]);
  const [shops, setShops] = useState<ShopName[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin',
    shop_name: '',
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
    fetchShops();
  }, [showFormOnly]);

  const fetchShops = async () => {
    try {
      const response = await fetch('/api/admin/shop-names');
      if (!response.ok) throw new Error('Failed to fetch shops');
      const data = await response.json();
      setShops(data);
    } catch (err) {
      console.error('Error fetching shops:', err);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/system-users', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(Array.isArray(data.users) ? data.users : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch users');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
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

    if (!formData.name || !formData.email || !formData.password || !formData.shop_name) {
      setError('All fields are required');
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/admin/system-users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to add user');
      }

      setSuccess('User added successfully');
      setFormData({
        name: '',
        email: '',
        password: '',
        role: 'admin',
        shop_name: '',
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

  const formatDateTime = (dateString: string | null) => {
    if (!dateString) return 'Never';
    return format(new Date(dateString), 'yyyy-MM-dd HH:mm:ss');
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
                  <TableCell>Shop</TableCell>
                  <TableCell>Last Login</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(users) && users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.password}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.shop?.shopname || '-'}</TableCell>
                    <TableCell>
                      {formatDateTime(user.last_login)}
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
            onChange={handleTextFieldChange}
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
            onChange={handleTextFieldChange}
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
            onChange={handleTextFieldChange}
            margin="normal"
            disabled={submitting}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={formData.role}
              onChange={handleSelectChange}
              label="Role"
              disabled={submitting}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="super_admin">Super Admin</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Shop</InputLabel>
            <Select
              name="shop_name"
              value={formData.shop_name}
              onChange={handleSelectChange}
              label="Shop"
              disabled={submitting}
              error={!formData.shop_name}
            >
              {shops.map((shop) => (
                <MenuItem key={shop.id} value={shop.id}>
                  {shop.shopname}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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