import {CircularProgress, Container} from "@mui/material";

function LoadingPage() {

    return(
        <Container maxWidth="lg" sx={{height: '90vh', alignItems: 'center'}}>
            <CircularProgress/>
        </Container>
    )
}
export default LoadingPage