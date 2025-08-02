import type { PropsWithChildren } from "react";

const Title = ({ children }: PropsWithChildren) => {
  return <h1 className="text-3xl">{children}</h1>;
};

export default Title;
