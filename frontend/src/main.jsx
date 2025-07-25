import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./landingpage/Navbar";
import Homepage from "./landingpage/home/Homepage";
import Footer from "./landingpage/Footer";
import Contact from "./landingpage/contact/Contact";
import SignUp from "./landingpage/signup/SignUp";
import About from "./landingpage/about/About";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      
    </Routes>
    <Footer />
  </BrowserRouter>
);
