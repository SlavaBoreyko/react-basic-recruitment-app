import { Typography } from "@mui/material"
import { Container } from "../components/Container/Container"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const Error404 = () => {
    return (
        <Container>
            <div style={{ width: '100%', textAlign:'center'}}>
            <ErrorOutlineIcon /> <Typography variant="h6">404: Page not found </Typography>
            </div>
        </Container>
    )      
}