import React, { useState } from "react";
import "./weekDays.css";
import { listOfAvailableDates } from "../../../../services/date";
import Modal from "react-modal";
import GramsInput from "./GramsInput";

function WeekDays({ today, year, month }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      backgroundColor: "rgba(0,0,0,0.5)",
      border: "none",
      maxWidth: "250px",
      height: "214px",
      margin: "auto",
      overflow: "hidden",
    },
  };
  const [showModal, setShowModal] = useState(false);

  const numericToday = today.getDate();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const availableDatesOnCalendar = listOfAvailableDates();

  return (
    <>
      <ul className="days">
        {Array(firstDayOfMonth.getDay())
          .fill(null)
          .map((_, index) => (
            <li key={`empty-${index}`} className="empty">
              {""}
            </li>
          ))}
        {Array(lastDayOfMonth.getDate())
          .fill(null)
          .map((_, index) => {
            const day = index + 1;
            const isToday =
              numericToday === day &&
              year === today.getFullYear() &&
              month === today.getMonth();
            const isAvailable = availableDatesOnCalendar.some(
              (date) => date.day == day && date.month == month + 1 && date.year == year
            );
            return (
              <li
                key={day}
                className={`day ${isToday ? "today" : ""} ${
                  isAvailable ? "enabled" : "disabled"
                }`}
                onClick={() => {
                  if (isAvailable) {
                    setSelectedDate(new Date(year, month, day));
                    setShowModal(true);
                  }
                }}
              >
                {day}
              </li>
            );
          })}
      </ul>
      <Modal isOpen={showModal} ariaHideApp={false} style={customStyles}>
        <GramsInput setShowModal={setShowModal} selectedDate={selectedDate} />
      </Modal>
    </>
  );
}

export default WeekDays;
