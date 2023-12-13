import React, {useState} from "react";
import styles from './Drinks.module.css';
import card1 from './src/card1.png';
import card2 from './src/card2.png';
import card3 from './src/card3.png';
import cart from './src/cart.png';

const drinksItems = [
    {
        id: 1,
        img: card1,
        title: "ЛИМОНАД ІМБІРНИЙ",
        description: "Напій безалкогольний імбірний",
        price: "39 грн." ,
    },
    {
        id:2,
        img: card2,
        title: "МОРС ЯГІДНИЙ",
        description:
        "Напій безалкогольний \n негазований морс ягідний",
        price: "39 грн." ,
    },
    {
        id:3,
        img: card3,
        title: "COCA-COLA 0.5Л",
        description:
        "Напій сильногазований безалкогольний",
        price: "41 грн." ,
    },
  ];

function Drinks() {

    const [noOfElement] = useState(3);
    
    const slice = drinksItems.slice(0, noOfElement);

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

export default Drinks;