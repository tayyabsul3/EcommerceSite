import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ProductDetailPage from "./components/Resuables/ProductDetailPage.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Auth from "./components/Auth/Auth.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import CartDrawer from "./components/Header/CartDrawer.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Ordernow from "./components/ShippingDetails/Ordernow.jsx";
import Profile from "./components/Dashboard/Profile/Profile.jsx";
import Products from "./components/Dashboard/Products/Products.jsx";
import Orders from "./components/Dashboard/Orders/Orders.jsx";
import Allproducts from "./components/AllProducts/Allproducts.jsx";

function Layout() {
  return (
    <div>
      <Header />
      <CartDrawer />
      <Outlet />
      <Footer />
    </div>
  );
}

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <App /> },
      {
        path: "/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "orderNow",
        element: <Ordernow />,
      },
      {
        path: "allproducts",
        element: <Allproducts />,
      },
    ],
  },
  {
    path: "Auth",
    element: <Auth />,
  },
  {
    path: "dashboard",
    element: (
      <Dashboard>
        <Outlet />
      </Dashboard>
    ),
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "shipping",
        element: <Footer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
