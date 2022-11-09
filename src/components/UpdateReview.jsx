import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useTitle from "../customHooks/useTitle";

const UpdateReview = () => {
  useTitle("Update Review");
  const { _id, title, text } = useLoaderData();
  const serviceId = _id;
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(5);

  const date = new Date();
  const time = date.getTime();

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const realDate = `${day}:${month + 1}:${year}`;

  const hour = date.getHours();
  const minute = date.getMinutes();
  const realTime = `${hour}:${minute}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const name = user?.displayName;
    const email = user?.email;
    const photoURL = user?.photoURL;
    const review = {
      name,
      email,
      photoURL,
      rating,
      time,
      realDate,
      realTime,
      text,
    };

    fetch(
      `https://b6a11-service-review-server-side-faizul-osman.vercel.app/reviews/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("immigration-token")}`,
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review Updated Successfully");
          e.target.reset();
        }
      });
  };

  const handleReviewRating = (e) => {
    setRating(parseInt(e.target.value));
  };

  return (
    <div className="my-20 card flex-shrink-0 w-full max-w-xl mx-auto shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="">
          <div className="">
            <h1 className="text-4xl text-primary text-center font-bold mb-5">
              Update <span className="text-red-600 italic">{title}</span>
            </h1>
            <div className="form-control mb-5">
              <label className="label">
                <span className="font-semibold text-lg">Review text</span>
              </label>
              <textarea
                defaultValue={text}
                className="textarea textarea-bordered"
                placeholder="Text"
                name="text"
              ></textarea>
            </div>

            <div className="flex items-center">
              <h4 className="text-lg font-semibold mb-2 mr-5">Add Rating: </h4>
              <div onChange={handleReviewRating} className="rating">
                <input
                  value="1"
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  value="2"
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  value="3"
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  value="4"
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  value="5"
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary text-white"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
