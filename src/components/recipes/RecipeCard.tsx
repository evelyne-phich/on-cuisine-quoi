import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Stack } from "@mui/material";
import { Recipe } from "src/hooks/useGetRecipes";
import { red } from "@mui/material/colors";

type RecipeCardProps = {
  recipe: Recipe;
};

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    // TODO: replace by <Link />
    <a href={`/recipes/${recipe.id}`}>
      <Card
        sx={{
          width: 400,
          opacity: 1,
          transition: ".3s ease-in-out",
          "&:hover": {
            opacity: 0.8,
          },
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
    </a>
  );
};
