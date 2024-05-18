import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { zillaSlab } from "../ui/fonts";
import { HeroButtonSet } from "./button-set";

export function Content() {
  return (
    <div className="z-10 flex flex-col items-center justify-center h-auto max-w-full max-h-full space-y-8 transition-all w-full pt-24 md:h-full">
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
      <HeroButtonSet />
      <div className="hidden opacity-0 md:bottom-4 animate-fade-in md:block">
        <ChevronDown className="w-10 h-10 md:w-12 md:h-12 text-neutral-light/60 animate-bounce" />
      </div>
    </div>
  );
}
