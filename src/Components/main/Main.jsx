import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React from "react";
import styles from './Main.module.css';
import Discount from './menu/discount/Discount';
import Sets from './menu/sets/Sets';
import Rolls from "./menu/rolls/Rolls";
import Sushi from "./menu/sushi/Sushi";
import Pizza from "./menu/pizza/Pizza";
import Soups from "./menu/soups/Soups";
import Noodles from "./menu/noodles/Noodles";
import Drinks from "./menu/drinks/Drinks";
import logo from './../main/registration/src/logo.png';
import square from './../main/registration/src/square.png';

function Main(){

    return(
        <BrowserRouter>
            <div className={styles.main}>
                <div className={styles.menu}>
                    <div className={styles.titleSection}>
                        <div className={styles.title}>
                        <h1> Menu </h1>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.navigation}>
                            <NavLink to='/'>Акції</NavLink>
                            <NavLink to='/sets' >Сети</NavLink>
                            <NavLink to='/rolls'>Роли</NavLink>
                            <NavLink to='/sushi'>Суші</NavLink>
                            <NavLink to='/pizza'>Піца</NavLink>
                            <NavLink to='/soups'>Супи</NavLink>
                            <NavLink to='/noodles'>Локшина</NavLink>
                            <NavLink to='/drinks'>Напої</NavLink>
                        </div>
                        <Routes>
                            <Route path='/' element={<Discount/>} />
                            <Route path='/discount' element={<Discount/>} />
                            <Route path='/sets' element={<Sets/>} />
                            <Route path='/rolls' element={<Rolls/>} />
                            <Route path='/sushi' element={<Sushi/>} />
                            <Route path='/pizza' element={<Pizza/>} />
                            <Route path='/soups' element={<Soups/>} />
                            <Route path='/noodles' element={<Noodles/>} />
                            <Route path='/drinks' element={<Drinks/>} />
                        </Routes>               
                    </div>
                </div>
                <div className={styles.registration}>
                    <div className={styles.registrationLeft}>
                        <div className={styles.logo}>
                            <div className={styles.text}>Shark Sush</div>
                            <div className={styles.image}>
                                <img src={logo} alt="#"></img>
                            </div>
                        </div>
                        <div className={styles.description}>
                        Стань постійним клієнтом! <br /> Отримуй знижку до 10% <br /> На перше замовлення!
                        </div>
                    </div>
                    <div className={styles.registrationRight}>
                        <div className={styles.form}>
                            <div className={styles.title}>
                                Зареєструватися
                            </div>
                            <div className={styles.inputs}>
                                <div className={styles.nameInput}>
                                    <div className={styles.inputBefore}>Імʼя:</div>
                                    <input className={styles.name} type="text" />
                                </div>
                                <div className={styles.mailInput}>
                                    <div className={styles.inputBefore}>E-mail:</div>
                                    <input className={styles.email} type="text" />
                                </div>
                            </div>
                            <div className={styles.sendAccept}>
                                <div className={styles.imagesquare}>
                                    <img src={square} alt="" />
                                </div>
                                <div className={styles.description}>
                                    Погоджуюсь на щотижневу розсилку від <span>SharkSushi</span> 
                                </div>
                            </div>
                            <div className={styles.sendButton}>
                                <button className={styles.sendBtn}>Підписатись</button>
                            </div>
                            <div className={styles.suptitle}>
                                *Підпишись на щотижневу розсилку, в якій тобі розповідатимуть про найвигідніші пропозиції  та персональні знижки особисто для тебе
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default Main;
