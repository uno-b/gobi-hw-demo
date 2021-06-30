import React from 'react';
import { Link } from 'react-router-dom';

import cross from '../../images/icons/Cross.png';
import search from '../../images/icons/Search.png';
import heart from '../../images/icons/heart.png';
import shopping from '../../images/icons/shopping.png';
import mobileMenu from '../../images/icons/mobile-menu.png';
import styles from './Navbar.module.css';

const removeDefaultLinkStyle = {
  textDecoration: 'none',
  color: 'white',
};

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mobileMenuWrapper}>
        <img src={mobileMenu} alt='Mobile Menu' className={styles.mobileMenu} />
      </div>
      <ul className={styles.menu}>
        <li>
          <Link to='/' style={removeDefaultLinkStyle}>
            WOMEN
          </Link>
        </li>
        <li>
          <Link to='/' style={removeDefaultLinkStyle}>
            MEN
          </Link>
        </li>
        <li>
          <Link to='/' style={removeDefaultLinkStyle}>
            HOME
          </Link>
        </li>
        <li>
          <Link to='/' style={removeDefaultLinkStyle}>
            ACCESSORIES
          </Link>
        </li>
        <li>
          <Link to='/' style={removeDefaultLinkStyle}>
            ORGANIC
          </Link>
        </li>
      </ul>
      <div className={styles.brand}>
        <p className={styles.span1}>GOBI</p>
        <p className={styles.span2}>CASHMERE FOR ALL</p>
      </div>
      <div className={styles.search}>
        <img src={search} alt='Search' className={styles.icon} />
        <form>
          <input type='text' placeholder='Search' />
          <img src={cross} alt='Cross' className={styles.iconCross} />
        </form>
        <img src={heart} alt='Heart' className={styles.icon} />
        <img src={shopping} alt='Shopping' className={styles.icon} />
      </div>
    </div>
  );
};

export default index;
