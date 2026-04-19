import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva("flex w-full rounded-2xl border border-surface-border bg-slate-900/50 text-white placeholder:text-slate-700 transition-all outline-none focus:ring-1 focus:ring-primary focus:border-primary disabled:cursor-not-allowed disabled:opacity-50", {
  variants: {
    variant: {
      primary: "border-surface-border focus:border-primary",
      secondary: "border-slate-700 bg-transparent focus:bg-slate-900/50",
    },
    inputSize: {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-3 text-sm",
      lg: "px-5 py-3 text-base md:text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    inputSize: "md",
  },
})

export interface InputProps extends Omit<React.ComponentProps<"input">, "size">, VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, variant, inputSize, type, ...props }, ref) => {
  return <input type={type} className={cn(inputVariants({ variant, inputSize, className }))} ref={ref} {...props} />
})

Input.displayName = "Input"

export { Input }
