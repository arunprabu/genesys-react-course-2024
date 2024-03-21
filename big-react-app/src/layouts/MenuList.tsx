//  Functional component with Arrow function 
const MenuList: React.FC = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">Contact Us</a>
      </li>
    </ul>
  );
}

export default MenuList;