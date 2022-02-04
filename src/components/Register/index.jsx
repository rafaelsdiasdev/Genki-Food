import React, { useState } from 'react';
import styles from './styles.module.scss';

export default function Register() {
  const data = {
    name: '',
    email: '',
    phone: '',
  };

  const [user, setUser] = useState(data);

  const handleChange = ({ target }) => {
    if (target.type === 'text') {
      setUser((rest) => ({ ...rest, name: target.value }));
    }

    if (target.type === 'email') {
      setUser((rest) => ({ ...rest, email: target.value }));
    }

    if (target.type === 'tel') {
      setUser((rest) => ({ ...rest, phone: target.value }));
    }
  };
  console.log(user);

  const onRegister = (e) => {
    e.preventDefault();

    // console.log('registra');
  };

  return (
    <section id="register" className={styles.register}>
      <h2 className={styles.register__title}>Registre-se</h2>
      <form action="">
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Nome"
        />
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => handleChange(e)}
          type="tel"
          placeholder="Telefone"
        />

        <button
          onClick={(e) => onRegister(e)}
          type="button"
          className={styles.button}
        >
          Confirmar
        </button>
      </form>
    </section>
  );
}
