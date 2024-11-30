import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function BookDetails() {
  const params = useParams();
  const books = useSelector((data) => data.books);
  const book = books.filter((book) => book.id == params.id);
  return (
    <div className="BooKDetails">
      {book.length > 0 ? (
        book.map((data) => {
          return (
            <div key={data.id} className="card-center">
              <div className="book-card increased-card-height">
                <span className="rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  {data.rating}
                </span>
                <img
                  src={data.image ? data.image : `/images/no-image.jpg`}
                  alt="book-coverImage"
                  width="200px"
                  height="200px"
                  className="book-cover"
                />
                <div className="book-details">
                  <p className="book-title">
                    {data.title} ({data.category})
                  </p>
                  <p className="book-author">{data.author}</p>
                  <p className="book-publishedYear">{data.publishedYear}</p>
                  <p className="book-description">{data.desc}</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="no-books">
          There isn't any such book with us for this book id.
        </p>
      )}
    </div>
  );
}
export default BookDetails;
