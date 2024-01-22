import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CreateCategory from "./Pages/Admin/CreateCategory";
import GetCategories from "./Pages/Admin/GetCategories";
import UpdateCategory from "./Pages/Admin/UpdateCategory";
import Products from "./Pages/Products";
import CreateProduct from "./Pages/Admin/CreateProduct";
import Admin from "./Pages/Admin/Admin";
import GetProducts from "./Pages/Admin/GetProducts";
import UpdateProduct from "./Pages/Admin/UpdateProduct";
import Contact from "./Pages/Contact";
import Login from "./Pages/Admin/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:id" element={<Products />} />

      <Route path="/admin/">
        <Route path="login" element={<Login />} />
        <Route path="" element={<Admin />} />
        <Route path="categories/">
          <Route path="update-category/:id" element={<UpdateCategory />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="get-categories" element={<GetCategories />} />
        </Route>
        <Route path="products/">
          <Route path="get-products" element={<GetProducts />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="update-product/:id" element={<UpdateProduct />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
