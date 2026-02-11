import * as React from "react";

import { cn } from "@/lib/utils";

type TextareaVariant = "primary" | "secondary";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  variant?: TextareaVariant;
}

const textareaVariants = {
  primary:
    "bg-slate-900/50 border border-surface-border rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-base md:text-lg text-white placeholder:text-slate-700 transition-all outline-none focus:ring-primary focus:border-primary w-full h-32 sm:h-40 resize-none",
  secondary:
    "border border-surface-border bg-slate-900/50 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-base md:text-lg text-white placeholder:text-slate-700 transition-all outline-none focus:ring-primary focus:border-primary w-full h-32 sm:h-40 resize-none"
};

function Textarea({ className, variant = "primary", ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants[variant], className)}
      {...props}
    />
  );
}

export { Textarea };
