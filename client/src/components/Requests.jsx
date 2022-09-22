import { useMutation } from "@apollo/client";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { UPDATE_REQUEST, DELETE_REQUEST } from "../utils/mutations";
import CancelButton from "./shared/button/CancelButton";
import PrimaryButton from "./shared/button/PrimaryButton";

const Requests = ({ request }) => {
  const [showModal, setShowModal] = useState(false);
  const [updateRequestData, setUpdateRequestData] = useState({
    title: `${request.title}`,
    description: `${request.description}`,
  });
  const [updateRequest] = useMutation(UPDATE_REQUEST);
  const [deleteRequest] = useMutation(DELETE_REQUEST);
  const handleDeleteRequest = (e) => {
    deleteRequest({
      variables: {
        id: request._id,
      },
    });
    window.location.href = "/";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateRequestData({ ...updateRequestData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setShowModal(false);

    updateRequest({
      variables: {
        id: request._id,
        title: updateRequestData.title,
        description: updateRequestData.description,
      },
    });

    window.location.href = "/";
  };

  const formClasses =
    "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-base-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none";

  return (
    <div className="card w-full ml-0 bg-base-300 shadow-lg m-12 bg-gradient-to-br from-neutral-focus to-slate-400 text-primary-content duration-300">
      <div className="card-body text-primary-content">
        <h3 className="card-title">{request.title}</h3>
        <p>{request.description}</p>
        <div className="flex justify-between">
          {/* <button
            className="btn shadow-lg bg-gradient-to-br from-blue-900 to-blue-700 border-none text-primary-content hover:scale-105 duration-300 ease-in-out"
            onClick={() => setShowModal(true)}
          > */}
          <PrimaryButton onClick={() => setShowModal(true)}>
            Update
          </PrimaryButton>
          {/* </button> */}
          {showModal ? (
            <>
              <div
                key={request._id}
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-5/6 my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-br from-blue700 to-slate-400 outline-none focus:outline-none">
                    <form onSubmit={handleFormSubmit}>
                      <div className="relative p-6 flex-auto">
                        <div className="form-group mb-6">
                          <input
                            onChange={handleInputChange}
                            className={formClasses}
                            type="text"
                            name="title"
                            placeholder={request.title}
                            required
                          />
                        </div>
                        <div className="form-group mb-6">
                          <textarea
                            onChange={handleInputChange}
                            className={formClasses}
                            placeholder={request.description}
                            required
                            name="description"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-500 rounded-b">
                        <CancelButton onClick={() => setShowModal(false)}>
                          Cancel
                        </CancelButton>
                        <PrimaryButton onSubmit={handleFormSubmit}>
                          Update Post
                        </PrimaryButton>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          <button onClick={handleDeleteRequest}>
            <FaTimes
              className="cursor-pointer"
              size={30}
              color="red"
              value={request._id}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Requests;
