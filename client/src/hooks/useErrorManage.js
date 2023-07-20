export function useErrorManage(data) {
  const errors = {};
  const INPUT_EMPTY = "Completa toda la información";
  if (data.fullName === "") {
    errors.fullName = INPUT_EMPTY;
  } else if (/[0-9~`!@#$%^&*()_+=\-[\]\\';,/{}|\\":<>?]/.test(data.fullName)) {
    errors.fullName = "Seriamente no creo que te llames así";
  }

  if (data.email === "") {
    errors.email = INPUT_EMPTY;
  } else if (!isValidEmail(data.email)) {
    errors.email = "El correo electrónico no es válido";
  }

  if (data.password === "") {
    errors.password = INPUT_EMPTY;
  } else if (data.password.length < 8 || data.password.length > 20) {
    errors.password = "Ingrese una contraseña entre 8 y 20 caracteres";
  }

  

  if (Object.keys(errors).length > 0) {
    throw errors;
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
