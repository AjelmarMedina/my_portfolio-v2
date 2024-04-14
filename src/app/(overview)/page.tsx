import { Certifications } from '@/components/(about-me)/Certifications';
import { Experiences } from '@/components/(about-me)/Experiences';
import { Skillsets } from '@/components/(about-me)/Skillsets';
import Hero from "@/components/hero";
import { Header } from "@/components/ui/header-section";

// TODO: Customized border
// TODO: min-heights for each subsection
// TODO: Content Backgrounds + Grid Backgrounds
// TODO: Animate scroll trigger
// TODO: Animate transition state change
// TODO: Bring back GSAP

export default function Page() {
  return (
    <main className="flex flex-col overflow-x-clip items-center justify-between">
      <Hero />
      <div
        className="flex flex-col items-center w-full h-fit max-h-0 overflow-clip animate-show-sections"
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
      <div
        className="flex flex-col items-center w-full h-fit max-h-0 overflow-clip animate-show-sections"
      >

      </div>
    </main>
  )
}
