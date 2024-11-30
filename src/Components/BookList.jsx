import BookComponent from "./Book";
import { useSelector } from "react-redux";

export default function BookList(props) {
  const totalBooks = useSelector((state) => state.books);
  const famousBooks = totalBooks.filter((item) => item.rating >= 4);
  return (
    <>
      <h1 className="welcome">Welcome</h1>
      <div className="book-list-section">
        <h2 className="pbooksHeading">Popular Books</h2>
        <div className="popular-book-list">
          <div className="caoursel">
            {famousBooks.length > 0 ? (
              famousBooks.map((book) => {
                return (
                  <BookComponent
                    key={book.id}
                    className="bookClick"
                    data={book}
                  />
                );
              })
            ) : (
              <p className="no-books">There aren't any famous books to show.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
