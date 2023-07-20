import React, { useState } from "react";
import { Form, Formik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { doSignUp } from "../../api/apiUser";
import Swal from "sweetalert2";

import "./signup.css";
import { useErrorManage } from "../../hooks/useErrorManage";
import { errorColor, whiteInput } from "../../assets/styles";
function Signup({ seeLogIn }) {
  const [isLoading, setIsLoading] = useState(null);
  const [errorList, setErrorList] = useState({});
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
      seeLogIn();
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
        }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="flex-container">
            <div className="signup-card">
              <TextField
                sx={{ marginTop: 5, ...whiteInput, ...errorColor }}
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
                sx={{
                  ...whiteInput,
                  ...errorColor,
                }}
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
                sx={{ ...whiteInput, ...errorColor, maxWidth: "240px"}}
              />
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
