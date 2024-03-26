import { Link } from "react-router-dom";

//  Functional component with Arrow function
const MenuList: React.FC = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <Link className="nav-link active" to="/">
          Home
        </Link>
      </li>
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
        <Link className="nav-link" to="/about-us">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact-us">
          Contact Us
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );
};

export default MenuList;
