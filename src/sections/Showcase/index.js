import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import man1 from '../../images/man1.png';
import man2 from '../../images/man2.png';
import woman1 from '../../images/woman1.png';
import woman2 from '../../images/woman2.png';
import arrow from '../../images/icons/Arrow.png';
import styles from './Showcase.module.css';

const index = ({ men, women }) => {
  return (
    <div className={styles.container}>
      <h2>MEN</h2>
      <div className={styles.showcaseImages}>
        <div className={styles.card}>
          <img src={man1} alt='White Man' className={styles.showcaseImage} />
          <div className={styles.info}>
            <span>CARDIGANS</span>
            <Link to='/'>
              <img src={arrow} alt='Arrow' className={styles.arrow} />
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src={man2}
            alt='Mongolian Man'
            className={styles.showcaseImage}
          />
          <div className={styles.info}>
            <span>CARDIGANS</span>
            <Link to='/'>
              <img src={arrow} alt='Arrow' className={styles.arrow} />
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <img src={man1} alt='White Man' className={styles.showcaseImage} />
          <div className={styles.info}>
            <span>CARDIGANS</span>
            <Link to='/'>
              <img src={arrow} alt='Arrow' className={styles.arrow} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

index.propTypes = {
  men: PropTypes.bool,
  women: PropTypes.bool,
};

index.defaultProps = {
  men: true,
  women: false,
};

export default index;
