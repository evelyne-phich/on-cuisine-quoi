import { Divider, Icon, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { GetRecipeById } from "src/hooks/types";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

type RecipeCardProps = {
  recipe: GetRecipeById;
};

export const RecipeTime = ({ recipe }: RecipeCardProps) => {
  const times = [
    {
      label: "Temps de préparation",
      value: recipe.preparationTime,
      Icon: AutorenewIcon,
    },
    {
      label: "Temps de repos",
      value: recipe.restTime,
      Icon: PauseCircleOutlineOutlinedIcon,
    },
    {
      label: "Temps de cuisson",
      value: recipe.cookingTime,
      Icon: OutdoorGrillOutlinedIcon,
    },
  ];

  return (
    <Stack width={{ xs: "100%", sm: 412 }} maxWidth={412}>
      {times.map((time, index) => (
        <Stack
          key={`recipe-time-${index}`}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
          <Stack flexDirection="row" alignItems="center" gap={1}>
            <Icon component={time.Icon} sx={{ color: red[900] }} />
            <Typography variant="h6">{time.label}</Typography>
          </Stack>
          <Typography variant="h6" color={red[900]} flexShrink={0}>
            {time.value}
          </Typography>
        </Stack>
      ))}
      <Divider sx={{ margin: "6px 0" }} color={red[900]} />
      <Stack flexDirection="row" justifyContent="space-between">
        <Stack flexDirection="row" alignItems="center" gap={1}>
          <Icon component={AccessTimeIcon} sx={{ color: red[900] }} />
          <Typography variant="h6">Temps total</Typography>
        </Stack>
        <Typography variant="h6" color={red[900]}>
          {recipe.totalTime}
        </Typography>
      </Stack>
    </Stack>
  );
};
