import { cn } from "@/lib/utils"
import Link from "next/link"
import { ContactMethods } from "../(cta)/contact-methods"
import { Button } from "./button"
import { zillaSlab } from "./fonts"

export function Footer() {
  return(
    <footer className="bg-primary-800 text-neutral-100 flex flex-col w-full px-4 py-14 md:py-12 md:px-14">
      <Content />
      <Attribution />
    </footer>
  )
}

function Content() {
  return (
    <div className="container mx-auto flex items-center lg:flex-row md:flex-nowrap flex-wrap flex-col space-y-4 lg:space-y-0">
      <Brand />
      <nav className="w-full md:w-fit flex-grow flex flex-col md:flex-row justify-end md:text-left text-center h-full md:space-y-0 space-y-2">
        <Projects />
        <AboutMe />
        <Blog />
      </nav>
    </div>
  )

  function Brand() {
    return (
      <Link
        href={"/"}
        target="_self"
        className={cn("w-full h-full flex flex-col lg:items-start justify-center items-center prose-display-sm font-bold", zillaSlab.className)}
      >
        <div className="flex flex-row w-fit h-full pr-6">
          <div className="flex flex-col justify-center bg-neutral-white text-neutral-black h-full px-2">
            Ajelmar
          </div>
        </div>
        <div className="flex flex-row w-fit h-full pl-6">
          <div className="flex flex-col justify-center bg-neutral-950 text-neutral-white h-full px-2">
            Medina
          </div>
        </div>
      </Link>
    )
  }

  function Projects() {
    const links = [
      {
        title: "Portfolio V2",
        href: "",
      },
      {
        title: "Portfolio V1",
        href: "",
      },
      {
        title: "Acme Dashboard",
        href: "",
      },
      {
        title: "AppCon",
        href: "",
      },
    ]

    return (
      <div className="h-full w-full md:w-fit px-4">
        <h2 className="prose-display-xs mb-3 font-bold text-center lg:text-start">Projects</h2>
        <Nav links={links} />
      </div>
    )
  }

  function AboutMe() {
    const links = [
      {
        title: "Skills",
        href: "",
      },
      {
        title: "Experience",
        href: "",
      },
      {
        title: "Awards and Certifications",
        href: "",
      },
      {
        title: "AppCon",
        href: "",
      },
    ]

    return (
      <div className="h-full w-full md:w-fit px-4">
        <h2 className="prose-display-xs mb-3 font-bold text-center lg:text-start">About Me</h2>
        <Nav links={links} />
      </div>
    )
  }

  function Blog() {
    const links = [
      {
        title: "Terms and Conditions",
        href: "",
      },
      {
        title: "Privacy Policy",
        href: "",
      },
      {
        title: "Services",
        href: "",
      },
      {
        title: "My Journey",
        href: "",
      },
    ]

    return (
      <div className="h-full w-full md:w-fit px-4">
        <h2 className="prose-display-xs font-bold mb-3 text-center lg:text-start">
          <Link href={"/blog"} target="_self">
            Blog
          </Link>
        </h2>
        <Nav links={links} />
      </div>
    )
  }

  type navLinks = {
    title: string;
    href: string;
  }[]

  function Nav({ links }: { links: navLinks }) {
    return (
      <nav className="flex flex-col w-full lg:w-fit">
        {links.map((link: {title: string, href: string}, index: number) => (
          <Button key={index} variant={"ghost"} className="px-0 font-normal w-full lg:w-max lg:justify-start" asChild>
            <Link className="text-gray-600 hover:text-gray-800" href={link.href}>
              {link.title}
            </Link>
          </Button>
        ))}
      </nav>
    )
  }
}

function Attribution() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          <Link href="https://github.com/AjelmarMedina" rel="noopener noreferrer" className="" target="_blank">
            © 2024 Ajelmar Medina
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <ContactMethods />
        </span>
      </div>
    </div>
  )
}
