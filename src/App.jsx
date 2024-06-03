import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Report from './Pages/Report';
import ViewReports from './Pages/ViewReports';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/report" element={<Report />} />
          <Route path="/view-reports" element={<ViewReports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
