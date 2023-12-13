import React, {useState} from "react";
import styles from './Soups.module.css';
import card1 from './src/card1.png';
import card2 from './src/card2.png';
import card3 from './src/card3.png';
import card4 from './src/card4.png';
import card5 from './src/card5.png';
import card6 from './src/card6.png';
import card7 from './src/card7.png';
import cart from './src/cart.png';

const soupsItems = [
    {
        id:1,
        img: card1,
        title: "РАМЕН З КУРКОЮ",
        description: "Локшина удон, Яйце вар, Курка маринована.жар, \n Гриби Шийтаке, Перець чилі, Кунжут, \n Бульйон для рам, Цибуля зелена, Норі",
        value: "475 г",
        price: "164 грн." ,
    },
    {
        id:2,
        img: card2,
        title: "КРЕМ СУП З КУРКОЮ",
        description:
        "Курка, Гриби, Сир філа, Сир вершковий, \n Кокосовое молоко, Цибуля зелена",
        value: "329 г",
        price: "144 грн." ,
    },
    {
        id:3,
        img: card3,
        title: "МИСО ЛОСОСЬ",
        description:
        "Бульйон на суп з мор., Удон, Креветка коктейльна, \n Кальмар, Лосось, Вакаме, Гриби шийтаке, \n Цибуля зелена",
        value: "250 г",
        price: "109 грн." ,
    },
    {
        id:4,
        img: card4,
        title: "ТОМ-ЯМ",
        description:
          "Креветка тигр, Кальмар, Гриби шийтаке, \n Молоко кокосове, Паста том ям, Імбір/цедра \n лимона, Сіль, Вода, Лук зелений, Олія",
        value: "400 г",
        price: "195 грн." ,
    },
    {
        id:5,
        img: card5,
        title: "СУП СУІМОНО",
        description:
        "Бульйон Клер, Рисова локшина, Курка жар, \n Крабова паличка, Яйце вар.,Цибуля зел,  \n Гриби шийтаке, Вакаме",
        value: "280 г",
        price: "109 грн." ,
    },
    {
        id:6,
        img: card6,
        title: "РАМЕН З ТЕЛЯТИНОЮ",
        description:
          "Локшина удон, Яйце вар, Телятина \n маринована жар., Гриби Шийтаке, Перець чилі, \n Кунжут, Бульйон для рам.теля., Цибуля зелена, Норі",
        value: "475 г",
        price: "189 грн." ,
    },
    {
        id:7,
        img: card7,
        title: "МІСО СУП",
        description:
        "Бульйон місо, Вакаме, Цибуля зелена, \n Кунжут, Сир тофу",
        value: "190 г",
        price: "83 грн." ,
    },
  ];

function Soups() {

    const [noOfElement, setnoOfElement] = useState(3);
    const [showButton, setshowButton] = useState(true);
    
    const slice = soupsItems.slice(0, noOfElement);
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

export default Soups;