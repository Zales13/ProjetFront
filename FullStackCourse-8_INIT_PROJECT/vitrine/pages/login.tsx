import type { NextPage } from "next";
import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import { Header } from "../stories/Header";
import styles from "../styles/header.module.css";

const Login: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <HeadComponent />
      <HeaderComponent></HeaderComponent>
      <main></main>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Login;
