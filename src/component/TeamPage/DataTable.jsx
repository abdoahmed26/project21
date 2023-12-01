import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux'
import { Box, Typography, useTheme } from '@mui/material';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

const DataTable = () => {
    const theme = useTheme();
    let data = useSelector(state=>state.data);
    const columns = [
        { 
            field: 'id', 
            headerName: 'ID', 
            width: 60,
            type: 'number',
            align:"center",
            headerAlign:"center", 
        },
        {
            field: 'firstName',
            headerName: 'Name',
            width: 150,
            editable: true,
            valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
            align:"center",
            headerAlign:"center",
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 250,
            editable: true,
            align:"center",
            headerAlign:"center",
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
            align:"center",
            headerAlign:"center",
        },
        {
            field: 'phone',
            headerName: 'Phone',
            width: 250,
            editable: true,
            align:"center",
            headerAlign:"center",
        },
        {
            field: 'access',
            headerName: 'Access',
            width: 180,
            editable: true,
            align:"center",
            headerAlign:"center",
            renderCell:({row:{access}})=>{
                return(
                    <Box sx={{padding:"5px",width:"100px",borderRadius:"3px",color:"white",
                    textAlign:"center",display:"flex",justifyContent:"space-evenly",
                    backgroundColor:
                    access==="Admin"?theme.palette.primary.dark
                    :access==="Manager"?theme.palette.secondary.dark:"#3da58a",}}>
                        {access==="Admin" &&(
                            <AdminPanelSettingsOutlinedIcon fontSize='small'/>
                        )}
                        {access==="Manager" &&(
                            <SecurityOutlinedIcon fontSize='small'/>
                        )}
                        {access==="User" &&(
                            <LockOpenOutlinedIcon fontSize='small'/>
                        )}
                        <Typography sx={{fontSize:"13px"}}>{access}</Typography>
                    </Box>
                )
            }
        },
    ]
    const rows = [...data]
    return (
        <div>
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                />
            </Box>
        </div>
    );
}

export default DataTable;