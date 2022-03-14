import React from "react";

const AboutMe = () => {
  return (
    <div className="flex bg-gray-900 mx-12 my-24 ">
      <div className="basis-1/2">here</div>
      <div className="basis-1/2 p-16 space-y-8">
        <div className="flex justify-start space-y-8">
          <h3 className="text-gray-600 uppercase font-medium  lg:tracking-wide">
            Who is Musinda Kadhuwa
          </h3>
        </div>
        <div className="flex ">
          <span className="h-12 w-12 bg-indigo-600 rounded-full">
            {/* <FontAwesomeIcon icon={["fas", "user"]} color="white" /> */}
          </span>
          <h3 className="flex font-medium text-gray-200 text-4xl items-center ml-3">
            A Bit More About Me
          </h3>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-300 font-light  mb-8">
            <p className="mb-4">
              In the past 3 years I have been working as a Software Engineer(Web
              Developer) designing and developing fast and scalable APIs and
              responsive frontends.
            </p>
            <p></p>
          </span>
          <button className="w-24 rounded font-medium text-medium  p-2 text-white bg-indigo-700">
            More ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
