import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");        // ✅ NEW
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
  const url = isSignup
    ? "http://127.0.0.1:5000/api/signup"
    : "http://127.0.0.1:5000/api/login";

  const body = isSignup
    ? { name, username, email, password }
    : { username, password };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    console.log(data);  // 🔥 DEBUG

    if (!isSignup && data.message === "Login successful") {
      localStorage.setItem("name", data.name);
window.location.href = "/";   // 🔥 force reload
    }

  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-box">

          <h1>
            {isSignup ? "CREATE ACCOUNT" : "LOGIN TO YOUR ACCOUNT"}
          </h1>

          {/* ✅ NAME ONLY FOR SIGNUP */}
          {isSignup && (
            <>
              <label>Name :</label>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </>
          )}

          <label>Username :</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />

          {isSignup && (
            <>
              <label>Email :</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </>
          )}

          <label>Password :</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />

          <p className="signup-text">
            {isSignup ? "Already have an account?" : "Don’t have an account?"}
            <b onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? " Login" : " Sign Up"}
            </b>
          </p>

          <div className="btns">
            <button onClick={() => setIsSignup(true)}>
              SIGN UP
            </button>

            <button onClick={handleSubmit}>
              {isSignup ? "REGISTER" : "LOGIN"}
            </button>
          </div>
          {message && (
  <div className={`msg ${message.includes("success") ? "success" : "error"}`}>
    {message}
  </div>
)}

        </div>
      </div>
    </div>
  );
}

export default Login;