import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const SingleService = () => {
  const { _id, image, cost, title, description, rating } = useLoaderData();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/`)
      .then((res) => res.json())
      .then((data) => {
        const exist = data.filter((r) => r.serviceId === _id);
        setReviews(exist);
        console.log(exist);
      });
  }, [_id]);

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
            <Link
              to={`/addreview/${_id}`}
              className="badge badge-outline btn-secondary p-4"
            >
              Review
            </Link>
          </div>
        </div>
      </div>

      {/* ================ Reviews section =============== */}
      <div className="my-20 border-t-4 pt-10">
        <h1 className="text-4xl text-primary text-center font-bold mb-16">
          Reviews of <span className="text-red-600 italic">{title}</span>
        </h1>
        {reviews.map((review) => (
          <ReviewCard key={review?._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default SingleService;
