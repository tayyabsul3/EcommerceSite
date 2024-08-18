import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    " https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/1336185/pexels-photo-1336185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/739410/pexels-photo-739410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  setTimeout(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, 5000);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden lg:h-[85vh] mt-32 lg:mt-40">
      <div
        className="flex  transition-transform duration-500 h-full ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full "
            />
          </div>
        ))}
      </div>
      <button
        className="absolute rounded-md text-xl m-5 top-1/2 left-0 transform -translate-y-1/2 bg-blue-950 text-white p-2"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute rounded-md text-xl m-5 top-1/2 right-0 transform -translate-y-1/2 bg-blue-950 text-white p-2"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
