import React from "react";
import { Route, Routes } from "react-router-dom";
import FloatingButtons from "./components/common/FloatingButtons";
import Navbar from "./components/common/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function PortfolioPage() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Project />
      <Skills />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <FloatingButtons />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}

export default App;
