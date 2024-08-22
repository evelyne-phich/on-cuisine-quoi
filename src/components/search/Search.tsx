import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useGetRecipesCards } from "src/hooks/useGetRecipesCards";
import { useNavigate } from "react-router-dom";
import { RecipeCard } from "src/hooks/types";
import { useState } from "react";

export const Search = () => {
  const [value, setValue] = useState<RecipeCard | null>(null);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const { recipes } = useGetRecipesCards();

  if (!recipes) {
    return null;
  }

  const handleRecipeSelection = (newValue: RecipeCard | null) => {
    setValue(null);
    if (!newValue) {
      return;
    }
    navigate(`/recipes/${newValue.id}`);
    setInputValue("");
  };

  return (
    <Autocomplete
      value={value}
      onChange={(_event, newValue) => {
        handleRecipeSelection(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(_event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="autocomplete-search"
      options={recipes}
      getOptionLabel={(option) => option.name}
      sx={{
        width: "100%",
        maxWidth: 400,
      }}
      noOptionsText="Aucun résultat"
      renderInput={(params) => (
        <TextField
          {...params}
          label="Chercher une recette"
          variant="filled"
          sx={{
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        />
      )}
    />
  );
};
