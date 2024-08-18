import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import Divider from "./Divider";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProducts } from "../../redux/feactures/drawerSlice";
import { productDetails } from "../../redux/functions/product";

const ProductDetailPage = () => {
  // DEFINITIONS
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  // FUNCTIONS
  const handleMinus = () => {
    setQty(qty > 1 ? qty - 1 : qty);
  };
  const handlePlus = () => {
    setQty(qty + 1);
  };

  const handleAddtocart = () => {
    if (product) {
      dispatch(UpdateProducts({ product, qty }));
      setQty(1);
    }
  };

  useEffect(() => {
    productDetails(dispatch, id);
  }, [dispatch, id]);

  // Check if product is available
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-60 mb-40">
      <div className="breadcrumb whitespace-nowrap flex pl-5 lg:pl-20 gap-1 text-sm items-center mx-auto w-full">
        <Link to="/">
          Home <span className="bg-transparent">/</span>
        </Link>
        <Link to="/">{product.category} </Link>
        <p className="bg-transparent text-[16px] hidden lg:block">
          / {product.title}{" "}
        </p>
      </div>
      <div className="productDetails  flex my-10 mb-20 justify-center items-center flex-col lg:flex-row">
        <div className="left flex-1 ">
          {product.images && product.images[0] && (
            <img src={product.images[0].url} alt="" className="mx-auto" />
          )}
        </div>
        <div className="right flex flex-col gap-10 p-10  flex-1">
          <h1 className="md:text-[3rem] font-semibold text-slate-900">
            {product.title}
          </h1>
          <p className="text-xs md:text-2xl">{product.description}</p>
          <h2 className="space-x-5 ">
            <span className="text-gray-400 md:text-xl line-through ">
              Rs {product.price + 500}{" "}
            </span>
            <span className=" md:text-[2rem] underline font-semibold ">
              Rs {product.price}
            </span>
          </h2>
          <div className="quantity flex gap-2 lg:gap-5 flex-wrap">
            <div className="flex border-2 bg-gray-50 items-center border-sky-400 w-fit lg:py-1 lg:px-5 px-2 gap-10 justify-around rounded-lg ">
              <button>
                <FaMinus
                  className="text-sky-700 cursor-pointer"
                  size={20}
                  onClick={handleMinus}
                />
              </button>
              <p className="font-bold lg:text-[1rem] ">{qty}</p>
              <button>
                <FaPlus
                  className="text-sky-700 cursor-pointer"
                  size={20}
                  onClick={handlePlus}
                />
              </button>
            </div>
            <button
              className="px-10 py-2 lg:text-3xl text-white bg-blue-950 rounded-xl"
              onClick={handleAddtocart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <Divider text={"SIMILAR PRODUCTS"} />
      <div className="SimilarProducts flex items-center justify-center flex-wrap mb-40 gap-2 lg:gap-10">
        {products &&
          products.map((product) => (
            <Link to={`/${product._id}`} key={product._id}>
              <ProductCard key={product._id} product={product} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProductDetailPage;
