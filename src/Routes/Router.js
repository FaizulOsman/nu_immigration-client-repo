import { createBrowserRouter } from "react-router-dom";
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
        path: "/service/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
        element: <SingleService></SingleService>,
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
