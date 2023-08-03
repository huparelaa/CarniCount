import React from "react";
import "./asideDashboard.css";
function AsideDashboard({ setView }) {
  return (
    <aside className="aside-dashboard">
      <ul className="aside-items">
        <li
          className="selectable-aside-item"
          onClick={() => setView("Calendar")}
        >
          Añadir consumo
        </li>
        <li
          className="selectable-aside-item"
          onClick={() => setView("History")}
        >
          Historial de consumo
        </li>
      </ul>
    </aside>
  );
}

export default AsideDashboard;
