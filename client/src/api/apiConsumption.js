import { URL, user_id } from "./apiConfig";
import axios from "axios";
export const addComsumptionRegistry = async (weight, date) => {
  try {
    const response = await axios.post(`${URL}/consumption/add`, {
      user_id,
      weight,
      date,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const consumptionHistory = async () => {
  try {
    const response = await axios.get(`${URL}/consumption/view/${user_id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
