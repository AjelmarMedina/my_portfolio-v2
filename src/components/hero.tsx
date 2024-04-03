import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { Button } from "./ui/button";
import { zillaSlab } from "./ui/fonts";

export default function Hero() {
  return (
    <div
      className="flex flex-col justify-between items-center min-w-full h-[100vh] bg-hero-radial-md md:flex-row"
    >
      <div className="hidden w-full h-full hero--radial-gradient__left bg-neutral-50 md:block">
        <Image
          src={"/hero-section/left1.jpg"}
          alt={"Image"}
          width={512}
          height={512}
          className="object-cover h-full"
          draggable="false"
          priority
        />
      </div>
      <Content />
      <div className="w-full overflow-hidden h-fit hero--radial-gradient__bottom bg-neutral-50 md:h-full md:hero--radial-gradient__right">
        <Image
          src={"/hero-section/right1.jpg"}
          alt={"Image"}
          width={512}
          height={512}
          className="object-cover w-full md:h-full"
          draggable="false"
          priority
        />
      </div>
    </div>
  )
}

function Content() {
  return (
    <div className="flex flex-col space-y-8 justify-center items-center w-fit#">
      {/* Heading */}
      <div className={cn("max-w-[375px] w-full prose-display-lg font-bold itali px-4 md:px-0 md:max-w-[28rem] md:prose-display-2xl", zillaSlab.className)}>
        <div className="flex flex-row w-full">
          <div className="flex flex-row justify-center px-8 bg-neutral-white text-neutral-black">
            Ajelmar
          </div>
        </div>
        <div className="flex flex-row-reverse w-full">
          <div className="flex flex-row justify-center px-8 bg-neutral-950 text-neutral-white ">
            Medina
          </div>
        </div>
      </div>
      {/* Subtitle */}
      <div className="w-full px-4 space-y-4 sm:px-0">
        <h1 className="font-medium w-fit prose-display-xs text-neutral-light md:w-max md:prose-display-md">
          Front-end Web Developer & Designer
        </h1>
        <h2 className="w-full prose-text-xs text-neutral-300 md:px-8 md:prose-text-xl">
          I am a Student who spends his free time learning to code and design websites from the ground up to deployment!
        </h2>
      </div>
      {/* Buttons */}
      <div className="flex flex-row px-0 space-x-4 w-min px-4sm:">
        <Button fill={"accent"} size={"lg"} asChild>
          <Link href={"https://www.linkedin.com/in/ajelmar-medina/"} target="_blank">
            Get in touch! <ArrowRight className="ml-2" />
          </Link>
        </Button>
        <Button variant={"outline"} outline={"accent"} size={"lg"} asChild>
          <Link href={"https://github.com/AjelmarMedina"} target="_blank">
            About me...
          </Link>
        </Button>
      </div>
    </div>
  )
}
