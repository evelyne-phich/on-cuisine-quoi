import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

export const NavBar = () => {
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
        <Toolbar sx={{ gap: 2 }}>
          <Link to="/">
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};
