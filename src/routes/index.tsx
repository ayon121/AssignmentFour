import App from "@/App";
import AddBookPage from "@/pages/AddBookPage";
import AllBorrowSummaryPage from "@/pages/AllBorrowSummaryPage";
import BookDetailsPage from "@/pages/BookDetailsPage";
import Books from "@/pages/Books";
import EditBookPage from "@/pages/EditBookPage";
import LandingPage from "@/pages/LandingPage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
        {
            path : "/",
            element : <LandingPage></LandingPage>
        },
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
        {
            path : "/edit-book/:id",
            element : <EditBookPage></EditBookPage>
        },
        {
            path : "/borrow-summary",
            element : <AllBorrowSummaryPage></AllBorrowSummaryPage>
        },
    ]
  },
]);

export default router