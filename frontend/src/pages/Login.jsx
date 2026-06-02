import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleLogin = () => {
  alert("Login Successful!");

  navigate("/dashboard");
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
          Organize your tasks. Boost your productivity.
        </p>

        <div className="feature">
          <span>✅</span>

          <div>
            <h3>Create and Manage Tasks</h3>

            <p>
              Add, update and delete tasks easily.
            </p>
          </div>
        </div>

        <div className="feature">
          <span>⏰</span>

          <div>
            <h3>Track Progress</h3>

            <p>
              Stay on top of your tasks and deadlines.
            </p>
          </div>
        </div>

        <div className="feature">
          <span>📈</span>

          <div>
            <h3>Stay Productive</h3>

            <p>
              Plan your day and achieve more.
            </p>
          </div>
        </div>

      </div>

      {/* Right Side */}

      <div className="right-panel">

        <div className="login-card">

          <div className="lock-icon">
            🔒
          </div>

          <h2>Welcome Back</h2>

          <p className="login-text">
            Login to continue to your account
          </p>

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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="options">

            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <Link to="/forgot">
              Forgot Password?
            </Link>

          </div>

          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Login →
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <p className="register">
            Don't have an account?{" "}

            <Link to="/register">
              Register Now
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;