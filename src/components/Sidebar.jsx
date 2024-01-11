// Sidebar.js
import React from 'react';
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
  return (
    <Drawer variant="permanent" className="drawer">
      {/* Logo Section */}
      <Box sx={{ padding: 8 }} className="logoSection">
        <img src='/clogo.png' className='clogo' alt='not found'></img>
      </Box>

      {/* Options Section */}
      <List sx={{ flexGrow: 1 }} className="optionsSection">
        <ListItemButton>
          <HomeIcon className='iconSpacing' />
          <ListItemText primary="Home" className="headDec" />
        </ListItemButton>
        <ListItemButton>
          <AdminIcon className='iconSpacing' />
          <ListItemText primary="Admin" className="headDec" />
        </ListItemButton>
        <ListItemButton>
          <MemberShipIcon className='iconSpacing' />
          <ListItemText primary="Membership" className="headDec" />
        </ListItemButton>
        <ListItemButton >
          <PersonIcon className='iconSpacing' />
          <ListItemText primary="Advocate" className="headDec" />
        </ListItemButton>
      </List>

      {/* Logout Section */}
      <Divider />
      <List className="logoutSection">
        <ListItemButton>
          <ExitToAppIcon className='iconSpacing' />
          <ListItemText primary="Logout" className="headDec" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
