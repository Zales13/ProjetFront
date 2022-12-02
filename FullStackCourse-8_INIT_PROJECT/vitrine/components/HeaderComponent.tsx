import { ButtonComponent }  from "my-lib-ui"
import React from "react";
import Image from "next/image";
import styles from "../styles/header.module.css";
import Link from "next/link";

const HeaderComponent: React.FC = () => {
    return (
        <div className={styles.headercss}>
            
                <Image src="/logo.svg" width={160} height={200}></Image>
                <div> <ButtonComponent>
                <Link href="login">Connexion admin</Link> 
                </ButtonComponent>  
                </div>
        </div>

    )
}

export default HeaderComponent;