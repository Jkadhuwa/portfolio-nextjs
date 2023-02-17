import React from "react";
import { useQuery } from "@apollo/client";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import profileOperations from "@graphQl/profileOps";
 import { MyInfo, AboutMeSkeleton } from "@components";



interface GetUserInfo {
  profiles: [{ bio: string, cv:{url: string}}];
}

const AboutMe = () => {
  const { loading, data } = useQuery<GetUserInfo>(profileOperations.Queries.getBio);
  

  if (loading || data === undefined) return <AboutMeSkeleton />;
  const {cv, bio} = data?.profiles[0];

  
  return (
    <div className="px-12 py-10 ">
      <div className="px-12 py-10">
        <article className="prose max-w-none prose-h2:mb-2.5 prose-h2:text-[1.6rem] prose-p:text-2xl prose-p:leading-[1.65]">
         {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{bio}</ReactMarkdown> */}
        </article>

        <ul className="location grid grid-cols-1 sm:grid-cols-2 mt-6 gap-y-2">
          <MyInfo field="freelance"  value="Available" />
          <MyInfo field="residence" value="Nairob, Kenya" />
        </ul>

        <a
          rel="noreferrer"
          href={cv.url}
          target="_blank"
          className="text-gray-300 uppercase text-xl border-2 border-solid border-gray-300 w-56 h-14 rounded-full font-semibold flex items-center justify-center mx-auto mt-36 hover:text-main-orange hover:border-main-orange transition-all duration-200"
        >
          download cv
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
