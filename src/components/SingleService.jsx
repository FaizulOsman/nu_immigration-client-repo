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
          <h3 className="text-3xl font-bold text-[#086092]">{title}</h3>
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
            <Link className="badge badge-outline">Review</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
