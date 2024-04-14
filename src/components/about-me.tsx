import { Certifications } from "./(about-me)/Certifications";
import { Experiences } from "./(about-me)/Experiences";
import { Skillsets } from "./(about-me)/Skillsets";
import { Header } from "./ui/header-section";

export function AboutMe() {
  return (
    <div
      className="flex flex-col items-center w-full h-fit bg-neutral-50 max-h-0 overflow-clip animate-show-sections"
    >
      <Header
        header="About Me"
      >
        Learn about the various qualities that I possess and continue to uphold. I talk about my skills, experiences, and even my certifications or recognitions. Going in-depth with each point of interest describing how I have shaped them, and utilized for the modern environment I live in.
      </Header>
      <Skillsets />
      <Experiences />
      <Certifications />
    </div>
  )
}