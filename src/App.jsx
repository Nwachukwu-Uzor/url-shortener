import React from "react";
import Advanced from "./components/Advanced";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LinkSubmit from "./components/LinkSubmit";
import Navbar from "./components/Navbar";
import LinkContextProvider from "./context/LinkContextProvider";

const App = () => {
  return (
    <LinkContextProvider>
      <Navbar />
      <Hero />
      <LinkSubmit />
      <Advanced />
      <Boost />
      <Footer />
    </LinkContextProvider>
  );
};

export default App;
