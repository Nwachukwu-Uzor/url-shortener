import React from "react";
import Advanced from "./components/Advanced";
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
    </>
  );
};

export default App;
