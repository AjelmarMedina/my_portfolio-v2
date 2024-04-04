import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import * as React from "react"

import { cn } from "@/lib/utils"

// TODO: modify destructive states
// TODO: modify stroke styles
// TODO: modify ghost states
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap w-max h-min rounded-md text-5 leading-[18px] font-bold ring-offset-white transition-colors",  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300"
  ],
  {
    variants: {
      variant: {
        fill: "border-transparent",
        outline: "border-2 bg-transparent",
        ghost: "border-transparent bg-transparent",
        link: "border-transparent bg-transparent underline-offset-4 hover:underline",
      },
      fill: {
        dark: [
          "bg-neutral-black text-neutral-white",
          "hover:bg-neutral-700",
          "transition-transform hover:-translate-y-1",
        ],
        accent: [
          "bg-accent-accent text-neutral-black",
          "hover:bg-accent-400",
          "transition-transform hover:-translate-y-1",
        ],
        destructive: "bg-error-500 text-neutral-white",
      },
      outline: {
        dark: [
          "border-neutral-black text-neutral-black hover:border-neutral-700 hover:text-neutral-700",
          "hover:border-neutral-700 hover:text-neutral-700",
          "transition-transform hover:-translate-y-1",
        ],
        accent: [
          "border-accent-accent text-accent-accent",
          "hover:border-accent-400 hover:text-accent-400",
          "transition-transform hover:-translate-y-1",
        ],
        destructive: "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90"
      },
      stroke: {
        dark: "bg-neutral-black text-neutral-white",
        accent: "bg-accent-300",
        destructive: "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90"
      },
      size: {
        sm: "px-3 p-2",
        md: "px-5 py-3",
        lg: "px-6 py-4",
      },
    },
    compoundVariants: [
      {
        variant: "fill",
        fill: ["accent", "dark", "destructive"],
        size: ["sm", "md", "lg"],
      },
      {
        variant: "outline",
        outline: ["accent", "dark", "destructive"],
        size: ["sm", "md", "lg"],
      },
      {
        variant: ["ghost", "link"],
        stroke: ["accent", "dark", "destructive"],
        size: ["sm", "md", "lg"],
      },
    ],
    defaultVariants: {
      variant: "fill",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

/**
 * @param className className
 * @param variant ("fill", "outline", "ghost", "link") - Type of button
 * @param colorFill ("accent", "dark", "destructive") - background color for `fill` variant
 * @param colorOutline ("accent", "dark", "destructive") - border color for `outline` variant
 * @param colorText ("accent", "dark", "destructive") - border color for `outline` variant
 * @param size ('md' | 'sm' | 'lg' )
 * @param sizeIcon ('md' | 'sm' | 'lg' ) - static button sizes
 * @param asChild Link as child
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, fill, outline, stroke, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, fill, outline, stroke, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

/**
 * A simple button set with a accent primary and a dark secondary with default text
 */
export function ButtonSet() {
  return (
    <div className="flex flex-row px-0 space-x-4 w-min px-4sm:">
      <Button fill={"accent"} size={"lg"} asChild>
        <Link href={"https://www.linkedin.com/in/ajelmar-medina/"} target="_blank">
          Get in touch! <ArrowRight className="ml-2" />
        </Link>
      </Button>
      <Button variant={"outline"} outline={"dark"} size={"lg"} asChild>
        <Link href={"https://github.com/AjelmarMedina"} target="_blank">
          About me...
        </Link>
      </Button>
    </div>
  )
}
