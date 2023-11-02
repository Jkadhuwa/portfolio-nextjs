import { useQuery } from "@apollo/client";
import Project from "./Project";
import Title from "../Title";
import Projects from "./Projects";
import { ProjectQuery } from "@/types";
import portfolioOps from "@/src/graphQl/portfolioOps";

export default function Portfolio() {
  const { loading, error, data } = useQuery<ProjectQuery>(portfolioOps.Queries.getProjects);
  if (loading || data === undefined) return <div>Loading</div>;
  if (error) return <>Error</>;

  return (
    <div className="h-full myScroll overflow-y-scroll">
      <Title name="Projects" />
      <div className="py-8 px-12 grid ">
        {data.projects?.map((project) => (
          <Projects key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
