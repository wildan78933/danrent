import React from "react";
import Home from "./components/Home";
import "./App.css";
import About from "./components/About";
import Card from "./components/Card";
import Benefit from "./components/Benefit";
import Join from "./components/Join";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Card />
      <Benefit />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
