import BookComponent from "./Book";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setBook } from "../../utils/Redux/reducer";

function BrowseBooks() {
  const [inputSearch, setInputSearch] = useState("");

  const dispatch = useDispatch();
  //started making changes
  const booksInLocalStrorage = localStorage.getItem("data")
    ? localStorage.getItem("data")
    : [];
  const booksWithFilter = useSelector((state) => state.books).filter(
    (item) =>
      item.title.toLowerCase().includes(inputSearch) ||
      item.author.toLowerCase().includes(inputSearch)
  );
  function handleSubmit() {
    setInputSearch(document.getElementById("search-input").value.toLowerCase());
  }

  useEffect(() => {
    if (booksInLocalStrorage.length > 0) {
      dispatch(setBook(JSON.parse(booksInLocalStrorage)));
    } else {
      dispatch(setBook([]));
    }
  }, []);

  return (
    <>
      <div className="searches">
        <div className="search">
          <h2>Search Books</h2>
          <div className="search-field">
            <input
              type="text"
              className="search-input"
              name="search-input"
              id="search-input"
              placeholder="Search by title or author"
            />
            <button onClick={handleSubmit}>Search</button>
          </div>
        </div>
      </div>
      <div className="book-list">
        {booksWithFilter.length > 0 ? (
          booksWithFilter.map((book) => {
            return (
              <BookComponent key={book.id} className="bookClick" data={book} />
            );
          })
        ) : (
          <p className="no-books">There aren't any books to show.</p>
        )}
      </div>
    </>
  );
}
export default BrowseBooks;
