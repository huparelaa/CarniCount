import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./customInput.css";
function customInput({ value, setValue, step, units }) {
  return (
    <>
      <div className="custom-input">
        <FontAwesomeIcon
          icon={faArrowUp}
          size="3x"
          className="arrow-input"
          onClick={() => setValue(value + step)}
        />
        <div className="input">
          <input
            className="number-input"
            type="number"
            disabled={true}
            onKeyDown={(e) => e.preventDefault()}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <span className="units">{units}</span>
        </div>

        <FontAwesomeIcon
          icon={faArrowDown}
          size="3x"
          className="arrow-input"
          onClick={() => {
            if (value - step < 10) {
              setValue(10);
              return;
            }
            setValue(value - step);
          }}
        />
      </div>
    </>
  );
}

export default customInput;
