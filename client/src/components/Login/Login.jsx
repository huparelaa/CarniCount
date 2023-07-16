import React from "react";
import { Form, Formik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { doLogIn } from "../../api/apiUser";
import { LOGIN_SUCCESSFUL, LOGIN_FAILURE } from "./loginResponses";
import {useLocalStorage} from '../../hooks/useLocalStorage'
function Login() {
  const navigate = useNavigate();
  const [user_id, setUser_id] = useLocalStorage('user_id',null )
  const handleSubmit = async (values) => {
    try {
      const response = await doLogIn(values);
      if (response.message === LOGIN_SUCCESSFUL) {
        Swal.fire({
          icon: "success",
          title: "Sesión iniciada",
          text: "Bienvenido a Carnicount",
          timer: 2000
        });
        setUser_id(response.user_id)
        navigate("/dashboard");
      }else if(response.message === LOGIN_FAILURE){
        Swal.fire({
          icon: "error",
          title: "Información no válida",
          text: "Verifica la información ingresada",
          timer: 3000
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="flex-container">
            <div className="login-card">
              <TextField
                name="email"
                label="Correo electrónico"
                sx={{ margin: "10px 0" }}
                onChange={handleChange}
              />
              <TextField
              type="password"
                name="password"
                label="Contraseña"
                sx={{ margin: "10px 0" }}
                onChange={handleChange}
              />
              <a href="/signup" style={{textAlign:"center"}}>¿No tienes una cuenta? <br />Regístrate</a>
              <Button
                margin="normal"
                type="submit"
                variant="contained"
                sx={{ marginTop:  2}}
              >
                Iniciar sesión
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Login;
