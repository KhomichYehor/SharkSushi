import React from "react";
import styles from './Footer.module.css';
import googlePlay from './src/googlePlay.svg';
import appStore from './src/app.svg';
import instagram from './src/instagram.svg';

function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.contactsSection}>
                <div className={styles.contactsTitle}>
                    Для замовлень:
                </div>
                <div className={styles.contacts}>
                    <a href="tel:+38096-000-00-00">+380-96-000-0000</a>
                </div>
            </div>
            <div className={styles.adressSection}>
                <div className={styles.adressTitle}>
                    Наша адреса:
                </div>
                <div className={styles.adress}>
                    м. Кривий Ріг, вул. Криворізька 1в
                </div>
            </div>
            <div className={styles.emailSection}>
                <div className={styles.emaillTitle}>
                    Наш e-mail:
                </div>
                <div className={styles.email}>
                    <a href="mailto:shark_sushi@gmail.com">shark_sushi@gmail.com</a>
                </div>
            </div>
            <div className={styles.socialSection}>
                <div className={styles.socialTitle}>
                    Соціальні мережі:
                </div>
                <div className={styles.socialLinks}>
                    <a href="./">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="./">
                        <img src={appStore} alt="" />
                    </a>
                    <a href="./">
                        <img src={googlePlay} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Footer;