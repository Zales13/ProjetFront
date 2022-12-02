import { InputTextComponent, ButtonComponent } from "my-lib-ui";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import Link from "next/link";
import HeaderComponent from "../components/HeaderComponent";
import styles from "../styles/header.module.css";

const Login: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <HeadComponent/>
      <HeaderComponent></HeaderComponent>

    <div className={styles.retour}>
      <Link href="/">Retour</Link> 
      </div>


      <div className={styles.connexion}>
      <h1 className={styles.titre}> CONNEXION </h1>
        
      <InputTextComponent label="Identifiant" type={"text"}/>
      <InputTextComponent label="Mot de passe" type={"password"} />
      <ButtonComponent> Connexion</ButtonComponent>
      
      </div>
      
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Login;
