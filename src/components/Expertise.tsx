import React, { useState } from "react";
import ExpertiseCard from "./ExpertiseCard";
import expertise from "../database/expertise";

const Expertise = () => {
  const [state, setState] = useState(expertise);
  return (
    <div className="flex flex-col md:flex-row my-12 bg-green-50 md:mx-12 md:px-16 md:py-12">
      <div className="md:basis-1/2">
        <div>
          <h3 className="uppercase text-gray-700 text-medium font-base ">
            My expertise
          </h3>
        </div>
        <div className="my-8">
          <h4 className="text-4xl font-medium">What I Do:</h4>
          <div className="flex space-x-6 mt-6 pr-36 md:pr-6">
            <span className="overflow-y-auto h-24 bg-green-200 w-1 " />
            <div>
              <p className="leading-loose font-light text-gray-500">
                I use the latest tech stack to come up with solutions which
                ensures clients applications are secure, fast and good user
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <button className="border rounded font-medium text-sm  p-2 text-white bg-indigo-700">
            Contact Me
          </button>
        </div>
      </div>
      <div className="md:basis-1/2">
        <div className="grid grid-rows-4 grid-flow-col px-4 gap-4 my-8 md:my-0 lg:grid-rows-2  ">
          {state?.map((expert) => (
            <ExpertiseCard
              key={expert.title}
              iconPrefix={expert?.iconPrefix}
              iconName={expert?.iconName}
              color={expert?.color}
              title={expert?.title}
              desc={expert?.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
