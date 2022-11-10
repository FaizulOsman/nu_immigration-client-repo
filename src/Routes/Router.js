import { createBrowserRouter } from "react-router-dom";
import AddReview from "../components/AddReview";
import AddService from "../components/AddService";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import MyReviews from "../components/MyReviews";
import Register from "../components/Register";
import Services from "../components/Services";
import SingleService from "../components/SingleService";
import UpdateReview from "../components/UpdateReview";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch(
            "https://b6a11-service-review-server-side-faizul-osman.vercel.app/threeservices"
          ),
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: () =>
          fetch(
            "https://b6a11-service-review-server-side-faizul-osman.vercel.app/threeservices"
          ),
        element: <Home></Home>,
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/services",
        loader: () =>
          fetch(
            "https://b6a11-service-review-server-side-faizul-osman.vercel.app/services"
          ),
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-faizul-osman.vercel.app/services/${params.id}`
          ),
        element: <SingleService></SingleService>,
      },
      {
        path: "/addreview/:id",
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-faizul-osman.vercel.app/services/${params.id}`
          ),
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
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews/:id",
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-faizul-osman.vercel.app/reviews/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        loader: () =>
          fetch(
            `https://b6a11-service-review-server-side-faizul-osman.vercel.app/blogs`
          ),
        element: <Blog></Blog>,
      },
    ],
  },
]);
