import Container from "@/components/Container";
import ProductItem, { IProductItemProps } from "@/components/ProductItem";
import React from "react";

async function Store() {

  const result = await fetch("http://localhost:8000/products")
  const data = await result.json() as IProductItemProps[]

  return (
    <Container>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
            <ProductItem key={item.id} {...item} />
          
        ))}
      </div>
    </Container>
  );
}

export default Store;
