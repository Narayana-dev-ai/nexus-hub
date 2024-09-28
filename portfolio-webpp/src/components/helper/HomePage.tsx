import React from "react";
import { EducationCard } from "./EducationCard";
import { ExperienceCard } from "./ExperienceCard";
import { ProjectsCard } from "./ProjectsCard";
import { SkillsCard } from "./SkillsCard";
import { AvCardHome } from "./AvCardHome";

export const HomePage = () => {
  return (
    <React.Fragment>
      <AvCardHome />
      <ExperienceCard />
      <SkillsCard />
      <ProjectsCard />
      <EducationCard />
    </React.Fragment>
  );
};
