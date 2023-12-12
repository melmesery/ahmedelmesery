import Hero from "@/components/Hero.tsx";
import Projects from "@/components/Projects.tsx";
import { getProjects } from "../../sanity/sanity-utils.ts";
 
export const revalidate = 10;

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="home">
      <Hero />
      <Projects projects={projects} />
     </div>
  );
}
