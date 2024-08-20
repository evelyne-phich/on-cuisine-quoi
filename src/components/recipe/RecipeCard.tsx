import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Stack } from "@mui/material";
import { red } from "@mui/material/colors";
import { RecipeCard as RecipeCardType } from "src/hooks/types";

type RecipeCardProps = {
  recipe: RecipeCardType;
};

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 400 },
        maxWidth: 400,
        height: "100%",
        border: "6px solid white",
      }}
    >
      <CardMedia
        component="img"
        height="320"
        image={recipe.pictureUrl}
        alt={recipe.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="p" color={red[900]}>
          {recipe.name}
        </Typography>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>{recipe.category}</Typography>
          <Chip
            label={recipe.country}
            sx={{
              backgroundColor: red[100],
              fontSize: 14,
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};
