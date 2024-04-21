import Hero from "@/components/hero";
import { Projects } from "@/components/projects";
import { AboutMe } from '../../components/about-me';

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
      <AboutMe />
      <Projects />
    </main>
  )
}
