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
      <div className={styles.background}>
      <div className={styles.zonetexte}> 
      <span className={styles.carretexte}>▷ Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...).
        Notre expérience est à votre service pour répondre à toutes vos demandes.</span>
      </div>
    

      </div>
      <div className={styles.radio}> 
        <h1 className={styles.titre}> INSCRIPTION </h1>
        <h3> Je suis :</h3>
        <input name="offside" type="radio"></input> <label htmlFor="une entreprise"> Une entreprise</label>
        <input name="offside" type="radio"></input> <label htmlFor="un particulier"> Un particulier</label>
        </div>

      <div className={styles.form}>
      
      <InputTextComponent label="Nom" type={"text"} />
      <InputTextComponent label="Prénom" type={"text"} />
      <InputTextComponent label="E-mail" type={"email"} />
      <InputTextComponent label="Numéro de téléphone" type={"tel"} />
      <select className={styles.dropdown} name="Nationalités" id="nationalités"> Nationalités </select>
      
      </div>
      
      <div className={styles.checkbox}>
      <input type="checkbox" name="permis" id="permis"></input>
      <label htmlFor="permis"> J'atteste que je possède un permis de conduire valable</label>
      </div>
      
      
      <div className={styles.inscription}> <ButtonComponent onClick = {()=>{alert("bonjour")}}> Demander mon inscription </ButtonComponent>  </div>
      
      <FooterComponent></FooterComponent>
    </>
  );
};

export default Home;
