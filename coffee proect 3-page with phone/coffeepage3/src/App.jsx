import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Create from "./Components/Create.jsx/Create";
import Choose from "./Components/Choose/Choose";
import Offer from "./Components/Offer/Offer";
import Kattaota from "./Components/Kattaota/Kattaota";
import About from "./Components/About/About";
import Btn from "./Components/Btn/Btn";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="subscribe">
      <Navbar />
      <Create />
      <Choose />
      <Offer />
      <Kattaota />
      <About />
      <Btn />
      <Footer />
    </div>
  );
}

export default App;
