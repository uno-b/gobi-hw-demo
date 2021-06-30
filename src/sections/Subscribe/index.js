import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Subscribe.module.css';

const index = () => {
  return (
    <div className={styles.container}>
      <h2>Subscribe</h2>
      <p className={styles.subtitle}>
        Sign up for emails and receive early access to new arrivals, sales,
        events + more.
      </p>
      <form className={styles.form}>
        <input type='text' placeholder='Enter your email address' />
        <button>SUBMIT</button>
      </form>
      <p className={styles.info}>
        By signing up, you will receive Gobi Cashmere offers, promotions and
        other commercial messages. You are also agreeing to Gobi Cashmere's{` `}
        <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
          Privacy Policy
        </Link>
        . You may unsubscribe at any time.
      </p>
    </div>
  );
};

export default index;
