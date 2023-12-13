import React from "react";
import styles from "./Header.module.css";
import Hero from "./hero/Hero";

function Header() {
  return (
    <div className={styles.header}>
      <Hero />
    </div>
  );
}

export default Header;
