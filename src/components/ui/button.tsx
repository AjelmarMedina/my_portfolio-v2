import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap spacing-x-1 rounded-md text-sm font-medium ring-offset-white transition-colors",  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300"
  ],
  {
    variants: {
      variant: {
        fill: "border-transparent",
        outline:
          "border-2 border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900",
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost: " hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
      },
      fill: {
        dark: "bg-neutral-black text-neutral-white",
        accent: "bg-accent-300",
        destructive: "bg-red-500 text-neutral-50"
      },
      outline: {
        dark: "bg-neutral-black text-neutral-white",
        accent: "bg-accent-300",
        destructive: "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90"
      },
      text: {
        dark: "bg-neutral-black text-neutral-white",
        accent: "bg-accent-300",
        destructive: "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90"
      },
      size: {
        sm: "h-9 rounded-md px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 rounded-md px-8",
      },
      sizeIcon: {
        sm: "h-9 rounded-md px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 rounded-md px-8",
      }
    },
    compoundVariants: [
      {
        variant: "fill",
        fill: ["accent", "dark", "destructive"],
      },
      {
        variant: "outline",
        outline: ["accent", "dark", "destructive"]
      },
      {
        variant: ["ghost", "link"],
        text: ["accent", "dark", "destructive"],
      },
    ],
    defaultVariants: {
      variant: "fill",
      fill: "dark",
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
  ({ className, variant, fill: colorFill, outline: colorOutline, text: colorText, size, sizeIcon, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, fill: colorFill, outline: colorOutline, text: colorText, size, sizeIcon, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
