import axios from "axios";
import {URL} from './url' //this will be a enviroment variable

export const createTaskRequest = async () => await axios.get(`${URL}/test`);

export const doSignUp = async (user) => {
  try {
    const response = await axios.post(`${URL}/signup`, user);
    return response.data;
  } catch (e) {
    const errors = {}
    errors.email="Este correo ya está en uso pruebe con otro"
    throw errors;
  }
};

export const doLogIn = async (user) => {
  try{
    const response = await axios.post(`${URL}/login`,user)
    return response.data
  }catch(error){
    console.error(error)
  }
}

export const getUserInfo = async () => {
  try {
    if(window.localStorage.getItem('user_id')){//exists a previous log in
      const user_id = window.localStorage.getItem('user_id')
      const response = await axios.get(`${URL}/getUserInfo/${user_id}`)
      return response.data
    }
    return null // there's no information in localStorage about previous log in
  } catch (error) {
    console.error(error)
    return null //another possible error like localStorage set to a no available value in database
  }
}