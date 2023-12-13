import React, {useState} from "react";
import styles from './Rolls.module.css';
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

const rollsItems = [
    {
        id:1,
        img: card1,
        title: "РОЛ ІНЬ ЯНЬ",
        description: "Рис, Чорнило каракатиці, Норі, Лосось, \n Вугор, Сир Філадельфія, Авокадо, Унагі, Кунжу",
        value: "8 шт.272 г",
        price: "272 грн." ,
    },
    {
        id:2,
        img: card2,
        title: "РОЛ ВУЛКАН",
        description:
        "Рис, Лосось, Тобіка, Креветка тигр, \n Авокадо, Сір Філа, Нор",
        value: "8 шт. 330 г",
        price: "285 грн." ,
    },
    {
        id:3,
        img: card3,
        title: "КРЕВЕТКА РОЛ",
        description:
        "Креветка темпура, Рис, Сир Філа, Норі, \n Масаго, Огірок, Авокадо, Унаги, Кунжут",
        value: "8 шт. 320 г",
        price: "189 грн." ,
    },
    {
        id:4,
        img: card4,
        title: "ЧІЗ РОЛ",
        description:
          "Рис, Норі, Сир вершковий, Сир Філа, \n Вугор, Сір Чеддер, Унаги, Кунжут",
        value: "8 шт. 300 г",
        price: "228 грн." ,
    },
    {
        id:5,
        img: card5,
        title: "МАКІ З ЛОСОСЕМ",
        description:
        "Рис, Норі, Лосось",
        value: "8 шт. 100 г",
        price: "70 грн." ,
    },
    {
        id:6,
        img: card6,
        title: "ЧОРНИЙ ПРИНЦ",
        description:
          "рис, норі, чорнило, крабмікс, тунець, \n масаго, огурець, кляр, панко",
        value: "8 шт. 265 г",
        price: "129 грн." ,
    },
    {
        id:7,
        img: card7,
        title: "ЗАПЕЧЕНИЙ  ЛОСОСЬ",
        description:
        "Рис, Норі, Сурімі, Кунжут чорний, Лосось, \n Масаго, Соус солодкий чілі, Майонез",
        value: "8 шт.  240 г",
        price: "149 грн." ,
    },
    {
        id:8,
        img: card8,
        title: "СМАЖЕНИЙ ЛОСОСЬ",
        description:
          "Рис, Норі, Сир Філа, Лосось, Тобіка, \n Огірок, Кляр, Панко, Унагі",
        value: "8 шт. 330 г",
        price: "189 грн." ,
    },
    {
        id:9,
        img: card9,
        title: "НІЖНИЙ ЛОСОСЬ",
        description:
        "Рис, Норі, Сир філадельфія, Лосось, \n Сирний заміс, Айсберг, Унагі",
        value: "8 шт. 245 г",
        price: "89 грн." ,
    },
  ];

function Rolls() {

    const [noOfElement, setnoOfElement] = useState(3);
    const [showButton, setshowButton] = useState(true);
    
    const slice = rollsItems.slice(0, noOfElement);
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
};

export default Rolls;