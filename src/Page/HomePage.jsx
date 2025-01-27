import React from "react";
import Banner from "../Components/Banner";
import RegisterOpen from "../Components/RegisterOpen";
import Meet from "../Components/Meet";
import WhoeWeHelp from "../Components/WhoeWeHelp";
import JoinCommunity from "../Components/JoinCommunity";
import OurAward from "../Components/OurAward";
import Crafting from "../Components/Crafting";
import Ready from "../Components/Ready";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <RegisterOpen />
      <Meet />
      <WhoeWeHelp />
      <JoinCommunity />
      <OurAward />
      <Crafting />
      <Ready />
      <Footer />
    </div>
  );
};

export default HomePage;
