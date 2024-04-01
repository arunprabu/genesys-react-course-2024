/* 
Any to Any Component Communication using Context API

  Step 1. Create Context using createContext()
  Step 2: We have to Provide the context data to the desired components using Context Provider.
  Step 3: Let's supply the data through the CartProvider (see line number 26)
  Step 4: You can subcribe to the context data in the desired component using useContext()
  Step 5: Work on to supply the data to the context.
*/

import { createContext, useContext, useState } from "react";
import { IProduct } from "../models/ProductTypes";

interface CartContextProps {
  cartItems: IProduct[]; // needed for header component
  addToCart: (product: IProduct) => void; // Needed for ProductsPage component
}

// Step 1: Create Context using createContext()
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Step 2: Let's create a new component called CartProvider
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // if we want cart data saved in rest api,
  // try connecting to rest api inside useEffect hook using axios
  const [cartItems, setCartItems] = useState<IProduct[]>([]); // needed for Header comp only

  // the following fn is needed for ProductsPage Only
  const addToCart = (product: IProduct) => {
    setCartItems([...cartItems, product]);
  }

  return (
    <CartContext.Provider
      value={{ cartItems: cartItems, addToCart: addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Step 4: You can subcribe to the context data in the desired component using useContext()
// creating a custom hook with if check
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart hook must be used within CartProvider component's descendants"
    );
  }

  return context;
};
