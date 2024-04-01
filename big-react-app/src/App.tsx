// This is a component -- reusable block of code
/** skeleton of the component
 * component can have imports,
 * must have a function which returns JSX
 * must have export
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage/HomePage";
import NetflixPage from "./pages/NetflixPage/NetflixPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import AddUser from "./pages/UsersPage/AddUser";
import UserDetails from "./pages/UsersPage/UserDetails";
import EditUserDetails from "./pages/UsersPage/EditUserDetails";
import TodosPage from "./pages/TodosPage/TodosPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import { CartProvider } from "./contexts/CartContext";

const App: React.FC = () => {
  // App component is the ideal place for us to build the layout
  // returns JSX
  return (
    <BrowserRouter>
      <CartProvider>

        <Header></Header>
        <main className="container mt-5 pt-2">
          {/* configure the routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/netflix" element={<NetflixPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/add" element={<AddUser />} />
            {/* Setting up routing congi with url param -- userId is the url param */}
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="/users/:userId/edit" element={<EditUserDetails />} />

            <Route path="/todos" element={<TodosPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about-us" element={<AboutPage />} />
          </Routes>
        </main>
        
      </CartProvider>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
