import React from "react";
import Intro from "@components/Intro";
import Counts from "@components/Counts";
import AboutMe from "@components/AboutMe";
import Expertise from "@components/Expertise";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * Component for Homepage
 *
 * @returns
 */

const Homepage = () => {
  return (
    <div className="">
      <section className=" px-8 py-12 md:px-12 md:py-16 lg:mx-32 bg-gray-10 shadow-sm md:mx-10 ">
        <Intro />
      </section>
      <section className="py-12 md:mx-5">
        <Counts />
      </section>
      <section className="py-12">
        <AboutMe />
      </section>
      <section className="py-12">
        <Expertise />
      </section>
    </div>
  );
};

export default Homepage;
