import { createContext } from "react";
import type { ProductCart } from "./CartProvider";
import type { Product } from "../interfaces/product";

interface cartContextType {
    cart: ProductCart[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    incrementInCart: (product: ProductCart) => void;
    decrementInCart: (product: ProductCart) => void;
}

export const CartContext = createContext({} as cartContextType);

