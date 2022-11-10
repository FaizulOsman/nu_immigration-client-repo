import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../customHooks/useTitle";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import toast from "react-hot-toast";

const Services = () => {
  useTitle("Services");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-faizul-osman.vercel.app/services`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("immigration-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setServices(data);
      });
  }, []);

  const handleDeleteService = (service) => {
    const confirm = window.confirm(`Do you want to delete ${service?.title}`);
    if (confirm) {
      fetch(
        `https://b6a11-service-review-server-side-faizul-osman.vercel.app/services/${service?._id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "immigration-token"
            )}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const except = services.filter((s) => service?._id !== s?._id);
            setServices(except);
            toast.success(`Successfully deleted ${service?.title}`);
          }
        });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen mt-52">
        <div className="w-32 mx-auto">
          <svg
            className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </div>
    );
  }

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
                  <div>
                    <Link
                      to={`/services/${service?._id}`}
                      className="badge badge-outline btn-primary p-4 font-bold text-white"
                    >
                      Details
                    </Link>
                    <Link
                      onClick={() => handleDeleteService(service)}
                      className="badge badge-outline bg-red-600 p-4 font-bold text-white"
                    >
                      Delete
                    </Link>
                  </div>
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
