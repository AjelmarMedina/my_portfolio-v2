'use client';

import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useState } from "react";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollToPlugin);

export function ProjectGrid() {
  const [selected, setSelected] = useState<number | null>(null);
  const { contextSafe } = useGSAP();

  const scrollIntoView = contextSafe(() => {
    gsap.to(window, {
      scrollTo: "#project-grid",
      duration: 0.7,
    })
  })

  return (
    <div
    id="project-grid"
      className={cn("flex flex-row justify-center items-center w-full h-fit text-neutral-black px-4 pb-14 md:px-28 md:pb-24", (selected && "md:h-screen"))}
    >
      {selected === null && (
        <div className="w-full h-fit grid grid-rows-5 grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Button
              className="w-full aspect-[16/9] bg-project1 bg-accent-100"
              key={index}
              onClick={() => {
                setSelected(index);
                scrollIntoView();
              }}
            >
              {project.title}
            </Button>
          ))}
        </div>
      )}
      {selected !== null && (
        <div
          className="flex flex-row justify-center items-center w-full lg:px-28"
        >
          <Button
            className="w-full aspect-[16/9] bg-project1 bg-accent-100"
            onClick={() => setSelected(null)}
          >
            {projects[selected].title}
          </Button>
        </div>
      )}
    </div>
  )
}
