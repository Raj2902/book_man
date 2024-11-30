import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { setBook } from "../utils/Redux/reducer";
import Footer from "./Components/Footer";

function App() {
  // const data = useSelector((state) => state.books);
  // const [filteredData, setFilteredData] = useState(data);
  const dispatch = useDispatch();
  const booksInLocalStrorage = localStorage.getItem("data")
    ? localStorage.getItem("data")
    : [];
  // const books = useSelector((state) => state.books);

  useEffect(() => {
    if (booksInLocalStrorage.length > 0) {
      dispatch(setBook(JSON.parse(booksInLocalStrorage)));
    } else {
      dispatch(setBook([]));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <p className="back-to-browse">
        <Link to="/browse-books">Back to Browse</Link>
      </p>
      <p className="selectCattext">Select Category</p>
      <div className="category-filter">
        {useSelector((data) => data.filters).map((item) => (
          <Link key={item} className="category-tag" to={`/books/${item}`}>
            <button className="category-btn">{item}</button>
          </Link>
        ))}
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
