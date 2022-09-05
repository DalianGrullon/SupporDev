import React from "react";
// import ProjectCardHeader from "./ProjectCardHeader";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { FaUserCircle } from "react-icons/fa";
import { QUERY_REQUEST } from "../utils/queries";

const ProjectCard = () => {
  // useParams hook to get id of request, then query database for single request
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
        <div>
          <button className="btn">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
