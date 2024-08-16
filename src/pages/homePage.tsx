import { Stack } from "@mui/material";
import { RecipeCard } from "../components/recipes/RecipeCard";
import { useGetRecipes } from "src/hooks/useGetRecipes";

export const HomePage = () => {
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
