import React from "react";
import Image from 'next/image';
import AboutImage from '@images/aboutMe.png';


const AboutMe = () => {
  return (
    <div className="flex flex-col py-16 md:flex-row bg-gray-900 md:mx-12 ">
      <div className="hidden md:flex md:px-8 md:basis-1/2">
        <Image src={AboutImage} alt="about image"/>
      </div>
      <div className="md:basis-1/2 p-8 md:p-10 lg:p-16 space-y-8 ">
        <div className="flex justify-start space-y-8">
          <h3 className="text-gray-600 uppercase font-medium  lg:tracking-wide">
            Who is Musinda Kadhuwa
          </h3>
        </div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0">
          <span className="flex mx-auto h-12 w-12 md:w-20 md:h:14 lg:w-14 lg:h-14 bg-indigo-600 rounded-full md:mx-0 ">
          </span>
          <h3 className="flex font-medium text-gray-200 text-2xl md:text-4xl items-center ml-3">
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
