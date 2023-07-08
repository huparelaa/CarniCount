import React, { useState } from "react";
import { Form, Formik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { doSignUp } from "../../api/api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "./signup.css";
import { useErrorManage } from "../../hooks/useErrorManage";
function Signup() {
  const [isLoading, setIsLoading] = useState(null);
  const [errorList, setErrorList] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      useErrorManage(values);
      await doSignUp(values);
      Swal.fire({
        icon: "success",
        title: "Registrado",
        text: "Tu registro ha sido exitoso",
      });
      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      setErrorList(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="flex-container">
            <div className="signup-card">
              <TextField
                sx={{ marginTop: 5 }}
                error={errorList.fullName != null}
                helperText={errorList.fullName}
                variant="outlined"
                label="Nombre completo"
                name="fullName"
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                error={errorList.email != null}
                helperText={errorList.email}
                variant="outlined"
                label="Correo electrónico"
                name="email"
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                error={errorList.password != null}
                helperText={errorList.password}
                type="password"
                variant="outlined"
                label="Contraseña"
                name="password"
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                error={errorList.passwordConfirmation != null}
                helperText={errorList.passwordConfirmation}
                type="password"
                variant="outlined"
                label="Confirma tu contraseña"
                name="passwordConfirmation"
                onChange={handleChange}
                margin="normal"
              />
              <a href="/login" style={{ margin: 10, textAlign: "center" }}>
                ¿Ya tienes una cuenta? <br /> Inicia sesión
              </a>
              <Button
                type="submit"
                variant="contained"
                disabled={isLoading}
                sx={{ marginBottom: "15px", marginTop: "5px" }}
              >
                Registrarse
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
