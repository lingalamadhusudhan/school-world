import {
  BookOpen,
  ClipboardCheck,
  MessageSquare,
  Users
} from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/StatCard";

export default function TeacherDashboard() {

  return (
    <DashboardLayout>

      <div className="page-heading">

        <div>
          <h1>Teacher Dashboard</h1>
          <p>
            Manage your classes and students.
          </p>
        </div>

      </div>

      <div className="stats-grid">

        <StatCard
          title="My Students"
          value="42"
          subtitle="Class 8-A"
          icon={Users}
        />

        <StatCard
          title="Attendance"
          value="95%"
          subtitle="Today"
          icon={ClipboardCheck}
        />

        <StatCard
          title="Homework"
          value="5"
          subtitle="Active assignments"
          icon={BookOpen}
        />

        <StatCard
          title="Messages"
          value="8"
          subtitle="Unread"
          icon={MessageSquare}
        />

      </div>

      <div className="content-grid">

        <section className="panel">

          <h2>Today's Classes</h2>

          <div className="class-row">
            <strong>Mathematics</strong>
            <span>09:00 AM</span>
          </div>

          <div className="class-row">
            <strong>Science</strong>
            <span>11:00 AM</span>
          </div>

          <div className="class-row">
            <strong>Class Activity</strong>
            <span>02:00 PM</span>
          </div>

        </section>

        <section className="panel">

          <h2>Tasks</h2>

          <div className="notice">
            Mark today's attendance
          </div>

          <div className="notice">
            Upload Mathematics homework
          </div>

          <div className="notice">
            Review student performance
          </div>

        </section>

      </div>

    </DashboardLayout>
  );
}