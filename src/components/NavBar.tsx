import { Github, Linkedin, Twitter } from "lucide-react";
import Title from "./ui/Title";
import SectionWrapper from "./ui/SectionWrapper";

const NavBar = () => {
  return (
    <SectionWrapper className="flex z-20 justify-between bg-white/70 backdrop-blur-md sticky top-0">
      <div>
        <Title>Fernando Lara</Title>
        <p className="font-mono uppercase">Software Engineer</p>
      </div>
      <div className="flex gap-4">
        <a target="_blank" className="p-2" href="https://www.x.com/ferlarag_">
          <Twitter />
        </a>
        <a
          className="p-2"
          target="_blank"
          href="https://www.linkedin.com/in/ferlarag/"
        >
          <Linkedin />
        </a>
        <a
          target="_blank"
          className="p-2"
          href="https://www.github.com/ferlarag"
        >
          <Github />
        </a>
      </div>
    </SectionWrapper>
  );
};

export default NavBar;
