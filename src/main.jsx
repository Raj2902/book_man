import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Error.jsx";
import BookList from "./Components/BookList.jsx";
import BookDetails from "./Components/BookDetails.jsx";
import BrowseBooks from "./Components/BrowseBooks.jsx";
import AddBook from "./Components/AddBook.jsx";
import { Provider } from "react-redux";
import appStore from "../utils/Redux/store.js";
import Category from "./Components/Category.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <BookList />,
      },
      {
        path: "/home/browse-books",
        element: <BrowseBooks />,
      },
      {
        path: "/home/add-book",
        element: <AddBook />,
      },
      {
        path: "/home/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/home/category/:category",
        element: <Category />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
