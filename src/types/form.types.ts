import { ReactElement } from "react";
import { SvgIconComponent } from "@mui/icons-material";

export type SportFormType = {
    sport: string;
    name: string;
    location: string;
}
  
export type SportFormProps = {
    newSport: SportFormType;
    handleChange: (prop: keyof SportFormType) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    alertSave: () => void;
    cancelForm: () => void;
};
  
export type InputProps = {
    value: string | number;
    label: string;
    icon: ReactElement<SvgIconComponent>;
    handleChange: any;
}
