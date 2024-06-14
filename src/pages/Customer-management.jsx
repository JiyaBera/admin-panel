//customer-management.jsx

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0, 150, 255)', // Blue color for buttons
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          fontSize: '1.0rem',
        },
        columnHeaders: {
          fontSize: '1.0rem',
        },
        cell: {
          fontSize: '1.0rem',
        },
      },
    },
  },
});

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150, editable: true },
  { field: 'legalName', headerName: 'Legal Name', width: 150, editable: true },
  { field: 'companyEmail', headerName: 'Company Email', width: 200, editable: true },
  { field: 'companyNumber', headerName: 'Company Number', width: 150, editable: true },
  { field: 'adminEmail', headerName: 'Admin Email', width: 200, editable: true },
  { field: 'address', headerName: 'Address', width: 250, editable: true },
];

const initialRows = [
  { id: 1, name: 'Jon Snow', legalName: 'Aegon Targaryen', companyEmail: 'jon.snow@winterfell.com', companyNumber: '123456', adminEmail: 'admin@winterfell.com', address: 'Winterfell, North' },
  { id: 2, name: 'Cersei Lannister', legalName: 'Cersei Lannister', companyEmail: 'cersei.lannister@casterlyrock.com', companyNumber: '654321', adminEmail: 'admin@casterlyrock.com', address: 'Casterly Rock, Westerlands' },
  { id: 3, name: 'Jaime Lannister', legalName: 'Jaime Lannister', companyEmail: 'jaime.lannister@casterlyrock.com', companyNumber: '654321', adminEmail: 'admin@casterlyrock.com', address: 'Casterly Rock, Westerlands' },
  { id: 4, name: 'Arya Stark', legalName: 'Arya Stark', companyEmail: 'arya.stark@winterfell.com', companyNumber: '123456', adminEmail: 'admin@winterfell.com', address: 'Winterfell, North' },
  { id: 5, name: 'Daenerys Targaryen', legalName: 'Daenerys Targaryen', companyEmail: 'daenerys@dragonstone.com', companyNumber: '789123', adminEmail: 'admin@dragonstone.com', address: 'Dragonstone, Narrow Sea' },
  { id: 6, name: 'Melisandre', legalName: 'Melisandre of Asshai', companyEmail: 'melisandre@redtemple.com', companyNumber: '456789', adminEmail: 'admin@redtemple.com', address: 'Asshai, Shadowlands' },
  { id: 7, name: 'Ferrara Clifford', legalName: 'Ferrara Clifford', companyEmail: 'ferrara@company.com', companyNumber: '321987', adminEmail: 'admin@company.com', address: 'Somewhere, Earth' },
  { id: 8, name: 'Rossini Frances', legalName: 'Rossini Frances', companyEmail: 'rossini@company.com', companyNumber: '987654', adminEmail: 'admin@company.com', address: 'Somewhere, Earth' },
  { id: 9, name: 'Harvey Roxie', legalName: 'Harvey Roxie', companyEmail: 'harvey@company.com', companyNumber: '654987', adminEmail: 'admin@company.com', address: 'Somewhere, Earth' },
];

const DataGridDemo = ({ rows, setRows }) => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

const CustomerManagement = () => {
  const [rows, setRows] = useState(initialRows);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    legalName: '',
    companyEmail: '',
    companyNumber: '',
    adminEmail: '',
    address: '',
  });

  const handleOpen = (row) => {
    setSelectedRow(row);
    setFormValues(row || { id: '', name: '', legalName: '', companyEmail: '', companyNumber: '', adminEmail: '', address: '' });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleSave = () => {
    if (selectedRow) {
      setRows((prevRows) =>
        prevRows.map((row) => (row.id === selectedRow.id ? { ...row, ...formValues } : row))
      );
    } else {
      setRows((prevRows) => [...prevRows, { ...formValues, id: prevRows.length + 1 }]);
    }
    handleClose();
  };

  const handleDelete = () => {
    if (selectedRow) {
      setRows((prevRows) => prevRows.filter((row) => row.id !== selectedRow.id));
    }
    handleClose();
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 0, mt: 0 }}> {/* Added mt: 0 */}
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '4em', margin: 0 }}>Customer Management</h1>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
            <Button variant="contained" color="primary" sx={{ mx: 1, fontSize: '1.0rem', minWidth: '100px', minHeight: '50px' }} onClick={() => handleOpen(null)}>
              <span role="img" aria-label="Add" style={{ color: 'white', marginRight: '5px' }}>➕</span> Add
            </Button>
            <Button variant="contained" color="primary" sx={{ mx: 1, fontSize: '1.0rem', minWidth: '100px', minHeight: '50px' }} onClick={() => handleOpen(selectedRow)}>
              <span role="img" aria-label="Edit" style={{ color: 'white', marginRight: '5px' }}>✏</span> Edit
            </Button>
            <Button variant="contained" color="primary" sx={{ mx: 1, fontSize: '1.0rem', minWidth: '80px', minHeight: '50px' }} onClick={handleDelete}>
              <span role="img" aria-label="Delete" style={{ color: 'white', marginRight: '5px' }}>❌</span> Delete
            </Button>
          </Box>
        </Box>

        <DataGridDemo rows={rows} setRows={setRows} />
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedRow ? 'Edit Customer' : 'Add Customer'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="legalName"
            label="Legal Name"
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.legalName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="companyEmail"
            label="Company Email"
            type="email"
            fullWidth
            variant="outlined"
            value={formValues.companyEmail}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="companyNumber"
            label="Company Number"
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.companyNumber}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="adminEmail"
            label="Admin Email"
            type="email"
            fullWidth
            variant="outlined"
            value={formValues.adminEmail}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="address"
            label="Address"
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.address}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
          {selectedRow && <Button onClick={handleDelete} color="error">Delete</Button>}
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default CustomerManagement;