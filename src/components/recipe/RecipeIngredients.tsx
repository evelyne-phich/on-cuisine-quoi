import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Card, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

type RecipeIngredientsCheckboxListProps = {
  ingredients: string[];
};

export const RecipeIngredientsCheckboxList = ({
  ingredients,
}: RecipeIngredientsCheckboxListProps) => {
  const [checked, setChecked] = useState<number[]>([]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 412 },
        maxWidth: 412,
        backgroundColor: "white",
      }}
    >
      <Stack padding={2}>
        <Typography variant="h5" color={red[900]}>
          Ingrédients
        </Typography>
      </Stack>
      <List sx={{ width: "100%" }} disablePadding>
        {ingredients.map((ingredient, index) => {
          return (
            <ListItem key={`ingredient-${index}`} disablePadding>
              <ListItemButton
                onClick={handleToggle(index)}
                dense
                disableRipple
                sx={{
                  "&:hover, &:focus": {
                    background: red[50],
                  },
                }}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(index) !== -1}
                    tabIndex={-1}
                    disableRipple
                    sx={{
                      color: red[900],
                      "&.Mui-checked": {
                        color: red[900],
                      },
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={index.toString()}
                  primary={ingredient}
                  primaryTypographyProps={{ fontSize: 16 }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};