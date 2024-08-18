import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  DecreaseQuantity,
  DrawerOpener,
  IncreaseQuantity,
  removeaProduct,
} from "../../redux/feactures/drawerSlice";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { isOpen } = useSelector((state) => state.drawer);
  const { products } = useSelector((state) => state.drawer);

  const dispatch = useDispatch();

  const toggleDrawer = () => {
    dispatch(DrawerOpener({ isOpen: !isOpen }));
  };

  // Calculate the total bill
  const calculateTotalBill = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.Quantity;
    }, 0);
  };

  return (
    <div>
      <div
        className={
          isOpen
            ? "fixed top-0 bg-black z-30 w-full h-full opacity-50 transition-all duration-500"
            : "fixed right-[-10000px] bg-black z-30 w-full h-full opacity-0 transition-all duration-500"
        }
        onClick={toggleDrawer}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-full lg:w-[500px] h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute top-4 right-4 text-2xl text-gray-700"
        >
          <FaTimes />
        </button>
        <div className="p-5">
          <h2 className="text-xl font-bold mb-4">Cart Details</h2>
          {/* Cart items go here */}
          <div className="items">
            {products && products.length > 0 ? (
              products.map((product) => (
                <div className="item flex mb-4" key={product._id}>
                  <img
                    src={product.images[0].url}
                    alt="Product"
                    className="w-40"
                  />
                  <div className="details flex flex-col justify-center items-center w-full">
                    <h3 className="font-bold">
                      {product.title.length > 20
                        ? product.title.substring(0, 60) + "...."
                        : product.title}
                    </h3>
                    <p>Price: Rs {product.price}</p>
                    <div className="quantity-controller flex items-center mt-2">
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => dispatch(DecreaseQuantity({ product }))}
                        disabled={product.Quantity <= 1} // Disable decrement if quantity is 1 or less
                      >
                        -
                      </button>
                      <span className="mx-2 text-lg">{product.Quantity}</span>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => dispatch(IncreaseQuantity({ product }))}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-sm btn-danger mt-2"
                      onClick={() => {
                        dispatch(removeaProduct({ product }));
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center mt-40 text-xl">
                <h1>Cart is Empty</h1>
              </div>
            )}
          </div>
          <div
            className="absolute bottom-20 right-10  cart bg-slate-950 text-3xl text-yellow-300 p-4 w-fit rounded-3xl "
            onClick={toggleDrawer}
          >
            <BiCartAlt />
          </div>

          {/* Total Bill Section */}
          <div className="total-bill mt-6 border-t pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Bill:</span>
              <span>Rs {calculateTotalBill().toFixed(2)}</span>
            </div>
            {calculateTotalBill() > 0 ? (
              <Link
                to={"/orderNow"}
                className="w-full flex justify-between bg-blue-950 text-white p-4 text-xl rounded-md hover:bg-sky-700 font-semibold"
              >
                <span>Checkout :</span>
                <span>{calculateTotalBill().toFixed(2)}</span>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
