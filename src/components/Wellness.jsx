import { useNavigate } from "react-router-dom";
import "./Wellness.css";

export default function Wellness() {
  const navigate = useNavigate();

  return (
    <div className="wellness">

      <h1>Wellness Support</h1>

      <div className="cards">

        <div className="card" onClick={() => navigate("/journal")}>
          <h3>Journaling</h3>
          <p>Write your thoughts</p>
        </div>

        <div className="card" onClick={() => navigate("/breathing")}>
          <h3>Breathing Exercise</h3>
          <p>Relax your mind</p>
        </div>

        <div className="card" onClick={() => navigate("/music")}>
          <h3>Relaxing Music</h3>
          <p>Calm your mind</p>
        </div>

        <div className="card" onClick={() => navigate("/quotes")}>
          <h3>Affirmations</h3>
          <p>Stay positive</p>
        </div>

        <div className="card" onClick={() => navigate("/tips")}>
          <h3>Support Tips</h3>
          <p>Daily guidance</p>
        </div>

      </div>
    </div>
  );
}