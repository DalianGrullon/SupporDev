import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FaUserCircle } from "react-icons/fa";
import { QUERY_REQUEST } from "../utils/queries";

const ProjectCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { projectId } = useParams();
  const { loading, error, data } = useQuery(QUERY_REQUEST, {
    variables: { id: projectId },
  });

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  if (error) {
    return <h2>Something went wrong!</h2>;
  }

  const { request } = data || {};
  const { requester } = request;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setShowModal(false);

    const result = await fetch(
      `https://formsubmit.co/ajax/${requester.email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: userFormData.name,
          message: `${userFormData.message}
            
            contact me via ${userFormData.email}`,
        }),
      }
    );

    setUserFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="card text-4xl text-primary bg-gradient-to-br from-neutral-focus to-slate-400 md:col-start-6 md:col-span-6 col-start-3 col-span-8 shadow-lg ">
      <div className="card-body w-full">
        <div className="card-title rounded-lg text-2xl p-3 justify-between flex bg-gradient-to-br from-blue-900 to-blue-500 text-primary-content shadow">
          <div className="flex items-center">
            <FaUserCircle size={50} />
            <h2 className="pl-4">{request.requester.userName}</h2>
          </div>
          <div className="pr-2">
            <h3>{request.title}</h3>
          </div>
        </div>
        <div className="text-xl card-body text-primary-content">
          <p>{request.description}</p>
        </div>
        <button
          className="w-full px-6 py-2.5 bg-gradient-to-br from-blue-900 to-blue-400 text-primary-content font-medium text-xs leading-tight uppercase rounded-lg shadow-lg hover:bg-primary-focus hover:scale-105 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-300 ease-in-out"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Contact Me
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-5/6 my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-br from-blue700 to-slate-400 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-500 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Messaging: {requester.userName}
                    </h3>
                  </div>
                  {/*body*/}
                  <form onSubmit={handleFormSubmit}>
                    <div className="relative p-6 flex-auto">
                      <div className="form-group mb-6">
                        <input
                          onChange={handleInputChange}
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-base-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none"
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="form-group mb-6">
                        <input
                          onChange={handleInputChange}
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-base-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="form-group mb-6">
                        <textarea
                          onChange={handleInputChange}
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-base-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                          placeholder="Your Message"
                          name="message"
                          rows="3"
                          required
                        ></textarea>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-500 rounded-b">
                      <button
                        className="text-red-300 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
