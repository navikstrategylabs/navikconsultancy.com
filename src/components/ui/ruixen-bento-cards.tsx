import React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export interface BentoCardItem {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
}

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={20}
    height={20}
    strokeWidth="1.25"
    stroke="currentColor"
    className={cn("text-primary size-5", className)}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-2.5 -left-2.5" />
    <PlusIcon className="absolute -top-2.5 -right-2.5" />
    <PlusIcon className="absolute -bottom-2.5 -left-2.5" />
    <PlusIcon className="absolute -bottom-2.5 -right-2.5" />
  </>
);

const PlusCard: React.FC<BentoCardItem> = ({
  className = "",
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div
      className={cn(
        "group relative border border-dashed border-border rounded-2xl p-7 bg-surface-elevated min-h-[200px]",
        "flex flex-col justify-between transition-all hover:border-primary/40 hover:bg-surface",
        className,
      )}
    >
      <CornerPlusIcons />
      <div className="relative z-10 flex flex-col h-full">
        {Icon ? (
          <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-5">
            <Icon className="size-6" />
          </div>
        ) : null}
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

interface RuixenBentoCardsProps {
  items: BentoCardItem[];
  heading?: string;
  subheading?: string;
}

export default function RuixenBentoCards({ items, heading, subheading }: RuixenBentoCardsProps) {
  // Expect 5 items; apply bento spans
  const spans = [
    "lg:col-span-3 lg:row-span-2",
    "lg:col-span-3 lg:row-span-2",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-5">
      {items.map((item, i) => (
        <PlusCard key={item.title} {...item} className={spans[i] ?? ""} />
      ))}
      {(heading || subheading) && (
        <div className="sm:col-span-2 lg:col-span-6 max-w-2xl ml-auto text-right mt-2">
          {heading && (
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{heading}</h3>
          )}
          {subheading && <p className="text-muted-foreground text-lg">{subheading}</p>}
        </div>
      )}
    </div>
  );
}
