import client from "@/apollo-client";
import { Title, AboutMe, Profile, Services, Facts } from "@components";
import { ProfileData } from "@/types";
import profileOperations from "@/src/graphQl/profileOps";
import type { NextPage } from "next";

interface Props {
  profileData: ProfileData;
}

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
    
     
      {/* <Title name="pricing" />
      <Prices />

      <Title name="clients" />
      <BrandLogos />

      <Title name="testimonials" />
      <Testimonials />

      <Title name="fun facts" />
      <Facts /> */}
      <Title name="fun facts" />
      <Facts />
    </section>
  );
};
export default About;

export async function getStaticProps() {
  const { data } = await client.query({
    query: profileOperations.Queries.getProfile,
  });

  return {
    props: {
      profileData: data.profiles[0],
      revalidate: 3600,
    },
  };
}
