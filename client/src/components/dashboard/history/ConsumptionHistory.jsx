import React, { useState, useEffect } from "react";
import { consumptionHistory } from "../../../api/apiConsumption";

function ConsumptionHistory() {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setIsLoading(true);
        const response = await consumptionHistory();
        setHistory(response.data.result);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching consumption history:", error);
      }
    };

    fetchHistory();
  }, []);
  if (isLoading) {
    return <p>Cargando tu historial de consumo</p>;
  }
  return (
    <div>
      <h1>Historial de consumo</h1>
      {history.length > 0 ? (
        <ul>
          {history.map((registry) => (
            <li key={registry.consumption_id}>
              <div>
                <p>{registry.date.split("T")[0]}</p>
                <p>{registry.weight} kg</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aquí comienza tu historial de consumo.</p>
      )}
    </div>
  );
}

export default ConsumptionHistory;
