import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";

import Login from "./pages/auth/Login";

import AdminDashboard
  from "./pages/admin/AdminDashboard";

import TeacherDashboard
  from "./pages/teacher/TeacherDashboard";

import ParentDashboard
  from "./pages/parent/ParentDashboard";

import ProtectedRoute
  from "./components/ProtectedRoute";

import { useAuth }
  from "./context/AuthContext";

function HomeRedirect() {

  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Navigate
      to={`/${user.role}`}
      replace
    />
  );
}

export default function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<HomeRedirect />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
            >
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/teacher"
          element={
            <ProtectedRoute
              allowedRoles={["teacher"]}
            >
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/parent"
          element={
            <ProtectedRoute
              allowedRoles={["parent"]}
            >
              <ParentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}