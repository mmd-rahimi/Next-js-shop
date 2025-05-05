"use client"
import { UseCartContext } from "@/contexts/CartContext";

interface IAddToCartProps {
id: string
}

function AddToCart({id}: IAddToCartProps) {

   const {cartItems, handleIncreaseProductQty, getProductQty} = UseCartContext()

   console.log(cartItems);
   
  return (
    <div className="absolute bottom-0 left-0 p-4">
      <div className="flex flex-row items-center justify-between px-3 h-10 rounded-lg">
        <button onClick={() => handleIncreaseProductQty(parseInt(id))} className="text-lg font-bold w-11 h-11 mx-auto rounded-xl bg-sky-300 cursor-pointer">
          +
        </button>
        <span className="mx-4 text-2xl font-semibold">{getProductQty(parseInt(id))}</span>
        <button className="text-lg font-bold w-11 h-11 mx-auto rounded-xl bg-sky-300 cursor-pointer">
          -
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
