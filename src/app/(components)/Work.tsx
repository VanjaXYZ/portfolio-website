import React from "react";
import ProjectCard from "./ProjectCard";
import { Projects } from "../_lib/types";

const Work = () => {
  const projects = [
    {
      title: "Online Book Library",
      type: "Fullstack",
      short_description: "Create your own online book library!",
      tech: ["Next.js 14", "Nest.js", "TailwindCSS"],
      status: "Completed",
    },
    {
      title: "My AI Diary",
      type: "Fullstack",
      short_description: "Write your daily diary entries with AI helper...",
      tech: ["Next.js 14", "Nest.js", "TailwindCSS", "shadCn"],
      status: "In progress",
    },
    {
      title: "Football Stats",
      type: "Frontend",
      short_description: "Check the newest results in world of soccer...",
      tech: ["Next.js 14", "TailwindCSS", "shadCn"],
      status: "In progress",
    },
    {
      title: "Beehive",
      type: "Frontend",
      short_description: "Learn all about beekeeping in one place..",
      tech: ["Next.js 14", "TailwindCSS", "shadCn"],
      status: "In progress",
    },
  ];
  return (
    <section id="work" className="flex flex-col w-full space-y-6">
      <h2 className="text-2xl font-bold text-start">Projects</h2>
      {projects.map((project: Projects) => (
        <ProjectCard project={project} />
      ))}
    </section>
  );
};

export default Work;
