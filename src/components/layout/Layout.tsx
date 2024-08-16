import { Stack } from "@mui/material";
import "../../index.scss";
import { grey } from "@mui/material/colors";
import { NavBar } from "src/components/layout/NavBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Stack sx={{ backgroundColor: grey[200], paddingTop: 8 }}>
      <NavBar />
      <Outlet />
    </Stack>
  );
};
