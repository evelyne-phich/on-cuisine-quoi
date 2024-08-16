import { Stack } from "@mui/material";
import { RecipeCard } from "./RecipeCard";
import { useGetRecipes } from "src/hooks/useGetRecipes";

export const RecipeCards = () => {
  const { recipes } = useGetRecipes();

  return (
    <Stack
      padding={4}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-around"
      gap={4}
    >
      {recipes?.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </Stack>
  );
};
