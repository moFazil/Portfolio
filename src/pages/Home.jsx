import React, { useState } from "react";
import NavBar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Skills from "../Components/Skills/Skills";
import Work from "../Components/Work/Work";
import Resume from "../Components/Resume/Resume";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";


const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>
      {/* <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Work darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
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
