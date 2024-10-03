import React from "react";
import "./App.scss";
import Button from "./Components/Button/Button";
import Cards from "./Components/Cards/Cards";
import Choose from "./Components/Choose/Choose";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Works from "./Components/Works/Works";

const App = () => {
  return (
    <div className="section">
      <Navbar />
      <Intro />
      <Cards />
      <Choose />
      <Works />
      <Button />
      <Footer />
    </div>
  );
};

export default App;