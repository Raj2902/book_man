import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: new Array(),
  filters: new Array(),
};

const BookSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    setBook: (state, action) => {
      const categoryListSet = new Set([]);
      action.payload.forEach((item) => categoryListSet.add(item.category));
      const categoryList = [...categoryListSet];
      state.books = action.payload;
      state.filters = categoryList;
    },
  },
});
export const { addBook, setBook } = BookSlice.actions;
export default BookSlice.reducer;
