import * as React from 'react';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar1 from '../layout/Navbar1';
import DataGridComponent from '../components/DataGrid';

const initialRows = [
  {
    id: 1,
    typeService: 'Automatisation',
    description: 'Systèmes automatisés pour l industrie manufacturière',
  },
  {
    id: 2,
    typeService: 'Hydraulique',
    description: 'Solutions hydrauliques pour diverses applications industrielles',
  },
  {
    id: 3,
    typeService: 'Pneumatique',
    description: 'Composants et systèmes pneumatiques',
  },
  {
    id: 4,
    typeService: 'Secteur 4',
    description: 'Systèmes automatisés pour l industrie manufacturière',
  },
  {
    id: 5,
    typeService: 'Secteur 5',
    description: 'Systèmes automatisés pour l industrie manufacturière',
  },
  {
    id: 6,
    typeService: 'Secteur 6',
    description: 'Systèmes automatisés pour l industrie manufacturière',
  },
  {
    id: 7,
    typeService: 'Secteur 7',
    description: 'Systèmes automatisés pour l industrie manufacturière',
  },
  {
    id: 8,
    typeService: 'Secteur 8',
    description: 'Systèmes automatisés pour l industrie manufacturière',
  },
  {
    id: 9,
    typeService: 'Secteur 9',
    description: 'Systèmes automatisés pour l industrie manufacturière',
  },
];

export default function DataGridDemo() {
  const [rows, setRows] = React.useState(initialRows);


  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const columns = [
    { field: 'typeService', headerName: 'Type de Service', width: 200, editable: true },
    { field: 'description', headerName: 'Description', width: 500, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <>
          <DeleteIcon
            sx={{ cursor: 'pointer' }}
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      ),
    },
  ];

  return (
    <div>
           <link rel="preconnect" href="https://fonts.googleapis.com"/>

   <Navbar1/>
      
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <h3 style={{ marginLeft: 30, fontWeight: 300, fontFamily: 'Roboto, sans-serif' }}>Services</h3>
      </Box>
      <DataGridComponent rows={rows} columns={columns} />

    </div>
  );
}
