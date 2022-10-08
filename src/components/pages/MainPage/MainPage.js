import React from "react";
import Header from "../../view/Header/Header";
import Footer from "../../view/Footer/Footer";
import BodyPage from "../../view/BodyPage/BodyPage";

import styles  from './MainPage.module.scss'

const MainPage = () => {
  return (
  <div>
    <Header/>
    <BodyPage/>
    <Footer/>
  </div>
  )
};

export default MainPage;