import React, { useState } from "react";
import "./weekDays.css";
import { getMinimumAndMaximumDates } from "../../../../services/date";
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
  const { minDate, maxDate } = getMinimumAndMaximumDates();

  const dateInfo = {
    minDateDay: minDate.slice(8, 10),
    minDateMonth: minDate.slice(5, 7),
    minDateYear: minDate.slice(0, 4),
    maxDateDay: maxDate.slice(8, 10),
    maxDateMonth: maxDate.slice(5, 7),
    maxDateYear: maxDate.slice(0, 4),
  };
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
            const isBeforeMinDate = //calculate if the date is before the min date
              dateInfo.minDateYear > year ||
              dateInfo.minDateMonth > month + 1 ||
              dateInfo.minDateDay > day;
            const isAfterMaxDate = //calculate if the date is after the max date
              dateInfo.maxDateYear < year ||
              dateInfo.maxDateMonth < month + 1 ||
              dateInfo.maxDateDay < day;
            return (
              <li
                key={day}
                className={`day ${isToday ? "today" : ""} ${
                  isBeforeMinDate || isAfterMaxDate ? "disabled" : "enabled"
                }`}
                onClick={() => {
                  if (!isBeforeMinDate && !isAfterMaxDate) {
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
        <GramsInput setShowModal={setShowModal} selectedDate={selectedDate}/>
      </Modal>
    </>
  );
}

export default WeekDays;
