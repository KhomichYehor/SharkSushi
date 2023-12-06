import React, {useState} from "react";
import styles from './Pizza.module.css';
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

const pizzaItems = [
    {
        img: card1,
        title: "ПІЦЦА 4 СЕЗОНИ",
        description: "Соус томатний, Моцарелла терта, Чибуля червона, \n Куряча грудка, Гриби , Пепероні, \n Мисливські ковбаски, Шинка, Кукурудза,",
        value: "1 шт. 470 г",
        price: "150 грн." ,
    },
    {
        img: card2,
        title: "ПІЦЦА 4 СИРА",
        description:
        "Моцарела, Сир Дор Блю, Сир чедер слайс \n Сир фета, Вершковий соус",
        value: "1 шт. 440 г",
        price: "220 грн." ,
    },
    {
        img: card3,
        title: "ПІЦЦА ГАВАЙСЬКА",
        description:
        "Копчена курка, Сир моцарела, \n Ананас, Вершковий соус",
        value: "1 шт. 480 гг",
        price: "215 грн." ,
    },
    {
        img: card4,
        title: "ПІЦЦА МОРСЬКА",
        description:
          "Лосось , Мідія , креветка коктейльна,  \n Сир моцарела, Петрушка, Вершковий соус",
        value: "1 шт. 450 г",
        price: "258 грн." ,
    },
    {
        img: card5,
        title: "МОЯ ПІЦЦА",
        description:
        "Сир моцарела, томат коктейльный, Прошутто, \n Томатний соус, Оливки, Петрушка",
        value: "1 шт. 400 г",
        price: "205 грн." ,
    },
    {
        img: card6,
        title: "ПІЦЦА СПАЙСІ",
        description:
          "Пепероні, Мисливські ковбаски, Цибуля синя, \n Перець чилі, Сир моцарела, Італійські трави, \nТоматний соус+шрірача",
        value: "1 шт. 400 г",
        price: "190 грн." ,
    },
    {
        img: card7,
        title: "ПІЦЦА МАРГАРИТА",
        description:
        "Сир моцарела, Італійські трави, Томатний соус, \n Основа:, Крафтове борошно",
        value: "1 шт. 350 г",
        price: "129 грн." ,
    },
    {
        img: card8,
        title: "ПІЦЦА 4 М’ЯСА",
        description:
          "Соус томатний , Моцарелла терта, Пепероні, \n Ветчина , Охотничьи ковбаски , Куряча грудка \n Помидори черрі,",
        value: "1 шт. 440 г",
        price: "185 грн." ,
    },
    {
        img: card9,
        title: "ПІЦЦА ПАПЕРОНИ",
        description:
        "Пепероні, Сир моцарела, Італійські трави, \n Томатний соус",
        value: "1 шт. 450 г",
        price: "180 грн." ,
    },
  ];

function Pizza() {

    const [noOfElement, setnoOfElement] = useState(3);
    const [showButton, setshowButton] = useState(true);
    
    const slice = pizzaItems.slice(0, noOfElement);
    const loadMore = () => {
        setnoOfElement (noOfElement + noOfElement);
        if (noOfElement === 6){
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

export default Pizza;