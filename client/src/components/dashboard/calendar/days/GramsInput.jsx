import React, { useState } from "react";
import "./modal.css";
import CustomInput from "./CustomInput";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GramsInput({ setShowModal }) {
  const [grames, setGrames] = useState(10);

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
      />
    </div>
  );
}

export default GramsInput;
