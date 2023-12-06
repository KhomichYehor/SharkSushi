import React from "react";
import styles from "./Header.module.css";
import Navigation from './navigation/Navigation';
import Hero from "./hero/Hero";

function Header() {
  return (
    <div className={styles.header}>
      <Navigation />
      <Hero />
    </div>
  );
}

export default Header;
