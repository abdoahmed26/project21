import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux'
import { Box } from '@mui/material';

const DataCont = () => {
    let data = useSelector(state=>state.data);
    const columns = [
        { 
            field: 'id', 
            headerName: 'ID', 
            width: 60,
            type: 'number',
            align:"start",
            headerAlign:"start", 
        },
        { 
            field: 'regId', 
            headerName: 'Registrar ID', 
            width: 90,
        },
        {
            field: 'firstName',
            headerName: 'Name',
            width: 150,
            editable: true,
            valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 60,
            editable: true,
            align:"center",
            headerAlign:"center",
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
            editable: true,
        },
        {
            field: 'address',
            headerName: 'Address',
            width: 180,
            editable: true,
        },
        {
            field: 'city',
            headerName: 'City',
            width: 100,
            editable: true,
        },
        {
            field: 'code',
            headerName: 'Zip Code',
            width: 80,
            editable: true,
        },
    ]
    const rows = [...data]
    return (
        <div>
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                />
            </Box>
        </div>
    );
}

export default DataCont;