import React, { useState } from 'react';
import styles from './styles.module.scss';

function Navbar() {
  const [activeMenuMobile, setActiveMenuMobile] = useState(false);

  const handleClick = (e) => {
    setActiveMenuMobile(!activeMenuMobile);
    if (activeMenuMobile) {
      e.currentTarget.setAttribute('aria-expanded', 'false');
      e.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    } else {
      e.currentTarget.setAttribute('aria-expanded', 'true');
      e.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }
  };

  return (
    <nav className={`${styles.nav} ${activeMenuMobile ? styles.active : ''}`}>
      <div className={styles.nav__logo}>genkifood</div>
      <button
        onClick={handleClick}
        className={styles.nav__btnMobile}
        type="button"
        aria-label="Abrir Menu"
        aria-expanded="false"
        aria-controls="menu"
        aria-haspopup="true"
      >
        Menu
        <span className={styles.btnMobile__hamburguer} />
      </button>
      <ul id="menu" role="menu" className={styles.nav__menu}>
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
