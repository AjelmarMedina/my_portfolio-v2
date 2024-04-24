'use client';

import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
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
      className={cn("flex flex-row justify-center items-center w-full text-neutral-black px-4 pb-14 md:px-28 md:pb-24", (selected && "h-screen"))}
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
            <Card key={index} project={project} index={index}/>
        ))}
      </motion.div>
    )

    function Card(
      {index, project}:
      {index: number, project: { title: string; tags: string[]; description: string; bgUrl: string; }}
    ) {
      const [isHovering, setHovering] = useState(false);

      return (
        <Button
          className="w-full aspect-[16/9] bg-project1 bg-accent-100"
          onMouseOver={() => setHovering(true)}
          onMouseOut={() => setHovering(false)}
          onClick={() => {
            setSelected(index);
            scrollIntoView();
          }}
        >
          <motion.div
            className="flex flex-col justify-center items-center w-full h-full overflow-hidden"
          >
            <LayoutGroup>
              <motion.h3 layout>
                {project.title}
              </motion.h3>
              <AnimatePresence>
                {isHovering && (
                  <motion.p
                    className="w-full text-center text-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layout
                  >
                    {project.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </LayoutGroup>
          </motion.div>
        </Button>
      )
    }
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
        {selected !== null && (
          <Card project={projects[selected]} />
        )}
      </motion.div>
    )

    function Card(
      {project}:
      {project: { title: string; tags: string[]; description: string; bgUrl: string; }}
    ) {
      const [isHovering, setHovering] = useState(false);

      return (
        <Button
          className="w-full aspect-[16/9] bg-project1 bg-accent-100"
          onMouseOver={() => setHovering(true)}
          onMouseOut={() => setHovering(false)}
          onClick={() => {
            setSelected(null);
          }}
        >
          <motion.div
            className="flex flex-col justify-center items-center w-full h-full overflow-hidden"
          >
            <LayoutGroup>
              <motion.h3 layout>
                {project.title}
              </motion.h3>
              <AnimatePresence>
                {isHovering && (
                  <motion.p
                    className="w-full text-center text-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layout
                  >
                    {project.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </LayoutGroup>
          </motion.div>
        </Button>
      )
    }
  }

}
