import { cn } from "@/lib/utils";
import { ProjectGrid } from './(projects)/project-grid';
import { Header } from "./ui/header-section";

// TODO: Carousel
// - Map all projects. If item is equal to index, display.
// - State of action, default is "next".
// - Framer Motion Variants of prevEnter (initial x: -256) and nextEnter (initial x: 256). exitLeft (exit x: -256) exitRight (exit x: -256)
// - If action is "next". initial is "nextEnter", exit is "exitLeft". Else initial is "prevEnter", exit is "exitRight"
// - On carousel action: update action to "next" or "prev". Then update index

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