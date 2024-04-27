'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollToPlugin);

export function HeroButtonSet() {

  const { contextSafe } = useGSAP();

  return (
    <div className="z-20 flex flex-row px-0 space-x-4 md:opacity-0 w-min sm:px-4 md:max-h-0 md:animate-fade-in--buttons">
      <Button
        fill={"accent"}
        size={"lg"}
        onClick={contextSafe(() => {
          gsap.to(window, {
            scrollTo: "#cta",
            duration: 2,
          })
        })}
      >
        Get in touch! <ArrowRight className="ml-2" />
      </Button>
      <Button
        variant={"outline"}
        outline={"accent"}
        size={"lg"}
        onClick={contextSafe(() => {
          gsap.to(window, {
            scrollTo: "#about-me",
            duration: 2,
          })
        })}
      >
        About me...
      </Button>
    </div>
  )
}
