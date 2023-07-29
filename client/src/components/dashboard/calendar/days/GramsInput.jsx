import React, { useState } from "react";
import "./modal.css";
import CustomInput from "./CustomInput";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dateConverter } from "../../../../services/date";
import { addComsumptionRegistry } from "../../../../api/apiConsumption";
import SweetAlert from "sweetalert2";
function GramsInput({ setShowModal, selectedDate }) {
  const [grames, setGrames] = useState(10);
  const addRegistry = () => {
    addComsumptionRegistry(grames, dateConverter(selectedDate));
    setShowModal(false);
    SweetAlert.fire({
      icon: "success",
      title: "¡Registro añadido!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="grams-modal">
      <FontAwesomeIcon
        icon={faXmark}
        color="#ff3d3d"
        size="3x"
        className="x-icon-modal"
        onClick={() => setShowModal(false)}
      />
      <CustomInput value={grames} setValue={setGrames} step={10} units="gr" />
      <FontAwesomeIcon
        icon={faCircleCheck}
        color="#33d17a"
        size="3x"
        className="check-icon-modal"
        onClick={addRegistry}
      />
    </div>
  );
}

export default GramsInput;
