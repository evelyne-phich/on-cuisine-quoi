import { IconButton, Stack } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { red } from "@mui/material/colors";
import "./ScrollToTopButton.scss";

export const ScrollToTopButton = () => {
  return (
    <Stack
      position="fixed"
      bottom={32}
      right={32}
      borderRadius={1000}
      sx={{ backgroundColor: red[900], opacity: 0.5 }}
      className="button-container"
    >
      <IconButton
        aria-label="bouton de scroll vers le haut de la page"
        sx={{ color: "white" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </Stack>
  );
};
