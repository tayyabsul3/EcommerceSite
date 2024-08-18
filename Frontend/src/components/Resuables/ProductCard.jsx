import React from "react";

const ProductCard = ({ product }) => {
  const dummyproductdata = {
    title: "",
    category: "",
    price: 0,
    numOfReviews: 0,
    rating: 0,
    reviews: [],
  };

  const { title, rating, reviews, category, price, numOfReviews, images } =
    product || dummyproductdata;

  // let qty = 1;
  // const handleAddtocart = () => {
  //   dispatch(UpdateProducts({ product, qty }));
  // };

  // useEffect(() => {}, []);

  return (
    <div className="pt-3 hover:pt-0 transition-all    duration-500 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:shadow-sky-500">
      <div>
        <a className="block">
          <div className="relative group">
            <img
              src={images[0].url}
              alt={title.length > 30 ? title.substring(0, 10) : title}
              className="md:w-full lg:h-[250px] w-[170px] sm:w-[200px]  object-cover"
            />
            <div className="absolute top-1 left-1 bg-purple-950 text-white text-xs px-3 py-1 rounded-lg">
              Sale 12% Off
            </div>
          </div>
          <div className="hidden group-hover:flex">
            <img
              src="https://nomi.pk/wp-content/uploads/2024/07/3-3.png"
              alt={title.length > 30 ? title.substring(0, 10) : title}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </a>
      </div>
      <div className="p-3 lg:p-5">
        <a className="text-sm text-blue-500 hover:underline">
          {/* Dummy Category or replace with actual category */}
          {category}
        </a>
        <div className="mt-2">
          <a className="text-lg font-semibold text-gray-900 hover:underline">
            {title.length > 30 ? title.substring(0, 10) : title}
          </a>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-gray-500 line-through">
            <span className="text-sm">₨ {price + 500}</span>{" "}
            {/* Example of original price */}
          </div>
          <div className="text-gray-900 font-bold">
            <span className="text-lg">₨ {price}</span>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Rating: {rating} ({numOfReviews} reviews)
          </p>
        </div>
      </div>
      <div className="my-4 w-[90%] mx-auto">
        <button className="block w-full text-center bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-sky-700">
          View Options
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
