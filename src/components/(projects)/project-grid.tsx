'use client';

import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";
import { Button } from "../ui/button";

export function ProjectGrid() {
  const [selected, setSelected] = useState<number | null>(null);
  const logger = useCallback(() => {
    console.log(selected);
    
  }, [selected])
  
  return (
    <div
        className={cn("flex flex-row justify-center items-center w-full h-fit text-neutral-black px-4 pb-14 md:px-28 md:pb-24", (selected && "md:h-screen"))}
    >
      {selected === null && (
        <div className="w-full h-fit grid grid-rows-5 grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Button
              className="w-full aspect-[16/9] bg-project1 bg-accent-100"
              key={index}
              onClick={() => setSelected(index)}
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
