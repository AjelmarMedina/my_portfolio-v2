import { Certifications } from '@/components/(about-me)/Certifications';
import { Experiences } from '@/components/(about-me)/Experiences';
import { Skillsets } from '@/components/(about-me)/Skillsets';
import Hero from "@/components/hero";
import { Header } from "@/components/ui/header-section";

export default function Page() {
  return (
    <main className="flex flex-col overflow-x-clip items-center justify-between">
      <Hero />
      <div
        className="flex flex-col items-center w-full h-fit max-h-0 overflow-clip animate-show-sections"
      >
        <Header
          header="About Me"
          paragraph="Learn about the various qualities that I possess and continue to uphold. I talk about my skills, experiences, and even my certifications or recognitions. Going in-depth with each point of interest describing how I have shaped them, and utilized for the modern environment I live in."
        />
        <Skillsets />
        <Experiences />
        <Certifications />
      </div>
    </main>
  )
}
