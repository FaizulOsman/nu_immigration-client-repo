import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useTitle from "../customHooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { logIn, githubSignIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  // Log In function
  const handleSubmit = (e) => {
    setLoading(true);
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
            setLoading(false);
            navigate(from, { replace: true });
          });
      })
      .catch((e) => {
        console.error(e);
        toast.error("Something went wrong");
        setLoading(false);
      });
  };

  // Spinner
  if (loading) {
    return (
      <div className="min-h-screen mt-52">
        <div className="w-10 mx-auto">
          <svg
            className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </div>
    );
  }

  // Google Sign In
  const handleGoogleSignIn = () => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        toast.error("Something went wrong!");
        setLoading(false);
      });
  };
  // Github Sign In
  const handleGithubSignIn = () => {
    setLoading(true);
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
