"use client";

import Image from "next/image";
import Link from "next/link";
import { getProjects } from "../sanity/sanity-utils.ts";

export const revalidate = 10;

export default async function Projects() {
  const projects = await getProjects();
  console.log(projects);
  return (
    <div className="projects_container">
      {projects &&
        projects.map((project) => (
          <Link
            key={project._id}
            href={`project/${project.slug}`}
            className="project"
          >
            <Image
              src={project.mainImage}
              alt={project.name}
              width={600}
              height={340}
            />
            <div className="project_title">
              <h1>{project.name}</h1>
            </div>
          </Link>
        ))}
    </div>
  );
}
