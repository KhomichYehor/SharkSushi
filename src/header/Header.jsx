import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "./src/navigation/logo.png";
import cart from "./src/navigation/cart.png";
import glass from "./src/navigation/magnifyingglass.png";
import slide from "./src/navigation/slide.png";
import card1 from "./src/hero/card1.png";
import card2 from "./src/hero/card2.png";
import card3 from "./src/hero/card3.png";
import circle1 from "./src/hero/circle/1.png";
import circle2 from "./src/hero/circle/2.png";
import circle3 from "./src/hero/circle/3.png";
import circle4 from "./src/hero/circle/4.png";
import circle5 from "./src/hero/circle/5.png";
import circle6 from "./src/hero/circle/6.png";
import circle7 from "./src/hero/circle/7.png";
import circle8 from "./src/hero/circle/8.png";
import circle9 from "./src/hero/circle/9.png";

const circleItems = [
  {
    img: circle1,
    title: "СЕТ ФІЛАМАНІЯ",
    description: "Філа лосось, Філа вугор, Чіз рол \n 32шт. 900гр \n 535 грн.",
  },
  {
    img: circle2,
    title: "СЕТ МЕГАФІШ",
    description:
      "Філадельфія з манго, філадельфія з лососем, запечений з лососем, \n запечений з морепродуктами, \n Чорний принц, чорний дракон \n 32шт. 1130г \n 625 грн.",
  },
  {
    img: circle3,
    title: "СЕТ ФІЛА 50/50",
    description:
      "Філадельфія з лососем, Філадельфія з вугрем, \n Філадельфія з манго, Смажений з сиром,\nНіжний з лососем \n 28шт. 1000 г\n 499 грн.",
  },
  {
    img: circle4,
    title: "СЕТ ЛАЙТ",
    description:
      "Чорний дракон, Філадельфія з лососем, \n Ніжний з лососем \n 16 шт. 550 г \n 285 грн.",
  },
  {
    img: circle5,
    title: "СЕТ ВЕСЕЛКА",
    description:
      "Сурімі рол, Філадельфія з тунцем , \n Філадельфія з лососем , Эбі темпура \n 32шт. 1250 г \n 599 грн.",
  },
  {
    img: circle6,
    title: "СЕТ ALL-INCLUSIVE",
    description:
      "Смажений з лососем, Сяке темпура, Ніжний з \n лососем, Запечений з лососем, Каліфорнія манго, \n Філадельфія з лососем, Філадельфія з манго \n 56 шт. 2050 г \n 1040 грн.",
  },
  {
    img: circle7,
    title: "СЕТ ТРІО",
    description:
      "Філадельфія з лососем, Чорний дракон, \n Ніжний з сиром \n 24 шт. 830 г\n 429 грн.",
  },
  {
    img: circle8,
    title: "СЕТ ТРОПІКАНА",
    description:
      "Філадельфія з манго, Філадельфія з лососем, \n Ролл Манго \n 22шт. 1000 г \n 495 грн.",
  },
  {
    img: circle9,
    title: "СЕТ ГУРМАН",
    description:
      "Ролл Сурімі, Ролл Каліфорнія з лососем в кунжуті \n Суші лосось, Суші вугор , Гункан Вугор \n 22шт. 900 г \n 623 грн.",
  },
];

function Header() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className={styles.header}>
      <div className={styles.navigation}>
        <div className={styles.left}>
          <div className={styles.text}>Shark Sush</div>
          <div className={styles.logo}>
            <img src={logo} alt="#"></img>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.navigationItem}>
            <a href="./../public/index.html" target="_blank">
              Меню
            </a>
          </div>
          <div className={styles.navigationItem}>
            <a href="./../public/index.html" target="_blank">
              Акції
            </a>
          </div>
          <div className={styles.navigationItem}>
            <a href="./../public/index.html" target="_blank">
              Контакти
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.searchbar}>
            <button type="button" href='./../public/index.html"'>
              <img src={glass} alt="#"></img>
            </button>
            <input placeholder="Пошук"></input>
          </div>
          <div className={styles.cart}>
            <div className={styles.cartImage}>
              <img src={cart} alt="#"></img>
            </div>
            <div className={styles.price}>1999 грн.</div>
            <div className={styles.arrow}>
              <img src={slide} alt="#"></img>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hero}>
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
        <div className={styles.hero__right}>
          <div className={styles.circle}>
            <div className={styles.icon}>
              {circleItems.map((circle, i) => (
                <div
                  key={circle.title}
                  className={`${styles[`img${i + 1}`]} ${
                    activeCard === i ? styles.active : ""
                  }`}
                  onMouseOver={() => setActiveCard(i)}
                  onClick={() => setActiveCard(i)}
                >
                  <img src={circle.img} alt="#" />
                </div>
              ))}
            </div>

            {/* Slider  */}
            <div className={styles.contentCircle}>
              {circleItems.map((circle, i) => (
                <div
                  className={`${styles.imgContent} ${
                    activeCard === i ? styles.active : ""
                  }`}
                  id={`content${i + 1}`}
                  key={circle.title}
                >
                  <div className={styles.card}>
                    <div className={styles.cardImage}>
                      <img src={circle.img} alt="#" />
                    </div>
                    <div className={styles.imgTitle}>{circle.title}</div>
                    <div className={styles.imgText}>
                      <pre>{circle.description}</pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Slider  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
