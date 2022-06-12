import { FC, ReactNode } from "react"
import { Grid, useTheme } from "@mui/material";

interface Props {
    children: ReactNode[] | ReactNode
}

export const Container: FC<Props> = ({children}) => {
    const theme = useTheme();
    return (
        <Grid container 
            columns={{ xs: 12, sm: 12, md: 12 }}
            spacing={4} 
            sx={{ padding: theme.spacing(18,4,4,4) }}     
        >
            <Grid item md={12}>
                {children}
            </Grid> 
        </Grid>
    )
}