import React from "react";
import { IoWarning } from "react-icons/io5";

const NotFound = () => {
  return (
    <div className="text-4xl text-primary bg-base-100 col-span-4 col-start-4 row-span-4 row-start-2 mr-4 mx-auto">
      <div className="flex-col ">
        <div className="flex justify-center">
          <IoWarning className="text-red-600" size={60} />
        </div>
        <div className="py-4">404 Page Not Found</div>
      </div>
    </div>
  );
};

export default NotFound;
