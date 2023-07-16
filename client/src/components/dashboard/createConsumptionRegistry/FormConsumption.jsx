import React, { useState } from "react";
import GramsInput from "./GramsInput";
import DateInput from "./DateInput";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { addComsumptionRegistry } from "../../../api/apiConsumption";
import { getMinimumAndMaximumDates } from "../../../services/date";

function FormConsumption({setIsModalOpen}) {
  const { maxDate } = getMinimumAndMaximumDates();
  const [grames, setGrames] = useState(10);
  const [date, setDate] = useState(maxDate);
  return (
    <>
      <button onClick={() => setIsModalOpen(false)} style={{ float: "right" }}>
        <CloseIcon style={{ color: "red" }} />
      </button>
      <GramsInput grames={grames} setGrames={setGrames} />
      <DateInput date={date} setDate={setDate} />
      <button onClick={() => addComsumptionRegistry(grames, date)}>
        <SendIcon style={{ color: "green" }} />
      </button>
    </>
  );
}

export default FormConsumption;
