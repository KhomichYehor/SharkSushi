import React from "react";
import styles from './Right.module.css';
import cart from './../src/cart.png';
import glass from './../src/magnifyingglass.png';
import slide from './../src/slide.png';

function Right() {
    return(
        <div className={styles.right}>
          <div className={styles.searchbar}>
            <button type="button" href='./../public/index.html"'>
              <img src={glass} alt="#"></img>
            </button>
            <input placeholder="Пошук" name="search"></input>
          </div>
          <div className={styles.cart}>
            <div className={styles.cartImage}>
              <img src={cart} alt="#"></img>
            </div>
            <div className={styles.price}>1999 грн.</div>
            <div className={styles.arrow}>
              <img src={slide} alt="#"></img>
            </div>
          </div>
        </div>
    )
};

export default Right;