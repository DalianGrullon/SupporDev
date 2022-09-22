import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FaUserCircle } from "react-icons/fa";
import { QUERY_REQUEST } from "../utils/queries";
import PrimaryButton from "./shared/button/PrimaryButton";
import CancelButton from "./shared/button/CancelButton";

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

  const formClasses =
    "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-base-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none";

  return (
    <div className="card text-4xl text-primary md:w-1/3 bg-gradient-to-br from-neutral-focus to-slate-400 md:col-start-6 md:col-span-4 col-start-3 col-span-4 shadow-lg mx-4">
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
        <PrimaryButton onClick={() => setShowModal(true)} className="w-full">
          Contact Me
        </PrimaryButton>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-5/6 my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-br from-blue700 to-slate-400 outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-500 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Messaging: {requester.userName}
                    </h3>
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <div className="relative p-6 flex-auto">
                      <div className="form-group mb-6">
                        <input
                          onChange={handleInputChange}
                          className={formClasses}
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="form-group mb-6">
                        <input
                          onChange={handleInputChange}
                          className={formClasses}
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="form-group mb-6">
                        <textarea
                          onChange={handleInputChange}
                          className={formClasses}
                          placeholder="Your Message"
                          name="message"
                          rows="3"
                          required
                        ></textarea>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-500 rounded-b">
                      <CancelButton onClick={() => setShowModal(false)}>
                        Cancel
                      </CancelButton>
                      <PrimaryButton onSubmit={handleFormSubmit}>
                        Send Message
                      </PrimaryButton>
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
