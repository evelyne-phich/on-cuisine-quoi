import { Stack } from "@mui/material";
import "../../index.scss";
import { NavBar } from "src/components/layout/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Stack paddingTop={{ xs: "116px", md: 10 }}>
      <NavBar />
      <Outlet />
    </Stack>
  );
};
