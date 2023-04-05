import useFetch from "../Services/useFetch";
import {Container, Grid} from "@mui/material";
import CoffeeDisplay from "../Components/CoffeeDisplay";
import LoadingPage from "./LoadingPage";

function AllCoffeeDisplay(props) {
    const {data: products, loading, error} = useFetch("coffee/hot")
    if (loading) return <LoadingPage/>
    if (error) return <div>Error loading...</div>

    return(

        <Container maxWidth="lg" sx={{ paddingTop: '20px'}}>

            <Grid container spacing={3}
                direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
            >
                {products.map(p => (
                    <Grid item xs={4} key={p.id}>
                        <CoffeeDisplay props={p} />
                    </Grid>
                ))}


            </Grid>
        </Container>
    )
}
export default AllCoffeeDisplay