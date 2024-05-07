'use client';

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { zillaSlab } from "./fonts";

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

export function Navbar() {
  let { scrollYBoundedProgress } = useBoundedScroll(400);
  let scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  );

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-8">
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
            href={""}
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
        <motion.nav
          style={{
            opacity: useTransform(
              scrollYBoundedProgressDelayed,
              [0, 1],
              [1, 0]
            ),
          }}
          className="flex space-x-4 text-sm font-medium text-neutral-white"
        >
          <a href="#projects">Projects</a>
          <a href="#about-me">About Me</a>
          <a href="#cta">Contact</a>
        </motion.nav>
      </div>
    </motion.header>
  )
}
