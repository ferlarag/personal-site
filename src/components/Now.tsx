import { BadgeCheck } from "lucide-react";
import Section from "./ui/Section";

const nowSection = [
  "Creating an AI chatbot for customer support",
  "Shipping updates to Resu.me every sunday",
  "Getting married this year!",
];

const Now = () => {
  return (
    <Section headerText="Things I'm doing now">
      <ul className="flex flex-col gap-2">
        {nowSection.map((item) => {
          return (
            <div className="flex gap-3 items-center">
              <BadgeCheck className="text-purple-500 size-5" />
              {item}
            </div>
          );
        })}
      </ul>
    </Section>
  );
};

export default Now;
