import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookComponent from "./Book";

function Category() {
  const params = useParams();
  const books = useSelector((data) => data.books).filter(
    (item) => item.category.toLowerCase() === params.category.toLowerCase()
  );
  return (
    <div className="book-list category">
      {books.length > 0 ? (
        books.map((book) => <BookComponent key={book.id} data={book} />)
      ) : (
        <p className="no-books">
          There isn't any such book with us for this category selection.
        </p>
      )}
    </div>
  );
}
export default Category;
