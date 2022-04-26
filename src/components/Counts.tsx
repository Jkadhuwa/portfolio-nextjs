import React from "react";

const Counts = () => {
  return (
    <div className="md:mx-28 my-12">
      <div className="border-gray-100 border " />
      <div className="grid p-8 space-y-8 md:space-y-0 md:grid-cols-4 md:gap-4 md:place-items-center md:p-16 ">
        <div className="flex flex-col text-center  justify-center ">
          <span className="text-gray-900 text-4xl font-medium">2+</span>
          <span className="text-gray-400 font-medium uppercase text-sm mt-2">
            Years of experience
          </span>
        </div>
        <div className="flex flex-col text-center  justify-center ">
          <span className="text-gray-900 text-4xl font-medium">12+</span>
          <span className="text-gray-400 font-medium uppercase text-sm mt-2">
            PROJECTS FINISHED
          </span>
        </div>
        <div className="flex flex-col text-center justify-center">
          <span className=" text-gray-900 text-4xl font-medium ">2+</span>
          <span className="text-gray-400 font-medium uppercase text-sm mt-2 md:h-10 lg:h-5">
            Certifications
          </span>
        </div>
        <div className="flex flex-col text-center  justify-center ">
          <span className="text-gray-900 text-4xl font-medium">5+</span>
          <span className="text-gray-400 font-medium uppercase text-sm mt-2 md:h-10 lg:h-5 ">
            Happy Clients
          </span>
        </div>
      </div>

      <div className="flex  border-gray-100 border" />
    </div>
  );
};

export default Counts;
