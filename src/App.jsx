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
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<Spinner />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="/products/:id"
        element={
          <Suspense fallback={<Spinner />}>
            <Products />
          </Suspense>
        }
      />

      <Route path="/admin/">
        <Route
          path="login"
          element={
            <Suspense fallback={<Spinner />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path=""
          element={
            <Suspense fallback={<Spinner />}>
              <Admin />
            </Suspense>
          }
        />
        <Route path="categories/">
          <Route
            path="update-category/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <UpdateCategory />
              </Suspense>
            }
          />
          <Route
            path="create-category"
            element={
              <Suspense fallback={<Spinner />}>
                <CreateCategory />
              </Suspense>
            }
          />
          <Route
            path="get-categories"
            element={
              <Suspense fallback={<Spinner />}>
                <GetCategories />
              </Suspense>
            }
          />
        </Route>
        <Route path="products/">
          <Route
            path="get-products"
            element={
              <Suspense fallback={<Spinner />}>
                <GetProducts />
              </Suspense>
            }
          />
          <Route
            path="create-product"
            element={
              <Suspense fallback={<Spinner />}>
                <CreateProduct />
              </Suspense>
            }
          />
          <Route
            path="update-product/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <UpdateProduct />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
