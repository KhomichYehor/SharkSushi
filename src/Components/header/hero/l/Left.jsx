import React from "react";
import styles from './Left.module.css';
import card1 from './../src/leftCards/card1.png';
import card2 from './../src/leftCards/card2.png';
import card3 from './../src/leftCards/card3.png';

function Left() {
    return(
        <div className={styles.hero__left}>
          <div className={styles.left__title}>
            <span>Найсмачніші суші</span> <br /> на замовлення
          </div>
          <div className={styles.left__text}>
            Швидка доставка суш, приготованих
            <br /> із найсвіжіших продуктів
          </div>
          <div className={styles.left__button}>
            <a href="./../public/index.html" target="_blank">
              Замовити
            </a>
          </div>
          <div className={styles.left__cards}>
            <div className={styles.left__card}>
              <img src={card1} alt="#" />
              <div className={styles.card__text}>Швидка доставка</div>
            </div>
            <div className={styles.left__card}>
              <img src={card3} alt="#" />
              <div className={styles.card__text}>Свіжі інгредієнти</div>
            </div>
            <div className={styles.left__card}>
              <img src={card2} alt="#" />
              <div className={styles.card__text}>Задоволені клієнти</div>
            </div>
          </div>
        </div>
    )
};

export default Left;