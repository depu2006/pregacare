import { useNavigate } from "react-router-dom";
import "./WellnessPages.css";

export default function Quotes() {
  const navigate = useNavigate();

  const quotes = [
    "You are doing great 💙",
    "Stay strong 🌸",
    "You are not alone 🤍",
    "Every day is a new beginning 🌿"
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="page">
      <div className="box">
        <h1>Affirmations</h1>
        <br></br>

        <p className="desc">
          Positive thoughts improve mental health and boost confidence.
        </p>

        <h2>{quote}</h2>

        <button className="back-btn" onClick={() => navigate("/wellness")}>
          ← Back
        </button>
      </div>
    </div>
  );
}