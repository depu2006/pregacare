import React, { useState } from "react";
import "./SleepTracker.css";

function SleepTracker() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [result, setResult] = useState(null);

  const calculateSleep = () => {
    if (!start || !end) return;

    let startTime = new Date(`2023-01-01T${start}`);
    let endTime = new Date(`2023-01-01T${end}`);

    // handle overnight sleep
    if (endTime < startTime) {
      endTime.setDate(endTime.getDate() + 1);
    }

    let hours = (endTime - startTime) / (1000 * 60 * 60);

    let status = "";
    let benefits = [];
    let issues = [];

    if (hours >= 7) {
      status = "Good Sleep";
      benefits = [
        "Better physical recovery",
        "Improved mood stability",
        "Higher energy levels",
        "Stronger immunity"
      ];
    } else if (hours >= 5) {
      status = "Moderate Sleep";
      benefits = ["Some rest achieved"];
      issues = [
        "Mild fatigue",
        "Reduced focus",
        "Lower productivity"
      ];
    } else {
      status = "Low Sleep";
      issues = [
        "High stress",
        "Weak immunity",
        "Mood swings",
        "Poor concentration"
      ];
    }

    setResult({
      hours: hours.toFixed(2),
      status,
      benefits,
      issues
    });
  };

  return (
    <div className="sleep">
      <div className="sleep-container">

        <h2>Sleep Recovery Tracker</h2>
        <p className="sleep-tag">
          Understand your sleep and improve recovery
        </p>

        <div className="sleep-form">
          <input
            type="time"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />

          <input
            type="time"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />

          <button onClick={calculateSleep}>
            Analyze Sleep
          </button>
        </div>

        {result && (
          <div className="sleep-result">

            <p>You slept <strong>{result.hours}</strong> hours</p>

            <h3 className="sleep-status">{result.status}</h3>

            {/* BENEFITS */}
            {result.benefits.length > 0 && (
              <div className="sleep-card good">
                <h3>Benefits</h3>
                <ul>
                  {result.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* ISSUES */}
            {result.issues.length > 0 && (
              <div className="sleep-card bad">
                <h3>Possible Issues</h3>
                <ul>
                  {result.issues.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}

export default SleepTracker;