import {
  ProjectCard,
  ProjectCardIcon,
  ProjectCardLink,
  ProjectCardDescription,
  ProjectCardTitle,
  ProjectCardPill,
} from "./ui/ProjectCard";
import Section from "./ui/Section";

type Project = {
  name: string;
  description: string;
  links?: {
    repo?: string;
    website?: string;
    appStore?: string;
    googlePlay?: string;
  };
  badge?: "comming-soon";
};

const projects: Array<Project> = [
  {
    name: "Resu.me: an AI Resume Editor",
    description:
      "Resu.me helps Software Engineers check if they are a good fit for a company, highlight relevant experience for job applications and format resumes in an easy way. Web and Mobile comming soon!",
    links: {
      repo: "/",
      appStore: "/",
      website: "/",
    },
    badge: "comming-soon",
  },
  {
    name: "Vireo: AI powered customer support chatbot",
    description:
      "An easy to set up web widget for AI Customer Support that integrates with the most popular CRM platforms",
    links: {
      repo: "/",
      website: "/",
    },
    badge: "comming-soon",
  },
];
const Projects = () => {
  return (
    <Section headerText="Projects">
      <div>
        {projects.map((project) => {
          const repo = project.links?.repo;
          const website = project.links?.website;
          const appStore = project.links?.appStore;
          return (
            <ProjectCard className="last:mt-6">
              {project.badge === "comming-soon" && (
                <ProjectCardPill>Comming soon</ProjectCardPill>
              )}
              <ProjectCardTitle>{project.name}</ProjectCardTitle>
              <ProjectCardDescription>
                {project.description}
              </ProjectCardDescription>
              <div className="flex mt-3 gap-3 mt-auto">
                {repo && (
                  <ProjectCardLink href={repo}>
                    <ProjectCardIcon icon="repo" />
                    Repo
                  </ProjectCardLink>
                )}
                {website && (
                  <ProjectCardLink href={website}>
                    <ProjectCardIcon icon="website" />
                    Website
                  </ProjectCardLink>
                )}
                {appStore && (
                  <ProjectCardLink href={appStore}>
                    <ProjectCardIcon icon="ios" />
                    AppStore
                  </ProjectCardLink>
                )}
              </div>
            </ProjectCard>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
