// App.js
import React from 'react';
import { Grid } from '@mui/material';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Grid container>
      <Grid item>
        <Sidebar />
      </Grid>
      <Grid item>
        {/* Your main content goes here */}
        <div>Main Content</div>
      </Grid>
    </Grid>
  );
};

export default App;
