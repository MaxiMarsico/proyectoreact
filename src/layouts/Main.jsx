import React from "react";
import Brands from '../components/Brands/Brands';
import WeDeliver from "../components/Deliver/WeDeliver";
import Footer from '../components/Footer/Footer';
import Home from "../components/Home/Home";



const Main = () => {

  return (
    <div className="container-fluid">

      <Home />

      <WeDeliver />
    
      <Brands />
    
      <Footer />
    </div>
  );
};

export default Main;
