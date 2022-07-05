import React from "react";
import Advanced from "./components/Advanced";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LinkSubmit from "./components/LinkSubmit";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LinkSubmit />
      <Advanced />
      <Boost />
      <Footer />
    </>
  );
};

export default App;
