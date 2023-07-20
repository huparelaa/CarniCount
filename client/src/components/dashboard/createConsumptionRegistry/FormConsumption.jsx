import React, { useState } from "react";
import GramsInput from "./GramsInput";
import DateInput from "./DateInput";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { addComsumptionRegistry } from "../../../api/apiConsumption";
import { getMinimumAndMaximumDates } from "../../../services/date";
import Swal from "sweetalert2";

const verifyData = (grames) => {
  if (grames <= 0) {
    Swal.fire({
      icon: "error",
      title: "¿A dieta?",
      text: "Debes ingresar una cantidad mayor a 0 gramos",
      timer: 3000,
    });
    return false;
  }
  return true;
};

function FormConsumption({ setIsModalOpen }) {
  const { maxDate } = getMinimumAndMaximumDates();
  const [grames, setGrames] = useState(10);
  const [date, setDate] = useState(maxDate);
  const handleAddConsumption = () => {
    if (verifyData(grames)) {
      addComsumptionRegistry(grames, date);
      setIsModalOpen(false);
    }
  };
  return (
    <>
      <button onClick={() => setIsModalOpen(false)} style={{ float: "right" }}>
        <CloseIcon style={{ color: "red" }} />
      </button>
      <GramsInput grames={grames} setGrames={setGrames} />
      <DateInput date={date} setDate={setDate} />
      <button onClick={handleAddConsumption}>
        <SendIcon style={{ color: "green" }} />
      </button>
    </>
  );
}

export default FormConsumption;
