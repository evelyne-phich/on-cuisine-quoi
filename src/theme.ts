import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: red[900],
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: red[900],
          "&.Mui-focused": {
            color: red[900],
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "::after": {
            borderBottom: `1px solid ${red[900]}`,
          },
          "&:before": {
            borderBottom: "none",
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          "& .MuiAutocomplete-option": {
            "&.Mui-focused": {
              backgroundColor: red[50],
            },
          },
        },
      },
    },
  },
});
