import Hero from "@/components/hero";
import { Projects } from "@/components/projects";
import { AboutMe } from '../../components/about-me';

// TODO: Customized border
// TODO: min-heights for each subsection
// TODO: Content Backgrounds + Grid Backgrounds
// TODO: Animate transition state change

export default function Page() {
  return (
    <main className="flex flex-col overflow-x-clip items-center justify-between">
      <Hero />
      <Projects />
      <AboutMe />
    </main>
  )
}
