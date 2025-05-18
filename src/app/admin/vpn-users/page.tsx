'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  TextField,
  InputAdornment,
  CircularProgress,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TableSortLabel,
  Chip,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Search as SearchIcon,
  Delete as DeleteIcon,
  Info as InfoIcon,
  AttachMoney as MoneyIcon,
  Store as StoreIcon,
} from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface VpnUser {
  userId: string;
  name: string;
  package_days: number;
  passportNo: string | null;
  phnNo: string | null;
  email: string | null;
  createdAt: string;
  paid_amount: number;
  vpn_id: string;
  added_by: string;
}

type Order = 'asc' | 'desc';

interface VpnUsersResponse {
  users: VpnUser[];
  total: number;
  totalAmount: number;
}

interface Shop {
  shopname: string;
}

export default function VpnUsersPage() {
  const theme = useTheme();
  const [users, setUsers] = useState<VpnUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<VpnUser | null>(null);
  const [order, setOrder] = useState<Order>('desc');
  const [orderBy, setOrderBy] = useState<keyof VpnUser>('createdAt');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [shops, setShops] = useState<Shop[]>([]);
  const [selectedShop, setSelectedShop] = useState<string>('');

  useEffect(() => {
    fetchShops();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [page, rowsPerPage, searchTerm, order, orderBy, startDate, endDate, selectedShop]);

  const fetchShops = async () => {
    try {
      const response = await fetch('/api/admin/shops');
      if (!response.ok) throw new Error('Failed to fetch shops');
      const data = await response.json();
      setShops(data);
    } catch (error) {
      console.error('Error fetching shops:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: rowsPerPage.toString(),
        search: searchTerm,
        order,
        orderBy,
        ...(startDate && { startDate: startDate.toISOString() }),
        ...(endDate && { endDate: endDate.toISOString() }),
        ...(selectedShop && { shopName: selectedShop })
      });

      const response = await fetch(`/api/admin/vpn-users?${params}`);
      if (!response.ok) throw new Error('Failed to fetch users');
      const data: VpnUsersResponse = await response.json();
      setUsers(data.users);
      setTotalCount(data.total);
      setTotalAmount(data.totalAmount);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
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

  const handleDeleteClick = (user: VpnUser) => {
    setSelectedUser(user);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedUser) return;

    try {
      const response = await fetch(`/api/admin/vpn-users/${selectedUser.userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete user');

      // Refresh the user list
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    } finally {
      setDeleteDialogOpen(false);
      setSelectedUser(null);
    }
  };

  const handleRequestSort = (property: keyof VpnUser) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const getDateRange = () => {
    const now = new Date();
    const twoMonthsAgo = new Date(now);
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
    return {
      from: startDate?.toLocaleDateString() || twoMonthsAgo.toLocaleDateString(),
      to: endDate?.toLocaleDateString() || now.toLocaleDateString()
    };
  };

  const dateRange = getDateRange();

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ 
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 600,
        color: theme.palette.primary.main,
        mb: 4
      }}>
        VPN Users Management
      </Typography>

      <Paper sx={{ width: '100%', mb: 2 }}>
        <Box sx={{ p: 2 }}>
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
              <TextField
                sx={{ flexGrow: 1, minWidth: '200px' }}
                variant="outlined"
                placeholder="Search users..."
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
              <FormControl sx={{ minWidth: 200 }} size="small">
                <InputLabel>Shop Name</InputLabel>
                <Select
                  value={selectedShop}
                  label="Shop Name"
                  onChange={(e) => setSelectedShop(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <StoreIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="">All Shops</MenuItem>
                  {shops.map((shop) => (
                    <MenuItem key={shop.shopname} value={shop.shopname}>
                      {shop.shopname}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  slotProps={{ textField: { size: 'small' } }}
                />
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  slotProps={{ textField: { size: 'small' } }}
                />
              </LocalizationProvider>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
              <Chip
                icon={<InfoIcon />}
                label={`Showing data from ${dateRange.from} to ${dateRange.to}`}
                color="primary"
                variant="outlined"
              />
              {selectedShop && (
                <Chip
                  icon={<StoreIcon />}
                  label={`Shop: ${selectedShop}`}
                  color="secondary"
                  variant="outlined"
                />
              )}
              <Chip
                icon={<MoneyIcon />}
                label={`Total Amount: ¥${totalAmount.toFixed(2)}`}
                color="success"
                variant="outlined"
              />
            </Box>
          </Stack>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>VPN ID</TableCell>
                <TableCell>Package Days</TableCell>
                <TableCell>Passport No</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Paid Amount</TableCell>
                <TableCell>Added By</TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'createdAt'}
                    direction={orderBy === 'createdAt' ? order : 'asc'}
                    onClick={() => handleRequestSort('createdAt')}
                  >
                    Created At
                  </TableSortLabel>
                </TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={10} align="center" sx={{ py: 4 }}>
                    <CircularProgress size={40} />
                    <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                      Loading users...
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={10} align="center" sx={{ py: 4 }}>
                    <Typography variant="body1" color="text.secondary">
                      No users found in the last 2 months
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow key={user.userId} hover>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.vpn_id}</TableCell>
                    <TableCell>{user.package_days}</TableCell>
                    <TableCell>{user.passportNo || '-'}</TableCell>
                    <TableCell>{user.phnNo || '-'}</TableCell>
                    <TableCell>{user.email || '-'}</TableCell>
                    <TableCell>¥{user.paid_amount.toFixed(2)}</TableCell>
                    <TableCell>{user.added_by}</TableCell>
                    <TableCell>
                      {new Date(user.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteClick(user)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': {
              margin: 0
            }
          }}
        />
      </Paper>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete user {selectedUser?.name}?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
} 