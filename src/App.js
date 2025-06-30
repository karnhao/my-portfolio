import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import AboutPage from './pages/AboutPage.js';
import ProjectDetail from './pages/ProjectDetail.js';
import Footer from './components/Footer.js';

import NotFound from './pages/NotFound.js';

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </div>
  );
}

export default App;
