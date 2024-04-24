'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollToPlugin);

export function HeroButtonSet() {

  const { contextSafe } = useGSAP();

  const handleBtnScrollTo = contextSafe(() => {
    gsap.to(window, {
      scrollTo: "#about-me",
      duration: 2,
    })
  })

  return (
    <div className="z-20 flex flex-row px-0 space-x-4 md:opacity-0 w-min sm:px-4 md:max-h-0 md:animate-fade-in--buttons">
      <Button fill={"accent"} size={"lg"} asChild>
        <Link href={"https://www.linkedin.com/in/ajelmar-medina/"} target="_blank">
          Get in touch! <ArrowRight className="ml-2" />
        </Link>
      </Button>
      <Button
        variant={"outline"}
        outline={"accent"}
        size={"lg"}
        onClick={handleBtnScrollTo}
      >
        About me...
      </Button>
    </div>
  )
}
