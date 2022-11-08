import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({ review, handleDeleteReview }) => {
  const { email, text, title, name, photoURL, rating, realDate, realTime } =
    review;

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
            <Link
              onClick={() => handleDeleteReview(review)}
              className="btn btn-circle bg-red-600 hover:bg-red-700 border-none"
            >
              X
            </Link>
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
