import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  return (
    <div>
      {name && (
  <div className="welcome">
    Welcome, {name} 👋
  </div>
)}

      {/* HERO */}
      <div className="hero">
        <div className="hero-text">

          <h1>
            Healing after Birth,
            <br /> Made Simple
          </h1>

          <p>
            Track sleep, monitor healing progress, manage doctor visits,
            and prioritize mental wellness — all in one place.
          </p>

          <div className="buttons">
            <button onClick={() => navigate("/sleep")}>
              Sleep Tracking
            </button>

            <button onClick={() => navigate("/mental")}>
              Mental Wellness
            </button>

            <button>Doctor Support</button>

            <button className="dark-button">
              Get Started
            </button>
          </div>
        </div>

        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/060/002/651/small_2x/pregnant-woman-holding-belly-in-brown-dress-studio-portrait-free-photo.jpg"
          alt="hero"
        />
      </div>

      {/* CARDS */}
      <div className="home-cards">

        {/* Sleep */}
        <div className="home-card" onClick={() => navigate("/sleep")}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/049/171/640/small/of-pregnant-woman-relaxing-lay-down-on-sofa-at-her-house-photo.jpeg" alt="" />
          <div className="overlay">
            <h3>Sleep Recovery</h3>
            <p>Track sleep hours and progress</p>
          </div>
        </div>

        {/* Body Healing */}
        <div className="home-card" onClick={() => navigate("/mental")}>
          <img src="https://www.bellybands.com.au/cdn/shop/products/3-in-1-belly-band-for-pregnancy-postpartum-c-section-206986.jpg?v=1699611439" alt="" />
          <div className="overlay">
            <h3>Body Healing Tracker</h3>
            <p>Monitor recovery and exercises</p>
          </div>
        </div>

        {/* Mental */}
        <div className="home-card" onClick={() => navigate("/wellness")}>
          <img src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb" alt="" />
          <div className="overlay">
            <h3>Mental Wellness Support</h3>
            <p>Mood tracking & depression support</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;