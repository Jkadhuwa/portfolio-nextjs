import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectData } from "@/types";

interface Props {
  project: ProjectData;
}

const Projects = ({ project }: Props) => {
  return (
    <div className="flex justify-center p-12 hover:shadow-lg w-full lg:w-2/3">
      <div className="cursor-pointer group flex gap-12">
        <div className=" ">
          <Image
            src={project?.images[0].url}
            alt="Project"
            priority={false}
            height={200}
            width={200}
            className=" transition-all duration-500 rounded-md"
          />
        </div>
        <div className="space-y-4">
          <Link
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="projectLik"
            className="text-main-orange text-2xl "
          >
            {" "}
            {project.title}
          </Link>
          <p className="text-gray-300 text-xl"> {project.about}</p>
          <div className="border border-slate-600 w-fit rounded-md p-2 text-slate-600 mt-3 ">
            {project?.tags.map((tag, id) => (
              <span className="after:content-[','] last:after:content-[''] after:mr-1" key={id}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
