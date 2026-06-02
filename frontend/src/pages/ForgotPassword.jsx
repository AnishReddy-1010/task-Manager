import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    console.log("Reset Link Sent To:", email);

    alert("Password reset link sent successfully!");
  };

  return (
    <div className="container">

      {/* Left Side */}

      <div className="left-panel">

        <div className="logo">🔑</div>

        <h1>
          Forgot <span>Password</span>
        </h1>

        <p className="subtitle">
          Don't worry. We'll help you regain access to your account.
        </p>

        <div className="feature">
          <span>📧</span>

          <div>
            <h3>Email Verification</h3>
            <p>Receive a secure password reset link.</p>
          </div>
        </div>

        <div className="feature">
          <span>🔒</span>

          <div>
            <h3>Secure Process</h3>
            <p>Your account security remains protected.</p>
          </div>
        </div>

        <div className="feature">
          <span>⚡</span>

          <div>
            <h3>Quick Recovery</h3>
            <p>Get back to managing tasks in minutes.</p>
          </div>
        </div>

      </div>

      {/* Right Side */}

      <div className="right-panel">

        <div className="login-card">

          <div className="lock-icon">
            📩
          </div>

          <h2>Reset Password</h2>

          <p className="login-text">
            Enter your email to receive a password reset link
          </p>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="login-btn"
            onClick={handleReset}
            style={{ marginTop: "20px" }}
          >
            Send Reset Link →
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <p className="register">
            Remember your password?{" "}

            <Link to="/">
              Back to Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;