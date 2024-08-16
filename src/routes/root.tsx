import { Stack } from "@mui/material";
import "../index.scss";
import { grey } from "@mui/material/colors";
import { NavBar } from "src/components/layout/NavBar";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <Stack sx={{ backgroundColor: grey[200], minHeight: "100vh" }}>
      <NavBar />
      <Outlet />
    </Stack>
  );
};
