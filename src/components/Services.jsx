import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../customHooks/useTitle";
import "react-photo-view/dist/react-photo-view.css";

const Services = () => {
  const services = useLoaderData();
  useTitle("Services");

  return (
    <div className="w-11/12 mx-auto my-14">
      <h2 className="mb-10 text-4xl font-bold text-center text-secondary">
        All Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service?._id}>
            <div className="card hover:-mt-6 hover:z-20 duration-200 h-full bg-base-100 shadow-xl">
              <figure>
                <PhotoProvider
                  speed={() => 800}
                  easing={(type) =>
                    type === 2
                      ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                      : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                  }
                >
                  <div className="">
                    <PhotoView src={service?.image}>
                      <img
                        src={service?.image}
                        alt=""
                        style={{ objectFit: "cover" }}
                      />
                    </PhotoView>
                  </div>
                </PhotoProvider>
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
                <p>{service?.description.slice(0, 99)} ...</p>
                <div className="card-actions justify-between">
                  <div className="font-bold text-yellow-500">
                    ${service?.cost}
                  </div>
                  <Link
                    to={`/services/${service?._id}`}
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
