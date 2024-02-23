import React from "react";
import Title from "../components/Title";
import Service from "../components/Service";
import { services } from "../data/data";

const Services = () => {
  return (
    <section className="bg-foreground w-full overflow-hidden py-20">
      <div className="max-w-7xl w-11/12 mx-auto flex flex-col gap-20">
        <Title text="My Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {services.map((service, i) => (
            <Service service={service} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
