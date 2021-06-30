import React from 'react';
import { Link } from 'react-router-dom';

import heart from '../../images/icons/heart-filled.png';
import styles from './Card.module.css';

const index = ({
  image,
  newExists,
  heartExists,
  name,
  colors,
  colorNum,
  oldPrice,
  newPrice,
}) => {
  return (
    <div className={styles.container}>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className={styles.imageWrapper}>
          <img src={image} alt='img' className={styles.image} />
          {newExists && <p className={styles.new}>NEW</p>}
          {heartExists && (
            <div className={styles.icon}>
              <img src={heart} alt='Heart' />
            </div>
          )}
        </div>
        <p className={styles.name}>{name}</p>
      </Link>
      <div className={styles.colorData}>
        {colors.length > 0 && (
          <div className={styles.colors}>
            {colors.slice(0, 7).map((color) => {
              return (
                <div
                  className={styles.color}
                  style={{ backgroundColor: `${color}` }}
                />
              );
            })}
          </div>
        )}
        {colors.length > 7 ? (
          <p className={styles.colorNum}> + {colors.length - 7}</p>
        ) : (
          colorNum && <p className={styles.colorNum}> + {colorNum} colors</p>
        )}
      </div>
      <div className={styles.prices}>
        {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
        {newPrice && <span className={styles.newPrice}>{newPrice}</span>}
      </div>
    </div>
  );
};

index.defaultProps = {
  newExists: false,
  heartExists: false,
  name: 'None',
  colors: [],
  colorNum: 0,
  newPrice: null,
  oldPrice: null,
};

export default index;
