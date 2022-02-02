import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Video />
      <Hero />
    </div>
  );
}

export default App;
