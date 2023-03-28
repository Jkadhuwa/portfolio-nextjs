import { Title, Profile, Facts } from "@components";
import AboutMe from "./AboutMe";


const About = () => {
  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="about me" />
      <div className="lg:flex">
        <div className="lg:flex-initial lg:w-30">
          <Profile />
        </div>
        <div className="lg:flex-initial lg:w-70">
          <AboutMe />
        </div>
      </div>

      <Title name="fun facts" />
      <Facts />
    </section>
  );
};
export default About;
