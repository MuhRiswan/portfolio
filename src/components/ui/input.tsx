import * as React from "react";
import { cn } from "@/lib/utils";

type InputVariant = "primary" | "secondary";

interface InputProps extends React.ComponentProps<"input"> {
  variant?: InputVariant;
}

const inputVariants = {
  primary:
    "bg-slate-900/50 border border-surface-border rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-base md:text-lg text-white placeholder:text-slate-700 transition-all outline-none focus:ring-primary focus:border-primary w-full",
  secondary: 
    "bg-slate-900/50 border border-surface-border rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-base md:text-lg text-white placeholder:text-slate-700 transition-all outline-none focus:ring-primary focus:border-primary w-full"
};

function Input({
  className,
  type,
  variant = "primary",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants[variant], className)}
      {...props}
    />
  );
}

export { Input };

