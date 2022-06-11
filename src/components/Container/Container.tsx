import { FC, ReactNode } from "react"
import { Grid } from "@mui/material";

interface Props {
    children: ReactNode[] | ReactNode
}

export const Container: FC<Props> = ({children}) => {
    return (
        <Grid container 
            spacing={4} 
            sx={{ paddingTop: 18, paddingBottom: 4, paddingLeft: 4, paddingRight: 4 }}
        >
            <Grid item md={12}>
                {children}
            </Grid> 
        </Grid>
    )
}