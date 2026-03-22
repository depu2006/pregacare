import { useState } from "react";
import "./MentalWellness.css";

export default function MentalWellness() {
  const [section, setSection] = useState("exercise");
  const [selectedYoga, setSelectedYoga] = useState("");
  const [selectedStep, setSelectedStep] = useState(null);
   const sleepCare = [
  {
    title: "Jogging",
    text: "Light jogging improves blood circulation and boosts recovery",
    img: "/images/jogging.png"
  },
  {
    title: "Walking",
    text: "Daily walking helps reduce stress and improves sleep quality",
    img: "/images/walking.png"
  },
  {
    title: "Listening to Music",
    text: "Calm music helps relax the mind and promotes better sleep",
    img: "/images/music.png"
  },
  {
    title: "Sleeping Position",
    text: "Sleep on your side with proper pillow support",
    img: "/images/sleep.png"
  },
  {
    title: "Sitting Posture",
    text: "Maintain straight posture while sitting to avoid back pain",
    img: "/images/chair.png"
  },
  {
    title: "Carrying Baby",
    text: "Hold baby close to your body with proper support",
    img: "/images/carry.png"
  },
  {
    title: "Feeding Baby",
    text: "Sit comfortably with back support while feeding",
    img: "/images/feed.png"
  }
];
  const meditationSteps = [
  {
    step: "Step 1",
    text: "Sit comfortably in a cross-legged position with a straight spine",
    img: "/images/med1.png"
  },
  {
    step: "Step 2",
    text: "Relax your shoulders and place hands on knees in a calm position",
    img: "/images/med2.png"
  },
  {
    step: "Step 3",
    text: "Close your eyes and focus on your breathing",
    img: "/images/med3.png"
  },
  {
    step: "Step 4",
    text: "Maintain slow, deep breaths and stay relaxed",
    img: "/images/med4.png"
  }
];

const meditationBenefits = [
  "Reduces stress and anxiety",
  "Improves concentration",
  "Enhances emotional well-being",
  "Promotes better sleep",
  "Increases mindfulness and calmness"
];
   const yogaData = {
  suryanamaskar: {
    steps: [
      { step: "Step 1", text: "Pranamasana (Prayer Pose)", img: "/images/step1.png" },
      { step: "Step 2", text: "Hastauttanasana (Raised Arms Pose)", img: "/images/step2.png" },
      { step: "Step 3", text: "Hastapadasana (Forward Bend)", img: "/images/step3.png" },
      { step: "Step 4", text: "Ashwa Sanchalanasana (Equestrian Pose)", img: "/images/step4.png" },
      { step: "Step 5", text: "Dandasana (Plank Pose)", img: "/images/step5.png" },
      { step: "Step 6", text: "Ashtanga Namaskara", img: "/images/step6.png" },
      { step: "Step 7", text: "Bhujangasana (Cobra Pose)", img: "/images/step7.png" },
      { step: "Step 8", text: "Adho Mukha Svanasana (Downward Dog)", img: "/images/step8.png" },
      { step: "Step 9", text: "Ashwa Sanchalanasana", img: "/images/step9.png" },
      { step: "Step 10", text: "Hastapadasana", img: "/images/step10.png" },
      { step: "Step 11", text: "Hastauttanasana", img: "/images/step11.png" },
      { step: "Step 12", text: "Tadasana (Standing Pose)", img: "/images/step12.png" }
    ],

    benefits: [
      "Improves blood circulation",
      "Enhances flexibility of body",
      "Strengthens muscles and joints",
      "Boosts metabolism and digestion",
      "Reduces stress and anxiety",
      "Improves posture and balance",
      "Energizes the body and mind"
    ]
  },


    balasana: {
      steps: [
    {
      step: "Step 1",
      text: "Lie on back, bend knees, feet hip-width apart",
      img: "/images/bal1.png"
    },
    {
      step: "Step 2",
      text: "Place palms by head, fingers pointing toward shoulders",
      img: "/images/bal2.png"
    },
    {
      step: "Step 3",
      text: "Press into palms and feet, lift hips upward",
      img: "/images/bal3.png"
    },
    {
      step: "Step 4",
      text: "Straighten arms and legs, hold the pose",
      img: "/images/bal4.png"
    }
  ],
      benefits: [
        "Relieves stress",
        "Calms the mind",
        "Stretches back muscles"
      ]
    },

    chakrasana: {
  steps: [
    {
      step: "Step 1",
      text: "Lie on back, bend knees, feet hip-width apart",
      img: "/images/chakra1.png"
    },
    {
      step: "Step 2",
      text: "Place palms by head, fingers pointing toward shoulders",
      img: "/images/chakra2.png"
    },
    {
      step: "Step 3",
      text: "Press into palms and feet, lift hips upward",
      img: "/images/chakra3.png"
    },
    {
      step: "Step 4",
      text: "Straighten arms and legs, hold the pose",
      img: "/images/chakra4.png"
    }
  ],

  benefits: [
    "Strengthens spine and back muscles",
    "Improves flexibility",
    "Opens chest and lungs",
    "Boosts energy levels",
    "Reduces stress and fatigue"
  ]
}
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Wellness</h2>
        <button onClick={() => setSection("exercise")}>Exercise</button>
        <button onClick={() => setSection("meditation")}>Meditation</button>
        <button onClick={() => setSection("sleep")}>Self Care</button>
      </div>

      {/* Main */}
      <div className="main">
        {section === "meditation" && (
  <>
    <h1>Meditation</h1>

    {/* Cards */}
    <div className="cards">
      {meditationSteps.map((item, index) => (
        <div
          className="card"
          key={index}
          onClick={() => setSelectedStep(item)}
        >
          <img src={item.img} alt="" />
          <h3>{item.step}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>

    {/* Benefits */}
    <div className="benefits">
      <h2>Benefits</h2>
      <ul>
        {meditationBenefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  </>
)}
        {section === "sleep" && (
  <>
    <h1>Sleep & Recovery Care</h1>

    <div className="cards">
      {sleepCare.map((item, index) => (
        <div
          className="card"
          key={index}
          onClick={() => setSelectedStep(item)}
        >
          <img src={item.img} alt="" />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </>
)}
        {section === "exercise" && (
          <>
            <h1>Exercise</h1>
            <br></br>

            <select onChange={(e) => setSelectedYoga(e.target.value)}>
              <option value="">Select Asana</option>
              {Object.keys(yogaData).map((asana) => (
                <option key={asana} value={asana}>
                  {asana}
                </option>
              ))}
            </select>

            {/* Cards */}
            <div className="cards">
              {yogaData[selectedYoga]?.steps.map((item, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => setSelectedStep(item)}
                >
                  <img
                    src={item.img || "https://via.placeholder.com/200"}
                    alt=""
                  />
                  <h3>{item.step}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            {selectedYoga && (
              <div className="benefits">
                <h2>Benefits</h2>
                <ul>
                  {yogaData[selectedYoga].benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {/* Detail View */}
        {selectedStep && (
          <div className="detail">
            <h2>{selectedStep.step}</h2>
            <img
              src={selectedStep.img || "https://via.placeholder.com/300"}
              alt=""
            />
            <p>{selectedStep.text}</p>
            <button onClick={() => setSelectedStep(null)}>Back</button>
          </div>
        )}
      </div>
    </div>
  );
}