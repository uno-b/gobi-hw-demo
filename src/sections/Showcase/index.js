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
      <h2>{women ? 'WOMEN' : men && 'MEN'}</h2>
      <div className={styles.showcaseImages}>
        <div className={styles.card}>
          <img
            src={women ? woman1 : men && man1}
            alt={women ? 'Woman' : men && 'Man'}
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
          <img
            src={women ? woman2 : men && man2}
            alt={women ? 'Woman' : men && 'Man'}
            className={styles.showcaseImage}
          />
          <div className={styles.info}>
            <span>CARDIGANS</span>
            <Link to='/'>
              <img src={arrow} alt='Arrow' className={styles.arrow} />
            </Link>
          </div>
        </div>
        <div className={`${styles.card} ${styles.hide}`}>
          <img
            src={women ? woman1 : men && man1}
            alt={women ? 'Woman' : men && 'Man'}
            className={styles.showcaseImage}
          />
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
