"use client";
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { UseCartContext } from "@/contexts/CartContext";

function Cart() {
  const { cartItems } = UseCartContext();

  return (
    <Container>
      <div className="">
        {cartItems.map((item) => {
         return <CartItem key={item.id} {...CartItem}/>;
        })}
      </div>

    </Container>

      /* </div>
      <div className="border shadow-md">
        <h2>
          قیمت کل: <span>100</span> تومان
        </h2>
        <h2>
          سود شما از این خرید: <span>100</span> تومان
        </h2>
        <h2>
          قیمت نهایی: <span>100</span> تومان
        </h2>
        <div className="flex flex-row gap-3 mt-4">
          <input type="text" placeholder="کد را وارد کنید" className="border" />
          <button className="bg-sky-500 text-white px-5 py-2 rounded">
            اعمال کد تخفیف
          </button>
        </div> */
  );
}

export default Cart;
