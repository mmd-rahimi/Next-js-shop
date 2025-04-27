import Container from "@/components/Container";

function ProductDetails() {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-2 mt-8 shadow-md">
        <div className="col-span-1 ">
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&s"
          />
        </div>

        <div className="col-span-2 p-5">
          <h2 className="font-bold text-2xl mb-5">محصول</h2>
          <p className="font-semibold text-lg mb-4">کپشن</p>
          <p className="font-normal">
            قیمت: <span>20</span> تومان
          </p>
        </div>
        {/* <div className=" col-span-1">
          <div className="flex ">
            <div className="flex flex-row justify-between items-center px-2 h-8 w-30 bg-red-200">
              <button>+</button>
              <button>-</button>
            </div>
          </div>
        </div> */}
        <div className="col-span-1 relative">
  <div className="absolute bottom-0 left-0 p-4">
    <div className="flex flex-row items-center justify-between px-3 h-10 rounded-lg">
      <button className="text-lg font-bold w-11 h-11 mx-auto rounded-xl bg-sky-300 ">+</button>
      <span className="mx-4 text-2xl font-semibold">1</span>
      <button className="text-lg font-bold w-11 h-11 mx-auto rounded-xl bg-sky-300">-</button>
    </div>
  </div>
</div>
      </div>
    </Container>
  );
}

export default ProductDetails;
