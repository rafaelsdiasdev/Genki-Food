import React from 'react';
import twitter from '../../assets/image/twitter.svg';
import facebook from '../../assets/image/facebook.svg';
import instagran from '../../assets/image/instagran.svg';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.container__social}>
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebokk" />
          <img src={instagran} alt="instagran" />
        </div>
        <p>
          There is no obligation for GENKIFOOD to request prior authorization,
          and no compensation will be provided. Personal information (name,
          email, etc.) is intended only for the express purpose of organising
          the event. Should you prefer your e-mail address not to appear in any
          documents, please write to info@genkifood.com.
        </p>
        <p>
          Genkifood City. St. Zip. Encinitas. 260-C North El Camino. Real.
          Encinitas. CA 92024-. 2852
        </p>
        <span>2019 Genkifood - all rights reversed</span>
      </div>
    </div>
  );
}
