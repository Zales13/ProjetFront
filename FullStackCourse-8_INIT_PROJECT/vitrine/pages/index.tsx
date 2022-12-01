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
      <InputTextComponent label="Nom" type={"text"} />
      <InputTextComponent label="Prénom" type={"text"} />
      <InputTextComponent label="E-mail" type={"email"} />
      <InputTextComponent label="Numéro de téléphone" type={"tel"} />
      <div className={styles.inscription}> <ButtonComponent onClick = {()=>{alert("bonjour")}}> Demander mon inscription </ButtonComponent>  </div>
      <main></main>
      <FooterComponent />
    </>
  );
};

export default Home;
