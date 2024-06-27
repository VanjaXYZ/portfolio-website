"use client";
import React, { useEffect, useState } from "react";
import { Projects } from "../_lib/types";
import { projects } from "../_lib/projects-data";

const Page = ({ params }: any) => {
  const [project, setProject] = useState<Projects | undefined>(undefined);

  useEffect(() => {
    const foundProject = projects.find(
      (project: Projects) => project.id === parseInt(params.id, 10)
    );
    setProject(foundProject);
  }, [params.id]);

  return (
    <section>
      {project ? (
        <div>
          <h1>{project.title}</h1>
          <p>{project.tech}</p>
        </div>
      ) : (
        <p>Project not found</p>
      )}
    </section>
  );
};

export default Page;
