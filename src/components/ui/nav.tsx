'use client';

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion';
import gsap from "gsap";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { zillaSlab } from "./fonts";

// TODO: Separate Landing Nav and default Nav

let clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

function useBoundedScroll(threshold: number) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, threshold],
    [0, 1]
  );

  useEffect(() => {
    return scrollY.on("change", (current) => {
      let previous = scrollY.getPrevious() ?? 0;
      let diff = current - previous;
      let newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
    });
  }, [threshold, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export function Navbar({ isLanding }: { isLanding: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { replace } = useRouter();
  const { contextSafe } = useGSAP();
  let { scrollYBoundedProgress } = useBoundedScroll(400);
  let scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  );

  return (
    <motion.header
      initial={isLanding && { opacity: 0 }}
      animate={isLanding && { opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      style={{
        height: useTransform(
          scrollYBoundedProgressDelayed,
          [0, 1],
          [64, 50]
        ),
        backgroundColor: useMotionTemplate`rgb(0 48 102 / ${useTransform(
          scrollYBoundedProgressDelayed,
          [0, 1],
          [1, 0.1]
        )})`,
      }}
      className="fixed inset-x-0 flex h-16 shadow-2xl backdrop-blur-md z-50"
    >
      <div className="mx-auto flex w-full items-center justify-between px-4 md:px-20 z-10">
        {/* Logo */}
        <motion.div
          style={{
            scale: useTransform(
              scrollYBoundedProgressDelayed,
              [0, 1],
              [1, 0.9]
            ),
          }}
          className="flex origin-left items-center h-full"
        >
          <Link
            href={"/"}
            className={cn("w-full h-full flex flex-col justify-stretch items-stretch prose-text-lg font-bold", zillaSlab.className)}
          >
            <div className="flex flex-row w-full h-full pr-6">
              <div className="flex flex-col justify-center bg-neutral-white text-neutral-black h-full px-2">
                Ajelmar
              </div>
            </div>
            <div className="flex flex-row w-full h-full pl-6">
              <div className="flex flex-col justify-center bg-neutral-950 text-neutral-white h-full px-2">
                Medina
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Nav */}
        <motion.nav
          style={{
            opacity: useTransform(
              scrollYBoundedProgressDelayed,
              [0, 1],
              [1, 0]
            ),
          }}
          className="flex flex-row justify-end text-sm font-medium text-neutral-100"
        >
          <div className="w-full h-full sm:flex space-x-4 hidden">
            <NavBtn idSelector="projects">
              Projects
            </NavBtn>
            <NavBtn idSelector="about-me">
              About Me
            </NavBtn>
            <NavBtn idSelector="cta">
              Contact
            </NavBtn>
            <NavBtn>
              <Link href={"/blog"}>
                Blog
              </Link>
            </NavBtn>
          </div>

          {/* Mobile Nav Menu Button */}
          <motion.div
            className="w-fit h-fit"
            animate={{ rotate: menuOpen ? 90 : 0}}
          >
            <Button
              variant={"ghost"}
              stroke={"light"}
              className="flex sm:hidden p-0 h-full aspect-1"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <Menu strokeWidth={3} />
            </Button>
          </motion.div>
        </motion.nav>
      </div>

      {/* Mobile Nav */}
      <motion.nav
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: menuOpen ? "100vh" : 0, opacity: menuOpen ? 1 : 0 }}
        className={cn(
          "prose-display-sm fixed w-screen z-0 pt-24 bg-primary-primary flex-col justify-start items-center space-y-8",
          (menuOpen ? "flex opacity-100" : "hidden opacity-0")
        )}
      >
        <NavBtn fillWidth={true} idSelector="projects">
          Projects
        </NavBtn>
        <NavBtn fillWidth={true} idSelector="about-me">
          About Me
        </NavBtn>
        <NavBtn fillWidth={true} idSelector="cta">
          Contact
        </NavBtn>
        <NavBtn fillWidth={true} asChild>
          <Link href={"/blog"}>
            Blog
          </Link>
        </NavBtn>
      </motion.nav>
    </motion.header>
  )

  function NavBtn({ fillWidth = false, asChild = false, idSelector, children }:
    {
      fillWidth?: boolean;
      asChild?: boolean
      idSelector?: string;
      children: React.ReactNode;
    }
  ) {
    return (<>{fillWidth
      ? (
        <Button
          variant={"ghost"}
          stroke={"light"}
          className="p-0 h-fit w-full leading-[38px]"
          asChild = {asChild}
          onClick={idSelector 
            ? contextSafe(() => {
              setMenuOpen(false);
              replace(`${pathname}#${idSelector}`);
              gsap.to(window, {
                scrollTo: `#${idSelector}`,
                duration: 1,
              })
            }) : () => {}
          }
        >
          {children}
        </Button>
      ) : (
        <Button
          variant={"ghost"}
          stroke={"light"}
          asChild = {asChild}
          onClick={idSelector 
            ? contextSafe(() => {
              gsap.to(window, {
                scrollTo: `#${idSelector}`,
                duration: 1,
                onComplete: () => replace(`${pathname}#${idSelector}`),
              })
            }) : () => {}
          }
        >
          {children}
        </Button>
      )
    }</>)
  }

}

