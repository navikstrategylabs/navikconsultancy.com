import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "onDark";

const baseClasses =
  "group relative inline-flex items-center overflow-hidden rounded-full text-base font-medium h-12 pl-7 pr-16 shadow-elegant transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap no-underline";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  onDark: "bg-white text-primary hover:bg-white/90 shadow-glow",
};

export function getStartedClasses(variant: Variant = "primary", className?: string) {
  return cn(baseClasses, variantClasses[variant], className);
}

export function GetStartedInner({ label, variant = "primary" }: { label: string; variant?: Variant }) {
  return <Inner label={label} variant={variant} />;
}

function Inner({ label, variant }: { label: string; variant: Variant }) {
  const chip =
    variant === "onDark"
      ? "bg-primary/10 text-primary"
      : "bg-primary-foreground/20 text-primary-foreground";
  return (
    <>
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
    </>
  );
}

export interface GetStartedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: Variant;
}

export const GetStartedButton = React.forwardRef<HTMLButtonElement, GetStartedButtonProps>(
  ({ label = "Get Started", className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      >
        <Inner label={label} variant={variant} />
      </button>
    );
  },
);
GetStartedButton.displayName = "GetStartedButton";

export interface GetStartedLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  variant?: Variant;
}

/** Anchor-styled variant for use with <Link asChild> from TanStack Router */
export const GetStartedLink = React.forwardRef<HTMLAnchorElement, GetStartedLinkProps>(
  ({ label = "Get Started", className, variant = "primary", ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      >
        <Inner label={label} variant={variant} />
      </a>
    );
  },
);
GetStartedLink.displayName = "GetStartedLink";
