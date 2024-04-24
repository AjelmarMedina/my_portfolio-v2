'use client';

import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
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
      duration: 0.5,
    })
  })

  return (
    <div
      id="project-grid"
      className={cn("flex flex-row justify-center items-center w-full text-neutral-black px-4 pb-14 md:px-28 md:pb-24", (selected && "md:h-screen"))}
    >
      <AnimatePresence mode="popLayout">
        {selected === null && (
          <Grid />
        )}
        {selected !== null && (
          <SelectedCard />
        )}
      </AnimatePresence>
    </div>
  )

  function Grid() {
    return (
      <motion.div
        key={"grid"}
        className="w-full h-fit flex flex-col justify-center items-center space-y-4 sm:grid grid-rows-5 grid-cols-2 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {projects.map((project, index) => (
          <Button
            className="w-full aspect-[16/9] bg-project1 bg-accent-100"
            key={index}
            onClick={() => {
              setSelected(index);
              scrollIntoView();
            } }
          >
            {project.title}
          </Button>
        ))}
      </motion.div>
    )
  }

  function SelectedCard() {
    return (
      <motion.div
        key={"selected"}
        className="flex flex-row justify-center items-center w-full lg:px-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Button
          className="w-full aspect-[16/9] bg-project1 bg-accent-100"
          onClick={() => setSelected(null)}
        >
          {selected !== null && projects[selected].title}
        </Button>
      </motion.div>
    )
  }

}
