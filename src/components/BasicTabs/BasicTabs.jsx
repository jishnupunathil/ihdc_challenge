import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import './BasicTabs.css'
import CustomPaginationActionsTable from '../table/CustomPaginationActionsTable';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [activeCount, setActiveCount] = React.useState(0);
  const [pendingCount, setPendingCount] = React.useState(0);
  const [expiredCount, setExpiredCount] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // You need to update these counts based on your data or logic
  // For now, I'm using static values as an example
  React.useEffect(() => {
    setActiveCount(10); // Replace with the actual count of active items
    setPendingCount(5); // Replace with the actual count of pending items
    setExpiredCount(3); // Replace with the actual count of expired items
  }, []);

  return (
    <Box className="tab">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: { background: 'green' } // Adjust the style of the indicator as needed
          }}
        >
          <Tab
            label={
              <Badge
                badgeContent={activeCount}
                color="primary"
                sx={{ paddingRight: 2 }} // Add padding to the right
              >
                Active Members
              </Badge>
            }
            {...a11yProps(0)}
            sx={{
              flex: 1,
              backgroundColor: value === 0 ? 'white' : '', // Set the background color for the active tab
              borderRadius: '10px', // Add curved border
            }}
          ></Tab>
          <Tab
            label={
              <Badge
                badgeContent={pendingCount}
                color="primary"
                sx={{ paddingRight: 2 }} // Add padding to the right
              >
                Pending Request
              </Badge>
            }
            {...a11yProps(1)}
            sx={{
              flex: 1,
              backgroundColor: value === 1 ? 'white' : '', // Set the background color for the active tab
              borderRadius: '10px', // Add curved border
            }}
          />
          <Tab
            label={
              <Badge
                badgeContent={expiredCount}
                color="primary"
                sx={{ paddingRight: 2 }} // Add padding to the right
              >
                Membership Expired
              </Badge>
            }
            {...a11yProps(2)}
            sx={{
              flex: 1,
              backgroundColor: value === 2 ? 'white' : '', // Set the background color for the active tab
              borderRadius: '10px', // Add curved border
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* Content for Active Members tab */}
        <CustomPaginationActionsTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* Content for Pending Request tab */}
        <CustomPaginationActionsTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {/* Content for Membership Expired tab */}
        <CustomPaginationActionsTable />
      </CustomTabPanel>
    </Box>
  );
}
