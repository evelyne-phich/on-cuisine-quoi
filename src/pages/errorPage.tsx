import { Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

export default function ErrorPage() {
  return (
    <Stack sx={{ height: "100vh", justifyContent: "center" }}>
      <Typography variant="h1" align="center" color={red[900]}>
        Oups !
      </Typography>
      <Typography variant="h5" align="center">
        Désolé, une erreur inattendue est survenue.
      </Typography>
    </Stack>
  );
}
