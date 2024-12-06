/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CartContext = createContext(null);

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(item) {
    const itemIndex = cartItems?.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (itemIndex === -1) {
      const newItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    } else {
      const updatedCartItems = cartItems?.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

      setCartItems(updatedCartItems);
    }
  }

  function decrementItemFromCart(item) {
    const itemIndex = cartItems?.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (itemIndex === -1) return;

    if (cartItems[itemIndex]?.quantity === 1) {
      const updatedCartItems = cartItems?.filter(
        (cartItem) => cartItem.name !== item?.name
      );

      setCartItems(updatedCartItems);
    } else if (itemIndex !== -1) {
      const updatedCartItems = cartItems?.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );

      setCartItems(updatedCartItems);
    }
  }

  function removeItemFromCart(item) {
    const itemIndex = cartItems?.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (itemIndex === -1) return;

    const updatedCartItems = cartItems?.filter(
      (cartItem) => cartItem.name !== item?.name
    );

    setCartItems(updatedCartItems);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        decrementItemFromCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
