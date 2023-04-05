export default function cartReducer(cart, action) {
    switch (action.type) {
        case "empty":
            return [];
        case "updateQuantity": {
            const { quantity, id } = action;
            return quantity === 0
                ? cart.filter((i) => i.id !== id)
                : cart.map((i) => (i.id === id ? { ...i, quantity } : i));
        }
        case "add":
            const { id } = action;
            const itemInCart = cart.find((i) => i.id === id);
            if (itemInCart) {
                // Return new array with the matching item replaced
                return cart.map((i) =>
                    i.id === id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                // Return new array with the new item appended
                return [...cart, { id, quantity: 1 }];
            }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}
