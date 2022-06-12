import { FC } from "react";
import { Paper, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { DashboardCardProps } from "../../types/dashboard.types";

// TODO: style to match designs
export const DashboardCard: FC<DashboardCardProps> = ({
  title,
  text,
  linkTo,
}) => {
  const theme = useTheme();

  return (
    <Paper elevation={4} sx={{height: '100%'}} >
      <Stack sx={{height: '100%'}}>
        <Stack sx={{ 
              padding: theme.spacing(0, 4),
              bgcolor: 'secondary.main', 
              color: 'secondary.contrastText', 
              height: '3rem',
            }} >
          <div >
            <p>{title}</p>
          </div>
          </Stack>

          {/* MAIN TEXT */}
          <Stack style={{ padding: theme.spacing(4, 4, 0, 4) }}>
          <div >
            <Typography typography={'subtitle2'} color='text.secondary' >{text}</Typography>
          </div>
          </Stack>
          
          {/* LINK  */}
          <Stack
            sx={{ padding: theme.spacing(2, 4) }}
            direction={"row"}
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
            flexGrow='1'
          >
            <Link to={linkTo} style={{
              textDecoration: 'none' 
            }}>
              <Typography color='primary.main' typography={'button'}>
                More info
              </Typography>
            </Link>
          </Stack>
      </Stack> 
    </Paper>
  );
};
