import {
  faPenToSquare,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({ review, handleDeleteReview, handleUpdateReview }) => {
  const {
    _id,
    email,
    text,
    title,
    name,
    photoURL,
    rating,
    realDate,
    realTime,
  } = review;

  return (
    <div>
      <div className="card w-11/12 md:w-2/3 mx-auto bg-base-200 shadow-xl mt-10">
        <div className="card-body">
          <div className="flex justify-between">
            <div className="md:flex">
              <div className="avatar flex">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                  {review?.photoURL ? (
                    <img src={photoURL} alt="Img not found" />
                  ) : (
                    <FontAwesomeIcon
                      className="w-full h-full"
                      icon={faUser}
                    ></FontAwesomeIcon>
                  )}
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:ml-4">
                <h2 className="card-title">{name}</h2>
                <p className="text-md font-semibold text-gray-500">{email}</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-4">
              <Link
                title="Delete Review"
                onClick={() => handleDeleteReview(review)}
                className="bg-red-600 hover:bg-red-700 cursor-pointer rounded-full px-2 text-white"
              >
                X
              </Link>
              <Link
                title="Update Review"
                to={`/reviews/${_id}`}
                onClick={() => handleUpdateReview(review)}
                className="text-primary text-xl"
              >
                <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
              </Link>
            </div>
          </div>
          <h4 className="text-xl font-bold text-center text-primary">
            {title}
          </h4>
          <p className="my-4">{text}</p>
          <div className="sm:flex sm:text-center justify-between items-center">
            <div className="">
              {[...Array(rating).keys()].map((r) => (
                <FontAwesomeIcon
                  key={r}
                  icon={faStar}
                  className="text-warning"
                ></FontAwesomeIcon>
              ))}
              {[...Array(5 - rating).keys()].map((r) => (
                <FontAwesomeIcon key={r} icon={faStar}></FontAwesomeIcon>
              ))}
            </div>
            <div className="my-3 sm:my-0">
              <p className="text-md font-semibold text-gray-500">
                Date: {realDate}
              </p>
            </div>
            <div className="sm:ml-3">
              <p className="text-md font-semibold text-gray-500">
                Time: {realTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
