'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollToPlugin);

export function ButtonSet() {

  const { contextSafe } = useGSAP();

  return (
    <div className="flex flex-row items-center px-0 space-x-4 w-min ">
      <Button
        fill={"accent"}
        size={"lg"}
        onClick={contextSafe(() => {
          gsap.to(window, {
            scrollTo: "#cta",
            duration: 1,
          })
        })}
      >
        Get in touch!
      </Button>
      <Button
        variant={"outline"}
        outline={"dark"}
        size={"lg"}
        asChild
      >
        <Link href={"https://www.linkedin.com/in/ajelmar-medina/"} target="_blank">
          About me <ArrowRight width={16} height={16} className="ml-2" />
        </Link>
      </Button>
    </div>
  )
}
