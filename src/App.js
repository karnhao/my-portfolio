import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import AboutPage from './pages/AboutPage.js';
import ProjectDetail from './pages/ProjectDetail.js';
import Footer from './components/Footer.js';

import HaoVSort from './pages/projects/HaoVSort.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />

        <Route path="/projects/haoVSort" element={<HaoVSort />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
