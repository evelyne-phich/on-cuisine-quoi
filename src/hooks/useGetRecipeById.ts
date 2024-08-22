import { useQuery, useQueryClient } from "@tanstack/react-query";
import { env } from "src/config/env";
import { GetRecipeById } from "./types";

const fetchRecipeById = async (recipeId: number): Promise<GetRecipeById> => {
  const response = await fetch(`${env.BACKEND_API}/recipes/${recipeId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export const useGetRecipeById = (recipeId: number) => {
  const queryClient = useQueryClient();

  const {
    data: recipe,
    error,
    isLoading,
  } = useQuery<GetRecipeById, Error>(
    {
      queryKey: ["recipe", recipeId],
      queryFn: () => fetchRecipeById(recipeId),
    },
    queryClient
  );

  return { recipe, error, isLoading };
};
