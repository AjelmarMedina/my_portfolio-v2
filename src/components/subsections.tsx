'use client'

import { certifications, experiences, skills } from "@/lib/data"
import { cn } from "@/lib/utils"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useState } from "react"
import { Button, ButtonSet } from './ui/button'

// TODO: Customized border
// TODO: Suspense & Skeletons
// TODO: Text shifts layout for Experience and Certifications section

export function Skillsets() {
  const [selected, setSelected] = useState(0)
  
  return (
    <div
      className="flex flex-col justify-between items-center w-full h-fit px-4 py-14 bg-neutral-white text-neutral-black lg:flex-row md:space-x-[72px] md:px-28 md:py-24"
    >
      <div
        className="flex flex-col items-center space-y-10 w-fit lg:items-start"
      >
        <div className="w-full">
          <h1 className="min-w-full font-bold prose-display-md md:prose-display-lg">
            Skillset
          </h1>
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
            <span className="text-center w-fit prose-display-sm md:prose-display-md">
              {skills[selected].title}
            </span>
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
        <p className="prose-text-md md:prose-text-xl">
          {skills[selected].description}
        </p>
        <ButtonSet />
      </div>
      <div
        className="hidden w-fit lg:grid md:grid-cols-4 md:grid-rows-4 md:gap-4"
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
            <span className="text-center w-fit prose-display-sm md:prose-display-md">
              {experiences[selected].title}
            </span>
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
    <div
      className="flex flex-col justify-between items-center w-full h-fit px-4 py-14 bg-neutral-white text-neutral-black lg:flex-row md:space-x-[72px] md:px-28 md:py-24"
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
                  setSelected(selected > 0 ? selected - 1 : certifications.length -1)
                }}
              >
                <ChevronLeftIcon className="min-w-8 min-h-8"/>
              </Button>
            </div>
            <span className="text-center w-fit prose-display-sm md:prose-display-md">
              {certifications[selected].title}
            </span>
            <div className="lg:overflow-hidden lg:w-0 lg:focus-within:w-fit lg:focus-within:overflow-visible">
              <Button
                stroke="dark"
                className="transition-transform hover:cursor-pointer hover:translate-x-1"
                onClick={() => {
                  setSelected(selected < certifications.length -1 ? selected + 1 : 0)
                }}
              >
                <ChevronRightIcon className="min-w-8 min-h-8"/>
              </Button>
            </div>
          </div>
        </div>
        <p className="prose-text-md md:prose-text-xl">
          {certifications[selected].description}
        </p>
        <ButtonSet />
      </div>
      <div
        className="w-full min-h-[600px] hidden flex-col justify-center items-center space-y-6 lg:flex"
      >
        {certifications.map((certificate, index) => (
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
