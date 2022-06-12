import { FC } from "react";
import {
    useTheme, 
    Grid,
    Paper, 
    Button
} from "@mui/material";
import { 
    AccountCircle, 
    FmdGood as FmdGoodIcon, 
    SportsSoccer as SportsSoccerIcon,
    Save as SaveIcon,
} from "@mui/icons-material";
import { SportFormProps } from "../../types/form.types";
import { InputForm } from "./InputForm";

export const SportForm: FC<SportFormProps> = ({
    newSport,
    handleChange,
    alertSave,
    cancelForm
}) => {
  const theme = useTheme();

  return (
  <Paper sx={{height: '25rem', padding: theme.spacing(4,4,2,4), boxSizing: 'border-box'}} >
    <Grid container rowSpacing={2} sx={{height: '100%', padding: theme.spacing(2,0,0,0)}}>
        {/* Sport field */}
        <Grid item xs={12} sm={12} md={12}>
            <InputForm 
                value={newSport.sport} 
                label={`sport`} 
                icon={<SportsSoccerIcon />}
                handleChange={handleChange}
            />
        </Grid>

        {/* Location field */}
        <Grid item xs={12} sm={12} md={12}>
            <InputForm 
                value={newSport.location} 
                label={`location`} 
                icon={<FmdGoodIcon />}
                handleChange={handleChange}
            />
        </Grid>

        {/* Name field */}
        <Grid item xs={12} sm={12} md={12}>
            <InputForm 
                value={newSport.name} 
                label={`name`} 
                icon={<AccountCircle />}
                handleChange={handleChange}
            />
        </Grid>

        {/* Buttoms */}
        <Grid container spacing={2} sx={{ justifyContent: 'flex-end', alignContent: 'flex-end'}}>
            <Grid item  xs={6} md={3}>
                <Button variant="contained" sx={{width: '100%'}} startIcon={<SaveIcon />}
                    onClick={() => alertSave()}>
                    Save
                </Button>
            </Grid>

            <Grid item xs={6} md={3}>
                <Button variant="outlined" sx={{width: '100%'}} 
                    onClick={() => cancelForm()}>
                    Cancel
                </Button>
            </Grid>
        </Grid>
    </Grid>
  </Paper>
)};
