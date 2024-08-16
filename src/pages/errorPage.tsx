import { Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

export default function ErrorPage() {
  return (
    <Stack sx={{ height: "calc(100vh - 64px)", justifyContent: "center" }}>
      <Typography variant="h1" align="center" color={red[900]}>
        Oups !
      </Typography>
      <Typography variant="h5" align="center">
        Désolé, une erreur inattendue est survenue.
      </Typography>
    </Stack>
  );
}
