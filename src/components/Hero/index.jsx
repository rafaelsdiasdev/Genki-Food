import React from 'react';
import styles from './styles.module.scss';
import Imagem2 from '../../assets/image/imagem2.png';
import Imagem3 from '../../assets/image/imagem3.png';
import Imagem4 from '../../assets/image/imagem4.png';

function Hero() {
  return (
    <main className={styles.hero}>
      <section className={styles.changeWorld}>
        <h2 className={styles.changeWorld__title}>
          Vamos mudar o mundo juntos
        </h2>
      </section>
      <section className={styles.revolution}>
        <h2 className={styles.revolution__title}>
          Participe da revolução da comida congelada
        </h2>
        <p className={styles.revolution__describe}>
          É com grande prazer que convidamos você para a nossa mais nova linha
          de pratos congelados frescos e saudáveis. Iremos realizar um evento no
          qual poderá saborear toda a qualidade das nossas receitas e vivenciar
          nossa filosofia de vida.
        </p>
      </section>
      <section className={styles.igredients}>
        <h2 className={styles.igredients__title}>
          os melhores ingredientes para você
        </h2>
        <ul className={styles.igredients__list}>
          <li className={styles.list__item}>
            <figure className={styles.item__image}>
              <img src={Imagem2} alt="imagem 2" />
            </figure>
            <p className={styles.item__description}>
              Produzimos e controlamos a qualidade de nossos alimentos desde a
              origem.
            </p>
          </li>
          <li className={styles.list__item}>
            <figure className={styles.item__image}>
              <img src={Imagem3} alt="imagem 3" />
            </figure>
            <p className={styles.item__description}>
              Cuidamos de todo o processo e preparamos para tudo com muito
              carinho para ficar muito gostoso, fresco e saudável para você.
            </p>
          </li>
          <li className={styles.list__item}>
            <figure className={styles.item__image}>
              <img src={Imagem4} alt="imagem 4" />
            </figure>
            <p className={styles.item__description}>
              Congelamos rapidamente os produtos logo após o preparo e embalamos
              a vácuo para manter todo o sabor e nutrientes até chegar para
              você.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Hero;
