import { Stack } from "@mui/material";
import "./App.scss";
import { NavBar } from "./components/layout/NavBar";
import { grey } from "@mui/material/colors";
import { RecipeCards } from "./components/recipes/RecipeCards";

function App() {
  return (
    <Stack sx={{ backgroundColor: grey[200], minHeight: "100vh" }}>
      <NavBar />
      <RecipeCards />
    </Stack>
  );
}

export default App;
