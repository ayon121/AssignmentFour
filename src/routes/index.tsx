import App from "@/App";
import AddBookPage from "@/pages/AddBookPage";
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
    ]
  },
]);

export default router