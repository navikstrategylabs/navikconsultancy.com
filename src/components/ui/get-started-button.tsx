import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GetStartedButtonProps extends Omit<ButtonProps, "children"> {
  label?: string;
}

export const GetStartedButton = React.forwardRef<HTMLButtonElement, GetStartedButtonProps>(
  ({ label = "Get Started", className, size = "lg", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size={size}
        className={cn(
          "group relative overflow-hidden rounded-full bg-primary text-primary-foreground hover:bg-primary/90 pl-6 pr-14 h-12 shadow-elegant",
          className,
        )}
        {...props}
      >
        <span className="transition-opacity duration-500 group-hover:opacity-0">
          {label}
        </span>
        <i className="absolute right-1 top-1 bottom-1 rounded-full z-10 grid w-10 place-items-center transition-all duration-500 bg-primary-foreground/20 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-primary-foreground">
          <ChevronRight size={18} strokeWidth={2.25} aria-hidden="true" />
        </i>
      </Button>
    );
  },
);
GetStartedButton.displayName = "GetStartedButton";
