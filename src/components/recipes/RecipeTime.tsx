import { Divider, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
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
    <Stack width={{ xs: "100%", sm: 412 }} maxWidth={412}>
      {times.map((time, index) => (
        <Stack
          key={`recipe-time-${index}`}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography variant="h6">{time.label}</Typography>
          <Typography variant="h6" color={red[900]}>
            {time.value}
          </Typography>
        </Stack>
      ))}
      <Divider sx={{ margin: "6px 0" }} color={red[900]} />
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography variant="h6">Temps total</Typography>
        <Typography variant="h6" color={red[900]}>
          {recipe.totalTime}
        </Typography>
      </Stack>
    </Stack>
  );
};
