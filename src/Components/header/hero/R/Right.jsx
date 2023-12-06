import React, { useState } from "react";
import styles from './Right.module.css';
import circle1 from './../src/circle/1.png';
import circle2 from './../src/circle/2.png';
import circle3 from './../src/circle/3.png';
import circle4 from './../src/circle/4.png';
import circle5 from './../src/circle/5.png';
import circle6 from './../src/circle/6.png';
import circle7 from './../src/circle/7.png';
import circle8 from './../src/circle/8.png';
import circle9 from './../src/circle/9.png';

const circleItems = [
    {
      img: circle1,
      title: "СЕТ ФІЛАМАНІЯ",
      description: "Філа лосось, Філа вугор, Чіз рол",
      value: "32шт. 900 г",
      price: "535 грн." ,
    },
    {
      img: circle2,
      title: "СЕТ МЕГАФІШ",
      description:
        "Філадельфія з манго, філадельфія з лососем, \n запечений з лососем, запечений з морепродуктами, \n Чорний принц, чорний дракон",
      value: "32шт. 1130 г",
      price: "625 грн." ,
    },
    {
      img: circle3,
      title: "СЕТ ФІЛА 50/50",
      description:
        "Філадельфія з лососем, Філадельфія з вугрем, \n Філадельфія з манго, Смажений з сиром,\n Ніжний з лососем",
      value: "28шт. 1000 г",
      price: "499 грн." ,
    },
    {
      img: circle4,
      title: "СЕТ ЛАЙТ",
      description:
        "Чорний дракон, Філадельфія з лососем, Ніжний з лососем",
      value: "16 шт. 550 г",
      price: "285 грн." ,
    },
    {
      img: circle5,
      title: "СЕТ ВЕСЕЛКА",
      description:
        "Сурімі рол, Філадельфія з тунцем, \n Філадельфія з лососем , Эбі темпура",
      value: "32шт. 1250 г",
      price: "599 грн." ,
    },
    {
      img: circle6,
      title: "СЕТ ALL-INCLUSIVE",
      description:
        "Смажений з лососем, Сяке темпура, Ніжний з лососем, \n Запечений з лососем,  Каліфорнія манго, \n Філадельфія з лососем, Філадельфія з манго",
      value: "56 шт. 2050 г",
      price: "1040 грн." ,
    },
    {
      img: circle7,
      title: "СЕТ ТРІО",
      description:
        "Філадельфія з лососем, Чорний дракон, Ніжний з сиром",
      value: "24 шт. 830 г",
      price: "429 грн." ,
    },
    {
      img: circle8,
      title: "СЕТ ТРОПІКАНА",
      description:
        "Філадельфія з манго, Філадельфія з лососем, Ролл Манго",
      value: "22 шт. 100 г",
      price: "495 грн." ,
    },
    {
      img: circle9,
      title: "СЕТ ГУРМАН",
      description:
        "Ролл Сурімі, Ролл Каліфорнія з лососем в кунжуті, \n Суші лосось, Суші вугор, Гункан Вугор",
      value: "22 шт. 900 г",
      price: "623 грн." ,
    },
  ];

  function Right() {

    const [activeCard, setActiveCard] = useState(0);

    return(
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
                      <pre className={styles.circle__description}>{circle.description}</pre>
                      <pre className={styles.circle__price}>{circle.price}</pre>
                      <pre className={styles.circle__value}>{circle.value}</pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Slider  */}
          </div>
        </div>
    )
  };

  export default Right;