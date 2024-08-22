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
        width: "100%",
        maxWidth: 412,
        height: "100%",
        border: "6px solid white",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="320"
        image={recipe.pictureUrl}
        alt={recipe.name}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          "&:last-child": {
            paddingBottom: 2,
          },
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="p"
          color={red[900]}
          align="center"
        >
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
