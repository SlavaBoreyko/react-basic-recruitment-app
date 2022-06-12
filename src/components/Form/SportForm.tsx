import { FC } from "react";
import { SportType } from "../../types/sports.types";
import {
    useTheme, 
    Grid,
    Paper, 
    FormControl, 
    OutlinedInput, 
    InputLabel, 
    InputAdornment, 
    Button
} from "@mui/material";
import { AccountCircle, FmdGood as FmdGoodIcon, Save as SaveIcon } from "@mui/icons-material";
import { FormState } from "../../screens/Sports";

type SportFormProps = {
    newSport: FormState;
    handleChange: (prop: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    alertSave: () => void;
    cancelForm: () => void;
};

// TODO: style to match designs
export const SportForm: FC<SportFormProps> = ({
    newSport,
    handleChange,
    alertSave,
    cancelForm
}) => {
  const theme = useTheme();
  return (
  <Paper sx={{height: '100%', padding: theme.spacing(4,4), boxSizing: 'border-box'}} >
    <Grid container spacing={2} sx={{padding: theme.spacing(2,0)}}>
        <Grid item md={6}>
            <FormControl variant="outlined" sx={{width: '100%'}}>
            <div>
            <InputLabel htmlFor="input-name">
                Name
            </InputLabel>
            <OutlinedInput 
                id="input-name"
                value={newSport.name}
                onChange={handleChange('name')}
                startAdornment={
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
                }
                label="Name"
                sx={{width: '100%'}}
            />
            </div>
            </FormControl>
        </Grid>

        <Grid item md={6}>
            <FormControl variant="outlined" sx={{width: '100%'}}>
            <div>
            <InputLabel htmlFor="input-location">
                Location
            </InputLabel>
            <OutlinedInput 
                id="input-location"
                value={newSport.location}
                onChange={handleChange('location')}
                startAdornment={
                <InputAdornment position="start">
                    <FmdGoodIcon />
                </InputAdornment>
                }
                label="Location"
                sx={{width: '100%'}}
            />
            </div>
            </FormControl>
        </Grid>
        </Grid>

        {/* Buttoms */}
        <Grid container spacing={2} sx={{ justifyContent: 'flex-end'}}>
        <Grid item md={3}>
            <Button variant="contained" sx={{width: '100%'}} startIcon={<SaveIcon />}
            onClick={() => alertSave()}>
            Save
            </Button>
        </Grid>

        <Grid item md={3}>
            <Button variant="outlined" sx={{width: '100%'}} 
            onClick={() => cancelForm()}>
            Cancel
            </Button>
        </Grid>
    </Grid>
  </Paper>
)};
