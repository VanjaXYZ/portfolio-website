import React from "react";
import { Projects } from "../_lib/types";
import clsx from "clsx";

// postavi kao linkove

const ProjectCard = ({ project }: { project: Projects }) => {
  return (
    <div className="py-2 border rounded-md px-1 w-full hover:bg-white hover:text-black flex flex-col group cursor-pointer gap-2">
      <h5 className="text-lg underline">{project.title}</h5>
      <em>{project.short_description}</em>
      <ul className="flex flex-wrap gap-2 my-2">
        {project.tech.map((tech: string) => (
          <li
            key={tech}
            className="bg-white/5 rounded-md px-1 group-hover:bg-slate-200"
          >
            {tech}
          </li>
        ))}
      </ul>
      <span className="bg-white/5 rounded-md px-1 w-fit group-hover:bg-slate-200">
        {project.type}
      </span>
      <span
        className={clsx(
          "w-fit rounded-md px-1 group-hover:bg-slate-200 self-end",
          {
            "text-yellow-300": project.status === "In progress",
          },
          {
            "text-green-400": project.status === "Completed",
          }
        )}
      >
        {project.status}
      </span>
    </div>
  );
};

export default ProjectCard;
