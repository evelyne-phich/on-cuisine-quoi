import { CircularProgress, Stack, Typography } from "@mui/material";
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
    <Stack
      padding={4}
      maxWidth={1440}
      margin="0 auto"
      sx={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Stack
        flexDirection={{
          xs: "column",
          lg: "row",
        }}
        alignItems="center"
        gap={4}
      >
        <RecipeCard recipe={recipe} />
        <Stack flex={1} alignItems="center" width="100%" gap={4}>
          <Typography variant="h6" color={red[900]}>
            {recipe.quantity}
          </Typography>
          <RecipeTime recipe={recipe} />
        </Stack>
      </Stack>
    </Stack>
  );
};
