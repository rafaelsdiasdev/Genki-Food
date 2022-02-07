import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import styles from './styles.module.scss';

export default function Register({ rootRef }) {
  const data = {
    name: '',
    email: '',
    phone: '',
  };

  const [user, setUser] = useState(data);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    rootRef.current.addEventListener('click', () => setModal(false), false);
  }, [rootRef]);

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

  const onRegister = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-unused-expressions
    (async () => {
      try {
        const rawResponse = await fetch(
          'https://bklqi49vid.execute-api.us-west-1.amazonaws.com/dev/post',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: user.name,
              email: user.email,
              phone: user.phone,
            }),
          },
        );
        const content = await rawResponse.json();

        setUser({ name: '', email: '', phone: '' });
        if (content.httpRequestCode === 200) {
          setModal(true);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <>
      <section id="register" className={styles.register}>
        <h2 className={styles.register__title}>Registre-se</h2>
        <form action="">
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Nome"
            value={user.name}
          />
          <input
            onChange={(e) => handleChange(e)}
            type="email"
            placeholder="Email"
            value={user.email}
          />
          <input
            onChange={(e) => handleChange(e)}
            type="tel"
            placeholder="Telefone"
            value={user.phone}
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
      {modal && (
        <Modal message="Cadastro realizado com sucesso!" setModal={setModal} />
      )}
    </>
  );
}

Register.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  rootRef: PropTypes.object,
};

Register.defaultProps = {
  rootRef: {},
};
