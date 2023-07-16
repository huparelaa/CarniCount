import React, { useState } from "react";

function GramsInput({ setGrames }) {
  const [gramsConsumed, setGramsConsumed] = useState(10);

  const handleInputChange = (event) => {
    const newValue = Number(event.target.value);
    setGramsConsumed(newValue);
    setGrames(newValue);
  };

  return (
    <div>
      <label htmlFor="gramsInput">
        Aproximadamente ¿Cuántos gramos consumiste?
      </label>
      <input
        type="number"
        id="gramsInput"
        min={10}
        max={2500}
        step={10}
        value={gramsConsumed}
        onChange={handleInputChange}
      />
    </div>
  );
}
export default GramsInput;
