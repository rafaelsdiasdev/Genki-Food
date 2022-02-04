/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styles from './styles.module.scss';

// eslint-disable-next-line react/prop-types
export default function Map({ setShowMap }) {
  /* eslint-disable-next-line */
  const url =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.7133899727132!2d-122.40759758427936!3d37.796756079755504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085811ffc1e83e9%3A0x39983be5e3d63477!2s935%20Kearny%20St%2C%20San%20Francisco%2C%20CA%2094133%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1643903675832!5m2!1spt-BR!2sbr';

  return (
    <div className={styles.container}>
      <iframe
        src={url}
        width={`${100}%`}
        height={`${100}%`}
        allowFullScreen
        loading="lazy"
      />
      <button
        onClick={() => setShowMap(false)}
        className={styles.button}
        type="button"
      >
        Fechar
      </button>
    </div>
  );
}
