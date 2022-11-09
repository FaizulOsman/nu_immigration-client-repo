import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/AuthProvider";
import ReviewCard from "./ReviewCard";
import Lottie from "lottie-react";
import lottieAnimation from "../assets/lottieError404.json";
import useTitle from "../customHooks/useTitle";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email]);

  const handleDeleteReview = (review) => {
    const confirm = window.confirm(`Do you want to delete ${review?.title}`);
    if (confirm) {
      fetch(`http://localhost:5000/reviews/${review?._id}`, {
        method: "DELETE",
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
    <div className="my-10">
      <div>
        {reviews?.length > 0 ? (
          <>
            <h2
              // onClick={test}
              className="mb-10 text-4xl font-bold text-center text-secondary"
            >
              My Reviews
            </h2>
            {reviews.map((review) => (
              <ReviewCard
                key={review.time}
                review={review}
                handleDeleteReview={handleDeleteReview}
              ></ReviewCard>
            ))}
          </>
        ) : (
          <div className="max-w-xs mx-auto mb-20">
            <Lottie animationData={lottieAnimation} loop={true}></Lottie>
            <h2 className="italic mb-10 text-4xl font-bold text-center text-secondary">
              No reviews were added
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
