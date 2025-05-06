import React, { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import axios from "axios";
import { IProductItemProps } from "./ProductItem";

interface ICartItemProps {
  id: number;
  qty: number;
}

function CartItem({ id, qty }): ICartItemProps {

  const [data, setData] = useState({} as IProductItemProps);

  useEffect(() => {
    axios(`http://localhost:8000/products/${id}`).then((result) => {
      const { data } = result;
      setData(data);
    });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 bg-gray-100 mb-4">
        <div className="w-[14rem] h-[16rem]">
          <img
            className="col-span-1 w-full h-full"
            src={data.image}
          />
        </div>

        <div className="col-span-2 p-4">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>
            قیمت: <span>{data.price}</span> تومان
          </p>
        </div>
        <div className="col-span-1 relative">
          <AddToCart id={id} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
