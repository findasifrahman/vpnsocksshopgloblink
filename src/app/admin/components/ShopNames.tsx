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

interface ShopName {
  id: string;
  shopname: string;
  createdAt: string;
}

interface ShopNamesProps {
  showFormOnly?: boolean;
}

export default function ShopNames({ showFormOnly = false }: ShopNamesProps) {
  const [shops, setShops] = useState<ShopName[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    shopname: '',
  });
  const [deleteDialog, setDeleteDialog] = useState<{ 
    open: boolean; 
    shopId: string | null;
    loading: boolean;
  }>({
    open: false,
    shopId: null,
    loading: false,
  });

  useEffect(() => {
    if (!showFormOnly) {
      fetchShops();
    } else {
      setLoading(false);
    }
  }, [showFormOnly]);

  const fetchShops = async () => {
    try {
      const response = await fetch('/api/admin/shop-names', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch shops');
      const data = await response.json();
      setShops(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch shops');
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
      const response = await fetch('/api/admin/shop-names', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to add shop');

      setSuccess('Shop added successfully');
      setFormData({
        shopname: '',
      });
      if (!showFormOnly) {
        await fetchShops();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add shop');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteDialog.shopId) return;

    setDeleteDialog(prev => ({ ...prev, loading: true }));
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`/api/admin/shop-names/${deleteDialog.shopId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete shop');

      setSuccess('Shop deleted successfully');
      setDeleteDialog({ open: false, shopId: null, loading: false });
      fetchShops();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete shop');
      setDeleteDialog(prev => ({ ...prev, loading: false }));
    }
  };

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

  if (loading) {
    return null;
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Shop Names Management
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
                  <TableCell>Shop Name</TableCell>
                  <TableCell>Created At (UTC)</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {shops.map((shop) => (
                  <TableRow key={shop.id}>
                    <TableCell>{shop.shopname}</TableCell>
                    <TableCell>
                      {formatDateTime(shop.createdAt)}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="error"
                        onClick={() => setDeleteDialog({ open: true, shopId: shop.id, loading: false })}
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
            label="Shop Name"
            name="shopname"
            value={formData.shopname}
            onChange={handleChange}
            margin="normal"
            disabled={submitting}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            disabled={submitting}
            startIcon={submitting ? <CircularProgress size={20} /> : null}
          >
            {submitting ? 'Adding...' : 'Add Shop'}
          </Button>
        </Box>
      )}

      <Dialog
        open={deleteDialog.open}
        onClose={() => !deleteDialog.loading && setDeleteDialog({ open: false, shopId: null, loading: false })}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this shop?
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setDeleteDialog({ open: false, shopId: null, loading: false })}
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