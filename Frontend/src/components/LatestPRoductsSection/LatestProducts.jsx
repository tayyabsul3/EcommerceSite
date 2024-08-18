import React, { Fragment, useEffect, useState } from "react";
import Heading from "../Resuables/Heading";
import ProductCard from "../Resuables/ProductCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProduct } from "../../redux/functions/product";
import { Link } from "react-router-dom";
const LatestProducts = () => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.product);
  const { product } = useSelector((state) => state.productDetails);

  useEffect(() => {
    getProduct(dispatch);
    if (error) {
      alert(`${error}`);
    }
  }, [error]);

  return (
    <div className="mt-20">
      <Heading text={"Latest Products"} />
      <div className="products justify-center lg:justify-start flex gap-2 lg:gap-5 flex-wrap pl-2 lg:w-[80%] mx-auto ">
        <Fragment>
          {products &&
            products.map((product) => (
              <Link to={`/${product._id}`} key={product._id}>
                <ProductCard key={product._id} product={product} />
              </Link>
            ))}
        </Fragment>
      </div>
    </div>
  );
};

export default LatestProducts;
