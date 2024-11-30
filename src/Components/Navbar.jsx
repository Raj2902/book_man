import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/home/browse-books">
          <li>Browse Books</li>
        </Link>
        <Link to="/home/add-book">
          <li>Add Book</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
