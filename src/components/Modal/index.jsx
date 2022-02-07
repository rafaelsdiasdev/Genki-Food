import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Modal({ message, setModal }) {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <h2>{message}</h2>
        <div
          role="button"
          tabIndex="0"
          onClick={() => setModal(false)}
          onKeyPress={() => setModal(false)}
          className={styles.close}
        >
          <span>x</span>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  setModal: PropTypes.func.isRequired,
};
