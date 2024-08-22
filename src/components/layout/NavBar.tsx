import { Stack, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Search } from "../search/Search";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const isMd = useMediaQuery("(min-width:900px)");

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <AppBar position="static" sx={{ flexGrow: 1, backgroundColor: red[900] }}>
        <Toolbar
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            gap: 1,
            padding: 1,
          }}
        >
          {scrolled && !isMd ? null : (
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Stack flexDirection="row" alignItems="center" gap={1}>
                <img
                  src="/assets/images/cook.svg"
                  alt="Cheffe cuisinière"
                  loading="lazy"
                  width={36}
                  height={36}
                />
                <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
                  On cuisine quoi ?
                </Typography>
              </Stack>
            </Link>
          )}
          <Search />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
