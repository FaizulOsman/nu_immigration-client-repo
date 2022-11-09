import { createBrowserRouter } from "react-router-dom";
import AddReview from "../components/AddReview";
import AddService from "../components/AddService";
import Blog from "../components/Blog";
import Home from "../components/Home";
import Login from "../components/Login";
import MyReviews from "../components/MyReviews";
import Register from "../components/Register";
import Services from "../components/Services";
import SingleService from "../components/SingleService";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/threeservices"),
        element: <Home></Home>,
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/services",
        loader: () => fetch("http://localhost:5000/services"),
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <SingleService></SingleService>,
      },
      {
        path: "/addreview/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        loader: () => fetch(`http://localhost:5000/reviews`),
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        loader: () => fetch(`http://localhost:5000/blogs`),
        element: <Blog></Blog>,
      },
    ],
  },
]);
