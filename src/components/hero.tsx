import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { Button } from "./ui/button";
import { zillaSlab } from "./ui/fonts";

export default function Hero() {
  return (
    <div
      className="flex flex-col justify-center items-center overflow-clip w-full h-[100vh] bg-hero-radial-md text-center drop-shadow-2xl -space-y-8 md:space-y-0 md:flex-row md:-space-x-12"
    >
      <div className="hidden w-full h-full hero--radial-gradient__left bg-neutral-50 select-none md:block md:translate-x-[-50vw] md:animate-image-left-slide-in">
        <Image
          src={"/hero-section/left1.jpg"}
          alt={"Image"}
          width={512}
          height={512}
          className="object-cover w-full h-full"
          draggable="false"
          priority
        />
      </div>
      <Content />
      <div className="w-full z-0 overflow-hidden h-full hero--radial-gradient__bottom bg-neutral-50 select-none md:h-full md:hero--radial-gradient__right md:translate-x-[50vw] md:animate-image-right-slide-in transition-all">
        <Image
          src={"/hero-section/right1.jpg"}
          alt={"Image"}
          width={512}
          height={512}
          className="z-0 object-cover w-full h-full"
          draggable="false"
          priority
        />
      </div>
    </div>
  )
}

function Content() {
  return (
    <div className="z-10 flex flex-col items-center justify-center h-auto max-w-full max-h-full pt-16 space-y-8 transition-all w-full lg:pt-20 md:h-full">
      {/* Heading */}
      <div className={cn("max-w-[375px] w-full prose-display-lg font-bold itali px-4 md:px-0 md:max-w-[28rem] md:prose-display-2xl", zillaSlab.className)}>
        <div className="flex flex-row w-full">
          <div className="flex flex-row justify-center px-8 bg-neutral-white text-neutral-black animate-ajelmar-slide-in">
            Ajelmar
          </div>
        </div>
        <div className="flex flex-row-reverse w-full">
          <div className="flex flex-row justify-center px-8 bg-neutral-950 text-neutral-white animate-medina-slide-in">
            Medina
          </div>
        </div>
      </div>
      {/* Subtitle */}
      <div className="flex flex-col items-center w-full px-4 space-y-4 text-center md:opacity-0 sm:px-0 md:max-h-0 md:animate-fade-in--body">
        <h1 className="w-full font-medium prose-display-xs text-neutral-light md:w-max md:prose-display-md">
          Web Developer & Designer
        </h1>
        <h2 className="w-full prose-text-sm text-neutral-300 md:px-8 md:prose-text-xl">
          Make yourself known on the internet. From landing pages to full-on applications. I will handle it for you
        </h2>
      </div>
      {/* Buttons */}
      <div className="z-20 flex flex-row px-0 space-x-4 md:opacity-0 w-min sm:px-4 md:max-h-0 md:animate-fade-in--buttons">
        <Button fill={"accent"} size={"lg"} asChild>
          <Link href={"https://www.linkedin.com/in/ajelmar-medina/"} target="_blank">
            Get in touch! <ArrowRight className="ml-2" />
          </Link>
        </Button>
        <Button variant={"outline"} outline={"accent"} size={"lg"} asChild>
          <Link href={"#about-me"}>
            About me...
          </Link>
        </Button>
      </div>
      <div className="hidden opacity-0 md:bottom-4 animate-fade-in md:block">
        <ChevronDown className="w-10 h-10 md:w-12 md:h-12 text-neutral-light/60 animate-bounce" />
      </div>
    </div>
  )
}
