import React from "react";
import assessmentImg from "../assets/images/assessment.jpg";

const AssessmentSection = () => {
  return (
    <div className="my-20">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
        <div className="mx-auto">
          <img className="rounded-lg max-h-96" src={assessmentImg} alt="" />
        </div>
        <div className="lg:w-9/12 text-center md:text-left mt-10 md:mt-0">
          <h2 className="text-4xl font-semibold">
            One-Stop solution for Australia, USA, and Canada Immigration from
            Bangladesh
          </h2>
          <p className="font-semibold my-10">
            We are well equipped with registered foreign lawyers who would help
            you in pursuit of your immigration.
          </p>
          <button className="btn btn-secondary">FREE ASSESSMENT</button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentSection;
