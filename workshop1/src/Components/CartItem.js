import {Card, CardContent, Typography} from "@mui/material";
import {useCart} from "../Services/cartContext";

function CartItem(p) {
    const {dispatch} = useCart()

    const itemInCart = p.item
    const products = p.products
    const { id, quantity } = itemInCart;
    const { title } = products.find(
        (p) => p.id === parseInt(id)
    );

    return(
        <Card sx={{padding: '5px'}}>
            <Typography variant="h5">{title}</Typography>
            <CardContent>
                <select
                    onChange={(e) =>
                        dispatch({
                            type: "updateQuantity",
                            id,
                            quantity: parseInt(e.target.value),
                        })
                    }
                    value={quantity}
                >
                    <option value="0">Remove</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </CardContent>
        </Card>
    )
}
export default CartItem