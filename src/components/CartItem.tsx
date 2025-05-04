import React from "react";
import AddToCart from "./AddToCart";

function CartItem() {
  return (
    <div>
      <div className="grid grid-cols-4 bg-gray-100 mb-4">
        <div className="w-[14rem] h-[16rem]">
          <img
            className="col-span-1 w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&s"
            alt=""
          />
        </div>

        <div className="col-span-2 p-4">
          <h2>محصول</h2>
          <p>کپشت</p>
          <p>
            قیمت: <span>20</span>$
          </p>
        </div>
        <div className="col-span-1 relative">
            <AddToCart />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
