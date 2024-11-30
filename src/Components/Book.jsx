import { Link } from "react-router-dom";

export default function BookComponent(props) {
  const { id, title, author, publishedYear, image, category, desc, rating } =
    props.data;
  return (
    <div className="book-card">
      <span className="rating">
        <i className="fa fa-star" aria-hidden="true"></i>
        {rating}
      </span>
      <img
        src={image ? image : `/images/no-image.jpg`}
        alt="book-coverImage"
        width="200px"
        height="200px"
        className="book-cover"
      />
      <div className="book-details">
        <p className="book-title">
          {title} ({category})
        </p>
        <p className="book-author">{author}</p>
        <p className="book-description">{desc.slice(0, 70) + "..."}</p>
        <p className="book-details-link">
          <Link to={`/books/book-details/${id}`}>View Details</Link>
        </p>
      </div>
    </div>
  );
}
