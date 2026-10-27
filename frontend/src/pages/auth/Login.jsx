import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    const result = login(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    if (result.user.role === "admin") {
      navigate("/admin");
    }

    if (result.user.role === "teacher") {
      navigate("/teacher");
    }

    if (result.user.role === "parent") {
      navigate("/parent");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          <GraduationCap size={42} />

          <div>
            <h1>School-Connect</h1>
            <p>School Management Platform</p>
          </div>
        </div>

        <h2>Welcome Back</h2>

        <p className="muted">
          Sign in to access your dashboard.
        </p>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
          />

          <button type="submit">
            Sign In
          </button>

        </form>

        <div className="demo-login">

          <strong>Development accounts</strong>

          <p>
            Admin: admin@schoolconnect.com
          </p>

          <p>
            Teacher: teacher@schoolconnect.com
          </p>

          <p>
            Parent: parent@schoolconnect.com
          </p>

        </div>

      </div>

    </div>
  );
}