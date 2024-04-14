'use client';
import { fetcher, skillsFb } from '@/lib/data';
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Button, ButtonSet } from '../ui/button';
import { Skeleton } from '../ui/skeleton';

// TODO: Customized border
// TODO: min-heights for each subsection
// TODO: Content Backgrounds + Grid Backgrounds
// TODO: Animate scroll trigger
// TODO: Animate transition state change
// TODO: Bring back GSAP

export function Skillsets() {
  const [selected, setSelected] = useState(0);
  const [skills, setSkills] = useState(skillsFb);
  const { data, isLoading } = useSWR("/data/skills", fetcher);

  useEffect(() => {
    if (!isLoading) setSkills(data.skills);
  }, [data, isLoading]);

  return (
    <div
      className="flex flex-col justify-between items-center w-full h-fit px-4 py-14 bg-neutral-white text-neutral-black lg:grid lg:grid-cols-2 md:gap-[72px] md:px-28 md:py-24"
    >
      <div
        className="flex flex-col items-center space-y-10 w-fit lg:items-start"
      >
        <div className="w-full">
          <h1 className="min-w-full font-bold prose-display-md text-center md:prose-display-lg lg:text-start">
            Skillset {isLoading}
          </h1>
          {/* Current Selected */}
          <div className="flex flex-row items-center justify-around min-w-full lg:justify-start">
            <div className="lg:overflow-hidden lg:w-0 lg:focus-within:w-fit lg:focus-within:overflow-visible">
              <Button
                stroke="dark"
                className="transition-transform hover:cursor-pointer hover:-translate-x-1"
                onClick={() => {
                  setSelected(selected > 0 ? selected - 1 : skills.length - 1);
                }}
              >
                <ChevronLeftIcon className="min-w-8 min-h-8" />
              </Button>
            </div>
            {isLoading && (
              <Skeleton className="w-full h-[30px] md:h-9" />
            )}
            {data && (
              <span className="text-center w-fit prose-display-sm md:prose-display-md">
                {skills[selected].title}
              </span>
            )}
            <div className="lg:overflow-hidden lg:w-0 lg:focus-within:w-fit lg:focus-within:overflow-visible">
              <Button
                stroke="dark"
                className="transition-transform hover:cursor-pointer hover:translate-x-1"
                onClick={() => {
                  setSelected(selected < skills.length - 1 ? selected + 1 : 0);
                }}
              >
                <ChevronRightIcon className="min-w-8 min-h-8" />
              </Button>
            </div>
          </div>
        </div>
        {/* Current Paragraph */}
        {isLoading && (
          <div className='flex flex-col w-full h-fit space-y-2'>
            <Skeleton className='w-full h-4 md:h-5' />
            <Skeleton className='w-full h-4 md:h-5' />
            <Skeleton className='w-12 h-4 md:h-5' />
          </div>
        )}
        {data && (
          <p className="prose-text-md md:prose-text-xl">
            {skills[selected].description}
          </p>
        )}
        <ButtonSet />
      </div>
      {/* grid */}
      <div
        className="hidden w-full lg:grid md:grid-cols-4 md:grid-rows-4 md:gap-4"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col justify-center items-center aspect-1 h-full w-full",
              "p-2 outline outline-[4px] rounded-lg outline-blue_Gray-300",
              "font-bold prose-text-md text-neutral-400 text-center",
              "select-none hover:cursor-pointer",
              "transition-all",
              { "outline-dashed outline-[2px] hover:outline-dashed hover:outline-[4px]": index != selected }
            )}
            onClick={() => setSelected(index)}
          >
            {!isLoading
              ? skill.title
              : (<Skeleton className='w-full h-4' />)}
          </div>
        ))}
      </div>
    </div>
  );
}
