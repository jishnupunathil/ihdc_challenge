// Sidebar.js
import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';
import {
  PersonOutlineOutlined as PersonIcon,
  AdminPanelSettingsOutlined as AdminIcon,
  DatasetOutlined as MemberShipIcon,
  HomeOutlined as HomeIcon,
  ExitToApp as ExitToAppIcon,
} from '@mui/icons-material';
import './sidebar.css'; // Import the CSS file

const Sidebar = () => {
  const [activeOption, setActiveOption] = useState('Home'); // Default active option

  const handleOptionClick = (option) => {
    setActiveOption(option);
    // Add logic to handle the click event, such as navigating to the selected option
  };

  return (
    <Drawer variant="permanent" className="drawer">
      {/* Logo Section */}
      <Box sx={{ padding: 8 }} className="logoSection">
        <img src='/clogo.png' className='clogo' alt='not found'></img>
      </Box>

      {/* Options Section */}
      <List sx={{ flexGrow: 1 }} className="optionsSection">
        <ListItemButton selected={activeOption === 'Home'} onClick={() => handleOptionClick('Home')}>
          <HomeIcon className='iconSpacing' />
          <ListItemText primary="Home" className="headDec" />
        </ListItemButton>
        <ListItemButton selected={activeOption === 'Admin'} onClick={() => handleOptionClick('Admin')}>
          <AdminIcon className='iconSpacing' />
          <ListItemText primary="Admin" className="headDec" />
        </ListItemButton>
        <ListItemButton selected={activeOption === 'Membership'} onClick={() => handleOptionClick('Membership')}>
          <MemberShipIcon className='iconSpacing' />
          <ListItemText primary="Membership" className="headDec" />
        </ListItemButton>
        <ListItemButton selected={activeOption === 'Advocate'} onClick={() => handleOptionClick('Advocate')}>
          <PersonIcon className='iconSpacing' sx={{ color: 'purple' }} />
          <ListItemText primary="Advocate" className="headDec" sx={{ color: 'purple' }} />
        </ListItemButton>
      </List>

      {/* Logout Section */}
      <Divider />
      <List className="logoutSection">
        <ListItemButton selected={activeOption === 'Logout'} onClick={() => handleOptionClick('Logout')}>
          <ExitToAppIcon className='iconSpacing' />
          <ListItemText primary="Logout" className="headDec" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
