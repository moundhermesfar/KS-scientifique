import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Spinner from "./Components/Spinner";

const CreateCategory = lazy(() => import("./Pages/Admin/CreateCategory"));
const GetCategories = lazy(() => import("./Pages/Admin/GetCategories"));
const UpdateCategory = lazy(() => import("./Pages/Admin/UpdateCategory"));
const Products = lazy(() => import("./Pages/Products"));
const CreateProduct = lazy(() => import("./Pages/Admin/CreateProduct"));
const Admin = lazy(() => import("./Pages/Admin/Admin"));
const GetProducts = lazy(() => import("./Pages/Admin/GetProducts"));
const UpdateProduct = lazy(() => import("./Pages/Admin/UpdateProduct"));
const Contact = lazy(() => import("./Pages/Contact"));
const Login = lazy(() => import("./Pages/Admin/Login"));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  );
};

export default App;
