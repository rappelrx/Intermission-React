import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Upcoming from './pages/Upcoming';
import Recordings from './pages/Recordings';
import Gallery from './pages/Gallery';
import Join from './pages/Join';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="upcoming" element={<Upcoming />} />
            <Route path="recordings" element={<Recordings />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="join" element={<Join />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
