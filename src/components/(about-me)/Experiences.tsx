'use client';
import { experiencesFb, fetcher } from '@/lib/data';
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Button, ButtonSet } from '../ui/button';
import { Skeleton } from '../ui/skeleton';


export function Experiences() {
  const [selected, setSelected] = useState(0);
  const [experiences, setExperiences] = useState(experiencesFb);
  const { data, isLoading } = useSWR("/data/experiences", fetcher);

  useEffect(() => {
    if (!isLoading) setExperiences(data.experiences);
  }, [data, isLoading]);

  function Grid() {
    return (
      <div
        className="hidden w-full min-h-[600px] lg:grid md:grid-cols-2 md:grid-rows-3 md:gap-0.5"
      >

        {experiences.map((experience, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col justify-center items-center h-full w-full bg-neutral-50",
              "p-2 border-[4px] rounded-lg border-blue_Gray-300",
              "font-bold prose-text-md text-neutral-400 text-center",
              "select-none hover:cursor-pointer",
              "transition-all",
              { "border-dashed border-[2px] hover:border-dashed hover:border-[4px]": index != selected }
            )}
            onClick={() => setSelected(index)}
          >
            {!isLoading
              ? experience.title
              : (<Skeleton className='w-[75%] h-4' />)}
          </div>
        ))}
      </div>
    )
  }
  
  function Subheading() {
    return (
      <div className="flex flex-row items-center justify-around min-w-full lg:justify-start">
        <div className="lg:overflow-hidden lg:w-0 lg:focus-within:w-fit lg:focus-within:overflow-visible">
          <Button
            stroke="dark"
            className="transition-transform hover:cursor-pointer hover:-translate-x-1"
            onClick={() => {
              setSelected(selected > 0 ? selected - 1 : experiences.length - 1);
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
            {experiences[selected].title}
          </span>
        )}
        <div className="lg:overflow-hidden lg:w-0 lg:focus-within:w-fit lg:focus-within:overflow-visible">
          <Button
            stroke="dark"
            className="transition-transform hover:cursor-pointer hover:translate-x-1"
            onClick={() => {
              setSelected(selected < experiences.length - 1 ? selected + 1 : 0);
            }}
          >
            <ChevronRightIcon className="min-w-8 min-h-8" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      className="flex flex-col justify-between items-center w-full h-fit px-4 py-14 bg-primary-100 text-neutral-black lg:grid lg:grid-cols-2 md:gap-[72px] md:space-x-reverse md:px-28 md:py-24"
    >
      <Grid />
      <div
        className="flex flex-col items-center space-y-10 w-fit lg:items-start"
      >
        <div className="w-full">
          <h1 className="min-w-full font-bold prose-display-md text-center md:prose-display-lg lg:text-start">
            Experiences
          </h1>
          <Subheading />
        </div>
        {isLoading && (
          <div className='flex flex-col w-full h-fit space-y-2'>
            <Skeleton className='w-full h-4 md:h-5' />
            <Skeleton className='w-full h-4 md:h-5' />
            <Skeleton className='w-12 h-4 md:h-5' />
          </div>
        )}
        {data && (
          <p className="prose-text-md md:prose-text-xl">
            {experiences[selected].description}
          </p>
        )}
        <ButtonSet />
      </div>
    </div>
  );
}