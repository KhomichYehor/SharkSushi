import React from "react";
import styles from './Hero.module.css';
import Left from "./l/Left";
import Right from "./R/Right";



function Hero() {
    
    
    return (
        <div className={styles.hero}>
          <Left />
          <Right />
        </div>
    )
};

export default Hero;