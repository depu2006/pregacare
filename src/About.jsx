import React from "react";
import "./index.css";

function About() {
  return (
    <div className="about">

      <div className="about-container">
        


        <h1><ul>About PregaCare</ul></h1>


        <p className="tagline">
          Supporting mothers through every step of postpartum recovery.
        </p>

        <p>
          PregaCare is designed to empower new mothers during one of the most
          important phases of life — recovery after childbirth. We understand
          that postpartum care is not just physical, but also emotional and
          mental.
        </p>

        <p>
          Our platform provides a simple and reliable way to track recovery,
          monitor sleep patterns, manage health routines, and prioritize mental
          wellness. Whether it’s healing after delivery, understanding your
          baby’s needs, or maintaining your own well-being, PregaCare is here
          to guide you.
        </p>

        <p>
          We aim to create a safe and supportive environment where mothers feel
          informed, confident, and cared for — because every mother deserves the
          best care after giving life.
        </p>

        <div className="features">
          <div className="feature">
            <h3>Health Tracking</h3>
            <p>Monitor recovery, sleep, and daily health activities.</p>
          </div>

          <div className="feature">
            <h3>Mental Wellness</h3>
            <p>Track mood and get support for emotional well-being.</p>
          </div>

          <div className="feature">
            <h3> Baby Care</h3>
            <p>Guidance for newborn care and early development.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;