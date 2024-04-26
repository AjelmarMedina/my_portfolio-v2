'use client';

import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { X } from "lucide-react";
import { useState } from "react";
import { Badge } from "../ui/badge";
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
      className={cn("flex flex-row justify-center items-center w-full text-neutral-black px-4 pb-14 md:px-28 md:pb-24", (selected !== null && "h-screen"))}
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
        className="w-full h-fit flex flex-col justify-center items-center space-y-4 sm:grid grid-rows-5 grid-cols-2 gap-4 sm:space-y-0"
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
          style={(project.bgUrl.length ? {backgroundImage: `url('/projects/${project.bgUrl}`} : {})}
          className={cn(
            "w-full aspect-[16/9] bg-accent-50",
            (project.bgUrl.length && "bg-cover text-neutral-white p-0")
          )}
          onMouseOver={() => setHovering(true)}
          onMouseOut={() => setHovering(false)}
          onClick={() => {
            setSelected(index);
            scrollIntoView();
          }}
        >
          <motion.div
            className={cn(
              "flex flex-col justify-center items-center space-y-2 w-full h-full overflow-hidden",
              (project.bgUrl.length && "bg-neutral-black/50" )
            )}
          >
            <LayoutGroup>
              <motion.h3 layout className="w-full text-wrap md:prose-display-xs">
                {project.title}
              </motion.h3>
              <AnimatePresence>
                {isHovering && (
                  <motion.div
                    layout
                    className="flex flex-row flex-wrap space-x-1 justify-center items-center w-fit"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {project.tags.map((tag, index) => (
                      <Badge key={index}>
                        {tag}
                      </Badge>
                    ))}
                  </motion.div>
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
        <div className="flex-col justify-center items-center w-full h-fit space-y-6">
          <div
            style={(project.bgUrl.length ? {backgroundImage: `url('/projects/${project.bgUrl}`} : {})}
            className={cn(
              "relative flex w-full aspect-[16/9] rounded-lg ",
              (project.bgUrl.length ? "bg-cover text-neutral-white" : "bg-accent-100")
            )}
            onMouseOver={() => setHovering(true)}
            onMouseOut={() => setHovering(false)}
          >
            <motion.div
              className="flex flex-col justify-center items-start w-full h-full overflow-hidden"
            >
              <div className={cn(
                  "flex-col justify-center items-start space-y-4 w-[33%] transition-all p-6 h-full overflow-visible hidden md:flex",
                  (isHovering && "w-[50%] lg:w-[33%]"),
                  (project.bgUrl.length && "bg-dark-gradient")
                )}>
                <LayoutGroup>
                  <motion.h3
                    className="font-bold prose-display-xs"
                    layout
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div
                    layout
                    className="flex flex-row flex-wrap space-x-1 justify-start items-center w-full"
                  >
                    {project.tags.map((tag, index) => (
                      <Badge key={index}>
                        {tag}
                      </Badge>
                    ))}
                  </motion.div>
                  <AnimatePresence>
                    {isHovering && (<>
                      <motion.p
                        className="w-full text-left text-wrap prose-text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        layout
                      >
                        {project.description}
                      </motion.p>
                    </>)}
                  </AnimatePresence>
                </LayoutGroup>
              </div>
            </motion.div>
            <div className="absolute w-fit h-fit p-2 hidden md:block right-0 top-0">
              <Button
                variant={"fill"}
                fill={"light"}
                stroke={"dark"}
                className="w-fit h-fit p-0 "
                onClick={() => {
                  setSelected(null);
                }}
              >
                <X width={32} height={32}/>
              </Button>
            </div>
          </div>
          <div className="relative flex flex-col justify-start items-center w-full h-fit md:hidden">
            <h3 className="font-bold prose-display-xs">
              {project.title}
            </h3>
            <div className="flex flex-row flex-wrap space-x-1 justify-start items-center w-full">
              {project.tags.map((tag, index) => (
                <Badge key={index}>
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="w-full text-left text-wrap prose-text-lg">
              {project.description}
            </p>
            <div className="absolute w-fit h-fit px-2 block md:hidden right-0 top-0">
              <Button
                variant={"ghost"}
                className="p-0 w-fit h-fit"
                onClick={() => {
                  setSelected(null);
                }}
              >
                <X width={32} height={32}/>
              </Button>
            </div>
          </div>
        </div>
      )
    }
  }

}
