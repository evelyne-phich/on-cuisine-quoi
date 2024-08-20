import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

type RecipeInstructionsProps = {
  instructions: string[];
};

export const RecipeInstructions = ({
  instructions,
}: RecipeInstructionsProps) => {
  return (
    <Stack>
      <Stack padding={2}>
        <Typography variant="h5" color={red[900]}>
          Instructions
        </Typography>
      </Stack>
      <List sx={{ listStyle: "decimal", pl: 4 }}>
        {instructions.map((instruction) => (
          <ListItem
            sx={{ display: "list-item", color: red[900], fontFamily: "roboto" }}
          >
            <ListItemText primary={instruction} sx={{ color: "black" }} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
