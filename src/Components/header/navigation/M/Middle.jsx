import React from "react";
import styles from './Middle.module.css';

function Middle() {
    return (
        <div className={styles.middle}>
          <div className={styles.navigationItem}>
            <a href="./../public/index.html" target="_blank">
              Меню
            </a>
          </div>
          <div className={styles.navigationItem}>
            <a href="./../public/index.html" target="_blank">
              Акції
            </a>
          </div>
          <div className={styles.navigationItem}>
            <a href="./../public/index.html" target="_blank">
              Контакти
            </a>
          </div>
        </div>
    )
};


export default Middle;