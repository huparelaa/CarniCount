import { URL } from "./url";
import axios from "axios";
export const addComsumptionRegistry = async (weight, date) => {
  try {
    const user_id = window.localStorage.getItem("user_id");
    const response = await axios.post(`${URL}/consumption/add`, {
      user_id,
      weight,
      date,
    });
    console.log(response)
    return response
  } catch (error) {
    console.error(error);
  }
};
