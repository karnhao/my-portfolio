import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './styles.css';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import AboutPage from './pages/AboutPage.js';
import Contact from './pages/Contact.js';
import ProjectDetail from './pages/ProjectDetail.js';
import Footer from './components/Footer.js';

import NotFound from './pages/NotFound.js';

function App() {
  return (
    <div className="App">
      <main>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
