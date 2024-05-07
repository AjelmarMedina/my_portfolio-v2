import { cn } from "@/lib/utils";
import { ProjectGrid } from './(projects)/project-grid';
import { Header } from "./ui/header-section";

export function Projects() {
  return (
    <div
      id="projects"
      className={cn(
        "flex flex-col items-center w-full h-fit bg-primary-100 overflow-clip",
        // (true && "max-h-0 animate-show-sections") // toggle hero intro for development
      )}
    >
      <Header header="Projects">
        I make applications with quality as top priority. Presented are some of the projects that I&apos;ve worked on. Not only will they validate the skills that I present myself with— they reflect real world problems.
      </Header>
      <ProjectGrid />
  </div>
  )
}