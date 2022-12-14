import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../customHooks/useTitle";
import AssessmentSection from "./AssessmentSection";
import Carousel from "./Carousel";
import Statistic from "./Statistic";
import WelcomeSection from "./WelcomeSection";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Home = () => {
  useTitle("Home");
  const threeservices = useLoaderData();
  return (
    <div className="">
      {/* =========== Carousel Section ========== */}
      <Carousel></Carousel>

      {/* =========== Welcome Section ========== */}
      <WelcomeSection></WelcomeSection>
      <div className="w-11/12 mx-auto my-20">
        <div className="text-center">
          <h2 className="text-red-600 text-3xl md:text-5xl italic font-bold mb-10">
            Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {threeservices.map((service) => (
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
                          className="max-h-[315px]"
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
                      className="badge badge-outline btn-primary p-4 font-bold text-white"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <Link to="/services" className="btn btn-secondary border-none">
            See All Services
          </Link>
        </div>
      </div>

      {/* =========== Statistic Section ========== */}
      <Statistic></Statistic>

      {/* =========== Assessment Section ========== */}
      <AssessmentSection></AssessmentSection>
    </div>
  );
};

export default Home;
