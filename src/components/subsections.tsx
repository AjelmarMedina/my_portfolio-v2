'use client'

import { certificationsFb, experiencesFb, skillsFb } from '@/lib/data';
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Button, ButtonSet } from './ui/button';
import { Skeleton } from './ui/skeleton';

// TODO: Customized border
// TODO: min-heights for each subsection
// TODO: DB fetch + Skeletons for `Experiences` & `Certifications` subsections
// TODO: Content Backgrounds + Grid Backgrounds

const fetcher = (url: string) => fetch(url).then(r => r.json())

export function Skillsets() {
  const [selected, setSelected] = useState(0)
  const [skills, setSkills] = useState(skillsFb)
  const { data, isLoading } = useSWR("/data/skills", fetcher);
  
  useEffect(() => {
    if (!isLoading) setSkills(data.skills);
  }, [data, isLoading])
  
  return (
    <div
      className="flex flex-col justify-between items-center w-full h-fit px-4 py-14 bg-neutral-white text-neutral-black lg:grid lg:grid-cols-2 md:gap-[72px] md:px-28 md:py-24"
    >
      <div
        className="flex flex-col items-center space-y-10 w-fit lg:items-start"
      >
        <div className="w-full">
          <h1 className="min-w-full font-bold prose-display-md md:prose-display-lg">
            Skillset { isLoading }
          </h1>
          {/* Current Selected */}
          <div className="flex flex-row items-center justify-around min-w-full lg:justify-start">
            <div className="lg:overflow-hidden lg:w-0 lg:focus-within:w-fit lg:focus-within:overflow-visible">
              <Button 
                stroke="dark" 
                className="transition-transform hover:cursor-pointer hover:-translate-x-1"
                onClick={() => {
                  setSelected(selected > 0 ? selected - 1 : skills.length -1)
                }}
              >
                <ChevronLeftIcon className="min-w-8 min-h-8"/>
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
                  setSelected(selected < skills.length -1 ? selected + 1 : 0)
                }}
              > 
                <ChevronRightIcon className="min-w-8 min-h-8"/>
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
        {isLoading && skills.map((skill, index) => (
          <div 
            key={index} 
            className={cn(
              "flex flex-col justify-center items-center aspect-1 w-full h-full",
              "p-2 outline outline-[4px] rounded-lg outline-blue_Gray-300",
              "font-bold prose-text-md text-neutral-400 text-center",
              "select-none hover:cursor-pointer",
              "transition-all",
              {"outline-dashed outline-[2px] hover:outline-dashed hover:outline-[4px]": index != selected},
            )}
            onClick={() => setSelected(index)}
          >
            <Skeleton className='w-full h-4' />
          </div>
          
        ))}
        {data && skills.map((skill, index) => (
          <div 
            key={index} 
            className={cn(
              "flex flex-col justify-center items-center aspect-1 h-full w-full",
              "p-2 outline outline-[4px] rounded-lg outline-blue_Gray-300",
              "font-bold prose-text-md text-neutral-400 text-center",
              "select-none hover:cursor-pointer",
              "transition-all",
              {"outline-dashed outline-[2px] hover:outline-dashed hover:outline-[4px]": index != selected},
            )}
            onClick={() => setSelected(index)}
          >
            {skill.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Experiences() {
  const [selected, setSelected] = useState(0)
  const [experiences, setExperiences] = useState(experiencesFb)
  const { data, isLoading } = useSWR("/data/experiences", fetcher);
  
  useEffect(() => {
    if (!isLoading) setExperiences(data.experiences);
  }, [data, isLoading])
  
  return (
    <div
      className="flex flex-col justify-between items-center w-full h-fit px-4 py-14 bg-primary-100 text-neutral-black lg:grid lg:grid-cols-2 md:gap-[72px] md:space-x-reverse md:px-28 md:py-24"
    >
      <div
        className="hidden w-full min-h-[600px] lg:grid md:grid-cols-2 md:grid-rows-3 md:gap-0.5"
      >
        {isLoading && experiences.map((experience, index) => (
          <div
            key={index} 
            className={cn(
              "flex flex-col justify-center items-center h-full w-full bg-neutral-50",
              "p-2 border-[4px] rounded-lg border-blue_Gray-300",
              "font-bold prose-text-md text-neutral-400 text-center",
              "select-none hover:cursor-pointer",
              "transition-all",
              {"border-dashed border-[2px] hover:border-dashed hover:border-[4px]": index != selected},
            )}
            onClick={() => setSelected(index)}
          >
            <Skeleton className='w-full h-4' />
          </div>
        ))}
        {data && experiences.map((experience, index) => (
          <div
            key={index} 
            className={cn(
              "flex flex-col justify-center items-center h-full w-full bg-neutral-50",
              "p-2 border-[4px] rounded-lg border-blue_Gray-300",
              "font-bold prose-text-md text-neutral-400 text-center",
              "select-none hover:cursor-pointer",
              "transition-all",
              {"border-dashed border-[2px] hover:border-dashed hover:border-[4px]": index != selected},
            )}
            onClick={() => setSelected(index)}
          >
            {experience.title}
          </div>
        ))}
      </div>
      <div
        className="flex flex-col items-center space-y-10 w-fit lg:items-start"
      >
        <div className="w-full">
          <h1 className="min-w-full font-bold prose-display-md md:prose-display-lg">
            Experiences
          </h1>
          <div className="flex flex-row items-center justify-around min-w-full lg:justify-start">
            <div className="lg:overflow-hidden lg:w-0 lg:focus-within:w-fit lg:focus-within:overflow-visible">
              <Button
                stroke="dark"
                className="transition-transform hover:cursor-pointer hover:-translate-x-1"
                onClick={() => {
                  setSelected(selected > 0 ? selected - 1 : experiences.length -1)
                }}
              >
                <ChevronLeftIcon className="min-w-8 min-h-8"/>
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
                  setSelected(selected < experiences.length -1 ? selected + 1 : 0)
                }}
              >
                <ChevronRightIcon className="min-w-8 min-h-8"/>
              </Button>
            </div>
          </div>
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
  )
}

export function Certifications() {
  const [selected, setSelected] = useState(0)
  
  return (
    <div
      className="flex flex-col justify-between items-center w-full h-fit px-4 py-14 bg-neutral-white text-neutral-black lg:grid lg:grid-cols-2 md:gap-[72px] md:px-28 md:py-24"
    >
      <div
        className="flex flex-col items-center space-y-10 w-fit lg:items-start"
      >
        <div className="w-full">
          <h1 className="min-w-full font-bold prose-display-md md:prose-display-lg">
            Awards & Certifications
          </h1>
          <div className="flex flex-row items-center justify-around min-w-full lg:justify-start">
            <div className="lg:overflow-hidden lg:w-0 lg:focus-within:w-fit lg:focus-within:overflow-visible">
              <Button
                stroke="dark"
                className="transition-transform hover:cursor-pointer hover:-translate-x-1"
                onClick={() => {
                  setSelected(selected > 0 ? selected - 1 : certificationsFb.length -1)
                }}
              >
                <ChevronLeftIcon className="min-w-8 min-h-8"/>
              </Button>
            </div>
            <span className="text-center w-fit prose-display-sm md:prose-display-md">
              {certificationsFb[selected].title}
            </span>
            <div className="lg:overflow-hidden lg:w-0 lg:focus-within:w-fit lg:focus-within:overflow-visible">
              <Button
                stroke="dark"
                className="transition-transform hover:cursor-pointer hover:translate-x-1"
                onClick={() => {
                  setSelected(selected < certificationsFb.length -1 ? selected + 1 : 0)
                }}
              >
                <ChevronRightIcon className="min-w-8 min-h-8"/>
              </Button>
            </div>
          </div>
        </div>
        <p className="prose-text-md md:prose-text-xl">
          {certificationsFb[selected].description}
        </p>
        <ButtonSet />
      </div>
      <div
        className="w-full min-h-[600px] hidden flex-col justify-center items-center space-y-6 lg:flex"
      >
        {certificationsFb.map((certificate, index) => (
          <div
            key={index} 
            className={cn(
              "flex flex-col justify-center items-center grow h-full w-full",
              "p-2 outline outline-[4px] rounded-lg outline-blue_Gray-300",
              "font-bold prose-text-md text-neutral-400 text-center",
              "select-none hover:cursor-pointer",
              "transition-all",
              {"outline-dashed outline-[2px] hover:outline-dashed hover:outline-[4px]": index != selected},
            )}
            onClick={() => setSelected(index)}
          >
            {certificate.title}
          </div>
        ))}
      </div>
    </div>
  )
}
