import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "react-modal";

import FormConsumption from "./createConsumptionRegistry/FormConsumption";
function ConsupmtionRegistry() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => setIsModalOpen(true);

  const modalStyle = {
    content: {
      //styling in progress
      background: "#f6f",
      borderRadius: 15,
    },
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Añadir registro de consumo
      </Button>
      <Modal isOpen={isModalOpen} style={modalStyle} ariaHideApp={false}>
        <FormConsumption setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
}

export default ConsupmtionRegistry;