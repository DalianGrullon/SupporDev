import { useState } from "react";
import { ADD_REQUEST } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const CreateRequest = () => {
  const [requestFormData, setRequestFormData] = useState({
    title: "",
    description: "",
  });
  const [addRequest] = useMutation(ADD_REQUEST);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRequestFormData({ ...requestFormData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    addRequest({
      variables: {
        title: requestFormData.title,
        description: requestFormData.description,
      },
    });

    setRequestFormData({
      title: "",
      description: "",
    });

    window.location.href = "/";
  };

  return (
    <div className="block p-6 rounded-lg shadow-lg text-primary bg-gradient-to-br from-neutral-focus to-slate-400 max-w-md md:col-start-5 md:col-span-6 col-span-8 col-start-3  my-12">
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-group mb-6">
          <label
            htmlFor="title"
            className="form-label inline-block mb-2 text-primary-content"
          >
            Title
          </label>
          <input
            name="title"
            type="text"
            className="form-controlblock w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-base-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none"
            id="title"
            placeholder="Title of request"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="description"
            className="form-label inline-block mb-2 text-primary-content"
          >
            Description
          </label>
          <textarea
            onChange={handleInputChange}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-base-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none"
            placeholder="Your Message"
            name="description"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleFormSubmit}
          className="w-full px-6 py-2.5 bg-gradient-to-br from-blue-900 to-blue-500 text-primary-content font-medium text-xs leading-tight uppercase rounded shadow-md hover:scale-105 hover:bg-primary-focus hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateRequest;
