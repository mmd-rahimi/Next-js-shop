"use client";
import { UseCartContext } from "@/contexts/CartContext";
import { FaTrashAlt } from "react-icons/fa";

interface IAddToCartProps {
  id: string;
}

function AddToCart({ id }: IAddToCartProps): React.JSX.Element {
  const {
    cartItems,
    handleIncreaseProductQty,
    getProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct
  } = UseCartContext();

  console.log(cartItems);

  return (
    <div className="absolute bottom-0 left-0 p-4">
      <div className="flex flex-row gap-3">
        <div className="flex flex-row items-center justify-between px-3 h-10 rounded-lg">
          <button
            onClick={() => handleIncreaseProductQty(parseInt(id))}
            className="text-lg font-bold w-11 h-11 mx-auto rounded-xl bg-sky-300 cursor-pointer"
          >
            +
          </button>
          <span className="mx-4 text-2xl font-semibold">
            {getProductQty(parseInt(id))}
          </span>
          <button
            onClick={() => handleDecreaseProductQty(parseInt(id))}
            className="text-lg font-bold w-11 h-11 mx-auto rounded-xl bg-sky-300 cursor-pointer"
          >
            -
          </button>
        </div>
        <div>
        <button onClick={() => handleRemoveProduct(parseInt(id))} className="bg-red-500 w-10 h-10 rounded flex items-center justify-center cursor-pointer">
            <FaTrashAlt className="text-white" size={18} />
        </button>
        </div>

      </div>
    </div>
  );
}

export default AddToCart;
