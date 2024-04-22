import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Header } from "./ui/header-section";

export function Projects() {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-full h-fit bg-primary-100 overflow-clip",
        (false && "max-h-0 animate-show-sections") // toggle hero intro for development
      )}
    >
      <Header header="Projects">
        I make applications with quality as top priority. Presented are some of the projects that I&apos;ve worked on. Not only will they validate the skills that I present myself with— they reflect real world problems.
      </Header>
      <div
        className="flex flex-row justify-center items-center w-full h-fit md:h-[100vh] text-neutral-black px-4 pb-14 md:px-28 md:pb-24"
      >
        <div
          className="flex flex-row justify-center items-center w-full lg:px-28"
        >
          <Button
            className="w-full aspect-[16/9] bg-project1 bg-cover"
          />
        </div>
      </div>
  </div>
  )
}