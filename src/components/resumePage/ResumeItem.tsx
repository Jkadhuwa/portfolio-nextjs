import { ExperienceData } from "@/types";
import Image from "next/image";

interface Props {
  resume: ExperienceData;
  border?: boolean;
}

const ResumeItem = ({ resume, border }: Props) => {
  return (
    <div className={`pt-11 ${border ? "customLine borderLeft pb-11" : "pb-3"}`}>
      <h2
        className={`${
          resume.badge.endsWith("Present") ? "text-main-orange border-main-orange" : "text-gray-500 border-gray-500"
        } border border-solid text-xl py-0.5 px-3 tracking-wide inline-block`}
      >
        {resume?.badge}
      </h2>
      <div className="flex items-center justify-between flex-wrap">
        <h3 className="text-2xl capitalize font-medium text-gray-300 tracking-wide mt-5 mb-4">{resume?.title}</h3>
        {/* {resume?.logo && (
          <Image src={resume.logo.url} alt={resume.logoAlt} width={100} height={20} className=" opacity-80  " />
        )} */}
      </div>
      <p className="text-gray-500 text-xl capitalize tracking-wider">{resume?.subTitle}</p>
      <p className="text-gray-500 text-2xl capitalize tracking-wide mt-5 leading-relaxed">{resume?.desc}</p>
    </div>
  );
};

export default ResumeItem;
