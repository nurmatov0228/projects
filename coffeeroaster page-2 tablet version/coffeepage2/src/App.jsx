import React from "react";
import "./App.scss";
import Navbar from "../src/Components/Navbar/Navbar";
import About from "./Components/About/About";
import Our from "./Components/Our/Our";
import Quality from "./Components/Quality/Quality";
import Head from "./Components/Head/Head";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="section">
      <Navbar />
      <About />
      <Our />
      <Quality />
      <Head />
      <Footer />
    </div>
  );
};

export default App;
