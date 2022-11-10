import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/AuthProvider";
import ReviewCard from "./ReviewCard";
import Lottie from "lottie-react";
import lottieAnimation from "../assets/lottieError404.json";
import useTitle from "../customHooks/useTitle";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  // Load all of my reviews
  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-faizul-osman.vercel.app/myreviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("immigration-token")}`,
        },
      }
    )
      .then((res) => {
        // Logout user when user is invalid
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, logOut]);

  // Delete function for review
  const handleDeleteReview = (review) => {
    const confirm = window.confirm(`Do you want to delete ${review?.title}`);
    if (confirm) {
      fetch(
        `https://b6a11-service-review-server-side-faizul-osman.vercel.app/reviews/${review?._id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "immigration-token"
            )}`,
          },
        }
      )
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

  // Reviews Sorting method (Reverse way with time)
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
