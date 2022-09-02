import React from "react";
import {FaUserCircle} from 'react-icons/fa'
import PracticeData from "../data/PracticeData";

function ProjectCardHeader() {
    const data = PracticeData;
    return (
        <div className="w-full">
            <div className="container border-2 border-zinc-800 justify-between w-full flex">
                <div className="">
                    <FaUserCircle />
                </div>
                <h2 className=""
                >
                    {data[0].username}
                </h2>
                <h3
                    
                    className=""
                >
                    {data[0].request.title}
                </h3>
            </div>
        </div>
    );
}

export default ProjectCardHeader;
