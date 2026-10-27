import {
  Activity,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  FileText,
  GraduationCap,
  HeartPulse,
  Home,
  MessageSquare,
  School,
  Users
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const menu = {

  admin: [
    { label: "Dashboard", icon: Home, path: "/admin" },
    { label: "Students", icon: Users, path: "/admin/students" },
    { label: "Teachers", icon: School, path: "/admin/teachers" },
    { label: "Attendance", icon: ClipboardCheck, path: "/admin/attendance" },
    { label: "Homework", icon: BookOpen, path: "/admin/homework" },
    { label: "Exams", icon: FileText, path: "/admin/exams" },
    { label: "Notices", icon: MessageSquare, path: "/admin/notices" },
    { label: "Calendar", icon: CalendarDays, path: "/admin/calendar" }
  ],

  teacher: [
    { label: "Dashboard", icon: Home, path: "/teacher" },
    { label: "My Classes", icon: School, path: "/teacher/classes" },
    { label: "Students", icon: Users, path: "/teacher/students" },
    { label: "Attendance", icon: ClipboardCheck, path: "/teacher/attendance" },
    { label: "Homework", icon: BookOpen, path: "/teacher/homework" },
    { label: "Messages", icon: MessageSquare, path: "/teacher/messages" },
    { label: "Activities", icon: Activity, path: "/teacher/activities" }
  ],

  parent: [
    { label: "Dashboard", icon: Home, path: "/parent" },
    { label: "Student Profile", icon: Users, path: "/parent/student" },
    { label: "Attendance", icon: ClipboardCheck, path: "/parent/attendance" },
    { label: "Homework", icon: BookOpen, path: "/parent/homework" },
    { label: "Results", icon: FileText, path: "/parent/results" },
    { label: "Messages", icon: MessageSquare, path: "/parent/messages" },
    { label: "Calendar", icon: CalendarDays, path: "/parent/calendar" },
    { label: "Health", icon: HeartPulse, path: "/parent/health" }
  ]

};

export default function Sidebar() {

  const { user } = useAuth();

  const items = menu[user?.role] || [];

  return (
    <aside className="sidebar">

      <div className="brand">
        <GraduationCap size={32} />

        <div>
          <h2>School-Connect</h2>
          <small>School Management</small>
        </div>
      </div>

      <nav>

        {items.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === `/${user.role}`}
              className={({ isActive }) =>
                isActive
                  ? "nav-item active"
                  : "nav-item"
              }
            >

              <Icon size={20} />

              <span>{item.label}</span>

            </NavLink>
          );
        })}

      </nav>

    </aside>
  );
}