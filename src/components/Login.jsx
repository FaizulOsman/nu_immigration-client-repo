import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const { logIn, logOut, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        form.reset();
      })
      .catch((e) => {
        console.error(e);
        toast.error("Something went wrong");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully Registered");
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
            <h1 className="text-4xl font-bold mb-5">Login</h1>
            <div className="form-control mb-5">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
            </div>
            <p>
              <small>
                Don't have an account?{" "}
                <Link to="/register" className="underline text-primary">
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
        <div className="my-5">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
