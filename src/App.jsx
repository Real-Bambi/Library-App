import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

 
import Home from "./pages/Home";
import EditBook from "./pages/EditBook";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import CreateBook from "./pages/CreateBook";
import BookPage from "./pages/BookPage";
import ViewBook from "./pages/ViewBook";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login-page", element: <LoginPage /> },
  { path: "/book-page", element: <BookPage /> },
  { path: "/view-book", element: <ViewBook /> },
  { path: "/edit-book", element: <EditBook /> },
  { path: "/create-book", element: <CreateBook /> },
  { path: "*", element: <NotFound /> },
]);



export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


