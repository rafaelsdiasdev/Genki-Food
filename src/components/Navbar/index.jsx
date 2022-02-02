import React from 'react';
import styles from './styles.module.scss';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>genkifood</div>
      <ul className={styles.nav__menu}>
        <li className={styles.menu__item}>
          <a href="https://">Você é o nosso convidado</a>
        </li>
        <li className={styles.menu__item}>Quem somos</li>
        <li className={styles.menu__item}>Experimente</li>
        <li className={styles.menu__item}>Bora para São Francisco</li>
      </ul>
      <div className={styles.nav__button}>
        <a href="http://" className={styles.button}>
          Registre-se
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
