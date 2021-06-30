import React from 'react';

import winter1 from '../../images/winter1.png';
import winter2 from '../../images/winter2.png';
import winter3 from '../../images/winter3.png';
import styles from './Winter.module.css';

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.winterInfo}>
        <h2>WINTER SPICE 2020</h2>
        <p>Infusion of summer pieces and cashmere silk blends.</p>
        <button>SHOP NOW</button>
      </div>
      <div className={styles.winterRight}>
        <div className={styles.winterPics}>
          <img src={winter1} alt='Two Women' className={styles.large} />
          <div className={styles.small}>
            <img src={winter2} alt='Woman' />
            <img src={winter3} alt='Mongolian Woman' />
          </div>
        </div>
        <p>Infusion of summer pieces and cashmere silk blends.</p>
      </div>
    </div>
  );
};

export default index;
