import React from "react";
import toast from "react-hot-toast";
import useTitle from "../customHooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const cost = form.cost.value;
    const description = form.description.value;
    const service = { image, title, description, cost, rating };

    fetch(
      `https://b6a11-service-review-server-side-faizul-osman.vercel.app/services`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("immigration-token")}`,
        },
        body: JSON.stringify(service),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Event added successfully");
          form.reset();
        }
      });
  };

  return (
    <div className="my-20">
      <form
        onSubmit={handleSubmit}
        className="card flex-shrink-0 max-w-lg mx-auto shadow-2xl bg-base-100"
      >
        <div className="card-body">
          <h1 className="text-4xl font-bold mb-5 text-center text-primary">
            Add a service
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control md:mb-5">
              <label className="label">
                <span className="label-text">Service Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Service Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Service Image"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control md:mb-5">
              <label className="label">
                <span className="label-text">Initial Review</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="1 to 5"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Cost</span>
              </label>
              <input
                type="number"
                name="cost"
                placeholder="Service Cost"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Enter Description"
              id="description"
              cols="30"
              rows="4"
              className="bg-base-100 border rounded-lg p-4 border-gray-600"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Add event"
              className="btn btn-primary text-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
