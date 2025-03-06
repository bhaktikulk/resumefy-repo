import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import AuthService from "../../services/authService"; // Updated import

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  // Check for OAuth redirect token in URL on mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      // Store token and redirect to dashboard
      localStorage.setItem("authToken", token);
      navigate("/dashboard");
    }
  }, [location, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError("");
    setPasswordError("");
    setGeneralError("");

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (!email) {
      setEmailError("Please enter your email address.");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Please enter your password.");
      isValid = false;
    }

    if (!isValid) return;

    try {
      // Use AuthService for login
      await AuthService.login(email, password);

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        navigate("/dashboard"); // Redirect after alert
      });
    } catch (error) {
      // Set error message
      setGeneralError(
        typeof error === "string" ? error : "An error occurred during login"
      );

      // Show error alert
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text:
          typeof error === "string"
            ? error
            : "An error occurred. Please try again.",
      });
    }
  };

  // OAuth login handlers
  const handleGoogleSignIn = () => {
    window.location.href = AuthService.getGoogleLoginUrl();
  };

  const handleFacebookSignIn = () => {
    window.location.href = AuthService.getFacebookLoginUrl();
  };

  const handleAppleSignIn = () => {
    window.location.href = AuthService.getAppleLoginUrl();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error-message">{emailError}</p>}

          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}

          {generalError && <p className="error-message">{generalError}</p>}

          <button type="submit" className="login-submit-btn">
            Sign In
          </button>
        </form>

        <div className="disclaimer-text">
          <p className="login-divider">
            By clicking on Sign In you also agree to our
            <a
              href="https://www.zety.com/terms-of-service"
              target="_blank"
              className="nav-url"
              rel="noreferrer"
            >
              {" "}
              Terms of Use
            </a>{" "}
            and
            <a
              href="https://www.zety.com/privacy-policy"
              target="_blank"
              className="nav-url"
              rel="noreferrer"
            >
              {" "}
              Privacy Policy
            </a>
          </p>
        </div>
        <p className="login-divider">or</p>

        <div className="social-login">
          <button className="social-btn apple-btn" onClick={handleAppleSignIn}>
            <i className="fab fa-apple"></i> Sign in with Apple
          </button>
          <button
            className="social-btn google-btn"
            onClick={handleGoogleSignIn}
          >
            <i className="fab fa-google"></i> Sign in with Google
          </button>
          <button
            className="social-btn facebook-btn"
            onClick={handleFacebookSignIn}
          >
            <i className="fab fa-facebook-f"></i> Sign in with Facebook
          </button>
        </div>
        <p className="forgot-password">Forgot your password?</p>
        <p className="login-redirect">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
