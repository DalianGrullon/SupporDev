import React from "react";
import ProjectCardHeader from "./ProjectCardHeader";
import PracticeData from "../data/PracticeData";
import { FaUserCircle } from "react-icons/fa";

const ProjectCard = () => {
  const data = PracticeData;
  return (
    <div className="card text-4xl text-primary bg-base-200 col-span-8 col-start-3 row-span-4 row-start-2 mr-4 mx-auto">
      <div className="card-body   w-full">
        <div className="card-title rounded-lg text-3xl p-3 justify-between flex bg-base-300">
          <div className="flex items-center">
            <FaUserCircle size={50}/>
            <h2 className="pl-2">{data[0].username}</h2>
          </div>
          <div>
            <h3 className="">{data[0].request.title}</h3>
          </div>
        </div>
        <div className="text-xl">
            <p>{data[0].request.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
