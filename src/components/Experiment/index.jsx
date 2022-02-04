import React, { useState } from 'react';
import styles from './styles.module.scss';
import Map from '../Map';

export default function Experiment() {
  const [showMap, setShowMap] = useState(false);

  return !showMap ? (
    <section id="go" className={styles.go}>
      <h2 className={styles.go__title}>bora pra são francisco</h2>
      <div className={styles.go__describe}>
        <ul className={styles.list}>
          <li className={styles.list__item}>Hotel North Beach</li>
          <li className={styles.list__item}>935 Kearny St, San Francisco,</li>
          <li className={styles.list__item}>CA 94133, Estados Unidos</li>
          <li className={styles.list__item}>
            <time dateTime="2019-11-16 09:00">11/16/2019</time>
          </li>
          <li className={styles.list__item}>
            <time>09:00 am</time>
          </li>
        </ul>
        <button
          onClick={() => setShowMap(true)}
          className={styles.button}
          type="button"
        >
          Ver mapa
        </button>
      </div>
    </section>
  ) : (
    <Map setShowMap={setShowMap} showMap={showMap} />
  );
}
