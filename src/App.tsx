import { Box } from "@mui/material";
import "./App.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { grey } from "@mui/material/colors";

function App() {
  return (
    <Box
      sx={{ color: grey[900], backgroundColor: grey[300], minHeight: "100vh" }}
    >
      <NavBar />
    </Box>
  );
}

export default App;
