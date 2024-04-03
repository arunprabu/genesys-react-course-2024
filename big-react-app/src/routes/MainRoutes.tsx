import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense, lazy } from "react";

import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ProtectedRoutes from "./ProtectedRoutes";

// Lazy Loading the following components
const NetflixPage = lazy(() => import("../pages/NetflixPage/NetflixPage"));
const UsersPage = lazy(() => import("../pages/UsersPage/UsersPage"));
const AddUser = lazy(() => import("../pages/UsersPage/AddUser"));
const UserDetails = lazy(() => import("../pages/UsersPage/UserDetails"));
const EditUserDetails = lazy(
  () => import("../pages/UsersPage/EditUserDetails")
);
const TodosPage = lazy(() => import("../pages/TodosPage/TodosPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage/ProductsPage"));
const AdminPage = lazy(() => import("../pages/AdminPage/AdminPage"));

const MainRoutes = () => {
  return (
    <Suspense
      fallback={
        <div
          className="text-center spinner-border text-success"
          role="status"
        ></div>
      }
    >
      <ErrorBoundary
        fallback={
          <div className="alert alert-danger">
            Something went wrong! Try again later. If the issue persists, reach
            out admin@example.com
          </div>
        }
      >
        <Routes>
          {/* The following URLs should be accessible publicly */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route
            path="/auth/"
            element={<Navigate to="/auth/login" replace />}
          />

          {/* The following URLs need login  -- Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/netflix" element={<NetflixPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/add" element={<AddUser />} />
            {/* Setting up routing config with url param -- userId is the url param */}
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="/users/:userId/edit" element={<EditUserDetails />} />

            <Route path="/todos" element={<TodosPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

export default MainRoutes;
