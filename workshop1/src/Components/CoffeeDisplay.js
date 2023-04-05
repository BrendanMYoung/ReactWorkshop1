import {Card, Typography, CardMedia, CardContent, CardActions, Button} from "@mui/material";
import useFetch from "../Services/useFetch";
import {useCart} from "../Services/cartContext";

function CoffeeDisplay(p) {
    const props = p.props
    const {dispatch} = useCart()

    function addToCart () {
        dispatch({
            type: "add",
            id: props.id
        })
    }

    return(
        <Card sx ={{width: 350}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={addToCart}size="small">Add to Cart</Button>
            </CardActions>
        </Card>
    )
}
export default CoffeeDisplay
