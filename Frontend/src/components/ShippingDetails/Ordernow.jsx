// import React from "react";
// import { BiArrowToLeft } from "react-icons/bi";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Ordernow = () => {
//   const { products } = useSelector((state) => state.drawer);
//   const calculateTotalBill = () => {
//     return products.reduce((total, product) => {
//       return total + product.price.discounted * product.Quantity;
//     }, 0);
//   };
//   return (
//     <div className="w-[80%] mx-auto my-40 flex  gap-10">
//       <div className="couponandnext shadow-lg p-10">
//         <div className="coupon flex gap-5 py-10  items-center">
//           <h1>Have a Coupon ?</h1>
//           <input
//             type="text"
//             placeholder="Enter Coupon Code here"
//             className="bg-gray-100 p-2 rounded-md"
//           />
//         </div>
//         <button className="bg-blue-950 text-white p-3 rounded-md font-semibold hover:bg-sky-500">
//           Next Step
//         </button>
//       </div>
//       <div className="orderSummaery bg-blue-950 shadow-lg rounded-md text-white">
//         <h1 className="text-black font-bold text-center p-2 text-xl underline">
//           Order Summary
//         </h1>
//         <div className="items">
//           {products.map((product) => (
//             <div className="item p-5 border-b">
//               <h1 className="font-bold">Name : {product.name}</h1>
//               <span className="mr-8">Price : {product.price.discounted}</span>
//               <span>Quantity : {product.Quantity}</span>
//             </div>
//           ))}
//         </div>
//         <div className="total p-5 flex justify-between items-center">
//           <h1 className="font-bold text-xl">Total : </h1>
//           <p>Rs {calculateTotalBill().toFixed(2)}</p>
//         </div>
//         <Link to={"/"} className="flex items-center gap-1 p-2">
//           <FaArrowLeft size={13} />
//           <span>Continue Shopping</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Ordernow;

import React, { useState } from "react";
import { BiArrowToLeft } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProgressStep = ({ number, title, isSelected }) => {
  return (
    <div className="flex items-center">
      <div
        className={`rounded-full h-8 w-8 flex items-center justify-center ${
          isSelected ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
        }`}
      >
        {number}
      </div>
      <div className={`ml-2 ${isSelected ? "text-blue-500" : "text-gray-800"}`}>
        {title}
      </div>
    </div>
  );
};

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <ProgressStep number="1" title="Coupon" isSelected={currentStep >= 1} />
      <div
        className={`flex-1 h-1 ${
          currentStep >= 2 ? "bg-blue-500" : "bg-gray-100"
        }`}
      ></div>
      <ProgressStep
        number="2"
        title="Billing & Shipping"
        isSelected={currentStep >= 2}
      />
      <div
        className={`flex-1 h-1 ${
          currentStep >= 3 ? "bg-blue-500" : "bg-gray-100"
        }`}
      ></div>
      <ProgressStep number="3" title="Payment" isSelected={currentStep >= 3} />
    </div>
  );
};

const CheckoutComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { products } = useSelector((state) => state.drawer);
  const [differentAddress, setDifferentAddress] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    houseNumber: "",
    town: "",
    state: "",
    postalCode: "",
    email: "",
    category: "Category 1",
    differentAddress: false,
    differentAddressDetails: "",
  });
  const provinces = [
    "Punjab",
    "Sindh",
    "Khyber Pakhtunkhwa",
    "Balochistan",
    "Gilgit-Baltistan",
    "Azad Jammu and Kashmir",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Country / Region: ${formData.country}
      Street Address: ${formData.streetAddress}
      House Number and Street Name: ${formData.houseNumber}
      Town / City: ${formData.town}
      State / County: ${formData.state}
      Postal Code: ${formData.postalCode}
      Email Address: ${formData.email}
      Category: ${formData.category}
      Ship to Different Address: ${formData.differentAddress}
      Different Address Details: ${formData.differentAddressDetails}
    `);
  };

  const calculateTotalBill = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.Quantity;
    }, 0);
  };

  return (
    <div className="w-[80%] mx-auto my-80">
      <ProgressBar currentStep={currentStep} />
      {currentStep === 1 && (
        <div className="flex gap-20 justify-center my-20 ">
          <div className="couponandnext shadow-lg p-10">
            <div className="coupon flex gap-5 py-10 items-center">
              <h1>Have a Coupon?</h1>
              <input
                type="text"
                placeholder="Enter Coupon Code here"
                className="bg-gray-100 p-2 rounded-md"
              />
            </div>
            <button
              className="bg-blue-950 text-white p-3 rounded-md font-semibold hover:bg-sky-500"
              onClick={() => setCurrentStep(2)}
            >
              Next Step
            </button>
          </div>
          <div className="orderSummaery bg-blue-950 p-10 shadow-lg rounded-md text-white">
            <div className="items">
              {products.map((product) => (
                <div className="item p-5 border-b">
                  <h1 className="font-semibold">
                    <span> Name : {product.title}</span>{" "}
                    <span className="font-bold">x {product.Quantity}</span>
                  </h1>

                  <span className="mr-8">Price : {product.price}</span>
                </div>
              ))}
            </div>
            <div className="total p-5 flex justify-between items-center">
              <h1 className="font-semibold text-xl">Total : </h1>
              <p className="font-extrabold">
                Rs {calculateTotalBill().toFixed(2)}
              </p>
            </div>
            <Link to={"/"} className="flex items-center gap-1 p-2">
              <FaArrowLeft size={13} />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className="flex gap-20">
          <div className="billing-shipping h-fit shadow-lg p-10">
            <h2 className="text-lg font-bold mb-2">Billing & Shipping</h2>
            {/* Add Billing & Shipping form fields here */}
            <div className="mt-4 flex justify-between items-center gap-5">
              <button
                className="bg-blue-950 text-white p-3 rounded-md font-semibold hover:bg-sky-500 "
                onClick={() => {
                  setCurrentStep(3);

                  handleSubmit();
                }}
              >
                Next Step
              </button>
              {currentStep > 1 && (
                <button
                  className="bg-gray-500 text-white p-3 h-fit rounded"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Previous
                </button>
              )}
            </div>
          </div>
          <div className="orderSummaery h-fit bg-blue-950 p-10 shadow-lg rounded-md text-white">
            <div className="items">
              {products.map((product) => (
                <div className="item p-5 border-b">
                  <h1 className="font-semibold">
                    <span> Name : {product.name}</span>{" "}
                    <span className="font-bold">x {product.Quantity}</span>
                  </h1>

                  <span className="mr-8">
                    Price : {product.price.discounted}
                  </span>
                </div>
              ))}
            </div>
            <div className="total p-5 flex justify-between items-center">
              <h1 className="font-semibold text-xl">Total : </h1>
              <p className="font-extrabold">
                Rs {calculateTotalBill().toFixed(2)}
              </p>
            </div>
            <Link to={"/"} className="flex items-center gap-1 p-2">
              <FaArrowLeft size={13} />
              <span>Continue Shopping</span>
            </Link>
          </div>
          <form className="shadow-lg flex-1  p-10" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
            <div className="flex w-full justify-between gap-5">
              <div className="mb-4 flex-auto">
                <label className="block text-gray-700">First name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4 flex-auto">
                <label className="block text-gray-700">
                  Last name (optional)
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            {/* COuntry */}
            <div className="flex gap-5">
              <div className="mb-4 flex-auto">
                <label className="block text-gray-700">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4 flex-auto">
                <label className="block text-gray-700"> City *</label>
                <input
                  type="text"
                  name="town"
                  value={formData.town}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="mb-4 flex-auto">
                <label className="block text-gray-700">Postal Code *</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4 flex-auto">
                <label className="block text-gray-700">
                  Email address (optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Province </label>
              <select
                name="state"
                value={formData.province}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select a province</option>
                {provinces.map((province, index) => (
                  <option key={index} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Street address *</label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                House number and street name
              </label>
              <input
                type="text"
                name="houseNumber"
                value={formData.houseNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Categories</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                <input
                  type="checkbox"
                  name="differentAddress"
                  checked={formData.differentAddress}
                  onChange={handleChange}
                />
                Ship to a different address?
              </label>
            </div>
            {formData.differentAddress && (
              <div className="mb-4">
                <label className="block text-gray-700">
                  Different Address Details
                </label>
                <input
                  type="text"
                  name="differentAddressDetails"
                  value={formData.differentAddressDetails}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            )}
            <div className="flex justify-between"></div>
          </form>
        </div>
      )}
      {currentStep === 3 && (
        <div className="payment shadow-lg p-10">
          <h2 className="text-lg font-bold mb-2">Payment</h2>
          {/* Add Payment form fields here */}
          <button
            className="bg-blue-950 text-white p-3 rounded-md font-semibold hover:bg-sky-500 mt-4"
            onClick={() => setCurrentStep(4)}
          >
            Complete Order
          </button>
          <button
            className="bg-gray-500 text-white p-3 h-fit rounded"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Previous
          </button>
        </div>
      )}
      {currentStep === 4 && (
        <div className="order-summary bg-blue-950 shadow-lg rounded-md text-white p-10">
          <h1 className="text-black font-bold text-center p-2 text-xl underline">
            Order Summary
          </h1>
          <div className="items">
            {products.map((product) => (
              <div className="item p-5 border-b" key={product.id}>
                <h1 className="font-bold">Name: {product.name}</h1>
                <span className="mr-8">Price: {product.price.discounted}</span>
                <span>Quantity: {product.Quantity}</span>
              </div>
            ))}
          </div>
          <div className="total p-5 flex justify-between items-center">
            <h1 className="font-bold text-xl">Total:</h1>
            <p>Rs {calculateTotalBill().toFixed(2)}</p>
          </div>
          <Link to="/" className="flex items-center gap-1 p-2">
            <FaArrowLeft size={13} />
            <span>Continue Shopping</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutComponent;
