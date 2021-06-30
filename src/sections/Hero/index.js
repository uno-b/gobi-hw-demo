import React from 'react';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import bgImg from '../../images/Hero BG.png';
import sale from '../../images/icons/Sale.png';
import styles from './Hero.module.css';

const index = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <img src={bgImg} alt='Background' className={styles.backgroundImg} />
      <div className={styles.callToAction}>
        <h1>SUMMER</h1>
        <img src={sale} alt='Sale' />
        <div className={styles.text}>
          <span className={styles.part1}>UPTO</span>
          <div>
            <span className={styles.part2}>60</span>
            <span className={styles.part3}>%</span>
            <span className={styles.part4}>FF</span>
          </div>
        </div>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default index;
