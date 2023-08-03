import AsideDashboard from "./aside/AsideDashboard";
import ConsumptionHistory from "./history/ConsumptionHistory";
import HeaderDashboard from "./header/HeaderDashboard";
import Calendar from "./calendar/Calendar";
import { useState } from "react";
import "./dashboard.css";
function Dashboard() {
  const [view, setView] = useState("Calendar");
  return (
    <>
      <HeaderDashboard />
      <main className="dashboard-main">
        <AsideDashboard setView={setView} />
        <article className="view-content">
          {view === "Calendar" ? <Calendar /> : ""}
          {view === "History" ? <ConsumptionHistory /> : ""}
        </article>
      </main>
    </>
  );
}

export default Dashboard;
