import React, { useState } from "react";
import Link from "next/link";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { ProjectData } from "@/types";

interface ProjectProps {
  project: ProjectData;
}
const Project = ({ project }: ProjectProps) => {
  const [currentIndex, setIndex] = useState(0);

  const prevSlide = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? project.images.length - 1 : currentIndex - 1;
    setIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastimage = currentIndex === project.images.length - 1;
    const newIndex = isLastimage ? 0 : currentIndex + 1;
    setIndex(newIndex)
  };

  return (
    <div className="py-12 px-20 ">
      <div className="divider bg-slate-400 h-[1px]" />
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="pt-8 customeLine before:bottom-0 relative ">
          <h1 className="text-slate-300 text-6xl font-medium">{project.title}</h1>
          <div className="flex border border-slate-400 w-fit h-12 rounded-md text-gray-400 mt-8 justify-center items-center p-3 text-lg">
            {project.tags.map((tag, id) => (
              <span key={id} className="px-0.5 after:content-[','] last:after:content-[''] tracking-wider">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-4 mt-10 mb-14">
            <label htmlFor="projectLink" className="text-slate-300 text-xl capitalize">
              Project link
            </label>
            <Link
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="projectLik"
              className="text-main-orange"
            >
              {project.projectUrl}
            </Link>
          </div>
        </div>
        <div className="group relative w-full sm:w-1/2 h-56 ">
          <div
            className="w-full h-full rounded-md bg-center bg-cover duration-500 "
            style={{ backgroundImage: `url(${project.images[currentIndex].url})` }}
          ></div>
          {/* Left Arrow */}
          <div className="hidden  group-hover:block absolute top-[50%] translate-y-[-50%] -translate-x-0 left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronLeft size={20} onClick={prevSlide} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] translate-y-[-50%] -translate-x-0 right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronRight onClick={nextSlide} size={20} />
          </div>
        </div>
      </div>
      <div className="flex divider bg-slate-400 h-[1px] w-5/6 mx-auto mb-12" />

      <div className="grid grid-cols-1 sm:grid-cols-3 w-5/6 mx-auto space-x-5">
        <div className="flex flex-col">
          <label htmlFor="" className="text-slate-600 mb-6 text-2xl font-medium tracking-wider">
            Client
          </label>
          <h3 className="text-slate-200 text-xl leading-[1.8]">{project.client}</h3>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-slate-600 mb-6 text-2xl font-medium tracking-wider">
            About
          </label>
          <p className="text-slate-200 text-xl leading-[1.8]">{project.about}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-slate-600 mb-6 text-2xl font-medium tracking-wider">
            What I have done
          </label>
          <p className="text-slate-200 text-xl leading-[1.8]">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
