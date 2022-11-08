import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import ReviewCard from "./ReviewCard";

const MyReviews = () => {
  const reviews = useLoaderData();
  const { user } = useContext(AuthContext);

  const myReviews = reviews.filter((r) => r?.email === user?.email);
  console.log(myReviews);
  return (
    <div className="my-10">
      <h2 className="mb-10 text-4xl font-bold text-center text-secondary">
        My Reviews
      </h2>
      {myReviews.map((review) => (
        <ReviewCard key={review.time} review={review}></ReviewCard>
      ))}
    </div>
  );
};

export default MyReviews;
