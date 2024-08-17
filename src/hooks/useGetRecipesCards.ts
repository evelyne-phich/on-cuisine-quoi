import { useQuery, useQueryClient } from "@tanstack/react-query";
import { env } from "src/config/env";
import { GetRecipes } from "./types";

const fetchRecipesCards = async (): Promise<GetRecipes> => {
  const response = await fetch(`${env.BACKEND_API}/recipes`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export const useGetRecipesCards = () => {
  const queryClient = useQueryClient();

  const {
    data: recipes,
    error,
    isLoading,
  } = useQuery<GetRecipes, Error>(
    { queryKey: ["recipes"], queryFn: fetchRecipesCards },
    queryClient
  );

  return { recipes, error, isLoading };
};
