import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewCard = ({ review }) => {
  const { email, text, name, photoURL, rating, realDate, realTime, time } =
    review;

  return (
    <div>
      <div className="card w-2/3 mx-auto bg-base-200 shadow-xl mt-10">
        <div className="card-body">
          <div className="flex">
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
            <div className="ml-4">
              <h2 className="card-title">{name}</h2>
              <div className="flex">
                <span>Date: {realDate}</span>
                <span className="ml-3">Time: {realTime}</span>
              </div>
            </div>
          </div>
          <p>{text}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
