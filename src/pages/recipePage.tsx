import { CircularProgress, Stack } from "@mui/material";
import { useGetRecipes } from "src/hooks/useGetRecipes";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeCard } from "src/components/recipes/RecipeCard";
import { red } from "@mui/material/colors";

export const RecipePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { recipes, isLoading } = useGetRecipes();
  const recipe = recipes?.find((recipe) => recipe.id === Number(id));

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
    <Stack padding={4}>
      <RecipeCard recipe={recipe} />
    </Stack>
  );
};
