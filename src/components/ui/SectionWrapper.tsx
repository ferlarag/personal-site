import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

const SectionWrapper = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(className, "border-b border-zinc-200 p-6 last:border-b-0")}
      {...props}
    />
  );
});

export default SectionWrapper;
