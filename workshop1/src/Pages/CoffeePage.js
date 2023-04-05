import useFetch from "../Services/useFetch";
import {Container, Grid} from "@mui/material";
import CoffeeDisplay from "../Components/CoffeeDisplay";
import LoadingPage from "./LoadingPage";

function AllCoffeeDisplay(props) {
    // Update useFetch call
    const [data, setData] = useFetch("coffee/hot")
    function getMap() {
        if (data != null) {
            return (
                data.map(p => (
                    <Grid item xs={4} key={p.id}>
                        <CoffeeDisplay props={p} />
                    </Grid>
                ))
            )
        }
    }

    return(

        <Container maxWidth="lg" sx={{ paddingTop: '20px'}}>
            <Grid container spacing={3}
                direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
            >
                {getMap()}
            </Grid>
        </Container>
    )
}
export default AllCoffeeDisplay