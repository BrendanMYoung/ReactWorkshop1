import {useCart} from "../Services/cartContext";
import useFetch from "../Services/useFetch";
import LoadingPage from "./LoadingPage";
import {Typography, Card, Container, CardContent, Button, Grid} from "@mui/material";
import CartItem from "../Components/CartItem";

function Cartpage() {
    const { cart, dispatch } = useCart()
    const {data: products, loading, error} = useFetch("coffee/hot")

    if (loading) return <LoadingPage/>
    if (error) return <div>Error loading...</div>

    const numOfItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);
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
                        {cart.map(p => <CartItem item={p} key={p.id} products={products}/>)}
                    </Grid>
                </CardContent>
                <CardContent>
                    <Button onClick={() => dispatch({type: "empty"})}>Clear Cart</Button>
                </CardContent>
            </Card>
        </Container>
    )
}
export default Cartpage