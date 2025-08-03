import type { PropsWithChildren, ReactNode } from "react";
import SectionWrapper from "./SectionWrapper";

interface SectionProps extends PropsWithChildren {
  headerText: string;
  subHeaderComponent?: ReactNode;
}

const Section = ({
  children,
  headerText,
  subHeaderComponent,
}: SectionProps) => {
  return (
    <SectionWrapper className="flex flex-col gap-4 md:flex-row">
      <div className="flex flex-col md:max-w-[300px] flex-1">
        <h2 className="text-zinc-700 font-mono uppercase">{headerText}</h2>
        {subHeaderComponent}
      </div>
      <div className="flex-1">{children}</div>
    </SectionWrapper>
  );
};

export default Section;
