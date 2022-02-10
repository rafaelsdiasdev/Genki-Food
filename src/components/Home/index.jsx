import React, { useRef } from 'react';
import Hero from '../Hero';
import Navbar from '../Navbar';
import Video from '../Video';
import styles from './styles.module.scss';

export default function Home() {
  const rootRef = useRef();

  return (
    <div className={styles.container} ref={rootRef}>
      <Navbar />
      <Video />
      <Hero rootRef={rootRef} />
    </div>
  );
}
