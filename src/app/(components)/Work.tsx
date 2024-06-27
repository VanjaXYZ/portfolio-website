import React from "react";
import ProjectCard from "./ProjectCard";
import { Projects } from "../_lib/types";
import { projects } from "../_lib/projects-data";

const Work = () => {
  return (
    <section id="work" className="w-full space-y-6">
      <h2 className="text-2xl font-bold text-start">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-20 place-items-center">
        {projects.map((project: Projects, index: number) => (
          <ProjectCard
            project={project}
            key={`${index}-${project.short_description}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
