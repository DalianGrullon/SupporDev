import { useState } from "react";
import { useParams } from 'react-router-dom';
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
    variables: { id: projectId }
  });
  const { request } = data || {};
  
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  if (error) {
    return <h2>Something went wrong!</h2>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setShowModal(false);
    const { requester } = request;

    const result = await fetch(`https://formsubmit.co/ajax/${requester.email}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userFormData.name,
            message: `${userFormData.message}
            
            contact me via ${userFormData.email}`
        })
    });

    setUserFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="card text-4xl text-primary bg-base-200 col-span-8 col-start-3 row-span-4 row-start-2 mr-4 mx-auto">
      <div className="card-body   w-full">
        <div className="card-title rounded-lg text-3xl p-3 justify-between flex bg-base-300">
          <div className="flex items-center">
            <FaUserCircle size={50}/>
            <h2 className="pl-2">{request.requester.userName}</h2>
          </div>
          <div>
            <h3 className="">{request.title}</h3>
          </div>
        </div>
        <div className="text-xl">
            <p>{request.description}</p>
        </div>
        <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
        >
          Contact Me
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Modal Title
                    </h3>
                  </div>
                  {/*body*/}
                  <form onSubmit={handleFormSubmit}>
                    <div className="relative p-6 flex-auto">
                          <div className="">
                              <input onChange={handleInputChange} className="" type="text" name="name" placeholder="Full Name" required/>
                          </div>
                          <div className="">
                              <input onChange={handleInputChange} className="" type="email" name="email" placeholder="Email Address" required/>
                          </div>
                          <div className="">
                              <textarea onChange={handleInputChange} className="" placeholder="Your Message" name="message" rows="10" required></textarea>
                          </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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