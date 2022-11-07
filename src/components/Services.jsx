import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Services = () => {
  const services = useLoaderData();

  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service?._id}>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={service?.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {service?.title}
                  <div className="badge badge-secondary">
                    {service?.rating}
                    <FontAwesomeIcon
                      icon={faStar}
                      className="ml-1"
                    ></FontAwesomeIcon>
                  </div>
                </h2>
                <p>{service?.description.slice(0, 100)} ...</p>
                <div className="card-actions justify-between">
                  <div className="font-bold text-yellow-500">
                    ${service?.cost}
                  </div>
                  <Link
                    to={`/service/${service?._id}`}
                    className="badge badge-outline"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;