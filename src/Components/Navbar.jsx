import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/books/browse-books">
          <li>Browse Books</li>
        </Link>
        <Link to="/books/add-book">
          <li>Add Book</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
