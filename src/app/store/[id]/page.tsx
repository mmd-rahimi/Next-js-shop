import AddToCart from "@/components/AddToCart";
import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";

interface IProductProps {
  params: Promise<{ id: string }>;
}

async function ProductDetails({ params }: IProductProps) {
  const { id } = await params;

  const result = await fetch(`http://localhost:8000/products/${id}`);
  const data = (await result.json()) as IProductItemProps;

  const { title, image, description, price } = data;

  return (
    <Container>
      <div className="grid grid-cols-4 gap-2 mt-8 shadow-md">
        <div className="col-span-1">
          <img
            className="w-full"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&s"
            src={image}
          />
        </div>

        <div className="col-span-2 p-5">
          <h2 className="font-bold text-2xl mb-5">{title}</h2>
          <p className="font-semibold text-lg mb-4">{description}</p>
          <p className="font-normal">
            قیمت: <span>{price}</span> تومان
          </p>
        </div>
        <div className="col-span-1 relative">
          <AddToCart id={id} />
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;
