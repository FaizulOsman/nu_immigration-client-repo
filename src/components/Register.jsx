import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully Registered");
        form.reset();
      })
      .catch((e) => {
        console.error(e);
        toast.error("Something went wrong!");
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
    <div>
      <div className="my-20 card flex-shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="">
            <div className="">
              <h1 className="text-4xl font-bold mb-5">Register</h1>
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
                  />
                </div>
                <div className="form-control mb-5">
                  <label className="label">
                    <span className="label-text">Your Image</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="input input-bordered"
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
                />
              </div>
              <p>
                <small>
                  Already have an account?{" "}
                  <Link to="/login" className="underline text-primary">
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
    </div>
  );
};

export default Register;
