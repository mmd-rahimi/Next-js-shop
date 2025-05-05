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
  getProductQty: (id: number) => number;
  cartTotalQty: number
};

const CartContext = createContext({} as TCartContext);

export const UseCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);


  //تعداد محصول داخل سبد خرید
  const cartTotalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty
  }, 0)

  //گرفتن تعداد محصول
  const getProductQty = (id : number) => {
   return cartItems.find(item => item.id == id)?.qty || 0
  }
  
  //اضافه کردن به سبد خرید
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
    <CartContext.Provider value={{ cartItems, handleIncreaseProductQty, getProductQty, cartTotalQty }}>
      {children}
    </CartContext.Provider>
  );
};
