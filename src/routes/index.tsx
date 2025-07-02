import App from "@/App";
import AddBookPage from "@/pages/AddBookPage";
import BookDetailsPage from "@/pages/BookDetailsPage";
import Books from "@/pages/Books";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
        {
            path : "/books",
            element : <Books></Books>
        },
        {
            path : "/create-book",
            element : <AddBookPage></AddBookPage>
        },
        {
            path : "/books/:id",
            element : <BookDetailsPage></BookDetailsPage>
        },
    ]
  },
]);

export default router