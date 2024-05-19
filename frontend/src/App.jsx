import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Strips from "./components/Strips";
import BestProducts from "./components/BestProducts";

function App() {
  return <div className="bg-bg-main font-roboto">
      <Navbar/>
      <Hero/>
      <BestProducts/>
      
  </div>
}

export default App;
