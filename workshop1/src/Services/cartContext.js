import React, { useReducer, useEffect, useContext } from "react";
import cartReducer from "./cartReducer";

// Create the React Context

// Initialize LocalStorage for Context if it so not exist already (default value)
let initialCart;
try {
    initialCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch {
    console.error("The cart could not be parsed into JSON.");
    initialCart = [];
}

// Create a Provider for the reducer that gets wrapped into the project at a top level
export function CartProvider(props) {

}
// Create the custom hook for the cartContext to use
export function useCart() {

}
