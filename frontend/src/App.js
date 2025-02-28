import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Login from "./pages/Login"; 

function App() {
  return (
    <Router>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Journal" element={<Journal />} />
  <Route path="/login" element={<Login />} />
  </Routes>
    </Router>
  );
}

export default App;
