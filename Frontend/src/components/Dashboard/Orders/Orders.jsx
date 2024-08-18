import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { TbEdit, TbTrash, TbEye } from "react-icons/tb";

const initialOrders = [
  {
    id: 1,
    customerName: "John Doe",
    product: "Motor",
    quantity: 2,
    totalPrice: 8000,
    orderDate: "2024-08-01",
    status: "Pending", // Added status
  },
  // Add more sample orders as needed
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formData, setFormData] = useState({
    id: "",
    customerName: "",
    product: "",
    quantity: "",
    totalPrice: "",
    orderDate: "",
    status: "", // Added status
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewOrder, setViewOrder] = useState(null); // State to handle view details

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleAddOrder = (e) => {
    e.preventDefault();
    if (isEditing) {
      setOrders(
        orders.map((o) => (o.id === editId ? { ...formData, id: editId } : o))
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setOrders([...orders, { ...formData, id: orders.length + 1 }]);
    }
    setFormData({
      id: "",
      customerName: "",
      product: "",
      quantity: "",
      totalPrice: "",
      orderDate: "",
      status: "",
    });
  };

  const handleEditOrder = (order) => {
    setFormData(order);
    setIsEditing(true);
    setEditId(order.id);
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const handleCancelOrder = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: "Cancelled" } : order
      )
    );
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.customerName.toLowerCase().includes(searchQuery) ||
      order.product.toLowerCase().includes(searchQuery)
  );

  const handleViewOrder = (order) => {
    setViewOrder(order);
  };

  const closeViewOrder = () => {
    setViewOrder(null);
  };

  return (
    <div className="bg-white p-10 rounded-lg px-40 tracking-tighter text-left">
      <div className="top border-b flex gap-10 pb-10">
        <div className="box flex gap-5 bg-blue-950 w-fit p-10 text-3xl text-white rounded-lg">
          <span>Total Orders :</span>
          <span className="font-extrabold">{orders.length}</span>
        </div>
        <div className="Searchandfilter flex-1">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-sky-100 flex justify-between p-3 h-fit w-full"
          >
            <input
              type="text"
              className="bg-transparent outline-none border-none w-full"
              placeholder="Search Orders..."
              onChange={handleSearchChange}
            />
            <button>
              <BiSearch />
            </button>
          </form>
        </div>
      </div>

      {isEditing ? (
        <form
          onSubmit={handleAddOrder}
          className="bg-sky-100 p-5 rounded-lg mt-10"
        >
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            placeholder="Customer Name"
            className="p-2 m-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleInputChange}
            placeholder="Product"
            className="p-2 m-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            placeholder="Quantity"
            className="p-2 m-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="totalPrice"
            value={formData.totalPrice}
            onChange={handleInputChange}
            placeholder="Total Price"
            className="p-2 m-2 border border-gray-300 rounded"
          />
          <input
            type="date"
            name="orderDate"
            value={formData.orderDate}
            onChange={handleInputChange}
            placeholder="Order Date"
            className="p-2 m-2 border border-gray-300 rounded"
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="p-2 m-2 border border-gray-300 rounded"
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg"
          >
            {isEditing ? "Update Order" : "Add Order"}
          </button>
        </form>
      ) : (
        ""
      )}

      <div className="bottom mt-10">
        <table className="w-full h-auto border p-5">
          <thead>
            <tr className="border-b-2 p-5 text-xl font-semibold">
              <th>Id</th>
              <th>Customer Name</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="w-full h-auto">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="h-20 border-b">
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.totalPrice}</td>
                <td>{order.orderDate}</td>
                <td>{order.status}</td>
                <td className="space-x-10">
                  <button onClick={() => handleViewOrder(order)}>
                    <TbEye
                      size={20}
                      className="text-blue-600 hover:scale-[1.5] transition-all duration-300"
                    />
                  </button>
                  <button onClick={() => handleEditOrder(order)}>
                    <TbEdit
                      size={20}
                      className="text-yellow-600 hover:scale-[1.5] transition-all duration-300"
                    />
                  </button>
                  <button onClick={() => handleCancelOrder(order.id)}>
                    <TbTrash
                      size={20}
                      className="text-red-600 hover:scale-[1.5] transition-all duration-300"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal to view order details */}
      {viewOrder && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-20 rounded-lg w-[30%] ">
            <h2 className="text-3xl font-bold mb-4">Order Details</h2>
            <p className="flex justify-between">
              <strong>Order ID:</strong> <span>{viewOrder.id}</span>
            </p>
            <p className="flex justify-between">
              <strong>Customer Name:</strong>{" "}
              <span>{viewOrder.customerName}</span>
            </p>
            <p className="flex justify-between">
              <strong>Product:</strong> <span>{viewOrder.product}</span>
            </p>
            <p className="flex justify-between">
              <strong>Quantity:</strong> <span>{viewOrder.quantity}</span>
            </p>
            <p className="flex justify-between">
              <strong>Total Price:</strong> <span>{viewOrder.totalPrice}</span>
            </p>
            <p className="flex justify-between">
              <strong>Order Date:</strong> <span>{viewOrder.orderDate}</span>
            </p>
            <p className="flex justify-between">
              <strong>Status:</strong> <span>{viewOrder.status}</span>
            </p>
            <button
              onClick={closeViewOrder}
              className="bg-red-500 text-white p-2 px-5 rounded-lg mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
