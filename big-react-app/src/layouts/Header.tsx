// Functional Component with Named Function

import MenuList from "./MenuList";
import { useCart } from "../contexts/CartContext";

/** skeleton of the component
 * component can have imports,
 * must have a function which returns JSX
 * must have export
 */

const Header: React.FC = () => {
  const cartContext = useCart();
  console.log(cartContext);

  // must return JSX
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Big React App!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <MenuList />
            <button className="btn btn-danger">
              Cart ({cartContext?.cartItems.length})
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
