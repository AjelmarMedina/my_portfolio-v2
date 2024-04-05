'use client'

import { experiences, skills } from "@/lib/data"
import { cn } from "@/lib/utils"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useState } from "react"
import { ButtonSet } from './ui/button'

// TODO: Customized border
// TODO: Heading Spacing fix 
export function Skillsets() {
  const [selected, setSelected] = useState(0)
  
  return (
    <div
      className="flex flex-col justify-between items-center w-full h-fit px-4 py-14 bg-neutral-white text-neutral-black lg:flex-row md:space-x-[72px] md:px-28 md:py-24"
    >
      <div
        className="flex flex-col items-center w-fit space-y-10 lg:items-start"
      >
        <h1 className="min-w-full font-bold prose-display-md md:prose-display-lg">
          Skillset
        </h1>
        <div className="flex flex-row justify-around items-center min-w-full lg:justify-start">
          <ChevronLeftIcon 
            className="min-w-8 min-h-8 lg:hidden hover:cursor-pointer transition-transform hover:-translate-x-1"
            onClick={() => {
              setSelected(selected > 0 ? selected - 1 : skills.length -1)
            }}
          />
          <span className="w-fit prose-display-sm text-center md:prose-display-md">
            {skills[selected].title}
          </span>
          <ChevronRightIcon
            className="min-w-8 min-h-8 lg:hidden hover:cursor-pointer transition-transform hover:translate-x-1"
            onClick={() => {
              setSelected(selected < skills.length -1 ? selected + 1 : 0)
            }}
          />
        </div>
        <p className="prose-text-md md:prose-text-xl">
          {skills[selected].description}
        </p>
        <ButtonSet />
      </div>
      <div
        className="w-fit hidden lg:grid md:grid-cols-4 md:grid-rows-4 md:gap-4"
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
  
  return (
    <div
      className="flex flex-col justify-between items-center w-full h-fit px-4 py-14 bg-primary-100 text-neutral-black lg:flex-row-reverse md:space-x-[72px] md:space-x-reverse md:px-28 md:py-24"
    >
      <div
        className="flex flex-col items-center w-fit space-y-10 lg:items-start"
      >
        <h1 className="min-w-full font-bold prose-display-md md:prose-display-lg">
          Experiences
        </h1>
        <div className="flex flex-row justify-around items-center min-w-full lg:justify-start">
          <ChevronLeftIcon 
            className="min-w-8 min-h-8 lg:hidden hover:cursor-pointer transition-transform hover:-translate-x-1"
            onClick={() => {
              setSelected(selected > 0 ? selected - 1 : experiences.length -1)
            }}
          />
          <span className="w-fit prose-display-sm text-center md:prose-display-md">
            {experiences[selected].title}
          </span>
          <ChevronRightIcon
            className="min-w-8 min-h-8 lg:hidden hover:cursor-pointer transition-transform hover:translate-x-1"
            onClick={() => {
              setSelected(selected < experiences.length -1 ? selected + 1 : 0)
            }}
          />
        </div>
        <p className="prose-text-md md:prose-text-xl">
          {experiences[selected].description}
        </p>
        <ButtonSet />
      </div>
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
              {"border-dashed border-[2px] hover:border-dashed hover:border-[4px]": index != selected},
            )}
            onClick={() => setSelected(index)}
          >
            {experience.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Certifications() {
  const [selected, setSelected] = useState(0)
  
  return (
    <>
    </>
  )
}
