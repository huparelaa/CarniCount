import React, { useState } from "react";
import { WEEKDAYS } from "./calendarInfo";
import HeaderCalendar from "./header/HeaderCalendar";
import "./calendar.css";
import WeekDays from "./days/WeekDays";
function Calendar() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  

  return (
    <div>
      <section className="calendar">
        <HeaderCalendar
          setMonth={setMonth}
          setYear={setYear}
          month={month}
          year={year}
        />
        <ul className="weekdays">
          {WEEKDAYS.map((weekday) => (
            <li key={weekday}>{weekday}</li>
          ))}
        </ul>
        <WeekDays today={today} year={year} month={month}/>
      </section>
    </div>
  );
}

export default Calendar;