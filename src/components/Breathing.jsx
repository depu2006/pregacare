import { useNavigate } from "react-router-dom";
import "./WellnessPages.css";

export default function Breathing() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="box">
        <h1>Breathing Exercise</h1>
        <br></br>

        <p className="desc">
          Helps reduce stress, improve focus, and calm your mind instantly.
        </p>
        <br></br>

        <div className="circle"></div>
        <br>
        </br>
        <br></br>

        <p>Inhale → Hold → Exhale</p>

        <br></br>

        <button className="back-btn" onClick={() => navigate("/wellness")}>
          ← Back
        </button>
      </div>
    </div>
  );
}