import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import ReviewCard from "./ReviewCard";
import Lottie from "lottie-react";
import lottieAnimation from "../assets/lottieError404.json";

const MyReviews = () => {
  const reviews = useLoaderData();
  const { user } = useContext(AuthContext);

  const myReviews = reviews.filter((r) => r?.email === user?.email);
  const [displayReviews, setDisplayReviews] = useState(myReviews);

  const handleDeleteReview = (review) => {
    const confirm = window.confirm(`Do you want to delete ${review?.title}`);
    if (confirm) {
      fetch(`http://localhost:5000/reviews/${review?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const except = displayReviews.filter((r) => r?._id !== review?._id);
            setDisplayReviews(except);
            toast.success(`Successfully deleted ${review?.title}`);
          }
        });
    }
  };

  displayReviews.sort((a, b) => b.time - a.time);

  return (
    <div className="my-10">
      <div>
        {displayReviews.length > 0 ? (
          <>
            <h2
              // onClick={test}
              className="mb-10 text-4xl font-bold text-center text-secondary"
            >
              My Reviews
            </h2>
            {displayReviews.map((review) => (
              <ReviewCard
                key={review.time}
                review={review}
                handleDeleteReview={handleDeleteReview}
              ></ReviewCard>
            ))}
          </>
        ) : (
          <div className="max-w-xs mx-auto">
            <Lottie animationData={lottieAnimation} loop={true}></Lottie>
            <h2 className="mb-10 text-4xl font-bold text-center text-secondary">
              No reviews were added
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
