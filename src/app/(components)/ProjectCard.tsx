import React from "react";
import { Projects } from "../_lib/types";
import clsx from "clsx";
import Link from "next/link";

// postavi kao linkove

const ProjectCard = ({ project }: { project: Projects }) => {
  return (
    <Link
      href={`/projects/${project?.id}`}
      className="py-2 border rounded-md px-1 w-full max-w-md flex flex-col group cursor-pointer gap-2 h-64 overflow-y-auto"
    >
      <h5 className="text-lg underline">{project.title}</h5>
      <em>{project.short_description}</em>
      <ul className="flex flex-wrap gap-2 my-2">
        {project.tech.map((tech: string) => (
          <li
            key={tech}
            className="bg-white/5 rounded-md px-1 group-hover:bg-slate-500"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex-grow">
        <span className="bg-white/5 rounded-md p-1 w-fit group-hover:bg-slate-500">
          {project.type}
        </span>
      </div>
      <span
        className={clsx(
          "w-fit rounded-md px-1 group-hover:bg-slate-500 self-end",
          {
            "bg-yellow-300 text-slate-900 uppercase font-semibold":
              project.status === "In progress",
          },
          {
            "bg-green-400 text-white font-semibold uppercase":
              project.status === "Completed",
          }
        )}
      >
        {project.status}
      </span>
    </Link>
  );
};

export default ProjectCard;
