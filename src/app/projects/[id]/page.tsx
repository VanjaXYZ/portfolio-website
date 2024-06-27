"use client";
import { projects } from "@/app/_lib/projects-data";
import { Projects } from "@/app/_lib/types";
import React, { useEffect, useState } from "react";

const Page = ({ params }: any) => {
  const [project, setProject] = useState<Projects | undefined>(undefined);

  useEffect(() => {
    const foundProject = projects.find(
      (project: Projects) => project.id === parseInt(params.id, 10)
    );
    setProject(foundProject);
  }, [params.id]);

  return (
    <section className="lg:container m-auto py-4 px-1">
      {project ? (
        <>
          <h1 className="uppercase font-bold text-center text-3xl lg:text-5xl">
            {project.title}
          </h1>
          <article className="flex flex-col py-8">
            <p className="flex gap-4 flex-col">
              <strong className="text-xl">Technologies:</strong>
              <div className="grid grid-cols-4 w-fit gap-2 uppercase">
                {project.tech.map((tech: string, index: number) => (
                  <span
                    key={`${tech}-${index}`}
                    className="font-semibold p-2 bg-white/5 rounded-md text-sm sm:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </p>
          </article>
          <article>{project.complete_description}</article>
        </>
      ) : (
        <p className="flex justify-center items-center h-screen w-full text-2xl uppercase antialiased font-bold">
          Project not found
        </p>
      )}
    </section>
  );
};

export default Page;
