import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ flexGrow: 1, backgroundColor: red[900] }}>
        <Toolbar sx={{ gap: 2 }}>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};
