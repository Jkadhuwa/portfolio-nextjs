import { useQuery } from "@apollo/client";
import { Service, Title } from "@components";
// import { services } from "@/data";
import { ServiceData } from "@/types";
import serviceOps from "@/src/graphQl/serviceOps";


interface ServiceDataProp {
  services: ServiceData[];
}

const Services = () => {
  const { data, error, loading } = useQuery<ServiceDataProp>(serviceOps.Queries.getServices);
  if (loading) return <></>;
  if (error || data === undefined) return <></>;

  const {services} = data;

  

  return (
    <div className="lg:h-full h-[95rem] overflow-y-scroll myScroll">
      <Title name="Services" />
      <ul className="services grid grid-cols-1 sm:grid-cols-2 relative vCustomLine before:left-1/2 before:hidden sm:before:block before:-translate-x-1/2">
        {services.map((service, idx) => (
          <Service
            key={service.id}
            name={service.title}
            desc={service.description}
             icon={service.icon}
            border={idx < data.services.length - 2}
            last={idx === data.services.length - 1}
          />
        ))}
      </ul>
    </div>
  );
};

export default Services;
