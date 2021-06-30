import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import globe from '../../images/icons/globe-white.png';
import styles from './Header.module.css';

const LinkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lang}>
        <img src={globe} alt='Globe Icon' />
        <span>Global - English</span>
      </div>
      <div>
        RETURNING AN ORDER?{' '}
        <Link to='/' style={{ color: 'white' }}>
          Click for more info
        </Link>
      </div>
      <div className={styles.auth}>
        <Link to='/' style={LinkStyle}>
          SIGN IN
        </Link>
        <Link to='/' style={LinkStyle}>
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default index;
