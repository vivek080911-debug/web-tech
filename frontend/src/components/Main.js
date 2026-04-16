import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default Main;