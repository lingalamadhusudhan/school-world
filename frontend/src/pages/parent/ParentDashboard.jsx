import {
  BookOpen,
  ClipboardCheck,
  FileText,
  TrendingUp
} from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/StatCard";

export default function ParentDashboard() {

  return (
    <DashboardLayout>

      <div className="page-heading">

        <div>
          <h1>Parent Dashboard</h1>
          <p>
            Student progress and school information.
          </p>
        </div>

      </div>

      <section className="student-summary">

        <div className="student-avatar">
          S
        </div>

        <div>
          <h2>Student Name</h2>

          <p>
            Class 8-A • Roll No. 12
          </p>

          <span className="status">
            Active Student
          </span>
        </div>

      </section>

      <div className="stats-grid">

        <StatCard
          title="Attendance"
          value="96%"
          subtitle="This month"
          icon={ClipboardCheck}
        />

        <StatCard
          title="Homework"
          value="4"
          subtitle="Pending"
          icon={BookOpen}
        />

        <StatCard
          title="Average Result"
          value="88%"
          subtitle="Current term"
          icon={FileText}
        />

        <StatCard
          title="Performance"
          value="Excellent"
          subtitle="Monthly progress"
          icon={TrendingUp}
        />

      </div>

      <div className="content-grid">

        <section className="panel">

          <h2>Recent Results</h2>

          <div className="result-row">
            <span>Mathematics</span>
            <strong>92%</strong>
          </div>

          <div className="result-row">
            <span>Science</span>
            <strong>89%</strong>
          </div>

          <div className="result-row">
            <span>English</span>
            <strong>85%</strong>
          </div>

        </section>

        <section className="panel">

          <h2>Upcoming Events</h2>

          <div className="notice">

            <strong>
              Parent Teacher Meeting
            </strong>

            <p>
              Saturday — 10:00 AM
            </p>

          </div>

          <div className="notice">

            <strong>
              Sports Day
            </strong>

            <p>
              November 15
            </p>

          </div>

        </section>

      </div>

    </DashboardLayout>
  );
}