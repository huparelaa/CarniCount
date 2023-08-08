import React from "react";
import "./asideDashboard.css";
import HistoryIcon from "@mui/icons-material/History";
import CalendarIcon from "@mui/icons-material/EditCalendar";
function AsideDashboard({ setView }) {
  return (
    <aside className="aside-dashboard">
      <ul className="aside-items">
        <li>
          <button
            className="selectable-aside-item"
            onClick={() => setView("Calendar")}
          >
            <CalendarIcon />
            <span className="aside-item-name">Añadir consumo</span>
          </button>
        </li>
        <li>
          <button
            className="selectable-aside-item"
            onClick={() => setView("History")}
          >
            <HistoryIcon />
            <span className="aside-item-name">Historial de consumo</span>
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default AsideDashboard;
