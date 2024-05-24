import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestProducts from "./components/BestProducts";
import Categories from "./components/Categories";
import CtaSection from "./components/CtaSection";
import AboutUs from "./components/AboutUs";

function App() {
  return <div className="bg-bg-main font-roboto">
      <Navbar/>
      <Hero/>

      <BestProducts/>
      <Categories/>
      <AboutUs/>
      <CtaSection/>
  </div>
}

export default App;
