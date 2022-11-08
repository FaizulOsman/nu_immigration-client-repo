import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleService = () => {
  const { _id, image, cost, title, description, rating } = useLoaderData();

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
            <Link to={`/addreview/${_id}`} className="badge badge-outline">
              Review
            </Link>
          </div>
        </div>
      </div>

      {/* ================ Reviews section =============== */}
      <div className="my-32">
        <div className="card w-1/2 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex">
              <div className="avatar flex">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                  <img src="https://placeimg.com/192/192/people" alt="img" />
                </div>
              </div>
              <div className="ml-4">
                <h2 className="card-title">Card title!</h2>
                <p>Date</p>
              </div>
            </div>
            <p>Description: If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
