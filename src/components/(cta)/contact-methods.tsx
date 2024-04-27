'use client';

import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import Link from "next/link";
import { toast } from "../../lib/use-toast";
import { Button } from "../ui/button";

export function ContactMethods() {
  return (
    <div className="w-fit">
      <Button
        variant={"ghost"}
        onClick={() => {
          navigator.clipboard.writeText("ajelmarmedina@gmail.com")
          toast({
            title: "Copied Email Address to Clipboard",
            description: "Email: ajelmarmedina@gmail.com",
          })
        }}
      >
        <Mail width={16} height={16} />
      </Button>
      <Button variant={"ghost"} asChild>
        <Link href={"https://github.com/AjelmarMedina"} target="_blank">
          <GitHubLogoIcon />
        </Link>
      </Button>
      <Button variant={"ghost"} asChild>
        <Link href={"https://www.linkedin.com/in/ajelmar-medina/"} target="_blank">
          <LinkedInLogoIcon />
        </Link>
      </Button>
      <Button variant={"ghost"} asChild>
        <Link href={"https://twitter.com/AjelMedina"} target="_blank">
          <TwitterLogoIcon />
        </Link>
      </Button>
    </div>
  )
}
