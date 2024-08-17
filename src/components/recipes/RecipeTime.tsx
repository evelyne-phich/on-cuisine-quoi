import { Stack, Typography } from "@mui/material";
import { GetRecipeById } from "src/hooks/types";

type RecipeCardProps = {
  recipe: GetRecipeById;
};

export const RecipeTime = ({ recipe }: RecipeCardProps) => {
  const times = [
    {
      label: "Temps de préparation",
      value: recipe.preparationTime,
    },
    {
      label: "Temps de repos",
      value: recipe.restTime,
    },
    {
      label: "Temps de cuisson",
      value: recipe.cookingTime,
    },
  ];

  return (
    <Stack flex={1} justifyContent="center" alignItems="center">
      {times.map((time, index) => (
        <Stack
          key={`recipe-time-${index}`}
          flexDirection="row"
          justifyContent="space-between"
          width={280}
        >
          <Typography>{time.label}</Typography>
          <Typography>{time.value}</Typography>
        </Stack>
      ))}
      <Stack flexDirection="row" justifyContent="space-between" width={280}>
        <Typography>Temps total</Typography>
        <Typography>{recipe.totalTime}</Typography>
      </Stack>
    </Stack>
  );
};
