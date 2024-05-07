'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { CalendarCheck, Mail } from "lucide-react";
import Link from "next/link";
import { toast } from "../../lib/use-toast";
import { Button } from "../ui/button";

export function ContactMethods() {
  return (
    <div className="flex flex-row justify-between md:justify-center items-center w-full">
      <TooltipProvider>
        <Tooltip>
          <TooltipContent>
            <p>
              Copy my Email and contact me via Email!
            </p>
          </TooltipContent>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              className="px-2 md:px-5"
              onClick={() => {
                navigator.clipboard.writeText("ajelmarmedina@gmail.com")
                toast({
                  title: "Copied Email Address to Clipboard",
                  description: "Email: ajelmarmedina@gmail.com",
                })
              }}
            >
              <Mail width={24} height={24} />
            </Button>
          </TooltipTrigger>
        </Tooltip>

        <Tooltip>
          <TooltipContent>
            <p>
              Learn more on my GitHub!
            </p>
          </TooltipContent>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} className="px-2 md:px-5" asChild>
              <Link href={"https://github.com/AjelmarMedina"} target="_blank">
                <GitHubLogoIcon width={24} height={24} />
              </Link>
            </Button>
          </TooltipTrigger>
        </Tooltip>

        <Tooltip>
          <TooltipContent>
            <p>
              Connect with me on LinkedIn!
            </p>
          </TooltipContent>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} className="px-2 md:px-5" asChild>
              <Link href={"https://www.linkedin.com/in/ajelmar-medina/"} target="_blank">
                <LinkedInLogoIcon width={24} height={24} />
              </Link>
            </Button>
          </TooltipTrigger>
        </Tooltip>

        <Tooltip>
          <TooltipContent>
            <p>
              Send a DM on X!
            </p>
          </TooltipContent>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} className="px-2 md:px-5" asChild>
              <Link href={"https://twitter.com/AjelMedina"} target="_blank">
                <TwitterLogoIcon width={24} height={24} />
              </Link>
            </Button>
          </TooltipTrigger>
        </Tooltip>

        <Tooltip>
          <TooltipContent>
            <p>
              Schedule a meeting with me!
            </p>
          </TooltipContent>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} className="px-2 md:px-5" asChild>
              <Link href={"https://calendly.com/ajelmarmedina/contact"} target="_blank">
                <CalendarCheck width={24} height={24} />
              </Link>
            </Button>
          </TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
