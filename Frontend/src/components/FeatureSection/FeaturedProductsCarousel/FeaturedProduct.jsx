import React from "react";
import ProductsCarousel from "./ProductsCarousel";

const products = [
  {
    name: "P9 Wireless Bluetooth Headphones",
    price: "Rs 2,600",
    image: "https://i.ytimg.com/vi/OsdcxZOVsu4/maxresdefault.jpg",
    onSale: true,
  },
  {
    name: "Product 2",
    price: "Rs 3,000",
    image: "https://i.ytimg.com/vi/OsdcxZOVsu4/maxresdefault.jpg",
    onSale: false,
  },
  {
    name: "Product 3",
    price: "Rs 4,500",
    image: "https://i.ytimg.com/vi/OsdcxZOVsu4/maxresdefault.jpg",
    onSale: true,
  },
];

const FeaturedProduct = () => {
  return (
    <div>
      <ProductsCarousel products={products} />
    </div>
  );
};

export default FeaturedProduct;
