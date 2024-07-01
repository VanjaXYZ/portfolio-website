"use client";
import { projects } from "@/app/_lib/projects-data";
import { Projects } from "@/app/_lib/types";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";

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
          <Link href={"/"}>
            <CircleArrowLeft size={40} />
          </Link>
          <h1 className="uppercase font-bold text-center text-3xl lg:text-5xl">
            {project.title}
          </h1>
          <article className="flex flex-col py-8">
            <div className="flex gap-4 flex-col">
              <strong className="text-xl">Technologies:</strong>
              <div className="grid grid-cols-4 w-fit gap-2 uppercase">
                {project.tech.map((tech: string, index: number) => (
                  <motion.span
                    key={`${tech}-${index}`}
                    className="font-semibold p-2 bg-white/5 rounded-md text-sm sm:text-base"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <p>
                Link to website:{" "}
                <Link
                  className="underline"
                  href={(project?.link as string) || "/"}
                  target="_blank"
                >
                  {project?.link || "Not deployed..."}
                </Link>
              </p>
            </div>
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
