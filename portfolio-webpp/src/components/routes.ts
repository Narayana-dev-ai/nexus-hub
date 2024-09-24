import { ContactCard } from "./helper/ContactCard";
import { EducationCard } from "./helper/EducationCard";
import { ExperienceCard } from "./helper/ExperienceCard";
import { ProjectsCard } from "./helper/ProjectsCard";
import { SkillsCard } from "./helper/SkillsCard";
export interface RouteItem {
  path?: string;
  content: any;
}

export const Routes: RouteItem[] = [
  {
    path: "/",
    content: "",
  },
  {
    path: "/about",
    content: ContactCard,
  },
  {
    path: "/experience",
    content: ExperienceCard,
  },
  {
    path: "/skills",
    content: SkillsCard,
  },
  {
    path: "/education",
    content: EducationCard,
  },
  {
    path: "/projects",
    content: ProjectsCard,
  },
];
