import { FC } from "react";
import { SportType } from "../../types/sports.types";
import { Paper, Typography, useTheme } from "@mui/material";

type SportDetailProps = {
    sportDetails: SportType;
};

// TODO: style to match designs
export const SportDetail: FC<SportDetailProps> = ({sportDetails}) => {
  const theme = useTheme();
  return (
    <Paper sx={{height: '100%', padding: theme.spacing(4,4), boxSizing: 'border-box'}} >
        <Typography sx={{ color: 'secondary.main', fontWeight:'500', paddingBottom: 2}}>
        {sportDetails.name} ({sportDetails.location})
        </Typography>

        <Typography typography={'subtitle2'} color='text.secondary'>
        {sportDetails.description}
        </Typography>
    </Paper>
  );
};
