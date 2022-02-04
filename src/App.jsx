import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
