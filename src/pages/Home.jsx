import React, { useState } from "react";
import NavBar from "../Components/Navbar/Navbar.jsx";
import Hero from "../Components/Hero/Hero.jsx";
import Skills from "../Components/Skills/Skills.jsx";
import Work from "../Components/Work/Work.jsx";
import Resume from "../Components/Resume/Resume.jsx";
import Contact from "../Components/Contact/Contact.jsx";
import Footer from "../Components/Footer/Footer.jsx";


const Home = () => {
  
  return (
    <>
      <NavBar/>
      <Hero/>
      <Skills/>
      <Work/>
      <Resume/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
