import React, { useState } from "react";

const ProductsCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full flex flex-row-reverse justify-center gap-20 items-center flex-shrink-0 p-4 bg-gray-100 border border-sky-600 rounded-lg"
          >
            <div className="relative">
              {product.onSale && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Sale!
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 b"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              <button className="mt-2 bg-blue-950 text-white py-2 px-4 rounded hover:bg-sky-700">
                Select Options
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute rounded-md text-xl m-2  top-1/2 left-0 transform -translate-y-1/2 bg-blue-950 text-white p-2 "
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute rounded-md text-xl m-2  top-1/2 right-0 transform -translate-y-1/2 bg-blue-950 text-white p-2 "
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default ProductsCarousel;
