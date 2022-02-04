import React from 'react';
import styles from './styles.module.scss';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>genkifood</div>
      <ul className={styles.nav__menu}>
        <li className={styles.menu__item}>
          <a href="#convidado">Você é o nosso convidado</a>
        </li>
        <li className={styles.menu__item}>
          <a href="#quem-somos">Quem somos</a>
        </li>
        <li className={styles.menu__item}>
          <a href="#experiment">Experimente</a>
        </li>
        <li className={styles.menu__item}>
          <a href="#go">Bora para São Francisco</a>
        </li>
      </ul>
      <div className={styles.nav__button}>
        <a href="#register" className={styles.button}>
          Registre-se
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
