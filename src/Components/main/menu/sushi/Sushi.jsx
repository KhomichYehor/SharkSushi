import React, {useState} from "react";
import styles from './Sushi.module.css';
import card1 from './src/card1.png';
import card2 from './src/card2.png';
import card3 from './src/card3.png';
import cart from './src/cart.png';

const sushiItems = [
    {
        id:1,
        img: card1,
        title: "СУШІ ЛОСОСЬ",
        description: "Рис, лосось",
        value: "1 шт. 30 г",
        price: "65 грн." ,
    },
    {
        id:2,
        img: card2,
        title: "СУШІ ВУГОР",
        description:
        "Рис, Вугор, Унагі, Кунжут, Норі",
        value: "1 шт. 40 г",
        price: "75 грн." ,
    },
    {
        id:3,
        img: card3,
        title: "СУШІ ТУНЕЦЬ",
        description:
        "Рис, тунець",
        value: "1 шт. 30 г",
        price: "65 грн." ,
    },
  ];

function Sushi() {

    const [noOfElement] = useState(3);
    
    const slice = sushiItems.slice(0, noOfElement);

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
    </div> 
    )
};

export default Sushi;