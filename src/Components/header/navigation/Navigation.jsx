import React from "react";
import styles from './Navigation.module.css';
import Left from "./l/Left";
import Middle from "./M/Middle";
import Right from "./R/Right";



function Navigation() {
    return (
       <div className={styles.navigation}>
        <Left />
        <Middle />
        <Right />
      </div>
    )
};



export default Navigation;