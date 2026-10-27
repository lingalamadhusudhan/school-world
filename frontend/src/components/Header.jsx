import {
  Bell,
  LogOut
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");
  };

  return (
    <header className="top-header">

      <div>

        <h2>
          Welcome, {user?.name}
        </h2>

        <p>
          {user?.role?.toUpperCase()} ACCOUNT
        </p>

      </div>

      <div className="header-actions">

        <button
          className="icon-button"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          <LogOut size={18} />

          Logout
        </button>

      </div>

    </header>
  );
}