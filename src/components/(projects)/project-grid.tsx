'use client';

import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { animate, AnimatePresence, LayoutGroup, motion } from "framer-motion";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollToPlugin);

export function ProjectGrid() {
  const [selected, setSelected] = useState<number | null>(null);
  const [carouselAction, setCarouselAction] = useState<"next" | "prev">("next");
  const { contextSafe } = useGSAP();
  const projectGrid = useRef(null);
  const carouselItem = useRef(null)

  const scrollIntoView = contextSafe(() => {
    gsap.to(window, {
      scrollTo: "#project-grid",
      duration: 0.5,
    })
  })

  function incrementSelected(increment: number) {
    if (selected === null) return;

    let incremented = selected + increment;
    if (incremented >= projects.length) incremented = 0;
    else if (incremented < 0) incremented = projects.length - 1
    setSelected(incremented)
  }

  return (
    <div
      id="project-grid"
      className={cn("w-full text-neutral-black pb-14 md:pb-24", (selected !== null && "h-screen"))}
      ref={projectGrid}
    >
      <AnimatePresence mode="popLayout">
        {selected === null && (
          <div className="flex flex-row justify-center items-center w-full h-full px-4 md:px-28">
            <Grid />
          </div>
        )}
        {selected !== null && (
          <div className="flex flex-row justify-center items-center w-full h-full">
            <div className="flex flex-row justify-end w-28">
              <Button
                variant={"ghost"}
                className="w-fit h-fit p-0 left-0 hidden md:flex m-2"
                onClick={() => {
                  animate(carouselItem.current, { x: 256, opacity: 0 }, { duration: 0.7 })
                    .then(() => {
                      setCarouselAction("prev");
                      incrementSelected(-1);
                    })
                }}
              >
                <ChevronLeft width={40} height={40} />
              </Button>

            </div>
            <SelectedCard />
            <div className="flex flex-row justify-start w-28">
              <Button
                variant={"ghost"}
                className="w-fit h-fit p-0 right-0 hidden md:flex m-2"
                onClick={() => {
                  animate(carouselItem.current, { x: -256, opacity: 0 }, { duration: 0.7 })
                    .then(() => {
                      setCarouselAction("next");
                      incrementSelected(1);
                    })
                }}
              >
                <ChevronRight width={40} height={40} />
              </Button>
            </div>
          </div>
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
            ScrollTrigger.refresh(true);
          }}
        >
          <motion.div
            className={cn(
              "flex flex-col justify-center items-center space-y-2 w-full h-full overflow-hidden",
              (project.bgUrl.length && "bg-neutral-black/50 rounded-md" )
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
      const carouselAnimationVariants = {
        right: {
          x: 256,
          opacity: 0,
        },
        left: {
          x: -256,
          opacity: 0,
        }
      }
      
      function CarouselItem({action}: {action: "next" | "prev"}) {
        const [isHovering, setHovering] = useState(false);

        return (
          <motion.div
            ref={carouselItem}
            style={(project.bgUrl.length ? {backgroundImage: `url('/projects/${project.bgUrl}`} : {})}
            className={cn(
              "relative flex w-full aspect-[16/9] rounded-lg overflow-hidden",
              (project.bgUrl.length ? "bg-cover text-neutral-white" : "bg-accent-100")
            )}
            initial={action === "next" ? "right" : "left"}
            animate={{ opacity: 1, x: 0 }}
            variants={carouselAnimationVariants}
            transition={{ duration: 0.7 }}
            onMouseOver={() => setHovering(true)}
            onMouseOut={() => setHovering(false)}
          >
            <motion.div
              className="relative flex flex-col justify-center content-between w-full h-full overflow-hidden"
            >
              {/* Chevrons */}
              <Button
                variant={"fill"}
                fill={"light"}
                stroke={"dark"}
                className="w-fit h-fit p-0 absolute left-0 md:hidden m-2"
                onClick={() => {
                  animate(carouselItem.current, { x: 256, opacity: 0 }, { duration: 0.7 })
                    .then(() => {
                      setCarouselAction("prev");
                      incrementSelected(-1);
                    })
                }}
              >
                <ChevronLeft width={32} height={32} />
              </Button>
              <Button
                variant={"fill"}
                fill={"light"}
                stroke={"dark"}
                className="w-fit h-fit p-0 absolute right-0 md:hidden m-2"
                onClick={() => {
                  animate(carouselItem.current, { x: -256, opacity: 0 }, { duration: 0.7 })
                  .then(() => {
                      setCarouselAction("next");
                      incrementSelected(1);
                    })
                }}
              >
                <ChevronRight width={32} height={32} />
              </Button>
              {/* Gradient panel */}
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
                        className="w-[80%] text-left text-wrap prose-text-md"
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
            {/* Close Button */}
            <div className="absolute w-fit h-fit p-2 hidden md:block right-0 top-0">
              <Button
                variant={"fill"}
                fill={"light"}
                stroke={"dark"}
                className="w-fit h-fit p-0 "
                onClick={() => {
                  setSelected(null);
                  ScrollTrigger.refresh(true);
                }}
              >
                <X width={32} height={32}/>
              </Button>
            </div>
          </motion.div>
        )
      }

      return (
        <div className="flex-col justify-center items-center w-full h-fit space-y-6">
          {/* Default */}
          <CarouselItem action={carouselAction} />
          {/* Project Info */}
          <div className="relative flex flex-col justify-start items-center w-full h-fit md:hidden">
            <h3 className="font-bold text-center prose-display-xs text-wrap px-8">
              {projects[selected ?? 0].title}
            </h3>
            <div className="flex flex-row flex-wrap space-x-1 justify-center items-center w-full">
              {projects[selected ?? 0].tags.map((tag, index) => (
                <Badge key={index}>
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="w-full text-left text-wrap prose-text-lg">
              {projects[selected ?? 0].description}
            </p>
            <div className="absolute w-fit h-fit px-2 block md:hidden right-0 top-0">
              <Button
                variant={"ghost"}
                className="p-0 w-fit h-fit"
                onClick={() => {
                  setSelected(null);
                  ScrollTrigger.refresh(true);
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
