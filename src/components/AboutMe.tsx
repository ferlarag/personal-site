import { BriefcaseBusiness, MapPin, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import Section from "./ui/Section";
import profilePic from "../assets/fernando_lara_profile_picture.png";

type Info = {
  desc: string;
  icon: ReactNode;
  smallText?: ReactNode;
};

const info: Array<Info> = [
  {
    desc: "La Paz, El Salvador 🏄🏽",
    icon: <MapPin className="shrink-0 text-purple-500" />,
  },
  {
    desc: "Currently Working at Mazama.ai",
    icon: <BriefcaseBusiness className="shrink-0 text-purple-500" />,
    smallText: (
      <p className="text-sm font-medium text-zinc-400">Bend, Oregon (Remote)</p>
    ),
  },
  {
    desc: "I'm creating web apps and tools for developers with React, Typescript and NodeJS",
    icon: <Sparkles className="shrink-0 text-purple-500" />,
  },
];

const AboutMe = () => {
  return (
    <Section
      headerText="About Me"
      subHeaderComponent={
        <img
          className="mt-4 md:max-w-[200px]"
          width={300}
          height={300}
          src={profilePic}
          alt="Fernando Lara Front End Engineer"
        />
      }
    >
      <div className="flex flex-col md:pt-10 gap-4">
        {info.map((item) => (
          <div className="flex gap-2.5">
            {item.icon}
            <div className="flex flex-col gap-0.5">
              <p>{item.desc}</p>
              {item.smallText}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AboutMe;
