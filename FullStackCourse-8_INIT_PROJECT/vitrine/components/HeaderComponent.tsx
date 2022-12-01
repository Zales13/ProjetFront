import { ButtonComponent }  from "my-lib-ui"
import React from "react";
import Image from "next/image";
import styles from "../styles/header.module.css";


const HeaderComponent: React.FC = () => {
    return (
        <div className={styles.headercss}>
            
                <Image src="/logo.svg" width={160} height={200}></Image>
         
                <div> <ButtonComponent onClick = {()=>{alert("bonjour")}}> Connexion admin </ButtonComponent>  </div>
        </div>

    )
}

export default HeaderComponent;