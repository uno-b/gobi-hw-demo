import React from 'react';

import Card from '../../components/Card';
import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import img5 from '../../images/5.png';
import img6 from '../../images/6.png';
import img7 from '../../images/7.png';
import img8 from '../../images/8.png';
import styles from './GetAndGift.module.css';

const demoColorArr = [
  '#CC3B38',
  '#6D705A',
  '#E0D7C8',
  '#000000',
  '#718CBF',
  '#985B4F',
  '#C66666',
  'white',
];

const index = () => {
  return (
    <div className={styles.container}>
      <h2>TO GET AND TO GIFT</h2>
      <div className={styles.cardList}>
        <Card
          image={img1}
          newExists={true}
          name={'Zweiseitiger Wendemantel Mit Schmetterlingsxzds'}
          colorNum={6}
          oldPrice={'$ 299.00'}
          newPrice={'$ 79.00'}
        />
        <Card
          image={img2}
          heartExists={true}
          name={'Écharpe tisée avec bords contrastants et franges'}
          colors={demoColorArr}
          colorNum={24}
        />
        <Card
          image={img3}
          name={'Трикотажный Супер Мягкий Плед Контрастного Оттенка'}
          colorNum={6}
          oldPrice={'$ 299.00'}
          newPrice={'$ 79.00'}
        />
        <Card
          image={img4}
          name={'Кардиган в Стиле Колор-Блок с V-Образным Воротником'}
          colorNum={6}
          oldPrice={'$ 299.00'}
          newPrice={'$ 79.00'}
        />
        <Card
          image={img5}
          name={'Zweiseitiger Wendemantel Mit Schmetterlingsxzds'}
          colorNum={6}
          oldPrice={'$ 299.00'}
          newPrice={'$ 79.00'}
        />
        <Card
          image={img6}
          heartExists={true}
          name={'Écharpe tisée avec bords contrastants et franges'}
          colors={demoColorArr}
          colorNum={24}
        />
        <Card
          image={img7}
          name={'Трикотажный Супер Мягкий Плед Контрастного Оттенка'}
          colorNum={6}
          oldPrice={'$ 299.00'}
          newPrice={'$ 79.00'}
        />
        <Card
          image={img8}
          name={'Кардиган в Стиле Колор-Блок с V-Образным Воротником'}
          colorNum={6}
          oldPrice={'$ 299.00'}
          newPrice={'$ 79.00'}
        />
      </div>
    </div>
  );
};

export default index;
