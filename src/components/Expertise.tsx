import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import expertise from "database/expertise";

const Expertise = () => {
  return (
    <div className="flex my-12 bg-green-50  mx-12 px-16 py-12">
      <div className="basis-1/2">
        <div>
          <h3 className="uppercase text-gray-700 text-medium font-base ">
            My expertise
          </h3>
        </div>
        <div className="my-8">
          <h4 className="text-4xl font-medium">What I Do:</h4>
          <div className="flex space-x-6 mt-6 pr-36">
            <span className="coverflow-y-auto h-24 bg-green-200 w-1" />
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
      <div className="basis-1/2">
        <div className="grid grid-rows-2 grid-flow-col gap-4 ">
          {expertise?.map((expert) => (
            <ExpertiseCard
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
