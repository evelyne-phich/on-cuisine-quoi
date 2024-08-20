import { Stack } from "@mui/material";
import "../../index.scss";
import { NavBar } from "src/components/layout/NavBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Stack paddingTop={8}>
      <NavBar />
      <Outlet />
    </Stack>
  );
};
