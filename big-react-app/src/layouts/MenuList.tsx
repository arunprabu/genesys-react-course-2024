import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

//  Functional component with Arrow function
const MenuList: React.FC = () => {
  const { logout, isAuthenticated } = useAuth();

  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <Link className="nav-link active" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about-us">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact-us">
          Contact Us
        </Link>
      </li>

      {!isAuthenticated ? (
        <li className="nav-item">
          <Link className="nav-link" to="/auth/login">
            Login
          </Link>
        </li>
      ) : (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/netflix">
              Netflix
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              Manage Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todos">
              Todos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-link text-secondary"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          </li>
        </>
      )}
    </ul>
  );
};

export default MenuList;
