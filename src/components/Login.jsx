import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useTitle from "../customHooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { logIn, githubSignIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // Login with Email and Password
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = { email: user.email };

        // get JWT token
        fetch(
          "https://b6a11-service-review-server-side-faizul-osman.vercel.app/jwt",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem(
                "immigration-token"
              )}`,
            },
            body: JSON.stringify(currentUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("immigration-token", data.token);
            toast.success("Successfully logged in, Keep Going");
            form.reset();
            navigate(from, { replace: true });
          });
      })
      .catch((e) => {
        console.error(e);
        toast.error("Something went wrong");
      });
  };
  // Google Sign In
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = { email: user.email };

        // get JWT token
        fetch(
          "https://b6a11-service-review-server-side-faizul-osman.vercel.app/jwt",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem(
                "immigration-token"
              )}`,
            },
            body: JSON.stringify(currentUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("immigration-token", data.token);
            toast.success("Successfully Logged in with Google");
            navigate(from, { replace: true });
          });
      })
      .catch((e) => {
        console.log(e);
        toast.error("Something went wrong!");
      });
  };
  // Github Sign In
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = { email: user.email };

        // get JWT token
        fetch(
          "https://b6a11-service-review-server-side-faizul-osman.vercel.app/jwt",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem(
                "immigration-token"
              )}`,
            },
            body: JSON.stringify(currentUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("immigration-token", data.token);
            toast.success("Successfully Logged in with Github");
            navigate(from, { replace: true });
          });
      })
      .catch((e) => {
        console.log(e);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="my-20 card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="">
          <div className="">
            <h1 className="text-4xl text-primary text-center font-bold mb-5">
              Login
            </h1>
            <div className="form-control mb-5">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <p>
              <small>
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="underline text-primary hover:text-secondary"
                >
                  Please Register
                </Link>
              </small>
            </p>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary text-white"
              />
            </div>
          </div>
        </form>
        <div className="my-3">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-info w-full"
          >
            Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="btn btn-outline mt-5 w-full"
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
