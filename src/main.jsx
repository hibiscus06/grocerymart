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
import Cart from "./components/cart/Cart.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import SearchCard from "./components/products/SearchCard.jsx";
import BlogSingle from "./components/blogs/BlogSingle.jsx";

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
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/search",
    element: <SearchCard />,
  },
  {
    path: "/singleBlogPage",
    element: <BlogSingle />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
