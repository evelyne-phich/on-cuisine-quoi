import { Recipe } from "./useGetRecipes";

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch(`${VITE_BACKEND_API}/recipes`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
