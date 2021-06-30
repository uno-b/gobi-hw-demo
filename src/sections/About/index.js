import React from 'react';

import gobi from '../../images/Cashmere.png';
import twoWomen from '../../images/about.png';
import styles from './About.module.css';

const index = () => {
  return (
    <div className={styles.container}>
      <img src={gobi} alt='Gobi Cashmere' className={styles.gobi} />
      <div className={styles.info}>
        <h2>ABOUT US</h2>
        <p>
          Aute et officia anim consectetur consequat velit minim irure Lorem ad.
          Officia nisi sunt est eiusmod occaecat excepteur velit reprehenderit
          occaecat cillum anim ad magna aliqua. Sint enim Lorem amet in tempor
          non ea duis cillum. Cillum consectetur in in aliqua. Nostrud minim
          duis cupidatat et ea sint.
        </p>
        <button>READ MORE</button>
      </div>
      <div className={`${styles.images} ${styles.hide}`}>
        <img src={twoWomen} alt='Two Women' />
        <img src={twoWomen} alt='Two Women' />
      </div>
    </div>
  );
};

export default index;
