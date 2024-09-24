import { ContactCard } from "./ContactCard";
import { EducationCard } from "./EducationCard";
import { ExperienceCard } from "./ExperienceCard";
import "./HomePage.scss";
import { ProjectsCard } from "./ProjectsCard";
import { SkillsCard } from "./SkillsCard";

export const HomePage = () => {
  return (
    <div className="home__page">
      <ContactCard />
      <ExperienceCard />
      <SkillsCard />
      <ProjectsCard />
      <EducationCard />
    </div>
  );
};
