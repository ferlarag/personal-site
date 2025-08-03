import {
  forwardRef,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
} from "react";
import { cn } from "../../lib/utils";
import { Github, Globe, TabletSmartphone } from "lucide-react";

export const ProjectCard = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        className,
        "bg-zinc-100 relative flex flex-col mb-4 h-[250px] p-6 border-zinc-300 hover:border-purple-500",
      )}
      {...props}
    />
  );
});

export const ProjectCardPill = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        className,
        "text-xs py-1 px-2 font-medium bg-purple-500 text-white rounded-md absolute right-4 top-0 -translate-y-1/2",
      )}
    />
  );
});

export const ProjectCardLink = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <a
      target="_blank"
      ref={ref}
      className={cn(
        className,
        "flex gap-1 px-2 py-1.5 group items-center rounded-md font-medium border-zinc-100 bg-zinc-100 border transition-all hover:bg-purple-50 hover:border-purple-500 hover:text-purple-500 hover:shadow-lg hover:shadow-purple-200/80 shadow-none",
      )}
      {...props}
    />
  );
});

type IconType = "repo" | "website" | "ios";
export const ProjectCardIcon = ({
  className,
  icon,
}: {
  className?: string;
  icon: IconType;
}) => {
  const iconClass = "";
  switch (icon) {
    case "repo":
      return <Github className={cn(className, iconClass)} />;
    case "website":
      return <Globe className={cn(className, iconClass)} />;
    case "ios":
      return <TabletSmartphone className={cn(className, iconClass)} />;
  }
};

export const ProjectCardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return <h3 ref={ref} {...props} className={cn(className, "text-xl mb-2")} />;
});

export const ProjectCardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return <p {...props} ref={ref} className={cn(className)} />;
});
