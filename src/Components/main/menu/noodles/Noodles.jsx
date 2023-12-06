import React, {useState} from "react";
import styles from './Noodles.module.css';
import card1 from './src/card1.png';
import card2 from './src/card2.png';
import card3 from './src/card3.png';
import card4 from './src/card4.png';
import card5 from './src/card5.png';
import card6 from './src/card6.png';
import cart from './src/cart.png';

const noodlesItems = [
    {
        img: card1,
        title: "УДОН З ТЕЛЯТИНОЮ",
        description: "Удон, Телятина, Перець болгарський, \n Цибуля ріпчаста, Морква, Брокколі, \nСоус Азіатський",
        value: "270 г",
        price: "131 грн." ,
    },
    {
        img: card2,
        title: "РИСОВА З МОРЕКАМИ",
        description:
        "Рисова локшина, Брокколі, Морква, Спаржа, \n Креветка кокт, Мідії, Кальмар, Цибуля зелена, \n Шрірача, Соус для локшини з мореп",
        value: "300 г",
        price: "142 грн." ,
    },
    {
        img: card3,
        title: "РИСОВА З ТЕЛЯТИНОЮ",
        description:
        "Локшина рисова, Телятина, Перець болгарський, \n Цибуля ріпчаста, Морква, Цибуля зелена, \n Соус Азіатський",
        value: "260 г",
        price: "131 грн." ,
    },
    {
        img: card4,
        title: "УДОН З ОВОЧАМИ",
        description:
          "Удон, Перець болгарський, \n Цибуля ріпчаста, Морква, Цибуля зелена, \n Брокколі, Соус Устричний",
        value: "250 г",
        price: "67 грн." ,
    },
    {
        img: card5,
        title: "РИСОВА З ОВОЧАМИ",
        description:
        "Локшина рисова, Перець болгарський, \n Цибуля ріпчаста, Морква, Цибуля зелена, \nСоус Устричний, Брокколі",
        value: "260 г",
        price: "97 грн." ,
    },
    {
        img: card6,
        title: "УДОН З МОРЕКАМИ",
        description:
          "Удон, Брокколі, Морква, Спаржа, Креветка коктейль, \n Мідії, Кальмар, Цибуля зелена, Соус устричний, \n Cоус Азіатський",
        value: "300 г",
        price: "165 грн." ,
    },
  ];


function Noodles() {

    const [noOfElement, setnoOfElement] = useState(3);
    const [showButton, setshowButton] = useState(true);
    
    const slice = noodlesItems.slice(0, noOfElement);
    const loadMore = () => {
        setnoOfElement (noOfElement + noOfElement);
        if (noOfElement === 3){
            setshowButton(!showButton)
        }
    }

    return (
        <div className={styles.cardsBlock}>
        <ul> {slice.map((item, i) => (
            <li>
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

export default Noodles;