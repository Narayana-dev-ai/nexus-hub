import React from "react";
import { ContactCard } from "./ContactCard";
import { EducationCard } from "./EducationCard";
import { ExperienceCard } from "./ExperienceCard";
import "./HomePage.scss";
import { ProjectsCard } from "./ProjectsCard";
import { SkillsCard } from "./SkillsCard";

export const HomePage = () => {
  return (
    <React.Fragment>
      <ContactCard />
      <ExperienceCard />
      <SkillsCard />
      <ProjectsCard />
      <EducationCard />
    </React.Fragment>
  );
};
