import { CircularProgress, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeCard } from "src/components/recipe/RecipeCard";
import { red } from "@mui/material/colors";
import { RecipeTime } from "src/components/recipe/RecipeTime";
import { useGetRecipeById } from "src/hooks/useGetRecipeById";
import { RecipeIngredients } from "src/components/recipe/RecipeIngredients";
import { RecipeInstructions } from "src/components/recipe/RecipeInstructions";

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
      width="100%"
      boxSizing="border-box"
      gap={4}
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
        <Stack flex={1} alignItems="center" gap={4} width="100%">
          <Typography variant="h6" color={red[900]}>
            {recipe.quantity}
          </Typography>
          <RecipeTime recipe={recipe} />
        </Stack>
      </Stack>
      <Stack
        flexDirection={{
          xs: "column",
          lg: "row",
        }}
        alignItems={{
          xs: "center",
          lg: "start",
        }}
        gap={4}
      >
        <RecipeIngredients ingredients={recipe.ingredients} />
        <Stack
          flex={1}
          alignItems={{
            xs: "start",
            lg: "center",
          }}
          gap={4}
          width="100%"
        >
          <RecipeInstructions instructions={recipe.instructions} />
        </Stack>
      </Stack>
    </Stack>
  );
};
