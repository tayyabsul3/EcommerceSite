import React from "react";
import ProductCard from "../Resuables/ProductCard";

const AllProducts = () => {
  const categories = ["Smart Watches", "Airpods", "Cooling Pads"]; // Example categories
  const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: "$99.00",
      imageSrc: "/path-to-image.jpg",
      isNew: true,
      discountPrice: null,
    },
    // Add more products as needed
  ];

  return (
    <div className="my-32 flex">
      <div className="filters flex flex-col flex-[0.1] p-10 space-y-4  border-r border-r-blue-500">
        {categories.map((category) => (
          <button
            key={category}
            className="text-left bg-blue-950 hover:text-blue-600"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="products border-t border-t-blue-500  flex gap-5 flex-wrap flex-[0.9] p-10">
        {[1, 2, 3, 4, 5, 6, 6, 7, 7].map(() => (
          <ProductCard />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
