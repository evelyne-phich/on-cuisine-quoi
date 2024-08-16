import { useQuery, useQueryClient } from "@tanstack/react-query";
import { env } from "src/config/env";

export type Category = "Entrée" | "Plat" | "Dessert";

export type Recipe = {
  id: string;
  pictureUrl: string;
  category: Category;
  name: string;
  country: string;
  preparationTime: string;
  restTime: string;
  cookingTime: string;
  totalTime: string;
  quantity: string;
  ingredients: string[];
  instructions: string[];
};

const fetchRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch(`${env.BACKEND_API}/recipes`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export const useGetRecipes = () => {
  const queryClient = useQueryClient();

  const {
    data: recipes,
    error,
    isLoading,
  } = useQuery<Recipe[], Error>(
    { queryKey: ["recipes"], queryFn: fetchRecipes },
    queryClient
  );

  return { recipes, error, isLoading };
};
