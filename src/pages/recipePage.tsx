import { CircularProgress, Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeCard } from "src/components/recipes/RecipeCard";
import { red } from "@mui/material/colors";
import { RecipeTime } from "src/components/recipes/RecipeTime";
import { useGetRecipeById } from "src/hooks/useGetRecipeById";

export const RecipePage = () => {
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const { recipe, isLoading } = useGetRecipeById(Number(recipeId));

  if (isLoading) {
    return (
      <Stack
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 64px)"
      >
        <CircularProgress sx={{ color: red[900] }} />
      </Stack>
    );
  }

  if (!recipe) {
    navigate("/not-found");
    return null;
  }

  return (
    <Stack padding={4} flexDirection="row" gap={4}>
      <Stack flex={1}>
        <RecipeCard recipe={recipe} />
      </Stack>
      <RecipeTime recipe={recipe} />
    </Stack>
  );
};
