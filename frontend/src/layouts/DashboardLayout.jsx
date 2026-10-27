import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout({
  children
}) {

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="main-area">

        <Header />

        <main className="dashboard-content">
          {children}
        </main>

      </div>

    </div>
  );
}