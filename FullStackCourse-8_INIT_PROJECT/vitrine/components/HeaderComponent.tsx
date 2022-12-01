import React from "react";
import Image from "next/image";
import styles from "../styles/header.module.css";

const HeaderComponent: React.FC = () => {
    return (
        <div className={styles.headercss}>
            <div>
                <Image src="/logo.svg" width={100} height={100}></Image>
            </div>
            <div>
                <button> Connexion admin </button>
            </div>
        </div>

    )
}

export default HeaderComponent;