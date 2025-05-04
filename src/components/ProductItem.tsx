import Link from "next/link";

export interface IProductItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

function ProductItem({
  id,
  image,
  title,
  description,
  price,
}: IProductItemProps) {
  return (
    <div className="shadow-md rounded">
      <div className="h-50">
        <Link key={id} href={`/store/${id}`}>
        <img className="w-full h-full" src={image} />
        </Link>
      </div>
      <div className="p-2">
        <Link key={id} href={`/store/${id}`}>
          <h3 className="font-bold">{title}</h3>
        </Link>
        <h5 className="font-normal">{description}</h5>
        <p className="font-light">
          قیمت: <span>{price} تومان</span>
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
