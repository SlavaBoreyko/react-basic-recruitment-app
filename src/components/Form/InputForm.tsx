import { FC } from "react";
import {
    FormControl, 
    OutlinedInput, 
    InputLabel, 
    InputAdornment, 
} from "@mui/material";
import { InputProps } from "../../types/form.types";

export const InputForm: FC<InputProps> = ({
    value,
    label,
    icon,
    handleChange
}) => {
  return (
    <FormControl variant="outlined" sx={{width: '100%'}}>
        <InputLabel htmlFor={`input-${label}`}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
        </InputLabel>
        <OutlinedInput 
            id={`input-${label}`}
            value={value}
            onChange={handleChange(`${label}`)}
            startAdornment={
            <InputAdornment position="start">
                {icon}
            </InputAdornment>
            }
            label={label.charAt(0).toUpperCase() + label.slice(1)}
            sx={{width: '100%'}}
        />
    </FormControl>
  )
};
