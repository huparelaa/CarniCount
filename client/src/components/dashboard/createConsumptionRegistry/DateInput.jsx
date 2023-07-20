import React, { useState } from "react";
import { getMinimumAndMaximumDates, validateDate } from "../../../services/date";

function DateInput({setDate,date}) {
  const { minDate, maxDate } = getMinimumAndMaximumDates();
  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    const isValidDate = validateDate(inputDate);
    if (isValidDate) {
      setDate(inputDate);
    } else {
      setDate("");
    }
  };

  return (
    <div>
      <label htmlFor="dateInput">Indica la fecha del consumo</label>
      <input
        type="date"
        id="dateInput"
        value={date}
        min={minDate}
        max={maxDate}
        onChange={handleDateChange}
        onKeyDown={(e) => e.preventDefault()}
      />
    </div>
  );
}

export default DateInput;
