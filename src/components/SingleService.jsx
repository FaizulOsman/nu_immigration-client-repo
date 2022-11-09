import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useTitle from "../customHooks/useTitle";
import AddReview from "./AddReview";
import ReviewCard from "./ReviewCard";

const SingleService = () => {
  useTitle("Service");
  const { user } = useContext(AuthContext);
  const { _id, image, cost, title, description, rating } = useLoaderData();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("immigration-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const exist = data.filter((r) => r.serviceId === _id);
        setReviews(exist);
        console.log(exist);
      });
  }, [_id]);

  const handleDeleteReview = (review) => {
    const confirm = window.confirm(`Do you want to delete ${review?.title}`);
    if (confirm) {
      fetch(`http://localhost:5000/reviews/${review?._id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("immigration-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const except = reviews.filter((r) => r?._id !== review?._id);
            setReviews(except);
            toast.success(`Successfully deleted ${review?.title}`);
          }
        });
    }
  };

  reviews.sort((a, b) => b.time - a.time);
  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="">
          <img src={image} alt="" />
        </div>
        <div className="">
          <h3 className="text-3xl font-bold text-primary">{title}</h3>
          <p className="text-md my-5 text-gray-500">{description}</p>
          <div className="flex justify-between">
            <h4 className="font-bold">${cost}</h4>
            <p className="font-semibold">
              {rating}{" "}
              <FontAwesomeIcon
                className="text-orange-400"
                icon={faStar}
              ></FontAwesomeIcon>
            </p>
            {user?.uid ? (
              <Link
                to={`/addreview/${_id}`}
                className="badge badge-outline btn-secondary p-4"
              >
                Add a review
              </Link>
            ) : (
              <p>
                Please{" "}
                <Link
                  to="/login"
                  className="badge badge-outline btn-secondary p-4"
                >
                  Login
                </Link>{" "}
                to add review
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ================ Reviews section =============== */}
      <div className="my-20 border-t-4 pt-10">
        <h1 className="text-4xl text-primary text-center font-bold mb-16">
          Reviews of <span className="text-red-600 italic">{title}</span>
        </h1>
        {reviews.map((review) => (
          <ReviewCard
            key={review?._id}
            review={review}
            handleDeleteReview={handleDeleteReview}
          ></ReviewCard>
        ))}
      </div>
      {user?.uid ? <AddReview></AddReview> : undefined}
    </div>
  );
};

export default SingleService;
