import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const updateCart = (targetItem) => {
    const ids = cart.map((existingItem) => existingItem.id);
    console.log(`Cart length: ${cart.length}`);
    console.log(cart);
    console.log(ids);
    if (ids.includes(targetItem.id)) {
      setCart(
        cart.map((existingItem) =>
          existingItem.id === targetItem.id ? targetItem : existingItem
        )
      );
    } else {
      setCart([...cart, targetItem]);
    }
  };

  const containsItem = (targetItem) => {
    const ids = cart.map((existingItem) => existingItem.id);
    console.warn(ids);
    return ids.includes(Number(targetItem));
  };

  const getFromCart = (id) => {
    return cart.find((item) => item.id === Number(id));
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <CartContext.Provider
      value={{
        cart,
        updateCart,
        containsItem,
        removeFromCart,
        removeAllFromCart,
        getFromCart,
        USDollar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
