import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();
  const books = useSelector((data) => data.books);
  const isValid = useRef(0);
  const [uniqueMessage, setUniqueMessage] = useState(false);

  const checkId = (id) => {
    let filteredById = books.filter((element) => element.id == id);
    return filteredById.length > 0 ? false : true;
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    isValid.current = 0;
    const form = document.getElementById("addBookForm");
    let formObj = {};
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      if (key === "publishedYear") {
        formObj[key] = value.split("-")[0];
        isValid.current++;
      } else if (key == "id") {
        if (checkId(value)) {
          formObj[key] = value;
          isValid.current++;
        }
      } else {
        formObj[key] = value;
        isValid.current++;
      }
    });
    let booksInLocalStorage = JSON.parse(localStorage.getItem("data"));
    if (isValid.current != 8) {
      setUniqueMessage(true);
    } else {
      setUniqueMessage(false);
      if (booksInLocalStorage && booksInLocalStorage.length > 0) {
        booksInLocalStorage.unshift(formObj);
      } else {
        booksInLocalStorage = new Array();
        booksInLocalStorage.push(formObj);
      }
      localStorage.setItem("data", JSON.stringify(booksInLocalStorage));
      navigate("/browse-books");
    }
  };

  return (
    <div className="add-book">
      <form id="addBookForm" onSubmit={handleAddBook}>
        <label htmlFor="author">Author Name:</label>
        <input type="text" id="author" name="author" required />
        <label htmlFor="published_year">Published Date:</label>
        <input
          type="date"
          max={(() => {
            const date = new Date();
            const year = String(date.getFullYear());
            const month = String(Number(date.getMonth()) + 1);
            const day = String(date.getDate());
            const fullDate = `${year}-${month > 9 ? month : `0${month}`}-${
              day > 9 ? day : `0${day}`
            }`;
            return `${fullDate}`;
          })()}
          id="published_year"
          name="publishedYear"
          required
        />
        <label htmlFor="title">Book Title:</label>
        <input type="text" id="title" name="title" required />
        <label htmlFor="description">Book Description:</label>
        <textarea id="description" name="desc" required></textarea>
        <label htmlFor="imageUrl">Image URL:</label>
        <input type="url" id="imageUrl" name="image" />
        <label htmlFor="bookId">Book ID:</label>
        <input type="number" id="bookId" name="id" required />
        {uniqueMessage && <p className="error">*Book ID should be unique.</p>}
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="1"
          max="5"
          required
        />
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default AddBook;
