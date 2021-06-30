import React from 'react';
import { Link } from 'react-router-dom';

import fb from '../../images/icons/fb.png';
import insta from '../../images/icons/insta.png';
import twitter from '../../images/icons/twitter.png';
import yt from '../../images/icons/yt.png';
import amex from '../../images/icons/amex.svg';
import apple from '../../images/icons/apple.svg';
import gpay from '../../images/icons/gpay.svg';
import sofort from '../../images/icons/sofort.svg';
import visa from '../../images/icons/visa.svg';
import result from '../../images/icons/result.svg';
import master from '../../images/icons/master.svg';
import spay from '../../images/icons/spay.svg';
import paypal from '../../images/icons/paypal.svg';
import klarna from '../../images/icons/klarna.svg';

import styles from './Footer.module.css';

const removeLinkStyle = {
  textDecoration: 'none',
  color: '#5F5F5F',
};

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerLinks}>
        <div className={styles.whiteBackground}>
          <div className={styles.wrapper}>
            <ul>
              <li className={styles.heading}>ABOUT US</li>
              <li>
                <Link style={removeLinkStyle}>Our History</Link>
              </li>
              <li>
                <Link style={removeLinkStyle}>Product Care</Link>
              </li>
              <li>
                <Link style={removeLinkStyle}>Store Location</Link>
              </li>
              <li>
                <Link style={removeLinkStyle}>Sustainability</Link>
              </li>
            </ul>
            <ul>
              <li className={styles.heading}>POLICY</li>
              <li>
                <Link style={removeLinkStyle}>Shipping & Return Policy</Link>
              </li>
              <li>
                <Link style={removeLinkStyle}>Privacy Policy</Link>
              </li>
              <li>
                <Link style={removeLinkStyle}>Impressum</Link>
              </li>
              <li>
                <Link style={removeLinkStyle}>Return Portal</Link>
              </li>
            </ul>
            <ul>
              <li className={styles.heading}>CUSTOMER SERVICE</li>
              <li>
                <Link style={removeLinkStyle}>
                  General Terms and Conditions
                </Link>
              </li>
              <li>
                <Link style={removeLinkStyle}>Contact Us</Link>
              </li>
              <li>
                <Link style={removeLinkStyle}>News</Link>
              </li>
              <li>
                <Link style={removeLinkStyle}>FAQ</Link>
              </li>
            </ul>
            <ul>
              <li className={styles.heading}>CUSTOMER SERVICE</li>
              <li>
                <Link style={removeLinkStyle}>
                  General Terms and Conditions
                </Link>
              </li>
              <li>
                <Link style={removeLinkStyle}>Contact Us</Link>
              </li>
              <li>
                <Link style={removeLinkStyle}>News</Link>
              </li>
              <li>
                <Link style={removeLinkStyle}>FAQ</Link>
              </li>
            </ul>
          </div>
          <ul className={styles.paymentList}>
            <li>
              <a href='/'>
                <img src={amex} alt='Amex' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={apple} alt='Apple Pay' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={gpay} alt='Google Pay' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={sofort} alt='Sofort' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={visa} alt='Visa' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={result} alt='Result' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={master} alt='Mastercard' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={spay} alt='Shopify Pay' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={paypal} alt='PayPal' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={klarna} alt='Klarna' />
              </a>
            </li>
          </ul>
        </div>
        <ul className={styles.social}>
          <li className={`${styles.heading} ${styles.hide}`}>FOLLOW US</li>
          <li>
            <Link style={removeLinkStyle}>
              <img src={fb} alt='Facebook' />
            </Link>
          </li>
          <li>
            <Link style={removeLinkStyle}>
              <img src={insta} alt='Instagram' />
            </Link>
          </li>
          <li>
            <Link style={removeLinkStyle}>
              <img src={twitter} alt='Twitter' />
            </Link>
          </li>
          <li>
            <Link style={removeLinkStyle}>
              <img src={yt} alt='YouTube' />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footer}>
        <p>All content Copyright © 2020 GOBI Cashmere</p>
      </div>
    </div>
  );
};

export default index;
