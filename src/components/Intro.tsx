import React from 'react';
import Image from "next/image";
import Banner from "@images/banner.jpg";

const Intro = () => {
  return (
    <div className="flex flex-row  text-gray-300  p-16">
      <div className="flex flex-col basis-1/2">
        <div className="max-w-sm">
          <h2 className="text-gray-800 font-medium text-4xl text-left mb-6  ">
            Building Solutions using Tech
          </h2>
        </div>
        <div className="flex">
          <span className="h-8 w-8 bg-indigo-700 rounded-full mt-1" />
          <span className="text-indigo-700 text-4xl font-bold mx-4">
            Experience
          </span>
        </div>
        <div className="mt-6">
          <p className="text-gray-800 font-light">
            A <span className="font-medium">Fullstack Web Developer</span> with
            extensive experience in Nodejs and its frameworks. I specialize in
            ReactJs, Nextjs for frontend and ExpressJs, NestJs and not limited
            to SpringBoot.
          </p>
        </div>
        <div className="mt-8">
          <button className="border rounded font-medium text-sm  p-2 text-white bg-indigo-700">
            Connect With Me
          </button>
        </div>
      </div>
      <div className="flex basis-1/2">
        <Image src={Banner} alt="Banner" objectPosition="center" />
      </div>
    </div>
  );
}

export default Intro;
