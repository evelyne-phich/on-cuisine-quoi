import { Stack } from "@mui/material";
import { RecipeCard } from "../../components/recipes/RecipeCard";
import { useGetRecipes } from "src/hooks/useGetRecipes";
import { Link } from "react-router-dom";
import "./homePage.scss";

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
        <Link
          to={`/recipes/${recipe.id}`}
          className="recipe-link"
          key={recipe.id}
        >
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </Stack>
  );
};
