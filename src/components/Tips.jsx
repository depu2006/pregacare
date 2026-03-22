import { useNavigate } from "react-router-dom";
import "./WellnessPages.css";

export default function Tips() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="box">
        <h1>Support Tips</h1>
        <br>
        </br>

        <p className="desc">
          Small daily habits can improve your overall mental well-being.
        </p>

        <ul className="tips">
          <li>🛌 Take proper rest</li>
          <li>💧 Stay hydrated</li>
          <li>💬 Talk to someone</li>
          <li>🚶 Take short walks</li>
          <li>🧘 Practice mindfulness</li>
        </ul>

        <button className="back-btn" onClick={() => navigate("/wellness")}>
          ← Back
        </button>
      </div>
    </div>
  );
}