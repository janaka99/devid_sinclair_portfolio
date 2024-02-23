import React from "react";
import Hero from "./containers/Hero";
import About from "./containers/About";
import Services from "./containers/Services";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";

const App = () => {
  return (
    <div className="box-border overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
