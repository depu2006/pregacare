import { useNavigate } from "react-router-dom";
import "./WellnessPages.css";

export default function Music() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="box">
        <h1>Relaxing Music</h1>
        <br></br>

        <p className="desc">
          Listening to calm music improves sleep and reduces stress levels.
        </p>

        <audio controls>
          <source src="/audio/calm.mp3" />
        </audio>

        <button className="back-btn" onClick={() => navigate("/wellness")}>
          ← Back
        </button>
      </div>
    </div>
  );
}