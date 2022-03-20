import React from "react";

const Counts = () => {
  return (
    <div className="md:block mt-28 m-36">
      <div className=" border-gray-100 border " />
      <div className="grid grid-cols-4 gap-4 place-items-center p-16">
        <div className="flex flex-col text-center">
          <span className="text-gray-900 text-4xl font-medium">2+</span>
          <span className="text-gray-400 font-medium uppercase text-sm mt-2">
            Years of experience
          </span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-gray-900 text-4xl font-medium">12+</span>
          <span className="text-gray-400 font-medium uppercase text-sm mt-2">
            PROJECTS FINISHED
          </span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-gray-900 text-4xl font-medium">2+</span>
          <span className="text-gray-400 font-medium uppercase text-sm mt-2">
            Certifications
          </span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-gray-900 text-4xl font-medium">5+</span>
          <span className="text-gray-400 font-medium uppercase text-sm mt-2">
            Happy Clients
          </span>
        </div>
      </div>

      <div className="flex  border-gray-100 border" />
    </div>
  );
};

export default Counts;
