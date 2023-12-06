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

function Main(props){

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
            </div>
        </BrowserRouter>
    )
};

export default Main;
