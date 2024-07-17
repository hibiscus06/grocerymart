import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
