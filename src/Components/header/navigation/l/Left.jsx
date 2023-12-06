import React from "react";
import styles from './Left.module.css';
import logo from './../src/logo.png';

function Left() {
    return (
        <div className={styles.left}>
          <div className={styles.text}>Shark Sush</div>
          <div className={styles.logo}>
            <img src={logo} alt="#"></img>
          </div>
        </div>
    )
};

export default Left;