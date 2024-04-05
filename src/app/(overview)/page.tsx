import Hero from "@/components/hero";
import { Header } from "@/components/ui/header-section";
import { Experiences, Skillsets } from '../../components/subsections';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div
        className="flex flex-col items-center w-full h-fit"
      >
        <Header
          header="About Me"
          paragraph="Body Extra Large. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. However some fonts, called variable fonts, can support a range of weights with a more or less"
        />
        <Skillsets />
        <Experiences />
      </div>
    </main>
  )
}
