import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Login";
import Journal from "./pages/Journal";
import Login from "./pages/Dashboard"; 

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
