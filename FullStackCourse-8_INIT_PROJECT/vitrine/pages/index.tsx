import { InputTextComponent } from "my-lib-ui";
import type { NextPage } from "next";
import SelectComponent from "my-lib-ui";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";




const Home: NextPage = () => {
  return (
      <><h1> HEADER</h1>

      <HeadComponent />
      <InputTextComponent label="Nom" placeholder="Votre nom" />
      <InputTextComponent label="Prénom" placeholder="Votre prénom" />
      <InputTextComponent label="E-mail" placeholder="Votre e-mail" />
      <InputTextComponent label="Numéro de téléphone" placeholder="Numéro" />
      <main></main>
      <FooterComponent />
    </>
  );
};

export default Home;
