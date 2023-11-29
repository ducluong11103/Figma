import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header/Header";
// import Footer from "./components/layout/Footer/Footer";
import Login from "./components/page/LoginRegister/Login";
import Home from "./components/page/Home/Home";


function App() {
  return (
    <div className="container">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
