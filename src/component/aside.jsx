import React from 'react';
import img1 from "./images/mostbeautiful.webp";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import TimelineIcon from '@mui/icons-material/Timeline';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Aside = () => {
    let myUrl = useNavigate();
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleListItemClick = (event, index,url) => {
        setSelectedIndex(index);
        myUrl(url);
    };
    return (
        <Box sx={{bgcolor: 'background.paper' }}
        className='pt-3 overflow-auto w-[60px] md:w-[250px] border-e fixed' style={{height:"100vh"}}>
            <div className='flex justify-center border-b pb-2'>
                <div>
                    <img src={img1} alt="" className='mx-auto w-10 h-10 md:w-20 md:h-20  border border-gray-800 
                    rounded-full object-cover'/>
                    <h2 className='font-medium text-[17px] mt-1 text-center  hidden md:block'>Layla Ali</h2>
                    <p className='text-[15px] text-blue-500 font-medium text-center  hidden md:block'>Admin</p>
                </div>
            </div>
            <div className='py-2'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0,"/dashboard")}
                        >
                        <ListItemIcon>
                            <HomeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" className='hidden md:block'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1,"/team")}
                        >
                        <ListItemIcon>
                            <GroupOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manage Team" className='hidden md:block'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2,"/contacts")}
                        >
                        <ListItemIcon>
                            <ContactsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contacts Information" className='hidden md:block'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3,"/invoices")}
                        >
                        <ListItemIcon>
                            <ReceiptOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Invoices Balances" className='hidden md:block'/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </div>
            <div className='py-2 border-t'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4,"/form")}
                        >
                        <ListItemIcon>
                            <PersonOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile Form" className='hidden md:block'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                        selected={selectedIndex === 5}
                        onClick={(event) => handleListItemClick(event, 5,"/calendar")}
                        >
                        <ListItemIcon>
                            <CalendarTodayIcon />
                        </ListItemIcon>
                        <ListItemText primary="Calendar" className='hidden md:block'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                        selected={selectedIndex === 6}
                        onClick={(event) => handleListItemClick(event, 6,"/faq")}
                        >
                        <ListItemIcon>
                            <HelpOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="FAQ Page" className='hidden md:block'/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </div>
            <div className='py-2 border-t'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                        selected={selectedIndex === 7}
                        onClick={(event) => handleListItemClick(event, 7,"/bar")}
                        >
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Bar Chart" className='hidden md:block'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                        selected={selectedIndex === 8}
                        onClick={(event) => handleListItemClick(event, 8,"/pie")}
                        >
                        <ListItemIcon>
                            <PieChartOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pie Chart" className='hidden md:block'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                        selected={selectedIndex === 9}
                        onClick={(event) => handleListItemClick(event, 9,"/line")}
                        >
                        <ListItemIcon>
                            <TimelineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Line Chart" className='hidden md:block'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                        selected={selectedIndex === 10}
                        onClick={(event) => handleListItemClick(event, 10,"/geography")}
                        >
                        <ListItemIcon>
                            <MapOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Geography Chart" className='hidden md:block'/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </div>
        </Box>
    );
}

export default Aside;
