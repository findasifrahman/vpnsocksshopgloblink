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
  TablePagination,
  InputAdornment,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';

interface ShadowSocksCode {
  vpn_id: string;
  main_link: string;
  alternative_link: string | null;
  mirror1: string | null;
  mirror2: string | null;
  code_usage_count: number;
  code_max_usage: number;
  total_data: string;
  valid_upto: string;
  created_at: string;
  data_left: string;
  activated_from: string | null;
}

interface ShadowSocksCodesProps {
  showFormOnly?: boolean;
}

const formatDateTime = (dateString: string | null): string => {
  if (!dateString) return 'Not set';
  try {
    const date = new Date(dateString);
    return format(date, 'yyyy-MM-dd HH:mm:ss');
  } catch (error) {
    console.error('Error formatting date:', dateString, error);
    return 'Invalid date';
  }
};

export default function ShadowSocksCodes({ showFormOnly = false }: ShadowSocksCodesProps) {
  const [codes, setCodes] = useState<ShadowSocksCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    main_link: '',
    alternative_link: '',
    mirror1: '',
    mirror2: '',
    code_max_usage: 1,
    total_data: '0',
    valid_upto: new Date(),
    activated_from: null as Date | null,
  });
  const [deleteDialog, setDeleteDialog] = useState<{ 
    open: boolean; 
    codeId: string | null;
    loading: boolean;
  }>({
    open: false,
    codeId: null,
    loading: false,
  });

  useEffect(() => {
    if (!showFormOnly) {
      fetchCodes();
    } else {
      setLoading(false);
    }
  }, [showFormOnly]);

  const fetchCodes = async () => {
    try {
      const response = await fetch('/api/admin/shadow-socks');
      if (!response.ok) throw new Error('Failed to fetch codes');
      const data = await response.json();
      setCodes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch codes');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'code_max_usage' ? parseInt(value) || 0 : 
              name === 'total_data' ? value : value
    }));
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFormData(prev => ({
        ...prev,
        valid_upto: date
      }));
    }
  };

  const handleActivatedFromChange = (date: Date | null) => {
    setFormData(prev => ({
      ...prev,
      activated_from: date
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/admin/shadow-socks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          total_data: formData.total_data.toString(),
        }),
      });

      if (!response.ok) throw new Error('Failed to add code');

      setSuccess('Code added successfully');
      setFormData({
        main_link: '',
        alternative_link: '',
        mirror1: '',
        mirror2: '',
        code_max_usage: 1,
        total_data: '0',
        valid_upto: new Date(),
        activated_from: null,
      });
      if (!showFormOnly) {
        fetchCodes();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add code');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteDialog.codeId) return;

    setDeleteDialog(prev => ({ ...prev, loading: true }));
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`/api/admin/shadow-socks/${deleteDialog.codeId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete code');

      setSuccess('Code deleted successfully');
      setDeleteDialog({ open: false, codeId: null, loading: false });
      fetchCodes();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete code');
      setDeleteDialog(prev => ({ ...prev, loading: false }));
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  // Filter codes based on search term
  const filteredCodes = codes.filter(code => 
    code.main_link.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (code.alternative_link && code.alternative_link.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (code.mirror1 && code.mirror1.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (code.mirror2 && code.mirror2.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Get current page data
  const paginatedCodes = filteredCodes.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  if (loading) {
    return null;
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        ShadowSocks Codes Management
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
          <Box sx={{ p: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search by link..."
              value={searchTerm}
              onChange={handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Main Link</TableCell>
                  <TableCell>Usage</TableCell>
                  <TableCell>Data Left</TableCell>
                  <TableCell>Valid Until</TableCell>
                  <TableCell>Activated From</TableCell>
                  <TableCell>Created At</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedCodes.map((code) => (
                  <TableRow key={code.vpn_id}>
                    <TableCell>{code.main_link}</TableCell>
                    <TableCell>{code.code_usage_count}/{code.code_max_usage}</TableCell>
                    <TableCell>{code.data_left}</TableCell>
                    <TableCell>{formatDateTime(code.valid_upto)}</TableCell>
                    <TableCell>{formatDateTime(code.activated_from)}</TableCell>
                    <TableCell>{formatDateTime(code.created_at)}</TableCell>
                    <TableCell>
                      <IconButton
                        color="error"
                        onClick={() => setDeleteDialog({ open: true, codeId: code.vpn_id, loading: false })}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={filteredCodes.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}

      {showFormOnly && (
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            label="Main Link"
            name="main_link"
            value={formData.main_link}
            onChange={handleChange}
            margin="normal"
            disabled={submitting}
          />
          <TextField
            fullWidth
            label="Alternative Link"
            name="alternative_link"
            value={formData.alternative_link}
            onChange={handleChange}
            margin="normal"
            disabled={submitting}
          />
          <TextField
            fullWidth
            label="Mirror 1"
            name="mirror1"
            value={formData.mirror1}
            onChange={handleChange}
            margin="normal"
            disabled={submitting}
          />
          <TextField
            fullWidth
            label="Mirror 2"
            name="mirror2"
            value={formData.mirror2}
            onChange={handleChange}
            margin="normal"
            disabled={submitting}
          />
          <TextField
            required
            fullWidth
            type="number"
            label="Max Usage"
            name="code_max_usage"
            value={formData.code_max_usage}
            onChange={handleChange}
            margin="normal"
            disabled={submitting}
          />
          <TextField
            required
            fullWidth
            type="number"
            label="Total Data (Megabytes)"
            name="total_data"
            value={formData.total_data}
            onChange={handleChange}
            margin="normal"
            disabled={submitting}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Valid Until"
              value={formData.valid_upto}
              onChange={handleDateChange}
              sx={{ width: '100%', mt: 2 }}
              disabled={submitting}
            />
            <DateTimePicker
              label="Activated From"
              value={formData.activated_from}
              onChange={handleActivatedFromChange}
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
            {submitting ? 'Adding...' : 'Add Code'}
          </Button>
        </Box>
      )}

      <Dialog
        open={deleteDialog.open}
        onClose={() => !deleteDialog.loading && setDeleteDialog({ open: false, codeId: null, loading: false })}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this code?
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setDeleteDialog({ open: false, codeId: null, loading: false })}
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