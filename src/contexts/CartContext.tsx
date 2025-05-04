"use client";
import React, { createContext, useContext, useState } from "react";

type CartContextProviderProps = {
  children: React.ReactNode;
};

type CartItems = {
  id: number;
  qty: number;
};

type TCartContext = {
  cartItems: CartItems[];
  handleIncreaseProductQty: (id: number) => void;
};

const CartContext = createContext({} as TCartContext);

export const UseCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      const isNotProductExist =
        currentItem.find((item) => item.id == id) == null;
      if (isNotProductExist) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, handleIncreaseProductQty }}>
      {children}
    </CartContext.Provider>
  );
};
