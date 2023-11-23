import React, { useEffect } from 'react';
import styles from './Header.module.css';
import logo from './src/navigation/logo.png';
import cart from './src/navigation/cart.png';
import glass from './src/navigation/magnifyingglass.png';
import slide from './src/navigation/slide.png';
import card1 from './src/hero/card1.png';
import card2 from './src/hero/card2.png';
import card3 from './src/hero/card3.png';
import circle1 from './src/hero/circle/1.png';
import circle2 from './src/hero/circle/2.png';
import circle3 from './src/hero/circle/3.png';
import circle4 from './src/hero/circle/4.png';
import circle5 from './src/hero/circle/5.png';
import circle6 from './src/hero/circle/6.png';
import circle7 from './src/hero/circle/7.png';
import circle8 from './src/hero/circle/8.png';
import circle9 from './src/hero/circle/9.png';



function Header() {
    
    useEffect(() => {
        const cardImage = document.querySelectorAll(styles.cardImage);
        const imgContent = document.querySelectorAll(styles.imgContent);
    
        for (let i=0; i<cardImage.length; i++){
            cardImage[i].addEventListener('mouseover', () => {
                for(let i=0; i<imgContent.length; i++){
                    imgContent[i].className = styles.imgContent;
                 }
                document.getElementById(this.dataset.id).className = imgContent;
    
                for(let i=0; i<cardImage.length; i++){
                cardImage[1].className = cardImage;
                }
        this.className = 'cardImage active';
        })
    }
    },[]);



    return (
            <div className={styles.header}>
                <div className={styles.navigation}>
                    <div className={styles.left}>
                        <div className={styles.text}>
                            Shark Sush
                        </div>
                        <div className={styles.logo}>
                            <img src={logo} alt='#'></img>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <div className={styles.navigationItem}>
                            <a href="./../public/index.html" target="_blank">Меню</a>
                        </div>
                        <div className={styles.navigationItem}>
                            <a href="./../public/index.html" target="_blank">Акції</a>
                        </div>
                        <div className={styles.navigationItem}>
                            <a href="./../public/index.html" target="_blank">Контакти</a>   
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.searchbar}>
                            <button type='button' href='./../public/index.html"'>
                                <img src={glass} alt='#'></img>
                            </button>
                            <input placeholder='Пошук'></input>
                        </div>
                        <div className={styles.cart}>
                            <div className={styles.cartImage}>
                                <img src={cart} alt='#'></img>
                            </div>
                            <div className={styles.price}>
                                1999 грн.
                            </div>
                            <div className={styles.arrow}>
                                <img src={slide} alt='#'></img>
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
                        Швидка доставка суш, приготованих<br /> із найсвіжіших продуктів
                        </div>
                        <div className={styles.left__button}>
                            <a href="./../public/index.html" target="_blank">
                                Замовити
                            </a>
                        </div>
                        <div className={styles.left__cards}>
                            <div className={styles.left__card}>
                                <img src={card1} alt='#'/>
                                <div className={styles.card__text}>
                                Швидка доставка
                                </div>
                            </div>
                            <div className={styles.left__card}>
                                <img src={card3} alt='#'/>
                                <div className={styles.card__text}>
                                Свіжі інгредієнти
                                </div>
                            </div>
                            <div className={styles.left__card}>
                                <img src={card2} alt='#'/>
                                <div className={styles.card__text}>
                                Задоволені клієнти
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hero__right}>
                        <div className={styles.circle}>
                            <div className={styles.icon}>
                                <div className={`${styles.img1} ${styles.active}`} data-id='content1'>
                                    <img src={circle1} alt='#'></img>
                                </div>
                                <div className={styles.img2} data-id='content2'>
                                    <img src={circle2} id='2' alt='#'></img>
                                </div>
                                <div className={styles.img3} data-id='content3'>
                                    <img src={circle3} id='i:3'alt='#'></img>
                                </div>
                                <div className={styles.img4} data-id='content4'>
                                    <img src={circle4} alt='#'></img>
                                </div>
                                <div className={styles.img5} data-id='content5'>
                                    <img src={circle5} alt='#'></img>
                                </div>
                                <div className={styles.img6} data-id='content6'>
                                    <img src={circle6} alt='#'></img>
                                </div>
                                <div className={styles.img7} data-id='content7'>
                                    <img src={circle7} alt='#'></img>
                                </div>
                                <div className={styles.img8} data-id='content8'>
                                    <img src={circle8} alt='#'></img>
                                </div>
                                <div className={styles.img9} data-id='content9'>
                                    <img src={circle9} alt='#'></img>
                                </div>
                            </div>

                            {/* Slider  */}
                            <div className={styles.contentCircle}>
                                <div className={`${styles.imgContent} ${styles.active}`} id='content1'>
                                    <div className={styles.card}>
                                        <div className={styles.cardImage}>
                                            <img src={circle1} alt='#'></img> 
                                        </div>
                                        <div className={styles.imgTitle}>СЕТ ФІЛАМАНІЯ</div>
                                        <div className={styles.imgText}>Філа лосось, Філа вугор, Чіз рол <br /> 32шт. 900гр <br /> 535 грн.</div>
                                    </div>
                                </div>
                                <div className={styles.imgContent} id='content2'>
                                    <div className={styles.card}>
                                        <div className={styles.cardImage}>
                                            <img src={circle2} alt='#'></img> 
                                        </div>
                                        <div className={styles.imgTitle}>СЕТ МЕГАФІШ</div>
                                        <div className={styles.imgText}>Філадельфія з манго, філадельфія з лососем, запечений з лососем, <br /> запечений з морепродуктами, <br /> Чорний принц, чорний дракон <br /> 32шт. 1130г <br /> 625 грн.</div>
                                    </div>
                                </div>
                                <div className={styles.imgContent} id='content3'>
                                    <div className={styles.card}>
                                        <div className={styles.cardImage}>
                                            <img src={circle3} alt='#'></img> 
                                        </div>
                                        <div className={styles.imgTitle}>СЕТ ФІЛА 50/50</div>
                                        <div className={styles.imgText}>Філадельфія з лососем, Філадельфія з вугрем, <br /> Філадельфія з манго, Смажений з сиром,<br />Ніжний з лососем <br /> 28шт. 1000 г<br /> 499 грн.</div>
                                    </div>
                                </div>
                                <div className={styles.imgContent} id='content4'>
                                    <div className={styles.card}>
                                        <div className={styles.cardImage}>
                                            <img src={circle4} alt='#'></img> 
                                        </div>
                                        <div className={styles.imgTitle}>СЕТ ЛАЙТ</div>
                                        <div className={styles.imgText}>Чорний дракон, Філадельфія з лососем, <br /> Ніжний з лососем <br /> 16 шт. 550 г <br /> 285 грн.</div>
                                    </div>
                                </div>
                                <div className={styles.imgContent} id='content5'>
                                    <div className={styles.card}>
                                        <div className={styles.cardImage}>
                                            <img src={circle5} alt='#'></img> 
                                        </div>
                                        <div className={styles.imgTitle}>СЕТ ВЕСЕЛКА</div>
                                        <div className={styles.imgText}>Сурімі рол, Філадельфія з тунцем , <br /> Філадельфія з лососем , Эбі темпура <br /> 32шт. 1250 г <br /> 599 грн.</div>
                                    </div>
                                </div>
                                <div className={styles.imgContent} id='content6'>
                                    <div className={styles.card}>
                                        <div className={styles.cardImage}>
                                            <img src={circle6} alt='#'></img> 
                                        </div>
                                        <div className={styles.imgTitle}>СЕТ ALL-INCLUSIVE</div>
                                        <div className={styles.imgText}>Смажений з лососем, Сяке темпура, Ніжний з <br /> лососем, Запечений з лососем, Каліфорнія манго, <br /> Філадельфія з лососем, Філадельфія з манго <br /> 56 шт. 2050 г <br /> 1040 грн.</div>
                                    </div>
                                </div>
                                <div className={styles.imgContent} id='content7'>
                                    <div className={styles.card}>
                                        <div className={styles.cardImage}>
                                            <img src={circle7} alt='#'></img> 
                                        </div>
                                        <div className={styles.imgTitle}>СЕТ ТРІО</div>
                                        <div className={styles.imgText}>Філадельфія з лососем, Чорний дракон, <br /> Ніжний з сиром <br /> 24 шт. 830 г<br /> 429 грн.</div>
                                    </div>
                                </div>
                                <div className={styles.imgContent} id='content8'>
                                    <div className={styles.card}>
                                        <div className={styles.cardImage}>
                                            <img src={circle8} alt='#'></img> 
                                        </div>
                                        <div className={styles.imgTitle}>СЕТ ТРОПІКАНА</div>
                                        <div className={styles.imgText}>Філадельфія з манго, Філадельфія з лососем, <br /> Ролл Манго <br /> 22шт. 1000 г <br /> 495 грн.</div>
                                    </div>
                                </div>
                                <div className={styles.imgContent} id='content9'>
                                    <div className={styles.card}>
                                        <div className={styles.cardImage}>
                                            <img src={circle9} alt='#'></img> 
                                        </div>
                                        <div className={styles.imgTitle}>СЕТ ГУРМАН</div>
                                        <div className={styles.imgText}>Ролл Сурімі, Ролл Каліфорнія з лососем в кунжуті <br /> Суші лосось, Суші вугор , Гункан Вугор <br /> 22шт. 900 г <br /> 623 грн.</div>
                                    </div>
                                </div>
                            </div>
                            {/* Slider  */}
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Header;