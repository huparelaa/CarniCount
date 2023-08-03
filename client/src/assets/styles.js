export const whiteInput = {
  "& .MuiInputBase-input": {
    color: "white", // Set the text color here
    borderColor: "white", // Set the border color here
  },
  "& .MuiInputLabel-root": {
    color: "white", // Set the label color here
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white", // Set the outline/border color here
    },
    "&:hover fieldset": {
      borderColor: "white", // Set the hover border color here
    },
    "&.Mui-focused fieldset": {
      borderColor: "white", // Set the focused border color here
    },
  },
};

export const errorColor = {
  "& .MuiFormHelperText-root.Mui-error": {
    color: "yellow",
  },
  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "yellow",
  },
  "& .MuiInputLabel-outlined.Mui-error": {
    color: "yellow",
  },
};
