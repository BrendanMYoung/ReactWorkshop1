//import {useCart} from "../Services/cartContext";
import useFetch from "../Services/useFetch";
import LoadingPage from "./LoadingPage";
import {Typography, Card, Container, CardContent, Button, Grid} from "@mui/material";
import CartItem from "../Components/CartItem";

function Cartpage() {
    const [data] = useFetch("coffee/hot")
    const cart = []
    const numOfItemsInCart = 0;
    return(
        <Container>
            <Card>
                <CardContent>
                    <Typography>
                        {numOfItemsInCart === 0 ? "Your cart is empty!" :
                            numOfItemsInCart +" item(s) in my cart"
                        }
                    </Typography>
                </CardContent>
                <CardContent>
                    <Grid>
                    </Grid>
                </CardContent>
                <CardContent>
                    <Button onClick={() => console.log("Clearing...")}>Clear Cart</Button>
                </CardContent>
            </Card>
        </Container>
    )
}
export default Cartpage