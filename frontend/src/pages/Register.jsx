import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log({
      name,
      email,
      password,
    });

    alert("Registration Successful!");
  };

  return (
    <div className="container">

      {/* Left Side */}

      <div className="left-panel">

        <div className="logo">📋</div>

        <h1>
          Task <span>Manager</span>
        </h1>

        <p className="subtitle">
          Create your account and start managing tasks efficiently.
        </p>

        <div className="feature">
          <span>🚀</span>

          <div>
            <h3>Stay Organized</h3>

            <p>
              Manage all your tasks in one place.
            </p>
          </div>
        </div>

        <div className="feature">
          <span>📅</span>

          <div>
            <h3>Track Deadlines</h3>

            <p>
              Never miss important tasks and schedules.
            </p>
          </div>
        </div>

        <div className="feature">
          <span>🏆</span>

          <div>
            <h3>Boost Productivity</h3>

            <p>
              Complete more work with better planning.
            </p>
          </div>
        </div>

      </div>

      {/* Right Side */}

      <div className="right-panel">

        <div className="login-card">

          <div className="lock-icon">
            👤
          </div>

          <h2>Create Account</h2>

          <p className="login-text">
            Register to start using Task Manager
          </p>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />

          <button
            className="login-btn"
            onClick={handleRegister}
            style={{ marginTop: "20px" }}
          >
            Register →
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <p className="register">
            Already have an account?{" "}

            <Link to="/">
              Login Here
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;