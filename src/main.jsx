import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About.jsx";
import Products from "./components/products/Products.jsx";
import Blogs from "./components/blogs/Blogs.jsx";
import Contact from "./components/contact/Contact.jsx";
import ProductsCategory from "./components/products/ProductsCategory.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product",
    element: <Products />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/product/:category",
    element: <ProductsCategory />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
