import { ResumeList, Title } from "@components";

const Resume = () => {
  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="Resume" />
      <ResumeList />
    </section>
  );
};

export default Resume;
