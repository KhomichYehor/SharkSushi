import React from "react";
import styles from './Registration.module.css';
import logo from './src/logo.png';
import Inputs from "./forms/Inputs";


function Registration(){

    return (
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
                <Inputs />
                <div className={styles.suptitle}>
                    *Підписавшись на щотижневу/щомісячну розсилку, ти будешь отримувати персональні найвигідніші пропозиції та знижки від <span>SharkSushi</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Registration;