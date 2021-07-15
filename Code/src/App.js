import React from "react";
import "./index.css";

import Header from "./Components/Header";
import MemeGenerator from "./Components/MemeGenerator";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
      <Footer />
    </div>
  );
}

export default App;
