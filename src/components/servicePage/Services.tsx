import { Service, Title } from "@components";
import { services } from "@/data";
import { ServiceData } from "@/types";

const Services = () => {
  return (
    <div 
    className="lg:h-full h-[95rem] overflow-y-scroll myScroll">
      <Title name="Services" />
      <ul className="services grid grid-cols-1 sm:grid-cols-2 relative vCustomLine before:left-1/2 before:hidden sm:before:block before:-translate-x-1/2">
        {services.map((s: ServiceData, idx) => (
          <Service
            key={s.id}
            name={s.title}
            desc={s.description}
            Icon={s.Icon}
            border={idx < services.length - 2}
            last={idx === services.length - 1}
          />
        ))}
      </ul>
    </div>
  );
};

export default Services;
