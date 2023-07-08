import axios from "axios";
const url = "http://localhost:3000"; //this will be a enviroment variable
export const createTaskRequest = async () => await axios.get(`${url}/test`);

export const doSignUp = async (user) => {
  try {
    const response = await axios.post(`${url}/signup`, user);
    return response.data;
  } catch (e) {
    const errors = {}
    errors.email="Este correo ya está en uso pruebe con otro"
    throw errors;
  }
};

export const doLogIn = async (user) => {
  try{
    const response = await axios.post(`${url}/login`,user)
    return response.data
  }catch(error){
    console.error(error)
  }
}