import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Services from "./Component/Services/Services";
import Technologies from "./Component/Technologies/Technologies"
import Footer from "./Component/Footer/Footer";
import Resources from "./Component/Resources/Resources";
import Company from "./Component/Company/Company";
import Hiring from "./Component/Hiring/Hiring";
import Developer from "./Component/Developer/Developer";
import About from "./Component/AboutUs/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="pt-20">  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/technologies" element={<Technologies/>} />
            <Route path="/resources" element={<Resources/>} />
            <Route path="/company" element={<Company/>} />
          </Routes>
        </div>
        <Hiring/>
        <Developer/>
        <About/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
