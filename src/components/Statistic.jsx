import React from "react";
import "./Statistic.css";
import CountUp from "react-countup";

const Statistic = () => {
  return (
    <div className="statistic text-white my-32">
      <div className="w-2/3 mx-auto flex items-center justify-center">
        <div className="h-full">
          <h2 className="text-center text-3xl md:text-5xl pb-10 mt-20 md:mt-24 lg:mt-32 font-bold border-b-4 border-secondary">
            Hundreds Of People Choose Our Services
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="text-center mt-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warning">
                <CountUp scrollSpyDelay={2} enableScrollSpy={true} end={1000} />
                +
              </h1>
              <p className="mt-3">Visas Granted</p>
            </div>
            <div className="text-center mt-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warning">
                <CountUp scrollSpyDelay={2} enableScrollSpy={true} end={6} />+
              </h1>
              <p className="mt-3">Immigration Destinations</p>
            </div>
            <div className="text-center mt-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warning">
                <CountUp scrollSpyDelay={2} enableScrollSpy={true} end={90} />%
              </h1>
              <p className="mt-3">Clients are from references</p>
            </div>
            <div className="text-center mt-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warning">
                <CountUp scrollSpyDelay={2} enableScrollSpy={true} end={100} />+
              </h1>
              <p className="mt-3">Ongoing Cases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
