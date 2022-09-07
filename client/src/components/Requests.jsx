import { useMutation } from "@apollo/client";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Requests = ({ request }) => {
  const [showModal, setShowModal] = useState(false);
  const [updateRequestData, setUpdateRequestData] = useState({
    title: `${request.title}`,
    description: `${request.description}`,
  });
  // const {loading, error, data} = useMutation()
  const check = () => {
    console.log("hello world");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateRequestData({ ...updateRequestData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setShowModal(false);

    setUpdateRequestData({
      title: `${request.title}`,
      description: `${request.description}`,
    });
  };

  return (
    <div className="card w-full ml-0 bg-base-300 shadow-lg m-12 bg-gradient-to-br from-neutral-focus to-slate-400 text-primary-content duration-300 hover:scale-105">
      <div className="card-body text-primary-content">
        {/* TODO: make this a link to populate the main body of post info */}
        <h3 className="card-title">{request.title}</h3>
        <h4>{request.description}</h4>
        <div className="flex justify-between">
          <button
            className="btn shadow-lg bg-gradient-to-br from-blue-900 to-blue-700 border-none text-primary-content hover:scale-105 duration-300 ease-in-out"
            onClick={() => setShowModal(true)}
          >
            Update
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-5/6 my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-br from-blue700 to-slate-400 outline-none focus:outline-none">
                    <form onSubmit={handleFormSubmit}>
                      <div className="relative p-6 flex-auto">
                        <div className="form-group mb-6">
                          <input
                            onChange={handleInputChange}
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-base-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                            type="text"
                            name="title"
                            placeholder="Project Title"
                            required
                          />
                        </div>
                        <div className="form-group mb-6">
                          <textarea
                            onChange={handleInputChange}
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-base-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                            placeholder={`${request.description}`}
                            name="description"
                            rows="3"
                            required
                          ></textarea>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-500 rounded-b">
                        <button
                          className="text-red-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          // px-6 py-3 bg-primary text-primary-content font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary-focus hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out
                          className="bg-primary text-primary-content  active:shadow-lg font-medium uppercase text-sm leading-tight px-6 py-3 rounded shadow-md hover:shadow-lg outline-none hover:scale-105 hover:bg-primary-focus focus:outline-none focus:ring-0 mr-1 mb-1 ease-in-out transition duration-150"
                          type="submit"
                          onSubmit={handleFormSubmit}
                        >
                          Update Post
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          <FaTimes
            className="cursor-pointer"
            size={30}
            color="red"
            onClick={check}
          />
        </div>
      </div>
    </div>
  );
};

export default Requests;
