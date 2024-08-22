import { CircularProgress, Stack } from "@mui/material";
import { RecipeCard } from "../../components/recipe/RecipeCard";
import { Link } from "react-router-dom";
import "./homePage.scss";
import { useGetRecipesCards } from "src/hooks/useGetRecipesCards";
import { red } from "@mui/material/colors";

export const HomePage = () => {
  const { recipes, isLoading } = useGetRecipesCards();

  if (isLoading) {
    return (
      <Stack flexDirection="row" justifyContent="center" alignItems="center">
        <CircularProgress sx={{ color: red[900] }} />
      </Stack>
    );
  }

  return (
    <Stack
      padding={4}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-evenly"
      gap={4}
    >
      {recipes?.map((recipe) => (
        <Link
          to={`/recipes/${recipe.id}`}
          className="recipe-link"
          key={`recipe-link-${recipe.id}`}
        >
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </Stack>
  );
};
