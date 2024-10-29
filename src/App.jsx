import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Works from "./components/works/Works";
import Client from "./components/client/Client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    // <div className="appContainer">
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/client" element={<Client />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
