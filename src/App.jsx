import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";

import Home from "./components/Home";
import About from "./About";
import Login from "./components/Login";
import Contact from "./components/Contact";
import SleepTracker from "./components/SleepTracker";
import MentalWellness from "./components/MentalWellness";
import Wellness from "./components/Wellness";
import Journal from "./components/Journal";
import Breathing from "./components/Breathing";
import Music from "./components/Music";
import Quotes from "./components/Quotes";
import Tips from "./components/Tips";

function App() {
  const [name, setName] = useState("");  // ✅ REQUIRED

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);   // ✅ now works
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("name");
    setName(""); // update UI immediately
    window.location.href = "/login";
  };

  return (
    <BrowserRouter>

      <div className="App">

        {/* NAVBAR */}
        <div className="navbar">

          <div className="logo">
            <h2>PREGACARE</h2>
            <p>PostPartum Recovery Companion</p>
          </div>

          <div className="nav-links">

            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              About
            </NavLink>

            <NavLink to="/contact">
              Contact us
            </NavLink>

            {!name ? (
              <NavLink to="/login">
                Login/SignUp
              </NavLink>
            ) : (
              <span onClick={handleLogout}>
                Logout
              </span>
            )}

          </div>

        </div>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sleep" element={<SleepTracker />} />
          <Route path="/mental" element={<MentalWellness />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/breathing" element={<Breathing />} />
          <Route path="/music" element={<Music />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;