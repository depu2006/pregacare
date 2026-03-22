import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WellnessPages.css";

export default function Journal() {
  const [note, setNote] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const generateResponse = (text) => {
    text = text.toLowerCase();

    if (text.includes("sad") || text.includes("tired")) {
      return "It's okay to feel this way. Take rest and be kind to yourself 💙";
    } 
    else if (text.includes("stress") || text.includes("anxious")) {
      return "Try deep breathing and relax your mind 🌿";
    } 
    else if (text.includes("happy") || text.includes("good")) {
      return "That's great! Keep spreading positivity 😊";
    } 
    else {
      return "Thank you for sharing. Stay strong and take care 🤍";
    }
  };

  const handleSubmit = async () => {
  if (note.trim() === "") return;

  try {
    const res = await fetch("http://127.0.0.1:5000/api/journal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: note,
        date: new Date().toISOString(),
      }),
    });

    const data = await res.json();
    console.log("🔥 Backend response:", data);

    setResponse(generateResponse(note));

  } catch (error) {
    console.error("❌ Error:", error);
  }
};

  return (
    <div className="page">
      <div className="box">

        {/* 🔥 TOP RIGHT BACK BUTTON */}
        <div className="top-bar">
          <button
            className="back-btn"
            onClick={() => navigate("/wellness")}
          >
            ← Back
          </button>
        </div>

        <h1>Journal</h1>
        <br></br>

        <p className="desc">
          Express your thoughts and receive supportive feedback.
        </p>

        <textarea
          placeholder="Write how you feel today..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        {/* SUBMIT */}
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>

        {/* RESPONSE */}
        {response && (
          <div className="response">
            <h3>💬 Response</h3>
            <p>{response}</p>
          </div>
        )}

      </div>
    </div>
  );
}