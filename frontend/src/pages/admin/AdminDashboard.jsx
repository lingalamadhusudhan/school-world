import {
  BookOpen,
  ClipboardCheck,
  School,
  Users
} from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/StatCard";

export default function AdminDashboard() {

  return (
    <DashboardLayout>

      <div className="page-heading">

        <div>
          <h1>Admin Dashboard</h1>
          <p>
            Overview of School-Connect
          </p>
        </div>

      </div>

      <div className="stats-grid">

        <StatCard
          title="Students"
          value="1,250"
          subtitle="Active students"
          icon={Users}
        />

        <StatCard
          title="Teachers"
          value="78"
          subtitle="Teaching staff"
          icon={School}
        />

        <StatCard
          title="Attendance"
          value="94%"
          subtitle="Today's attendance"
          icon={ClipboardCheck}
        />

        <StatCard
          title="Classes"
          value="42"
          subtitle="Active classes"
          icon={BookOpen}
        />

      </div>

      <div className="content-grid">

        <section className="panel">

          <h2>School Overview</h2>

          <div className="overview-list">

            <div>
              <span>Students Present</span>
              <strong>1,175</strong>
            </div>

            <div>
              <span>Students Absent</span>
              <strong>75</strong>
            </div>

            <div>
              <span>Teachers Present</span>
              <strong>74</strong>
            </div>

            <div>
              <span>Pending Homework</span>
              <strong>12</strong>
            </div>

          </div>

        </section>

        <section className="panel">

          <h2>Recent Notices</h2>

          <div className="notice">
            <strong>Parent Teacher Meeting</strong>
            <p>Saturday — 10:00 AM</p>
          </div>

          <div className="notice">
            <strong>Annual Sports Day</strong>
            <p>Registration is now open.</p>
          </div>

          <div className="notice">
            <strong>Exam Schedule</strong>
            <p>Mid-term timetable published.</p>
          </div>

        </section>

      </div>

    </DashboardLayout>
  );
}