import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import NetflixPage from "../pages/NetflixPage/NetflixPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import AddUser from "../pages/UsersPage/AddUser";
import UserDetails from "../pages/UsersPage/UserDetails";
import EditUserDetails from "../pages/UsersPage/EditUserDetails";
import TodosPage from "../pages/TodosPage/TodosPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ContactPage from '../pages/ContactPage/ContactPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProtectedRoutes from './ProtectedRoutes';

const MainRoutes = () => {
  return (
    <Routes>
      {/* The following URLs should be accessible publicly */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/" element={<Navigate to="/auth/login" replace />} />

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
      </Route>
    </Routes>
  );
}

export default MainRoutes;
