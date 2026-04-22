import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "onDark";

export interface GetStartedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  asChild?: boolean;
  variant?: Variant;
}

export const GetStartedButton = React.forwardRef<HTMLButtonElement, GetStartedButtonProps>(
  (
    { label = "Get Started", className, asChild = false, variant = "primary", ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const base =
      "group relative inline-flex items-center overflow-hidden rounded-full text-base font-medium h-12 pl-6 pr-14 shadow-elegant transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

    const variants: Record<Variant, string> = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      onDark: "bg-white text-primary hover:bg-white/90 shadow-glow",
    };

    const chip =
      variant === "onDark"
        ? "bg-primary/10 text-primary"
        : "bg-primary-foreground/20 text-primary-foreground";

    return (
      <Comp ref={ref} className={cn(base, variants[variant], className)} {...props}>
        <span className="transition-opacity duration-500 group-hover:opacity-0">
          {label}
        </span>
        <i
          className={cn(
            "absolute right-1 top-1 bottom-1 rounded-full z-10 grid w-10 place-items-center transition-all duration-500 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95",
            chip,
          )}
        >
          <ChevronRight size={18} strokeWidth={2.25} aria-hidden="true" />
        </i>
      </Comp>
    );
  },
);
GetStartedButton.displayName = "GetStartedButton";
