import React from "react";
import Image from "next/image";
import Banner from "@images/here.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Intro = () => {
  return (
    <div className="flex text-gray-300 ">
      <div className="md:basis-1/2 px-6 ">
        <div className=" ">
          <h2 className="font-nunito text-gray-800 font-bold text-4xl mb-6  ">
            Building Solutions using Tech
          </h2>
        </div>
        <div className="flex">
          <div className=" flex justify-center h-10 w-10 bg-indigo-700 rounded-full  ">
            <FontAwesomeIcon icon={["fas", "star"]} size="xs" />
            <FontAwesomeIcon icon={["fas", "star"]} size="xs" className="" />
            <FontAwesomeIcon icon={["fas", "star"]} size="xs" />
            <FontAwesomeIcon icon={["fas", "star"]} size="xs" />
          </div>
          <h3 className="flex font-nunito text-indigo-700 text-4xl font-bold mx-4">
            Experience
          </h3>
        </div>
        <div className="flex font-nunito mt-6">
          <p className="text-gray-500 font-extralight font-raleway">
            A <span className="font-medium">Software Engineer based in Nairobi, Kenya</span>  with
            extensive experience in Nodejs and its frameworks. I specialize in
            ReactJs, Nextjs for frontend and ExpressJs, NestJs and not limited
            to SpringBoot.
          </p>
        </div>
        <div className="mt-8">
          <button className="border rounded font-extralight p-3 text-white bg-indigo-700 font-nunito  h-12 hover:bg-indigo-500">
            Connect With Me
          </button>
        </div>
      </div>
      <div className="hidden md:flex md:basis-1/2  md:items-center ">
        <Image src={Banner} alt="Banner" objectPosition="center" />
      </div>
      
    </div>
  );
};

export default Intro;
