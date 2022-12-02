import React from "react";
import styles from "../styles/header.module.css";


const FooterComponent: React.FC = () => {
  return (
    <footer>
      <div className={styles.footer}>
      <div className={styles.footertexte}>
      <p>Contact</p>
      <p>Conditions Générales pdf</p>
      </div>

      <div className={styles.rides}>
      <p>RIDE 2022. Tous droits reversés.</p>
    </div>
    </div>
    </footer>
  );
};

export default FooterComponent;
