import { InputTextComponent, ButtonComponent } from "my-lib-ui";
import type { NextPage } from "next";
import SelectComponent from "my-lib-ui";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import styles from "../styles/header.module.css";




const Home: NextPage = () => {
  return (
    <>
  <HeadComponent />

    <HeaderComponent></HeaderComponent>
    <div className={styles.background}></div>
      
      <InputTextComponent label="Nom" placeholder="Votre nom" />
      <InputTextComponent label="Prénom" placeholder="Votre prénom" />
      <InputTextComponent label="E-mail" placeholder="Votre e-mail" />
      <InputTextComponent label="Numéro de téléphone" placeholder="Numéro" />
      <div className={styles.inscription}> <ButtonComponent onClick = {()=>{alert("bonjour")}}> Demander mon inscription </ButtonComponent>  </div>
      <main></main>
      <FooterComponent />
    </>
  );
};

export default Home;
