
import React, {useState} from "react";
import styles from './Discount.module.css';
import card1 from './src/card1.png';
import card2 from './src/card2.png';
import card3 from './src/card3.png';
import card4 from './src/card4.png';
import card5 from './src/card5.png';
import card6 from './src/card6.png';
import card7 from './src/card7.png';
import card8 from './src/card8.png';
import card9 from './src/card9.png';
import cart from './src/cart.png';

 const discountItems =[
    {
        id: 1,
        img: card1,
        title: "СЕТ ГУРМАН ",
        description: "Ролл Сурімі, Ролл Каліфорнія з лососем в кунжуті \n Суші лосось, Суші вугор , Гункан Вугор",
        value: "22шт. 900 г",
        price: "623 грн." ,
    },
    {
        id: 2,
        img: card2,
        title: "СЕТ ФІЛАМАНІЯ",
        description:
        "Філадельфія лосось, Філадельфія  вугор \n Чіз рол",
        value: "24 шт. 900 г",
        price: "535 грн." ,
    },
    {
        id: 3,
        img: card3,
        title: "СЕТ МЕГАФІШ",
        description:
        "Філадельфія з манго, філадельфія з лососем, \n запечений з лососем, запечений з морепродукт, \n Чорний принц, чорний дракон",
        value: "32шт. 1130г",
        price: "625 грн." ,
    },
    {
        id: 4,
        img: card4,
        title: "СЕТ ФІЛА 50/50",
        description:
          "Філадельфія з лососем, Філадельфія з вугрем, \n Філадельфія з манго, Смажений з сиром,\n Ніжний з лососем",
        value: "28шт. 1000 г",
        price: "499 грн." ,
    },
    {
        id: 5,
        img: card5,
        title: "СЕТ ЛАЙТ",
        description:
        "Чорний дракон, Філадельфія з лососем, \n Ніжний з лососем",
        value: "16 шт. 550 г",
        price: "285 грн." ,
    },
    {
        id: 6,
        img: card6,
        title: "СЕТ ВЕСЕЛКА",
        description:
          "Сурімі рол, Філадельфія з тунцем, \n Філадельфія з лососем , Эбі темпура",
        value: "32шт. 1250 г",
        price: "599 грн." ,
    },
    {
        id: 7,
        img: card7,
        title: "СЕТ ТРОПІКАНА",
        description:
        "Філадельфія з манго, Філадельфія з лососем, Ролл Манго",
        value: "22 шт. 100 г",
        price: "495 грн." ,
    },
    {
        id: 8,
        img: card8,
        title: "СЕТ ТРІО",
        description:
          "Філадельфія з лососем, Чорний дракон, Ніжний з сиром",
        value: "24 шт. 830 г",
        price: "429 грн." ,
    },
    {
        img: card9,
        title: "СЕТ ALL-INCLUSIVE",
        description:
        "Смажений з лососем, Сяке темпура, Ніжний з \n лососем, Запечений з лососем, Каліфорнія манго, \n Філадельфія з лососем, Філадельфія з манго",
        value: "56 шт. 2050 г",
        price: "1040 грн." ,
    },
  ]


function Discount(){
    const [noOfElement, setnoOfElement] = useState(3);
    const [showButton, setshowButton] = useState(true);
    
    const slice = discountItems.slice(0, noOfElement);
    const loadMore = () => {
        setnoOfElement (noOfElement + noOfElement);
        if (noOfElement === 6){
            setshowButton(!showButton)
        }
    }
    return (
        <div className={styles.cardsBlock}>
            <ul> {slice.map((item) => (
                <li key={item.id}>
                    <div className={styles.card}>
                        <img src={item.img} alt="" />
                        <div className={styles.text}>
                            <div className={styles.title}>
                                {item.title}
                            </div>
                            <div className={styles.description}>
                                {item.description}
                            </div>
                            <div className={styles.price}>
                                {item.price}
                            </div>
                            <div className={styles.value}>
                                {item.value}
                            </div>
                            <div className={styles.order}>
                                <div className={styles.button}>
                                    <a href="./../">
                                        Замовити
                                        <img className={styles.cart} src={cart} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                ))}
            </ul>
            <div className={styles.centerButton}>
                {showButton && <button 
                                className={styles.showMore}
                                onClick={() => loadMore()}
                                >Показати ще</button>}
            </div>
        </div>    
    )
  }

  export default Discount;