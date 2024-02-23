import React from "react";
import Title from "../components/Title";
import { portofolioSamples } from "../data/data";
import Project from "../components/Project";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-foreground w-full overflow-hidden py-20 "
    >
      <div className="max-w-7xl w-11/12 mx-auto flex flex-col gap-20">
        <Title text="Portfolio" />
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8  md:gap-12 row-auto">
          {portofolioSamples.map((item, i) => (
            <Project item={item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
