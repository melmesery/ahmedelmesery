"use client";

import Image from "next/image";
import Link from "next/link";

export default async function Projects({ projects }: any) {
  return (
    <div className="projects_container">
      {projects &&
        projects.map((project: any) => (
          <Link
            key={project._id}
            href={`project/${project.slug}`}
            className="project"
          >
            <Image
              src={project.gif}
              alt={project.name}
              width={600}
              height={340}
              className="project_gif"
            />
            <Image
              src={project.mainImage}
              alt={project.name}
              width={600}
              height={340}
              className="project_img"
            />
            <div className="project_title">
              <h1>{project.name}</h1>
            </div>
          </Link>
        ))}
    </div>
  );
}
