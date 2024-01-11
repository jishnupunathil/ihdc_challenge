import React from 'react';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div className="appContainer">
       <Sidebar />
       <Main/>
    </div>
  );
};

export default App;