import React, { Fragment } from "react";
import { FaGraduationCap, FaNetworkWired } from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";
import { IconTitle, ResumeItem, ResumeSkeleton } from "@components";
import { ExperienceData } from "@/types";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import resumeOps from "@graphQl/resumeOps";

interface ExperienceQuery {
  resumes: ExperienceData[];
}

const ResumeList = () => {
  const { data, error } = useQuery<ExperienceQuery>(resumeOps.Queries.getExperiences);

  const filteredResumeData = useMemo<[ExperienceData[], ExperienceData[], ExperienceData[]] | undefined>(() => {
    if (data === undefined) return undefined;
    const experience: ExperienceData[] = [];
    const education: ExperienceData[] = [];
    const certification: ExperienceData[] = [];

    data.resumes.forEach((resume) => {
      if (resume.experience) {
        experience.push(resume);
      }
      if (resume.certificate) {
        certification.push(resume);
      }
      if (resume.education) {
        education.push(resume);
      }
    });
    return [experience, education, certification];
  }, [data]);

  return (
    <ul className="grid sm:grid-cols-3 grid-cols-1">
      <li className="py-8 px-12">
        <IconTitle title="experience" Icon={FaNetworkWired} />
        {filteredResumeData === undefined ? (
          <Fragment>
            <ResumeSkeleton border />
            <ResumeSkeleton border />
            <ResumeSkeleton />
          </Fragment>
        ) : (
          filteredResumeData[0].map((resume, idx) => (
            <ResumeItem key={resume.id} resume={resume} border={idx !== filteredResumeData[0].length - 1} />
          ))
        )}
      </li>
      <li className="py-8 px-12 relative vCustomLine sm:before:block before:hidden before:left-0">
        <IconTitle title="Education" Icon={FaGraduationCap} />
        {filteredResumeData === undefined ? (
          <Fragment>
            <ResumeSkeleton border />
            <ResumeSkeleton border />
            <ResumeSkeleton />
          </Fragment>
        ) : (
          filteredResumeData[1].map((resume, idx) => (
            <ResumeItem key={resume.id} resume={resume} border={idx !== filteredResumeData[1].length - 1} />
          ))
        )}
      </li>
      <li className="py-8 px-12 relative vCustomLine sm:before:block before:hidden before:left-0">
        <IconTitle title="Certification" Icon={BsFillAwardFill} />
        {filteredResumeData === undefined ? (
          <Fragment>
            <ResumeSkeleton border />
            <ResumeSkeleton border />
            <ResumeSkeleton />
          </Fragment>
        ) : (
          filteredResumeData[2].map((resume, idx) => (
            <ResumeItem key={resume.id} resume={resume} border={idx !== filteredResumeData[2].length - 1} />
          ))
        )}
      </li>
    </ul>
  );
};

export default ResumeList;
