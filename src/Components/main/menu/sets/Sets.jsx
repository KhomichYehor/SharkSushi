import React, {useState} from "react";
import styles from './Sets.module.css';
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


const setsItems = [
    {
        id:1,
        img: card1,
        title: "СЕТ ФРЕШ  ",
        description: "Каліфорнія з лососем в кунжуті, Сурімі рол, \n Креветка рол, Вега Рол, Чіз рол, \n макі лосось, макі огірок",
        value: "32шт. 1000 г",
        price: "549 грн." ,
    },
    {
        id:2,
        img: card2,
        title: "СЕТ РІО",
        description:
        "Смажений з сиром, Смажений з креветкой,\n рол зі смаженим окунем, \n Запечений з морепродуктами",
        value: "32 шт. 1200 г",
        price: "485 грн." ,
    },
    {
        id:3,
        img: card3,
        title: "НЬЮ СЕТ",
        description:
        "Запечений з лососем,\n Ніжний з сиром, \n Філадельфія з лососем",
        value: "24шт. 760г",
        price: "380 грн." ,
    },
    {
        id:4,
        img: card4,
        title: "СЕТ ГАРЯЧА ШТУЧКА",
        description:
          "Ролл Запечений з лососем, Ролл Запечений з \n морепродуктами, Ролл Смажений з сиром, \n Ролл Смажений з лососем",
        value: "32шт. 1120 г",
        price: "569 грн." ,
    },
    {
        id:5,
        img: card5,
        title: "СЕТ ВЕГА",
        description:
        "Ролл Вега , Ролл макі огірок, Ролл Макі авокадо, \n Суші огірок, Суші авокадо, Гункан Огірок, \n Гункан Авокадо",
        value: "32шт. 870 г",
        price: "275 грн." ,
    },
    {
        id:6,
        img: card6,
        title: "СЕТ ФІРМОВИЙ",
        description:
          "Запечений з морепродуктами, \n Ніжний з куркою, Смажений з сиром, \nЧорний Дракон",
        value: "32 шт. 1120 г",
        price: "495 грн." ,
    },
    {
        id:7,
        img: card7,
        title: "СЕТ FRIDAY",
        description:
        "Ніжний з куркою, Ніжний з сиром, \n Смажений з лососем, Вулкан",
        value: "32шт. 1140 г",
        price: "575 грн." ,
    },
    {
        id:8,
        img: card8,
        title: "СЕТ САМУРАЙ",
        description:
          "Філадельфія з креветкою, Чорний принц, \n чорний дракон",
        value: "24 шт. 900 г",
        price: "540 грн." ,
    },
    {
        id:9,
        img: card9,
        title: "СЕТ ОУШЕН",
        description:
        "ССмажений з лососем, Смажений з вугрем , \n запечений з морепродуктами , Філадельфія з \n лососем, Філадельфія з креветкою",
        value: "24шт. 1200 г",
        price: "670 грн." ,
    },
  ];

function Sets() {

    const [noOfElement, setnoOfElement] = useState(3);
    const [showButton, setshowButton] = useState(true);
    
    const slice = setsItems.slice(0, noOfElement);
    const loadMore = () => {
        setnoOfElement (noOfElement + noOfElement);
        if (noOfElement === 6){
            setshowButton(!showButton)
        }
    }

    return(
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
};

export default Sets;