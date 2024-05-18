'use client';
import { fetcher, skillsFb } from '@/lib/data';
import { cn } from "@/lib/utils";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';
import { ButtonSet } from './button-set';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Skillsets() {
  const [selected, setSelected] = useState(0);
  const [skills, setSkills] = useState(skillsFb);
  const { data, isLoading } = useSWR("/data/skills", fetcher);
  const content = useRef(null);
  const grid = useRef(null);

  useEffect(() => {
    if (!isLoading) setSkills(data.skills);
  }, [data, isLoading]);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(content.current, {
        scrollTrigger: {
          trigger: content.current,
          toggleActions: "play none none reset",
        },
        opacity: 0,
        x: -128,
        duration: 1.5,
      })
      gsap.from(grid.current, {
        scrollTrigger: {
          trigger: grid.current,
          toggleActions: "play none none reset"
        },
        opacity: 0,
        x: 128,
        duration: 1.5,
      })
    })
  })

  function Grid() {
    return (
      <div
        className="hidden w-full lg:grid md:grid-cols-4 md:grid-rows-4 md:gap-4"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{ backgroundImage: isLoading 
              ? ""
              : `url('https://ufiaijqlzdh3kwxq.public.blob.vercel-storage.com/my-portfolio-v2/skillset/${skill.bgUrl}')`
            }}
            className={cn(
              "aspect-1 h-full w-full",
              "outline outline-[4px] rounded-lg outline-blue_Gray-300 bg-[length:80%] bg-no-repeat bg-center",
              "font-bold prose-text-md text-neutral-400 text-center",
              "select-none hover:cursor-pointer",
              "transition-all",
              { "outline-dashed outline-[2px] hover:outline-dashed hover:outline-[4px]": index != selected }
            )}
            onClick={() => setSelected(index)}
          >
            <div
              className="w-full h-full flex flex-col justify-center items-center p-2 rounded-lg bg-neutral-50/80"
            >
              {!isLoading
                ? skill.title
                : (<Skeleton className='w-full h-4' />
              )}
            </div>
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
    )
  }
  
  return (
    <div
      className="flex flex-col justify-between items-center w-full h-fit px-4 py-14 bg-neutral-white text-neutral-black lg:grid lg:grid-cols-2 md:gap-[72px] md:px-28 md:py-24"
    >
      <div
        style={{ backgroundImage: isLoading 
          ? ""
          : `url('https://ufiaijqlzdh3kwxq.public.blob.vercel-storage.com/my-portfolio-v2/skillset/${skills[selected].bgUrl}')` 
        }}
        className="flex flex-col justify-center items-center w-fit lg:min-h-[520px] lg:items-start bg-contain lg:bg-[length:80%] bg-center bg-no-repeat"
        ref={content}
      >
        <div className="w-full h-full lg:min-h-[520px] bg-neutral-50/90">
          <div className="flex flex-col justify-center items-center lg:items-start space-y-10 w-full">
            <div className="w-full">
              <h1 className="min-w-full font-bold prose-display-md text-center md:prose-display-lg lg:text-start">
                Skillset {isLoading}
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
                {skills[selected].description}
              </p>
            )}
            <ButtonSet />
          </div>
        </div>
      </div>
      <div className='w-full' ref={grid}>
        <Grid />
      </div>
    </div>
  );
}
