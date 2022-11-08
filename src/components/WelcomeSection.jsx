import { faPlay, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import passport from "../assets/images/passport.png";

const WelcomeSection = () => {
  return (
    <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 gap-5 my-20 w-11/12 mx-auto">
      <div className="text-center w-full mx-auto">
        <img
          className="w-full lg:w-11/12 h-64 md:h-96 lg:h-full"
          src={passport}
          alt=""
        />
      </div>
      <div className="">
        <h5 className="text-md font-semibold border-b-2 w-64 text-gray-500">
          WELCOME TO NU-IMMIGRATION
        </h5>
        <h2 className="text-3xl lg:text-5xl text-primary font-bold mt-5 mb-8">
          Welcome to immigration{" "}
          <span className="text-red-600 italic">Advisory</span> services
        </h2>
        <p className="text-md font-semibold mb-10 text-gray-500">
          NU-Immigration advisory foundation was established with a small idea
          that was incepted in the minds of its promoters in the year 1994! We
          skilfully guide applicants for immigration process to any country they
          aspire to settle down.
        </p>
        <div className="flex justify-between flex-col md:flex-row">
          <ul className="text-md font-semibold text-gray-500">
            <li className="flex hover:text-red-600 items-center">
              <FontAwesomeIcon
                className="text-4xl"
                icon={faSquareCheck}
              ></FontAwesomeIcon>
              <span className="m-4">
                The desire to blur the global boundaries fulfil
              </span>
            </li>
            <li className="flex hover:text-red-600 items-center">
              <FontAwesomeIcon
                className="text-4xl"
                icon={faSquareCheck}
              ></FontAwesomeIcon>
              <span className="m-4">
                Certified legal advisors to serve you better way.
              </span>
            </li>
            <li className="flex hover:text-red-600 items-center">
              <FontAwesomeIcon
                className="text-4xl"
                icon={faSquareCheck}
              ></FontAwesomeIcon>
              <span className="m-4">
                Easy approval by choosing top visa consultant
              </span>
            </li>
          </ul>
          <div className="mt-10 md:mt-0 rounded-md bg-[#003a66] py-4 px-8 text-center">
            <div className="border-b-2 border-gray-400">
              <FontAwesomeIcon
                className="text-2xl text-red-600 my-3"
                icon={faPlay}
              ></FontAwesomeIcon>
            </div>
            <h4 className="mt-4 text-white text-lg font-bold">
              Watch The <br /> Video
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
