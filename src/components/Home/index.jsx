import React, { useRef } from 'react';
import Hero from '../Hero';
import Navbar from '../Navbar';
import Video from '../Video';

export default function Home() {
  const rootRef = useRef();

  return (
    <div ref={rootRef}>
      <Navbar />
      <Video />
      <Hero rootRef={rootRef} />
    </div>
  );
}
