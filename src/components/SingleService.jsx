import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleService = () => {
  const { image, cost, title, description, rating } = useLoaderData();

  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="">
          <img src={image} alt="" />
        </div>
        <div className="">
          <h3 className="text-2xl font-bold text-primary">{title}</h3>
          <p className="text-md my-5 text-gray-500">{description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 justify-between">
            <h4 className="font-bold">${cost}</h4>
            <p>
              {rating} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </p>
            <Link>Review</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
