import React from "react";
import Image from "next/image";
import styles from "@styles/homepage.module.scss";

/**
 * Component for Homepage
 *
 * @returns
 */

const Homepage = () => {
  return (
    <section className="overflow-x-hidden">
      <article>
        <Image
          className={styles.hompageImage}
          src="/images/bg1.jpg"
          layout="fill"
        />
        <div
          className={`${styles.homepageText} flex flex-col justify-center items-center h-screen text-gray-300 space-y-2`}
        >
          <p className="text-3xl md:text-3xl flex flex-wrap md:text-4x uppercase">
            Musinda Kadhuwa
          </p>
          <hr className="w-80  md:w-96 h-0.5 bg-gray-300 " />
          <p className="flex text-2xl text-center md:justify-center ">
            Software engineer • Entreprenuer{" "}
          </p>
          <hr className="w-80  h-0.5 bg-gray-300" />
          <p className="flex justify-center normal-case text-xl">
            Passionate about tech.
          </p>
        </div>
      </article>
      <article className="grid grid-cols-1 h-screen justify-center  md:grid-cols-2 mt-24">
        <div className="flex w-60 h-60 ml-16 -mb- sm:w-screen md:ml-48 lg:ml-24">
          <img
            src="https://res.cloudinary.com/uninet/image/upload/v1621096473/liqp0x93wdb49qtc8lf7.jpg"
            alt="Profile_picture"
            className="object-fill rounded-full md:h-96 w-96"
          />
        </div>
        <div className="place-items-center font-extralight md:mt-0 lg:-ml-12">
          <h3 className="flex justify-center text-4xl -mt-4  md:mb-4  lg:mt-12">
            About Me.
          </h3>
          <p className="-ml-4 -mt-4 justify-center md:flex flex-wrap text-xl text-center px-12 lg:mt-4">
            I am a passionate Full stack Software Developer with vast experince
            in web applications using Javascript, NodeJS, ReactJS, Mongo,
            PostgreSQL and other libraries and frameworks. A 2017 graduate from
            Kabarak University, School of Science and Bio-Informatics in Nakuru
            Kenya with a Second Class Honours degree in Computer Science.
          </p>
        </div>
      </article>
      <article className="h-5/6 grid bg-white justify center md:grid-cols-2 -mt-24">
        <div>
          <img
            src="https://res.cloudinary.com/uninet/image/upload/v1621096340/uwi6smzbpxdxfpeflcnp.jpg"
            alt="DevImage"
            className="h-64 w-64 mt-32 ml-20 md:ml-24"
          />
        </div>
        <div className="mt-20 mr-16  text-xl font-extralight mb-24">
          <h3 className="grid text-4xl  mb-12 justify-center ">What I do.</h3>
          <div className="ml-16 md:ml-0">
            <p>
              ⚡ I design and build responsive and highly attractive web
              application frontends
            </p>
            <p>
              ⚡ I create application backend using Laravel framework, NodeJs
              and Express framework.
            </p>
            <p>
              ⚡ I use the Test-Driven Development (TDD) methodology to develop
              all the applications.
            </p>
            <p>
              ⚡ I employ Continous-Integration and Continous-Deployment (CI/CD)
              techniques.
            </p>
          </div>
        </div>
      </article>
      <article className="grid font-extralight mb-16 md:grid-cols-2">
        <div>
          <div className="ml-24 mt-24 mb-4">
            <h3 className="text-4xl ">Hobbies.</h3>
          </div>
          <div className="grid justify-center text-xl -ml-4 md:-ml-52 lg:mr-8">
            <p>⚡ Playing simulator games</p>
            <p>⚡ Watching Netflix</p>
            <p>⚡ Watching footbal matches.</p>
          </div>
        </div>
        <div>
          <div className="ml-24 mt-24 mb-4">
            <h3 className="text-4xl font-extralight">Fun Fact.</h3>
          </div>
          <div className="grid justify-center text-xl ml-12  mb-12 md:-ml-4 lg:-ml-12">
            <p>⚡ I dont like swimming and I live next to the ocean. </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Homepage;
