import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useTitle from "../customHooks/useTitle";

const Register = () => {
  useTitle("Register");
  const { createUser, googleSignIn, githubSignIn, updateUserProfile, logOut } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Update User Profile!
        updateUserProfile(name, photoURL)
          .then(() => {
            form.reset();
            logOut()
              .then(() => {})
              .catch((e) => console.log(e));
            toast.success("Successfully Registered, Please Login");
          })
          .catch((e) => {
            console.log(e);
            toast.error("Something went wrong!");
          });
      })
      .catch((e) => {
        console.log(e);
        toast.error("Something went wrong!");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = { email: user.email };

        // get JWT token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem(
              "immigration-token"
            )}`,
          },
          body: JSON.stringify(currentUser),
        })
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

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = { email: user.email };

        // get JWT token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem(
              "immigration-token"
            )}`,
          },
          body: JSON.stringify(currentUser),
        })
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
    <div>
      <div className="my-20 card flex-shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="">
            <div className="">
              <h1 className="text-4xl text-primary text-center font-bold mb-5">
                Register
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control mb-5">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mb-5">
                  <label className="label">
                    <span className="label-text">Your Image</span>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
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
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="underline  text-primary hover:text-secondary"
                  >
                    Please Login
                  </Link>
                </small>
              </p>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
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
    </div>
  );
};

export default Register;
